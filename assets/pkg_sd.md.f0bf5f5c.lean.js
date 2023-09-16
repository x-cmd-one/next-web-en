import{_ as n,C as i,o as r,c as o,H as l,w as t,k as e,a as s}from"./chunks/framework.98e11516.js";const B=JSON.parse('{"title":"sd","titleTemplate":"x-cmd package | sd is an intuitive find & replace CLI","description":"x-cmd package sd | sd is an intuitive find & replace CLI","frontmatter":{"name":"sd","titleTemplate":"x-cmd package | sd is an intuitive find & replace CLI","head":[["meta",{"name":"og:title","content":"sd | x-cmd package"}],["meta",{"name":"og:description","content":"sd is an intuitive find & replace CLI"}],["meta",{"name":"description","content":"x-cmd package sd | sd is an intuitive find & replace CLI"}]],"links":[{"type":"1min","text":"sd","link":"/1min/sd"},{"type":"mod","text":"`x env` => usage","link":"/mod/env"}],"homepage":"https://github.com/chmln/sd","license":"MIT","version":{"stable":"v0.7.6"},"support":["darwin/arm64","linux/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/sd/releases","https://gitcode.net/x-cmd-build/sd/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/sd.en","x-term-name":"sd","x-term-desc":"sd is an intuitive find & replace CLI","x-term-size":"large"},"headers":[],"relativePath":"pkg/sd.md","filePath":"pkg/sd.md"}'),d={name:"pkg/sd.md"},c=e("h1",{id:"sd",tabindex:"-1"},[s("sd "),e("a",{class:"header-anchor",href:"#sd","aria-label":'Permalink to "sd"'},"​")],-1),u=e("p",{class:"x-desc"},"sd is an intuitive find & replace CLI",-1),p=e("h2",{id:"introduction",tabindex:"-1"},[s("Introduction "),e("a",{class:"header-anchor",href:"#introduction","aria-label":'Permalink to "Introduction"'},"​")],-1),h=e("p",null,"sd is a command-line tool for searching and replacing text based on regular expressions, similar to sed, but sd is simpler to use and more user-friendly.",-1),m=e("h2",{id:"quick-start-for-first-time-users",tabindex:"-1"},[s("Quick Start for First-time Users "),e("a",{class:"header-anchor",href:"#quick-start-for-first-time-users","aria-label":'Permalink to "Quick Start for First-time Users"'},"​")],-1),f=e("ol",null,[e("li",null,"This article demonstrates using sd to perform single-character replacements (comma to `")],-1),g=e("p",null,[e("code",null,"), as well as using regular expressions to search for text enclosed in "),s("/` in a file and print the content of the strings inside. 2. x-cmd also provides a "),e("a",{href:"/1min/sd"},"1-minute tutorial"),s(" to help you get started quickly.")],-1),x=e("h2",{id:"key-features",tabindex:"-1"},[s("Key Features "),e("a",{class:"header-anchor",href:"#key-features","aria-label":'Permalink to "Key Features"'},"​")],-1),b=e("ol",null,[e("li",null,"Uses a universal regular expression syntax (similar to regular expressions in JavaScript and Python). In comparison, sed uses a distinctive regular expression syntax, which adds additional learning and maintenance complexity for users."),e("li",null,"sd also supports searching and replacing with string text patterns."),e("li",null,"Easy to write, easy to read, and easy to maintain. The search and replace expressions are separated, so you no longer need to use backslashes or remember which characters need to be escaped."),e("li",null,[s("Compared to sed, its default settings are often more suitable for most typical scenarios. Take the most classic example of replacing corresponding values from a configuration file. "),e("ol",null,[e("li",null,[s("sd supports it by default: "),e("code",null,"sd before after file.txt"),s(", concise and intuitive.")]),e("li",null,[s("In sed, you need to use the "),e("code",null,"-i"),s(" parameter: "),e("code",null,"sed -i -e 's/before/after/g' file.txt"),s(".")]),e("li",null,"The reason sed is slightly more cumbersome is because of its prioritized pipeline design, where the output is sent to standard output by default. In contrast, sd directly modifies the file by default, which is more intuitive for users.")])]),e("li",null,[s("sd is written in Rust and has excellent performance. In some scenarios, sd even has better efficiency compared to sed. For more details, please refer to the official "),e("a",{href:"https://github.com/chmln/sd#benchmarks",target:"_blank",rel:"noreferrer"},"Benchmark"),s(" provided.")])],-1),y=e("h1",{id:"further-reading",tabindex:"-1"},[s("Further Reading "),e("a",{class:"header-anchor",href:"#further-reading","aria-label":'Permalink to "Further Reading"'},"​")],-1),k=e("ul",null,[e("li",null,[s("The project is hosted on "),e("a",{href:"https://github.com/chmln/sd",target:"_blank",rel:"noreferrer"},"GitHub"),s(", where the README document provides detailed parameter functionality and usage instructions.")]),e("li",null,[e("a",{href:"https://www.linode.com/docs/guides/linux-sd-command/",target:"_blank",rel:"noreferrer"},"linux-sd-command")]),e("li",null,[e("a",{href:"https://github.com/chmln/sd#comparison-to-sed",target:"_blank",rel:"noreferrer"},"sd vs sed"),s(" is an official comparison document provided to help you better understand the features of sd.")])],-1),_=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"sd")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"sd")])])])],-1);function v(E,C,F,w,I,P){const a=i("PackagePage");return r(),o("div",null,[l(a,null,{default:t(()=>[c,u]),abstract:t(()=>[p,h,m,f,g,x,b,y,k]),install:t(()=>[_]),_:1})])}const L=n(d,[["render",v]]);export{B as __pageData,L as default};
