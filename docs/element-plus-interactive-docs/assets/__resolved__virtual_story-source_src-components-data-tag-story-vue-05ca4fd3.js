const __resolved__virtual_storySource_srcComponentsDataTagStoryVue = `<script setup lang="ts">\r
import { nextTick, ref } from 'vue'\r
import { ElInput } from 'element-plus'\r
import type { TagProps } from 'element-plus'\r
import { logEvent } from 'histoire/client'\r
\r
const currentType = ref('success')\r
const closable = ref(true)\r
const rounded = ref(true)\r
const disableTransitions = ref(true)\r
const tagTypeList: { label: string; value: TagProps['type'] }[] = [\r
  {\r
    label: 'default',\r
    value: '',\r
  },\r
  {\r
    label: 'success',\r
    value: 'success',\r
  },\r
  {\r
    label: 'warning',\r
    value: 'warning',\r
  },\r
  {\r
    label: 'danger',\r
    value: 'danger',\r
  },\r
  {\r
    label: 'info',\r
    value: 'info',\r
  },\r
]\r
const currentSize = ref<TagProps['size']>('large')\r
const tagSizeList: { label: string; value: TagProps['size'] }[] = [\r
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
const ThemeList: { label: string; value: TagProps['effect'] }[] = [\r
  {\r
    label: 'Dark Theme',\r
    value: 'dark',\r
  },\r
  {\r
    label: 'Light Theme',\r
    value: 'light',\r
  },\r
  {\r
    label: 'Plain Theme',\r
    value: 'plain',\r
  },\r
]\r
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])\r
const currentTheme = ref<TagProps['effect']>('light')\r
const inputValue = ref('')\r
const inputVisible = ref(false)\r
const InputRef = ref<InstanceType<typeof ElInput>>()\r
function handleClose(tag: string) {\r
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)\r
}\r
function showInput() {\r
  inputVisible.value = true\r
  nextTick(() => {\r
    InputRef.value!.input!.focus()\r
  })\r
}\r
\r
function handleInputConfirm() {\r
  if (inputValue.value)\r
    dynamicTags.value.push(inputValue.value)\r
\r
  inputVisible.value = false\r
  inputValue.value = ''\r
}\r
function fireClose(e: Event) {\r
  logEvent('close', e)\r
}\r
const checked = ref(false)\r
function onChange(status: boolean) {\r
  checked.value = status\r
}\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Data/Tag"\r
    :layout="{\r
      type: 'grid',\r
      width: 400,\r
    }"\r
    icon="mdi:tag-text-outline"\r
  >\r
    <Variant title="Basic usage">\r
      <el-tag :type="currentType" :size="currentSize">\r
        Tag\r
      </el-tag>\r
      <template #controls>\r
        <HstRadio v-model="currentType" title="Tag Type" :options="tagTypeList" />\r
        <HstRadio v-model="currentSize" title="Tag Sizes" :options="tagSizeList" />\r
      </template>\r
    </Variant>\r
    <Variant title="Removable Tag">\r
      <el-tag :closable="closable" :type="currentType" :disable-transitions="disableTransitions" @close="fireClose">\r
        Removable Tag\r
      </el-tag>\r
      <template #controls>\r
        <HstRadio v-model="currentType" title="Tag Type" :options="tagTypeList" />\r
        <HstCheckbox v-model="closable" title="closable" />\r
        <HstCheckbox v-model="disableTransitions" title="disableTransitions" />\r
      </template>\r
    </Variant>\r
    <Variant title="Edit Dynamically">\r
      <el-tag v-for="tag in dynamicTags" :key="tag" :closable="closable" :disable-transitions="disableTransitions" style="margin:0 5px;" @close="handleClose(tag)">\r
        {{ tag }}\r
      </el-tag>\r
      <el-input v-if="inputVisible" ref="InputRef" v-model="inputValue" style="margin-left:10px;width:120px;" size="small" @keyup.enter="handleInputConfirm" @blur="handleInputConfirm" />\r
      <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">\r
        + New Tag\r
      </el-button>\r
      <template v-if="dynamicTags.length > 0" #controls>\r
        <HstCheckbox v-model="closable" title="closable" />\r
        <HstCheckbox v-model="disableTransitions" title="disableTransitions" />\r
      </template>\r
    </Variant>\r
    <Variant title="Theme">\r
      <el-tag :type="currentType" :effect="currentTheme">\r
        Tag\r
      </el-tag>\r
      <template #controls>\r
        <HstRadio v-model="currentType" title="Tag Type" :options="tagTypeList" />\r
        <HstButtonGroup\r
          v-model="currentTheme" title="Theme" :options="ThemeList"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Rounded">\r
      <el-tag :type="currentType" :effect="currentTheme" :round="rounded">\r
        Tag\r
      </el-tag>\r
      <template #controls>\r
        <HstRadio v-model="currentType" title="Tag Type" :options="tagTypeList" />\r
        <HstButtonGroup\r
          v-model="currentTheme" title="Theme" :options="ThemeList"\r
        />\r
        <HstCheckbox v-model="rounded" title="rounded" />\r
      </template>\r
    </Variant>\r
    <Variant title="Checkable tag">\r
      <el-check-tag checked style="margin-right: 8px">\r
        Checked\r
      </el-check-tag>\r
      <el-check-tag :checked="checked" @change="onChange">\r
        Toggle me\r
      </el-check-tag>\r
      <template #controls>\r
        <HstCheckbox v-model="checked" title="checked" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic usage\r
\r
Tag usage\r
\r
## Removable Tag\r
\r
closable attribute can be used to define a removable tag. It accepts a Boolean. By default the removal of Tag has a fading animation. If you don't want to use it, you can set the disable-transitions attribute, which accepts a Boolean, to true. close event triggers when Tag is removed.\r
\r
## Edit Dynamically\r
\r
You can use the close event to add and remove tag dynamically.\r
\r
## Theme\r
\r
Tag provide three different themes: dark、light and plain\r
\r
Using effect to change, default is light\r
\r
## Checkable tag\r
\r
Sometimes because of the business needs, we might need checkbox like tag, but button like checkbox cannot meet our needs, here comes check-tag\r
\r
basic check-tag usage, the API is rather simple.\r
</docs>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataTagStoryVue as default
};
