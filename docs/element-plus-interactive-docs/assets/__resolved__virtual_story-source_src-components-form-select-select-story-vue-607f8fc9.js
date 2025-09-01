const __resolved__virtual_storySource_srcComponentsFormSelectSelectStoryVue = `<script setup lang="ts">\r
import sizeOptions from '@constants/sizeOptions'\r
import { computed, reactive } from 'vue'\r
import { groupOptions, selectOptions, templateSource, templateSourceGroup } from './constant'\r
\r
const initState = reactive({\r
  value: '' as string | string[],\r
  size: '',\r
  disabled: false,\r
  clearable: false,\r
  filterable: false,\r
  allowCreate: false,\r
  multiple: false,\r
  multipleLimit: 0,\r
  placeholder: 'Select',\r
  defaultFirstOption: false,\r
  popperClass: '',\r
  reserveKeyword: false,\r
  valueKey: '',\r
  collapseTags: false,\r
  collapseTagsTooltip: false,\r
  popperAppendToBody: true,\r
  automaticDropdown: true,\r
})\r
\r
const BasicSource = computed(() =>\r
    \`\r
<el-select\r
  v-model="\${initState.value}"\r
  :placeholder="\${initState.placeholder}"\r
  :size="state.size"\r
  :disabled="state.disabled"\r
  :clearable="state.clearable"\r
>\r
  <el-option\r
    v-for="item in selectOptions"\r
    :key="item.value"\r
    :label="item.label"\r
    :value="item.value"\r
    :disabled="item.disabled"\r
  />\r
</el-select>\`,\r
)\r
<\/script>\r
\r
<template>\r
  <Story title="Form/Select" icon="mi:select">\r
    <Variant\r
      title="Basic Usage"\r
      :init-state="() => initState"\r
      :source="BasicSource"\r
    >\r
      <template #default="{ state }">\r
        <el-select\r
          v-model="state.value"\r
          :placeholder="state.placeholder"\r
          :size="state.size"\r
          :disabled="state.disabled"\r
          :clearable="state.clearable"\r
        >\r
          <el-option\r
            v-for="item in selectOptions"\r
            :key="item.value"\r
            :label="item.label"\r
            :value="item.value"\r
            :disabled="item.disabled"\r
          />\r
        </el-select>\r
      </template>\r
      <template #controls="{ state }">\r
        <HstText v-model="state.placeholder" title="Placeholder" />\r
        <HstRadio\r
          v-model="state.size"\r
          title="Size"\r
          :options="sizeOptions"\r
        />\r
        <HstCheckbox\r
          v-model="state.disabled"\r
          title="Disabled"\r
        />\r
        <HstCheckbox\r
          v-model="state.clearable"\r
          title="Clearable"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="multiple select" :init-state="() => initState">\r
      <template #default="{ state }">\r
        <el-select\r
          v-model="state.value"\r
          multiple\r
          :collapse-tags="state.collapseTags"\r
          :collapse-tags-tooltip="state.collapseTagsTooltip"\r
        >\r
          <el-option\r
            v-for="item in selectOptions"\r
            :key="item.value"\r
            :label="item.label"\r
            :value="item.value"\r
          />\r
        </el-select>\r
      </template>\r
      <template #controls="{ state }">\r
        <HstCheckbox\r
          v-model="state.collapseTags"\r
          title="CollapseTags"\r
        />\r
        <HstCheckbox\r
          v-model="state.collapseTagsTooltip"\r
          title="TagsTooltip"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Option filtering" :init-state="() => initState">\r
      <template #default="{ state }">\r
        <el-select\r
          v-model="state.value"\r
          :filterable="state.filterable"\r
          :allow-create="state.allowCreate"\r
        >\r
          <el-option\r
            v-for="item in selectOptions"\r
            :key="item.value"\r
            :label="item.label"\r
            :value="item.value"\r
          />\r
        </el-select>\r
      </template>\r
      <template #controls="{ state }">\r
        <HstCheckbox\r
          v-model="state.filterable"\r
          title="Filterable"\r
        />\r
        <HstCheckbox\r
          v-model="state.allowCreate"\r
          title="AllowCreate"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Custom template" :init-state="() => initState" :source="templateSource">\r
      <template #default="{ state }">\r
        <el-select\r
          v-model="state.value"\r
        >\r
          <el-option\r
            v-for="item in selectOptions"\r
            :key="item.value"\r
            :label="item.label"\r
            :value="item.value"\r
          >\r
            <span class="left-bar">{{ item.label }}</span>\r
            <span class="right-bar">{{ item.value }}</span>\r
          </el-option>\r
        </el-select>\r
      </template>\r
    </Variant>\r
    <Variant title="Grouping" :init-state="() => initState" :source="templateSourceGroup">\r
      <template #default="{ state }">\r
        <el-select v-model="state.value" placeholder="Select">\r
          <el-option-group\r
            v-for="group in groupOptions"\r
            :key="group.label"\r
            :label="group.label"\r
          >\r
            <el-option\r
              v-for="item in group.options"\r
              :key="item.value"\r
              :label="item.label"\r
              :value="item.value"\r
            />\r
          </el-option-group>\r
        </el-select>\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
.left-bar {\r
  float: left;\r
}\r
.right-bar {\r
  float: right;\r
  color: var(--el-text-color-secondary);\r
  font-size: 13px;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormSelectSelectStoryVue as default
};
