import{_ as s,C as o,o as n,c as i,H as l,w as t,k as e,a as r}from"./chunks/framework.98e11516.js";const B=JSON.parse('{"title":"grex","titleTemplate":"x-cmd package | A command-line tool and Rust library for generating regular expressions from user-provided test cases","description":"x-cmd package grex | A command-line tool and Rust library for generating regular expressions from user-provided test cases","frontmatter":{"name":"grex","titleTemplate":"x-cmd package | A command-line tool and Rust library for generating regular expressions from user-provided test cases","head":[["meta",{"name":"og:title","content":"grex | x-cmd package"}],["meta",{"name":"og:description","content":"A command-line tool and Rust library for generating regular expressions from user-provided test cases"}],["meta",{"name":"description","content":"x-cmd package grex | A command-line tool and Rust library for generating regular expressions from user-provided test cases"}]],"links":[{"type":"1min","text":"grex","link":"/1min/grex"},{"type":"mod","text":"`x env` => usage","link":"/mod/env"}],"homepage":"https://github.com/pemistahl/grex","license":"MIT","version":{"stable":"v0.0.1"},"support":["darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/grex/releases","https://gitcode.net/x-cmd-build/grex/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/grex.en","x-term-name":"grex","x-term-desc":"A command-line tool and Rust library for generating regular expressions from user-provided test cases","x-term-size":"large"},"headers":[],"relativePath":"pkg/grex.md","filePath":"pkg/grex.md"}'),d={name:"pkg/grex.md"},c=e("h1",{id:"grex",tabindex:"-1"},[r("grex "),e("a",{class:"header-anchor",href:"#grex","aria-label":'Permalink to "grex"'},"​")],-1),p=e("p",{class:"x-desc"},"A command-line tool and Rust library for generating regular expressions from user-provided test cases",-1),g=e("h2",{id:"introduction",tabindex:"-1"},[r("Introduction "),e("a",{class:"header-anchor",href:"#introduction","aria-label":'Permalink to "Introduction"'},"​")],-1),u=e("p",null,"grex is a library and command-line tool designed to simplify the complex and tedious task of crafting regular expressions. This project started as a Rust port of the JavaScript tool regexgen, originally written by Devon Govett. However, regexgen ceased development several years ago. grex now provides all the functionality of regexgen and introduces many new features.",-1),h=e("h2",{id:"first-time-users",tabindex:"-1"},[r("First-time Users "),e("a",{class:"header-anchor",href:"#first-time-users","aria-label":'Permalink to "First-time Users"'},"​")],-1),m=e("ol",null,[e("li",null,"This article's demo demonstrates how to use grex to generate a regular expression for [a-f] and print the output in a more readable way."),e("li",null,[r("X-CMD also provides a "),e("a",{href:"/1min/grex"},"1-minute tutorial"),r(" to help you get started.")])],-1),x=e("h2",{id:"generated-regular-expressions-compatible-with-perl-and-rust",tabindex:"-1"},[r("Generated Regular Expressions Compatible with Perl and Rust "),e("a",{class:"header-anchor",href:"#generated-regular-expressions-compatible-with-perl-and-rust","aria-label":'Permalink to "Generated Regular Expressions Compatible with Perl and Rust"'},"​")],-1),f=e("p",null,[r("The generated expressions are compatible with "),e("a",{href:"/pkg/perl"},"Perl"),r(" and the regular expression parser in Rust's regex crate (version 1.9.0 or higher). "),e("strong",null,"Compatibility with other regular expression parsers or libraries in other programming languages has not been tested.")],-1),b=e("h2",{id:"support-for-unicode-symbols",tabindex:"-1"},[r("Support for Unicode Symbols "),e("a",{class:"header-anchor",href:"#support-for-unicode-symbols","aria-label":'Permalink to "Support for Unicode Symbols"'},"​")],-1),y=e("ol",null,[e("li",null,[r("Fully compliant with "),e("a",{href:"https://unicode.org/versions/Unicode15.0.0/",target:"_blank",rel:"noreferrer"},"Unicode Standard 15.0"),r(".")]),e("li",null,"Can correctly handle graphic elements composed of multiple Unicode symbols.")],-1),_=e("h2",{id:"user-friendly-experience",tabindex:"-1"},[r("User-Friendly Experience "),e("a",{class:"header-anchor",href:"#user-friendly-experience","aria-label":'Permalink to "User-Friendly Experience"'},"​")],-1),k=e("ol",null,[e("li",null,"Automatic generation of regular expressions: grex generates the most specific regular expression by default, ensuring a complete match with the given input."),e("li",null,"Generate more readable expressions with detailed mode, which indents expressions on multiple lines."),e("li",null,"Syntax highlighting for improved display output in supported terminals.")],-1),v=e("h2",{id:"further-reading",tabindex:"-1"},[r("Further Reading "),e("a",{class:"header-anchor",href:"#further-reading","aria-label":'Permalink to "Further Reading"'},"​")],-1),w=e("ul",null,[e("li",null,[r("The project is hosted on "),e("a",{href:"https://github.com/pemistahl/grex",target:"_blank",rel:"noreferrer"},"GitHub"),r(", where the README provides detailed information about parameters and usage.")]),e("li",null,[e("a",{href:"https://pemistahl.github.io/grex-js/",target:"_blank",rel:"noreferrer"},"Demo website")])],-1),E=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"grex")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"grex")])])])],-1);function F(P,R,C,A,U,S){const a=o("PackagePage");return n(),i("div",null,[l(a,null,{default:t(()=>[c,p]),abstract:t(()=>[g,u,h,m,x,f,b,y,_,k,v,w]),install:t(()=>[E]),_:1})])}const D=s(d,[["render",F]]);export{B as __pageData,D as default};
