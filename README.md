# Pure Admin Preview

一个基于 Fastify 的多文档站点预览服务器，用于同时托管和预览多个前端框架的文档站点。

## 项目概述

Pure Admin Preview 是一个轻量级的文档预览服务器，专门设计用于同时服务多个前端框架和库的文档站点。该项目使用 Fastify 框架构建，支持静态文件服务和 SPA（单页应用）路由，能够在不同端口上同时运行多个文档站点。

### 主要特性

- 🚀 **高性能**: 基于 Fastify 框架，提供快速的静态文件服务
- 📚 **多站点支持**: 同时托管多个文档站点，每个站点运行在独立端口
- 🔄 **SPA 路由支持**: 自动处理单页应用的路由，支持前端路由刷新
- 🛠 **易于配置**: 简单的配置即可添加新的文档站点
- 🔧 **开发友好**: 支持热重载和实时预览

### 支持的文档站点

当前项目包含以下前端框架和库的文档：

- **Element Plus** - Vue 3 组件库文档
- **Element UI** - Vue 2 组件库文档
- **Pinia** - Vue 状态管理库文档
- **Pure Admin** - 后台管理系统文档
- **Vant** - 移动端 Vue 组件库文档
- **Vite** - 前端构建工具文档
- **Vue** - Vue.js 框架文档
- **Vue Router** - Vue 路由库文档
- **VueUse** - Vue 组合式 API 工具集文档

## 安装指南

### 环境要求

- Node.js >= 16.0.0
- pnpm >= 8.0.0（推荐使用 pnpm 作为包管理器）

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd preview
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **启动服务**
   ```bash
   pnpm start
   ```

## 使用说明

### 启动服务器

运行以下命令启动所有文档服务器：

```bash
pnpm start
```

### 访问文档站点

服务器启动后，您可以通过以下地址访问不同的文档站点：

- **主文档服务器**: http://localhost:8890
- **Element Plus 文档**: http://localhost:9000
- **其他文档站点**: 根据配置在相应端口访问

### 添加新的文档站点

1. 将文档文件放置在 `docs/` 目录下的相应文件夹中
2. 在 `preview.js` 文件中的 `elementPlusDirs` 数组中添加新的目录名
3. 重启服务器

```javascript
const elementPlusDirs = [
  'element-plus',
  'your-new-docs', // 添加新的文档目录
];
```

### 配置说明

- **主服务器端口**: 8890（可在 `preview.js` 中修改 `port` 变量）
- **子服务器端口**: 从 9000 开始递增
- **文档根目录**: `docs/`
- **主机地址**: `0.0.0.0`（允许外部访问）

## 项目结构

```
preview/
├── docs/                    # 文档文件目录
│   ├── element-plus/       # Element Plus 文档
│   ├── element-ui/         # Element UI 文档
│   ├── pinia/              # Pinia 文档
│   ├── pure-admin/         # Pure Admin 文档
│   ├── vant/               # Vant 文档
│   ├── vite/               # Vite 文档
│   ├── vue/                # Vue 文档
│   ├── vue-router/         # Vue Router 文档
│   └── vueuse/             # VueUse 文档
├── preview.js              # 主服务器文件
├── package.json            # 项目配置文件
├── pnpm-lock.yaml         # 依赖锁定文件
└── README.md              # 项目说明文档
```

## 功能特性

### 静态文件服务

- 高效的静态文件服务，支持各种文件类型
- 自动 MIME 类型检测
- 支持缓存控制

### SPA 路由支持

- 自动处理 404 错误，重定向到 `index.html`
- 支持前端路由的深层链接
- 兼容各种 SPA 框架

### 多端口服务

- 主服务器和子服务器独立运行
- 避免端口冲突的自动处理
- 优雅的服务器关闭处理

### 错误处理

- 端口占用检测和错误提示
- 服务器启动失败的错误处理
- 优雅的进程终止处理

## 开发指南

### 本地开发

1. 修改 `preview.js` 文件以添加新功能
2. 使用 `pnpm start` 启动开发服务器
3. 服务器支持热重载，修改后自动重启

### 调试模式

如需启用详细日志，可以修改 Fastify 配置：

```javascript
const mainServer = Fastify({ logger: true }); // 启用日志
```

### 性能优化

- 使用 Fastify 的内置缓存机制
- 启用 gzip 压缩（可选）
- 配置适当的缓存头

## 贡献指南

我们欢迎所有形式的贡献！请遵循以下步骤：

### 提交代码

1. **Fork 项目**
   ```bash
   git fork <repository-url>
   ```

2. **创建功能分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **提交更改**
   ```bash
   git commit -m "Add: 描述您的更改"
   ```

4. **推送分支**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **创建 Pull Request**

### 代码规范

- 使用 ES6+ 语法
- 遵循 JavaScript Standard Style
- 添加适当的注释
- 确保代码可读性

### 提交信息规范

使用以下格式提交代码：

- `Add: 新增功能`
- `Fix: 修复问题`
- `Update: 更新功能`
- `Remove: 删除功能`
- `Docs: 文档更新`

### 问题报告

如果您发现了 bug 或有功能建议，请：

1. 检查是否已有相关 issue
2. 创建新的 issue，详细描述问题
3. 提供复现步骤和环境信息
4. 如可能，提供解决方案建议

## 常见问题

### Q: 端口被占用怎么办？

A: 服务器会自动检测端口占用并显示错误信息。您可以：
- 关闭占用端口的程序
- 修改 `preview.js` 中的端口配置

### Q: 如何添加新的文档站点？

A: 将文档文件放在 `docs/` 目录下，并在 `elementPlusDirs` 数组中添加目录名。

### Q: 支持 HTTPS 吗？

A: 当前版本仅支持 HTTP。如需 HTTPS，可以使用反向代理（如 Nginx）或修改代码添加 SSL 支持。

### Q: 如何自定义服务器配置？

A: 修改 `preview.js` 文件中的相关配置项，如端口、主机地址等。

## 许可证信息

本项目采用 [ISC License](https://opensource.org/licenses/ISC) 许可证。

```
ISC License

Copyright (c) 2024, Pure Admin Preview

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERchantability AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ANTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

## 联系方式

- 项目主页: [GitHub Repository]
- 问题反馈: [GitHub Issues]
- 文档站点: http://localhost:8890

---

感谢您使用 Pure Admin Preview！如果这个项目对您有帮助，请考虑给我们一个 ⭐️。