const html = `<h2 id="table-api" tabindex="-1">Table API <a class="header-anchor" href="#table-api" aria-hidden="true">#</a></h2>
<h3 id="table-attributes" tabindex="-1">Table Attributes <a class="header-anchor" href="#table-attributes" aria-hidden="true">#</a></h3>
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
<td>data</td>
<td>table data</td>
<td>^[object]<code>any[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>height</td>
<td>table's height. By default it has an <code>auto</code> height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles</td>
<td>^[string] / ^[number]</td>
<td>—</td>
</tr>
<tr>
<td>max-height</td>
<td>table's max-height. The legal value is a number or the height in px</td>
<td>^[string] / ^[number]</td>
<td>—</td>
</tr>
<tr>
<td>stripe</td>
<td>whether Table is striped</td>
<td>^[boolean]</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>whether Table has vertical border</td>
<td>^[boolean]</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>size of Table</td>
<td>^[enum]<code>'' | 'large' | 'default' | 'small'</code></td>
<td>—</td>
</tr>
<tr>
<td>fit</td>
<td>whether width of column automatically fits its container</td>
<td>^[boolean]</td>
<td>true</td>
</tr>
<tr>
<td>show-header</td>
<td>whether Table header is visible</td>
<td>^[boolean]</td>
<td>true</td>
</tr>
<tr>
<td>highlight-current-row</td>
<td>whether current row is highlighted</td>
<td>^[boolean]</td>
<td>false</td>
</tr>
<tr>
<td>current-row-key</td>
<td>key of current row, a set only prop</td>
<td>^[string] / ^[number]</td>
<td>—</td>
</tr>
<tr>
<td>row-class-name</td>
<td>function that returns custom class names for a row, or a string assigning class names for every row</td>
<td>^[Function]<code>(data: { row: any, rowIndex: number }) =&gt; string</code> / ^[string]</td>
<td>—</td>
</tr>
<tr>
<td>row-style</td>
<td>function that returns custom style for a row, or an object assigning custom style for every row</td>
<td>^[Function]<code>(data: { row: any, rowIndex: number }) =&gt; CSSProperties</code> / ^[object]<code>CSSProperties</code></td>
<td>—</td>
</tr>
<tr>
<td>cell-class-name</td>
<td>function that returns custom class names for a cell, or a string assigning class names for every cell</td>
<td>^[Function]<code>(data: { row: any, column: any, rowIndex: number, columnIndex: number }) =&gt; string</code> / ^[string]</td>
<td>—</td>
</tr>
<tr>
<td>cell-style</td>
<td>function that returns custom style for a cell, or an object assigning custom style for every cell</td>
<td>^[Function]<code>(data: { row: any, column: any, rowIndex: number, columnIndex: number }) =&gt; CSSProperties</code> / ^[object]<code>CSSProperties</code></td>
<td>—</td>
</tr>
<tr>
<td>header-row-class-name</td>
<td>function that returns custom class names for a row in table header, or a string assigning class names for every row in table header</td>
<td>^[Function]<code>(data: { row: any, rowIndex: number }) =&gt; string</code> / ^[string]</td>
<td>—</td>
</tr>
<tr>
<td>header-row-style</td>
<td>function that returns custom style for a row in table header, or an object assigning custom style for every row in table header</td>
<td>^[Function]<code>(data: { row: any, rowIndex: number }) =&gt; CSSProperties</code> / ^[object]<code>CSSProperties</code></td>
<td>—</td>
</tr>
<tr>
<td>header-cell-class-name</td>
<td>function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header</td>
<td>^[Function]<code>(data: { row: any, column: any, rowIndex: number, columnIndex: number }) =&gt; string</code> / ^[string]</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-style</td>
<td>function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header</td>
<td>^[Function]<code>(data: { row: any, column: any, rowIndex: number, columnIndex: number }) =&gt; CSSProperties</code> / ^[object]<code>CSSProperties</code></td>
<td>—</td>
</tr>
<tr>
<td>row-key</td>
<td>key of row data, used for optimizing rendering. Required if <code>reserve-selection</code> is on or display tree data. When its type is String, multi-level access is supported, e.g. <code>user.info.id</code>, but <code>user.info[0].id</code> is not supported, in which case <code>Function</code> should be used</td>
<td>^[function]<code>(row: any) =&gt; string</code> / ^[string]</td>
<td>—</td>
</tr>
<tr>
<td>empty-text</td>
<td>displayed text when data is empty. You can customize this area with <code>#empty</code></td>
<td>^[string]</td>
<td>No Data</td>
</tr>
<tr>
<td>default-expand-all</td>
<td>whether expand all rows by default, works when the table has a column type=&quot;expand&quot; or contains tree structure data</td>
<td>^[boolean]</td>
<td>false</td>
</tr>
<tr>
<td>expand-row-keys</td>
<td>set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop</td>
<td>^[object]<code>any[]</code></td>
<td>—</td>
</tr>
<tr>
<td>default-sort</td>
<td>set the default sort column and order. property <code>prop</code> is used to set default sort column, property <code>order</code> is used to set default sort order</td>
<td>^[object]<code>Sort</code></td>
<td>if <code>prop</code> is set, and <code>order</code> is not set, then <code>order</code> is default to ascending</td>
</tr>
<tr>
<td>tooltip-effect</td>
<td>the <code>effect</code> of the overflow tooltip</td>
<td>^[enum]<code>'dark' | 'light'</code></td>
<td>dark</td>
</tr>
<tr>
<td>tooltip-options ^(2.2.28)</td>
<td>the options for the overflow tooltip, <a href="tooltip.html#attributes" target="_blank">see the following tooltip component</a></td>
<td>^[object]<code>Pick&lt;ElTooltipProps, 'effect' | 'enterable' | 'hideAfter' | 'offset' | 'placement' | 'popperClass' | 'popperOptions' | 'showAfter' | 'showArrow'&gt;</code></td>
<td>^[object]<code>{ enterable: true, placement: 'top', showArrow: true, hideAfter: 200, popperOptions: { strategy: 'fixed' } }</code></td>
</tr>
<tr>
<td>show-summary</td>
<td>whether to display a summary row</td>
<td>^[boolean]</td>
<td>false</td>
</tr>
<tr>
<td>sum-text</td>
<td>displayed text for the first column of summary row</td>
<td>^[string]</td>
<td>Sum</td>
</tr>
<tr>
<td>summary-method</td>
<td>custom summary method</td>
<td>^[Function]<code>(data: { columns: any[], data: any[] }) =&gt; (VNode | string)[]</code></td>
<td>—</td>
</tr>
<tr>
<td>span-method</td>
<td>method that returns rowspan and colspan</td>
<td>^[Function]<code>(data: { row: any, column: any, rowIndex: number, columnIndex: number }) =&gt; number[] | { rowspan: number, colspan: number } | void</code></td>
<td>—</td>
</tr>
<tr>
<td>select-on-indeterminate</td>
<td>controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected</td>
<td>^[boolean]</td>
<td>true</td>
</tr>
<tr>
<td>indent</td>
<td>horizontal indentation of tree data</td>
<td>^[number]</td>
<td>16</td>
</tr>
<tr>
<td>lazy</td>
<td>whether to lazy loading data</td>
<td>^[boolean]</td>
<td>false</td>
</tr>
<tr>
<td>load</td>
<td>method for loading child row data, only works when <code>lazy</code> is true</td>
<td>^[Function]<code>(row: any, treeNode: TreeNode, resolve: (data: any[]) =&gt; void) =&gt; void</code></td>
<td>—</td>
</tr>
<tr>
<td>tree-props</td>
<td>configuration for rendering nested data</td>
<td>^[object]<code>{ hasChildren?: string, children?: string }</code></td>
<td>^[object]<code>{ hasChildren: 'hasChildren', children: 'children' }</code></td>
</tr>
<tr>
<td>table-layout</td>
<td>sets the algorithm used to lay out table cells, rows, and columns</td>
<td>^[enum]<code>'fixed' | 'auto'</code></td>
<td>fixed</td>
</tr>
<tr>
<td>scrollbar-always-on</td>
<td>always show scrollbar</td>
<td>^[boolean]</td>
<td>false</td>
</tr>
<tr>
<td>show-overflow-tooltip</td>
<td>whether to hide extra content and show them in a tooltip when hovering on the <a href="http://cell.It" target="_blank">cell.It</a> will affect all the table columns, refer to table <a href="#table-attributes">tooltip-options</a></td>
<td>^[boolean] / <a href="#table-attributes"><code>object</code></a> ^(2.3.7)</td>
<td>—</td>
</tr>
<tr>
<td>flexible ^(2.2.1)</td>
<td>ensure main axis minimum-size doesn't follow the content</td>
<td>^[boolean]</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="table-events" tabindex="-1">Table Events <a class="header-anchor" href="#table-events" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>select</td>
<td>triggers when user clicks the checkbox in a row</td>
<td>^[Function]<code>&lt;T = any&gt;(selection: T[], row: T) =&gt; void</code></td>
</tr>
<tr>
<td>select-all</td>
<td>triggers when user clicks the checkbox in table header</td>
<td>^[Function]<code>(selection: any[]) =&gt; void</code></td>
</tr>
<tr>
<td>selection-change</td>
<td>triggers when selection changes</td>
<td>^[Function]<code>(newSelection: any[]) =&gt; void</code></td>
</tr>
<tr>
<td>cell-mouse-enter</td>
<td>triggers when hovering into a cell</td>
<td>^[Function]<code>(row: any, column: any, cell: HTMLTableCellElement, event: Event) =&gt; void</code></td>
</tr>
<tr>
<td>cell-mouse-leave</td>
<td>triggers when hovering out of a cell</td>
<td>^[Function]<code>(row: any, column: any, cell: HTMLTableCellElement, event: Event) =&gt; void</code></td>
</tr>
<tr>
<td>cell-click</td>
<td>triggers when clicking a cell</td>
<td>^[Function]<code>(row: any, column: any, cell: HTMLTableCellElement, event: Event) =&gt; void</code></td>
</tr>
<tr>
<td>cell-dblclick</td>
<td>triggers when double clicking a cell</td>
<td>^[Function]<code>(row: any, column: any, cell: HTMLTableCellElement, event: Event) =&gt; void</code></td>
</tr>
<tr>
<td>cell-contextmenu</td>
<td>triggers when user right clicks on a cell</td>
<td>^[Function]<code>(row: any, column: any, cell: HTMLTableCellElement, event: Event) =&gt; void</code></td>
</tr>
<tr>
<td>row-click</td>
<td>triggers when clicking a row</td>
<td>^[Function]<code>(row: any, column: any, event: Event) =&gt; void</code></td>
</tr>
<tr>
<td>row-contextmenu</td>
<td>triggers when user right clicks on a row</td>
<td>^[Function]<code>(row: any, column: any, event: Event) =&gt; void</code></td>
</tr>
<tr>
<td>row-dblclick</td>
<td>triggers when double clicking a row</td>
<td>^[Function]<code>(row: any, column: any, event: Event) =&gt; void</code></td>
</tr>
<tr>
<td>header-click</td>
<td>triggers when clicking a column header</td>
<td>^[Function]<code>(column: any, event: Event) =&gt; void</code></td>
</tr>
<tr>
<td>header-contextmenu</td>
<td>triggers when user right clicks on a column header</td>
<td>^[Function]<code>(column: any, event: Event) =&gt; void</code></td>
</tr>
<tr>
<td>sort-change</td>
<td>triggers when Table's sorting changes</td>
<td>^[Function]<code>(data: {column: any, prop: string, order: any }) =&gt; void</code></td>
</tr>
<tr>
<td>filter-change</td>
<td>column's key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered</td>
<td>^[Function]<code>(newFilters: any) =&gt; void</code></td>
</tr>
<tr>
<td>current-change</td>
<td>triggers when current row changes</td>
<td>^[Function]<code>(currentRow: any, oldCurrentRow: any) =&gt; void</code></td>
</tr>
<tr>
<td>header-dragend</td>
<td>triggers after changing a column's width by dragging the column header's border</td>
<td>^[Function]<code>(newWidth: number, oldWidth: number, column: any, event: MouseEvent) =&gt; void</code></td>
</tr>
<tr>
<td>expand-change</td>
<td>triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded)</td>
<td>^[Function]<code>(row: any, expandedRows: any[]) =&gt; void &amp; (row: any, expanded: boolean) =&gt; void</code></td>
</tr>
</tbody>
</table>
<h3 id="table-slots" tabindex="-1">Table Slots <a class="header-anchor" href="#table-slots" aria-hidden="true">#</a></h3>
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
<td>default</td>
<td>customize default content</td>
<td>Table-column</td>
</tr>
<tr>
<td>append</td>
<td>Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one.</td>
<td>—</td>
</tr>
<tr>
<td>empty</td>
<td>you can customize content when data is empty.</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="table-exposes" tabindex="-1">Table Exposes <a class="header-anchor" href="#table-exposes" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>clearSelection</td>
<td>used in multiple selection Table, clear user selection</td>
<td>^[Function]<code>() =&gt; void</code></td>
</tr>
<tr>
<td>getSelectionRows</td>
<td>returns the currently selected rows</td>
<td>^[Function]<code>() =&gt; void</code></td>
</tr>
<tr>
<td>toggleRowSelection</td>
<td>used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected</td>
<td>^[Function]<code>(row: any, selected: boolean) =&gt; void</code></td>
</tr>
<tr>
<td>toggleAllSelection</td>
<td>used in multiple selection Table, toggle select all and deselect all</td>
<td>^[Function]<code>() =&gt; void</code></td>
</tr>
<tr>
<td>toggleRowExpansion</td>
<td>used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed</td>
<td>^[Function]<code>(row: any, expanded?: boolean) =&gt; void</code></td>
</tr>
<tr>
<td>setCurrentRow</td>
<td>used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection</td>
<td>^[Function]<code>(row: any) =&gt; void</code></td>
</tr>
<tr>
<td>clearSort</td>
<td>clear sorting, restore data to the original order</td>
<td>^[Function]<code>() =&gt; void</code></td>
</tr>
<tr>
<td>clearFilter</td>
<td>clear filters of the columns whose <code>columnKey</code> are passed in. If no params, clear all filters</td>
<td>^[Function]<code>(columnKeys?: string[]) =&gt; void</code></td>
</tr>
<tr>
<td>doLayout</td>
<td>refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout</td>
<td>^[Function]<code>() =&gt; void</code></td>
</tr>
<tr>
<td>sort</td>
<td>sort Table manually. Property <code>prop</code> is used to set sort column, property <code>order</code> is used to set sort order</td>
<td>^[Function]<code>(prop: string, order: string) =&gt; void</code></td>
</tr>
<tr>
<td>scrollTo</td>
<td>scrolls to a particular set of coordinates</td>
<td>^[Function]<code>(options: number | ScrollToOptions, yCoord?: number) =&gt; void</code></td>
</tr>
<tr>
<td>setScrollTop</td>
<td>set vertical scroll position</td>
<td>^[Function]<code>(top?: number) =&gt; void</code></td>
</tr>
<tr>
<td>setScrollLeft</td>
<td>set horizontal scroll position</td>
<td>^[Function]<code>(left?: number) =&gt; void</code></td>
</tr>
</tbody>
</table>
<h2 id="table-column-api" tabindex="-1">Table-column API <a class="header-anchor" href="#table-column-api" aria-hidden="true">#</a></h2>
<h3 id="table-column-attributes" tabindex="-1">Table-column Attributes <a class="header-anchor" href="#table-column-attributes" aria-hidden="true">#</a></h3>
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
<td>type</td>
<td>type of the column. If set to <code>selection</code>, the column will display checkbox. If set to <code>index</code>, the column will display index of the row (staring from 1). If set to <code>expand</code>, the column will display expand icon</td>
<td>^[enum]<code>'default' | 'selection' | 'index' | 'expand'</code></td>
<td>default</td>
</tr>
<tr>
<td>index</td>
<td>customize indices for each row, works on columns with <code>type=index</code></td>
<td>^[number] / ^[Function]<code>(index: number) =&gt; number</code></td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>column label</td>
<td>^[string]</td>
<td>—</td>
</tr>
<tr>
<td>column-key</td>
<td>column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered</td>
<td>^[string]</td>
<td>—</td>
</tr>
<tr>
<td>prop</td>
<td>field name. You can also use its alias: <code>property</code></td>
<td>^[string]</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>column width</td>
<td>^[string] / ^[number]</td>
<td>''</td>
</tr>
<tr>
<td>min-width</td>
<td>column minimum width. Columns with <code>width</code> has a fixed width, while columns with <code>min-width</code> has a width that is distributed in proportion</td>
<td>^[string] / ^[number]</td>
<td>''</td>
</tr>
<tr>
<td>fixed</td>
<td>whether column is fixed at left / right. Will be fixed at left if <code>true</code></td>
<td>^[enum]<code>'left' | 'right'</code> / ^[boolean]</td>
<td>false</td>
</tr>
<tr>
<td>render-header</td>
<td>render function for table header of this column</td>
<td>^[Function]<code>(data: { column: any, $index: number }) =&gt; void</code></td>
<td>—</td>
</tr>
<tr>
<td>sortable</td>
<td>whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the <code>sort-change</code> event of Table</td>
<td>^[boolean] / ^[string]</td>
<td>false</td>
</tr>
<tr>
<td>sort-method</td>
<td>sorting method, works when <code>sortable</code> is <code>true</code>. Should return a number, just like Array.sort</td>
<td>^[Function]<code>&lt;T = any&gt;(a: T, b: T) =&gt; number</code></td>
<td>—</td>
</tr>
<tr>
<td>sort-by</td>
<td>specify which property to sort by, works when <code>sortable</code> is <code>true</code> and <code>sort-method</code> is <code>undefined</code>. If set to an Array, the column will sequentially sort by the next property if the previous one is equal</td>
<td>^[Function]<code>(row: any, index: number) =&gt; string</code> / ^[string] / ^[object]<code>string[]</code></td>
<td>—</td>
</tr>
<tr>
<td>sort-orders</td>
<td>the order of the sorting strategies used when sorting the data, works when <code>sortable</code> is <code>true</code>. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array</td>
<td>^[object]<code>('ascending' | 'descending' | null)[]</code></td>
<td>['ascending', 'descending', null]</td>
</tr>
<tr>
<td>resizable</td>
<td>whether column width can be resized, works when <code>border</code> of <code>el-table</code> is <code>true</code></td>
<td>^[boolean]</td>
<td>true</td>
</tr>
<tr>
<td>formatter</td>
<td>function that formats cell content</td>
<td>^[function]<code>(row: any, column: any, cellValue: any, index: number) =&gt; VNode | string</code></td>
<td>—</td>
</tr>
<tr>
<td>show-overflow-tooltip</td>
<td>whether to hide extra content and show them in a tooltip when hovering on the cell</td>
<td>^[boolean] / <a href="#table-attributes"><code>object</code></a> ^(2.2.28)</td>
<td>undefined</td>
</tr>
<tr>
<td>align</td>
<td>alignment</td>
<td>^[enum]<code>'left' | 'center' | 'right'</code></td>
<td>left</td>
</tr>
<tr>
<td>header-align</td>
<td>alignment of the table header. If omitted, the value of the above <code>align</code> attribute will be applied</td>
<td>^[enum]<code>'left' | 'center' | 'right'</code></td>
<td>left</td>
</tr>
<tr>
<td>class-name</td>
<td>class name of cells in the column</td>
<td>^[string]</td>
<td>—</td>
</tr>
<tr>
<td>label-class-name</td>
<td>class name of the label of this column</td>
<td>^[string]</td>
<td>—</td>
</tr>
<tr>
<td>selectable</td>
<td>function that determines if a certain row can be selected, works when <code>type</code> is 'selection'</td>
<td>^[Function]<code>(row: any, index: number) =&gt; boolean</code></td>
<td>—</td>
</tr>
<tr>
<td>reserve-selection</td>
<td>whether to reserve selection after data refreshing, works when <code>type</code> is 'selection'. Note that <code>row-key</code> is required for this to work</td>
<td>^[boolean]</td>
<td>false</td>
</tr>
<tr>
<td>filters</td>
<td>an array of data filtering options. For each element in this array, <code>text</code> and <code>value</code> are required</td>
<td>^[object]<code>Array&lt;{text: string, value: string}&gt;</code></td>
<td>—</td>
</tr>
<tr>
<td>filter-placement</td>
<td>placement for the filter dropdown</td>
<td>^[enum]<code>'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'</code></td>
<td>—</td>
</tr>
<tr>
<td>filter-class-name ^(2.5.0)</td>
<td>className for the filter dropdown</td>
<td>^[string]</td>
<td>—</td>
</tr>
<tr>
<td>filter-multiple</td>
<td>whether data filtering supports multiple options</td>
<td>^[boolean]</td>
<td>true</td>
</tr>
<tr>
<td>filter-method</td>
<td>data filtering method. If <code>filter-multiple</code> is on, this method will be called multiple times for each row, and a row will display if one of the calls returns <code>true</code></td>
<td>^[function]<code>(value: any, row: any, column: any) =&gt; void</code></td>
<td>—</td>
</tr>
<tr>
<td>filtered-value</td>
<td>filter value for selected data, might be useful when table header is rendered with <code>render-header</code></td>
<td>^[object]<code>string[]</code></td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="table-column-slots" tabindex="-1">Table-column Slots <a class="header-anchor" href="#table-column-slots" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>Custom content for table columns</td>
<td>^[object]<code>{ row: any, column: any, $index: number }</code></td>
</tr>
<tr>
<td>header</td>
<td>Custom content for table header</td>
<td>^[object]<code>{ column: any, $index: number }</code></td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Data\\Table\\table.story.md";
export {
  frontmatter,
  html,
  relativePath
};
