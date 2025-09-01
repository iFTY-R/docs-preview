const html = `<h2 id="menu-attributes" tabindex="-1">Menu Attributes <a class="header-anchor" href="#menu-attributes" aria-hidden="true">#</a></h2>
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
<td>mode</td>
<td>menu display mode</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>vertical</td>
</tr>
<tr>
<td>collapse</td>
<td>whether the menu is collapsed (available only in vertical mode)</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>ellipsis</td>
<td>whether the menu is ellipsis (available only in horizontal mode)</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>background-color</td>
<td>background color of Menu (hex format) (deprecated, use <code>--bg-color</code> instead)</td>
<td>string</td>
<td>—</td>
<td>#ffffff</td>
</tr>
<tr>
<td>text-color</td>
<td>text color of Menu (hex format) (deprecated, use <code>--text-color</code> instead)</td>
<td>string</td>
<td>—</td>
<td>#303133</td>
</tr>
<tr>
<td>active-text-color</td>
<td>text color of currently active menu item (hex format) (deprecated, use <code>--active-color</code> instead)</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
<tr>
<td>default-active</td>
<td>index of active menu on page load</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>default-openeds</td>
<td>array that contains indexes of currently active sub-menus</td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>unique-opened</td>
<td>whether only one sub-menu can be active</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>menu-trigger</td>
<td>how sub-menus are triggered, only works when <code>mode</code> is 'horizontal'</td>
<td>string</td>
<td>hover / click</td>
<td>hover</td>
</tr>
<tr>
<td>router</td>
<td>whether <code>vue-router</code> mode is activated. If true, index will be used as 'path' to activate the route action. Use with <code>default-active</code> to set the active item on load.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>collapse-transition</td>
<td>whether to enable the collapse transition</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>popper-effect</td>
<td>Tooltip theme, built-in theme: <code>dark</code> / <code>light</code> when menu is collapsed</td>
<td>string</td>
<td>dark / light</td>
<td>dark</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Navigation\\Menu\\menu.story.md";
export {
  frontmatter,
  html,
  relativePath
};
