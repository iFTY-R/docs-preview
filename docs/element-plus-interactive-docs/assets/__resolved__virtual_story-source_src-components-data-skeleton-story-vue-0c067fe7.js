const __resolved__virtual_storySource_srcComponentsDataSkeletonStoryVue = `<script setup lang="ts">\r
import { onMounted, reactive, ref } from 'vue'\r
\r
interface ListItem {\r
  imgUrl: string\r
  name: string\r
}\r
\r
const animated = ref(true)\r
const rows = ref<number>(5)\r
const loading = reactive([true, false, true])\r
const currentDate = new Date().toDateString()\r
\r
const lists = ref<ListItem[]>([])\r
\r
function setLoading(index: number) {\r
  loading[index] = true\r
  setTimeout(() => {\r
    loading[index] = false\r
  }, 2000)\r
}\r
\r
onMounted(() => {\r
  loading[1] = false\r
  lists.value = [\r
    {\r
      imgUrl:\r
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',\r
      name: 'Deer',\r
    },\r
    {\r
      imgUrl:\r
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',\r
      name: 'Horse',\r
    },\r
    {\r
      imgUrl:\r
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',\r
      name: 'Mountain Lion',\r
    },\r
  ]\r
})\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Data/Skeleton" icon="clarity:avatar-line"\r
    :layout="{\r
      type: 'grid',\r
      width: 700,\r
    }"\r
  >\r
    <Variant title="Basic usage">\r
      <el-skeleton />\r
      <br>\r
      <el-skeleton style="--el-skeleton-circle-size: 100px">\r
        <template #template>\r
          <el-skeleton-item variant="circle" />\r
        </template>\r
      </el-skeleton>\r
    </Variant>\r
    <Variant title="Configurable rows">\r
      <el-skeleton :rows="rows" />\r
      <template #controls>\r
        <HstNumber v-model="rows" title="rows" />\r
      </template>\r
    </Variant>\r
    <Variant title="Animation">\r
      <el-skeleton :rows="5" :animated="animated" />\r
      <template #controls>\r
        <HstCheckbox v-model="animated" title="animated" />\r
      </template>\r
    </Variant>\r
    <Variant title="Customized Template">\r
      <el-skeleton style="width: 240px">\r
        <template #template>\r
          <el-skeleton-item variant="image" style="width: 240px; height: 240px" />\r
          <div style="padding: 14px">\r
            <el-skeleton-item variant="p" style="width: 50%" />\r
            <div\r
              style="\r
                display: flex;\r
                align-items: center;\r
                justify-items: space-between;\r
              "\r
            >\r
              <el-skeleton-item variant="text" style="margin-right: 16px" />\r
              <el-skeleton-item variant="text" style="width: 30%" />\r
            </div>\r
          </div>\r
        </template>\r
      </el-skeleton>\r
    </Variant>\r
    <Variant title="Loading state">\r
      <el-skeleton style="width: 240px" :loading="loading[0]" animated>\r
        <template #template>\r
          <el-skeleton-item variant="image" style="width: 240px; height: 240px" />\r
          <div style="padding: 14px">\r
            <el-skeleton-item variant="h3" style="width: 50%" />\r
            <div class="skeleton-item-wrapper">\r
              <el-skeleton-item variant="text" style="margin-right: 16px" />\r
              <el-skeleton-item variant="text" style="width: 30%" />\r
            </div>\r
          </div>\r
        </template>\r
        <template #default>\r
          <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">\r
            <img\r
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"\r
              class="image"\r
            >\r
            <div style="padding: 14px">\r
              <span>Delicious hamburger</span>\r
              <div class="bottom card-header">\r
                <div class="time">\r
                  {{ currentDate }}\r
                </div>\r
                <el-button text class="button">\r
                  Operation button\r
                </el-button>\r
              </div>\r
            </div>\r
          </el-card>\r
        </template>\r
      </el-skeleton>\r
      <template #controls>\r
        <HstCheckbox v-model="loading[0]" title="loading" />\r
      </template>\r
    </Variant>\r
    <Variant title="Rendering a list of data">\r
      <el-space direction="vertical" alignment="flex-start">\r
        <el-button @click="setLoading(1)">\r
          Click me to reload\r
        </el-button>\r
        <el-skeleton style="width: 240px" :loading="loading[1]" animated :count="3">\r
          <template #template>\r
            <el-skeleton-item variant="image" style="width: 400px; height: 267px" />\r
            <div style="padding: 14px">\r
              <el-skeleton-item variant="h3" style="width: 50%" />\r
              <div class="skeleton-item-wrapper">\r
                <el-skeleton-item variant="text" style="margin-right: 16px" />\r
                <el-skeleton-item variant="text" style="width: 30%" />\r
              </div>\r
            </div>\r
          </template>\r
          <template #default>\r
            <el-card\r
              v-for="item in lists"\r
              :key="item.name"\r
              :body-style="{ padding: '0px', marginBottom: '1px' }"\r
            >\r
              <img :src="item.imgUrl" style="width: 260px; height: 173px; overflow: scroll;" class="image multi-content">\r
              <div style="padding: 14px">\r
                <span>{{ item.name }}</span>\r
                <div class="bottom card-header">\r
                  <div class="time">\r
                    {{ currentDate }}\r
                  </div>\r
                  <el-button text class="button">\r
                    Operation button\r
                  </el-button>\r
                </div>\r
              </div>\r
            </el-card>\r
          </template>\r
        </el-skeleton>\r
      </el-space>\r
    </Variant>\r
    <Variant title="Avoiding rendering bouncing">\r
      <el-space direction="vertical" alignment="flex-start">\r
        <div>\r
          <label style="margin-right: 16px">Switch Loading</label>\r
          <el-switch v-model="loading[2]" />\r
        </div>\r
        <el-skeleton\r
          style="width: 240px"\r
          :loading="loading[2]"\r
          animated\r
          :throttle="500"\r
        >\r
          <template #template>\r
            <el-skeleton-item variant="image" style="width: 240px; height: 240px" />\r
            <div style="padding: 14px">\r
              <el-skeleton-item variant="h3" style="width: 50%" />\r
              <div class="skeleton-item-wrapper">\r
                <el-skeleton-item variant="text" style="margin-right: 16px" />\r
                <el-skeleton-item variant="text" style="width: 30%" />\r
              </div>\r
            </div>\r
          </template>\r
          <template #default>\r
            <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">\r
              <img\r
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"\r
                class="image"\r
              >\r
              <div style="padding: 14px">\r
                <span>Delicious hamburger</span>\r
                <div class="bottom card-header">\r
                  <div class="time">\r
                    {{ currentDate }}\r
                  </div>\r
                  <el-button text class="button">\r
                    operation button\r
                  </el-button>\r
                </div>\r
              </div>\r
            </el-card>\r
          </template>\r
        </el-skeleton>\r
      </el-space>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic usage\r
\r
The basic skeleton.\r
\r
## Configurable rows\r
\r
You can configure the row numbers yourself, for more precise rendering effect, the actual rendered row number will always be 1 row more than the given number, that is because we are rendering a title row with 33% width of the others.\r
\r
## Animation\r
\r
We have provided a switch flag indicating whether showing the loading animation, called animated when this is true, all children of el-skeleton will show animation\r
\r
## Customized Template\r
\r
Element Plus only provides the most common template, sometimes that could be a problem, so you have a slot named template to do that work.\r
\r
Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference.\r
\r
## Loading state\r
\r
When Loading ends, we always need to show the real UI with data to our end users. with the attribute loading we can control whether showing the DOM. You can also use slot default to structure the real DOM element.\r
\r
## Rendering a list of data\r
\r
Most of the time, skeleton is used as indicators of rendering a list of data which haven't been fetched from server yet, then we need to create a list of skeleton out of no where to make it look like it is loading, with count attribute, you can control how many these templates you need to render to the browser.\r
\r
## Avoiding rendering bouncing\r
\r
Sometimes API responds very quickly, when that happens, the skeleton just gets rendered to the DOM then it needs to switch back to real DOM, that causes the sudden flashy. To avoid such thing, you can use the throttle attribute.\r
</docs>\r
\r
<style scoped>\r
.demo-type {\r
  display: flex;\r
  justify-content: space-around;\r
  grid-template-columns: repeat(auto-fill, 320px);\r
}\r
.skeleton-item-wrapper {\r
  display: flex;\r
  align-items: center;\r
  justify-items: space-between;\r
  margin-top: 16px;\r
  height: 16px;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataSkeletonStoryVue as default
};
