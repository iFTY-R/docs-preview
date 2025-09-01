const html = `<h1 id="affix" tabindex="-1">Affix <a class="header-anchor" href="#affix" aria-hidden="true">#</a></h1>
<p>Fix the element to a specific visible area.</p>
<h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>
<p>Affix is fixed at the top of the page by default.</p>
<p>:::demo You can set <code>offset</code> attribute to change the offset top，the default value is 0.</p>
<p>affix/basic</p>
<p>:::</p>
<h2 id="target-container" tabindex="-1">Target Container <a class="header-anchor" href="#target-container" aria-hidden="true">#</a></h2>
<p>You can set <code>target</code> attribute to keep the affix in the container at all times. It will be hidden if out of range.</p>
<p>:::demo Please notice that the container avoid having scrollbar.</p>
<p>affix/target</p>
<p>:::</p>
<h2 id="fixed-position" tabindex="-1">Fixed Position <a class="header-anchor" href="#fixed-position" aria-hidden="true">#</a></h2>
<p>The affix component provides two fixed positions: <code>top</code> and <code>bottom</code>.</p>
<p>:::demo You can set <code>position</code> attribute to change the fixed position, the default value is <code>top</code>.</p>
<p>affix/fixed</p>
<p>:::</p>
<h2 id="affix-api" tabindex="-1">Affix API <a class="header-anchor" href="#affix-api" aria-hidden="true">#</a></h2>
<h3 id="affix-attributes" tabindex="-1">Affix Attributes <a class="header-anchor" href="#affix-attributes" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>offset</code></td>
<td>offset distance.</td>
<td>^[number]</td>
<td><code>0</code></td>
<td>No</td>
</tr>
<tr>
<td><code>position</code></td>
<td>position of affix.</td>
<td>^[enum]<code>'top' | 'bottom'</code></td>
<td><code>'top'</code></td>
<td>No</td>
</tr>
<tr>
<td><code>target</code></td>
<td>target container. (CSS selector)</td>
<td>^[string]</td>
<td>—</td>
<td>No</td>
</tr>
<tr>
<td><code>z-index</code></td>
<td><code>z-index</code> of affix</td>
<td>^[number]</td>
<td><code>100</code></td>
<td>No</td>
</tr>
</tbody>
</table>
<h3 id="affix-events" tabindex="-1">Affix Events <a class="header-anchor" href="#affix-events" aria-hidden="true">#</a></h3>
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
<td><code>change</code></td>
<td>triggers when fixed state changed.</td>
<td>^[Function]<code>(fixed: boolean) =&gt; void</code></td>
</tr>
<tr>
<td><code>scroll</code></td>
<td>triggers when scrolling.</td>
<td>^[Function]<code>(value: { scrollTop: number, fixed: boolean }) =&gt; void</code></td>
</tr>
</tbody>
</table>
<h3 id="affix-exposes" tabindex="-1">Affix Exposes <a class="header-anchor" href="#affix-exposes" aria-hidden="true">#</a></h3>
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
<td><code>update</code></td>
<td>update affix state manually</td>
<td>^[Function]<code>() =&gt; void</code></td>
</tr>
<tr>
<td><code>updateRoot</code></td>
<td>update rootRect info</td>
<td>^[Function]<code>() =&gt; void</code></td>
</tr>
</tbody>
</table>
<h3 id="affix-slots" tabindex="-1">Affix Slots <a class="header-anchor" href="#affix-slots" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>default</code></td>
<td>customize default content.</td>
</tr>
</tbody>
</table>
`;
const frontmatter = { "title": "Affix", "lang": "en-US" };
const relativePath = "src\\components\\Navigation\\Affix\\affix.story.md";
export {
  frontmatter,
  html,
  relativePath
};
