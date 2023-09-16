import{_ as r,C as e,o as c,c as d,H as t,w as y,k as s,a as o,Y as a}from"./chunks/framework.98e11516.js";const D=JSON.parse('{"title":"x gt repo hook","description":"x gt repo hook | x-cmd module | repo webhooks management","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gt repo hook | x-cmd"}],["meta",{"name":"og:description","content":"repo webhooks management"}],["meta",{"name":"description","content":"x gt repo hook | x-cmd module | repo webhooks management"}]]},"headers":[],"relativePath":"mod/gt/repo-hook.md","filePath":"mod/gt/repo-hook.md"}'),i={name:"mod/gt/repo-hook.md"},h=s("h1",{id:"x-gt-repo-hook",tabindex:"-1"},[o("x gt repo hook "),s("a",{class:"header-anchor",href:"#x-gt-repo-hook","aria-label":'Permalink to "x gt repo hook"'},"​")],-1),E=s("p",{class:"x-desc"},"repo webhooks management",-1),g=a('<h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>Setting default push webhooks for &lt;owner/repo&gt; repo</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--url</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ur</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--url</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ur</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Only Setting issue webhooks for &lt;owner/repo&gt; repo</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--url</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ur</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no_push_events</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--issues_events</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--url</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ur</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no_push_events</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--issues_events</span></span></code></pre></div><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-gt-repo-hook-ls">x gt repo hook ls</a></td><td>List repo webhook</td></tr><tr><td><a href="#x-gt-repo-hook-create">x gt repo hook create</a></td><td>Create repo webhook</td></tr><tr><td><a href="#x-gt-repo-hook-info">x gt repo hook info</a></td><td>Show repo webhook detailed information</td></tr><tr><td><a href="#x-gt-repo-hook-edit">x gt repo hook edit</a></td><td>Edit repo webhook configure</td></tr><tr><td><a href="#x-gt-repo-hook-rm">x gt repo hook rm</a></td><td>Remove repo webhook</td></tr><tr><td><a href="#x-gt-repo-hook-test">x gt repo hook test</a></td><td>Try repo webhook url test connect</td></tr></tbody></table></div><h3 id="x-gt-repo-hook-ls" tabindex="-1">x gt repo hook ls <a class="header-anchor" href="#x-gt-repo-hook-ls" aria-label="Permalink to &quot;x gt repo hook ls&quot;">​</a></h3><p>List repo webhook</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;owner_path&gt;/&lt;repo_path&gt;</td></tr><tr><td><code>--page</code> &lt;num&gt;</td><td></td><td>target page</td></tr><tr><td><code>--per_page</code> &lt;num&gt;</td><td></td><td>per_page data number</td></tr></tbody></table></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><h3 id="x-gt-repo-hook-create" tabindex="-1">x gt repo hook create <a class="header-anchor" href="#x-gt-repo-hook-create" aria-label="Permalink to &quot;x gt repo hook create&quot;">​</a></h3><p>Create repo webhook</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul>',20),F=a('<ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--no_push_events</code></td><td>Turn off push code event(default is push code event)</td></tr><tr><td><code>--tag_push_events</code></td><td>Turn on push tag event</td></tr><tr><td><code>--issues_events</code></td><td>Turn on create|close issue event</td></tr><tr><td><code>--note_events</code></td><td>Turn on comment code|issue note event</td></tr><tr><td><code>--merge_requests_events</code></td><td>Turn on merge request|merged event</td></tr><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><ul><li><strong>Examples</strong> :</li></ul><p>Setting default push webhooks for &lt;owner/repo&gt; repo</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--url</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ur</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--url</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ur</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Only Setting issue webhooks for &lt;owner/repo&gt; repo</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--url</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ur</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no_push_events</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--issues_events</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--url</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ur</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no_push_events</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--issues_events</span></span></code></pre></div><h3 id="x-gt-repo-hook-info" tabindex="-1">x gt repo hook info <a class="header-anchor" href="#x-gt-repo-hook-info" aria-label="Permalink to &quot;x gt repo hook info&quot;">​</a></h3><p>Show repo webhook detailed information</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>webhooks ID (obtain by <code>x gt repo hook ls</code>)</td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;owner_path&gt;/&lt;repo_path&gt;</td></tr></tbody></table></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><h3 id="x-gt-repo-hook-edit" tabindex="-1">x gt repo hook edit <a class="header-anchor" href="#x-gt-repo-hook-edit" aria-label="Permalink to &quot;x gt repo hook edit&quot;">​</a></h3><p>Edit repo webhook configure</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">edit</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">ed</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">edit</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ed</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>webhooks ID (obtain by <code>x gt repo release ls</code>)</td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul>',24),u=a('<ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--no_push_events</code></td><td>Turn off push code event(default is push code event)</td></tr><tr><td><code>--tag_push_events</code></td><td>Turn on push tag event</td></tr><tr><td><code>--issues_events</code></td><td>Turn on create|close issue event</td></tr><tr><td><code>--note_events</code></td><td>Turn on comment code|issue note event</td></tr><tr><td><code>--merge_requests_events</code></td><td>Turn on merge request|merged event</td></tr><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><h3 id="x-gt-repo-hook-rm" tabindex="-1">x gt repo hook rm <a class="header-anchor" href="#x-gt-repo-hook-rm" aria-label="Permalink to &quot;x gt repo hook rm&quot;">​</a></h3><p>Remove repo webhook</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>webhooks ID (obtain by <code>x gt repo release ls</code>)</td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;owner_path&gt;/&lt;repo_path&gt;</td></tr></tbody></table></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--yes</code>, <code>-y</code></td><td>Ignore remove prompt interception</td></tr></tbody></table></div><h3 id="x-gt-repo-hook-test" tabindex="-1">x gt repo hook test <a class="header-anchor" href="#x-gt-repo-hook-test" aria-label="Permalink to &quot;x gt repo hook test&quot;">​</a></h3><p>Try repo webhook url test connect</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#929292;"> [OPTIONS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#6C6C6C;"> [OPTIONS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>webhooks ID (obtain by <code>x gt repo release ls</code>)</td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;owner_path&gt;/&lt;repo_path&gt;</td></tr></tbody></table></div><br>',21),b=s("h2",{id:"related-link",tabindex:"-1"},[o("Related Link "),s("a",{class:"header-anchor",href:"#related-link","aria-label":'Permalink to "Related Link"'},"​")],-1),C=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[o("In interactive terminal ( zsh, bash ... ), Can use "),s("kbd",null,"Tab"),o(" to get completion information")]),s("p",null,[o("Run "),s("code",null,"CMD SUBCOMMAND --help"),o(" for more information on a command")])],-1);function k(m,v,_,x,B,w){const n=e("AdsContent"),l=e("DocsGroupTable"),p=e("DocsLinkCard");return c(),d("div",null,[h,E,t(n),g,t(l,{header:'["Name, Shorthand","Default","Description"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;owner_path^gt;/^lt;repo_path^gt;"},{"name":"<code>--url</code> ^lt;url^gt;","default":"","desc":"remote HTTP URL"}]},"Optional":{"active":true,"data":[{"name":"<code>--encryption_type</code> ^lt;password,signkey^gt;","default":"","desc":"encryption type"},{"name":"<code>--password</code> ^lt;password^gt;","default":"","desc":"Requesting a URL with password to prevent maliciously request"}]},"$NotGroup":{"active":true,"data":[]}}'}),F,t(l,{header:'["Name, Shorthand","Default","Description"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;owner_path^gt;/^lt;repo_path^gt;"},{"name":"<code>--url</code> ^lt;url^gt;","default":"","desc":"remote HTTP URL"}]},"Optional":{"active":true,"data":[{"name":"<code>--encryption_type</code> ^lt;password,signkey^gt;","default":"","desc":"encryption type"},{"name":"<code>--password</code> ^lt;password^gt;","default":"","desc":"Requesting a URL with password to prevent maliciously request"}]},"$NotGroup":{"active":true,"data":[]}}'}),u,t(p,null,{default:y(()=>[b]),_:1}),C])}const S=r(i,[["render",k]]);export{D as __pageData,S as default};
