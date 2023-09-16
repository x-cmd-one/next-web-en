import{_ as r,C as t,o as c,c as d,H as a,w as y,k as s,a as o,Y as l}from"./chunks/framework.98e11516.js";const A=JSON.parse('{"title":"x gh action workflow","description":"x gh action workflow | x-cmd module | workflow management","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gh action workflow | x-cmd"}],["meta",{"name":"og:description","content":"workflow management"}],["meta",{"name":"description","content":"x gh action workflow | x-cmd module | workflow management"}]]},"headers":[],"relativePath":"mod/gh/action-workflow.md","filePath":"mod/gh/action-workflow.md"}'),i={name:"mod/gh/action-workflow.md"},E=s("h1",{id:"x-gh-action-workflow",tabindex:"-1"},[o("x gh action workflow "),s("a",{class:"header-anchor",href:"#x-gh-action-workflow","aria-label":'Permalink to "x gh action workflow"'},"​")],-1),h=s("p",{class:"x-desc"},"workflow management",-1),g=l('<h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>List the workflow in a repository</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>List workflow runs summary for a workflow</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">workflow_i</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">view</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">workflow_i</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Run a workflow by creating a workflow_dispatch event</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dispatch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">workflow_i</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dispatch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">workflow_i</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-gh-action-workflow-app">x gh action workflow --app</a></td><td>Interactive UI show workflow information</td></tr><tr><td><a href="#x-gh-action-workflow-ls">x gh action workflow ls</a></td><td>List the workflow in a repository</td></tr><tr><td><a href="#x-gh-action-workflow-view">x gh action workflow view</a></td><td>List workflow runs summary for a workflow</td></tr><tr><td><a href="#x-gh-action-workflow-run">x gh action workflow run</a></td><td>Run a workflow by creating a workflow_dispatch event</td></tr><tr><td><a href="#x-gh-action-workflow-disable">x gh action workflow disable</a></td><td>Disable a workflow</td></tr><tr><td><a href="#x-gh-action-workflow-enable">x gh action workflow enable</a></td><td>Enable a workflow</td></tr></tbody></table></div><h3 id="x-gh-action-workflow-app" tabindex="-1">x gh action workflow --app <a class="header-anchor" href="#x-gh-action-workflow-app" aria-label="Permalink to &quot;x gh action workflow --app&quot;">​</a></h3><p>Interactive UI show workflow information</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--app</span><span style="color:#929292;"> [OPTIONS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--app</span><span style="color:#6C6C6C;"> [OPTIONS]</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul>',14),F=l('<h3 id="x-gh-action-workflow-ls" tabindex="-1">x gh action workflow ls <a class="header-anchor" href="#x-gh-action-workflow-ls" aria-label="Permalink to &quot;x gh action workflow ls&quot;">​</a></h3><p>List the workflow in a repository</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;owner_path&gt;/&lt;repo_path&gt;</td></tr><tr><td><code>--per_page</code> &lt;num&gt;</td><td></td><td>per_page data number</td></tr><tr><td><code>--page</code> &lt;num&gt;</td><td></td><td>target page</td></tr></tbody></table></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><h3 id="x-gh-action-workflow-view" tabindex="-1">x gh action workflow view <a class="header-anchor" href="#x-gh-action-workflow-view" aria-label="Permalink to &quot;x gh action workflow view&quot;">​</a></h3><p>List workflow runs summary for a workflow</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">view</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">v</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">view</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">v</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>workflow ID (obtain by <code>x gh action workflow ls</code>)</td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul>',15),w=l('<ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr><tr><td><code>--exclude_pull_requests</code></td><td>Not pull requests are omitted from the response</td></tr></tbody></table></div><h3 id="x-gh-action-workflow-run" tabindex="-1">x gh action workflow run <a class="header-anchor" href="#x-gh-action-workflow-run" aria-label="Permalink to &quot;x gh action workflow run&quot;">​</a></h3><p>Run a workflow by creating a workflow_dispatch event</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">dispatch</span><span style="color:#929292;"> [OPTIONS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">dispatch</span><span style="color:#6C6C6C;"> [OPTIONS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>workflow &lt;name&gt; or &lt;relative_file_path&gt; or .id=&lt;workflow_id&gt;</td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul>',9),u=l(`<ul><li><strong>Examples</strong> :</li></ul><p>Run the &lt;workflow_name is Lint&gt; workflow by creating a workflow_dispatch event</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Lint</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Lint</span></span></code></pre></div><p>Run &lt;remote file .github/workflows/lint.yml&gt; workflow_dispatch event and use key and values parameter</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">name=x-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">msg=hello</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lint.yml</span></span>
<span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--inputs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{&quot;name&quot;:&quot;x-cmd&quot;,&quot;msg&quot;:&quot;hello&quot;}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lint.yml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">name=x-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">msg=hello</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lint.yml</span></span>
<span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--inputs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{&quot;name&quot;:&quot;x-cmd&quot;,&quot;msg&quot;:&quot;hello&quot;}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lint.yml</span></span></code></pre></div><p>Run a workflow_dispatch event and use key and values parameter from stdin</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{&quot;name&quot;:&quot;x-cmd&quot;}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--inputs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.id=</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">workflow_i</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{&quot;name&quot;:&quot;x-cmd&quot;}&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--inputs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.id=</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">workflow_i</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="x-gh-action-workflow-disable" tabindex="-1">x gh action workflow disable <a class="header-anchor" href="#x-gh-action-workflow-disable" aria-label="Permalink to &quot;x gh action workflow disable&quot;">​</a></h3><p>Disable a workflow</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">disable</span><span style="color:#929292;"> [OPTIONS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">disable</span><span style="color:#6C6C6C;"> [OPTIONS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>workflow ID (obtain by <code>x gh action workflow ls</code>)</td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;owner_path&gt;/&lt;repo_path&gt;</td></tr></tbody></table></div><h3 id="x-gh-action-workflow-enable" tabindex="-1">x gh action workflow enable <a class="header-anchor" href="#x-gh-action-workflow-enable" aria-label="Permalink to &quot;x gh action workflow enable&quot;">​</a></h3><p>Enable a workflow</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#929292;"> [OPTIONS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#6C6C6C;"> [OPTIONS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Arguments</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>#1</code></td><td>workflow ID (obtain by <code>x gh action workflow ls</code>)</td></tr></tbody></table></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;owner_path&gt;/&lt;repo_path&gt;</td></tr></tbody></table></div><br>`,24),k=s("h2",{id:"related-link",tabindex:"-1"},[o("Related Link "),s("a",{class:"header-anchor",href:"#related-link","aria-label":'Permalink to "Related Link"'},"​")],-1),f=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[o("In interactive terminal ( zsh, bash ... ), Can use "),s("kbd",null,"Tab"),o(" to get completion information")]),s("p",null,[o("Run "),s("code",null,"CMD SUBCOMMAND --help"),o(" for more information on a command")])],-1);function C(b,m,v,_,B,x){const e=t("AdsContent"),n=t("DocsGroupTable"),p=t("DocsLinkCard");return c(),d("div",null,[E,h,a(e),g,a(n,{header:'["Name, Shorthand","Default","Description"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;owner_path^gt;/^lt;repo_path^gt;"}]},"optional":{"active":true,"data":[{"name":"<code>--page</code> ^lt;num^gt;","default":"","desc":"target page"},{"name":"<code>--per_page</code> ^lt;num^gt;","default":"","desc":"per_page data number"}]},"$NotGroup":{"active":true,"data":[]}}'}),F,a(n,{header:'["Name, Shorthand","Default","Description"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;owner_path^gt;/^lt;repo_path^gt;"}]},"Optional":{"active":true,"data":[{"name":"<code>--branch</code> ^lt;branch^gt;","default":"","desc":"Returns workflow runs associated with a branch"},{"name":"<code>--actor</code> ^lt;username^gt;","default":"","desc":"returns someone workflow runs"},{"name":"<code>--event</code> ^lt;event^gt;","default":"","desc":"Returns workflow run triggered by the event you specify"},{"name":"<code>--sta</code>, <code>--status</code> ^lt;status^gt;","default":"","desc":"Returns workflow runs with the check run status"},{"name":"<code>--per_page</code> ^lt;num^gt;","default":"","desc":"per_page data number"},{"name":"<code>--page</code> ^lt;num^gt;","default":"","desc":"target page"},{"name":"<code>--created</code> ^lt;ISO 8601^gt;","default":"","desc":"Returns workflow runs created within the given date-time range"},{"name":"<code>--check_suite_id</code> ^lt;id^gt;","default":"","desc":"Returns workflow runs with the check_suite_id that you specify"}]},"$NotGroup":{"active":true,"data":[]}}'}),w,a(n,{header:'["Name, Shorthand","Default","Description"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;owner_path^gt;/^lt;repo_path^gt;"}]},"Optional":{"active":true,"data":[{"name":"<code>--inputs</code> ^lt;key_val_json^gt;","default":"","desc":"Input keys and values parameter in the workflow file. \\"-\\" from stdin"},{"name":"<code>--ref</code> ^lt;branch|tag^gt;","default":"","desc":"The git reference for the workflow. Empty will get default branch"},{"name":"<code>--field</code>, <code>-f</code> ^lt;key=val^gt;","default":"","desc":"Input ^lt;key^gt;=^lt;value^gt; parameter in the workflow file"}]},"$NotGroup":{"active":true,"data":[]}}'}),u,a(p,null,{default:y(()=>[k]),_:1}),f])}const q=r(i,[["render",C]]);export{A as __pageData,q as default};
