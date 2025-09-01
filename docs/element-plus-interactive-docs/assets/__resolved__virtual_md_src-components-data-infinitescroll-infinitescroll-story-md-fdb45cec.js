const html = '<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>\n<p>Add <code>v-infinite-scroll</code> to the list to automatically execute loading method when scrolling to the bottom.</p>\n<h2 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-hidden="true">#</a></h2>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n<th>Accepted values</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-infinite-scroll</td>\n<td>Load more data while reach bottom of the page</td>\n<td>function</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>infinite-scroll-disabled</td>\n<td>is disabled</td>\n<td>boolean</td>\n<td>-</td>\n<td>false</td>\n</tr>\n<tr>\n<td>infinite-scroll-delay</td>\n<td>throttle delay (ms)</td>\n<td>number</td>\n<td>-</td>\n<td>200</td>\n</tr>\n<tr>\n<td>infinite-scroll-distance</td>\n<td>trigger distance (px)</td>\n<td>number</td>\n<td>-</td>\n<td>0</td>\n</tr>\n<tr>\n<td>infinite-scroll-immediate</td>\n<td>Whether to execute the loading method immediately, in case the content cannot be filled up in the initial state.</td>\n<td>boolean</td>\n<td>-</td>\n<td>true</td>\n</tr>\n</tbody>\n</table>\n';
const frontmatter = {};
const relativePath = "src\\components\\Data\\InfiniteScroll\\infiniteScroll.story.md";
export {
  frontmatter,
  html,
  relativePath
};
