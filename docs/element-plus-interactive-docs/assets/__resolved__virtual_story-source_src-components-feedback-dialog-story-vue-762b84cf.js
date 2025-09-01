const __resolved__virtual_storySource_srcComponentsFeedbackDialogStoryVue = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import type { DialogProps } from 'element-plus'\r
\r
type OriginDialogProps = {\r
  -readonly[key in keyof DialogProps]: DialogProps[key]\r
}\r
\r
type CustomDialogProps = Pick<OriginDialogProps, 'title' | 'draggable' | 'center' | 'alignCenter' | 'destroyOnClose'> & {\r
  header: string\r
  content: string\r
  footer: string\r
}\r
\r
const dialogVisible = ref(false)\r
const dialogCustomVisible = ref(false)\r
const outerVisible = ref(false)\r
const innerVisible = ref(false)\r
\r
const dialogData = ref<CustomDialogProps>({\r
  title: 'Title',\r
  draggable: false,\r
  center: false,\r
  alignCenter: false,\r
  destroyOnClose: false,\r
  header: 'custom header',\r
  content: 'custom content',\r
  footer: 'custom footer',\r
})\r
<\/script>\r
\r
<template>\r
  <Story title="Feedback/Dialog" icon="ri:message-3-line">\r
    <Variant title="Basic Usage">\r
      <el-button @click="dialogVisible = true">\r
        click to open the Dialog\r
      </el-button>\r
      <Teleport to="#app">\r
        <el-dialog\r
          v-model="dialogVisible"\r
          :title="dialogData.title"\r
          :align-center="dialogData.alignCenter"\r
          :center="dialogData.center"\r
          :draggable="dialogData.draggable"\r
          width="30%"\r
        >\r
          <span>This is a message</span>\r
          <template #footer>\r
            <span>\r
              <el-button @click="dialogVisible = false">Cancel</el-button>\r
              <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>\r
            </span>\r
          </template>\r
        </el-dialog>\r
      </Teleport>\r
    </Variant>\r
\r
    <Variant title="Customized">\r
      <el-button @click="dialogCustomVisible = true">\r
        open a Customized Dialog\r
      </el-button>\r
      <Teleport to="#app">\r
        <el-dialog\r
          v-model="dialogCustomVisible"\r
          :title="dialogData.title"\r
          :align-center="dialogData.alignCenter"\r
          :center="dialogData.center"\r
          :draggable="dialogData.draggable"\r
        >\r
          <template #header>\r
            {{ dialogData.header }}\r
          </template>\r
          {{ dialogData.content }}\r
          <template #footer>\r
            {{ dialogData.footer }}\r
          </template>\r
        </el-dialog>\r
      </Teleport>\r
      <template #controls>\r
        <HstText v-model="dialogData.header" title="header" />\r
        <HstText v-model="dialogData.content" title="default" />\r
        <HstText v-model="dialogData.footer" title="footer" />\r
      </template>\r
    </Variant>\r
\r
    <Variant title="Nested Dialog">\r
      <el-button @click="outerVisible = true">\r
        open the outer Dialog\r
      </el-button>\r
      <Teleport to="#app">\r
        <el-dialog v-model="outerVisible" title="Outer Dialog">\r
          <template #default>\r
            <el-dialog\r
              v-model="innerVisible"\r
              width="30%"\r
              title="Inner Dialog"\r
              :append-to-body="true"\r
            />\r
          </template>\r
          <template #footer>\r
            <div class="dialog-footer">\r
              <el-button @click="outerVisible = false">\r
                Cancel\r
              </el-button>\r
              <el-button type="primary" @click="innerVisible = true">\r
                open the inner Dialog\r
              </el-button>\r
            </div>\r
          </template>\r
        </el-dialog>\r
      </Teleport>\r
    </Variant>\r
\r
    <template #controls>\r
      <HstText v-model="dialogData.title" title="title" />\r
      <HstCheckbox v-model="dialogData.alignCenter" title="align-center" />\r
      <HstCheckbox v-model="dialogData.center" title="center" />\r
      <HstCheckbox v-model="dialogData.draggable" title="draggable" />\r
      <HstCheckbox v-model="dialogData.destroyOnClose" title="destroyOnClose" />\r
    </template>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic usage\r
Dialog pops up a dialog box, and it's quite customizable.\r
</docs>\r
\r
<style>\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsFeedbackDialogStoryVue as default
};
