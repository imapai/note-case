import{_ as t,r as i,o as p,c as l,a as n,d as s,b as e,e as o}from"./app.fdaa301a.js";const r={},c=n("h1",{id:"gitbook\u4F7F\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitbook\u4F7F\u7528","aria-hidden":"true"},"#"),s(" Gitbook\u4F7F\u7528")],-1),u=n("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" \u4ECB\u7ECD")],-1),d={href:"https://baike.baidu.com/item/Github",target:"_blank",rel:"noopener noreferrer"},k={href:"https://baike.baidu.com/item/Markdown",target:"_blank",rel:"noopener noreferrer"},v=o(`<p>\u4E2A\u4EBA\u7406\u89E3\uFF1AGitbook\u53EF\u4EE5\u4F7F\u7528Markdown\u7684\u5F62\u5F0F\u7F16\u5199\u6587\u6863\uFF0C\u5B83\u53EF\u4EE5\u751F\u6210\u9759\u6001\u7F51\u9875\u3002\u6309\u7167\u89C4\u5B9A\u6307\u5B9A\u6587\u4EF6\u7684\u5C42\u7EA7\u7ED3\u6784\uFF0C\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u81EA\u52A8\u751F\u6210\u7C7B\u4F3C\u535A\u5BA2\u7F51\u9875\uFF0C\u5341\u5206\u65B9\u4FBF\u5BF9\u7B14\u8BB0\u7684\u67E5\u770B\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p><code>\u524D\u63D0</code>\uFF1A\u9700\u8981node\u73AF\u5883\uFF0Cnodejs\u5B89\u88C5\u7565</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> gitbook-cli -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6821\u9A8C\u5B89\u88C5\u662F\u5426\u6210\u529F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ gitbook -V
CLI version: <span class="token number">2.3</span>.2
GitBook version: <span class="token number">3.2</span>.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h2><p>\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521D\u59CB\u5316\u5F53\u524D\u6587\u4EF6\u5939\u4E3Agitbook\u9879\u76EE</span>
$ gitbook init 
<span class="token comment"># \u542F\u52A8\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF08\u82E5\u521D\u6B21\u6784\u5EFA\uFF0C\u9879\u76EE\u76EE\u5F55\u81EA\u52A8\u6784\u5EFA_book\u6587\u4EF6\u5939\uFF09</span>
$ gitbook server
<span class="token comment"># \u6784\u5EFAweb\u9879\u76EE\uFF0C_book\u6587\u4EF6\u5939</span>
$ gitbook build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u547D\u4EE4\u793A\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ gitbook init
E:<span class="token punctuation">\\</span>document<span class="token punctuation">\\</span>notebook<span class="token punctuation">\\</span>gitbook-init<span class="token operator">&gt;</span>gitbook init
warn: no summary <span class="token function">file</span> <span class="token keyword">in</span> this book
info: create README.md
info: create SUMMARY.md
info: initialization is finished
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
$ gitbook serve
E:<span class="token punctuation">\\</span>document<span class="token punctuation">\\</span>notebook<span class="token punctuation">\\</span>gitbook-init<span class="token operator">&gt;</span>gitbook serve
Live reload server started on port: <span class="token number">35729</span>
Press CTRL+C to quit <span class="token punctuation">..</span>.

info: <span class="token number">7</span> plugins are installed
info: loading plugin <span class="token string">&quot;livereload&quot;</span><span class="token punctuation">..</span>. OK
info: loading plugin <span class="token string">&quot;highlight&quot;</span><span class="token punctuation">..</span>. OK
info: loading plugin <span class="token string">&quot;search&quot;</span><span class="token punctuation">..</span>. OK
info: loading plugin <span class="token string">&quot;lunr&quot;</span><span class="token punctuation">..</span>. OK
info: loading plugin <span class="token string">&quot;sharing&quot;</span><span class="token punctuation">..</span>. OK
info: loading plugin <span class="token string">&quot;fontsettings&quot;</span><span class="token punctuation">..</span>. OK
info: loading plugin <span class="token string">&quot;theme-default&quot;</span><span class="token punctuation">..</span>. OK
info: found <span class="token number">1</span> pages
info: found <span class="token number">0</span> asset files
info: <span class="token operator">&gt;&gt;</span> generation finished with success <span class="token keyword">in</span> <span class="token number">2</span>.0s <span class="token operator">!</span>

Starting server <span class="token punctuation">..</span>.
Serving book on http://localhost:4000
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
$ gitbook build
E:<span class="token punctuation">\\</span>document<span class="token punctuation">\\</span>notebook<span class="token punctuation">\\</span>gitbook-init<span class="token operator">&gt;</span>gitbook build
info: <span class="token number">7</span> plugins are installed
info: <span class="token number">6</span> explicitly listed
info: loading plugin <span class="token string">&quot;highlight&quot;</span><span class="token punctuation">..</span>. OK
info: loading plugin <span class="token string">&quot;search&quot;</span><span class="token punctuation">..</span>. OK
info: loading plugin <span class="token string">&quot;lunr&quot;</span><span class="token punctuation">..</span>. OK
info: loading plugin <span class="token string">&quot;sharing&quot;</span><span class="token punctuation">..</span>. OK
info: loading plugin <span class="token string">&quot;fontsettings&quot;</span><span class="token punctuation">..</span>. OK
info: loading plugin <span class="token string">&quot;theme-default&quot;</span><span class="token punctuation">..</span>. OK
info: found <span class="token number">1</span> pages
info: found <span class="token number">0</span> asset files
info: <span class="token operator">&gt;&gt;</span> generation finished with success <span class="token keyword">in</span> <span class="token number">0</span>.4s <span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521D\u59CB\u5316\u540E\u81EA\u52A8\u751F\u6210\u6587\u4EF6\u76EE\u5F55\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- README.md
- SUMMARY.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 book.json
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 SUMMARY.md
\u251C\u2500\u2500 chapter-1/
|   \u251C\u2500\u2500 README.md
|   \u2514\u2500\u2500 something.md
\u2514\u2500\u2500 chapter-2/
    \u251C\u2500\u2500 README.md
    \u2514\u2500\u2500 something.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="book-json" tabindex="-1"><a class="header-anchor" href="#book-json" aria-hidden="true">#</a> book.json</h3>`,16),b={href:"https://docs.gitbook.com/",target:"_blank",rel:"noopener noreferrer"},m=o(`<h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Summary</span>

* <span class="token punctuation">[</span>Introduction<span class="token punctuation">]</span><span class="token punctuation">(</span>README.md<span class="token punctuation">)</span>
* <span class="token punctuation">[</span>Part I<span class="token punctuation">]</span><span class="token punctuation">(</span>part1/README.md<span class="token punctuation">)</span>
    * <span class="token punctuation">[</span>Writing is nice<span class="token punctuation">]</span><span class="token punctuation">(</span>part1/writing.md<span class="token punctuation">)</span>
    * <span class="token punctuation">[</span>GitBook is nice<span class="token punctuation">]</span><span class="token punctuation">(</span>part1/gitbook.md<span class="token punctuation">)</span>
* <span class="token punctuation">[</span>Part II<span class="token punctuation">]</span><span class="token punctuation">(</span>part2/README.md<span class="token punctuation">)</span>
    * <span class="token punctuation">[</span>We love feedback<span class="token punctuation">]</span><span class="token punctuation">(</span>part2/feedback_please.md<span class="token punctuation">)</span>
    * <span class="token punctuation">[</span>Better tools <span class="token keyword">for</span> authors<span class="token punctuation">]</span><span class="token punctuation">(</span>part2/better_tools.md<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h2>`,3),g={href:"https://links.jianshu.com/go?to=https%3A%2F%2Fplugins.gitbook.com%2Fplugin%2Fgithub",target:"_blank",rel:"noopener noreferrer"},h=o(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;github&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;github&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/your/repo&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728\u7EC8\u7AEF\u8F93\u5165 <code>gitbook install ./</code> \u5373\u53EF</p><p>\u63D2\u4EF6\u4E00\uFF1A</p>`,3),f={href:"https://github.com/julianxhokaxhiu/gitbook-plugin-summary",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"\u9644\u5F55",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9644\u5F55","aria-hidden":"true"},"#"),s(" \u9644\u5F55\uFF1A")],-1);function q(x,E){const a=i("ExternalLinkIcon");return p(),l("div",null,[c,u,n("p",null,[s("\u767E\u5EA6\u767E\u79D1\uFF1AGitBook \u662F\u4E00\u4E2A\u57FA\u4E8E Node.js \u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u53EF\u4F7F\u7528 "),n("a",d,[s("Github"),e(a)]),s("/Git \u548C "),n("a",k,[s("Markdown"),e(a)]),s(" \u6765\u5236\u4F5C\u7CBE\u7F8E\u7684\u7535\u5B50\u4E66\u3002")]),v,n("p",null,[s("\u4E66\u7C4D\u914D\u7F6E\u4FE1\u606F\uFF0C\u8BE6\u7EC6\u53C2\u6570\u53C2\u8003"),n("a",b,[s("\u5B98\u65B9\u5730\u5740"),e(a)])]),m,n("p",null,[s("\u5982\u679C\u8981\u914D\u7F6E\u4F7F\u7528\u7684\u63D2\u4EF6\u53EF\u4EE5\u5728 book.json \u6587\u4EF6\u4E2D\u52A0\u5165\u5373\u53EF\uFF0C\u6BD4\u5982\u6211\u4EEC\u6DFB\u52A0 "),n("a",g,[s("plugin-github"),e(a)]),s("\uFF0C\u6211\u4EEC\u5728 book.json \u4E2D\u52A0\u5165\u914D\u7F6E\u5982\u4E0B\u5373\u53EF\uFF1A")]),h,n("ul",null,[n("li",null,[n("a",f,[s("gitbook-plugin-summary"),e(a)]),s(" \u81EA\u52A8\u751F\u6210Summary\u76EE\u5F55")])]),_])}var M=t(r,[["render",q],["__file","Gitbook\u5199\u6587\u6863.html.vue"]]);export{M as default};
