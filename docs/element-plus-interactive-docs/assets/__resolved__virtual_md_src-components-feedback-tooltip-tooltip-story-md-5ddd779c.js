const html = `<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2>
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
<td>append-to</td>
<td>which element the tooltip CONTENT appends to</td>
<td><code>CSSSelector | HTMLElement</code></td>
<td>—</td>
<td>#el-popper-container-[randomValue]</td>
</tr>
<tr>
<td>effect</td>
<td>Tooltip theme, built-in theme: <code>dark</code> / <code>light</code></td>
<td>string</td>
<td>dark / light</td>
<td>dark</td>
</tr>
<tr>
<td>content</td>
<td>display content, can be overridden by <code>slot#content</code></td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>raw-content</td>
<td>whether <code>content</code> is treated as HTML string</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placement</td>
<td>position of Tooltip</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>bottom</td>
</tr>
<tr>
<td>visible / v-model:visible</td>
<td>visibility of Tooltip</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Tooltip is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>offset of the Tooltip</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>transition</td>
<td>animation name</td>
<td>string</td>
<td>—</td>
<td>el-fade-in-linear</td>
</tr>
<tr>
<td>popper-options</td>
<td><a href="https://popper.js.org/docs/v2/" target="_blank">popper.js</a> parameters</td>
<td>Object</td>
<td>refer to <a href="https://popper.js.org/docs/v2/" target="_blank">popper.js</a> doc</td>
<td><code>{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}</code></td>
</tr>
<tr>
<td>show-after</td>
<td>delay of appearance, in millisecond</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>show-arrow</td>
<td>whether the tooltip content has an arrow</td>
<td>boolean</td>
<td>true / false</td>
<td>true</td>
</tr>
<tr>
<td>hide-after</td>
<td>delay of disappear, in millisecond</td>
<td>number</td>
<td>—</td>
<td>200</td>
</tr>
<tr>
<td>auto-close</td>
<td>timeout in milliseconds to hide tooltip</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>manual</td>
<td>whether to control Tooltip manually. <code>mouseenter</code> and <code>mouseleave</code> won't have effects if set to <code>true</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-class</td>
<td>custom class name for Tooltip's popper</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>enterable</td>
<td>whether the mouse can enter the tooltip</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>tabindex</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex" target="_blank">tabindex</a> of Tooltip</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>teleported</td>
<td>whether tooltip content is teleported, if <code>true</code> it will be teleported to where <code>append-to</code> sets</td>
<td>boolean</td>
<td>true / false</td>
<td>true</td>
</tr>
<tr>
<td>trigger</td>
<td>How should the tooltip be triggered (to show)</td>
<td>string</td>
<td>hover / click / focus / contextmenu</td>
<td>hover</td>
</tr>
<tr>
<td>virtual-triggering</td>
<td>Indicates whether virtual triggering is enabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>virtual-ref</td>
<td>Indicates the reference element to which the tooltip is attached</td>
<td>HTMLElement</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>trigger-keys</td>
<td>When you click the mouse to focus on the trigger element, you can define a set of keyboard codes to control the display of tooltip through the keyboard</td>
<td>Array</td>
<td>—</td>
<td><code>['Enter','Space']</code></td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Feedback\\Tooltip\\tooltip.story.md";
export {
  frontmatter,
  html,
  relativePath
};
