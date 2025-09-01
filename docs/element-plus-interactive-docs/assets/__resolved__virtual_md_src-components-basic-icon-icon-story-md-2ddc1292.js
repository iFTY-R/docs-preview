const html = `<h2 id="icon-usage" tabindex="-1">Icon Usage <a class="header-anchor" href="#icon-usage" aria-hidden="true">#</a></h2>
<ul>
<li>
<p>If you want to <strong>use directly</strong> like the example, you need to <a href="https://v3.vuejs.org/guide/component-registration.html#global-registration" target="_blank">globally register</a> the components before using it.</p>
</li>
<li>
<p>If you want to see all available SVG icons please check <a href="https://unpkg.com/browse/@element-plus/icons-vue@1/dist/es/" target="_blank">@element-plus/icons-vue@1.x</a><a href="https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/types/components/" target="_blank">@element-plus/icons-vue@latest</a> and the source <a href="https://github.com/element-plus/element-plus-icons" target="_blank">element-plus-icons</a> out or <a href="#icon-collection">Icon Collection</a></p>
</li>
</ul>
<h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2>
<h3 id="using-packaging-manager" tabindex="-1">Using packaging manager <a class="header-anchor" href="#using-packaging-manager" aria-hidden="true">#</a></h3>
<pre><code class="language-shell"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">shell</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #8B949E"># Choose a package manager you like.</span></span>
<span class="line"><span style="color: #8B949E"># NPM</span></span>
<span class="line"><span style="color: #FFA657">$</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">npm</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">install</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">@element-plus/icons-vue</span></span>
<span class="line"><span style="color: #8B949E"># Yarn</span></span>
<span class="line"><span style="color: #FFA657">$</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">yarn</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">add</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">@element-plus/icons-vue</span></span>
<span class="line"><span style="color: #8B949E"># pnpm</span></span>
<span class="line"><span style="color: #FFA657">$</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">pnpm</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">install</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">@element-plus/icons-vue</span></span>
<span class="line"></span></code></pre></div></code></pre>
<h2 id="icon-attributes" tabindex="-1">Icon Attributes <a class="header-anchor" href="#icon-attributes" aria-hidden="true">#</a></h2>
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
<td><code>color</code></td>
<td>SVG tag's fill attribute</td>
<td><code>Pick&lt;CSSProperties, 'color'&gt;</code></td>
<td>inherit from color</td>
</tr>
<tr>
<td><code>size</code></td>
<td>SVG icon size, size x size</td>
<td><code>number | string</code></td>
<td>inherit from font size</td>
</tr>
</tbody>
</table>
<h2 id="icon-slots" tabindex="-1">Icon Slots <a class="header-anchor" href="#icon-slots" aria-hidden="true">#</a></h2>
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
<td>customize default content</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Basic\\Icon\\icon.story.md";
export {
  frontmatter,
  html,
  relativePath
};
