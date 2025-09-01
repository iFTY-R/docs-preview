const html = `<h2 id="link-attributes" tabindex="-1">Link Attributes <a class="header-anchor" href="#link-attributes" aria-hidden="true">#</a></h2>
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
<td>type</td>
<td>string</td>
<td>primary / success / warning / danger / info / default</td>
<td>default</td>
</tr>
<tr>
<td>underline</td>
<td>whether the component has underline</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>disabled</td>
<td>whether the component is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>href</td>
<td>same as native hyperlink's <code>href</code></td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>icon component</td>
<td><code>string | Component</code></td>
<td>—</td>
<td>-</td>
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
<td>customize default content</td>
</tr>
<tr>
<td>icon</td>
<td>customize icon component</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Basic\\Link\\link.story.md";
export {
  frontmatter,
  html,
  relativePath
};
