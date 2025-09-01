const __resolved__virtual_storySource_srcComponentsBasicButtonButtonStoryVue = `<script setup lang="ts">\r
import sizeOptions from '@constants/sizeOptions'\r
import { isAttribute } from '@utils'\r
import { logEvent } from 'histoire/client'\r
import { Search } from '@element-plus/icons-vue'\r
import { typeList } from './constants'\r
\r
// Basic-Button\r
const basicButtonData = reactive({\r
  text: 'Button',\r
  type: '',\r
  typeList,\r
  size: 'default',\r
  sizeOptions,\r
  plain: false,\r
  round: false,\r
  circle: false,\r
  loading: false,\r
  disabled: false,\r
})\r
\r
const basicSource = computed(() => {\r
  return \`<el-button\${isAttribute(\r
    basicButtonData.type !== '',\r
    \`type="\${basicButtonData.type}"\`,\r
  )}\${isAttribute(\r
    basicButtonData.size !== 'default',\r
    \`size="\${basicButtonData.size}"\`,\r
  )}\${isAttribute(\r
    basicButtonData.plain,\r
    'plain',\r
  )}\${isAttribute(\r
    basicButtonData.round,\r
    'round',\r
  )}\${isAttribute(\r
    basicButtonData.circle,\r
    'circle',\r
  )}\${isAttribute(\r
    basicButtonData.loading,\r
     'loading',\r
  )}\${isAttribute(\r
    basicButtonData.disabled,\r
    'disabled',\r
  )}\r
  @click="console.log('Button is clicked')"\r
>\r
  \${basicButtonData.text}\r
</el-button>\`\r
})\r
\r
// Icon Button\r
const iconButtonData = reactive({\r
  icon: shallowRef(Search),\r
  text: '',\r
  type: '',\r
  typeList,\r
  size: 'default',\r
  sizeOptions,\r
  circle: true,\r
  plain: false,\r
  loading: false,\r
  disabled: false,\r
})\r
const iconSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import { \${iconButtonData.icon.name} } from '@element-plus/icons-vue'\r
<\\/script>\r
\r
<el-button\r
  :icon="\${iconButtonData.icon.name}"\${isAttribute(\r
    iconButtonData.type !== '',\r
    \`type="\${iconButtonData.type}"\`,\r
  )}\${isAttribute(\r
    iconButtonData.size !== 'default',\r
    \`size="\${iconButtonData.size}"\`,\r
  )}\${isAttribute(\r
    iconButtonData.plain,\r
    'plain',\r
  )}\${isAttribute(\r
    iconButtonData.circle,\r
    'circle',\r
  )}\${isAttribute(\r
    iconButtonData.loading,\r
     'loading',\r
  )}\${isAttribute(\r
    iconButtonData.disabled,\r
    'disabled',\r
  )}\r
  @click="console.log('Button is clicked')"\r
>\${isAttribute(Boolean(iconButtonData.text), iconButtonData.text)}\r
</el-button>\r
\`\r
})\r
\r
// Color Button\r
const colorButtonData = reactive({\r
  text: 'Custom Color Button',\r
  color: '#626aef',\r
  plain: false,\r
  disabled: false,\r
})\r
\r
const ColorSource = computed(() => {\r
  return \`<el-button\${isAttribute(\r
    true,\r
    \`color="\${colorButtonData.color}"\`,\r
  )}\${isAttribute(\r
    colorButtonData.plain,\r
    'plain',\r
  )}\${isAttribute(\r
    colorButtonData.disabled,\r
    'disabled',\r
  )}\r
  @click="console.log('Button is clicked')"\r
>\r
  \${colorButtonData.text}\r
</el-button>\`\r
})\r
\r
// Button Group\r
const buttonGroupData = reactive({\r
  type: '',\r
  typeList,\r
  size: 'default',\r
  sizeOptions,\r
})\r
\r
const buttonGroupSource = computed(() => {\r
  return \`<el-button-group\${isAttribute(\r
    buttonGroupData.type !== '',\r
    \`type="\${buttonGroupData.type}"\`,\r
  )}\${isAttribute(\r
    buttonGroupData.size !== 'default',\r
    \`size="\${buttonGroupData.size}"\`,\r
  )}\r
>\r
  <el-button>Previous Page</el-button>\r
  <el-button>Next Page</el-button>\r
</el-button-group>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Basic/Button" icon="teenyicons:button-outline">\r
    <Variant title="Basic Usage" :source="basicSource">\r
      <el-button\r
        :type="basicButtonData.type"\r
        :size="basicButtonData.size"\r
        :plain="basicButtonData.plain"\r
        :round="basicButtonData.round"\r
        :disabled="basicButtonData.disabled"\r
        :loading="basicButtonData.loading"\r
        @click="logEvent('click', { log: 'Button is clicked' })"\r
      >\r
        {{ basicButtonData.text }}\r
      </el-button>\r
      <template #controls>\r
        <HstText v-model="basicButtonData.text" title="Text" />\r
        <HstCheckbox v-model="basicButtonData.plain" title="Plain" />\r
        <HstCheckbox v-model="basicButtonData.round" title="Round" />\r
        <HstCheckbox v-model="basicButtonData.disabled" title="Disabled" />\r
        <HstCheckbox v-model="basicButtonData.loading" title="Loading" />\r
\r
        <HstRadio\r
          v-model="basicButtonData.type"\r
          title="Type"\r
          :options="basicButtonData.typeList"\r
        />\r
        <HstRadio\r
          v-model="basicButtonData.size"\r
          title="Size"\r
          :options="basicButtonData.sizeOptions"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Icon Button" :source="iconSource" icon="line-md:iconify2">\r
      <el-button\r
        :icon="iconButtonData.icon"\r
        :type="iconButtonData.type"\r
        :size="iconButtonData.size"\r
        :plain="iconButtonData.plain"\r
        :circle="iconButtonData.circle"\r
        :disabled="iconButtonData.disabled"\r
        :loading="iconButtonData.loading"\r
        @click="logEvent('click', { log: 'Button is clicked' })"\r
      >\r
        <template v-if="iconButtonData.text" #default>\r
          {{ iconButtonData.text }}\r
        </template>\r
      </el-button>\r
      <template #controls>\r
        <HstText v-model="iconButtonData.text" title="Text" />\r
        <HstCheckbox v-model="iconButtonData.plain" title="Plain" />\r
        <HstCheckbox v-model="iconButtonData.circle" title="Circle" />\r
        <HstCheckbox v-model="iconButtonData.disabled" title="Disabled" />\r
        <HstCheckbox v-model="iconButtonData.loading" title="Loading" />\r
\r
        <HstRadio\r
          v-model="iconButtonData.type"\r
          title="Type"\r
          :options="iconButtonData.typeList"\r
        />\r
        <HstRadio\r
          v-model="iconButtonData.size"\r
          title="Size"\r
          :options="iconButtonData.sizeOptions"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Custom Color"\r
      icon="ic:outline-color-lens"\r
      :source="ColorSource"\r
    >\r
      <el-button\r
        :plain="colorButtonData.plain"\r
        :disabled="colorButtonData.disabled"\r
        :color="colorButtonData.color"\r
        @click="logEvent('click', $event)"\r
      >\r
        {{ colorButtonData.text }}\r
      </el-button>\r
      <template #controls>\r
        <HstText v-model="colorButtonData.text" title="Text" />\r
        <HstColor v-model="colorButtonData.color" title="Color" />\r
        <HstCheckbox v-model="colorButtonData.plain" title="Plain" />\r
        <HstCheckbox v-model="colorButtonData.disabled" title="Disabled" />\r
      </template>\r
    </Variant>\r
\r
    <Variant\r
      title="Button Group"\r
      icon="clarity:blocks-group-line"\r
      :source="buttonGroupSource"\r
    >\r
      <el-button-group\r
        :size="buttonGroupData.size"\r
        :type="buttonGroupData.type"\r
      >\r
        <el-button>\r
          Previous Page\r
        </el-button>\r
        <el-button>\r
          Next Page\r
        </el-button>\r
      </el-button-group>\r
      <template #controls>\r
        <HstRadio\r
          v-model="buttonGroupData.type"\r
          title="Type"\r
          :options="buttonGroupData.typeList"\r
        />\r
        <HstRadio\r
          v-model="buttonGroupData.size"\r
          title="Size"\r
          :options="buttonGroupData.sizeOptions"\r
        />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsBasicButtonButtonStoryVue as default
};
