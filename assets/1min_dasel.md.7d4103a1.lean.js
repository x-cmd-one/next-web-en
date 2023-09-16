import{_ as l,C as e,o as t,c as p,H as c,w as o,k as s,a}from"./chunks/framework.98e11516.js";const _=JSON.parse('{"title":"dasel","titleTemplate":"x-cmd 1 minute get started","description":"x-cmd 1 minute | dasel get started | JSON, YAML, TOML, XML, and CSV query and modification tool","frontmatter":{"name":"dasel","titleTemplate":"x-cmd 1 minute get started","head":[["meta",{"name":"og:title","content":"x-cmd 1 minute | dasel get started"}],["meta",{"name":"og:description","content":"JSON, YAML, TOML, XML, and CSV query and modification tool"}],["meta",{"name":"description","content":"x-cmd 1 minute | dasel get started | JSON, YAML, TOML, XML, and CSV query and modification tool"}]],"items":[{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">echo</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&#39;{ &quot;name&quot;:&quot;Bod&quot;, &quot;age&quot;:18 }&#39;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #F97583\\">|</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">dasel</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-r</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">json</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&#39;name&#39;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">echo</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&#39;{ &quot;name&quot;:&quot;Bod&quot;, &quot;age&quot;:18 }&#39;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #D73A49\\">|</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">dasel</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-r</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">json</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&#39;name&#39;</span></span></code></pre>\\n</div>","#desc":{"cn":"获取 json 数据中指定字段的值","en":"Obtain the value of the specified field in json data"},"desc":"Obtain the value of the specified field in json data"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">echo</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&#39;[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]&#39;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #F97583\\">|</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">dasel</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-r</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">json</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&#39;[1]&#39;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">echo</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&#39;[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]&#39;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #D73A49\\">|</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">dasel</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-r</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">json</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&#39;[1]&#39;</span></span></code></pre>\\n</div>","#desc":{"cn":"获取给定索引列表中的值","en":"Gets the values in the given index list"},"desc":"Gets the values in the given index list"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">echo</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&#39;{&quot;name&quot;:&quot;Bod&quot;,&quot;age&quot;:18}&#39;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #F97583\\">|</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">dasel</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-r</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">json</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&#39;all().key()&#39;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">echo</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&#39;{&quot;name&quot;:&quot;Bod&quot;,&quot;age&quot;:18}&#39;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #D73A49\\">|</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">dasel</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-r</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">json</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&#39;all().key()&#39;</span></span></code></pre>\\n</div>","#desc":{"cn":"返回当前值的 key","en":"returns the key of the current value"},"desc":"returns the key of the current value"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">echo</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&#39;{&quot;name&quot;:&quot;Bod&quot;,&quot;age&quot;:18}&#39;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #F97583\\">|</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">dasel</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">put</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-r</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">json</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-v</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">Frank</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&#39;name&#39;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">echo</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&#39;{&quot;name&quot;:&quot;Bod&quot;,&quot;age&quot;:18}&#39;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #D73A49\\">|</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">dasel</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">put</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-r</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">json</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-v</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">Frank</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&#39;name&#39;</span></span></code></pre>\\n</div>","#desc":{"cn":"修改 `name` 字段的值","en":"Modify the value of the `name` field"},"desc":"Modify the value of the <code>name</code> field"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">echo</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&#39;{&quot;name&quot;:{&quot;first&quot;:&quot;Tom&quot;,&quot;age&quot;:11 }}&#39;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #F97583\\">|</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">dasel</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-r</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">json</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-w</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">yaml</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">echo</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&#39;{&quot;name&quot;:{&quot;first&quot;:&quot;Tom&quot;,&quot;age&quot;:11 }}&#39;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #D73A49\\">|</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">dasel</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-r</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">json</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-w</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">yaml</span></span></code></pre>\\n</div>","#desc":{"cn":"将 json 格式数据转为 yaml 格式","en":"Convert json format data to yaml format"},"desc":"Convert json format data to yaml format"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">dasel</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-r</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">csv</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-w</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">json</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #F97583\\">&lt;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">data.csv</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">dasel</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-r</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">csv</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-w</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">json</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #D73A49\\">&lt;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">data.csv</span></span></code></pre>\\n</div>","#desc":{"cn":"将 csv 格式数据转为 json 格式","en":"Convert csv format data to json format"},"desc":"Convert csv format data to json format"}],"aside":false,"outline":false,"x-term-speg":"1min/dasel.en","x-term-name":"dasel","x-term-desc":"JSON^comma; YAML^comma; TOML^comma; XML^comma; and CSV query and modification tool","x-term-size":"large","links":[{"type":"pkg","text":"dasel","link":"/pkg/dasel"}]},"headers":[],"relativePath":"1min/dasel.md","filePath":"1min/dasel.md"}'),r={name:"1min/dasel.md"},d=s("h1",{id:"dasel",tabindex:"-1"},[a("dasel "),s("a",{class:"header-anchor",href:"#dasel","aria-label":'Permalink to "dasel"'},"​")],-1),y=s("p",{class:"visually-hidden"}," JSON, YAML, TOML, XML, and CSV query and modification tool ",-1),i=s("p",null,[a("Tutorial Aims: Teach you how to quickly get started with the "),s("code",null,"dasel"),a(" command within 1 minute. It is divided into the following 3 parts:")],-1),E=s("ol",null,[s("li",null,[a("Select is the default command of "),s("code",null,"dasel"),a(", which allows you to select data from any supported data structure. In this tutorial, we list two commonly used selectors:")])],-1),u=s("ul",null,[s("li",null,[s("code",null,"all()"),a(": Select all elements in an array or object.")]),s("li",null,[s("code",null,"index()"),a(": Return the value at the given index list.")])],-1),F=s("ol",{start:"2"},[s("li",null,[s("code",null,"dasel"),a(" provides the "),s("code",null,"put"),a(" and "),s("code",null,"delete"),a(" commands to make changes to any supported data structure.")]),s("li",null,[a("You can also use "),s("code",null,"dasel"),a(" to quickly and easily change the format of a file, for example, converting a "),s("code",null,"json"),a(" file to a "),s("code",null,"yaml"),a(" file.")])],-1),m=s("p",null,[s("strong",null,"Note⚠️"),a(": Before starting, readers need to prepare a json file or can read json data from standard input. We also provide some complex json files for testing purposes in our x-cmd.")],-1),h=s("p",null,"For more complex operations and usage, you can refer to:",-1),C=s("ul",null,[s("li",null,[s("a",{href:"/pkg/dasel"},"x-cmd pkg for dasel")])],-1);function v(g,q,f,B,k,x){const n=e("OneMinutePage");return t(),p("div",null,[c(n,null,{default:o(()=>[d,y]),abstract:o(()=>[i,E,u,F,m,h,C]),_:1})])}const j=l(r,[["render",v]]);export{_ as __pageData,j as default};
