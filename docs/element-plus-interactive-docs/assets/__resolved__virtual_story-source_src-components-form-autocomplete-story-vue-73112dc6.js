const __resolved__virtual_storySource_srcComponentsFormAutocompleteStoryVue = `<script setup lang="ts">\r
import { onMounted, ref } from 'vue'\r
import { logEvent } from 'histoire/client'\r
\r
interface LinkItem {\r
  value: string\r
  link: string\r
}\r
const clearable = ref(true)\r
const triggerOnFocus = ref(false)\r
const state1 = ref('')\r
const state = ref('')\r
const isAsync = ref(true)\r
const links = ref<LinkItem[]>([])\r
function createFilter(queryString: string) {\r
  return (restaurant: LinkItem) => {\r
    return (\r
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0\r
    )\r
  }\r
}\r
function querySearch(queryString: string, cb: any) {\r
  const results = queryString\r
    ? links.value.filter(createFilter(queryString))\r
    : links.value\r
  // call callback function to return suggestions\r
  cb(results)\r
}\r
let timeout: NodeJS.Timeout\r
function querySearchAsync(queryString: string, cb: (arg: any) => void) {\r
  const results = queryString\r
    ? links.value.filter(createFilter(queryString))\r
    : links.value\r
  clearTimeout(timeout)\r
  timeout = setTimeout(() => {\r
    cb(results)\r
  }, 3000 * Math.random())\r
}\r
function loadAll() {\r
  return [\r
    { value: 'vue', link: 'https://github.com/vuejs/vue' },\r
    { value: 'element', link: 'https://github.com/ElemeFE/element' },\r
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },\r
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },\r
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },\r
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },\r
    { value: 'babel', link: 'https://github.com/babel/babel' },\r
  ]\r
}\r
function handleSelect(value: any) {\r
  logEvent('select', value)\r
}\r
onMounted(() => {\r
  links.value = loadAll()\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Form/Autocomplete" icon="ph:list-dashes">\r
    <Variant title="Basic Usage">\r
      <el-autocomplete\r
        v-model="state1"\r
        :fetch-suggestions="querySearch"\r
        :clearable="clearable"\r
        placeholder="Please Input"\r
        :trigger-on-focus="triggerOnFocus"\r
        @select="handleSelect"\r
      />\r
      <template #controls>\r
        <HstCheckbox v-model="clearable" title="Clearable" />\r
        <HstCheckbox v-model="triggerOnFocus" title="Trigger on focus" />\r
      </template>\r
    </Variant>\r
    <Variant title="Custom template">\r
      <el-autocomplete\r
        v-model="state"\r
        :fetch-suggestions="querySearch"\r
        popper-class="my-autocomplete"\r
        placeholder="Please input"\r
        @select="handleSelect"\r
      >\r
        <template #suffix>\r
          <el-icon\r
            class="el-input__icon"\r
            @click="logEvent('iconClick', $event)"\r
          >\r
            <edit />\r
          </el-icon>\r
        </template>\r
        <template #default="{ item }">\r
          <div class="value">\r
            {{ item.value }}\r
          </div>\r
          <span class="link">{{ item.link }}</span>\r
        </template>\r
      </el-autocomplete>\r
      <template #controls>\r
        <HstCheckbox v-model="clearable" title="Clearable" />\r
      </template>\r
    </Variant>\r
    <Variant title="Remote search">\r
      <el-autocomplete\r
        v-model="state"\r
        :clearable="clearable"\r
        :fetch-suggestions="isAsync ? querySearchAsync : querySearch"\r
        placeholder="Please input"\r
        @select="handleSelect"\r
      />\r
      <template #controls>\r
        <HstCheckbox v-model="clearable" title="Clearable" />\r
        <HstCheckbox v-model="isAsync" title="Remote search" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic usage\r
You can get some recommended tips based on the current input.\r
\r
Autocomplete component provides input suggestions. The \`fetch-suggestions\` attribute is a method that returns suggested input. In this example, \`querySearch(queryString, cb)\` returns suggestions to Autocomplete via \`cb(data)\` when suggestions are ready.\r
\r
## Custom template\r
Customize how suggestions are displayed.\r
\r
Use \`scoped slot\` to customize suggestion items. In the scope, you can access the suggestion object via the \`item\` key.\r
## Remote search\r
Search data from server-side.\r
</docs>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormAutocompleteStoryVue as default
};
