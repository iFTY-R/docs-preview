const __resolved__virtual_storySource_srcComponentsBasicColorColorStoryVue = `<script setup lang="ts">\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Basic/Color"\r
    :layout="{\r
      type: 'single',\r
      iframe: true,\r
    }"\r
    icon="ic:outline-color-lens"\r
  >\r
    <Variant title="Basic Usage" source=" ">\r
      <h1>\r
        Color\r
      </h1>\r
      <p>\r
        Element Plus uses a specific set of palettes to specify colors to provide a consistent look and feel for the products you build.\r
      </p>\r
      <h2>Main Color</h2>\r
      <p>\r
        The main color of Element Plus is bright and friendly blue.\r
      </p>\r
      <MainColor />\r
      <h2>Secondary Color</h2>\r
      <p>\r
        Besides the main color, you need to use different scene colors in different scenarios (for example, dangerous color indicates dangerous operation)\r
      </p>\r
      <SecondaryColors />\r
      <h2>\r
        Neutral Color\r
      </h2>\r
      <p>\r
        Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure.\r
      </p>\r
      <NeutralColor />\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style lang="scss">\r
.demo-color-box {\r
  position: relative;\r
  border-radius: 4px;\r
  padding: 20px;\r
  margin: 8px 0;\r
  height: 112px;\r
  box-sizing: border-box;\r
  color: var(--el-color-white);\r
  font-size: 14px;\r
\r
  .bg-color-sub {\r
    width: 100%;\r
    height: 40px;\r
    left: 0;\r
    bottom: 0;\r
    position: absolute;\r
\r
    .bg-blue-sub-item {\r
      height: 100%;\r
      display: inline-block;\r
\r
      &:first-child {\r
        border-radius: 0 0 0 var(--el-border-radius-base);\r
      }\r
    }\r
\r
    .bg-secondary-sub-item {\r
      height: 100%;\r
      display: inline-block;\r
      &:first-child {\r
        border-radius: 0 0 0 var(--el-border-radius-base);\r
      }\r
    }\r
  }\r
\r
  .value {\r
    margin-top: 2px;\r
  }\r
}\r
\r
.demo-color-box-lite {\r
  color: var(--el-text-color-primary);\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsBasicColorColorStoryVue as default
};
