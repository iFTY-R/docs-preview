import { aY as reactive, ax as defineComponent, ay as ref, aQ as computed, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as createVNode, aH as createTextVNode, be as ElMessage, aI as createBaseVNode } from "./vendor-bdcf0029.js";
import { i as isAttribute } from "./attribute-8f069659.js";
import { s as sizeOptions } from "./sizeOptions-57bd3279.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const validationSource = `<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: idx + 1,
  label: idx + 1,
}))
<\/script>

<el-form
  ref="ruleFormRef"
  :model="ruleForm"
  :rules="rules"
  label-width="120px"
  class="demo-ruleForm"
  :size="formSize"
  status-icon
>
  <el-form-item label="Activity name" prop="name">
    <el-input v-model="ruleForm.name" />
  </el-form-item>
  <el-form-item label="Activity zone" prop="region">
    <el-select v-model="ruleForm.region" placeholder="Activity zone">
      <el-option label="Zone one" value="shanghai" />
      <el-option label="Zone two" value="beijing" />
    </el-select>
  </el-form-item>
  <el-form-item label="Activity count" prop="count">
    <el-select-v2
      v-model="ruleForm.count"
      placeholder="Activity count"
      :options="options"
    />
  </el-form-item>
  <el-form-item label="Activity time" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker
          v-model="ruleForm.date1"
          type="date"
          label="Pick a date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-form-item>
    </el-col>
    <el-col class="text-center" :span="2">
      <span class="text-gray-500">-</span>
    </el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker
          v-model="ruleForm.date2"
          label="Pick a time"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="Instant delivery" prop="delivery">
    <el-switch v-model="ruleForm.delivery" />
  </el-form-item>
  <el-form-item label="Activity type" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="Online activities" name="type" />
      <el-checkbox label="Promotion activities" name="type" />
      <el-checkbox label="Offline activities" name="type" />
      <el-checkbox label="Simple brand exposure" name="type" />
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="Sponsorship" />
      <el-radio label="Venue" />
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Activity form" prop="desc">
    <el-input v-model="ruleForm.desc" type="textarea" />
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm(ruleFormRef)"
      >Create</el-button
    >
    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
  </el-form-item>
