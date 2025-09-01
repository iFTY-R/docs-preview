const __resolved__virtual_storySource_srcComponentsFormCascaderStoryVue = `<script setup lang="ts">\r
import { logEvent } from 'histoire/client'\r
import { ref } from 'vue'\r
import type { CascaderOption, CascaderProps } from 'element-plus'\r
\r
const value1 = ref([])\r
const clearable = ref(true)\r
const lastLevel = ref(true)\r
const filterable = ref(true)\r
const anyLevelProps = ref({\r
  multiple: false,\r
  checkStrictly: true,\r
})\r
const props = ref<CascaderProps>({\r
  expandTrigger: 'hover',\r
})\r
const multipleProps = ref({\r
  multiple: true,\r
})\r
let id = 0\r
const dynamicProps: CascaderProps = {\r
  lazy: true,\r
  lazyLoad(node, resolve) {\r
    const { level } = node\r
    setTimeout(() => {\r
      const nodes = Array.from({ length: level + 1 }).map(() => ({\r
        value: ++id,\r
        label: \`Option - \${id}\`,\r
        leaf: level >= 2,\r
      }))\r
      // Invoke \`resolve\` callback to return the child nodes data and indicate the loading is finished.\r
      resolve(nodes)\r
    }, 1000)\r
  },\r
}\r
function handleChange(value: any) {\r
  logEvent('change', value)\r
}\r
\r
const options: CascaderOption[] = [\r
  {\r
    value: 'guide',\r
    label: 'Guide',\r
    children: [\r
      {\r
        value: 'disciplines',\r
        label: 'Disciplines',\r
        children: [\r
          {\r
            value: 'consistency',\r
            label: 'Consistency',\r
          },\r
          {\r
            value: 'feedback',\r
            label: 'Feedback',\r
          },\r
          {\r
            value: 'efficiency',\r
            label: 'Efficiency',\r
          },\r
          {\r
            value: 'controllability',\r
            label: 'Controllability',\r
          },\r
        ],\r
      },\r
      {\r
        value: 'navigation',\r
        label: 'Navigation',\r
        children: [\r
          {\r
            value: 'side nav',\r
            label: 'Side Navigation',\r
          },\r
          {\r
            value: 'top nav',\r
            label: 'Top Navigation',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    value: 'component',\r
    label: 'Component',\r
    children: [\r
      {\r
        value: 'basic',\r
        label: 'Basic',\r
        children: [\r
          {\r
            value: 'layout',\r
            label: 'Layout',\r
          },\r
          {\r
            value: 'color',\r
            label: 'Color',\r
          },\r
          {\r
            value: 'typography',\r
            label: 'Typography',\r
          },\r
          {\r
            value: 'icon',\r
            label: 'Icon',\r
          },\r
          {\r
            value: 'button',\r
            label: 'Button',\r
          },\r
        ],\r
      },\r
      {\r
        value: 'form',\r
        label: 'Form',\r
        children: [\r
          {\r
            value: 'radio',\r
            label: 'Radio',\r
          },\r
          {\r
            value: 'checkbox',\r
            label: 'Checkbox',\r
          },\r
          {\r
            value: 'input',\r
            label: 'Input',\r
          },\r
          {\r
            value: 'input-number',\r
            label: 'InputNumber',\r
          },\r
          {\r
            value: 'select',\r
            label: 'Select',\r
          },\r
          {\r
            value: 'cascader',\r
            label: 'Cascader',\r
          },\r
          {\r
            value: 'switch',\r
            label: 'Switch',\r
          },\r
          {\r
            value: 'slider',\r
            label: 'Slider',\r
          },\r
          {\r
            value: 'time-picker',\r
            label: 'TimePicker',\r
          },\r
          {\r
            value: 'date-picker',\r
            label: 'DatePicker',\r
          },\r
          {\r
            value: 'datetime-picker',\r
            label: 'DateTimePicker',\r
          },\r
          {\r
            value: 'upload',\r
            label: 'Upload',\r
          },\r
          {\r
            value: 'rate',\r
            label: 'Rate',\r
          },\r
          {\r
            value: 'form',\r
            label: 'Form',\r
          },\r
        ],\r
      },\r
      {\r
        value: 'data',\r
        label: 'Data',\r
        children: [\r
          {\r
            value: 'table',\r
            label: 'Table',\r
          },\r
          {\r
            value: 'tag',\r
            label: 'Tag',\r
          },\r
          {\r
            value: 'progress',\r
            label: 'Progress',\r
          },\r
          {\r
            value: 'tree',\r
            label: 'Tree',\r
          },\r
          {\r
            value: 'pagination',\r
            label: 'Pagination',\r
          },\r
          {\r
            value: 'badge',\r
            label: 'Badge',\r
          },\r
        ],\r
      },\r
      {\r
        value: 'notice',\r
        label: 'Notice',\r
        children: [\r
          {\r
            value: 'alert',\r
            label: 'Alert',\r
          },\r
          {\r
            value: 'loading',\r
            label: 'Loading',\r
          },\r
          {\r
            value: 'message',\r
            label: 'Message',\r
          },\r
          {\r
            value: 'message-box',\r
            label: 'MessageBox',\r
          },\r
          {\r
            value: 'notification',\r
            label: 'Notification',\r
          },\r
        ],\r
      },\r
      {\r
        value: 'navigation',\r
        label: 'Navigation',\r
        children: [\r
          {\r
            value: 'menu',\r
            label: 'Menu',\r
          },\r
          {\r
            value: 'tabs',\r
            label: 'Tabs',\r
          },\r
          {\r
            value: 'breadcrumb',\r
            label: 'Breadcrumb',\r
          },\r
          {\r
            value: 'dropdown',\r
            label: 'Dropdown',\r
          },\r
          {\r
            value: 'steps',\r
            label: 'Steps',\r
          },\r
        ],\r
      },\r
      {\r
        value: 'others',\r
        label: 'Others',\r
        children: [\r
          {\r
            value: 'dialog',\r
            label: 'Dialog',\r
          },\r
          {\r
            value: 'tooltip',\r
            label: 'Tooltip',\r
          },\r
          {\r
            value: 'popover',\r
            label: 'Popover',\r
          },\r
          {\r
            value: 'card',\r
            label: 'Card',\r
          },\r
          {\r
            value: 'carousel',\r
            label: 'Carousel',\r
          },\r
          {\r
            value: 'collapse',\r
            label: 'Collapse',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    value: 'resource',\r
    label: 'Resource',\r
    children: [\r
      {\r
        value: 'axure',\r
        label: 'Axure Components',\r
      },\r
      {\r
        value: 'sketch',\r
        label: 'Sketch Templates',\r
      },\r
      {\r
        value: 'docs',\r
        label: 'Design Documentation',\r
      },\r
    ],\r
  },\r
]\r
const disableOptions: CascaderOption[] = [\r
  {\r
    value: 'guide',\r
    label: 'Guide',\r
    disabled: true,\r
    children: [\r
      {\r
        value: 'disciplines',\r
        label: 'Disciplines',\r
        children: [\r
          {\r
            value: 'consistency',\r
            label: 'Consistency',\r
          },\r
          {\r
            value: 'feedback',\r
            label: 'Feedback',\r
          },\r
          {\r
            value: 'efficiency',\r
            label: 'Efficiency',\r
          },\r
          {\r
            value: 'controllability',\r
            label: 'Controllability',\r
          },\r
        ],\r
      },\r
      {\r
        value: 'navigation',\r
        label: 'Navigation',\r
        children: [\r
          {\r
            value: 'side nav',\r
            label: 'Side Navigation',\r
          },\r
          {\r
            value: 'top nav',\r
            label: 'Top Navigation',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    value: 'component',\r
    label: 'Component',\r
    children: [\r
      {\r
        value: 'basic',\r
        label: 'Basic',\r
        children: [\r
          {\r
            value: 'layout',\r
            label: 'Layout',\r
          },\r
          {\r
            value: 'color',\r
            label: 'Color',\r
          },\r
          {\r
            value: 'typography',\r
            label: 'Typography',\r
          },\r
          {\r
            value: 'icon',\r
            label: 'Icon',\r
          },\r
          {\r
            value: 'button',\r
            label: 'Button',\r
          },\r
        ],\r
      },\r
      {\r
        value: 'form',\r
        label: 'Form',\r
        children: [\r
          {\r
            value: 'radio',\r
            label: 'Radio',\r
          },\r
          {\r
            value: 'checkbox',\r
            label: 'Checkbox',\r
          },\r
          {\r
            value: 'input',\r
            label: 'Input',\r
          },\r
          {\r
            value: 'input-number',\r
            label: 'InputNumber',\r
          },\r
          {\r
            value: 'select',\r
            label: 'Select',\r
          },\r
          {\r
            value: 'cascader',\r
            label: 'Cascader',\r
          },\r
          {\r
            value: 'switch',\r
            label: 'Switch',\r
          },\r
          {\r
            value: 'slider',\r
            label: 'Slider',\r
          },\r
          {\r
            value: 'time-picker',\r
            label: 'TimePicker',\r
          },\r
          {\r
            value: 'date-picker',\r
            label: 'DatePicker',\r
          },\r
          {\r
            value: 'datetime-picker',\r
            label: 'DateTimePicker',\r
          },\r
          {\r
            value: 'upload',\r
            label: 'Upload',\r
          },\r
          {\r
            value: 'rate',\r
            label: 'Rate',\r
          },\r
          {\r
            value: 'form',\r
            label: 'Form',\r
          },\r
        ],\r
      },\r
      {\r
        value: 'data',\r
        label: 'Data',\r
        children: [\r
          {\r
            value: 'table',\r
            label: 'Table',\r
          },\r
          {\r
            value: 'tag',\r
            label: 'Tag',\r
          },\r
          {\r
            value: 'progress',\r
            label: 'Progress',\r
          },\r
          {\r
            value: 'tree',\r
            label: 'Tree',\r
          },\r
          {\r
            value: 'pagination',\r
            label: 'Pagination',\r
          },\r
          {\r
            value: 'badge',\r
            label: 'Badge',\r
          },\r
        ],\r
      },\r
      {\r
        value: 'notice',\r
        label: 'Notice',\r
        children: [\r
          {\r
            value: 'alert',\r
            label: 'Alert',\r
          },\r
          {\r
            value: 'loading',\r
            label: 'Loading',\r
          },\r
          {\r
            value: 'message',\r
            label: 'Message',\r
          },\r
          {\r
            value: 'message-box',\r
            label: 'MessageBox',\r
          },\r
          {\r
            value: 'notification',\r
            label: 'Notification',\r
          },\r
        ],\r
      },\r
      {\r
        value: 'navigation',\r
        label: 'Navigation',\r
        children: [\r
          {\r
            value: 'menu',\r
            label: 'Menu',\r
          },\r
          {\r
            value: 'tabs',\r
            label: 'Tabs',\r
          },\r
          {\r
            value: 'breadcrumb',\r
            label: 'Breadcrumb',\r
          },\r
          {\r
            value: 'dropdown',\r
            label: 'Dropdown',\r
          },\r
          {\r
            value: 'steps',\r
            label: 'Steps',\r
          },\r
        ],\r
      },\r
      {\r
        value: 'others',\r
        label: 'Others',\r
        children: [\r
          {\r
            value: 'dialog',\r
            label: 'Dialog',\r
          },\r
          {\r
            value: 'tooltip',\r
            label: 'Tooltip',\r
          },\r
          {\r
            value: 'popover',\r
            label: 'Popover',\r
          },\r
          {\r
            value: 'card',\r
            label: 'Card',\r
          },\r
          {\r
            value: 'carousel',\r
            label: 'Carousel',\r
          },\r
          {\r
            value: 'collapse',\r
            label: 'Collapse',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    value: 'resource',\r
    label: 'Resource',\r
    children: [\r
      {\r
        value: 'axure',\r
        label: 'Axure Components',\r
      },\r
      {\r
        value: 'sketch',\r
        label: 'Sketch Templates',\r
      },\r
      {\r
        value: 'docs',\r
        label: 'Design Documentation',\r
      },\r
    ],\r
  },\r
]\r
const expandTriggerList = [\r
  {\r
    label: 'click',\r
    value: 'click',\r
  },\r
  {\r
    label: 'hover',\r
    value: 'hover',\r
  },\r
]\r
<\/script>\r
\r
<template>\r
  <Story title="Form/Cascader" icon="octicon:multi-select-24">\r
    <Variant title="Basic Usage">\r
      <el-cascader\r
        v-model="value1"\r
        :options="options"\r
        :props="props"\r
        @change="handleChange"\r
      />\r
      <template #controls>\r
        <HstRadio\r
          v-model="props.expandTrigger"\r
          :options="expandTriggerList"\r
          title="Trigger"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Disable option">\r
      <el-cascader\r
        v-model="value1"\r
        :options="disableOptions"\r
        @change="handleChange"\r
      />\r
    </Variant>\r
    <Variant title="Clearable">\r
      <el-cascader :options="options" :clearable="clearable" />\r
      <template #controls>\r
        <HstCheckbox v-model="clearable" title="Clearable" />\r
      </template>\r
    </Variant>\r
    <Variant title="Display only the last level">\r
      <el-cascader :options="options" :show-all-levels="!lastLevel" />\r
      <template #controls>\r
        <HstCheckbox v-model="lastLevel" title="Last level" />\r
      </template>\r
    </Variant>\r
    <Variant title="Multiple Selection">\r
      <el-cascader :props="multipleProps" :options="options" />\r
      <template #controls>\r
        <HstCheckbox v-model="multipleProps.multiple" title="Multiple" />\r
      </template>\r
    </Variant>\r
    <Variant title="Select any level of options">\r
      <el-cascader :options="options" :props="anyLevelProps" clearable />\r
      <template #controls>\r
        <HstCheckbox\r
          v-model="anyLevelProps.multiple"\r
          title="Multiple"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Dynamic loading">\r
      <el-cascader :props="dynamicProps" />\r
    </Variant>\r
    <Variant title="Filterable">\r
      <el-cascader\r
        placeholder="Try searchingL Guide"\r
        :options="options"\r
        :props="multipleProps"\r
        :filterable="filterable"\r
      />\r
      <template #controls>\r
        <HstCheckbox\r
          v-model="multipleProps.multiple"\r
          title="Multiple"\r
        />\r
        <HstCheckbox v-model="filterable" title="Filterable" />\r
      </template>\r
    </Variant>\r
    <Variant title="Custom option content">\r
      <el-cascader :options="options">\r
        <template #default="{ node, data }">\r
          <span>{{ data.label }}</span>\r
          <span v-if="!node.isLeaf">({{ data.children.length }})</span>\r
        </template>\r
      </el-cascader>\r
    </Variant>\r
    <Variant title="Cascader panel">\r
      <el-cascader-panel :options="options" :props="multipleProps" />\r
      <template #controls>\r
        <HstCheckbox\r
          v-model="multipleProps.multiple"\r
          title="Multiple"\r
        />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic Usage\r
There are two ways to expand child option items.\r
\r
Assigning the \`options\` attribute to an array of options renders a Cascader. The \`props.expandTrigger\` attribute defines how child options are expanded.\r
## Disable option\r
Disable an option by setting a \`disabled\` field in the option object.\r
\r
In this example, the first item in \`options\` array has a \`disabled: true\` field, so it is \`disabled\`. By default, Cascader checks the disabled field in each option object; if you are using another field name to indicate whether an option is disabled, you can assign it in the \`props.disabled\` attribute (see the API table below for details). And of course, field name \`value\`, \`label\` and \`children\` can also be customized in the same way.\r
## Clearable\r
Set \`clearable\` attribute for \`el-cascader\` and a clear icon will appear when selected and hovered\r
## Disaplay only last level\r
The input can display only the last level instead of all levels.\r
\r
The \`show-all-levels\` attribute defines if all levels are displayed. If it is \`false\`, only the last level is displayed.\r
## Multiple Selection\r
Add :props="props" in tag and set data props = { multiple: true } to use multiple selection.\r
\r
## Select any level of options\r
In single selection, only the leaf nodes can be checked, and in multiple selection, check parent nodes will lead to leaf nodes be checked eventually. When enable this feature, it can make parent and child nodes unlinked and you can select any level of options.\r
\r
Set \`props.checkStrictly = true\` to make checked state of a node not affects its parent nodes and child nodes, and then you can select any level of options.\r
\r
## Dynamic loading\r
Dynamic load its child nodes when checked a node.\r
\r
Set \`lazy = true\` to use dynamic loading, and you have to specify how to load the data source by \`lazyload\`. There are two parameters of \`lazyload\`,the first parameter \`node\` is the node currently clicked, and the \`resolve\` is a callback that indicate loading is finished which must invoke. To display the status of node more accurately, you can add a \`leaf\` field (can be modified by \`props.leaf\`) to indicate whether it is a leaf node. Otherwise, it will be inferred by if has any child nodes.\r
## Filterable\r
Search and select options with a keyword.\r
\r
Adding \`filterable\` to \`el-cascader\` enables filtering. Cascader will match nodes whose label or parent's label (according to \`show-all-levels\`) includes input keyword. Of course, you can customize search logic by \`filter-method\` which accepts a function, the first parameter is \`node\`, the second is \`keyword\`, and need return a boolean value indicating whether it hits.\r
## Custom option content\r
You can customize the content of cascader node.\r
\r
You can customize the content of cascader node by \`scoped slot\`. You'll have access to \`node\` and \`data\` in the scope, standing for the Node object and node data of the current node respectively.\r
\r
## Cascader panel\r
\`CascaderPanel\` is the core component of \`Cascader\` which has various of features such as single selection, multiple selection, dynamic loading and so on.\r
\r
Just like \`el-cascader\`, you can set alternative \`options\` by options, and enable other features by \`props\`, see the API form below for details.\r
</docs>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormCascaderStoryVue as default
};
