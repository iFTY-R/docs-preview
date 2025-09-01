const html = `<h2 id="dropdown-attributes" tabindex="-1">Dropdown Attributes <a class="header-anchor" href="#dropdown-attributes" aria-hidden="true">#</a></h2>
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
<td>type</td>
<td>menu button type, refer to <code>Button</code> Component, only works when <code>split-button</code> is true</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>menu size, also works on the split button</td>
<td>string</td>
<td>large / default / small</td>
<td>default</td>
</tr>
<tr>
<td>max-height</td>
<td>the max height of menu</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>split-button</td>
<td>whether a button group is displayed</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placement</td>
<td>placement of pop menu</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end</td>
<td>bottom</td>
</tr>
<tr>
<td>trigger</td>
<td>how to trigger</td>
<td>string</td>
<td>hover/click/contextmenu</td>
<td>hover</td>
</tr>
<tr>
<td>hide-on-click</td>
<td>whether to hide menu after clicking menu-item</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-timeout</td>
<td>Delay time before show a dropdown (only works when trigger is <code>hover</code>)</td>
<td>number</td>
<td>—</td>
<td>250</td>
</tr>
<tr>
<td>hide-timeout</td>
<td>Delay time before hide a dropdown (only works when trigger is <code>hover</code>)</td>
<td>number</td>
<td>—</td>
<td>150</td>
</tr>
<tr>
<td>role</td>
<td>The ARIA role attribute for the dropdown menu. Depending on the use case, you may want to change this to 'navigation'</td>
<td>string</td>
<td>—</td>
<td>'menu'</td>
</tr>
<tr>
<td>tabindex</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex" target="_blank">tabindex</a> of Dropdown</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>popper-class</td>
<td>custom class name for Dropdown's dropdown</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>popper-options</td>
<td><a href="https://popper.js.org/docs/v2/" target="_blank">popper.js</a> parameters</td>
<td>Object</td>
<td>refer to <a href="https://popper.js.org/docs/v2/" target="_blank">popper.js</a> doc</td>
<td><code>{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}</code></td>
</tr>
<tr>
<td>teleported</td>
<td>whether the dropdown popup is teleported to the body</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
</tbody>
</table>
<h2 id="dropdown-item-attributes" tabindex="-1">Dropdown-Item Attributes <a class="header-anchor" href="#dropdown-item-attributes" aria-hidden="true">#</a></h2>
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
<td>command</td>
<td>a command to be dispatched to Dropdown's <code>command</code> callback</td>
<td>string/number/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether the item is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>divided</td>
<td>whether a divider is displayed</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>custom icon</td>
<td><code>string | Component</code></td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Navigation\\Dropdown\\dropdown.story.md";
export {
  frontmatter,
  html,
  relativePath
};
