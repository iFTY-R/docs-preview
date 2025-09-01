const html = `<h2 id="drawer-attributes" tabindex="-1">Drawer Attributes <a class="header-anchor" href="#drawer-attributes" aria-hidden="true">#</a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Acceptable Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>model-value / v-model</td>
<td>Should Drawer be displayed</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>append-to-body</td>
<td>Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to <strong>true</strong></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lock-scroll</td>
<td>whether scroll of body is disabled while Drawer is displayed</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>before-close</td>
<td>If set, closing procedure will be halted</td>
<td>function(done) (done is function type that accepts a boolean as parameter, calling done with true or without parameter will abort the close procedure)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-on-click-modal</td>
<td>whether the Drawer can be closed by clicking the mask</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>close-on-press-escape</td>
<td>Indicates whether Drawer can be closed by pressing ESC</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>open-delay</td>
<td>Time(milliseconds) before open</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>close-delay</td>
<td>Time(milliseconds) before close</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>class</td>
<td>Extra class names for Drawer</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>destroy-on-close</td>
<td>Indicates whether children should be destroyed after Drawer closed</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>modal</td>
<td>Should show shadowing layer</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>direction</td>
<td>Drawer's opening direction</td>
<td>Direction</td>
<td>rtl / ltr / ttb / btt</td>
<td>rtl</td>
</tr>
<tr>
<td>show-close</td>
<td>Should show close button at the top right of Drawer</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>Drawer's size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is <code>number</code> type, it describes the size by unit of pixels; when size is <code>string</code> type, it should be used with <code>x%</code> notation, other wise it will be interpreted to pixel unit</td>
<td>number / string</td>
<td>-</td>
<td>'30%'</td>
</tr>
<tr>
<td>title</td>
<td>Drawer's title, can also be set by named slot, detailed descriptions can be found in the slot form</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>withHeader</td>
<td>Flag that controls the header section's existance, default to true, when withHeader set to false, both <code>title attribute</code> and <code>title slot</code> won't work</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>modal-class</td>
<td>Extra class names for shadowing layer</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>z-index</td>
<td>set z-index</td>
<td>number</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Feedback\\Drawer\\drawer.story.md";
export {
  frontmatter,
  html,
  relativePath
};