</el-form>
`;
const rules = reactive({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" }
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change"
    }
  ],
  count: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change"
    }
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change"
    }
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change"
    }
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change"
    }
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change"
    }
  ],
  desc: [
    { required: true, message: "Please input activity form", trigger: "blur" }
  ]
});
const options = Array.from({ length: 1e4 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`
}));
function resetForm(formEl) {
  if (!formEl)
    return;
  formEl.resetFields();
}
const customValidationRulesSource = `<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
<\/script>

<el-form
  ref="ruleFormRef"
  :model="ruleForm"
  status-icon
  :rules="rules"
  label-width="120px"
  class="demo-ruleForm"
>
  <el-form-item label="Password" prop="pass">
    <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
  </el-form-item>
  <el-form-item label="Confirm" prop="checkPass">
    <el-input
      v-model="ruleForm.checkPass"
      type="password"
      autocomplete="off"
    />
  </el-form-item>
  <el-form-item label="Age" prop="age">
    <el-input v-model.number="ruleForm.age" />
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm(ruleFormRef)"
      >Submit</el-button
    >
    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
  </el-form-item>
</el-form>
`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const labelPosition = ref("right");
    const inline = ref(false);
    const labelWidth = ref(100);
    const size = ref("default");
    const basicSource = computed(() => {
      return `<script setup lang="ts">
import { reactive, ref } from 'vue'
const formLabelAlign = reactive({
  name: '',
  region: '',
})
<\/script>

<el-form
  label-width="${labelWidth.value}px"
  :model="formLabelAlign"${isAttribute(
        inline.value,
        ':inline="true"'
      )}${isAttribute(
        labelPosition.value !== "right",
        `:label-position="${labelPosition.value}"`
      )}${isAttribute(
        size.value !== "default",
        `size="${size.value}"`
      )}
>
  <el-form-item label="Name">
    <el-input v-model="formLabelAlign.name" />
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-input v-model="formLabelAlign.region" />
  </el-form-item>
</el-form>`;
    });
    const formSize = ref("default");
    const ruleFormRef = ref();
    const ruleForm = reactive({
      name: "Hello",
      region: "",
      count: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
      pass: "",
      checkPass: "",
      age: ""
    });
    async function submitForm(formEl) {
      if (!formEl)
        return;
      await formEl.validate((valid) => {
        if (valid) {
          ElMessage({
            message: "submit!",
            type: "success"
          });
        } else {
          ElMessage({
            message: "error!",
            type: "error"
          });
        }
      });
    }
    const __returned__ = { labelPosition, inline, labelWidth, size, basicSource, formSize, ruleFormRef, ruleForm, submitForm, get customValidationRulesSource() {
      return customValidationRulesSource;
    }, get options() {
      return options;
    }, get resetForm() {
      return resetForm;
    }, get rules() {
      return rules;
    }, get validationSource() {
      return validationSource;
    }, get sizeOptions() {
      return sizeOptions;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "text-gray-500" },
  "-",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_form = resolveComponent("el-form");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_Variant = resolveComponent("Variant");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_el_select_v2 = resolveComponent("el-select-v2");
  const _component_el_date_picker = resolveComponent("el-date-picker");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_time_picker = resolveComponent("el-time-picker");
  const _component_el_switch = resolveComponent("el-switch");
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_el_radio_group = resolveComponent("el-radio-group");
  const _component_el_button = resolveComponent("el-button");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Form/Form",
    icon: "iconoir:submit-document",
    layout: {
      type: "single",
      iframe: false
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Basic Usage",
        source: $setup.basicSource
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.labelWidth,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.labelWidth = $event),
            title: "Custom Size"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.inline,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.inline = $event),
            title: "inline"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.labelPosition,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.labelPosition = $event),
            title: "LabelPosition",
            options: [
              { label: "left", value: "left" },
              { label: "right", value: "right" },
              { label: "top", value: "top" }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstButtonGroup, {
            modelValue: $setup.size,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.size = $event),
            title: "Size",
            options: $setup.sizeOptions
          }, null, 8, ["modelValue", "options"])
        ]),
        default: withCtx(() => [
          createVNode(_component_el_form, {
            inline: $setup.inline,
            "label-position": $setup.labelPosition,
            "label-width": `${$setup.labelWidth}px`,
            size: $setup.size
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, { label: "Name" }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, { placeholder: "Name" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_form_item, { label: "Activity zone" }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, { placeholder: "Activity zone" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["inline", "label-position", "label-width", "size"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Validation",
        source: $setup.validationSource
      }, {
        default: withCtx(() => [
          createVNode(_component_el_form, {
            ref: "ruleFormRef",
            model: $setup.ruleForm,
            rules: $setup.rules,
            "label-width": "120px",
            class: "demo-ruleForm",
            size: $setup.formSize,
            "status-icon": ""
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                label: "Activity name",
                prop: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: $setup.ruleForm.name,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.ruleForm.name = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_form_item, {
                label: "Activity zone",
                prop: "region"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_select, {
                    modelValue: $setup.ruleForm.region,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.ruleForm.region = $event),
                    placeholder: "Activity zone"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_option, {
                        label: "Zone one",
                        value: "shanghai"
                      }),
                      createVNode(_component_el_option, {
                        label: "Zone two",
                        value: "beijing"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_form_item, {
                label: "Activity count",
                prop: "count"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_select_v2, {
                    modelValue: $setup.ruleForm.count,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.ruleForm.count = $event),
                    placeholder: "Activity count",
                    options: $setup.options
                  }, null, 8, ["modelValue", "options"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_form_item, {
                label: "Activity time",
                required: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_col, { span: 11 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { prop: "date1" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_date_picker, {
                            modelValue: $setup.ruleForm.date1,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.ruleForm.date1 = $event),
                            type: "date",
                            label: "Pick a date",
                            placeholder: "Pick a date",
                            style: { "width": "100%" }
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_col, {
                    class: "text-center",
                    span: 2
                  }, {
                    default: withCtx(() => [
                      _hoisted_1
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_col, { span: 11 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { prop: "date2" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_time_picker, {
                            modelValue: $setup.ruleForm.date2,
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.ruleForm.date2 = $event),
                            label: "Pick a time",
                            placeholder: "Pick a time",
                            style: { "width": "100%" }
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_form_item, {
                label: "Instant delivery",
                prop: "delivery"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_switch, {
                    modelValue: $setup.ruleForm.delivery,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.ruleForm.delivery = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_form_item, {
                label: "Activity type",
                prop: "type"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_checkbox_group, {
                    modelValue: $setup.ruleForm.type,
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.ruleForm.type = $event)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_checkbox, {
                        label: "Online activities",
                        name: "type"
                      }),
                      createVNode(_component_el_checkbox, {
                        label: "Promotion activities",
                        name: "type"
                      }),
                      createVNode(_component_el_checkbox, {
                        label: "Offline activities",
                        name: "type"
                      }),
                      createVNode(_component_el_checkbox, {
                        label: "Simple brand exposure",
                        name: "type"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_form_item, {
                label: "Resources",
                prop: "resource"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_radio_group, {
                    modelValue: $setup.ruleForm.resource,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.ruleForm.resource = $event)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_radio, { label: "Sponsorship" }),
                      createVNode(_component_el_radio, { label: "Venue" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_form_item, {
                label: "Activity form",
                prop: "desc"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: $setup.ruleForm.desc,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.ruleForm.desc = $event),
                    type: "textarea"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: _cache[13] || (_cache[13] = ($event) => $setup.submitForm($setup.ruleFormRef))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Create ")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_button, {
                    onClick: _cache[14] || (_cache[14] = ($event) => $setup.resetForm($setup.ruleFormRef))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["model", "rules", "size"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"]),
      createVNode(_component_Variant, {
        title: "Custom Validation Rules",
        source: $setup.customValidationRulesSource
      }, {
        default: withCtx(() => [
          createVNode(_component_el_form, {
            ref: "ruleFormRef",
            model: $setup.ruleForm,
            "status-icon": "",
            rules: $setup.rules,
            "label-width": "120px",
            class: "demo-ruleForm"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                label: "Password",
                prop: "pass"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: $setup.ruleForm.pass,
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.ruleForm.pass = $event),
                    type: "password",
                    autocomplete: "off"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_form_item, {
                label: "Confirm",
                prop: "checkPass"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: $setup.ruleForm.checkPass,
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.ruleForm.checkPass = $event),
                    type: "password",
                    autocomplete: "off"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_form_item, {
                label: "Age",
                prop: "age"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: $setup.ruleForm.age,
                    "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.ruleForm.age = $event),
                    modelModifiers: { number: true }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: _cache[18] || (_cache[18] = ($event) => $setup.submitForm($setup.ruleFormRef))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Submit ")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_button, {
                    onClick: _cache[19] || (_cache[19] = ($event) => $setup.resetForm($setup.ruleFormRef))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["model", "rules"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["source"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Form/Form/form.story.vue";
const form_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/pure-admin/element-plus-interactive-docs/src/components/Form/Form/form.story.vue"]]);
export {
  form_story as default
};
