import{_ as p,C as o,o as r,c as i,H as n,w as u,k as a,a as s,Y as l}from"./chunks/framework.98e11516.js";const w=JSON.parse('{"title":"x hub account","description":"x hub account | x-cmd module | Account management, view account information, bind accounts","frontmatter":{"head":[["meta",{"name":"og:title","content":"x hub account | x-cmd"}],["meta",{"name":"og:description","content":"Account management, view account information, bind accounts"}],["meta",{"name":"description","content":"x hub account | x-cmd module | Account management, view account information, bind accounts"}]]},"headers":[],"relativePath":"mod/hub/account.md","filePath":"mod/hub/account.md"}'),h={name:"mod/hub/account.md"},d=a("h1",{id:"x-hub-account",tabindex:"-1"},[s("x hub account "),a("a",{class:"header-anchor",href:"#x-hub-account","aria-label":'Permalink to "x hub account"'},"​")],-1),y=a("p",{class:"x-desc"},"Account management, view account information, bind accounts",-1),E=l('<h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>View the account information of the current user, including username, email</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span></span></code></pre></div><p>Rename the account name of the current user</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rename</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">new_nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rename</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">new_nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2>',6),g=l('<h3 id="x-hub-account-login" tabindex="-1">x hub account login <a class="header-anchor" href="#x-hub-account-login" aria-label="Permalink to &quot;x hub account login&quot;">​</a></h3><p>Login/register account, if the account does not exist, it will be registered automatically</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">login</span><span style="color:#929292;"> [FLAGS] [SUB_COMMAND]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account</span><span style="color:#24292E;"> </span><span style="color:#032F62;">login</span><span style="color:#6C6C6C;"> [FLAGS] [SUB_COMMAND]</span></span></code></pre></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--expire</code></td><td>Login expiration time, default 30 days (mode like &quot;n[smhdw]&quot;)</td></tr><tr><td><code>--region</code></td><td>Login region, if it is the first login, this parameter determines the region of the account. The current region is used by default</td></tr></tbody></table></div><ul><li><strong>Sub Commands</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-hub-account-login-wxqr">x hub account login wxqr</a></td><td>WeChat login, login via WeChat scan code</td></tr><tr><td><a href="#x-hub-account-login-wechat">x hub account login wechat</a></td><td>WeChat login via web page</td></tr><tr><td><a href="#x-hub-account-login-github">x hub account login github</a></td><td>GitHub login via web page</td></tr><tr><td><a href="#x-hub-account-login-email">x hub account login email</a></td><td>Email login (user needs to bind email in advance)</td></tr></tbody></table></div><ul><li><strong>Examples</strong> :</li></ul><p>Login with email</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">login</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo@x-cmd.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account</span><span style="color:#24292E;"> </span><span style="color:#032F62;">login</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo@x-cmd.com</span></span></code></pre></div><p>Login with WeChat, and set expire time to 1 day</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">login</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--expire</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">1d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wechat</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account</span><span style="color:#24292E;"> </span><span style="color:#032F62;">login</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--expire</span><span style="color:#24292E;"> </span><span style="color:#032F62;">1d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wechat</span></span></code></pre></div><h3 id="x-hub-account-login-wxqr" tabindex="-1">x hub account login wxqr <a class="header-anchor" href="#x-hub-account-login-wxqr" aria-label="Permalink to &quot;x hub account login wxqr&quot;">​</a></h3><p>WeChat login, login via WeChat scan code</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">login</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wxqr</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account</span><span style="color:#24292E;"> </span><span style="color:#032F62;">login</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wxqr</span></span></code></pre></div><h3 id="x-hub-account-login-wechat" tabindex="-1">x hub account login wechat <a class="header-anchor" href="#x-hub-account-login-wechat" aria-label="Permalink to &quot;x hub account login wechat&quot;">​</a></h3><p>WeChat login via web page</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">login</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wechat</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account</span><span style="color:#24292E;"> </span><span style="color:#032F62;">login</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wechat</span></span></code></pre></div><h3 id="x-hub-account-login-github" tabindex="-1">x hub account login github <a class="header-anchor" href="#x-hub-account-login-github" aria-label="Permalink to &quot;x hub account login github&quot;">​</a></h3><p>GitHub login via web page</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">login</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">github</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account</span><span style="color:#24292E;"> </span><span style="color:#032F62;">login</span><span style="color:#24292E;"> </span><span style="color:#032F62;">github</span></span></code></pre></div><h3 id="x-hub-account-login-email" tabindex="-1">x hub account login email <a class="header-anchor" href="#x-hub-account-login-email" aria-label="Permalink to &quot;x hub account login email&quot;">​</a></h3><p>Email login (user needs to bind email in advance)</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">login</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">email</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account</span><span style="color:#24292E;"> </span><span style="color:#032F62;">login</span><span style="color:#24292E;"> </span><span style="color:#032F62;">email</span></span></code></pre></div><h3 id="x-hub-account-logout" tabindex="-1">x hub account logout <a class="header-anchor" href="#x-hub-account-logout" aria-label="Permalink to &quot;x hub account logout&quot;">​</a></h3><p>Logout account, clear local token and local stored key</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">logout</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account</span><span style="color:#24292E;"> </span><span style="color:#032F62;">logout</span></span></code></pre></div><h3 id="x-hub-account-info" tabindex="-1">x hub account info <a class="header-anchor" href="#x-hub-account-info" aria-label="Permalink to &quot;x hub account info&quot;">​</a></h3><p>View account information, and display the cloud space usage of the current user</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span></span></code></pre></div><h3 id="x-hub-account-rename" tabindex="-1">x hub account rename <a class="header-anchor" href="#x-hub-account-rename" aria-label="Permalink to &quot;x hub account rename&quot;">​</a></h3><p>Rename account</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rename</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rename</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>New account name [regex: ^[a-zA-Z0-9_]{6,16}$]</td></tr></tbody></table></div><br>',44),b=a("h2",{id:"related-link",tabindex:"-1"},[s("Related Link "),a("a",{class:"header-anchor",href:"#related-link","aria-label":'Permalink to "Related Link"'},"​")],-1),F=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,[s("In interactive terminal ( zsh, bash ... ), Can use "),a("kbd",null,"Tab"),s(" to get completion information")]),a("p",null,[s("Run "),a("code",null,"CMD SUBCOMMAND --help"),s(" for more information on a command")])],-1);function m(x,C,v,k,B,f){const e=o("AdsContent"),t=o("DocsGroupTable"),c=o("DocsLinkCard");return r(),i("div",null,[d,y,n(e),E,n(t,{header:'["Name","Description"]',group:'{"$NotGroup":{"active":true,"data":[{"name":"<a href=\\"#x-hub-account-login\\">x hub account login</a>","desc":"Login/register account, if the account does not exist, it will be registered automatically"},{"name":"<a href=\\"#x-hub-account-logout\\">x hub account logout</a>","desc":"Logout account, clear local token and local stored key"},{"name":"<a href=\\"#x-hub-account-info\\">x hub account info</a>","desc":"View account information, and display the cloud space usage of the current user"},{"name":"<a href=\\"#x-hub-account-rename\\">x hub account rename</a>","desc":"Rename account"}]}}'}),g,n(c,null,{default:u(()=>[b]),_:1}),F])}const q=p(h,[["render",m]]);export{w as __pageData,q as default};
