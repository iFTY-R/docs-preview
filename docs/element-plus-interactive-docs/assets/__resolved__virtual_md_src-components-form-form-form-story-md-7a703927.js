const html = `<h3 id="form-attributes" tabindex="-1">Form Attributes <a class="header-anchor" href="#form-attributes" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>model</code></td>
<td>Data of form component.</td>
<td><code>Record&lt;string, any&gt;</code></td>
<td>—</td>
</tr>
<tr>
<td><code>rules</code></td>
<td>Validation rules of form.</td>
<td><code>FormRules</code></td>
<td>—</td>
</tr>
<tr>
<td><code>inline</code></td>
<td>Whether the form is inline.</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>label-position</code></td>
<td>Position of label. If set to <code>'left'</code> or <code>'right'</code>, <code>label-width</code> prop is also required.</td>
<td><code>'left' | 'right' | 'top'</code></td>
<td><code>'right'</code></td>
</tr>
<tr>
<td><code>label-width</code></td>
<td>Width of label, e.g. <code>'50px'</code>. All its direct child form items will inherit this value. <code>auto</code> is supported.</td>
<td><code>string | number</code></td>
<td>—</td>
</tr>
<tr>
<td><code>label-suffix</code></td>
<td>Suffix of the label.</td>
<td><code>string</code></td>
<td>—</td>
</tr>
<tr>
<td><code>hide-required-asterisk</code></td>
<td>Whether to hide required fields should have a red asterisk (star) beside their labels.</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>require-asterisk-position</code></td>
<td>Position of asterisk.</td>
<td><code>'left' | 'right'</code></td>
<td><code>'left'</code></td>
</tr>
<tr>
<td><code>show-message</code></td>
<td>Whether to show the error message.</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>inline-message</code></td>
<td>Whether to display the error message inline with the form item.</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>status-icon</code></td>
<td>Whether to display an icon indicating the validation result.</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>validate-on-rule-change</code></td>
<td>Whether to trigger validation when the <code>rules</code> prop is changed.</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>size</code></td>
<td>Control the size of components in this form.</td>
<td><code>'large' | 'default' | 'small'</code></td>
<td>—</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>Whether to disable all components in this form. If set to <code>true</code>, it will override the <code>disabled</code> prop of the inner component.</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>scroll-to-error</code></td>
<td>When validation fails, scroll to the first error form entry.</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody>
</table>
<h3 id="form-methods" tabindex="-1">Form Methods <a class="header-anchor" href="#form-methods" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>validate</code></td>
<td>Validate the whole form. Receives a callback or returns <code>Promise</code>.</td>
<td><code>(callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) =&gt; void) =&gt; Promise&lt;void&gt;</code></td>
</tr>
<tr>
<td><code>validateField</code></td>
<td>Validate specified fields.</td>
<td><code>(props?: Arrayable&lt;FormItemProp&gt;, callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) =&gt; void) =&gt; Promise&lt;void&gt;</code></td>
</tr>
<tr>
<td><code>resetFields</code></td>
<td>Reset specified fields and remove validation result.</td>
<td><code>(props?: Arrayable&lt;FormItemProp&gt;) =&gt; void</code></td>
</tr>
<tr>
<td><code>scrollToField</code></td>
<td>Scroll to the specified fields.</td>
<td><code>(prop: FormItemProp) =&gt; void</code></td>
</tr>
<tr>
<td><code>clearValidate</code></td>
<td>Clear validation message for specified fields.</td>
<td><code>(props?: Arrayable&lt;FormItemProp&gt;) =&gt; void</code></td>
</tr>
</tbody>
</table>
<h3 id="form-events" tabindex="-1">Form Events <a class="header-anchor" href="#form-events" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>validate</code></td>
<td>triggers after a form item is validated</td>
<td><code>(prop: FormItemProp, isValid: boolean, message: string) =&gt; void</code></td>
</tr>
</tbody>
</table>
<h3 id="form-slots" tabindex="-1">Form Slots <a class="header-anchor" href="#form-slots" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Subtags</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>customize default content</td>
<td>FormItem</td>
</tr>
</tbody>
</table>
<h2 id="form-item-api" tabindex="-1">Form Item API <a class="header-anchor" href="#form-item-api" aria-hidden="true">#</a></h2>
<h3 id="form-item-attributes" tabindex="-1">Form Item Attributes <a class="header-anchor" href="#form-item-attributes" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>prop</code></td>
<td>A key of <code>model</code>. It could be an array of property paths (e.g <code>['a', 'b', 0]</code>). In the use of <code>validate</code> and <code>resetFields</code> method, the attribute is required.</td>
<td><code>string | string[]</code></td>
<td>—</td>
</tr>
<tr>
<td><code>label</code></td>
<td>Label text.</td>
<td><code>string</code></td>
<td>—</td>
</tr>
<tr>
<td><code>label-width</code></td>
<td>Width of label, e.g. <code>'50px'</code>. <code>'auto'</code> is supported.</td>
<td><code>string | number</code></td>
<td>—</td>
</tr>
<tr>
<td><code>required</code></td>
<td>Whether the field is required or not, will be determined by validation rules if omitted.</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>rules</code></td>
<td>Validation rules of form, see the <a href="#formitemrule">following table</a>, more advanced usage at <a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a>.</td>
<td><code>FormItemRule | FormItemRule[]</code></td>
<td>—</td>
</tr>
<tr>
<td><code>error</code></td>
<td>Field error message, set its value and the field will validate error and show this message immediately.</td>
<td><code>string</code></td>
<td>—</td>
</tr>
<tr>
<td><code>show-message</code></td>
<td>Whether to show the error message.</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>inline-message</code></td>
<td>Inline style validate message.</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>size</code></td>
<td>Control the size of components in this form-item.</td>
<td><code>'large' | 'default' | 'small'</code></td>
<td><code>'default'</code></td>
</tr>
</tbody>
</table>
<h4 id="formitemrule" tabindex="-1">FormItemRule <a class="header-anchor" href="#formitemrule" aria-hidden="true">#</a></h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>trigger</code></td>
<td>How the validator is triggered.</td>
<td><code>'blur' | 'change'</code></td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="form-item-slots" tabindex="-1">Form Item Slots <a class="header-anchor" href="#form-item-slots" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Slot Scope</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Content of Form Item.</td>
<td>—</td>
</tr>
<tr>
<td><code>label</code></td>
<td>Custom content to display on label.</td>
<td><code>{ label }</code></td>
</tr>
<tr>
<td><code>error</code></td>
<td>Custom content to display validation message.</td>
<td><code>{ error }</code></td>
</tr>
</tbody>
</table>
<h3 id="form-item-methods" tabindex="-1">Form Item Methods <a class="header-anchor" href="#form-item-methods" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>resetField</code></td>
<td>Reset current field and remove validation result.</td>
<td><code>() =&gt; void</code></td>
</tr>
<tr>
<td><code>clearValidate</code></td>
<td>Remove validation status of the field.</td>
<td><code>() =&gt; void</code></td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Form\\Form\\form.story.md";
export {
  frontmatter,
  html,
  relativePath
};
