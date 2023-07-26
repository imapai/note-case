import{_ as e,o as n,c as s,e as a}from"./app.fdaa301a.js";const i={},r=a(`<h1 id="\u5236\u4F5C\u4E00\u4E2A\u7B80\u5355\u7684-docker-\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5236\u4F5C\u4E00\u4E2A\u7B80\u5355\u7684-docker-\u955C\u50CF" aria-hidden="true">#</a> \u5236\u4F5C\u4E00\u4E2A\u7B80\u5355\u7684 docker \u955C\u50CF</h1><h2 id="\u5236\u4F5C-docker-\u955C\u50CF\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#\u5236\u4F5C-docker-\u955C\u50CF\u7EC3\u4E60" aria-hidden="true">#</a> \u5236\u4F5C Docker \u955C\u50CF\u7EC3\u4E60</h2><p>\u4F7F\u7528Docker\u90E8\u7F72Springboot\u9879\u76EE\uFF0C\u5C06\u9879\u76EE\u5236\u4F5C\u6210\u955C\u50CF\uFF0C\u628A\u955C\u50CF\u4E0A\u4F20\u5230Harbor\u79C1\u6709\u4ED3\u5E93</p><h3 id="\u5236\u4F5C\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5236\u4F5C\u955C\u50CF" aria-hidden="true">#</a> \u5236\u4F5C\u955C\u50CF</h3><p>1.\u5C06Springboot\u9879\u76EE\u6253\u5305\u6210\u53EF\u4EE5\u8FD0\u884C\u7684jar\u6587\u4EF6</p><p>2.\u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55/docker/springboot4docker\uFF0C\u8FDB\u5165\u8BE5\u76EE\u5F55</p><p>3.\u5728\u65B0\u5EFA\u76EE\u5F55\u4E2D\u7F16\u5199Dockerfile</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token comment"># \u57FA\u7840\u955C\u50CF\u4F7F\u7528java8</span>
<span class="token instruction"><span class="token keyword">FROM</span> java:8</span>

<span class="token comment"># \u6307\u5B9A\u4E34\u65F6\u6587\u4EF6\u76EE\u5F55\u4E3A/tmp</span>
<span class="token instruction"><span class="token keyword">VOLUME</span> /tmp</span>

<span class="token comment"># \u5C06jar\u5305\u6DFB\u52A0\u5230\u5BB9\u5668\u5E76\u66F4\u540Dapp.jar</span>
<span class="token instruction"><span class="token keyword">ADD</span> springboot4docker-demo.jar app.jar</span>

<span class="token instruction"><span class="token keyword">RUN</span> bash -c <span class="token string">&#39;touch /app.jar&#39;</span></span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;app.jar&quot;</span>,<span class="token string">&quot;&gt; /log/app.log&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u628Ajar\u5305\u590D\u5236\u4E00\u4EFD\u5230\u4E0A\u8FF0\u6587\u4EF6\u76EE\u5F55\u5185</p><p>5.\u5728\u547D\u4EE4\u884C\u5185\u6267\u884Cdocker build\u6307\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd\u5230\u4E0A\u8FF0\u6587\u4EF6\u76EE\u5F55
docker build -t springboot4docker:1.0.1 .
\u89E3\u91CA\uFF1A
	-t \u6307\u5B9A\u955C\u50CFimage\u7684tag\u540D\u79F0
	. \u5F53\u524D\u76EE\u5F55\u6587\u4EF6
	\u4F7F\u7528 docker images\u67E5\u770B\u5236\u4F5C\u597D\u7684\u955C\u50CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FD0\u884C\u5236\u4F5C\u7684\u955C\u50CF\u5230docker\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u5236\u4F5C\u7684\u955C\u50CF\u5230docker\u5BB9\u5668" aria-hidden="true">#</a> \u8FD0\u884C\u5236\u4F5C\u7684\u955C\u50CF\u5230Docker\u5BB9\u5668</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -d --name springboot4docker-test -p 8002:8001 springboot4docker:1.0.1
\u89E3\u91CA\uFF1A
	-d \u540E\u53F0\u8FD0\u884C
	--name \u5BB9\u5668\u7684\u522B\u540D
	-p \u7AEF\u53E3\u6620\u5C04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662F\u5728\u672C\u5730\uFF0C\u73B0\u5728\u53EF\u4EE5\u8BBF\u95EE\u6D4B\u8BD5\u3002</p><h3 id="\u4E0A\u4F20\u955C\u50CF\u5230harbor" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u955C\u50CF\u5230harbor" aria-hidden="true">#</a> \u4E0A\u4F20\u955C\u50CF\u5230Harbor</h3><p>1.\u5148\u767B\u5F55\u5230\u4ED3\u5E93</p><blockquote><p>docker login [IP\u5730\u5740]</p></blockquote><p>2.\u6253tag</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker tag springboot4docker-test:1.0.1 [IP]/test/springboot4docker:1.0.1
\u89E3\u91CA\uFF1A
	tag \u6253tag\u547D\u4EE4
	springboot4docker-test:1.0.1 \u672C\u5730\u955C\u50CFtag
	test Harbor\u4ED3\u5E93\u7684\u9879\u76EE\u5730\u5740\u540D\u79F0
	springboot4docker:1.0.1 \u8FDC\u7A0BHarbor\u4ED3\u5E93\u4E2D\u7684tag\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u4E0A\u4F20\u5230Harbor\u4ED3\u5E93</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker push [IP]/test/springboot4docker:1.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>end</p>`,22),d=[r];function t(o,c){return n(),s("div",null,d)}var p=e(i,[["render",t],["__file","docker4springboot.html.vue"]]);export{p as default};
