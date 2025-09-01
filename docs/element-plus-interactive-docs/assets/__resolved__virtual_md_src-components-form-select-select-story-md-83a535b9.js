const html = `<h2 id="select-attributes" tabindex="-1">Select Attributes <a class="header-anchor" href="#select-attributes" aria-hidden="true">#</a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>model-value / v-model</td>
<td>binding value</td>
<td>array / string / number / boolean / object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>multiple</td>
<td>whether multiple-select is activated</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Select is disabled</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>value-key</td>
<td>unique identity key name for value, required when value is an object</td>
<td>string</td>
<td>—</td>
<td>value</td>
</tr>
<tr>
<td>size</td>
<td>size of Input</td>
<td>string</td>
<td>large/default/small</td>
<td>default</td>
</tr>
<tr>
<td>clearable</td>
<td>whether select can be cleared</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>collapse-tags</td>
<td>whether to collapse tags to a text when multiple selecting</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>collapse-tags-tooltip</td>
<td>whether show all selected tags when mouse hover text of collapse-tags. To use this, <code>collapse-tags</code> must be true</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>multiple-limit</td>
<td>maximum number of options user can select when <code>multiple</code> is <code>true</code>. No limit when set to 0</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>name</td>
<td>the name attribute of select input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>effect</td>
<td>Tooltip theme, built-in theme: <code>dark</code> / <code>light</code></td>
<td>string</td>
<td>string</td>
<td>light</td>
</tr>
<tr>
<td>autocomplete</td>
<td>the autocomplete attribute of select input</td>
<td>string</td>
<td>—</td>
<td>off</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder</td>
<td>string</td>
<td>—</td>
<td>Select</td>
</tr>
<tr>
<td>filterable</td>
<td>whether Select is filterable</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>allow-create</td>
<td>whether creating new items is allowed. To use this, <code>filterable</code> must be true</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>filter-method</td>
<td>custom filter method</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>remote</td>
<td>whether options are loaded from server</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>remote-method</td>
<td>custom remote search method</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>remote-show-suffix</td>
<td>in remote search method show suffix icon</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>whether Select is loading data from server</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>loading-text</td>
<td>displayed text while loading data from server</td>
<td>string</td>
<td>—</td>
<td>Loading</td>
</tr>
<tr>
<td>no-match-text</td>
<td>displayed text when no data matches the filtering query, you can also use slot <code>empty</code></td>
<td>string</td>
<td>—</td>
<td>No matching data</td>
</tr>
<tr>
<td>no-data-text</td>
<td>displayed text when there is no options, you can also use slot <code>empty</code></td>
<td>string</td>
<td>—</td>
<td>No data</td>
</tr>
<tr>
<td>popper-class</td>
<td>custom class name for Select's dropdown</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>reserve-keyword</td>
<td>when <code>multiple</code> and <code>filter</code> is true, whether to reserve current keyword after selecting an option</td>
<td>boolean</td>
<td>true / false</td>
<td>true</td>
</tr>
<tr>
<td>default-first-option</td>
<td>select first matching option on enter key. Use with <code>filterable</code> or <code>remote</code></td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body(deprecated)</td>
<td>whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false</td>
<td>boolean</td>
<td>true / false</td>
<td>true</td>
</tr>
<tr>
<td>teleported</td>
<td>whether select dropdown is teleported to the body</td>
<td>boolean</td>
<td>true / false</td>
<td>true</td>
</tr>
<tr>
<td>persistent</td>
<td>when select dropdown is inactive and <code>persistent</code> is <code>false</code>, select dropdown will be destroyed</td>
<td>boolean</td>
<td>true / false</td>
<td>true</td>
</tr>
<tr>
<td>automatic-dropdown</td>
<td>for non-filterable Select, this prop decides if the option menu pops up when the input is focused</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>clear-icon</td>
<td>Custom clear icon component</td>
<td><code>string | Component</code></td>
<td>—</td>
<td>CircleClose</td>
</tr>
<tr>
<td>fit-input-width</td>
<td>whether the width of the dropdown is the same as the input</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>suffix-icon</td>
<td>Custom suffix icon component</td>
<td><code>string | Component</code></td>
<td>—</td>
<td>ArrowDown</td>
</tr>
<tr>
<td>suffix-transition <DeprecatedTag /></td>
<td>animation when dropdown appears/disappears icon</td>
<td>boolean</td>
<td>true / false</td>
<td>true</td>
</tr>
<tr>
<td>tag-type</td>
<td>tag type</td>
<td>string</td>
<td>success/info/warning/danger</td>
<td>info</td>
</tr>
<tr>
<td>validate-event</td>
<td>whether to trigger form validation</td>
<td>boolean</td>
<td>true / false</td>
<td>true</td>
</tr>
<tr>
<td>placement</td>
<td>position of dropdown</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>bottom-start</td>
</tr>
</tbody>
</table>
<p>:::warning</p>
<p><code>suffix-transition</code> has been <strong>deprecated</strong>, and <strong>will be</strong> removed in <VersionTag version="2.3.0" />, please use override style scheme.</p>
<p>:::</p>
<h2 id="select-events" tabindex="-1">Select Events <a class="header-anchor" href="#select-events" aria-hidden="true">#</a></h2>
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
<td>change</td>
<td>triggers when the selected value changes</td>
<td>current selected value</td>
</tr>
<tr>
<td>visible-change</td>
<td>triggers when the dropdown appears/disappears</td>
<td>true when it appears, and false otherwise</td>
</tr>
<tr>
<td>remove-tag</td>
<td>triggers when a tag is removed in multiple mode</td>
<td>removed tag value</td>
</tr>
<tr>
<td>clear</td>
<td>triggers when the clear icon is clicked in a clearable Select</td>
<td>—</td>
</tr>
<tr>
<td>blur</td>
<td>triggers when Input blurs</td>
<td>(event: FocusEvent)</td>
</tr>
<tr>
<td>focus</td>
<td>triggers when Input focuses</td>
<td>(event: FocusEvent)</td>
</tr>
</tbody>
</table>
<h2 id="select-slots" tabindex="-1">Select Slots <a class="header-anchor" href="#select-slots" aria-hidden="true">#</a></h2>
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
<td>—</td>
<td>Option component list</td>
<td>Option Group / Option</td>
</tr>
<tr>
<td>prefix</td>
<td>content as Select prefix</td>
<td>—</td>
</tr>
<tr>
<td>empty</td>
<td>content when there is no options</td>
<td>—</td>
</tr>
</tbody>
</table>
<h2 id="option-group-attributes" tabindex="-1">Option Group Attributes <a class="header-anchor" href="#option-group-attributes" aria-hidden="true">#</a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>name of the group</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether to disable all options in this group</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h2 id="option-group-slots" tabindex="-1">Option Group Slots <a class="header-anchor" href="#option-group-slots" aria-hidden="true">#</a></h2>
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
<td>Option</td>
</tr>
</tbody>
</table>
<h2 id="option-attributes" tabindex="-1">Option Attributes <a class="header-anchor" href="#option-attributes" aria-hidden="true">#</a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>value of option</td>
<td>string / number / boolean / object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>label of option, same as <code>value</code> if omitted</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether option is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h2 id="option-slots" tabindex="-1">Option Slots <a class="header-anchor" href="#option-slots" aria-hidden="true">#</a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>customize default content</td>
</tr>
</tbody>
</table>
<h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2>
<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>focus the Input component</td>
<td>-</td>
</tr>
<tr>
<td>blur</td>
<td>blur the Input component, and hide the dropdown</td>
<td>-</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Form\\Select\\select.story.md";
export {
  frontmatter,
  html,
  relativePath
};
