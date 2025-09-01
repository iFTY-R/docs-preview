const __resolved__virtual_storySource_srcComponentsFormFormFormStoryVue = `<script setup lang="ts">\r
import { ElMessage } from 'element-plus'\r
import type { FormInstance } from 'element-plus'\r
import { customValidationRulesSource, options, resetForm, rules, validationSource } from './constants'\r
import { isAttribute } from '@/utils'\r
import sizeOptions from '@/constants/sizeOptions'\r
\r
// BasicUsage\r
const labelPosition = ref('right')\r
const inline = ref(false)\r
const labelWidth = ref(100)\r
const size = ref('default')\r
\r
const basicSource = computed(() => {\r
  return \`<script setup lang="ts">\r
import { reactive, ref } from 'vue'\r
const formLabelAlign = reactive({\r
  name: '',\r
  region: '',\r
})\r
<\\/script>\r
\r
<el-form\r
  label-width="\${labelWidth.value}px"\r
  :model="formLabelAlign"\${isAttribute(\r
inline.value,\r
':inline="true"',\r
)}\${isAttribute(\r
labelPosition.value !== 'right',\r
\`:label-position="\${labelPosition.value}"\`,\r
)}\${isAttribute(\r
size.value !== 'default',\r
\`size="\${size.value}"\`,\r
)}\r
>\r
  <el-form-item label="Name">\r
    <el-input v-model="formLabelAlign.name" />\r
  </el-form-item>\r
  <el-form-item label="Activity zone">\r
    <el-input v-model="formLabelAlign.region" />\r
  </el-form-item>\r
</el-form>\`\r
})\r
\r
// Validation\r
const formSize = ref('default')\r
const ruleFormRef = ref<FormInstance>()\r
const ruleForm = reactive({\r
  name: 'Hello',\r
  region: '',\r
  count: '',\r
  date1: '',\r
  date2: '',\r
  delivery: false,\r
  type: [],\r
  resource: '',\r
  desc: '',\r
  pass: '',\r
  checkPass: '',\r
  age: '',\r
})\r
\r
async function submitForm(formEl: FormInstance | undefined) {\r
  if (!formEl)\r
    return\r
  await formEl.validate((valid) => {\r
    if (valid) {\r
      ElMessage({\r
        message: 'submit!',\r
        type: 'success',\r
      })\r
    }\r
\r
    else {\r
      ElMessage({\r
        message: 'error!',\r
        type: 'error',\r
      })\r
    }\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <Story\r
    title="Form/Form"\r
    icon="iconoir:submit-document"\r
    :layout="{\r
      type: 'single',\r
      iframe: false,\r
    }"\r
  >\r
    <Variant\r
      title="Basic Usage"\r
      :source="basicSource"\r
    >\r
      <el-form\r
        :inline="inline"\r
        :label-position="labelPosition"\r
        :label-width="\`\${labelWidth}px\`"\r
        :size="size"\r
      >\r
        <el-form-item label="Name">\r
          <el-input placeholder="Name" />\r
        </el-form-item>\r
        <el-form-item label="Activity zone">\r
          <el-input placeholder="Activity zone" />\r
        </el-form-item>\r
      </el-form>\r
      <template #controls>\r
        <HstNumber v-model="labelWidth" title="Custom Size" />\r
        <HstCheckbox v-model="inline" title="inline" />\r
        <HstButtonGroup\r
          v-model="labelPosition"\r
          title="LabelPosition"\r
          :options="[\r
            { label: 'left', value: 'left' },\r
            { label: 'right', value: 'right' },\r
            { label: 'top', value: 'top' },\r
          ]"\r
        />\r
        <HstButtonGroup\r
          v-model="size"\r
          title="Size"\r
          :options="sizeOptions"\r
        />\r
      </template>\r
    </Variant>\r
    <Variant\r
      title="Validation"\r
      :source="validationSource"\r
    >\r
      <el-form\r
        ref="ruleFormRef"\r
        :model="ruleForm"\r
        :rules="rules"\r
        label-width="120px"\r
        class="demo-ruleForm"\r
        :size="formSize"\r
        status-icon\r
      >\r
        <el-form-item label="Activity name" prop="name">\r
          <el-input v-model="ruleForm.name" />\r
        </el-form-item>\r
        <el-form-item label="Activity zone" prop="region">\r
          <el-select v-model="ruleForm.region" placeholder="Activity zone">\r
            <el-option label="Zone one" value="shanghai" />\r
            <el-option label="Zone two" value="beijing" />\r
          </el-select>\r
        </el-form-item>\r
        <el-form-item label="Activity count" prop="count">\r
          <el-select-v2\r
            v-model="ruleForm.count"\r
            placeholder="Activity count"\r
            :options="options"\r
          />\r
        </el-form-item>\r
        <el-form-item label="Activity time" required>\r
          <el-col :span="11">\r
            <el-form-item prop="date1">\r
              <el-date-picker\r
                v-model="ruleForm.date1"\r
                type="date"\r
                label="Pick a date"\r
                placeholder="Pick a date"\r
                style="width: 100%"\r
              />\r
            </el-form-item>\r
          </el-col>\r
          <el-col class="text-center" :span="2">\r
            <span class="text-gray-500">-</span>\r
          </el-col>\r
          <el-col :span="11">\r
            <el-form-item prop="date2">\r
              <el-time-picker\r
                v-model="ruleForm.date2"\r
                label="Pick a time"\r
                placeholder="Pick a time"\r
                style="width: 100%"\r
              />\r
            </el-form-item>\r
          </el-col>\r
        </el-form-item>\r
        <el-form-item label="Instant delivery" prop="delivery">\r
          <el-switch v-model="ruleForm.delivery" />\r
        </el-form-item>\r
        <el-form-item label="Activity type" prop="type">\r
          <el-checkbox-group v-model="ruleForm.type">\r
            <el-checkbox label="Online activities" name="type" />\r
            <el-checkbox label="Promotion activities" name="type" />\r
            <el-checkbox label="Offline activities" name="type" />\r
            <el-checkbox label="Simple brand exposure" name="type" />\r
          </el-checkbox-group>\r
        </el-form-item>\r
        <el-form-item label="Resources" prop="resource">\r
          <el-radio-group v-model="ruleForm.resource">\r
            <el-radio label="Sponsorship" />\r
            <el-radio label="Venue" />\r
          </el-radio-group>\r
        </el-form-item>\r
        <el-form-item label="Activity form" prop="desc">\r
          <el-input v-model="ruleForm.desc" type="textarea" />\r
        </el-form-item>\r
        <el-form-item>\r
          <el-button type="primary" @click="submitForm(ruleFormRef)">\r
            Create\r
          </el-button>\r
          <el-button @click="resetForm(ruleFormRef)">\r
            Reset\r
          </el-button>\r
        </el-form-item>\r
      </el-form>\r
    </Variant>\r
    <Variant\r
      title="Custom Validation Rules"\r
      :source="customValidationRulesSource"\r
    >\r
      <el-form\r
        ref="ruleFormRef"\r
        :model="ruleForm"\r
        status-icon\r
        :rules="rules"\r
        label-width="120px"\r
        class="demo-ruleForm"\r
      >\r
        <el-form-item label="Password" prop="pass">\r
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />\r
        </el-form-item>\r
        <el-form-item label="Confirm" prop="checkPass">\r
          <el-input\r
            v-model="ruleForm.checkPass"\r
            type="password"\r
            autocomplete="off"\r
          />\r
        </el-form-item>\r
        <el-form-item label="Age" prop="age">\r
          <el-input v-model.number="ruleForm.age" />\r
        </el-form-item>\r
        <el-form-item>\r
          <el-button type="primary" @click="submitForm(ruleFormRef)">\r
            Submit\r
          </el-button>\r
          <el-button @click="resetForm(ruleFormRef)">\r
            Reset\r
          </el-button>\r
        </el-form-item>\r
      </el-form>\r
    </Variant>\r
  </Story>\r
</template>\r
\r
<style scoped>\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFormFormFormStoryVue as default
};
