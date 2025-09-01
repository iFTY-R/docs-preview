const __resolved__virtual_storySource_srcComponentsNavigationAffixAffixStoryVue = `<script setup lang="ts">\r
import type { AffixProps } from 'element-plus'\r
import { logEvent } from 'histoire/client'\r
import { positionList } from './constant'\r
import { isAttribute } from '@/utils'\r
\r
// Basic-Affix Usage\r
const affixData = ref({\r
  offset: ref<AffixProps['offset']>(50),\r
  position: ref<AffixProps['position']>('top'),\r
  zIndex: 100,\r
  positionList,\r
})\r
const affixSource = computed(() => {\r
  return \`<template>\r
  <div class="wrapper">\r
    <div class="scroll">\r
      <div class="affix-container">\r
        <el-affix\r
          position="\${affixData.value.position}"\${isAttribute((Boolean(affixData.value.offset) || affixData.value.offset === 0), \`        :offset="\${affixData.value.offset}"\`)}\${isAttribute((Boolean(affixData.value.zIndex) || affixData.value.zIndex === 0), \`        :z-index="\${affixData.value.zIndex}"\`)}\r
        >\r
          <el-button type="primary">\r
            Affix content\r
          </el-button>\r
        </el-affix>\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
.wrapper{\r
  height: 100vh;\r
  .scroll {\r
    height: 3000px;\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    .affix-container {\r
      text-align: center;\r
      border-radius: 4px;\r
      width: 80%;\r
      height: 400px;\r
      background: var(--el-color-primary-light-9);\r
    }\r
  }\r
}\r
</style>\`\r
})\r
\r
// Target-Affix\r
const targetData = ref({\r
  offset: ref<AffixProps['offset']>(150),\r
  target: ref<AffixProps['target']>('.target-affix-container'),\r
  positionList,\r
})\r
const targetSource = computed(() => {\r
  return \`<template>\r
  <div class="wrapper">\r
    <div class="affix-container">\r
      <el-affix\${isAttribute((Boolean(targetData.value.offset) || targetData.value.offset === 0), \`      :offset="\${targetData.value.offset}"\`)}\${isAttribute(Boolean(targetData.value.target), \`      target="\${targetData.value.target}"\`)}\r
      >\r
        <el-button type="primary">\r
          Affix content\r
        </el-button>\r
      </el-affix>\r
    </div>\r
  </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
.target-wrapper {\r
  height: 2500px;\r
  .target-affix-container {\r
    text-align: center;\r
    height: 700px;\r
    border-radius: 4px;\r
    background: var(--el-color-primary-light-9);\r
  }\r
}\r
</style>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Navigation/Affix"\r
    icon="arcticons:photo-affix"\r
    :layout="{\r
      type: 'single',\r
      iframe: true,\r
    }"\r
  >\r
    <Variant title="Basic Usage" :source="affixSource">\r
      <div class="wrapper">\r
        <div class="scroll">\r
          <div class="affix-container">\r
            <el-affix\r
              :offset="affixData.offset"\r
              :z-index="affixData.zIndex"\r
              :position="affixData.position"\r
              @change="$event => logEvent('change', $event)"\r
              @scroll="$event => logEvent('scroll', $event)"\r
            >\r
              <el-button type="primary">\r
                Affix content\r
              </el-button>\r
            </el-affix>\r
          </div>\r
        </div>\r
      </div>\r
      <template #controls>\r
        <HstNumber v-model="affixData.offset" title="offset" />\r
        <HstButtonGroup\r
          v-model="affixData.position"\r
          title="position"\r
          :options="affixData.positionList"\r
        />\r
        <HstNumber v-model="affixData.zIndex" title="z-index" />\r
      </template>\r
    </Variant>\r
    <Variant title="Target Affix" :source="targetSource" icon="et:traget">\r
      <div class="target-wrapper">\r
        <div class="target-affix-container">\r
          <el-affix\r
            :target="targetData.target"\r
            :offset="targetData.offset"\r
            @change="$event => logEvent('change', $event)"\r
            @scroll="$event => logEvent('scroll', $event)"\r
          >\r
            <el-button type="primary">\r
              Target Affix content\r
            </el-button>\r
          </el-affix>\r
        </div>\r
      </div>\r
      <template #controls>\r
        <HstNumber v-model="targetData.offset" disabled title="offset" />\r
        <HstText v-model="targetData.target" disabled title="target" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style lang="scss" scoped>\r
.wrapper{\r
  height: 100vh;\r
  .scroll {\r
    height: 3000px;\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    .affix-container {\r
      text-align: center;\r
      border-radius: 4px;\r
      width: 80%;\r
      height: 400px;\r
      background: var(--el-color-primary-light-9);\r
    }\r
  }\r
}\r
.target-wrapper {\r
  height: 2500px;\r
  .target-affix-container {\r
    text-align: center;\r
    height: 700px;\r
    border-radius: 4px;\r
    background: var(--el-color-primary-light-9);\r
  }\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsNavigationAffixAffixStoryVue as default
};
