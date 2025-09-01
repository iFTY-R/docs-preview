const __resolved__virtual_storySource_srcComponentsFeedbackLoadingLoadingStoryVue = `<script setup lang="ts">\r
import { ElLoading } from 'element-plus'\r
import { isAttribute } from '@utils'\r
import { logEvent } from 'histoire/client'\r
\r
// Basic-Loading\r
const basicLoadingData = ref(false)\r
const basicSource = computed(() => {\r
  return \`<template>\r
  <el-card v-loading="\${basicLoadingData.value}"}>\r
    <div class="content">\r
      content\r
    </div>\r
  </el-card>\r
</template>\r
\r
<style scoped>\r
.content {\r
  min-height: 100px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
</style>\r
\`\r
})\r
\r
// Custom Loading\r
const customLoadingData = reactive({\r
  loading: false,\r
  text: '',\r
  spinner: '',\r
  svg: '',\r
  viewBox: '',\r
  background: '',\r
})\r
const customLoadingSource = computed(() => {\r
  return \`<el-card \r
  v-loading="\${customLoadingData.loading}"\${isAttribute(customLoadingData.text !== '',\r
  \`element-loading-text="\${customLoadingData.text}"\`,\r
  )}\${isAttribute(\r
  customLoadingData.spinner !== '',\r
  \`element-loading-spinner="\${customLoadingData.spinner}"\`,\r
  )}\${isAttribute(\r
  customLoadingData.svg !== '',\r
  \`element-loading-svg="\${customLoadingData.svg}"\`,\r
  )}\${isAttribute(\r
  customLoadingData.viewBox !== '',\r
  \`element-loading-svg-view-box="\${customLoadingData.viewBox}"\`,\r
  )}\${isAttribute(\r
  customLoadingData.background !== '',\r
  \`element-loading-background="\${customLoadingData.background}"\`,\r
  )}\r
>\r
  <div class="content">\r
    content\r
  </div>\r
</el-card>\r
\r
<style scoped>\r
.content {\r
  min-height: 100px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
</style>\r
\`\r
})\r
\r
// Full Screen Loading\r
const fullscreenLoading = ref(false)\r
function openFullScreen1() {\r
  logEvent('click', { log: 'Full Screen Loading as a directive' })\r
  fullscreenLoading.value = true\r
  setTimeout(() => {\r
    fullscreenLoading.value = false\r
  }, 2000)\r
}\r
function openFullScreen2() {\r
  logEvent('click', { log: 'Full Screen Loading as a service' })\r
  const loading = ElLoading.service()\r
  setTimeout(() => {\r
    loading.close()\r
  }, 2000)\r
}\r
const fullscreenLoadingSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import { ref } from 'vue'\r
import { ElLoading } from 'element-plus'\r
\r
const fullscreenLoading = ref(false)\r
const openFullScreen1 = () => {\r
  fullscreenLoading.value = true\r
  setTimeout(() => {\r
    fullscreenLoading.value = false\r
  }, 2000)\r
}\r
\r
const openFullScreen2 = () => {\r
  const loading = ElLoading.service()\r
  setTimeout(() => {\r
    loading.close()\r
  }, 2000)\r
}\r
<\\/script>\r
\r
<template>\r
  <el-button\r
    v-loading.fullscreen.lock="fullscreenLoading"\r
    type="primary"\r
    @click="openFullScreen1"\r
  >\r
    As a directive\r
  </el-button>\r
  <el-button type="primary" @click="openFullScreen2"> As a service </el-button>\r
</template>\r
\`\r
})\r
\r
// Service Loading\r
const serviceLoadingData = reactive({\r
  lock: false,\r
  text: '',\r
  spinner: '',\r
  background: '',\r
})\r
function openServiceLoading() {\r
  const loading = ElLoading.service(serviceLoadingData)\r
  setTimeout(() => {\r
    loading.close()\r
  }, 2000)\r
}\r
const serviceLoadingSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import { ElLoading } from 'element-plus'\r
\r
const openServiceLoading = () => {\r
  const loading = ElLoading.service({\r
    lock: \${serviceLoadingData.lock},\${serviceLoadingData.text !== '' ? \`\\n    text: \${serviceLoadingData.text},\` : ''}\${serviceLoadingData.spinner !== '' ? \`\\n    spinner: \${serviceLoadingData.spinner},\` : ''}\${serviceLoadingData.background !== '' ? \`\\n    background: \${serviceLoadingData.background},\` : ''}\r
  })\r
  setTimeout(() => {\r
    loading.close()\r
  }, 2000)\r
}\r
<\\/script>\r
\r
<template>\r
  <el-button type="primary" @click="openServiceLoading"> Service Loading </el-button>\r
</template>\r
\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Feedback/Loading" icon="ep:loading">\r
    <Variant title="Basic usage" :source="basicSource">\r
      <el-card v-loading="basicLoadingData">\r
        <div class="content">\r
          content\r
        </div>\r
      </el-card>\r
      <template #controls>\r
        <HstCheckbox v-model="basicLoadingData" title="v-loading" />\r
      </template>\r
    </Variant>\r
    <Variant title="Custom Loading" :source="customLoadingSource" icon="material-symbols:dashboard-customize-outline">\r
      <el-card\r
        v-loading="customLoadingData.loading"\r
        :element-loading-text="customLoadingData.text"\r
        :element-loading-spinner="customLoadingData.spinner"\r
        :element-loading-svg="customLoadingData.svg"\r
        :element-loading-svg-view-box="customLoadingData.viewBox"\r
        :element-loading-background="customLoadingData.background"\r
      >\r
        <div class="content">\r
          content\r
        </div>\r
      </el-card>\r
      <template #controls>\r
        <HstCheckbox v-model="customLoadingData.loading" title="v-loading" />\r
        <el-divider border-style="dotted" content-position="left">\r
          <span>element-loading</span>\r
        </el-divider>\r
        <HstText v-model="customLoadingData.text" title="text" />\r
        <HstText v-model="customLoadingData.spinner" title="spinner" />\r
        <HstText v-model="customLoadingData.svg" title="svg" />\r
        <HstText v-model="customLoadingData.viewBox" title="svg-view-box" />\r
        <HstColor v-model="customLoadingData.background" title="background" />\r
      </template>\r
    </Variant>\r
    <Variant title="Full Screen Loading" :source="fullscreenLoadingSource" icon="material-symbols:fullscreen-rounded">\r
      <el-button\r
        v-loading.fullscreen.lock="fullscreenLoading"\r
        type="primary"\r
        @click="openFullScreen1"\r
      >\r
        As a directive\r
      </el-button>\r
      <el-button type="primary" @click="openFullScreen2">\r
        As a service\r
      </el-button>\r
    </Variant>\r
    <Variant title="Service Loading" :source="serviceLoadingSource" icon="carbon:edge-service">\r
      <el-button type="primary" @click="openServiceLoading">\r
        Service Loading\r
      </el-button>\r
      <template #controls>\r
        <HstCheckbox v-model="serviceLoadingData.lock" title="Lock" />\r
        <HstText v-model="serviceLoadingData.text" title="Text" />\r
        <HstText v-model="serviceLoadingData.spinner" title="Spinner" />\r
        <HstColor v-model="serviceLoadingData.background" title="Background" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
.content {\r
  min-height: 100px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFeedbackLoadingLoadingStoryVue as default
};
