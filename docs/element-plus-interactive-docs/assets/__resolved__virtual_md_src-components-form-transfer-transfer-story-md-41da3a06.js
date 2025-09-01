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
<td>model-value / v-model</td>
<td>binding value</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>data source</td>
<td><code>Array&lt;{ key, label, disabled }&gt;</code></td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>filterable</td>
<td>whether Transfer is filterable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filter-placeholder</td>
<td>placeholder for the filter input</td>
<td>string</td>
<td>—</td>
<td>Enter keyword</td>
</tr>
<tr>
<td>filter-method</td>
<td>custom filter method</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>target-order</td>
<td>order strategy for elements in the target list. If set to <code>original</code>, the elements will keep the same order as the data source. If set to <code>push</code>, the newly added elements will be pushed to the bottom. If set to <code>unshift</code>, the newly added elements will be inserted on the top</td>
<td>string</td>
<td>original / push / unshift</td>
<td>original</td>
</tr>
<tr>
<td>titles</td>
<td>custom list titles</td>
<td>array</td>
<td>—</td>
<td>['List 1', 'List 2']</td>
</tr>
<tr>
<td>button-texts</td>
<td>custom button texts</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>render-content</td>
<td>custom render function for data items</td>
<td>function(h, option)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>format</td>
<td>texts for checking status in list header</td>
<td><code>{ noChecked, hasChecked }</code></td>
<td>—</td>
<td><code>{ noChecked: '\${checked}/\${total}', hasChecked: '\${checked}/\${total}' }</code></td>
</tr>
<tr>
<td>props</td>
<td>prop aliases for data source</td>
<td><code>{ key, label, disabled }</code></td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>left-default-checked</td>
<td>key array of initially checked data items of the left list</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>right-default-checked</td>
<td>key array of initially checked data items of the right list</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>validate-event</td>
<td>whether to trigger form validation</td>
<td>boolean</td>
<td>-</td>
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
<tr option="">
<td>—</td>
<td>Custom content for data items. The scope parameter is</td>
</tr>
<tr>
<td>left-footer</td>
<td>content of left list footer</td>
</tr>
<tr>
<td>right-footer</td>
<td>content of right list footer</td>
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
<td>clearQuery</td>
<td>clear the filter keyword of a certain panel</td>
<td>'left' / 'right'</td>
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
<td>change</td>
<td>triggers when data items change in the right list</td>
<td>key array of current data items in the right list, transfer direction (left or right), moved item keys</td>
</tr>
<tr>
<td>left-check-change</td>
<td>triggers when end user changes the checked state of any data item in the left list</td>
<td>key array of currently checked items, key array of items whose checked state have changed</td>
</tr>
<tr>
<td>right-check-change</td>
<td>triggers when end user changes the checked state of any data item in the right list</td>
<td>key array of currently checked items, key array of items whose checked state have changed</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Form\\Transfer\\transfer.story.md";
export {
  frontmatter,
  html,
  relativePath
};
