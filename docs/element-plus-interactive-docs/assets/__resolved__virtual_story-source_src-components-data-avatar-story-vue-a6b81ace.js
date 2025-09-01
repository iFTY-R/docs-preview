const __resolved__virtual_storySource_srcComponentsDataAvatarStoryVue = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { logEvent } from 'histoire/client'\r
import { UserFilled } from '@element-plus/icons-vue'\r
import type { AvatarProps } from 'element-plus'\r
\r
const url = ref('https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png')\r
const avatarShapeList: { label: string; value: AvatarProps['shape'] }[] = [\r
  {\r
    label: 'circle',\r
    value: 'circle',\r
  },\r
  {\r
    label: 'square',\r
    value: 'square',\r
  },\r
]\r
const avatarSizeList: { label: string; value: AvatarProps['size'] }[] = [\r
  {\r
    label: 'large',\r
    value: 'large',\r
  },\r
  {\r
    label: 'default',\r
    value: 'default',\r
  },\r
  {\r
    label: 'small',\r
    value: 'small',\r
  },\r
]\r
const fitList: { label: string; value: AvatarProps['fit'] }[] = [\r
  {\r
    label: 'fill',\r
    value: 'fill',\r
  },\r
  {\r
    label: 'contain',\r
    value: 'contain',\r
  },\r
  {\r
    label: 'cover',\r
    value: 'cover',\r
  },\r
  {\r
    label: 'none',\r
    value: 'none',\r
  },\r
  {\r
    label: 'scale-down',\r
    value: 'scale-down',\r
  },\r
]\r
const currentShape = ref<AvatarProps['shape']>('circle')\r
const currentSize = ref<AvatarProps['size']>('default')\r
const currentFit = ref<AvatarProps['fit']>('cover')\r
const customSize = ref<number>(50)\r
\r
function errorHandler() {\r
  return true\r
}\r
function fireClose() {\r
  logEvent('error', errorHandler)\r
}\r
<\/script>\r
\r
<template>\r
  <Story title="Data/Avatar" icon="clarity:avatar-line">\r
    <Variant title="Basic usage">\r
      <el-avatar :shape="currentShape" :size="currentSize" :src="url" />\r
      <el-avatar :shape="currentShape" style="margin:0 20px" :size="customSize" :src="url" />\r
      <template #controls>\r
        <HstRadio v-model="currentShape" title="Avatar Shape" :options="avatarShapeList" />\r
        <HstRadio v-model="currentSize" title="Avatar Sizes" :options="avatarSizeList" />\r
        <HstNumber v-model="customSize" title="Custom Avatar Size" />\r
      </template>\r
    </Variant>\r
    <Variant title="Types">\r
      <div class="demo-type">\r
        <el-avatar :icon="UserFilled" />\r
\r
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />\r
\r
        <el-avatar> user </el-avatar>\r
      </div>\r
    </Variant>\r
    <Variant title="Fallback">\r
      <el-avatar :size="60" src="https://empty" @error="fireClose">\r
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png">\r
      </el-avatar>\r
    </Variant>\r
    <Variant title="Fit Container">\r
      <el-avatar shape="square" :size="100" :fit="currentFit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />\r
\r
      <template #controls>\r
        <HstRadio v-model="currentFit" title="Avatar Fit" :options="fitList" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic usage\r
\r
Use shape and size prop to set avatar's shape and size.\r
\r
## Types\r
\r
It supports images, Icons, or characters.\r
\r
## Fallback\r
\r
fallback when image load error.\r
\r
## Fit Container\r
\r
Set how the image fit its container for an image avatar, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).\r
</docs>\r
\r
<style scoped>\r
.demo-type {\r
  display: flex;\r
  justify-content: space-around;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataAvatarStoryVue as default
};
