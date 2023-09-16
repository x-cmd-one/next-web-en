import{_ as s,C as o,o as r,c as n,H as l,w as i,k as e,a as t}from"./chunks/framework.98e11516.js";const z=JSON.parse('{"title":"gitui","titleTemplate":"x-cmd package | gitui is a terminal-based Git user interface tool","description":"x-cmd package gitui | gitui is a terminal-based Git user interface tool","frontmatter":{"name":"gitui","titleTemplate":"x-cmd package | gitui is a terminal-based Git user interface tool","head":[["meta",{"name":"og:title","content":"gitui | x-cmd package"}],["meta",{"name":"og:description","content":"gitui is a terminal-based Git user interface tool"}],["meta",{"name":"description","content":"x-cmd package gitui | gitui is a terminal-based Git user interface tool"}]],"links":[{"type":"1min","text":"gitui","link":"/1min/gitui"},{"type":"mod","text":"`x env` => usage","link":"/mod/env"}],"homepage":"https://github.com/extrawurst/gitui","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/gitui/releases","https://gitcode.net/x-cmd-build/gitui/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/gitui.en","x-term-name":"gitui","x-term-desc":"gitui is a terminal-based Git user interface tool","x-term-size":"large"},"headers":[],"relativePath":"pkg/gitui.md","filePath":"pkg/gitui.md"}'),c={name:"pkg/gitui.md"},d=e("h1",{id:"gitui",tabindex:"-1"},[t("gitui "),e("a",{class:"header-anchor",href:"#gitui","aria-label":'Permalink to "gitui"'},"​")],-1),u=e("p",{class:"x-desc"},"gitui is a terminal-based Git user interface tool",-1),m=e("h2",{id:"abstract",tabindex:"-1"},[t("Abstract "),e("a",{class:"header-anchor",href:"#abstract","aria-label":'Permalink to "Abstract"'},"​")],-1),g=e("p",null,"gitui, built by Stephan D in 2020 using Rust, is a terminal-based interactive command-line tool for managing Git repositories conveniently within a terminal interface.",-1),h=e("h2",{id:"get-started-for-first-time-users",tabindex:"-1"},[t("Get Started for First-Time Users "),e("a",{class:"header-anchor",href:"#get-started-for-first-time-users","aria-label":'Permalink to "Get Started for First-Time Users"'},"​")],-1),p=e("ol",null,[e("li",null,"The demo in this document shows how to quickly use gitui with x-cmd to start interactive mode and view repository status, commit history, and more."),e("li",null,[t("x-cmd offers a "),e("a",{href:"/1min/gitui"},"1-minute gitui tutorial"),t(" for you to get started right away.")])],-1),f=e("h2",{id:"key-features",tabindex:"-1"},[t("Key Features "),e("a",{class:"header-anchor",href:"#key-features","aria-label":'Permalink to "Key Features"'},"​")],-1),b=e("ol",null,[e("li",null,[e("strong",null,"Efficient and Stable"),t(": Compared to other interactive tools (such as lazygit and tig), gitui has faster startup times and lower memory usage, especially when managing large repositories. For details, you can refer to "),e("a",{href:"https://github.com/extrawurst/gitui#3--benchmarks-top-",target:"_blank",rel:"noreferrer"},"gitui's benchmark tests"),t(".")]),e("li",null,[e("strong",null,"Quick Operations"),t(": You can perform actions like pulling, committing, pushing, and stashing in the interactive mode.")]),e("li",null,[e("strong",null,"Search and Browse"),t(": gitui can not only search and browse local files but also retrieve Git commit records and view changes in the repository.")])],-1),x=e("h2",{id:"similar-tools-and-competitors",tabindex:"-1"},[t("Similar Tools and Competitors "),e("a",{class:"header-anchor",href:"#similar-tools-and-competitors","aria-label":'Permalink to "Similar Tools and Competitors"'},"​")],-1),k=e("ol",null,[e("li",null,[e("strong",null,"lazygit"),t(": A Git terminal-based interactive command-line tool built with Go. Among the three, it has the most comprehensive functionality and a more user-friendly interactive interface. However, its performance is not as good as the other two when dealing with large repositories. x-cmd also includes lazygit, and interested readers can refer to "),e("a",{href:"/pkg/lazygit"},"x-cmd pkg lazygit"),t(".")]),e("li",null,[e("strong",null,"tig"),t(": A Git terminal-based interactive command-line tool built with C. Among the three, it has been in development for a longer time and has a smaller footprint. Its usage leans more towards invoking commands. x-cmd also includes tig, and interested readers can refer to "),e("a",{href:"/pkg/tig"},"x-cmd pkg tig"),t(".")])],-1),_=e("h2",{id:"further-exploration",tabindex:"-1"},[t("Further Exploration "),e("a",{class:"header-anchor",href:"#further-exploration","aria-label":'Permalink to "Further Exploration"'},"​")],-1),y=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/extrawurst/gitui",target:"_blank",rel:"noreferrer"},"GitHub: gitui")])],-1),v=e("p",null,"Is there anything specific you'd like to do with this Markdown content?",-1),w=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"gitui")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"gitui")])])])],-1);function E(F,G,C,P,T,B){const a=o("PackagePage");return r(),n("div",null,[l(a,null,{default:i(()=>[d,u]),abstract:i(()=>[m,g,h,p,f,b,x,k,_,y,v]),install:i(()=>[w]),_:1})])}const A=s(c,[["render",E]]);export{z as __pageData,A as default};
