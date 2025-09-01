const __resolved__virtual_storySource_srcComponentsDataImageImageStoryVue = `<script setup lang="ts">\r
import { fitList, urls } from './constants'\r
import { isAttribute } from '@/utils'\r
\r
// Basic-Image\r
const basicImageData = reactive({\r
  src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',\r
  fit: 'fill',\r
})\r
const basicSource = computed(() => {\r
  return \`<el-image\r
  src="\${basicImageData.src}"\${isAttribute(\r
    basicImageData.fit !== 'fill',\r
    \`fit="\${basicImageData.fit}"\`)}\r
/>\`\r
})\r
\r
// Placeholder-Image\r
const placeholderImageData = reactive({\r
  src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',\r
  load: false,\r
})\r
function reloadClick() {\r
  placeholderImageData.src = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' + \`?\${new Date()}\`\r
}\r
\r
// Lazy-Image\r
const lazyImageData = reactive({\r
  lazy: true,\r
  urls,\r
})\r
const lazySource = computed(() => {\r
  return \`<script setup lang="ts">\r
const urls = [\r
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',\r
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',\r
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',\r
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',\r
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',\r
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',\r
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',\r
]\r
<\\/script>\r
\r
<el-image\r
  v-for="url in urls"\r
  :key="url"\r
  :src="url"\${isAttribute(\r
    lazyImageData.lazy,\r
    \`lazy="\${lazyImageData.lazy}"\`)}\r
/>\`\r
})\r
\r
// Image Preview\r
const previewImageData = reactive({\r
  url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',\r
  urls,\r
})\r
const previewSource = computed(() => {\r
  return \`<script setup lang="ts">\r
const urls = [\r
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',\r
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',\r
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',\r
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',\r
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',\r
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',\r
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',\r
]\r
const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'\r
<\\/script>\r
\r
<el-image\r
  style="width: 100px; height: 100px"\r
  :src="url"\r
  :preview-src-list="urls"\r
  :initial-index="4"\r
  fit="cover"\r
/>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Data/Image"\r
    :layout="{\r
      type: 'grid',\r
      width: 600,\r
    }"\r
    icon="mdi:file-image-outline"\r
  >\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <el-image\r
        style="width: 100px; height: 100px"\r
        :src="basicImageData.src"\r
        :fit="basicImageData.fit"\r
      />\r
      <template #controls>\r
        <HstRadio\r
          v-model="basicImageData.fit"\r
          title="Fit"\r
          :options="fitList"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Placeholder"\r
    >\r
      <el-image\r
        :src="placeholderImageData.src"\r
      >\r
        <template #placeholder>\r
          <div>\r
            Loading<span class="dot">...</span>\r
          </div>\r
        </template>\r
      </el-image>\r
      <template #controls>\r
        <div class="container">\r
          <span\r
            class="title"\r
          >\r
            Reload\r
          </span>\r
          <el-button :loading="placeholderImageData.load" @click="reloadClick">\r
            Reload\r
          </el-button>\r
        </div>\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Lazy Load"\r
      :source="lazySource"\r
    >\r
      <div class="demo-image__lazy">\r
        <el-image\r
          v-for="url in lazyImageData.urls"\r
          :key="url"\r
          :src="url"\r
          :lazy="lazyImageData.lazy"\r
        />\r
      </div>\r
      <template #controls>\r
        <HstCheckbox v-model="lazyImageData.lazy" title="Lazy" />\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Image Preview"\r
      :source="previewSource"\r
    >\r
      <div class="demo-image__preview">\r
        <el-image\r
          style="width: 100px; height: 100px"\r
          :src="previewImageData.url"\r
          :preview-src-list="previewImageData.urls"\r
          fit="cover"\r
        />\r
      </div>\r
      <template #controls>\r
        <!-- <HstCheckbox v-model="lazyImageData.lazy" title="Lazy" /> -->\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
.container {\r
  padding: 0.5rem;\r
  gap: 0.5rem;\r
  align-items: center;\r
  flex-wrap: wrap;\r
  cursor: pointer;\r
  display: flex;\r
}\r
.title {\r
  white-space: nowrap;\r
  text-overflow: ellipsis;\r
  overflow: hidden;\r
  flex-shrink: 0;\r
  width: 7rem;\r
}\r
.demo-image__lazy {\r
  height: 400px;\r
  overflow-y: auto;\r
}\r
.demo-image__lazy .el-image {\r
  display: block;\r
  min-height: 200px;\r
  margin-bottom: 10px;\r
}\r
.demo-image__lazy .el-image:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.demo-image__preview {\r
  height: 600px;\r
  overflow-y: auto;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataImageImageStoryVue as default
};
