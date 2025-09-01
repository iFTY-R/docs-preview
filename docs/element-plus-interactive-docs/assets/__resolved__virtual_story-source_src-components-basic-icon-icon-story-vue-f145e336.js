const __resolved__virtual_storySource_srcComponentsBasicIconIconStoryVue = `<script setup lang="ts">\r
import { Delete, Edit } from '@element-plus/icons-vue'\r
import { isAttribute } from '@/utils'\r
\r
// el-icon\r
const elIconData = reactive({\r
  icon: shallowRef(Edit),\r
  size: 20,\r
  color: '',\r
})\r
const elIconSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import { Edit } from '@element-plus/icons-vue'\r
<\\/script>\r
\r
<el-icon\${isAttribute(\r
    elIconData.size !== 20,\r
    \`size="\${elIconData.size}"\`,\r
  )}\${isAttribute(\r
    elIconData.color !== '',\r
    \`color="\${elIconData.color}"\`,\r
  )}\r
>\r
  <\${elIconData.icon.name} />\r
</el-icon>\`\r
})\r
\r
// svg\r
const svgData = reactive({\r
  icon: shallowRef(Delete),\r
  customClass: {\r
    width: '1em',\r
    height: '1em',\r
  },\r
})\r
const svgSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import { Delete } from '@element-plus/icons-vue'\r
<\\/script>\r
\r
<\${svgData.icon.name}\r
  style="\${JSON.stringify(svgData.customClass)}"\r
/>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Basic/Icon" icon="line-md:iconify2">\r
    <Variant title="Combined with el-icon" :source="elIconSource">\r
      <el-icon :size="elIconData.size" :color="elIconData.color">\r
        <component :is="elIconData.icon" />\r
      </el-icon>\r
      <template #controls>\r
        <HstNumber v-model="elIconData.size" title="Size" />\r
        <HstColor v-model="elIconData.color" title="Color" />\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Using SVG icon directly"\r
      :source="svgSource"\r
      icon="iconoir:svg-format"\r
    >\r
      <component :is="svgData.icon" :style="svgData.customClass" />\r
\r
      <template #controls>\r
        <!-- a -->\r
        <HstJson v-model="svgData.customClass" title="style" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsBasicIconIconStoryVue as default
};
