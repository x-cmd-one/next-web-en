import{_ as i,C as o,o as n,c as l,H as r,w as s,k as e,a as t}from"./chunks/framework.98e11516.js";const G=JSON.parse('{"title":"gitleaks","titleTemplate":"x-cmd package | gitleaks is a SAST tool for detecting and preventing hardcoded secrets like passwords, api keys, and tokens in git repos","description":"x-cmd package gitleaks | gitleaks is a SAST tool for detecting and preventing hardcoded secrets like passwords, api keys, and tokens in git repos","frontmatter":{"name":"gitleaks","titleTemplate":"x-cmd package | gitleaks is a SAST tool for detecting and preventing hardcoded secrets like passwords, api keys, and tokens in git repos","head":[["meta",{"name":"og:title","content":"gitleaks | x-cmd package"}],["meta",{"name":"og:description","content":"gitleaks is a SAST tool for detecting and preventing hardcoded secrets like passwords, api keys, and tokens in git repos"}],["meta",{"name":"description","content":"x-cmd package gitleaks | gitleaks is a SAST tool for detecting and preventing hardcoded secrets like passwords, api keys, and tokens in git repos"}]],"links":[{"type":"1min","text":"gitleaks","link":"/1min/gitleaks"},{"type":"mod","text":"`x env` => usage","link":"/mod/env"}],"homepage":"https://github.com/gitleaks/gitleaks","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/gitleaks/releases","https://gitcode.net/x-cmd-build/gitleaks/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/gitleaks.en","x-term-name":"gitleaks","x-term-desc":"gitleaks is a SAST tool for detecting and preventing hardcoded secrets like passwords^comma; api keys^comma; and tokens in git repos","x-term-size":"large"},"headers":[],"relativePath":"pkg/gitleaks.md","filePath":"pkg/gitleaks.md"}'),c={name:"pkg/gitleaks.md"},d=e("h1",{id:"gitleaks",tabindex:"-1"},[t("gitleaks "),e("a",{class:"header-anchor",href:"#gitleaks","aria-label":'Permalink to "gitleaks"'},"​")],-1),u=e("p",{class:"x-desc"},"gitleaks is a SAST tool for detecting and preventing hardcoded secrets like passwords, api keys, and tokens in git repos",-1),g=e("h2",{id:"introduction",tabindex:"-1"},[t("Introduction "),e("a",{class:"header-anchor",href:"#introduction","aria-label":'Permalink to "Introduction"'},"​")],-1),p=e("p",null,"gitleaks is a fast and lightweight security scanning tool used to find potential security vulnerabilities in git repositories, files, and directories.",-1),h=e("h2",{id:"first-time-users",tabindex:"-1"},[t("First-time Users "),e("a",{class:"header-anchor",href:"#first-time-users","aria-label":'Permalink to "First-time Users"'},"​")],-1),k=e("ol",null,[e("li",null,"This article demonstrates how to quickly use gitleaks through x-cmd."),e("li",null,[t("x-cmd also provides a "),e("a",{href:"/1min/gitleaks"},"1-minute tutorial"),t(" to help you get started quickly.")])],-1),m=e("h2",{id:"features",tabindex:"-1"},[t("Features "),e("a",{class:"header-anchor",href:"#features","aria-label":'Permalink to "Features"'},"​")],-1),f=e("ol",null,[e("li",null,[e("strong",null,"Rich secret support"),t(": gitleaks supports over 160 "),e("a",{href:"https://github.com/gitleaks/gitleaks/tree/master/cmd/generate/config/rules",target:"_blank",rel:"noreferrer"},"secret types"),t(" and continuously adds new types to ensure that your code does not leak sensitive information such as passwords, API keys, and certificates.")]),e("li",null,[e("strong",null,"Custom rules"),t(": You can create a "),e("code",null,".gitleaks.toml"),t(" file in the project's root directory and write your own detection rules based on the configuration format provided by gitleaks to meet specific requirements.")]),e("li",null,[e("strong",null,"Historical commit detection"),t(": gitleaks not only scans the latest source code but also traces the entire git history to find sensitive information that has been committed to the code repository in the past, ensuring that history does not become a source of vulnerabilities.")]),e("li",null,[e("strong",null,"File and directory detection"),t(": In addition to scanning code files, gitleaks can also detect entire directories to ensure that there are no security vulnerabilities in your entire project. If you need to use gitleaks in a non-git repository, you can use the "),e("code",null,"--no-git"),t(" parameter for detection.")])],-1),y=e("h2",{id:"competitors-and-related-projects",tabindex:"-1"},[t("Competitors and Related Projects "),e("a",{class:"header-anchor",href:"#competitors-and-related-projects","aria-label":'Permalink to "Competitors and Related Projects"'},"​")],-1),b=e("ol",null,[e("li",null,[e("strong",null,"GitGuardian"),t(": "),e("ul",null,[e("li",null,"Advantages: Supports multiple cloud code hosting platforms including GitHub, GitLab, and Bitbucket. Has powerful custom rules functionality to detect various types of sensitive information."),e("li",null,"Disadvantages: Requires a paid subscription to access full functionality. Configuration and usage may be slightly more complex compared to gitleaks.")])]),e("li",null,[e("strong",null,"TruffleHog"),t(": "),e("ul",null,[e("li",null,"Advantages: An open-source tool that is easy to install and use. Can detect common high-risk sensitive information such as passwords and API keys."),e("li",null,"Disadvantages: Relatively simple functionality compared to gitleaks and GitGuardian, lacks extensive support for secret types and custom rules.")])])],-1),_=e("h1",{id:"further-reading",tabindex:"-1"},[t("Further Reading "),e("a",{class:"header-anchor",href:"#further-reading","aria-label":'Permalink to "Further Reading"'},"​")],-1),v=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/gitleaks/gitleaks",target:"_blank",rel:"noreferrer"},"github: gitleaks")]),e("li",null,[e("a",{href:"https://akashchandwani.medium.com/what-is-gitleaks-and-how-to-use-it-a05f2fb5b034",target:"_blank",rel:"noreferrer"},"What is Gitleaks and how to use it?")]),e("li",null,[e("a",{href:"https://www.crestdatasys.com/blogs/securing-your-codebase-with-gitleaks-comprehensive-guide/",target:"_blank",rel:"noreferrer"},"Securing Your Codebase with GitLeaks")]),e("li",null,[e("a",{href:"https://www.jit.io/blog/the-developers-guide-to-using-gitleaks-to-detect-hardcoded-secrets",target:"_blank",rel:"noreferrer"},"using-gitleaks-to-detect-hardcoded-secrets")]),e("li",null,[e("a",{href:"https://itnext.io/how-to-use-gitleaks-to-prevent-pushing-sensitive-info-cdd0355d5f61",target:"_blank",rel:"noreferrer"},"How to Use Gitleaks to Prevent Pushing Sensitive Info")])],-1),x=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"gitleaks")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"gitleaks")])])])],-1);function w(F,P,S,C,E,T){const a=o("PackagePage");return n(),l("div",null,[r(a,null,{default:s(()=>[d,u]),abstract:s(()=>[g,p,h,k,m,f,y,b,_,v]),install:s(()=>[x]),_:1})])}const B=i(c,[["render",w]]);export{G as __pageData,B as default};
