import{_ as n,o as s,c as e,e as a}from"./app.fdaa301a.js";const i={},t=a(`<h1 id="git\u914D\u7F6E\u591A\u4E2A\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#git\u914D\u7F6E\u591A\u4E2A\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> Git\u914D\u7F6E\u591A\u4E2A\u8FDC\u7A0B\u4ED3\u5E93</h1><p>\u80CC\u666F\uFF1A\u56FD\u5185\u7684git\u4ED3\u5E93\u7F51\u7EDC\u6BD4\u8F83\u597D\uFF0C\u4F46\u662FGithub\u5374\u662F\u6D3B\u8DC3\u4EBA\u6570\u6700\u591A\u7684\u5F00\u653E\u5E73\u53F0\u7F51\u7EDC\u4E0D\u662F\u5F88\u597D\uFF0C\u6216\u8005\u9700\u8981\u4ECE\u7801\u4E91\u8FC1\u79FB\u5230Github\u3002</p><h2 id="\u914D\u7F6E\u4E00" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4E00" aria-hidden="true">#</a> \u914D\u7F6E\u4E00</h2><p>\u5206\u522B\u5173\u8054\u4E24\u4E2A\u4E0D\u540Cgit\u8FDC\u7A0B\u4ED3\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/USERNAME/REPO1.git
<span class="token function">git</span> remote <span class="token function">add</span> gitee https://gitee.com/USERNAME/REPO2.git

<span class="token function">git</span> push origin master
<span class="token function">git</span> push gitee master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u65B9\u6CD5\u7F3A\u70B9\u662F\u9700\u8981\u6BCF\u6B21\u63A8\u9001\uFF0C\u5206\u522B\u5411\u4E24\u4E2A\u4ED3\u5E93\u63A8\u9001\uFF0C\u7565\u663E\u9EBB\u70E6\u3002</p><h2 id="\u914D\u7F6E\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4E8C" aria-hidden="true">#</a> \u914D\u7F6E\u4E8C</h2><p>\u591A\u5730\u5740\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5206\u522B\u7ED9 origin \u8BBE\u4E24\u4E2A\u5730\u5740\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote set-url origin --add https://github.com/USERNAME/REPO1.git
<span class="token function">git</span> remote set-url origin --add https://github.com/USERNAME/REPO2.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76F4\u63A5 git push \u5C31\u53EF\u4EE5\u540C\u65F6\u63A8\u9001\u4E24\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u3002</p><p>\u5F53\u7136 URL \u548C repo \u4E0D\u4E00\u5B9A\u975E\u8981\u662F GitHub \u4E0A\u7684\uFF0C\u5177\u6709\u4E24\u4E2A url \u7684 remote \u4E5F\u4E0D\u4E00\u5B9A\u8981\u662F origin\uFF0C\u6BD4\u5982\u53EF\u4EE5\u8BBE\u7F6E\u6210 all\u3002</p><p>\u5728 <code>.git/config</code> \u91CC\u5F97\u5230</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">...</span>
<span class="token punctuation">[</span>remote &quot;origin&quot;<span class="token punctuation">]</span>
    url = https<span class="token punctuation">:</span>//USERNAME@github.com/USERNAME/REPO1.git
    url = https<span class="token punctuation">:</span>//USERNAME@github.com/USERNAME/REPO2.git
<span class="token punctuation">...</span>
<span class="token punctuation">[</span>branch &quot;master&quot;<span class="token punctuation">]</span>
    remote = origin
<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u63D0\u9192</strong>\uFF1A\u914D\u7F6E\u4E00 \u53EF\u4EE5\u9009\u62E9\u4EFB\u4E00\u4ED3\u5E93\u8FDB\u884C pull\uFF0C\u800C\u914D\u7F6E\u4E8C\u7F3A\u9ED8\u8BA4\u53EA\u80FD\u4ECE config \u4E2D\u7684\u7B2C\u4E00\u4E2A url \u5185\u7684\u4ED3\u5E93 pull \u4EE3\u7801\u3002</p><h2 id="\u53EA\u7528\u4E8E-push-\u7684\u5907\u4EFD-repo" tabindex="-1"><a class="header-anchor" href="#\u53EA\u7528\u4E8E-push-\u7684\u5907\u4EFD-repo" aria-hidden="true">#</a> \u53EA\u7528\u4E8E push \u7684\u5907\u4EFD repo</h2><p>\u4F60\u60F3\u4ECE repo1 pull\uFF0C\u4F46\u662F push \u7684\u65F6\u5019\u8981\u63A8\u9001\u5230 repo1 \u548C repo2\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote set-url origin --add https://github.com/USERNAME/REPO1.git
<span class="token function">git</span> remote set-url origin --push --add https://example.com/USERNAME/REPO2.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<code> .git/config</code> \u91CC\u5F97\u5230</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">...</span>
<span class="token punctuation">[</span>remote &quot;origin&quot;<span class="token punctuation">]</span>
    url = https<span class="token punctuation">:</span>//USERNAME@github.com/USERNAME/REPO1.git
    pushurl = https<span class="token punctuation">:</span>//USERNAME@example.com/USERNAME/REPO2.git
<span class="token punctuation">...</span>
<span class="token punctuation">[</span>branch &quot;master&quot;<span class="token punctuation">]</span>
    remote = origin
<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E <code>git push origin master</code> \u5C31\u4F1A\u540C\u65F6\u63D0\u4EA4\u5230\u4E24\u4E2A repo\uFF0C\u800C <code>git pull origin master</code> \u53EA\u4F1A\u4ECE repo1 \u91CC\u53D6\u5F97\u66F4\u65B0\u3002</p>`,20),o=[t];function l(c,u){return s(),e("div",null,o)}var d=n(i,[["render",l],["__file","Git\u914D\u7F6E\u591A\u4E2A\u8FDC\u7A0B\u4ED3\u5E93.html.vue"]]);export{d as default};
