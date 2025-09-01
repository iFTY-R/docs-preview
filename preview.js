import Fastify from 'fastify';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fastifyStatic from '@fastify/static';

// Directories to serve on separate ports
const elementPlusDirs = [
  'element-plus',
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mainServer = Fastify({ logger: false });
const port = 8890;
const docsPath = resolve(__dirname, 'docs');

// Function to create a Fastify server for a specific directory
const createServer = async (dirName, port) => {
  const server = Fastify({ logger: false });
  const dirPath = resolve(docsPath, dirName);

  // Register static file serving
  await server.register(fastifyStatic, {
    root: dirPath,
    prefix: '/'
  });

  // Serve index.html for all routes to support SPA routing
  server.setNotFoundHandler(async (request, reply) => {
    return reply.sendFile('index.html', dirPath);
  });

  // Serve index.html for the root path
  server.get('/', async (request, reply) => {
    return reply.sendFile('index.html', dirPath);
  });

  try {
    await server.listen({ port, host: '0.0.0.0' });
    console.log(`Serving ${dirName} at http://localhost:${port}`);
    return server;
  } catch (err) {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use for ${dirName}.`);
    } else {
      console.error(`Error starting server for ${dirName}:`, err);
    }
    return null;
  }
};

// Start all servers
const startServers = async () => {
  try {
    // Start main docs server
    await mainServer.register(fastifyStatic, {
      root: docsPath,
      prefix: '/'
    });

    // Serve index.html for all routes in the main server
    mainServer.setNotFoundHandler(async (request, reply) => {
      return reply.sendFile('index.html', docsPath);
    });

    // Serve index.html for the root path
    mainServer.get('/', async (request, reply) => {
      return reply.sendFile('index.html', docsPath);
    });

    await mainServer.listen({ port, host: '0.0.0.0' });
    console.log(`Main server running at http://localhost:${port}`);

    // Start individual servers for element-plus directories
    const servers = [];
    for (let i = 0; i < elementPlusDirs.length; i++) {
      const dir = elementPlusDirs[i];
      const serverPort = 9000 + i;
      const server = await createServer(dir, serverPort);
      if (server) {
        servers.push(server);
      }
    }

    // Handle process termination
    process.on('SIGINT', async () => {
      console.log('\nShutting down servers...');
      await mainServer.close();
      
      for (const server of servers) {
        await server.close();
      }
      
      console.log('All servers have been terminated');
      process.exit(0);
    });

  } catch (err) {
    console.error('Failed to start servers:', err);
    process.exit(1);
  }
};

// Start all servers
startServers();
