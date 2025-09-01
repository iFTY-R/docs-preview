const html = `<h1 id="loading" tabindex="-1">Loading <a class="header-anchor" href="#loading" aria-hidden="true">#</a></h1>
<p>Show animation while loading data.</p>
<h2 id="loading-inside-a-container" tabindex="-1">Loading inside a container <a class="header-anchor" href="#loading-inside-a-container" aria-hidden="true">#</a></h2>
<p>Displays animation in a container (such as a table) while loading data.</p>
<p>:::demo Element Plus provides two ways to invoke Loading: directive and service. For the custom directive <code>v-loading</code>, you just need to bind a <code>boolean</code> value to it. By default, the loading mask will append to the element where the directive is used. Adding the <code>body</code> modifier makes the mask append to the body element.</p>
<p>loading/basic</p>
<p>:::</p>
<h2 id="customization" tabindex="-1">Customization <a class="header-anchor" href="#customization" aria-hidden="true">#</a></h2>
<p>You can customize loading text, loading spinner and background color.</p>
<p>:::demo Add attribute <code>element-loading-text</code> to the element on which <code>v-loading</code> is bound, and its value will be displayed under the spinner. Similarly, the <code>element-loading-spinner / element-loading-svg</code> and <code>element-loading-background</code> attributes are used to set the svg icon, background color value, and loading icon, respectively.</p>
<p>loading/customization</p>
<p>:::</p>
<p>:::warning</p>
<p>Although the <code>element-loading-spinner / element-loading-svg</code> attribute supports incoming HTML fragments, it is very dangerous to dynamically render arbitrary HTML on the website, because it is easy to cause <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank">XSS attack</a>. Please make sure that the content of <code>element-loading-spinner / element-loading-svg</code> is trustworthy. <strong>Never</strong> assign user-submitted content to the <code>element-loading-spinner / element-loading-svg</code> attribute.</p>
<p>:::</p>
<h2 id="full-screen-loading" tabindex="-1">Full screen loading <a class="header-anchor" href="#full-screen-loading" aria-hidden="true">#</a></h2>
<p>Show a full screen animation while loading data.</p>
<p>:::demo When used as a directive, a full screen Loading requires the <code>fullscreen</code> modifier, and it will be appended to body. In this case, if you wish to disable scrolling on body, you can add another modifier <code>lock</code>. When used as a service, Loading will be full screen by default.</p>
<p>loading/fullscreen</p>
<p>:::</p>
<h2 id="service" tabindex="-1">Service <a class="header-anchor" href="#service" aria-hidden="true">#</a></h2>
<p>You can also invoke Loading with a service. Import Loading service:</p>
<pre><code class="language-ts"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">ts</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #8B949E">// import { ElLoading } from &#39;element-plus&#39;</span></span>
<span class="line"></span></code></pre></div></code></pre>
<p>Invoke it:</p>
<pre><code class="language-ts"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">ts</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">ElLoading.</span><span style="color: #D2A8FF">service</span><span style="color: #C9D1D9">(options)</span></span>
<span class="line"></span></code></pre></div></code></pre>
<p>The parameter <code>options</code> is the configuration of Loading, and its details can be found in the following table. <code>LoadingService</code> returns a Loading instance, and you can close it by invoking its <code>close</code> method:</p>
<pre><code class="language-ts"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">ts</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">loadingInstance</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> ElLoading.</span><span style="color: #D2A8FF">service</span><span style="color: #C9D1D9">(options)</span></span>
<span class="line"><span style="color: #D2A8FF">nextTick</span><span style="color: #C9D1D9">(() </span><span style="color: #FF7B72">=&gt;</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">// Loading should be closed asynchronously</span></span>
<span class="line"><span style="color: #C9D1D9">  loadingInstance.</span><span style="color: #D2A8FF">close</span><span style="color: #C9D1D9">()</span></span>
<span class="line"><span style="color: #C9D1D9">})</span></span>
<span class="line"></span></code></pre></div></code></pre>
<p>Note that in this case the full screen Loading is singleton. If a new full screen Loading is invoked before an existing one is closed, the existing full screen Loading instance will be returned instead of actually creating another Loading instance:</p>
<pre><code class="language-ts"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">ts</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">loadingInstance1</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> ElLoading.</span><span style="color: #D2A8FF">service</span><span style="color: #C9D1D9">({ fullscreen: </span><span style="color: #79C0FF">true</span><span style="color: #C9D1D9"> })</span></span>
<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">loadingInstance2</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> ElLoading.</span><span style="color: #D2A8FF">service</span><span style="color: #C9D1D9">({ fullscreen: </span><span style="color: #79C0FF">true</span><span style="color: #C9D1D9"> })</span></span>
<span class="line"><span style="color: #C9D1D9">console.</span><span style="color: #D2A8FF">log</span><span style="color: #C9D1D9">(loadingInstance1 </span><span style="color: #FF7B72">===</span><span style="color: #C9D1D9"> loadingInstance2) </span><span style="color: #8B949E">// true</span></span>
<span class="line"></span></code></pre></div></code></pre>
<p>Calling the <code>close</code> method on any one of them can close this full screen Loading.</p>
<p>If Element Plus is imported entirely, a globally method <code>$loading</code> will be registered to <code>app.config.globalProperties</code>. You can invoke it like this: <code>this.$loading(options)</code>, and it also returns a Loading instance.</p>
<h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h2>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>target</td>
<td>the DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to <code>document.querySelector</code> to get the corresponding DOM node</td>
<td>object/string</td>
<td>—</td>
<td>document.body</td>
</tr>
<tr>
<td>body</td>
<td>same as the <code>body</code> modifier of <code>v-loading</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>fullscreen</td>
<td>same as the <code>fullscreen</code> modifier of <code>v-loading</code></td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>lock</td>
<td>same as the <code>lock</code> modifier of <code>v-loading</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text</td>
<td>loading text that displays under the spinner</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>spinner</td>
<td>class name of the custom spinner</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>background</td>
<td>background color of the mask</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>custom-class</td>
<td>custom class name for Loading</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h2 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-hidden="true">#</a></h2>
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
<td>v-loading</td>
<td>show animation while loading data</td>
<td>boolean</td>
</tr>
<tr>
<td>element-loading-text</td>
<td>loading text that displays under the spinner</td>
<td>string</td>
</tr>
<tr>
<td>element-loading-spinner</td>
<td>icon of the custom spinner</td>
<td>string</td>
</tr>
<tr>
<td>element-loading-svg</td>
<td>icon of the custom spinner (same as element-loading-spinner)</td>
<td>string</td>
</tr>
<tr>
<td>element-loading-background</td>
<td>background color of the mask</td>
<td>string</td>
</tr>
</tbody>
</table>
`;
const frontmatter = {};
const relativePath = "src\\components\\Feedback\\Loading\\loading.story.md";
export {
  frontmatter,
  html,
  relativePath
};
