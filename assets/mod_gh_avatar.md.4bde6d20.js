import{_ as n,C as t,o as p,c as r,H as o,w as c,k as a,a as s,Y as d}from"./chunks/framework.98e11516.js";const B=JSON.parse('{"title":"x gh avatar","description":"x gh avatar | x-cmd module | user addressbook management","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gh avatar | x-cmd"}],["meta",{"name":"og:description","content":"user addressbook management"}],["meta",{"name":"description","content":"x gh avatar | x-cmd module | user addressbook management"}]]},"headers":[],"relativePath":"mod/gh/avatar.md","filePath":"mod/gh/avatar.md"}'),y={name:"mod/gh/avatar.md"},h=a("h1",{id:"x-gh-avatar",tabindex:"-1"},[s("x gh avatar "),a("a",{class:"header-anchor",href:"#x-gh-avatar","aria-label":'Permalink to "x gh avatar"'},"​")],-1),i=a("p",{class:"x-desc"},"user addressbook management",-1),E=d(`<h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>Add the user &lt;user_path&gt; to the addressbook of the current session Using &lt;key&gt; recorded in the address book &lt;user_path&gt; to add the user as a repository collaborator</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">avatar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">ke</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">user_pat</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">collaborator</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner_rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">ke</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">avatar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">ke</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">user_pat</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">collaborator</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner_rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">ke</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-gh-avatar-ls">x gh avatar ls</a></td><td>List all address books for the current session record</td></tr><tr><td><a href="#x-gh-avatar-add">x gh avatar add</a></td><td>Add or Edit the key and value in the address book</td></tr><tr><td><a href="#x-gh-avatar-get">x gh avatar get</a></td><td>Get the value of the address book record by key</td></tr></tbody></table></div><h3 id="x-gh-avatar-ls" tabindex="-1">x gh avatar ls <a class="header-anchor" href="#x-gh-avatar-ls" aria-label="Permalink to &quot;x gh avatar ls&quot;">​</a></h3><p>List all address books for the current session record</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">avatar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#929292;"> [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">avatar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#6C6C6C;"> [FLAGS]</span></span></code></pre></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--raw</code></td><td>output format as key=value</td></tr></tbody></table></div><h3 id="x-gh-avatar-add" tabindex="-1">x gh avatar add <a class="header-anchor" href="#x-gh-avatar-add" aria-label="Permalink to &quot;x gh avatar add&quot;">​</a></h3><p>Add or Edit the key and value in the address book</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">avatar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">put</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">2&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">avatar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">put</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">2&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>address book key</td></tr><tr><td><code>#2</code></td><td>address book value</td></tr></tbody></table></div><h3 id="x-gh-avatar-get" tabindex="-1">x gh avatar get <a class="header-anchor" href="#x-gh-avatar-get" aria-label="Permalink to &quot;x gh avatar get&quot;">​</a></h3><p>Get the value of the address book record by key</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">avatar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">avatar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>address book key</td></tr></tbody></table></div><br>`,24),g=a("h2",{id:"related-link",tabindex:"-1"},[s("Related Link "),a("a",{class:"header-anchor",href:"#related-link","aria-label":'Permalink to "Related Link"'},"​")],-1),F=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,[s("In interactive terminal ( zsh, bash ... ), Can use "),a("kbd",null,"Tab"),s(" to get completion information")]),a("p",null,[s("Run "),a("code",null,"CMD SUBCOMMAND --help"),s(" for more information on a command")])],-1);function u(v,b,m,k,C,x){const l=t("AdsContent"),e=t("DocsLinkCard");return p(),r("div",null,[h,i,o(l),E,o(e,null,{default:c(()=>[g]),_:1}),F])}const A=n(y,[["render",u]]);export{B as __pageData,A as default};
