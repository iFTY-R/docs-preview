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
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>min</td>
<td>minimum value</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>maximum value</td>
<td>number</td>
<td>—</td>
<td>100</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Slider is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>step</td>
<td>step size</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>show-input</td>
<td>whether to display an input box, works when <code>range</code> is false</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-input-controls</td>
<td>whether to display control buttons when <code>show-input</code> is true</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>size of the slider wrapper, will not work in vertical mode</td>
<td>string</td>
<td>large / default / small</td>
<td>default</td>
</tr>
<tr>
<td>input-size</td>
<td>size of the input box, when set <code>size</code>, the default is the value of <code>size</code></td>
<td>string</td>
<td>large / default / small</td>
<td>default</td>
</tr>
<tr>
<td>show-stops</td>
<td>whether to display breakpoints</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-tooltip</td>
<td>whether to display tooltip value</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>format-tooltip</td>
<td>format to display tooltip value</td>
<td>function(value)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>range</td>
<td>whether to select a range</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>vertical</td>
<td>vertical mode</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>height</td>
<td>Slider height, required in vertical mode</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>label for screen reader</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>range-start-label</td>
<td>when <code>range</code> is true, screen reader label for the start of the range</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>range-end-label</td>
<td>when <code>range</code> is true, screen reader label for the end of the range</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>format-value-text</td>
<td>format to display the <code>aria-valuenow</code> attribute for screen readers</td>
<td>function(value)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>debounce</td>
<td>debounce delay when typing, in milliseconds, works when <code>show-input</code> is true</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>tooltip-class</td>
<td>custom class name for the tooltip</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>placement</td>
<td>position of Tooltip</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>top</td>
</tr>
<tr>
<td>marks</td>
<td>marks, type of key must be <code>number</code> and must in closed interval <code>[min, max]</code>, each mark can custom style</td>
<td>object</td>
<td>—</td>
<td>—</td>
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
<td>triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released)</td>
<td>value after changing</td>
</tr>
<tr>
<td>input</td>
<td>triggers when the data changes (It'll be emitted in real time during sliding)</td>
<td>value after changing</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Form\\Slider\\slider.story.md";
export {
  frontmatter,
  html,
  relativePath
};
