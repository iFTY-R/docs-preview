const __resolved__virtual_storySource_srcComponentsDataTableTableStoryVue = `<script setup lang="ts">\r
import { onMounted, ref } from 'vue'\r
import sizeOptions from '@constants/sizeOptions'\r
import { alignOptions, tableLayoutOptions } from './constants'\r
\r
/** Basic-Table */\r
const tableData = ref([])\r
\r
/** generateData */\r
function generateData(): any {\r
  for (let i = 1; i <= 10; i++) {\r
    tableData.value.push({\r
      name: \`Name \${i}\`,\r
      age: Math.floor(Math.random() * 50) + 20,\r
      gender: i % 2 === 0 ? 'Male' : 'Female',\r
      country: \`Country \${i}\`,\r
      city: \`City \${i}\`,\r
      income: Math.floor(Math.random() * 10000) + 5000,\r
      email: \`email\${i}@example.com\`,\r
      phone: \`123456789\${i}\`,\r
      address: \`Address \${i}\`,\r
      registrationDate: '2022-01-01',\r
      date: '2022-01-01',\r
      status: i % 3 === 0 ? 'Active' : 'Inactive',\r
      family: [\r
        {\r
          name: 'Jerry',\r
          state: 'California',\r
          city: 'San Francisco',\r
          address: '3650 21st St, San Francisco',\r
          zip: 'CA 94114',\r
        },\r
      ],\r
    })\r
  }\r
}\r
\r
onMounted(() => {\r
  generateData()\r
})\r
\r
/** Basic-Table-Data */\r
const basicTableData = reactive({\r
  stripe: false,\r
  border: false,\r
  height: 500,\r
  fixed: false,\r
  sortable: false,\r
  size: 'default',\r
  sizeOptions,\r
  fit: true,\r
  showHeader: true,\r
  highlightCurrentRow: true,\r
  showOverflowTooltip: false,\r
  flexible: false,\r
  scrollbarAlwaysOn: false,\r
  showTableData: true,\r
  showSummary: false,\r
  emptyText: 'no data',\r
  alignOptions,\r
  resizable: true,\r
  align: 'left',\r
  headerAlign: 'left',\r
  tableLayoutOptions,\r
  tableLayout: 'fixed',\r
})\r
\r
/** Basic-Table-Column */\r
const basicTableColumn = reactive([\r
  { label: 'Name', prop: 'name' },\r
  { label: 'Age', prop: 'age' },\r
  { label: 'Country', prop: 'country' },\r
  { label: 'City', prop: 'city' },\r
  { label: 'Income', prop: 'income' },\r
  { label: 'Email', prop: 'email' },\r
  { label: 'Phone', prop: 'phone' },\r
  { label: 'Address', prop: 'address' },\r
  { label: 'Date', prop: 'registrationDate' },\r
  { label: 'Status', prop: 'status' },\r
])\r
\r
/** tableRowClassName */\r
function tableRowClassName(row: any) {\r
  if (row.rowIndex === 1)\r
    return 'warning-row'\r
  else if (row.rowIndex === 3)\r
    return 'success-row'\r
\r
  return ''\r
}\r
\r
/** arraySpanMethod */\r
function arraySpanMethod(span: SpanMethodProps) {\r
  if (span.rowIndex % 2 === 0) {\r
    if (span.columnIndex === 0)\r
      return [1, 2]\r
    else if (span.columnIndex === 1)\r
      return [0, 0]\r
  }\r
}\r
\r
/** basicTableSource */\r
const basicTableSource = computed(() => {\r
  return \`\r
<script setup lang="ts">\r
import { onMounted, reactive, ref } from 'vue'\r
const tableData = ref([])\r
\r
const basicTableColumn = reactive([\r
  { label: 'Name', prop: 'name' },\r
  { label: 'Age', prop: 'age' },\r
  { label: 'Country', prop: 'country' },\r
  { label: 'City', prop: 'city' },\r
  { label: 'Occupation', prop: 'occupation' },\r
  { label: 'Education', prop: 'education' },\r
  { label: 'Language', prop: 'language' },\r
  { label: 'Hobbies', prop: 'hobbies' },\r
  { label: 'Income', prop: 'income' },\r
  { label: 'Email', prop: 'email' },\r
  { label: 'Phone', prop: 'phone' },\r
  { label: 'Address', prop: 'address' },\r
  { label: 'Registration Date', prop: 'registrationDate' },\r
  { label: 'Remarks', prop: 'remarks' },\r
  { label: 'Status', prop: 'status' },\r
])\r
\r
/** generateData */\r
function generateData(): any {\r
  for (let i = 1; i <= 10; i++) {\r
    tableData.value.push({\r
      name: \\\`Name \\\${i}\\\`,\r
      age: Math.floor(Math.random() * 50) + 20,\r
      gender: i % 2 === 0 ? 'Male' : 'Female',\r
      country: \\\`Country \\\${i}\\\`,\r
      city: \\\`City \\\${i}\\\`,\r
      income: Math.floor(Math.random() * 10000) + 5000,\r
      email: \\\`email\\\${i}@example.com\\\`,\r
      phone: \\\`123456789\\\${i}\\\`,\r
      address: \\\`Address \\\${i}\\\`,\r
      registrationDate: \\'2022-01-01\\',\r
      status: i % 3 === 0 ? 'Active' : 'Inactive',\r
    })\r
  }\r
}\r
\r
onMounted(() => {\r
  generateData()\r
})\r
\r
<\\/script>\r
\r
<template>\r
  <el-table\r
        empty-text="\${basicTableData.emptyText}"\r
        data="\${basicTableData.showTableData ? 'tableData' : []}"\r
        stripe="\${basicTableData.stripe}"\r
        border="\${basicTableData.border}"\r
        row-class-name="tableRowClassName"\r
        height="\${basicTableData.height}"\r
        style="width: 100%"\r
        size="\${basicTableData.size}"\r
        fit="\${basicTableData.fit}"\r
        show-header="\${basicTableData.showHeader}"\r
        highlight-current-row="\${basicTableData.highlightCurrentRow}"\r
        flexible="\${basicTableData.flexible}"\r
        scrollbar-always-on="\${basicTableData.scrollbarAlwaysOn}"\r
        show-summary="\${basicTableData.showSummary}"\r
      >\r
        <el-table-column\r
          v-for="(item, index) in basicTableColumn"\r
          :key="index"\r
          min-width="120px"\r
          :label="item.label"\r
          :prop="item.prop"\r
          :fixed="item.label === 'Name' ? \${basicTableData.fixed} : false"\r
          :align="\${basicTableData.align}"\r
          :show-overflow-tooltip="\${basicTableData.showOverflowTooltip}"\r
          :sortable="\${basicTableData.sortable}"\r
        >\r
          <template #header>\r
            <span>{{ item.label }}</span>\r
          </template>\r
          <template #default="scope">\r
            <span>{{ scope.row[item.prop] }}</span>\r
          </template>\r
        </el-table-column>\r
      </el-table>\r
</template>\r
\`\r
})\r
\r
/** customTableSource */\r
const customTableSource = computed(() => {\r
  return \`\r
<script setup lang="ts">\r
import { onMounted, reactive, ref } from 'vue'\r
const tableData = ref([])\r
\r
/** generateData */\r
function generateData(): any {\r
  for (let i = 1; i <= 10; i++) {\r
    tableData.value.push({\r
      name: \\\`Name \\\${i}\\\`,\r
      date: '2022-01-01',\r
      status: i % 3 === 0 ? 'Active' : 'Inactive',\r
      family: [\r
        {\r
          name: 'Jerry',\r
          state: 'California',\r
          city: 'San Francisco',\r
          address: '3650 21st St, San Francisco',\r
          zip: 'CA 94114',\r
        },\r
      ],\r
    })\r
  }\r
}\r
\r
onMounted(() => {\r
  generateData()\r
})\r
\r
/** arraySpanMethod */\r
function arraySpanMethod(span: SpanMethodProps) {\r
  if (span.rowIndex % 2 === 0) {\r
    if (span.columnIndex === 0)\r
      return [1, 2]\r
    else if (span.columnIndex === 1)\r
      return [0, 0]\r
  }\r
}\r
\r
<\\/script>\r
\r
<template>\r
  <el-table\r
        :data="tableData"\r
        style="width: 100%"\r
        :span-method="arraySpanMethod"\r
      >\r
        <el-table-column type="index" />\r
        <el-table-column type="expand">\r
          <template #default="props">\r
            <div m="4">\r
              <p m="t-0 b-2">\r
                Status: {{ props.row.status }}\r
              </p>\r
              <p m="t-0 b-2">\r
                City: {{ props.row.city }}\r
              </p>\r
              <p m="t-0 b-2">\r
                Address: {{ props.row.address }}\r
              </p>\r
              <h3>Family</h3>\r
              <el-table :data="props.row.family" :border="childBorder">\r
                <el-table-column label="Name" prop="name" />\r
                <el-table-column label="State" prop="state" />\r
                <el-table-column label="City" prop="city" />\r
                <el-table-column label="Address" prop="address" />\r
                <el-table-column label="Zip" prop="zip" />\r
              </el-table>\r
            </div>\r
          </template>\r
        </el-table-column>\r
        <el-table-column label="Date" width="180">\r
          <template #default="scope">\r
            <div style="display: flex; align-items: center">\r
              <el-icon><timer /></el-icon>\r
              <span style="margin-left: 10px">{{ scope.row.date }}</span>\r
            </div>\r
          </template>\r
        </el-table-column>\r
        <el-table-column label="Name" width="180">\r
          <template #default="scope">\r
            <el-popover effect="light" trigger="hover" placement="top" width="auto">\r
              <template #default>\r
                <div>name: {{ scope.row.name }}</div>\r
                <div>address: {{ scope.row.address }}</div>\r
              </template>\r
              <template #reference>\r
                <el-tag>{{ scope.row.name }}</el-tag>\r
              </template>\r
            </el-popover>\r
          </template>\r
        </el-table-column>\r
        <el-table-column label="Operations">\r
          <template #header>\r
            <el-input v-model="search" size="small" placeholder="Type to search" />\r
          </template>\r
          <template #default="scope">\r
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">\r
              Edit\r
            </el-button>\r
            <el-button\r
              size="small"\r
              type="danger"\r
              @click="handleDelete(scope.$index, scope.row)"\r
            >\r
              Delete\r
            </el-button>\r
          </template>\r
        </el-table-column>\r
      </el-table>\r
</template>\r
\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Data/Table"\r
    icon="material-symbols-light:data-table-outline"\r
    :layout="{\r
      type: 'single',\r
      iframe: false,\r
    }"\r
  >\r
    <Variant\r
      title="Basic Table"\r
      :source="basicTableSource"\r
    >\r
      <el-table\r
        :empty-text="basicTableData.emptyText"\r
        :data="basicTableData.showTableData ? tableData : []"\r
        :stripe="basicTableData.stripe"\r
        :border="basicTableData.border"\r
        :row-class-name="tableRowClassName"\r
        :height="basicTableData.height"\r
        style="width: 100%"\r
        :size="basicTableData.size"\r
        :fit="basicTableData.fit"\r
        :show-header="basicTableData.showHeader"\r
        :highlight-current-row="basicTableData.highlightCurrentRow"\r
        :flexible="basicTableData.flexible"\r
        :scrollbar-always-on="basicTableData.scrollbarAlwaysOn"\r
        :show-summary="basicTableData.showSummary"\r
        :table-layout="basicTableData.tableLayout"\r
      >\r
        <el-table-column\r
          v-for="(item, index) in basicTableColumn"\r
          :key="index"\r
          min-width="120px"\r
          :label="item.label"\r
          :prop="item.prop"\r
          :fixed="item.label === 'Name' || item.label === 'Status' ? basicTableData.fixed : false"\r
          :align="basicTableData.align"\r
          :show-overflow-tooltip="basicTableData.showOverflowTooltip"\r
          :sortable="basicTableData.sortable"\r
        >\r
          <template #header>\r
            <span>{{ item.label }}</span>\r
          </template>\r
          <template #default="scope">\r
            <span>{{ scope.row[item.prop] }}</span>\r
          </template>\r
        </el-table-column>\r
      </el-table>\r
      <template #controls>\r
        <HstCheckbox v-model="basicTableData.showTableData" title="ShowTableData" />\r
        <HstText v-model="basicTableData.emptyText" title="EmptyText" />\r
        <HstNumber v-model="basicTableData.height" title="Height" />\r
        <HstButtonGroup\r
          v-model="basicTableData.tableLayout"\r
          title="Table Layout"\r
          :options="basicTableData.tableLayoutOptions"\r
        />\r
        <HstButtonGroup\r
          v-model="basicTableData.size"\r
          title="Size"\r
          :options="basicTableData.sizeOptions"\r
        />\r
        <HstButtonGroup\r
          v-model="basicTableData.align"\r
          title="Align"\r
          :options="basicTableData.alignOptions"\r
        />\r
        <HstCheckbox v-model="basicTableData.stripe" title="Stripe" />\r
        <HstCheckbox v-model="basicTableData.border" title="Border" />\r
        <HstCheckbox v-model="basicTableData.fixed" title="Fixed" />\r
        <HstCheckbox v-model="basicTableData.sortable" title="Sortable" />\r
        <HstCheckbox v-model="basicTableData.fit" title="Fit" />\r
        <HstCheckbox v-model="basicTableData.showHeader" title="ShowHeader" />\r
        <HstCheckbox v-model="basicTableData.highlightCurrentRow" title="HighlightCurrentRow" />\r
        <HstCheckbox v-model="basicTableData.showOverflowTooltip" title="ShowOverflowTooltip" />\r
        <HstCheckbox v-model="basicTableData.flexible" title="Flexible" />\r
        <HstCheckbox v-model="basicTableData.scrollbarAlwaysOn" title="ScrollbarAlwaysOn" />\r
        <HstCheckbox v-model="basicTableData.showSummary" title="ShowSummary" />\r
\r
        <HstCheckbox v-model="basicTableData.resizable" title="Resizable" />\r
      </template>\r
    </Variant>\r
\r
    <Variant\r
      title="Custom Table"\r
      :source="customTableSource"\r
    >\r
      <el-table\r
        :data="tableData"\r
        style="width: 100%"\r
        :span-method="arraySpanMethod"\r
      >\r
        <el-table-column type="index" />\r
        <el-table-column type="expand">\r
          <template #default="props">\r
            <div m="4">\r
              <p m="t-0 b-2">\r
                Status: {{ props.row.status }}\r
              </p>\r
              <p m="t-0 b-2">\r
                City: {{ props.row.city }}\r
              </p>\r
              <p m="t-0 b-2">\r
                Address: {{ props.row.address }}\r
              </p>\r
              <h3>Family</h3>\r
              <el-table :data="props.row.family" :border="childBorder">\r
                <el-table-column label="Name" prop="name" />\r
                <el-table-column label="State" prop="state" />\r
                <el-table-column label="City" prop="city" />\r
                <el-table-column label="Address" prop="address" />\r
                <el-table-column label="Zip" prop="zip" />\r
              </el-table>\r
            </div>\r
          </template>\r
        </el-table-column>\r
        <el-table-column label="Date" width="180">\r
          <template #default="scope">\r
            <div style="display: flex; align-items: center">\r
              <el-icon><timer /></el-icon>\r
              <span style="margin-left: 10px">{{ scope.row.date }}</span>\r
            </div>\r
          </template>\r
        </el-table-column>\r
        <el-table-column label="Name" width="180">\r
          <template #default="scope">\r
            <el-popover effect="light" trigger="hover" placement="top" width="auto">\r
              <template #default>\r
                <div>name: {{ scope.row.name }}</div>\r
                <div>address: {{ scope.row.address }}</div>\r
              </template>\r
              <template #reference>\r
                <el-tag>{{ scope.row.name }}</el-tag>\r
              </template>\r
            </el-popover>\r
          </template>\r
        </el-table-column>\r
        <el-table-column label="Operations">\r
          <template #header>\r
            <el-input v-model="search" size="small" placeholder="Type to search" />\r
          </template>\r
          <template #default="scope">\r
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">\r
              Edit\r
            </el-button>\r
            <el-button\r
              size="small"\r
              type="danger"\r
              @click="handleDelete(scope.$index, scope.row)"\r
            >\r
              Delete\r
            </el-button>\r
          </template>\r
        </el-table-column>\r
      </el-table>\r
      <template #controls />\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataTableTableStoryVue as default
};
