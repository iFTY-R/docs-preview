const html = `<h1 id="message" tabindex="-1">Message <a class="header-anchor" href="#message" aria-hidden="true">#</a></h1>
<p>Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification.</p>
<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>
<p>Displays at the top, and disappears after 3 seconds.</p>
<p>:::demo The setup of Message is very similar to notification, so parts of the options won't be explained in detail here. You can check the options table below combined with notification doc to understand it. Element Plus has registered a <code>$message</code> method for invoking. Message can take a string or a VNode as parameter, and it will be shown as the main body.</p>
<p>message/basic</p>
<p>:::</p>
<h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2>
<p>Used to show the feedback of Success, Warning, Message and Error activities.</p>
<p>:::demo When you need more customizations, Message component can also take an object as parameter. For example, setting value of <code>type</code> can define different types, and its default is <code>info</code>. In such cases the main body is passed in as the value of <code>message</code>. Also, we have registered methods for different types, so you can directly call it without passing a type like <code>open4</code>.</p>
<p>message/different-types</p>
<p>:::</p>
<h2 id="closable" tabindex="-1">Closable <a class="header-anchor" href="#closable" aria-hidden="true">#</a></h2>
<p>A close button can be added.</p>
<p>:::demo A default Message cannot be closed manually. If you need a closable message, you can set <code>showClose</code> field. Besides, same as notification, message has a controllable <code>duration</code>. Default duration is 3000 ms, and it won't disappear when set to <code>0</code>.</p>
<p>message/closable</p>
<p>:::</p>
<h2 id="centered-text" tabindex="-1">Centered text <a class="header-anchor" href="#centered-text" aria-hidden="true">#</a></h2>
<p>Use the <code>center</code> attribute to center the text.</p>
<p>:::demo</p>
<p>message/centered-content</p>
<p>:::</p>
<h2 id="use-html-string" tabindex="-1">Use HTML string <a class="header-anchor" href="#use-html-string" aria-hidden="true">#</a></h2>
<p><code>message</code> supports HTML string.</p>
<p>:::demo Set <code>dangerouslyUseHTMLString</code> to true and <code>message</code> will be treated as an HTML string.</p>
<p>message/raw-html</p>
<p>:::</p>
<p>:::warning</p>
<p>Although <code>message</code> property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank">XSS attacks</a>. So when <code>dangerouslyUseHTMLString</code> is on, please make sure the content of <code>message</code> is trusted, and <strong>never</strong> assign <code>message</code> to user-provided content.</p>
<p>:::</p>
<h2 id="grouping" tabindex="-1">Grouping <a class="header-anchor" href="#grouping" aria-hidden="true">#</a></h2>
<p>merge messages with the same content.</p>
<p>:::demo Set <code>grouping</code> to true and the same content of <code>message</code> will be merged.</p>
<p>message/grouping</p>
<p>:::</p>
<h2 id="global-method" tabindex="-1">Global method <a class="header-anchor" href="#global-method" aria-hidden="true">#</a></h2>
<p>Element Plus has added a global method <code>$message</code> for <code>app.config.globalProperties</code>. So in a vue instance you can call <code>Message</code> like what we did in this page.</p>
<h2 id="local-import" tabindex="-1">Local import <a class="header-anchor" href="#local-import" aria-hidden="true">#</a></h2>
<pre><code class="language-ts"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">ts</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #8B949E">// import { ElMessage } from &#39;element-plus&#39;</span></span>
<span class="line"></span></code></pre></div></code></pre>
<p>In this case you should call <code>ElMessage(options)</code>. We have also registered methods for different types, e.g. <code>ElMessage.success(options)</code>. You can call <code>ElMessage.closeAll()</code> to manually close all the instances.</p>
<h2 id="app-context-inheritance-2-0-3" tabindex="-1">App context inheritance <el-tag> &gt;= 2.0.3</el-tag> <a class="header-anchor" href="#app-context-inheritance-2-0-3" aria-hidden="true">#</a></h2>
<p>Now message accepts a <code>context</code> as second parameter of the message constructor which allows you to inject current app's context to message which allows you to inherit all the properties of the app.</p>
<p>You can use it like this:</p>
<p>:::tip</p>
<p>If you globally registered ElMessage component, it will automatically inherit your app context.</p>
<p>:::</p>
<pre><code class="language-ts"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">ts</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> { getCurrentInstance } </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> { ElMessage } </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;element-plus&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #8B949E">// in your setup method</span></span>
<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> { </span><span style="color: #79C0FF">appContext</span><span style="color: #C9D1D9"> } </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">getCurrentInstance</span><span style="color: #C9D1D9">()</span><span style="color: #FF7B72">!</span></span>
<span class="line"><span style="color: #D2A8FF">ElMessage</span><span style="color: #C9D1D9">({}, appContext)</span></span>
<span class="line"></span></code></pre></div></code></pre>
<h2 id="message-api" tabindex="-1">Message API <a class="header-anchor" href="#message-api" aria-hidden="true">#</a></h2>
<h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>message</code></td>
<td>message text</td>
<td><code>string | VNode | (() =&gt; VNode)</code></td>
<td>—</td>
</tr>
<tr>
<td><code>type</code></td>
<td>message type</td>
<td><code>'success' | 'warning' | 'info' | 'error'</code></td>
<td><code>'info'</code></td>
</tr>
<tr>
<td><code>icon</code></td>
<td>custom icon component, overrides <code>type</code></td>
<td><code>string | Component</code></td>
<td>—</td>
</tr>
<tr>
<td><code>dangerouslyUseHTMLString</code></td>
<td>whether <code>message</code> is treated as HTML string</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>custom-class</code></td>
<td>custom class name for Message</td>
<td><code>string</code></td>
<td>—</td>
</tr>
<tr>
<td><code>duration</code></td>
<td>display duration, millisecond. If set to 0, it will not turn off automatically</td>
<td><code>number</code></td>
<td><code>3000</code></td>
</tr>
<tr>
<td><code>show-close</code></td>
<td>whether to show a close button</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>center</code></td>
<td>whether to center the text</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>on-close</code></td>
<td>callback function when closed with the message instance as the parameter</td>
<td><code>function</code></td>
<td>—</td>
</tr>
<tr>
<td><code>offset</code></td>
<td>set the distance to the top of viewport</td>
<td><code>number</code></td>
<td><code>20</code></td>
</tr>
<tr>
<td><code>appendTo</code></td>
<td>set the root element for the message</td>
<td><code>string | HTMLElement</code></td>
<td><code>document.body</code></td>
</tr>
<tr>
<td><code>grouping</code></td>
<td>merge messages with the same content, type of VNode message is not supported</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody>
</table>
<h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3>
<p><code>Message</code> and <code>this.$message</code> returns the current Message instance. To manually close the instance, you can call <code>close</code> on it.</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>close</code></td>
<td>close the Message</td>
</tr>
</tbody>
</table>
`;
const frontmatter = { "title": "Message", "lang": "en-US" };
const relativePath = "src\\components\\Feedback\\Message\\message.story.md";
export {
  frontmatter,
  html,
  relativePath
};
