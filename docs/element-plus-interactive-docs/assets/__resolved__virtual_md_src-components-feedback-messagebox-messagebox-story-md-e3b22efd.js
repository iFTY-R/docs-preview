const html = `<h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h2>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>autofocus</td>
<td>auto focus when open MessageBox</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>title</td>
<td>title of the MessageBox</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>message</td>
<td>content of the MessageBox</td>
<td><code>string | VNode | (() =&gt; VNode)</code></td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>whether <code>message</code> is treated as HTML string</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>message type, used for icon display</td>
<td>string</td>
<td>success / info / warning / error</td>
<td>—</td>
</tr>
<tr>
<td>icon</td>
<td>custom icon component, overrides <code>type</code></td>
<td><code>string | Component</code></td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>custom-class</td>
<td>custom class name for MessageBox</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>custom-style</td>
<td>custom inline style for MessageBox</td>
<td>CSSProperties</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>callback</td>
<td>MessageBox closing callback if you don't prefer Promise</td>
<td>function(action, instance), where <code>action</code> can be 'confirm', 'cancel' or 'close', and <code>instance</code> is the MessageBox instance. You can access to that instance's attributes and methods</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>showClose</td>
<td>whether to show close icon of MessageBox</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>before-close</td>
<td>callback before MessageBox closes, and it will prevent MessageBox from closing</td>
<td>function(action, instance, done), where <code>action</code> can be 'confirm', 'cancel' or 'close'; <code>instance</code> is the MessageBox instance, and you can access to that instance's attributes and methods; <code>done</code> is for closing the instance</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>distinguish-cancel-and-close</td>
<td>whether to distinguish canceling and closing the MessageBox</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lock-scroll</td>
<td>whether to lock body scroll when MessageBox prompts</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-cancel-button</td>
<td>whether to show a cancel button</td>
<td>boolean</td>
<td>—</td>
<td>false (true when called with confirm and prompt)</td>
</tr>
<tr>
<td>show-confirm-button</td>
<td>whether to show a confirm button</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>cancel-button-text</td>
<td>text content of cancel button</td>
<td>string</td>
<td>—</td>
<td>Cancel</td>
</tr>
<tr>
<td>confirm-button-text</td>
<td>text content of confirm button</td>
<td>string</td>
<td>—</td>
<td>OK</td>
</tr>
<tr>
<td>cancel-button-class</td>
<td>custom class name of cancel button</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>confirm-button-class</td>
<td>custom class name of confirm button</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-on-click-modal</td>
<td>whether MessageBox can be closed by clicking the mask</td>
<td>boolean</td>
<td>—</td>
<td>true (false when called with alert)</td>
</tr>
<tr>
<td>close-on-press-escape</td>
<td>whether MessageBox can be closed by pressing the ESC</td>
<td>boolean</td>
<td>—</td>
<td>true (false when called with alert)</td>
</tr>
<tr>
<td>close-on-hash-change</td>
<td>whether to close MessageBox when hash changes</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-input</td>
<td>whether to show an input</td>
<td>boolean</td>
<td>—</td>
<td>false (true when called with prompt)</td>
</tr>
<tr>
<td>input-placeholder</td>
<td>placeholder of input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>input-type</td>
<td>type of input</td>
<td>string</td>
<td>—</td>
<td>text</td>
</tr>
<tr>
<td>input-value</td>
<td>initial value of input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>input-pattern</td>
<td>regexp for the input</td>
<td>regexp</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>input-validator</td>
<td>validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>input-error-message</td>
<td>error message when validation fails</td>
<td>string</td>
<td>—</td>
<td>Illegal input</td>
</tr>
<tr>
<td>center</td>
<td>whether to align the content in center</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>draggable</td>
<td>whether MessageBox is draggable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>round-button</td>
<td>whether to use round button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>button-size</td>
<td>custom size of confirm and cancel buttons</td>
<td>string</td>
<td>small / default / large</td>
<td>default</td>
</tr>
<tr>
<td>append-to</td>
<td>set the root element for the message box</td>
<td>string | HTMLElement</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Feedback\\MessageBox\\messageBox.story.md";
export {
  frontmatter,
  html,
  relativePath
};
