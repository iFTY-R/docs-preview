const __resolved__virtual_storySource_srcComponentsFeedbackMessageMessageStoryVue = `<script setup lang="ts">\r
import type { MessageProps } from 'element-plus'\r
import { ElMessage } from 'element-plus'\r
import { h } from 'vue'\r
import { logEvent } from 'histoire/client'\r
import { typeList } from './constants'\r
\r
// Basic-Usage\r
const basicMessageData = reactive({\r
  message: 'message',\r
  offset: ref<MessageProps['offset']>(20),\r
  center: ref<MessageProps['center']>(true),\r
  showClose: ref<MessageProps['showClose']>(true),\r
  duration: ref<MessageProps['duration']>(3000),\r
  type: ref<MessageProps['type']>('info'),\r
  typeList,\r
})\r
function basicMessageOpen() {\r
  const basicElMessageInstance = ElMessage({\r
    message: basicMessageData.message,\r
    offset: basicMessageData.offset,\r
    center: basicMessageData.center,\r
    showClose: basicMessageData.showClose,\r
    duration: basicMessageData.duration,\r
    type: basicMessageData.type,\r
    onClose: () => {\r
      logEvent('onClose', { log: 'basicElMessageInstance will be closed' })\r
      basicElMessageInstance.close()\r
    },\r
  })\r
}\r
const basicMessageSource = computed(() => {\r
  return \`<script setup lang="ts">\r
  import { h } from 'vue'\r
  import { ElMessage } from 'element-plus'\r
\r
  const basicMessageOpen = () => {\r
    const basicElMessageInstance = ElMessage({\r
      message: '\${basicMessageData.message}',\r
      offset: \${basicMessageData.offset},\${basicMessageData.center ? \`\\n      center: \${basicMessageData.center},\` : ''}\${basicMessageData.showClose ? \`\\n      showClose: \${basicMessageData.showClose},\` : ''}\r
      duration: \${basicMessageData.duration},\r
      type: '\${basicMessageData.type}',\r
      onClose: () => {\r
        console.log(log: 'basicElMessageInstance will be closed')\r
        basicElMessageInstance.close()\r
      },\r
    })\r
  }\r
<\\/script>\r
\r
<template>\r
  <el-button :plain="true" @click="basicMessageOpen">Show basic message</el-button>\r
</template>\`\r
})\r
\r
// VNode-Message\r
function VNodeMessageOpen() {\r
  ElMessage({\r
    message: h('p', null, [\r
      h('span', null, 'Message can be '),\r
      h('i', { style: 'color: teal' }, 'VNode'),\r
    ]),\r
  })\r
}\r
const VNodeMessageSource = computed(() => {\r
  return \`<script setup lang="ts">\r
  import { h } from 'vue'\r
  import { ElMessage } from 'element-plus'\r
\r
  const VNodeMessageOpen = () => {\r
    ElMessage({\r
      message: h('p', null, [\r
        h('span', null, 'Message can be '),\r
        h('i', { style: 'color: teal' }, 'VNode'),\r
      ]),\r
    })\r
  }\r
<\\/script>\r
\r
<template>\r
  <el-button :plain="true" @click="VNodeMessageOpen">show VNode message</el-button>\r
</template>\`\r
})\r
\r
// Html-Message\r
const htmlMessageData = reactive({\r
  message: '<strong>This is <i>HTML</i> string</strong>',\r
  dangerouslyUseHTMLString: ref<MessageProps['dangerouslyUseHTMLString']>(true),\r
  type: ref<MessageProps['type']>('info'),\r
  typeList,\r
})\r
function htmlMessageOpen() {\r
  ElMessage({\r
    message: htmlMessageData.message,\r
    dangerouslyUseHTMLString: htmlMessageData.dangerouslyUseHTMLString,\r
    type: htmlMessageData.type,\r
  })\r
}\r
const htmlMessageSource = computed(() => {\r
  return \`<script setup lang="ts">\r
  import { ElMessage } from 'element-plus'\r
\r
  const htmlMessageOpen = () => {\r
    ElMessage({\r
      message: '\${htmlMessageData.message}',\${htmlMessageData.dangerouslyUseHTMLString ? \`\\n      dangerouslyUseHTMLString: \${htmlMessageData.dangerouslyUseHTMLString},\` : ''}\r
      type: '\${htmlMessageData.type}',\r
    })\r
  }\r
<\\/script>\r
\r
<template>\r
  <el-button :plain="true" @click="htmlMessageOpen">Show HTML message</el-button>\r
</template>\`\r
})\r
\r
// Grouping-Message\r
const groupingMessageData = reactive({\r
  message: 'message',\r
  grouping: ref<MessageProps['grouping']>(true),\r
  type: ref<MessageProps['type']>('info'),\r
  typeList,\r
})\r
function groupingMessageOpen() {\r
  ElMessage({\r
    message: groupingMessageData.message,\r
    grouping: groupingMessageData.grouping,\r
    type: groupingMessageData.type,\r
  })\r
}\r
const groupingMessageSource = computed(() => {\r
  return \`<script setup lang="ts">\r
  import { ElMessage } from 'element-plus'\r
\r
  const groupingMessageOpen = () => {\r
    ElMessage({\r
      message: '\${groupingMessageData.message}',\${groupingMessageData.grouping ? \`\\n      grouping: \${groupingMessageData.grouping},\` : ''}\r
      type: '\${groupingMessageData.type}',\r
    })\r
  }\r
<\\/script>\r
\r
<template>\r
  <el-button :plain="true" @click="groupingMessageOpen">Show grouping message</el-button>\r
</template>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Feedback/Message" icon="mdi:message-text-outline">\r
    <Variant title="Basic Usage" :source="basicMessageSource">\r
      <el-button :plain="true" @click="basicMessageOpen">\r
        Show basic message\r
      </el-button>\r
      <template #controls>\r
        <HstText v-model="basicMessageData.message" title="Message" />\r
        <HstNumber v-model="basicMessageData.offset" title="Offset" />\r
        <HstCheckbox v-model="basicMessageData.center" title="Center" />\r
        <HstCheckbox v-model="basicMessageData.showClose" title="Close" />\r
        <HstNumber v-model="basicMessageData.duration" title="Duration" />\r
        <HstRadio\r
          v-model="basicMessageData.type"\r
          title="Type"\r
          :options="basicMessageData.typeList"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="VNode Message" :source="VNodeMessageSource" icon="clarity:nodes-line">\r
      <el-button :plain="true" @click="VNodeMessageOpen">\r
        show VNode message\r
      </el-button>\r
    </Variant>\r
    <Variant title="HTML Message" :source="htmlMessageSource" icon="bi:filetype-html">\r
      <el-button :plain="true" @click="htmlMessageOpen">\r
        Show HTML message\r
      </el-button>\r
      <template #controls>\r
        <HstTextarea v-model="htmlMessageData.message" title="Message" />\r
        <HstCheckbox v-model="htmlMessageData.dangerouslyUseHTMLString" title="useHTMLString" />\r
        <HstRadio\r
          v-model="htmlMessageData.type"\r
          title="Type"\r
          :options="htmlMessageData.typeList"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant title="Grouping Message" :source="groupingMessageSource" icon="uit:layer-group">\r
      <el-button :plain="true" @click="groupingMessageOpen">\r
        Show grouping message\r
      </el-button>\r
      <template #controls>\r
        <HstText v-model="groupingMessageData.message" title="Message" />\r
        <HstCheckbox v-model="groupingMessageData.grouping" title="Grouping" />\r
        <HstRadio\r
          v-model="groupingMessageData.type"\r
          title="Type"\r
          :options="groupingMessageData.typeList"\r
        />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFeedbackMessageMessageStoryVue as default
};
