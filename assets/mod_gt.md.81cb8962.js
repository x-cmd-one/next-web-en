import{_ as c,C as t,o as p,c as d,H as s,w as i,k as e,a,Y as m}from"./chunks/framework.98e11516.js";const P=JSON.parse('{"title":"x gt","description":"x gt | x-cmd module | Manage Gitee work from the command line","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gt | x-cmd"}],["meta",{"name":"og:description","content":"Manage Gitee work from the command line"}],["meta",{"name":"description","content":"x gt | x-cmd module | Manage Gitee work from the command line"}]]},"headers":[],"relativePath":"mod/gt.md","filePath":"mod/gt.md"}'),h={name:"mod/gt.md"},g=e("h1",{id:"x-gt",tabindex:"-1"},[a("x gt "),e("a",{class:"header-anchor",href:"#x-gt","aria-label":'Permalink to "x gt"'},"​")],-1),u=e("p",{class:"x-desc"},"Manage Gitee work from the command line",-1),f=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[a("Run command "),e("code",null,"x gt --cfg token=<token>"),a(" add access token. The token will be save local.")]),e("p",null,[a("Get Gitee access token: "),e("a",{href:"https://gitee.com/profile/personal_access_tokens",target:"_blank",rel:"noreferrer"},"https://gitee.com/profile/personal_access_tokens")])],-1),_=m('<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#929292;"> [OPTIONS] [SUB_COMMAND]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#6C6C6C;"> [OPTIONS] [SUB_COMMAND]</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--config</code> &lt;path&gt;</td><td></td><td>The path of the configure file used by the current command</td></tr><tr><td><code>--profile</code> &lt;name&gt;</td><td></td><td>The name of the configure profile used by the current command</td></tr></tbody></table></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>Get current user information</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span></span></code></pre></div><p>Interactive UI show current user repositories</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--app</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--app</span></span></code></pre></div><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2>',10),b=e("br",null,null,-1),y=e("h2",{id:"related-link",tabindex:"-1"},[a("Related Link "),e("a",{class:"header-anchor",href:"#related-link","aria-label":'Permalink to "Related Link"'},"​")],-1),k=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[a("In interactive terminal ( zsh, bash ... ), Can use "),e("kbd",null,"Tab"),a(" to get completion information")]),e("p",null,[a("Run "),e("code",null,"CMD SUBCOMMAND --help"),a(" for more information on a command")])],-1);function x(C,E,v,F,T,B){const o=t("Terminal"),n=t("AdsContent"),l=t("DocsGroupTable"),r=t("DocsLinkCard");return p(),d("div",null,[g,u,s(o,{speg:"mod/gt",name:"x gt",desc:"Work seamlessly with Gitee from the command line",size:"large"}),f,s(n),_,s(l,{header:'["Name","Description"]',group:'{"main":{"active":true,"data":[{"name":"<a href=\\"/mod/gt/repo.html\\">x gt repo</a>","desc":"repository management"},{"name":"<a href=\\"/mod/gt/user.html\\">x gt user</a>","desc":"user management"},{"name":"<a href=\\"/mod/gt/org.html\\">x gt org</a>","desc":"organization management"},{"name":"<a href=\\"/mod/gt/enterprise.html\\">x gt enterprise</a>","desc":"enterprise management"},{"name":"<a href=\\"/mod/gt/issue.html\\">x gt issue</a>","desc":"issue management"},{"name":"<a href=\\"/mod/gt/pr.html\\">x gt pr</a>","desc":"pull request management"}]},"shortcut":{"active":true,"data":[{"name":"<a href=\\"/mod/gt/cl.html\\">x gt cl</a>","desc":"shortcut for <code>x gt repo clone</code>"}]},"minor":{"active":true,"data":[{"name":"<a href=\\"/mod/gt/avatar.html\\">x gt avatar</a>","desc":"user addressbook management"},{"name":"<a href=\\"/mod/gt/--cur.html\\">x gt --cur</a>","desc":"current session default value management"},{"name":"<a href=\\"/mod/gt/--cfg.html\\">x gt --cfg</a>","desc":"manage configuration for gt"}]},"$NotGroup":{"active":true,"data":[]}}'}),b,s(r,null,{default:i(()=>[y]),_:1}),k])}const D=c(h,[["render",x]]);export{P as __pageData,D as default};
