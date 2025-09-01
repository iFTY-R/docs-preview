const html = `<h2 id="button-attributes" tabindex="-1">Button Attributes <a class="header-anchor" href="#button-attributes" aria-hidden="true">#</a></h2>
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
<td>size</td>
<td>button size</td>
<td>string</td>
<td>large / default /small</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>button type</td>
<td>string</td>
<td>primary / success / warning / danger / info / <del>text</del></td>
<td>—</td>
</tr>
<tr>
<td>plain</td>
<td>determine whether it's a plain button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text <VersionTag version="2.2.0" /></td>
<td>determine whether it's a text button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>bg <VersionTag version="2.2.0" /></td>
<td>determine whether the text button background color is always on</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>link</td>
<td>determine whether it's a link button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>round</td>
<td>determine whether it's a round button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>circle</td>
<td>determine whether it's a circle button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>determine whether it's loading</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>loading-icon</td>
<td>customize loading icon component</td>
<td><code>string | Component</code></td>
<td>—</td>
<td>Loading</td>
</tr>
<tr>
<td>disabled</td>
<td>disable the button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>icon component</td>
<td><code>string | Component</code></td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>autofocus</td>
<td>same as native button's <code>autofocus</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>native-type</td>
<td>same as native button's <code>type</code></td>
<td>string</td>
<td>button / submit / reset</td>
<td>button</td>
</tr>
<tr>
<td>auto-insert-space</td>
<td>automatically insert a space between two chinese characters</td>
<td>boolean</td>
<td></td>
<td>—</td>
</tr>
</tbody>
</table>
<h2 id="button-slots" tabindex="-1">Button Slots <a class="header-anchor" href="#button-slots" aria-hidden="true">#</a></h2>
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
<tr>
<td>loading</td>
<td>customize loading component</td>
</tr>
<tr>
<td>icon</td>
<td>customize icon component</td>
</tr>
</tbody>
</table>
<h2 id="button-group-attributes" tabindex="-1">Button-Group Attributes <a class="header-anchor" href="#button-group-attributes" aria-hidden="true">#</a></h2>
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
<td>size</td>
<td>control the size of buttons in this button-group</td>
<td>string</td>
<td>large / default /small</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>control the type of buttons in this button-group</td>
<td>string</td>
<td>primary / success / warning / danger / info</td>
<td>—</td>
</tr>
</tbody>
</table>
<h2 id="button-group-slots" tabindex="-1">Button-Group Slots <a class="header-anchor" href="#button-group-slots" aria-hidden="true">#</a></h2>
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
<td>customize button group content</td>
<td>Button</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Basic\\Button\\button.story.md";
export {
  frontmatter,
  html,
  relativePath
};
