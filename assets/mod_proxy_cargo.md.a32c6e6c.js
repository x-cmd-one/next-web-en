import{_ as e,C as o,o as n,c as p,H as t,w as c,k as s,a,Y as d}from"./chunks/framework.98e11516.js";const _=JSON.parse('{"title":"x proxy cargo","description":"x proxy cargo | x-cmd module | Setting the the cargo mirror for Rust development","frontmatter":{"head":[["meta",{"name":"og:title","content":"x proxy cargo | x-cmd"}],["meta",{"name":"og:description","content":"Setting the the cargo mirror for Rust development"}],["meta",{"name":"description","content":"x proxy cargo | x-cmd module | Setting the the cargo mirror for Rust development"}]]},"headers":[],"relativePath":"mod/proxy/cargo.md","filePath":"mod/proxy/cargo.md"}'),i={name:"mod/proxy/cargo.md"},y=s("h1",{id:"x-proxy-cargo",tabindex:"-1"},[a("x proxy cargo "),s("a",{class:"header-anchor",href:"#x-proxy-cargo","aria-label":'Permalink to "x proxy cargo"'},"​")],-1),h=s("p",{class:"x-desc"},"Setting the the cargo mirror for Rust development",-1),g=d('<h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-proxy-cargo-url">x proxy cargo url</a></td><td>Provide url of mirror candidates</td></tr><tr><td><a href="#x-proxy-cargo-get">x proxy cargo get</a></td><td>Get the current mirror source url</td></tr><tr><td><a href="#x-proxy-cargo-replace">x proxy cargo replace</a></td><td>Set the download mirror</td></tr><tr><td><a href="#x-proxy-cargo-rollback">x proxy cargo rollback</a></td><td>Rollback the download mirror</td></tr><tr><td><a href="#x-proxy-cargo-set">x proxy cargo set</a></td><td>Set the mirror source, select one from the current mirror source and then set it (TODO: support custom mirror source)</td></tr><tr><td><a href="#x-proxy-cargo-unset">x proxy cargo unset</a></td><td>Reset the source to the original official</td></tr></tbody></table></div><h3 id="x-proxy-cargo-url" tabindex="-1">x proxy cargo url <a class="header-anchor" href="#x-proxy-cargo-url" aria-label="Permalink to &quot;x proxy cargo url&quot;">​</a></h3><p>Provide url of mirror candidates</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cargo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cargo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>Mirror name<br><code>tuna</code> | <code>sjtu</code></td></tr></tbody></table></div><h3 id="x-proxy-cargo-get" tabindex="-1">x proxy cargo get <a class="header-anchor" href="#x-proxy-cargo-get" aria-label="Permalink to &quot;x proxy cargo get&quot;">​</a></h3><p>Get the current mirror source url</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cargo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cargo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span></span></code></pre></div><h3 id="x-proxy-cargo-replace" tabindex="-1">x proxy cargo replace <a class="header-anchor" href="#x-proxy-cargo-replace" aria-label="Permalink to &quot;x proxy cargo replace&quot;">​</a></h3><p>Set the download mirror</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cargo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">replace</span><span style="color:#F97583;">|</span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cargo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">replace</span><span style="color:#D73A49;">|</span><span style="color:#005CC5;">set</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>Mirror name<br><code>tuna</code> | <code>sjtu</code></td></tr></tbody></table></div><h3 id="x-proxy-cargo-rollback" tabindex="-1">x proxy cargo rollback <a class="header-anchor" href="#x-proxy-cargo-rollback" aria-label="Permalink to &quot;x proxy cargo rollback&quot;">​</a></h3><p>Rollback the download mirror</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cargo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rollback</span><span style="color:#929292;"> [SUB_COMMAND]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cargo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rollback</span><span style="color:#6C6C6C;"> [SUB_COMMAND]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>use the selected file to rollback</td></tr></tbody></table></div><ul><li><strong>Sub Commands</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-proxy-cargo-rollback-ls">x proxy cargo rollback ls</a></td><td>list all file you can rollback</td></tr></tbody></table></div><h3 id="x-proxy-cargo-rollback-ls" tabindex="-1">x proxy cargo rollback ls <a class="header-anchor" href="#x-proxy-cargo-rollback-ls" aria-label="Permalink to &quot;x proxy cargo rollback ls&quot;">​</a></h3><p>list all file you can rollback</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cargo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rollback</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cargo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rollback</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span></code></pre></div><h3 id="x-proxy-cargo-set" tabindex="-1">x proxy cargo set <a class="header-anchor" href="#x-proxy-cargo-set" aria-label="Permalink to &quot;x proxy cargo set&quot;">​</a></h3><p>Set the mirror source, select one from the current mirror source and then set it (TODO: support custom mirror source)</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cargo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cargo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span></span></code></pre></div><h3 id="x-proxy-cargo-unset" tabindex="-1">x proxy cargo unset <a class="header-anchor" href="#x-proxy-cargo-unset" aria-label="Permalink to &quot;x proxy cargo unset&quot;">​</a></h3><p>Reset the source to the original official</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cargo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unset</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cargo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unset</span></span></code></pre></div><br>',39),u=s("h2",{id:"related-link",tabindex:"-1"},[a("Related Link "),s("a",{class:"header-anchor",href:"#related-link","aria-label":'Permalink to "Related Link"'},"​")],-1),x=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[a("In interactive terminal ( zsh, bash ... ), Can use "),s("kbd",null,"Tab"),a(" to get completion information")]),s("p",null,[a("Run "),s("code",null,"CMD SUBCOMMAND --help"),a(" for more information on a command")])],-1);function E(b,m,F,C,k,v){const l=o("AdsContent"),r=o("DocsLinkCard");return n(),p("div",null,[y,h,t(l),g,t(r,null,{default:c(()=>[u]),_:1}),x])}const B=e(i,[["render",E]]);export{_ as __pageData,B as default};
