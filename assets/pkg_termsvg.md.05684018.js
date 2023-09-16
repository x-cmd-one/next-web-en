import{_ as r,C as o,o as i,c as n,H as l,w as t,k as e,a}from"./chunks/framework.98e11516.js";const N=JSON.parse('{"title":"termsvg","titleTemplate":"x-cmd package | Record, share and export your terminal as a animated SVG image.","description":"x-cmd package termsvg | Record, share and export your terminal as a animated SVG image.","frontmatter":{"name":"termsvg","titleTemplate":"x-cmd package | Record, share and export your terminal as a animated SVG image.","head":[["meta",{"name":"og:title","content":"termsvg | x-cmd package"}],["meta",{"name":"og:description","content":"Record, share and export your terminal as a animated SVG image."}],["meta",{"name":"description","content":"x-cmd package termsvg | Record, share and export your terminal as a animated SVG image."}]],"links":[{"type":"1min","text":"termsvg","link":"/1min/termsvg"},{"type":"mod","text":"`x env` => usage","link":"/mod/env"}],"homepage":"https://github.com/MrMarble/termsvg","license":"MIT","version":{"stable":"v0.6.1"},"support":["linux/arm64","linux/x64","darwin/arm64","darwin/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/termsvg/releases","https://gitcode.net/x-cmd-build/termsvg/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/termsvg.en","x-term-name":"termsvg","x-term-desc":"Record^comma; share and export your terminal as a animated SVG image.","x-term-size":"large"},"headers":[],"relativePath":"pkg/termsvg.md","filePath":"pkg/termsvg.md"}'),c={name:"pkg/termsvg.md"},m=e("h1",{id:"termsvg",tabindex:"-1"},[a("termsvg "),e("a",{class:"header-anchor",href:"#termsvg","aria-label":'Permalink to "termsvg"'},"​")],-1),d=e("p",{class:"x-desc"},"Record, share and export your terminal as a animated SVG image.",-1),h=e("h2",{id:"introduction",tabindex:"-1"},[a("Introduction "),e("a",{class:"header-anchor",href:"#introduction","aria-label":'Permalink to "Introduction"'},"​")],-1),p=e("p",null,"termsvg is a command-line tool written in Go that allows you to record terminal sessions and play them back. It can also export recording files as SVG animations. The recording files use the same format as asciinema, so you can use asciinema commands to play them.",-1),u=e("h2",{id:"first-time-users",tabindex:"-1"},[a("First-time Users "),e("a",{class:"header-anchor",href:"#first-time-users","aria-label":'Permalink to "First-time Users"'},"​")],-1),g=e("ol",null,[e("li",null,"This article's demo demonstrates using termsvg to record terminal sessions and play them back."),e("li",null,[a("X-CMD also offers a "),e("a",{href:"/1min/termsvg"},"1-minute tutorial"),a(" to help you get started.")])],-1),f=e("h2",{id:"simple-and-user-friendly",tabindex:"-1"},[a("Simple and User-Friendly "),e("a",{class:"header-anchor",href:"#simple-and-user-friendly","aria-label":'Permalink to "Simple and User-Friendly"'},"​")],-1),_=e("p",null,"termsvg has only three main functions, making it simple to use:",-1),v=e("ol",null,[e("li",null,[e("code",null,"play"),a(": Play pre-recorded cast format files.")]),e("li",null,[e("code",null,"rec"),a(": Record terminal sessions.")]),e("li",null,[e("code",null,"export"),a(": Convert and export cast files to SVG format.")])],-1),y=e("h2",{id:"pause-recording-support",tabindex:"-1"},[a("Pause Recording Support "),e("a",{class:"header-anchor",href:"#pause-recording-support","aria-label":'Permalink to "Pause Recording Support"'},"​")],-1),b=e("p",null,"While recording, if you need to pause the recording, simply use the Ctrl+p shortcut to pause and press it again to resume recording. This makes recording more flexible and convenient.",-1),x=e("h2",{id:"compatibility-with-asciinema",tabindex:"-1"},[a("Compatibility with asciinema "),e("a",{class:"header-anchor",href:"#compatibility-with-asciinema","aria-label":'Permalink to "Compatibility with asciinema"'},"​")],-1),k=e("p",null,[a("termsvg outputs in the same format as "),e("a",{href:"https://github.com/asciinema/asciinema",target:"_blank",rel:"noreferrer"},"asciinema"),a(`, so you can use the Asciinema website player and other plugins and applications developed by the Asciinema community. We have also introduced "agg," a tool that converts Asciicast to GIF format. You can download it through X-CMD's pkg and use the `),e("code",null,"x agg"),a(" command if you're interested.")],-1),F=e("h2",{id:"similar-tools",tabindex:"-1"},[a("Similar Tools "),e("a",{class:"header-anchor",href:"#similar-tools","aria-label":'Permalink to "Similar Tools"'},"​")],-1),w=e("ol",null,[e("li",null,[e("a",{href:"https://github.com/asciinema/asciinema",target:"_blank",rel:"noreferrer"},"asciinema")]),e("li",null,[e("a",{href:"https://github.com/theonewolf/TermRecord",target:"_blank",rel:"noreferrer"},"TermRecord")]),e("li",null,[e("a",{href:"https://github.com/ConradIrwin/showterm",target:"_blank",rel:"noreferrer"},"showterm")]),e("li",null,[e("a",{href:"/pkg/vhs"},"vhs")]),e("li",null,[a("Linux native "),e("code",null,"script"),a(" command")])],-1),C=e("h2",{id:"further-reading",tabindex:"-1"},[a("Further Reading "),e("a",{class:"header-anchor",href:"#further-reading","aria-label":'Permalink to "Further Reading"'},"​")],-1),P=e("ul",null,[e("li",null,[a("The project's hosted website on "),e("a",{href:"https://github.com/MrMarble/termsvg",target:"_blank",rel:"noreferrer"},"GitHub"),a(" provides detailed")])],-1),E=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"termsvg")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"termsvg")])])])],-1);function S(R,G,T,V,B,M){const s=o("PackagePage");return i(),n("div",null,[l(s,null,{default:t(()=>[m,d]),abstract:t(()=>[h,p,u,g,f,_,v,y,b,x,k,F,w,C,P]),install:t(()=>[E]),_:1})])}const U=r(c,[["render",S]]);export{N as __pageData,U as default};
