import{_ as d,C as o,o as p,c,H as s,w as h,k as t,a as e,Y as a}from"./chunks/framework.98e11516.js";const S=JSON.parse('{"title":"x gh repo hook","description":"x gh repo hook | x-cmd module | repo webhooks management","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gh repo hook | x-cmd"}],["meta",{"name":"og:description","content":"repo webhooks management"}],["meta",{"name":"description","content":"x gh repo hook | x-cmd module | repo webhooks management"}]]},"headers":[],"relativePath":"mod/gh/repo-hook.md","filePath":"mod/gh/repo-hook.md"}'),i={name:"mod/gh/repo-hook.md"},g=t("h1",{id:"x-gh-repo-hook",tabindex:"-1"},[e("x gh repo hook "),t("a",{class:"header-anchor",href:"#x-gh-repo-hook","aria-label":'Permalink to "x gh repo hook"'},"​")],-1),y=t("p",{class:"x-desc"},"repo webhooks management",-1),b=a('<h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-gh-repo-hook-ls">x gh repo hook ls</a></td><td>List repo webhook</td></tr><tr><td><a href="#x-gh-repo-hook-info">x gh repo hook info</a></td><td>Show repo webhook detailed information</td></tr><tr><td><a href="#x-gh-repo-hook-create">x gh repo hook create</a></td><td>Create repo webhook</td></tr><tr><td><a href="#x-gh-repo-hook-edit">x gh repo hook edit</a></td><td>Edit repo webhook configure</td></tr><tr><td><a href="#x-gh-repo-hook-rm">x gh repo hook rm</a></td><td>Remove repo webhook</td></tr></tbody></table></div><h3 id="x-gh-repo-hook-ls" tabindex="-1">x gh repo hook ls <a class="header-anchor" href="#x-gh-repo-hook-ls" aria-label="Permalink to &quot;x gh repo hook ls&quot;">​</a></h3><p>List repo webhook</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;owner_path&gt;/&lt;repo_path&gt;</td></tr><tr><td><code>--per_page</code> &lt;num&gt;</td><td><code>&quot;30&quot;</code></td><td>per_page data number</td></tr><tr><td><code>--page</code> &lt;num&gt;</td><td><code>&quot;1&quot;</code></td><td>target page</td></tr></tbody></table></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><h3 id="x-gh-repo-hook-info" tabindex="-1">x gh repo hook info <a class="header-anchor" href="#x-gh-repo-hook-info" aria-label="Permalink to &quot;x gh repo hook info&quot;">​</a></h3><p>Show repo webhook detailed information</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>webhooks ID (obtain by <code>x gh repo hook ls</code>)</td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;owner_path&gt;/&lt;repo_path&gt;</td></tr></tbody></table></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><h3 id="x-gh-repo-hook-create" tabindex="-1">x gh repo hook create <a class="header-anchor" href="#x-gh-repo-hook-create" aria-label="Permalink to &quot;x gh repo hook create&quot;">​</a></h3><p>Create repo webhook</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>events: <a href="https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads" target="_blank" rel="noreferrer">https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads</a></p></div><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul>',26),u=a('<ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--active</code></td><td>Determines if notifications are sent when the webhook is triggered</td></tr><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><h3 id="x-gh-repo-hook-edit" tabindex="-1">x gh repo hook edit <a class="header-anchor" href="#x-gh-repo-hook-edit" aria-label="Permalink to &quot;x gh repo hook edit&quot;">​</a></h3><p>Edit repo webhook configure</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>events: <a href="https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads" target="_blank" rel="noreferrer">https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads</a></p></div><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">edit</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">ed</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">edit</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ed</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>webhooks ID (obtain by <code>x gh repo hook ls</code>)</td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;owner_path&gt;/&lt;repo_path&gt;</td></tr><tr><td><code>--url</code></td><td></td><td>The URL to which the payloads will be delivered.</td></tr><tr><td><code>--events</code> &lt;events(separator ,)&gt;</td><td><code>&quot;push&quot;</code></td><td>events the hook is triggered for</td></tr><tr><td><code>--name</code> &lt;webhook_name&gt;</td><td></td><td>webhook name</td></tr><tr><td><code>--content_type</code></td><td></td><td>The media type used to serialize the payloads.</td></tr><tr><td><code>--secret</code> &lt;secret&gt;</td><td></td><td>the secret will be used as the key to generate the HMAC hex digest</td></tr><tr><td><code>--token</code> &lt;token&gt;</td><td></td><td>set token</td></tr><tr><td><code>--digest</code></td><td></td><td>digest</td></tr><tr><td><code>--insecure_ssl</code> &lt;insecure_ssl&gt;</td><td></td><td>Determines whether the SSL certificate of the host for url will be verified when delivering payloads</td></tr></tbody></table></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--active</code></td><td>Determines if notifications are sent when the webhook is triggered</td></tr><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><h3 id="x-gh-repo-hook-rm" tabindex="-1">x gh repo hook rm <a class="header-anchor" href="#x-gh-repo-hook-rm" aria-label="Permalink to &quot;x gh repo hook rm&quot;">​</a></h3><p>Remove repo webhook</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>webhooks ID (obtain by <code>x gh repo hook ls</code>)</td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;owner_path&gt;/&lt;repo_path&gt;</td></tr></tbody></table></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--yes</code>, <code>-y</code></td><td>Ignore remove prompt interception</td></tr></tbody></table></div><br>',24),k=t("h2",{id:"related-link",tabindex:"-1"},[e("Related Link "),t("a",{class:"header-anchor",href:"#related-link","aria-label":'Permalink to "Related Link"'},"​")],-1),m=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("p",null,[e("In interactive terminal ( zsh, bash ... ), Can use "),t("kbd",null,"Tab"),e(" to get completion information")]),t("p",null,[e("Run "),t("code",null,"CMD SUBCOMMAND --help"),e(" for more information on a command")])],-1);function E(F,v,w,C,_,f){const l=o("AdsContent"),n=o("DocsGroupTable"),r=o("DocsLinkCard");return p(),c("div",null,[g,y,s(l),b,s(n,{header:'["Name, Shorthand","Default","Description"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;owner_path^gt;/^lt;repo_path^gt;"},{"name":"<code>--url</code> ^lt;url^gt;","default":"","desc":"The URL to which the payloads will be delivered"}]},"Optional":{"active":true,"data":[{"name":"<code>--events</code> ^lt;events(separator ,)^gt;","default":"<code>\\"push\\"</code> ","desc":"events the hook is triggered for"},{"name":"<code>--name</code> ^lt;webhook_name^gt;","default":"","desc":"webhook name"},{"name":"<code>--content_type</code> ^lt;content_type^gt;","default":"","desc":""},{"name":"<code>--secret</code> ^lt;secret^gt;","default":"","desc":"the secret will be used as the key to generate the HMAC hex digest"},{"name":"<code>--token</code> ^lt;token^gt;","default":"","desc":"set token"},{"name":"<code>--digest</code> ^lt;digest^gt;","default":"","desc":"digest information"},{"name":"<code>--insecure_ssl</code> ^lt;insecure_ssl^gt;","default":"","desc":"Determines whether the SSL certificate of the host for url will be verified when delivering payloads"}]},"$NotGroup":{"active":true,"data":[]}}'}),u,s(r,null,{default:h(()=>[k]),_:1}),m])}const D=d(i,[["render",E]]);export{S as __pageData,D as default};
