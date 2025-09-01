// Document configuration
const docsConfig = {
  documents: [
    {
      title: "Pure Admin",
      description: "Pure Admin 是一个免费开源的中后台管理系统模板。使用最新技术栈开发，开箱即用，帮助您快速搭建企业级中后台产品原型。",
      url: "./pure-admin/",
      buttonText: "查看文档",
    },
    {
      title: "@pureadmin/utils",
      description: "常用的工具函数（utils、hooks），共140个工具函数，帮助提高开发效率",
      url: "./pure-admin-utils-docs/",
      buttonText: "查看文档",
    },
    {
      title: "Vant",
      description: "Vant 是一个轻量、可靠的移动端组件库，于 2017 年开源，目前持续维护中。",
      url: "./vant/",
      buttonText: "查看文档",
    },
    {
      title: "Element Plus",
      description: "Element Plus 是一套为开发者、设计师和产品经理准备的基于 Vue 3 的桌面端组件库。",
      url: "http://localhost:9000/zh-CN/component/overview.html",
      buttonText: "查看文档",
    },
    {
      title: "Element UI",
      description: "Element UI 是一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。",
      url: "http://localhost:8890/element-ui#/zh-CN/component/installation",
      buttonText: "查看文档",
    },
    {
      title: "Element Plus 交互文档",
      description: "Element Plus 的交互式文档，提供实时预览和代码编辑功能，帮助您更快地学习和使用组件。",
      url: "./element-plus-interactive-docs/",
      buttonText: "查看交互文档",
    },
    {
      title: "Vue",
      description: "Vue 是一套用于构建用户界面的渐进式框架。",
      url: "./vue/",
      buttonText: "查看文档",
    },
    {
      title: "Vue Router",
      description: "Vue.js 的官方路由，为 Vue.js 提供富有表现力、可配置的、方便的路由",
      url: "./vue-router/",
      buttonText: "查看文档",
    },
    {
      title: "Pinia",
      description: "符合直觉的，Vue.js 状态管理库。类型安全、可扩展性以及模块化设计。甚至让你忘记正在使用的是一个状态库。",
      url: "./pinia/zh/",
      buttonText: "查看文档",
    },
    {
      title: "VueUse",
      description: "Vue 组合式工具集。Vue 必备的组合式工具集",
      url: "./vueuse/",
      buttonText: "查看文档",
    },
    {
      title: 'vite',
      description: '卓越的 Web 开发构建工具，Vite 是一个超快的前端构建工具，赋能下一代 Web 应用的发展',
      url: "./vite/",
      buttonText: "查看文档",
    },
  ],
};

// Function to create document cards
function createDocumentCards() {
  const container = document.querySelector('.docs-grid');
  if (!container) return;

  // Clear existing content
  container.innerHTML = '';

  // Create and append document cards
  docsConfig.documents.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'doc-card';

    card.innerHTML = `
      <div class="card-header">
        <h2>${ doc.title }</h2>
      </div>
      <div class="card-body">
        <p class="card-desc">
          ${ doc.description }
        </p>
        <a href="${ doc.url }" class="btn" target="_blank" rel="noopener noreferrer">${ doc.buttonText }</a>
      </div>
    `;

    container.appendChild(card);
  });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createDocumentCards);
