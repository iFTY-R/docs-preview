const __resolved__virtual_storySource_srcComponentsNavigationMenuMenuStoryVue = `<script setup lang="ts">\r
import type { MenuProps } from 'element-plus'\r
import {\r
  Location,\r
} from '@element-plus/icons-vue'\r
\r
const basicData = reactive({\r
  mode: 'vertical' as MenuProps['mode'],\r
  defaultActive: 1,\r
  collapse: false,\r
  ellipsis: false,\r
  bgColor: '#FFF',\r
  textColor: '#303133',\r
  activeTextColor: '#409EFF',\r
  uniqueOpened: false,\r
  menuTrigger: 'hover' as MenuProps['menuTrigger'],\r
  router: false,\r
  collapseTransition: true,\r
  popperEffect: 'light' as MenuProps['popperEffect'],\r
})\r
\r
const basicSource = computed(() => {\r
  return \`<el-menu\r
  default-active="\${basicData.defaultActive}"\${isAttribute(\r
    basicData.mode === 'horizontal',\r
    'mode="horizontal"',\r
  )}\${isAttribute(\r
    basicData.collapse && basicData.mode === 'vertical',\r
    'collapse',\r
  )}\${isAttribute(\r
    basicData.ellipsis && basicData.mode === 'horizontal',\r
    ':ellipsis="false"',\r
  )}\${isAttribute(\r
    basicData.bgColor !== '#FFF',\r
    \`background-color="\${basicData.bgColor}"\`,\r
  )}\${isAttribute(\r
    basicData.textColor !== '#303133',\r
    \`text-color="\${basicData.textColor}"\`,\r
  )}\${isAttribute(\r
    basicData.activeTextColor !== '#409EFF',\r
    \`active-text-color="\${basicData.activeTextColor}"\`,\r
  )}\${isAttribute(\r
    basicData.uniqueOpened,\r
    ':unique-opened="true"',\r
  )}\${isAttribute(\r
    basicData.menuTrigger === 'click' && basicData.mode === 'horizontal',\r
    'menu-trigger="click"',\r
  )}\${isAttribute(\r
    basicData.router,\r
    'router',\r
  )}\${isAttribute(\r
    !basicData.collapseTransition,\r
    'collapse-transition="false"',\r
  )}\${isAttribute(\r
    basicData.popperEffect === 'dark',\r
    'popper-effect="light"',\r
  )}\r
>\r
  <el-menu-item\r
    v-for="item in menuData"\r
    v-if="!item.children"\r
    :key="item.index"\r
    :index="item.index"\r
    :disabled="item.disabled"\r
  >\r
    <template #title>\r
      <span>{{ item.title }}</span>\r
    </template>\r
  </el-menu-item>\r
  <el-sub-menu\r
    v-for="item in menuData"\r
    v-if="item.children"\r
    :key="item.index"\r
    :index="item.index"\r
    :disabled="item.disabled"\r
  >\r
    <template #title>\r
      {{ item.title }}\r
    </template>\r
    <el-menu-item\r
      v-for="child in item.children"\r
      :key="child.index"\r
      :index="child.index"\r
      :disabled="child.disabled"\r
    >\r
      <template #title>\r
        <span>{{ child.title }}</span>\r
      </template>\r
    </el-menu-item>\r
  </el-sub-menu>\r
<\\/el-menu>\r
\r
<script setup lang="ts">\r
const menuData = [\r
  {\r
    index: '1',\r
    title: 'Navigator One',\r
  },\r
  {\r
    index: '2',\r
    title: 'Workspace',\r
    children: [\r
      {\r
        index: '2-1',\r
        title: 'item one',\r
      },\r
      {\r
        index: '2-2',\r
        title: 'item two',\r
      },\r
      {\r
        index: '2-3',\r
        title: 'item three',\r
      },\r
      {\r
        index: '2-4',\r
        title: 'item four',\r
        children: [\r
          {\r
            index: '2-4-1',\r
            title: 'item one',\r
          },\r
          {\r
            index: '2-4-2',\r
            title: 'item two',\r
          },\r
          {\r
            index: '2-4-3',\r
            title: 'item three',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    index: '3',\r
    title: 'Info',\r
    disabled: true,\r
  },\r
  {\r
    index: '4',\r
    title: 'Orders',\r
  },\r
]\r
<\\/script>\r
  \`\r
})\r
<\/script>\r
\r
<!-- icon from https://icones.js.org/collection/all?s=menu -->\r
<template>\r
  <Story\r
    title="Navigation/Menu"\r
    icon="bi:menu-button-wide-fill"\r
    :layout="{\r
      type: 'grid',\r
      width: 600,\r
    }"\r
  >\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <el-col\r
        :span="\r
          basicData.mode === 'vertical' || basicData.ellipsis\r
            ? 12 : 100"\r
      >\r
        <el-menu\r
          :default-active="String(basicData.defaultActive)"\r
          :mode="basicData.mode"\r
          :collapse="basicData.collapse"\r
          :ellipsis="basicData.ellipsis"\r
          :background-color="basicData.bgColor"\r
          :text-color="basicData.textColor"\r
          :active-text-color="basicData.activeTextColor"\r
          :unique-opened="basicData.uniqueOpened"\r
          :menu-trigger="basicData.menuTrigger"\r
          :router="basicData.router"\r
          :collapse-transition="basicData.collapseTransition"\r
          :popper-effect="basicData.popperEffect"\r
        >\r
          <el-menu-item index="1">\r
            <template #title>\r
              <el-icon><location /></el-icon>\r
              <span>Navigator One</span>\r
            </template>\r
          </el-menu-item>\r
          <el-sub-menu index="2">\r
            <template #title>\r
              Workspace\r
            </template>\r
            <el-menu-item index="2-1">\r
              item one\r
            </el-menu-item>\r
            <el-menu-item index="2-2">\r
              item two\r
            </el-menu-item>\r
            <el-menu-item index="2-3">\r
              item three\r
            </el-menu-item>\r
            <el-sub-menu index="2-4">\r
              <template #title>\r
                item four\r
              </template>\r
              <el-menu-item index="2-4-1">\r
                item one\r
              </el-menu-item>\r
              <el-menu-item index="2-4-2">\r
                item two\r
              </el-menu-item>\r
              <el-menu-item index="2-4-3">\r
                item three\r
              </el-menu-item>\r
            </el-sub-menu>\r
          </el-sub-menu>\r
          <el-menu-item index="3" disabled>\r
            Info\r
          </el-menu-item>\r
          <el-menu-item index="4">\r
            Orders\r
          </el-menu-item>\r
        </el-menu>\r
      </el-col>\r
      <template #controls>\r
        <HstInputNumber\r
          v-model="basicData.defaultActive"\r
          title="default-active"\r
          :min="1" :max="4"\r
        />\r
        <HstButtonGroup\r
          v-model="basicData.mode"\r
          title="mode"\r
          :options="[\r
            { label: 'vertical', value: 'vertical' },\r
            { label: 'horizontal', value: 'horizontal' },\r
          ]"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.collapse"\r
          :style="useElDisplay(basicData.mode === 'vertical')"\r
          title="collapse"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.ellipsis"\r
          :style="useElDisplay(basicData.mode === 'horizontal')"\r
          title="ellipsis"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.uniqueOpened"\r
          title="unique-opened"\r
        />\r
        <HstButtonGroup\r
          v-model="basicData.menuTrigger"\r
          :style="useElDisplay(basicData.mode === 'horizontal')"\r
          title="menu-trigger"\r
          :options="[\r
            { label: 'hover', value: 'hover' },\r
            { label: 'click', value: 'click' },\r
          ]"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.router"\r
          title="router"\r
        />\r
        <HstCheckbox\r
          v-model="basicData.collapseTransition"\r
          title="collapse-transition"\r
        />\r
        <HstButtonGroup\r
          v-model="basicData.popperEffect"\r
          title="popper-effect"\r
          :options="[\r
            { label: 'light', value: 'light' },\r
            { label: 'dark', value: 'dark' },\r
          ]"\r
        />\r
        <HstDivider content="Color" />\r
        <HstColor v-model="basicData.bgColor" title="bg-color" />\r
        <HstColor v-model="basicData.textColor" title="text-color" />\r
        <HstColor v-model="basicData.activeTextColor" title="active-text-color" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsNavigationMenuMenuStoryVue as default
};
