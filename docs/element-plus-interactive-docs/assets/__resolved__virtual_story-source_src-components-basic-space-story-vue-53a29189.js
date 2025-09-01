const __resolved__virtual_storySource_srcComponentsBasicSpaceStoryVue = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import type { SpaceProps } from 'element-plus'\r
\r
const currentDirection = ref<SpaceProps['direction']>('vertical')\r
const spaceDirectionList: { label: string; value: SpaceProps['direction'] }[] = [\r
  { label: 'horizontal', value: 'horizontal' },\r
  { label: 'vertical', value: 'vertical' },\r
]\r
const spaceSizeList: { label: string; value: SpaceProps['size'] }[] = [\r
  {\r
    label: 'default',\r
    value: 'default',\r
  },\r
  {\r
    label: 'large',\r
    value: 'large',\r
  },\r
  {\r
    label: 'small',\r
    value: 'small',\r
  },\r
]\r
const spaceAlignmentList: { label: string; value: SpaceProps['alignment'] }[] = [\r
  {\r
    label: 'center',\r
    value: 'center',\r
  },\r
  {\r
    label: 'flex-start',\r
    value: 'flex-start',\r
  },\r
  {\r
    label: 'flex-end',\r
    value: 'flex-end',\r
  },\r
  {\r
    label: 'start',\r
    value: 'start',\r
  },\r
  {\r
    label: 'end',\r
    value: 'end',\r
  },\r
]\r
const currentSize = ref<SpaceProps['size']>('default')\r
const customSize = ref<number>(20)\r
const isWrap = ref<SpaceProps['wrap']>(true)\r
const spacer = ref<string>('|')\r
const alignment = ref<SpaceProps['alignment']>('center')\r
const isFill = ref<SpaceProps['fill']>(true)\r
const fillRatio = ref<SpaceProps['fillRatio']>(30)\r
<\/script>\r
\r
<template>\r
  <Story title="Basic/Space" icon="ic:twotone-space-bar">\r
    <Variant title="Basic usage">\r
      <el-space wrap>\r
        <el-button v-for="i in 3" :key="i">\r
          button\r
        </el-button>\r
      </el-space>\r
    </Variant>\r
    <Variant title="Vertical layout">\r
      <el-space :direction="currentDirection">\r
        <el-button v-for="i in 3" :key="i">\r
          button\r
        </el-button>\r
      </el-space>\r
      <template #controls>\r
        <HstRadio v-model="currentDirection" title="Direction" :options="spaceDirectionList" />\r
      </template>\r
    </Variant>\r
    <Variant title="Control the size of the gap">\r
      <el-space direction="vertical" alignment="start" :size="30">\r
        <el-space wrap :size="currentSize">\r
          <el-button v-for="i in 3" :key="i">\r
            button\r
          </el-button>\r
        </el-space>\r
      </el-space>\r
      <template #controls>\r
        <HstRadio v-model="currentSize" title="Size" :options="spaceSizeList" />\r
      </template>\r
    </Variant>\r
    <Variant title="Custom size">\r
      <el-space wrap :size="customSize">\r
        <el-button v-for="i in 3" :key="i">\r
          button\r
        </el-button>\r
      </el-space>\r
      <template #controls>\r
        <HstNumber v-model="customSize" title="Custom Size" />\r
      </template>\r
    </Variant>\r
    <Variant title="Wrap">\r
      <el-space :wrap="isWrap">\r
        <div v-for="i in 3" :key="i">\r
          <el-button text>\r
            Text button\r
          </el-button>\r
        </div>\r
      </el-space>\r
      <template #controls>\r
        <HstCheckbox v-model="isWrap" title="Wrap">\r
          Wrap\r
        </HstCheckbox>\r
      </template>\r
    </Variant>\r
    <Variant title="Separator">\r
      <el-space size="large" direction="vertical">\r
        <el-space size="default" :spacer="spacer">\r
          <div v-for="i in 2" :key="i">\r
            <el-button>button</el-button>\r
          </div>\r
        </el-space>\r
      </el-space>\r
      <template #controls>\r
        <HstText v-model="spacer" title="Separator" />\r
      </template>\r
    </Variant>\r
    <Variant title="Alignment">\r
      <div class="alignment-container">\r
        <el-space :alignment="alignment">\r
          string\r
          <el-button> button </el-button>\r
          <el-card>\r
            <template #header>\r
              header\r
            </template>\r
            body\r
          </el-card>\r
        </el-space>\r
      </div>\r
      <template #controls>\r
        <HstRadio v-model="alignment" title="Alignment" :options="spaceAlignmentList" />\r
      </template>\r
    </Variant>\r
    <Variant title="Fill container">\r
      <el-space :fill="isFill" wrap>\r
        <el-button v-for="i in 3" :key="i">\r
          button\r
        </el-button>\r
      </el-space>\r
      <template #controls>\r
        <HstCheckbox v-model="isFill" title="Fill" />\r
      </template>\r
    </Variant>\r
    <Variant title="fillRatio">\r
      <el-space\r
        fill\r
        wrap\r
        :fill-ratio="fillRatio"\r
        :direction="currentDirection"\r
        style="width: 100%"\r
      >\r
        <el-button v-for="i in 3" :key="i">\r
          button\r
        </el-button>\r
      </el-space>\r
      <template #controls>\r
        <HstNumber v-model="fillRatio" title="FillRatio" />\r
        <HstRadio v-model="currentDirection" title="Direction" :options="spaceDirectionList" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic usage\r
The basic use case is using this component to provide unified space between each components\r
\r
Using Space to provide space\r
</docs>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsBasicSpaceStoryVue as default
};
