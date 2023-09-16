import{_ as o,C as l,o as i,c as n,H as r,w as t,k as e,a}from"./chunks/framework.98e11516.js";const P=JSON.parse('{"title":"dasel","titleTemplate":"x-cmd package | JSON, YAML, TOML, XML, and CSV query and modification tool","description":"x-cmd package dasel | JSON, YAML, TOML, XML, and CSV query and modification tool","frontmatter":{"name":"dasel","titleTemplate":"x-cmd package | JSON, YAML, TOML, XML, and CSV query and modification tool","head":[["meta",{"name":"og:title","content":"dasel | x-cmd package"}],["meta",{"name":"og:description","content":"JSON, YAML, TOML, XML, and CSV query and modification tool"}],["meta",{"name":"description","content":"x-cmd package dasel | JSON, YAML, TOML, XML, and CSV query and modification tool"}]],"links":[{"type":"1min","text":"dasel","link":"/1min/dasel"},{"type":"mod","text":"`x env` => usage","link":"/mod/env"}],"homepage":"https://github.com/tomwright/dasel","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/dasel/releases","https://gitcode.net/x-cmd-build/dasel/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/dasel.en","x-term-name":"dasel","x-term-desc":"JSON^comma; YAML^comma; TOML^comma; XML^comma; and CSV query and modification tool","x-term-size":"large"},"headers":[],"relativePath":"pkg/dasel.md","filePath":"pkg/dasel.md"}'),d={name:"pkg/dasel.md"},c=e("h1",{id:"dasel",tabindex:"-1"},[a("dasel "),e("a",{class:"header-anchor",href:"#dasel","aria-label":'Permalink to "dasel"'},"​")],-1),u=e("p",{class:"x-desc"},"JSON, YAML, TOML, XML, and CSV query and modification tool",-1),m=e("h2",{id:"introduction",tabindex:"-1"},[a("Introduction "),e("a",{class:"header-anchor",href:"#introduction","aria-label":'Permalink to "Introduction"'},"​")],-1),h=e("p",null,"dasel is a tool that uses selectors to query and modify data structures.",-1),p=e("ol",null,[e("li",null,"It supports JSON, YAML, TOML, XML, and CSV as input and output formats, which are commonly used data formats."),e("li",null,"It enables conversion between common data formats such as JSON, YAML, TOML, XML, and CSV."),e("li",null,"It is a single executable file and does not require any third-party libraries."),e("li",null,"It has faster startup speed and is more efficient than jq/yq for small data, as shown in the benchmark.")],-1),f=e("h2",{id:"quick-start-guide-for-first-time-users",tabindex:"-1"},[a("Quick Start Guide for First-Time Users "),e("a",{class:"header-anchor",href:"#quick-start-guide-for-first-time-users","aria-label":'Permalink to "Quick Start Guide for First-Time Users"'},"​")],-1),g=e("p",null,"For first-time users of dasel, you can refer to the demonstration examples above and experience dasel quickly in 1-2 minutes. Additionally, x-cmd provides a 1-minute tutorial for dasel, which is very easy to get started with.",-1),y=e("h2",{id:"basic-features",tabindex:"-1"},[a("Basic Features "),e("a",{class:"header-anchor",href:"#basic-features","aria-label":'Permalink to "Basic Features"'},"​")],-1),b=e("p",null,"Currently, dasel provides:",-1),_=e("ol",null,[e("li",null,[a("Three subcommands: "),e("ol",null,[e("li",null,"select"),e("li",null,"put"),e("li",null,"delete")])]),e("li",null,"Over 20 selectors.")],-1),x=e("h2",{id:"performance-characteristics",tabindex:"-1"},[a("Performance Characteristics "),e("a",{class:"header-anchor",href:"#performance-characteristics","aria-label":'Permalink to "Performance Characteristics"'},"​")],-1),k=e("ol",null,[e("li",null,"dasel does not use stream processing. Before processing, the entire data is loaded into memory. Therefore, if users are processing large data, dasel may require memory comparable to or more than the data size."),e("li",null,"dasel has better startup time compared to jq/yq, making it more efficient for processing small data. The official website provides a benchmark report."),e("li",null,"Overall, dasel is efficient enough to handle manually maintained configuration files such as Kubernetes YAML files. Its simplicity, readability of DSL and parameter design, and ease of maintenance make it a good choice for modifying configuration files.")],-1),L=e("h2",{id:"competitors",tabindex:"-1"},[a("Competitors "),e("a",{class:"header-anchor",href:"#competitors","aria-label":'Permalink to "Competitors"'},"​")],-1),S=e("ol",null,[e("li",null,[a("If you need more flexible and powerful (but higher learning curve) control, or if you are dealing with large data and need stream processing, you have the following options: "),e("ol",null,[e("li",null,"jq: Input data is JSON, and output data can be JSON, CSV, and text."),e("li",null,"yq: Can handle JSON, YML, CSV, and XML simultaneously."),e("li",null,"xsv: An efficient CSV/TSV processing tool written in Rust, specifically designed for big data.")])]),e("li",null,"If you want to use generic SQL to query and manipulate JSON and CSV, then trdsql is worth considering.")],-1),M=e("h2",{id:"further-exploration",tabindex:"-1"},[a("Further Exploration "),e("a",{class:"header-anchor",href:"#further-exploration","aria-label":'Permalink to "Further Exploration"'},"​")],-1),C=e("ul",null,[e("li",null,"The official dasel Gitbook documentation provides detailed information about dasel's DSL."),e("li",null,[a("The dasel GitHub repository is available at the following address: ["),e("a",{href:"https://github.com/TomWright/dasel",target:"_blank",rel:"noreferrer"},"https://github.com/TomWright/dasel"),a("]")])],-1),v=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"dasel")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"dasel")])])])],-1);function O(T,q,w,E,F,N){const s=l("PackagePage");return i(),n("div",null,[r(s,null,{default:t(()=>[c,u]),abstract:t(()=>[m,h,p,f,g,y,b,_,x,k,L,S,M,C]),install:t(()=>[v]),_:1})])}const J=o(d,[["render",O]]);export{P as __pageData,J as default};
