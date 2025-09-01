import { ax as defineComponent, ay as ref, aZ as onMounted, aY as reactive, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aE as createElementBlock, aF as renderList, aG as Fragment, aI as createBaseVNode, aP as toDisplayString, aH as createTextVNode } from "./vendor-bdcf0029.js";
import { s as sizeOptions } from "./sizeOptions-57bd3279.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const alignOptions = [
  {
    label: "left",
    value: "left"
  },
  {
    label: "center",
    value: "center"
  },
  {
    label: "right",
    value: "right"
  }
];
const tableLayoutOptions = [
  {
    label: "fixed",
    value: "fixed"
  },
  {
    label: "auto",
    value: "auto"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "table.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const tableData = ref([]);
    function generateData() {
      for (let i = 1; i <= 10; i++) {
        tableData.value.push({
          name: `Name ${i}`,
          age: Math.floor(Math.random() * 50) + 20,
          gender: i % 2 === 0 ? "Male" : "Female",
          country: `Country ${i}`,
          city: `City ${i}`,
          income: Math.floor(Math.random() * 1e4) + 5e3,
          email: `email${i}@example.com`,
          phone: `123456789${i}`,
          address: `Address ${i}`,
          registrationDate: "2022-01-01",
          date: "2022-01-01",
          status: i % 3 === 0 ? "Active" : "Inactive",
          family: [
            {
              name: "Jerry",
              state: "California",
              city: "San Francisco",
              address: "3650 21st St, San Francisco",
              zip: "CA 94114"
            }
          ]
        });
      }
    }
    onMounted(() => {
      generateData();
    });
    const basicTableData = reactive({
      stripe: false,
      border: false,
      height: 500,
      fixed: false,
      sortable: false,
      size: "default",
      sizeOptions,
      fit: true,
      showHeader: true,
      highlightCurrentRow: true,
      showOverflowTooltip: false,
      flexible: false,
      scrollbarAlwaysOn: false,
      showTableData: true,
      showSummary: false,
      emptyText: "no data",
      alignOptions,
      resizable: true,
      align: "left",
      headerAlign: "left",
      tableLayoutOptions,
      tableLayout: "fixed"
    });
    const basicTableColumn = reactive([
      { label: "Name", prop: "name" },
      { label: "Age", prop: "age" },
      { label: "Country", prop: "country" },
      { label: "City", prop: "city" },
      { label: "Income", prop: "income" },
      { label: "Email", prop: "email" },
      { label: "Phone", prop: "phone" },
      { label: "Address", prop: "address" },
      { label: "Date", prop: "registrationDate" },
      { label: "Status", prop: "status" }
    ]);
    function tableRowClassName(row) {
      if (row.rowIndex === 1)
        return "warning-row";
      else if (row.rowIndex === 3)
        return "success-row";
      return "";
    }
    function arraySpanMethod(span) {
      if (span.rowIndex % 2 === 0) {
        if (span.columnIndex === 0)
          return [1, 2];
        else if (span.columnIndex === 1)
          return [0, 0];
      }
    }
    const basicTableSource = computed(() => {
      return `
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
const tableData = ref([])

const basicTableColumn = reactive([
  { label: 'Name', prop: 'name' },
  { label: 'Age', prop: 'age' },
  { label: 'Country', prop: 'country' },
  { label: 'City', prop: 'city' },
  { label: 'Occupation', prop: 'occupation' },
  { label: 'Education', prop: 'education' },
  { label: 'Language', prop: 'language' },
  { label: 'Hobbies', prop: 'hobbies' },
  { label: 'Income', prop: 'income' },
  { label: 'Email', prop: 'email' },
  { label: 'Phone', prop: 'phone' },
  { label: 'Address', prop: 'address' },
  { label: 'Registration Date', prop: 'registrationDate' },
  { label: 'Remarks', prop: 'remarks' },
  { label: 'Status', prop: 'status' },
])

/** generateData */
function generateData(): any {
  for (let i = 1; i <= 10; i++) {
    tableData.value.push({
      name: \`Name \${i}\`,
      age: Math.floor(Math.random() * 50) + 20,
      gender: i % 2 === 0 ? 'Male' : 'Female',
      country: \`Country \${i}\`,
      city: \`City \${i}\`,
      income: Math.floor(Math.random() * 10000) + 5000,
      email: \`email\${i}@example.com\`,
      phone: \`123456789\${i}\`,
      address: \`Address \${i}\`,
      registrationDate: '2022-01-01',
      status: i % 3 === 0 ? 'Active' : 'Inactive',
    })
  }
}

onMounted(() => {
  generateData()
})

<\/script>

<template>
  <el-table
        empty-text="${basicTableData.emptyText}"
        data="${basicTableData.showTableData ? "tableData" : []}"
        stripe="${basicTableData.stripe}"
        border="${basicTableData.border}"
        row-class-name="tableRowClassName"
        height="${basicTableData.height}"
        style="width: 100%"
        size="${basicTableData.size}"
        fit="${basicTableData.fit}"
        show-header="${basicTableData.showHeader}"
        highlight-current-row="${basicTableData.highlightCurrentRow}"
        flexible="${basicTableData.flexible}"
        scrollbar-always-on="${basicTableData.scrollbarAlwaysOn}"
        show-summary="${basicTableData.showSummary}"
      >
        <el-table-column
          v-for="(item, index) in basicTableColumn"
          :key="index"
          min-width="120px"
          :label="item.label"
          :prop="item.prop"
          :fixed="item.label === 'Name' ? ${basicTableData.fixed} : false"
          :align="${basicTableData.align}"
          :show-overflow-tooltip="${basicTableData.showOverflowTooltip}"
          :sortable="${basicTableData.sortable}"
        >
          <template #header>
            <span>{{ item.label }}</span>
          </template>
          <template #default="scope">
            <span>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </el-table>
</template>
`;
    });
    const customTableSource = computed(() => {
      return `
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
const tableData = ref([])

/** generateData */
function generateData(): any {
  for (let i = 1; i <= 10; i++) {
    tableData.value.push({
      name: \`Name \${i}\`,
      date: '2022-01-01',
      status: i % 3 === 0 ? 'Active' : 'Inactive',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    })
  }
}

onMounted(() => {
  generateData()
})

/** arraySpanMethod */
function arraySpanMethod(span: SpanMethodProps) {
  if (span.rowIndex % 2 === 0) {
    if (span.columnIndex === 0)
      return [1, 2]
    else if (span.columnIndex === 1)
      return [0, 0]
  }
}

<\/script>

<template>
  <el-table
        :data="tableData"
        style="width: 100%"
        :span-method="arraySpanMethod"
      >
        <el-table-column type="index" />
        <el-table-column type="expand">
          <template #default="props">
            <div m="4">
              <p m="t-0 b-2">
                Status: {{ props.row.status }}
              </p>
              <p m="t-0 b-2">
                City: {{ props.row.city }}
              </p>
              <p m="t-0 b-2">
                Address: {{ props.row.address }}
              </p>
              <h3>Family</h3>
              <el-table :data="props.row.family" :border="childBorder">
                <el-table-column label="Name" prop="name" />
                <el-table-column label="State" prop="state" />
                <el-table-column label="City" prop="city" />
                <el-table-column label="Address" prop="address" />
                <el-table-column label="Zip" prop="zip" />
              </el-table>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Date" width="180">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-icon><timer /></el-icon>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Name" width="180">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <div>name: {{ scope.row.name }}</div>
                <div>address: {{ scope.row.address }}</div>
              </template>
              <template #reference>
                <el-tag>{{ scope.row.name }}</el-tag>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="Operations">
          <template #header>
            <el-input v-model="search" size="small" placeholder="Type to search" />
          </template>
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
              Edit
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
</template>
`;
    });
    const __returned__ = { tableData, generateData, basicTableData, basicTableColumn, tableRowClassName, arraySpanMethod, basicTableSource, customTableSource, get sizeOptions() {
      return sizeOptions;
    }, get alignOptions() {
      return alignOptions;
    }, get tableLayoutOptions() {
      return tableLayoutOptions;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { m: "4" };
const _hoisted_2 = { m: "t-0 b-2" };
const _hoisted_3 = { m: "t-0 b-2" };
const _hoisted_4 = { m: "t-0 b-2" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "h3",
  null,
  "Family",
  -1
  /* HOISTED */
);
const _hoisted_6 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_7 = { style: { "margin-left": "10px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_Variant = resolveComponent("Variant");
  const _component_timer = resolveComponent("timer");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_popover = resolveComponent("el-popover");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_button = resolveComponent("el-button");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Data/Table",
    icon: "material-symbols-light:data-table-outline",
    layout: {
      type: "single",
      iframe: false
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Table",
        source: $setup.basicTableSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.showTableData,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.basicTableData.showTableData = $event),
            title: "ShowTableData"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.basicTableData.emptyText,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.basicTableData.emptyText = $event),
            title: "EmptyText"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.basicTableData.height,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.basicTableData.height = $event),
            title: "Height"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicTableData.tableLayout,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.basicTableData.tableLayout = $event),
            title: "Table Layout",
            options: $setup.basicTableData.tableLayoutOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicTableData.size,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.basicTableData.size = $event),
            title: "Size",
            options: $setup.basicTableData.sizeOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.basicTableData.align,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.basicTableData.align = $event),
            title: "Align",
            options: $setup.basicTableData.alignOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.stripe,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.basicTableData.stripe = $event),
            title: "Stripe"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.border,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.basicTableData.border = $event),
            title: "Border"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.fixed,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.basicTableData.fixed = $event),
            title: "Fixed"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.sortable,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.basicTableData.sortable = $event),
            title: "Sortable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.fit,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.basicTableData.fit = $event),
            title: "Fit"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.showHeader,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.basicTableData.showHeader = $event),
            title: "ShowHeader"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.highlightCurrentRow,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.basicTableData.highlightCurrentRow = $event),
            title: "HighlightCurrentRow"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.showOverflowTooltip,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.basicTableData.showOverflowTooltip = $event),
            title: "ShowOverflowTooltip"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.flexible,
            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.basicTableData.flexible = $event),
            title: "Flexible"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.scrollbarAlwaysOn,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.basicTableData.scrollbarAlwaysOn = $event),
            title: "ScrollbarAlwaysOn"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.showSummary,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.basicTableData.showSummary = $event),
            title: "ShowSummary"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.basicTableData.resizable,
            "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.basicTableData.resizable = $event),
            title: "Resizable"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_table, {
            "empty-text": $setup.basicTableData.emptyText,
            data: $setup.basicTableData.showTableData ? $setup.tableData : [],
            stripe: $setup.basicTableData.stripe,
            border: $setup.basicTableData.border,
            "row-class-name": $setup.tableRowClassName,
            height: $setup.basicTableData.height,
            style: { "width": "100%" },
            size: $setup.basicTableData.size,
            fit: $setup.basicTableData.fit,
            "show-header": $setup.basicTableData.showHeader,
            "highlight-current-row": $setup.basicTableData.highlightCurrentRow,
            flexible: $setup.basicTableData.flexible,
            "scrollbar-always-on": $setup.basicTableData.scrollbarAlwaysOn,
            "show-summary": $setup.basicTableData.showSummary,
            "table-layout": $setup.basicTableData.tableLayout
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.basicTableColumn, (item, index) => {
                  return openBlock(), createBlock(_component_el_table_column, {
                    key: index,
                    "min-width": "120px",
                    label: item.label,
                    prop: item.prop,
                    fixed: item.label === "Name" || item.label === "Status" ? $setup.basicTableData.fixed : false,
                    align: $setup.basicTableData.align,
                    "show-overflow-tooltip": $setup.basicTableData.showOverflowTooltip,
                    sortable: $setup.basicTableData.sortable
                  }, {
                    header: withCtx(() => [
                      createBaseVNode(
                        "span",
                        null,
                        toDisplayString(item.label),
                        1
                        /* TEXT */
                      )
                    ]),
                    default: withCtx((scope) => [
                      createBaseVNode(
                        "span",
                        null,
                        toDisplayString(scope.row[item.prop]),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["label", "prop", "fixed", "align", "show-overflow-tooltip", "sortable"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["empty-text", "data", "stripe", "border", "height", "size", "fit", "show-header", "highlight-current-row", "flexible", "scrollbar-always-on", "show-summary", "table-layout"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Custom Table",
        source: $setup.customTableSource
      }, {
        controls: withCtx(() => []),
        default: withCtx(() => [
          createVNode(_component_el_table, {
            data: $setup.tableData,
            style: { "width": "100%" },
            "span-method": $setup.arraySpanMethod
          }, {
            default: withCtx(() => [
              createVNode(_component_el_table_column, { type: "index" }),
              createVNode(_component_el_table_column, { type: "expand" }, {
                default: withCtx((props) => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode(
                      "p",
                      _hoisted_2,
                      " Status: " + toDisplayString(props.row.status),
                      1
                      /* TEXT */
                    ),
                    createBaseVNode(
                      "p",
                      _hoisted_3,
                      " City: " + toDisplayString(props.row.city),
                      1
                      /* TEXT */
                    ),
                    createBaseVNode(
                      "p",
                      _hoisted_4,
                      " Address: " + toDisplayString(props.row.address),
                      1
                      /* TEXT */
                    ),
                    _hoisted_5,
                    createVNode(_component_el_table, {
                      data: props.row.family,
                      border: _ctx.childBorder
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_table_column, {
                          label: "Name",
                          prop: "name"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "State",
                          prop: "state"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "City",
                          prop: "city"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "Address",
                          prop: "address"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "Zip",
                          prop: "zip"
                        })
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["data", "border"])
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_table_column, {
                label: "Date",
                width: "180"
              }, {
                default: withCtx((scope) => [
                  createBaseVNode("div", _hoisted_6, [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(_component_timer)
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createBaseVNode(
                      "span",
                      _hoisted_7,
                      toDisplayString(scope.row.date),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_table_column, {
                label: "Name",
                width: "180"
              }, {
                default: withCtx((scope) => [
                  createVNode(
                    _component_el_popover,
                    {
                      effect: "light",
                      trigger: "hover",
                      placement: "top",
                      width: "auto"
                    },
                    {
                      default: withCtx(() => [
                        createBaseVNode(
                          "div",
                          null,
                          "name: " + toDisplayString(scope.row.name),
                          1
                          /* TEXT */
                        ),
                        createBaseVNode(
                          "div",
                          null,
                          "address: " + toDisplayString(scope.row.address),
                          1
                          /* TEXT */
                        )
                      ]),
                      reference: withCtx(() => [
                        createVNode(
                          _component_el_tag,
                          null,
                          {
                            default: withCtx(() => [
                              createTextVNode(
                                toDisplayString(scope.row.name),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_table_column, { label: "Operations" }, {
                header: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: _ctx.search,
                    "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => _ctx.search = $event),
                    size: "small",
                    placeholder: "Type to search"
                  }, null, 8, ["modelValue"])
                ]),
                default: withCtx((scope) => [
                  createVNode(_component_el_button, {
                    size: "small",
                    onClick: ($event) => _ctx.handleEdit(scope.$index, scope.row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Edit ")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["onClick"]),
                  createVNode(_component_el_button, {
                    size: "small",
                    type: "danger",
                    onClick: ($event) => _ctx.handleDelete(scope.$index, scope.row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete ")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["onClick"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Data/Table/table.story.vue";
const table_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Data/Table/table.story.vue"]]);
export {
  table_story as default
};
