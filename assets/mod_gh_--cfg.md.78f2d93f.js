import{_ as p,C as t,o as c,c as r,H as e,w as d,Y as o,k as s,a}from"./chunks/framework.98e11516.js";const v=JSON.parse('{"title":"x gh --cfg","description":"x gh --cfg | x-cmd module | manage configuration for gh","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gh --cfg | x-cmd"}],["meta",{"name":"og:description","content":"manage configuration for gh"}],["meta",{"name":"description","content":"x gh --cfg | x-cmd module | manage configuration for gh"}]]},"headers":[],"relativePath":"mod/gh/--cfg.md","filePath":"mod/gh/--cfg.md"}'),i={name:"mod/gh/--cfg.md"},h=o('<h1 id="x-gh-cfg" tabindex="-1">x gh --cfg <a class="header-anchor" href="#x-gh-cfg" aria-label="Permalink to &quot;x gh --cfg&quot;">​</a></h1><p class="x-desc">manage configuration for gh</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Get GitHub access token: <a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer">https://github.com/settings/tokens</a></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When you need to switch between the config and profile, Need to use current to switch</p><p><code>x gh --cur &lt;config|profile&gt;=&lt;switch_val&gt;</code></p></div>',4),g=o('<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cfg</span><span style="color:#929292;"> [SUB_COMMAND]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cfg</span><span style="color:#6C6C6C;"> [SUB_COMMAND]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#n</code></td><td><code>token=</code> | <code>owner=</code> | <code>endpoint=</code> | <code>web_endpoint=</code></td></tr></tbody></table></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>Setup GitHub access token for default initialization</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token=</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">toke</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token=</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">toke</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-gh-cfg-token">x gh --cfg token=</a></td><td>access token</td></tr><tr><td><a href="#x-gh-cfg-owner">x gh --cfg owner=</a></td><td>owner</td></tr><tr><td><a href="#x-gh-cfg-endpoint">x gh --cfg endpoint=</a></td><td>API endpoint. [default: <a href="https://api.github.com" target="_blank" rel="noreferrer">https://api.github.com</a>]</td></tr><tr><td><a href="#x-gh-cfg-web-endpoint">x gh --cfg web_endpoint=</a></td><td>website endpoint. [default: <a href="https://github.com" target="_blank" rel="noreferrer">https://github.com</a>]</td></tr><tr><td><a href="#x-gh-cfg-set">x gh --cfg set</a></td><td>Setting GitHub config</td></tr><tr><td><a href="#x-gh-cfg-get">x gh --cfg get</a></td><td>Output GitHub config</td></tr></tbody></table></div><h3 id="x-gh-cfg-token" tabindex="-1">x gh --cfg token= <a class="header-anchor" href="#x-gh-cfg-token" aria-label="Permalink to &quot;x gh --cfg token=&quot;">​</a></h3><p>access token</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token=</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token=</span></span></code></pre></div><h3 id="x-gh-cfg-owner" tabindex="-1">x gh --cfg owner= <a class="header-anchor" href="#x-gh-cfg-owner" aria-label="Permalink to &quot;x gh --cfg owner=&quot;">​</a></h3><p>owner</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">owner=</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">owner=</span></span></code></pre></div><h3 id="x-gh-cfg-endpoint" tabindex="-1">x gh --cfg endpoint= <a class="header-anchor" href="#x-gh-cfg-endpoint" aria-label="Permalink to &quot;x gh --cfg endpoint=&quot;">​</a></h3><p>API endpoint. [default: <a href="https://api.github.com" target="_blank" rel="noreferrer">https://api.github.com</a>]</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">endpoint=</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">endpoint=</span></span></code></pre></div><h3 id="x-gh-cfg-web-endpoint" tabindex="-1">x gh --cfg web_endpoint= <a class="header-anchor" href="#x-gh-cfg-web-endpoint" aria-label="Permalink to &quot;x gh --cfg web_endpoint=&quot;">​</a></h3><p>website endpoint. [default: <a href="https://github.com" target="_blank" rel="noreferrer">https://github.com</a>]</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">web_endpoint=</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">web_endpoint=</span></span></code></pre></div><h3 id="x-gh-cfg-set" tabindex="-1">x gh --cfg set <a class="header-anchor" href="#x-gh-cfg-set" aria-label="Permalink to &quot;x gh --cfg set&quot;">​</a></h3><p>Setting GitHub config</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#929292;"> [OPTIONS] [SUB_COMMAND]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#6C6C6C;"> [OPTIONS] [SUB_COMMAND]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#n</code></td><td><code>token=</code> | <code>owner=</code> | <code>endpoint=</code> | <code>web_endpoint=</code></td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--config</code> &lt;path&gt;</td><td></td><td>config file path. empty use default</td></tr><tr><td><code>--profile</code> &lt;name&gt;</td><td></td><td>config profile name. empty use default</td></tr></tbody></table></div><ul><li><strong>Sub Commands</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-gh-cfg-set-token">x gh --cfg set token=</a></td><td>access token</td></tr><tr><td><a href="#x-gh-cfg-set-owner">x gh --cfg set owner=</a></td><td>owner</td></tr><tr><td><a href="#x-gh-cfg-set-endpoint">x gh --cfg set endpoint=</a></td><td>API endpoint. [default: <a href="https://api.github.com" target="_blank" rel="noreferrer">https://api.github.com</a>]</td></tr><tr><td><a href="#x-gh-cfg-set-web-endpoint">x gh --cfg set web_endpoint=</a></td><td>website endpoint. [default: <a href="https://github.com" target="_blank" rel="noreferrer">https://github.com</a>]</td></tr></tbody></table></div><h3 id="x-gh-cfg-set-token" tabindex="-1">x gh --cfg set token= <a class="header-anchor" href="#x-gh-cfg-set-token" aria-label="Permalink to &quot;x gh --cfg set token=&quot;">​</a></h3><p>access token</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token=</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token=</span></span></code></pre></div><h3 id="x-gh-cfg-set-owner" tabindex="-1">x gh --cfg set owner= <a class="header-anchor" href="#x-gh-cfg-set-owner" aria-label="Permalink to &quot;x gh --cfg set owner=&quot;">​</a></h3><p>owner</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">owner=</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">owner=</span></span></code></pre></div><h3 id="x-gh-cfg-set-endpoint" tabindex="-1">x gh --cfg set endpoint= <a class="header-anchor" href="#x-gh-cfg-set-endpoint" aria-label="Permalink to &quot;x gh --cfg set endpoint=&quot;">​</a></h3><p>API endpoint. [default: <a href="https://api.github.com" target="_blank" rel="noreferrer">https://api.github.com</a>]</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">endpoint=</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">endpoint=</span></span></code></pre></div><h3 id="x-gh-cfg-set-web-endpoint" tabindex="-1">x gh --cfg set web_endpoint= <a class="header-anchor" href="#x-gh-cfg-set-web-endpoint" aria-label="Permalink to &quot;x gh --cfg set web_endpoint=&quot;">​</a></h3><p>website endpoint. [default: <a href="https://github.com" target="_blank" rel="noreferrer">https://github.com</a>]</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">web_endpoint=</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">web_endpoint=</span></span></code></pre></div><h3 id="x-gh-cfg-get" tabindex="-1">x gh --cfg get <a class="header-anchor" href="#x-gh-cfg-get" aria-label="Permalink to &quot;x gh --cfg get&quot;">​</a></h3><p>Output GitHub config</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#929292;"> [OPTIONS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#6C6C6C;"> [OPTIONS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>configure key. empty output all<br><code>token</code> | <code>owner</code> | <code>endpoint</code> | <code>web_endpoint</code></td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--config</code> &lt;path&gt;</td><td></td><td>config file path. empty use default</td></tr><tr><td><code>--profile</code> &lt;name&gt;</td><td></td><td>config profile name. empty use default</td></tr></tbody></table></div><br>',60),y=s("h2",{id:"related-link",tabindex:"-1"},[a("Related Link "),s("a",{class:"header-anchor",href:"#related-link","aria-label":'Permalink to "Related Link"'},"​")],-1),u=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[a("In interactive terminal ( zsh, bash ... ), Can use "),s("kbd",null,"Tab"),a(" to get completion information")]),s("p",null,[a("Run "),s("code",null,"CMD SUBCOMMAND --help"),a(" for more information on a command")])],-1);function E(f,b,F,C,m,x){const n=t("AdsContent"),l=t("DocsLinkCard");return c(),r("div",null,[h,e(n),g,e(l,null,{default:d(()=>[y]),_:1}),u])}const _=p(i,[["render",E]]);export{v as __pageData,_ as default};
