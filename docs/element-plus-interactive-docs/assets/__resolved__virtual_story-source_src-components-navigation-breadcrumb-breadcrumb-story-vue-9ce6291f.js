const __resolved__virtual_storySource_srcComponentsNavigationBreadcrumbBreadcrumbStoryVue = `<script setup lang="ts">\r
import { ArrowRight } from '@element-plus/icons-vue'\r
\r
const basicData = reactive({\r
  isIconSeparator: false,\r
  separator: '/',\r
  separatorIcon: ArrowRight,\r
  firstTitle: 'homepage',\r
  secondTitle: 'promotion management',\r
  thirdTitle: 'promotion list',\r
})\r
\r
const basicSource = computed(() => {\r
  return \`\${\r
    basicData.isIconSeparator\r
    ? \`<script setup lang="ts">\r
import { ArrowRight } from '@element-plus/icons-vue'\r
<\\/script>\r
\r
\`\r
: ''\r
  }<el-breadcrumb \${\r
    basicData.isIconSeparator\r
    ? ':separator-icon="ArrowRight"'\r
    : \`separator="\${basicData.separator}"\`\r
  }>\r
  <el-breadcrumb-item>\r
    \${basicData.firstTitle}\r
  </el-breadcrumb-item>\r
  <el-breadcrumb-item>\r
    \${basicData.secondTitle}\r
  </el-breadcrumb-item>\r
  <el-breadcrumb-item>\r
    \${basicData.thirdTitle}\r
  </el-breadcrumb-item>\r
</el-breadcrumb>\`\r
})\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Navigation/Breadcrumb"\r
    icon="fluent-mdl2:breadcrumb"\r
    :layout="{\r
      type: 'grid',\r
      width: 540,\r
    }"\r
  >\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <el-breadcrumb v-if="!basicData.isIconSeparator" :separator="basicData.separator">\r
        <el-breadcrumb-item>\r
          {{ basicData.firstTitle }}\r
        </el-breadcrumb-item>\r
        <el-breadcrumb-item>\r
          {{ basicData.secondTitle }}\r
        </el-breadcrumb-item>\r
        <el-breadcrumb-item>\r
          {{ basicData.thirdTitle }}\r
        </el-breadcrumb-item>\r
      </el-breadcrumb>\r
      <el-breadcrumb v-else :separator-icon="basicData.separatorIcon">\r
        <el-breadcrumb-item>\r
          {{ basicData.firstTitle }}\r
        </el-breadcrumb-item>\r
        <el-breadcrumb-item>\r
          {{ basicData.secondTitle }}\r
        </el-breadcrumb-item>\r
        <el-breadcrumb-item>\r
          {{ basicData.thirdTitle }}\r
        </el-breadcrumb-item>\r
      </el-breadcrumb>\r
      <template #controls>\r
        <HstCheckbox\r
          v-model="basicData.isIconSeparator"\r
          title="Use icon"\r
        />\r
        <HstText v-model="basicData.separator" :style="useElDisplay(!basicData.isIconSeparator)" title="Separator" />\r
        <HstDivider content="Title" />\r
        <HstText v-model="basicData.firstTitle" title="First Class" />\r
        <HstText v-model="basicData.secondTitle" title="Second Class" />\r
        <HstText v-model="basicData.thirdTitle" title="Third Class" />\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsNavigationBreadcrumbBreadcrumbStoryVue as default
};
