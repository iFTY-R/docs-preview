const html = `<h2 id="breadcrumb-attributes" tabindex="-1">Breadcrumb Attributes <a class="header-anchor" href="#breadcrumb-attributes" aria-hidden="true">#</a></h2>
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
<td>separator</td>
<td>separator character</td>
<td>^[string]</td>
<td>/</td>
</tr>
<tr>
<td>separator-icon</td>
<td>icon component of icon separator</td>
<td>^[string] / ^[Component]</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="breadcrumbitem-attributes" tabindex="-1">BreadcrumbItem Attributes <a class="header-anchor" href="#breadcrumbitem-attributes" aria-hidden="true">#</a></h2>
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
<td>to</td>
<td>target route of the link, same as <code>to</code> of <code>vue-router</code></td>
<td>^[string] / ^[object]<code>RouteLocationRaw</code></td>
<td>''</td>
</tr>
<tr>
<td>replace</td>
<td>if <code>true</code>, the navigation will not leave a history record</td>
<td>^[boolean]</td>
<td>false</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Navigation\\Breadcrumb\\breadcrumb.story.md";
export {
  frontmatter,
  html,
  relativePath
};
