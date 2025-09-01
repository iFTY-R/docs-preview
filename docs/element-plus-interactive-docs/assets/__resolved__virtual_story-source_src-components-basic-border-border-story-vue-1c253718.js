const __resolved__virtual_storySource_srcComponentsBasicBorderBorderStoryVue = `<script setup lang="ts">\r
const radiusGroup = ref([\r
  {\r
    name: 'No Radius',\r
    type: '',\r
  },\r
  {\r
    name: 'Small Radius',\r
    type: 'small',\r
  },\r
  {\r
    name: 'Large Radius',\r
    type: 'base',\r
  },\r
  {\r
    name: 'Round Radius',\r
    type: 'round',\r
  },\r
])\r
\r
function getValue(type: string) {\r
  const getCssVarValue = (prefix: string, type: string) =>\r
    getComputedStyle(document.documentElement).getPropertyValue(\r
      \`--el-\${prefix}-\${type}\`,\r
    )\r
  return getCssVarValue('border-radius', type)\r
}\r
\r
const shadowGroup = ref([\r
  {\r
    name: 'Basic Shadow',\r
    type: '',\r
  },\r
  {\r
    name: 'Light Shadow',\r
    type: 'light',\r
  },\r
  {\r
    name: 'Lighter Shadow',\r
    type: 'lighter',\r
  },\r
  {\r
    name: 'Dark Shadow',\r
    type: 'dark',\r
  },\r
])\r
\r
function getCssVarName(type: string) {\r
  return \`--el-box-shadow\${type ? '-' : ''}\${type}\`\r
}\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Basic/Border"\r
    icon="teenyicons:border-radius-solid"\r
    source=" "\r
    :layout="{\r
      type: 'grid',\r
      width: 260,\r
    }"\r
  >\r
    <Variant title="Border style">\r
      <table class="demo-border">\r
        <tbody>\r
          <tr>\r
            <td class="text">\r
              Name\r
            </td>\r
            <td class="text">\r
              Thickness\r
            </td>\r
            <td class="line">\r
              Demo\r
            </td>\r
          </tr>\r
          <tr>\r
            <td class="text">\r
              Solid\r
            </td>\r
            <td class="text">\r
              1px\r
            </td>\r
            <td class="line">\r
              <div />\r
            </td>\r
          </tr>\r
          <tr>\r
            <td class="text">\r
              Dashed\r
            </td>\r
            <td class="text">\r
              2px\r
            </td>\r
            <td class="line">\r
              <div class="dashed" />\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </Variant>\r
    <Variant title="Radius">\r
      <div class="demo-radius">\r
        <el-col\r
          v-for="(radius, i) in radiusGroup"\r
          :key="i"\r
          :xs="{ span: 12 }"\r
        >\r
          <div class="title">\r
            {{ radius.name }}\r
          </div>\r
          <code class="code-value">border-radius: {{ getValue(radius.type) || '0px' }}</code>\r
          <div\r
            class="radius"\r
            :style="{\r
              borderRadius: radius.type\r
                ? \`var(--el-border-radius-\${radius.type})\`\r
                : '',\r
            }"\r
          />\r
        </el-col>\r
      </div>\r
    </Variant>\r
    <Variant title="Shadow">\r
      <div class="shadow-box">\r
        <div\r
          v-for="(shadow, i) in shadowGroup"\r
          :key="i"\r
          class="shadow-item"\r
        >\r
          <div\r
            class="shadow"\r
            :style="{\r
              boxShadow: \`var(\${getCssVarName(shadow.type)})\`,\r
            }"\r
          />\r
          <span>\r
            {{ shadow.name }}\r
          </span>\r
          <code\r
            class="code-value"\r
          >\r
            {{ getCssVarName(shadow.type) }}\r
          </code>\r
        </div>\r
      </div>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
.demo-border .text {\r
  width: 15%;\r
}\r
.demo-border .line {\r
  width: 70%;\r
}\r
.demo-border .line div {\r
  width: 100%;\r
  height: 0;\r
  border-top: 1px solid var(--el-border-color);\r
}\r
.demo-border .line .dashed {\r
  border-top: 2px dashed var(--el-border-color);\r
}\r
\r
.demo-radius .title {\r
  color: var(--el-text-color-regular);\r
  font-size: 18px;\r
  margin: 10px 0;\r
}\r
\r
.demo-radius .radius {\r
  height: 40px;\r
  width: 70%;\r
  border: 1px solid var(--el-border-color);\r
  border-radius: 0;\r
  margin-top: 20px;\r
}\r
\r
.shadow-box {\r
  box-sizing: border-box;\r
  display: flex;\r
  flex-wrap: wrap;\r
  justify-content: space-between;\r
  align-items: center;\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
.shadow-item {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  width: 11.5rem;\r
  margin: auto;\r
}\r
\r
.shadow {\r
  display: inline-flex;\r
  width: 7.5rem;\r
  height: 7.5rem;\r
  margin: 0.5rem;\r
}\r
\r
.code-value {\r
  border: 1px solid var(--el-border-color);\r
  background-color: var(--el-fill-color-light);\r
  font-size: 16px;\r
  margin: 10px 0;\r
  white-space: nowrap;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsBasicBorderBorderStoryVue as default
};
