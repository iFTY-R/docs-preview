const __resolved__virtual_storySource_srcComponentsDataDescriptionsStoryVue = `<script setup lang="ts">\r
import { computed, ref } from 'vue'\r
import {\r
  Iphone,\r
  Location,\r
  OfficeBuilding,\r
  Tickets,\r
  User,\r
} from '@element-plus/icons-vue'\r
\r
interface marginMapType {\r
  large: string\r
  default: string\r
  small: string\r
}\r
const size = ref<keyof marginMapType>('default')\r
const sizeVertical = ref<keyof marginMapType>('default')\r
const sizeList = ['large', 'default', 'small']\r
const iconStyle = computed(() => {\r
  const marginMap: marginMapType = {\r
    large: '8px',\r
    default: '6px',\r
    small: '4px',\r
  }\r
  return {\r
    marginRight: marginMap[size.value] || marginMap.default,\r
  }\r
})\r
const blockMargin = computed(() => {\r
  const marginMap: marginMapType = {\r
    large: '32px',\r
    default: '28px',\r
    small: '24px',\r
  }\r
  return {\r
    marginTop: marginMap[size.value] || marginMap.default,\r
  }\r
})\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Data/Descriptions"\r
    icon="mdi:card-account-details-outline"\r
    :layout="{\r
      type: 'grid',\r
      width: 700,\r
    }"\r
  >\r
    <Variant title="Basic Usage">\r
      <el-descriptions title="User Info">\r
        <el-descriptions-item label="Username">\r
          kooriookami\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Telephone">\r
          18100000000\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Place">\r
          Suzhou\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Remarks">\r
          <el-tag size="small">\r
            School\r
          </el-tag>\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Address">\r
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu\r
          Province\r
        </el-descriptions-item>\r
      </el-descriptions>\r
      <template #controls>\r
        <!-- HstControl -->\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Sizes">\r
      <el-descriptions\r
        class="margin-top"\r
        title="With border"\r
        :column="3"\r
        :size="size"\r
        border\r
      >\r
        <template #extra>\r
          <el-button type="primary">\r
            Operation\r
          </el-button>\r
        </template>\r
        <el-descriptions-item>\r
          <template #label>\r
            <div class="cell-item">\r
              <el-icon :style="iconStyle">\r
                <user />\r
              </el-icon>\r
              Username\r
            </div>\r
          </template>\r
          kooriookami\r
        </el-descriptions-item>\r
        <el-descriptions-item>\r
          <template #label>\r
            <div class="cell-item">\r
              <el-icon :style="iconStyle">\r
                <iphone />\r
              </el-icon>\r
              Telephone\r
            </div>\r
          </template>\r
          18100000000\r
        </el-descriptions-item>\r
        <el-descriptions-item>\r
          <template #label>\r
            <div class="cell-item">\r
              <el-icon :style="iconStyle">\r
                <location />\r
              </el-icon>\r
              Place\r
            </div>\r
          </template>\r
          Suzhou\r
        </el-descriptions-item>\r
        <el-descriptions-item>\r
          <template #label>\r
            <div class="cell-item">\r
              <el-icon :style="iconStyle">\r
                <tickets />\r
              </el-icon>\r
              Remarks\r
            </div>\r
          </template>\r
          <el-tag size="small">\r
            School\r
          </el-tag>\r
        </el-descriptions-item>\r
        <el-descriptions-item>\r
          <template #label>\r
            <div class="cell-item">\r
              <el-icon :style="iconStyle">\r
                <office-building />\r
              </el-icon>\r
              Address\r
            </div>\r
          </template>\r
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province\r
        </el-descriptions-item>\r
      </el-descriptions>\r
      <el-descriptions\r
        class="margin-top"\r
        title="Without border"\r
        :column="3"\r
        :size="size"\r
        :style="blockMargin"\r
      >\r
        <template #extra>\r
          <el-button type="primary">\r
            Operation\r
          </el-button>\r
        </template>\r
        <el-descriptions-item label="Username">\r
          kooriookami\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Telephone">\r
          18100000000\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Place">\r
          Suzhou\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Remarks">\r
          <el-tag size="small">\r
            School\r
          </el-tag>\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Address">\r
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province\r
        </el-descriptions-item>\r
      </el-descriptions>\r
      <template #controls>\r
        <HstRadio\r
          v-model="size"\r
          title="size"\r
          :options="sizeList"\r
        />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Vertical List">\r
      <el-descriptions\r
        title="Vertical list with border"\r
        direction="vertical"\r
        :column="4"\r
        :size="sizeVertical"\r
        border\r
      >\r
        <el-descriptions-item label="Username">\r
          kooriookami\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Telephone">\r
          18100000000\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Place" :span="2">\r
          Suzhou\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Remarks">\r
          <el-tag size="small">\r
            School\r
          </el-tag>\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Address">\r
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province\r
        </el-descriptions-item>\r
      </el-descriptions>\r
\r
      <el-descriptions\r
        title="Vertical list without border"\r
        :column="4"\r
        :size="sizeVertical"\r
        direction="vertical"\r
        :style="blockMargin"\r
      >\r
        <el-descriptions-item label="Username">\r
          kooriookami\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Telephone">\r
          18100000000\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Place" :span="2">\r
          Suzhou\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Remarks">\r
          <el-tag size="small">\r
            School\r
          </el-tag>\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Address">\r
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province\r
        </el-descriptions-item>\r
      </el-descriptions>\r
      <template #controls>\r
        <HstRadio\r
          v-model="sizeVertical"\r
          title="size"\r
          :options="sizeList"\r
        />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Customized Style">\r
      <el-descriptions title="Customized style list" :column="3" border>\r
        <el-descriptions-item\r
          label="Username"\r
          label-align="right"\r
          align="center"\r
          label-class-name="my-label"\r
          class-name="my-content"\r
          width="150px"\r
        >\r
          kooriookami\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Telephone" label-align="right" align="center">\r
          18100000000\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Place" label-align="right" align="center">\r
          Suzhou\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Remarks" label-align="right" align="center">\r
          <el-tag size="small">\r
            School\r
          </el-tag>\r
        </el-descriptions-item>\r
        <el-descriptions-item label="Address" label-align="right" align="center">\r
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu\r
          Province\r
        </el-descriptions-item>\r
      </el-descriptions>\r
      <template #controls>\r
        <!-- HstControl -->\r
      </template>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic usage\r
\r
Descriptions usage\r
\r
## Sizes\r
\r
size of list\r
\r
## Vertical List\r
\r
direction of list\r
\r
## Customized Style\r
column label or content custom class name\r
</docs>\r
\r
<style scoped>\r
.el-descriptions {\r
  margin-top: 20px;\r
}\r
.my-label {\r
  background: var(--el-color-success-light-9);\r
}\r
.my-content {\r
  background: var(--el-color-danger-light-9);\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsDataDescriptionsStoryVue as default
};
