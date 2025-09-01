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
<td>trigger</td>
<td>how the popover is triggered</td>
<td>string</td>
<td>click/focus/hover/contextmenu</td>
<td>click</td>
</tr>
<tr>
<td>title</td>
<td>popover title</td>
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
<td>content</td>
<td>popover content, can be replaced with a default <code>slot</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>popover width</td>
<td>string / number</td>
<td>—</td>
<td>Min width 150px</td>
</tr>
<tr>
<td>placement</td>
<td>popover placement</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>bottom</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Popover is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>visible / v-model:visible</td>
<td>whether popover is visible</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>popover offset</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>transition</td>
<td>popover transition animation</td>
<td>string</td>
<td>—</td>
<td>el-fade-in-linear</td>
</tr>
<tr>
<td>show-arrow</td>
<td>whether a tooltip arrow is displayed or not. For more info, please refer to <a href="https://githubfast.com/element-plus/element-plus/tree/dev/packages/components/popper" target="_blank">ElPopper</a></td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>popper-options</td>
<td>parameters for <a href="https://popper.js.org/docs/v2/" target="_blank">popper.js</a></td>
<td>object</td>
<td>please refer to <a href="https://popper.js.org/docs/v2/" target="_blank">popper.js</a></td>
<td><code>{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}</code></td>
</tr>
<tr>
<td>popper-class</td>
<td>custom class name for popover</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>popper-style</td>
<td>custom style for popover</td>
<td>string / object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-after</td>
<td>delay of appearance, in millisecond</td>
<td>number</td>
<td>—</td>
<td>0</td>
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
<td>tabindex</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex" target="_blank">tabindex</a> of Popover</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>teleported</td>
<td>whether popover dropdown is teleported to the body</td>
<td>boolean</td>
<td>true / false</td>
<td>true</td>
</tr>
<tr>
<td>persistent</td>
<td>when popover inactive and <code>persistent</code> is <code>false</code> , popover will be destroyed</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
</tbody>
</table>
<h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2>
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
<td>text content of popover</td>
</tr>
<tr>
<td>reference</td>
<td>HTML element that triggers popover</td>
</tr>
</tbody>
</table>
<h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2>
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
<td>show</td>
<td>triggers when popover shows</td>
<td>—</td>
</tr>
<tr>
<td>before-enter</td>
<td>triggers when the entering transition before</td>
<td>—</td>
</tr>
<tr>
<td>after-enter</td>
<td>triggers when the entering transition ends</td>
<td>—</td>
</tr>
<tr>
<td>hide</td>
<td>triggers when popover hides</td>
<td>—</td>
</tr>
<tr>
<td>before-leave</td>
<td>triggers when the leaving transition before</td>
<td>—</td>
</tr>
<tr>
<td>after-leave</td>
<td>triggers when the leaving transition ends</td>
<td>—</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Feedback\\Popover\\popover.story.md";
export {
  frontmatter,
  html,
  relativePath
};
