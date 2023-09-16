import{_ as a,C as e,o,c as l,H as t,w as p,k as s,a as c}from"./chunks/framework.98e11516.js";const f=JSON.parse('{"title":"gum","titleTemplate":"x-cmd 1 minute get started","description":"x-cmd 1 minute | gum get started | Gum is an integrated Terminal UI command line tool that helps users write scripts with a user-friendly Command-line interface","frontmatter":{"name":"gum","titleTemplate":"x-cmd 1 minute get started","head":[["meta",{"name":"og:title","content":"x-cmd 1 minute | gum get started"}],["meta",{"name":"og:description","content":"Gum is an integrated Terminal UI command line tool that helps users write scripts with a user-friendly Command-line interface"}],["meta",{"name":"description","content":"x-cmd 1 minute | gum get started | Gum is an integrated Terminal UI command line tool that helps users write scripts with a user-friendly Command-line interface"}]],"items":[{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gum</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">choose</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;1&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;2&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;3&quot;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gum</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">choose</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;1&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;2&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;3&quot;</span></span></code></pre>\\n</div>","#desc":{"cn":"在命令行中构建选项列表界面","en":"Building an option list interface on the command line"},"desc":"Building an option list interface on the command line"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gum</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">confirm</span><span style=\\"color: #E1E4E8\\"> &amp;&amp; </span><span style=\\"color: #79B8FF\\">echo</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;Confirm&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #F97583\\">||</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">echo</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;Cancel&quot;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gum</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">confirm</span><span style=\\"color: #24292E\\"> &amp;&amp; </span><span style=\\"color: #005CC5\\">echo</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;Confirm&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #D73A49\\">||</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">echo</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;Cancel&quot;</span></span></code></pre>\\n</div>","#desc":{"cn":"在命令行中构建确认界面","en":"Building a confirmation interface on the command line"},"desc":"Building a confirmation interface on the command line"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">touch</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">./file</span></span>\\n<span class=\\"line\\"><span style=\\"color: #9ECBFF\\">mkdir</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">./test</span></span>\\n<span class=\\"line\\"><span style=\\"color: #9ECBFF\\">touch</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">./test/file1</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">./test/file2</span></span>\\n<span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gum</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">file</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">./</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">touch</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">./file</span></span>\\n<span class=\\"line\\"><span style=\\"color: #032F62\\">mkdir</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">./test</span></span>\\n<span class=\\"line\\"><span style=\\"color: #032F62\\">touch</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">./test/file1</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">./test/file2</span></span>\\n<span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gum</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">file</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">./</span></span></code></pre>\\n</div>","#desc":{"cn":"在命令行中构建文件选择界面","en":"Building a file selection interface on the command line"},"desc":"Building a file selection interface on the command line"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">printf</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;%s\\\\n&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;file&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;choose&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;format&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #F97583\\">|</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gum</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">filter</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">printf</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;%s\\\\n&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;file&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;choose&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;format&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #D73A49\\">|</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gum</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">filter</span></span></code></pre>\\n</div>","#desc":{"cn":"在命令行中构建筛选值列表","en":"Building a list of filtered values on the command line"},"desc":"Building a list of filtered values on the command line"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gum</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">filter</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">--height</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">5</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gum</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">filter</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">--height</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">5</span></span></code></pre>\\n</div>","#desc":{"cn":"构建一个 shell 历史命令选取界面","en":"Build a shell history command selection interface"},"desc":"Build a shell history command selection interface"}],"aside":false,"outline":false,"x-term-speg":"1min/gum.en","x-term-name":"gum","x-term-desc":"Gum is an integrated Terminal UI command line tool that helps users write scripts with a user-friendly Command-line interface","x-term-size":"large","links":[{"type":"pkg","text":"gum","link":"/pkg/gum"}]},"headers":[],"relativePath":"1min/gum.md","filePath":"1min/gum.md"}'),r={name:"1min/gum.md"},i=s("h1",{id:"gum",tabindex:"-1"},[c("gum "),s("a",{class:"header-anchor",href:"#gum","aria-label":'Permalink to "gum"'},"​")],-1),y=s("p",{class:"visually-hidden"}," Gum is an integrated Terminal UI command line tool that helps users write scripts with a user-friendly Command-line interface ",-1);function d(E,m,u,F,h,g){const n=e("OneMinutePage");return o(),l("div",null,[t(n,null,{default:p(()=>[i,y]),_:1})])}const B=a(r,[["render",d]]);export{f as __pageData,B as default};
