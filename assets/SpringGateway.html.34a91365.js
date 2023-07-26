import{_ as n,o as s,c as a,e}from"./app.fdaa301a.js";const t={},l=e(`<h1 id="spring-boot-gateway" tabindex="-1"><a class="header-anchor" href="#spring-boot-gateway" aria-hidden="true">#</a> Spring Boot Gateway</h1><p>\u8DEF\u7531\uFF08routes\uFF1A\u8DEF\u7531\uFF0C\u5B83\u7531\u552F\u4E00\u6807\u8BC6\uFF08ID\uFF09\u3001\u76EE\u6807\u670D\u52A1\u5730\u5740\uFF08uri\uFF09\u3001\u4E00\u7EC4\u65AD\u8A00\uFF08predicates\uFF09\u548C\u4E00\u7EC4\u8FC7</p><p>\u6EE4\u5668\u7EC4\u6210\uFF08filters\uFF09\u3002filters \u4E0D\u662F\u5FC5\u9700\u53C2\u6570\u3002\uFF09</p><p>\u622A\u53D6\u8BF7\u6C42</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
      <span class="token comment"># \u8DEF\u7531\u6807\u8BC6\uFF08id\uFF1A\u6807\u8BC6\uFF0C\u5177\u6709\u552F\u4E00\u6027\uFF09   \u622A\u53D6\u8BF7\u6C42</span>
      <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> route_simple
        <span class="token comment"># \u76EE\u6807\u670D\u52A1\u5730\u5740\uFF08uri\uFF1A\u5730\u5740\uFF0C\u8BF7\u6C42\u8F6C\u53D1\u540E\u7684\u5730\u5740\uFF09</span>
        <span class="token key atrule">uri</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.zouwencong.com
        <span class="token comment"># \u8DEF\u7531\u6761\u4EF6\uFF08predicates\uFF1A\u65AD\u8A00\uFF0C\u5339\u914D HTTP \u8BF7\u6C42\u5185\u5BB9\uFF09</span>
        <span class="token key atrule">predicates</span><span class="token punctuation">:</span>
        <span class="token comment">## \u8F6C\u53D1\u5730\u5740\u683C\u5F0F\u4E3A uri/archive\uFF0C/str \u90E8\u5206\u4F1A\u88AB\u4E0B\u9762\u7684\u8FC7\u6EE4\u5668\u7ED9\u622A\u53D6\u6389</span>
        <span class="token punctuation">-</span> Path=/str/archive
        <span class="token key atrule">filters</span><span class="token punctuation">:</span>
        <span class="token comment">## \u622A\u53D6\u8DEF\u5F84\u4F4D\u6570</span>
        <span class="token punctuation">-</span> StripPrefix=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F6C\u53D1\u6307\u5B9A\u5730\u5740\uFF0C\u5E76\u4F20\u5165\u53C2\u6570</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
      <span class="token comment"># \u8DEF\u7531\u6807\u8BC6\uFF08id\uFF1A\u6807\u8BC6\uFF0C\u5177\u6709\u552F\u4E00\u6027\uFF09   \u8F6C\u53D1\u6307\u5B9A\u5730\u5740\u5E76\u4F20\u5165\u53C2\u6570</span>
      <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> route_uri
        <span class="token comment"># \u76EE\u6807\u670D\u52A1\u5730\u5740\uFF08uri\uFF1A\u5730\u5740\uFF0C\u8BF7\u6C42\u8F6C\u53D1\u540E\u7684\u5730\u5740\uFF09</span>
        <span class="token key atrule">uri</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">9000</span>
        <span class="token comment"># \u8DEF\u7531\u6761\u4EF6\uFF08predicates\uFF1A\u65AD\u8A00\uFF0C\u5339\u914D HTTP \u8BF7\u6C42\u5185\u5BB9\uFF09</span>
        <span class="token key atrule">predicates</span><span class="token punctuation">:</span>
        <span class="token comment">## \u5339\u914D GET \u8BF7\u6C42</span>
        <span class="token punctuation">-</span> Method=GET
        <span class="token comment"># \u8FC7\u6EE4\u5668\uFF08filters\uFF1A\u8FC7\u6EE4\u5668\uFF0C\u8FC7\u6EE4\u89C4\u5219\uFF09</span>
        <span class="token key atrule">filters</span><span class="token punctuation">:</span>
        <span class="token comment">## \u6DFB\u52A0\u6307\u5B9A\u53C2\u6570</span>
        <span class="token punctuation">-</span> AddRequestParameter=name<span class="token punctuation">,</span> zwc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F6C\u53D1\u6307\u5B9A\u670D\u52A1\uFF0C\u5E76\u4F20\u9012\u53C2\u6570</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
      <span class="token comment"># \u8DEF\u7531\u6807\u8BC6\uFF08id\uFF1A\u6807\u8BC6\uFF0C\u5177\u6709\u552F\u4E00\u6027\uFF09   \u8F6C\u53D1\u6307\u5B9A\u670D\u52A1\u5E76\u4F20\u5165\u53C2\u6570</span>
      <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> route_addRequestParameter
        <span class="token comment"># \u76EE\u6807\u670D\u52A1\u5730\u5740\uFF08uri\uFF1A\u5730\u5740\uFF0C\u8BF7\u6C42\u8F6C\u53D1\u540E\u7684\u5730\u5740\uFF09</span>
        <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//gateway<span class="token punctuation">-</span>service
        <span class="token comment"># \u8DEF\u7531\u6761\u4EF6\uFF08predicates\uFF1A\u65AD\u8A00\uFF0C\u5339\u914D HTTP \u8BF7\u6C42\u5185\u5BB9\uFF09</span>
        <span class="token key atrule">predicates</span><span class="token punctuation">:</span>
        <span class="token comment">## \u5339\u914D GET \u8BF7\u6C42</span>
        <span class="token punctuation">-</span> Method=GET
        <span class="token comment"># \u8FC7\u6EE4\u5668\uFF08filters\uFF1A\u8FC7\u6EE4\u5668\uFF0C\u8FC7\u6EE4\u89C4\u5219\uFF09</span>
        <span class="token key atrule">filters</span><span class="token punctuation">:</span>
        <span class="token comment">## \u6DFB\u52A0\u6307\u5B9A\u53C2\u6570</span>
        <span class="token punctuation">-</span> AddRequestParameter=age<span class="token punctuation">,</span> three
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7194\u65AD</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
      <span class="token comment"># \u8DEF\u7531\u6807\u8BC6\uFF08id\uFF1A\u6807\u8BC6\uFF0C\u5177\u6709\u552F\u4E00\u6027\uFF09   \u7194\u65AD</span>
      <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> route_hystrix
        <span class="token comment"># \u76EE\u6807\u670D\u52A1\u5730\u5740\uFF08uri\uFF1A\u5730\u5740\uFF0C\u8BF7\u6C42\u8F6C\u53D1\u540E\u7684\u5730\u5740\uFF09</span>
        <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//gateway<span class="token punctuation">-</span>service
        <span class="token comment"># \u8DEF\u7531\u6761\u4EF6\uFF08predicates\uFF1A\u65AD\u8A00\uFF0C\u5339\u914D HTTP \u8BF7\u6C42\u5185\u5BB9\uFF09</span>
        <span class="token key atrule">predicates</span><span class="token punctuation">:</span>
        <span class="token comment">## \u5339\u914D GET \u8BF7\u6C42</span>
        <span class="token punctuation">-</span> Method=GET
        <span class="token comment"># \u8FC7\u6EE4\u5668\uFF08filters\uFF1A\u8FC7\u6EE4\u5668\uFF0C\u8FC7\u6EE4\u89C4\u5219\uFF09</span>
        <span class="token key atrule">filters</span><span class="token punctuation">:</span>
        <span class="token comment">## \u6DFB\u52A0\u6307\u5B9A\u53C2\u6570</span>
        <span class="token punctuation">-</span> AddRequestParameter=age<span class="token punctuation">,</span> three
        <span class="token comment">## \u7194\u65AD</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Hystrix
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> fallbackcmd
            <span class="token comment">### fallback \u65F6\u8C03\u7528\u7684\u65B9\u6CD5 http://localhost:8000/fallback</span>
            <span class="token key atrule">fallbackUri</span><span class="token punctuation">:</span> forward<span class="token punctuation">:</span>/fallback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9650\u6D41</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
      <span class="token comment"># \u8DEF\u7531\u6807\u8BC6\uFF08id\uFF1A\u6807\u8BC6\uFF0C\u5177\u6709\u552F\u4E00\u6027\uFF09   \u9650\u6D41</span>
      <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> route_requestRateLimiter
        <span class="token comment"># \u76EE\u6807\u670D\u52A1\u5730\u5740\uFF08uri\uFF1A\u5730\u5740\uFF0C\u8BF7\u6C42\u8F6C\u53D1\u540E\u7684\u5730\u5740\uFF09</span>
        <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//gateway<span class="token punctuation">-</span>service
        <span class="token comment"># \u8DEF\u7531\u6761\u4EF6\uFF08predicates\uFF1A\u65AD\u8A00\uFF0C\u5339\u914D HTTP \u8BF7\u6C42\u5185\u5BB9\uFF09</span>
        <span class="token key atrule">predicates</span><span class="token punctuation">:</span>
        <span class="token comment">## \u5339\u914D GET \u8BF7\u6C42</span>
        <span class="token punctuation">-</span> Method=GET
        <span class="token comment"># \u8FC7\u6EE4\u5668\uFF08filters\uFF1A\u8FC7\u6EE4\u5668\uFF0C\u8FC7\u6EE4\u89C4\u5219\uFF09</span>
        <span class="token key atrule">filters</span><span class="token punctuation">:</span>
        <span class="token comment">## \u6DFB\u52A0\u6307\u5B9A\u53C2\u6570</span>
        <span class="token punctuation">-</span> AddRequestParameter=age<span class="token punctuation">,</span> three
        <span class="token comment">## \u9650\u6D41</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> RequestRateLimiter
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token comment">### \u9650\u6D41\u8FC7\u6EE4\u5668\u7684 Bean \u540D\u79F0</span>
            <span class="token key atrule">key-resolver</span><span class="token punctuation">:</span> <span class="token string">&#39;#{@uriKeyResolver}&#39;</span>
            <span class="token comment">### \u5E0C\u671B\u5141\u8BB8\u7528\u6237\u6BCF\u79D2\u5904\u7406\u591A\u5C11\u4E2A\u8BF7\u6C42</span>
            <span class="token key atrule">redis-rate-limiter.replenishRate</span><span class="token punctuation">:</span> <span class="token number">1</span>
            <span class="token comment">### \u7528\u6237\u5141\u8BB8\u5728\u4E00\u79D2\u949F\u5185\u5B8C\u6210\u7684\u6700\u5927\u8BF7\u6C42\u6570</span>
            <span class="token key atrule">redis-rate-limiter.burstCapacity</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5168\u5C40\u8FC7\u6EE4</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>      
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
      <span class="token comment"># \u8DEF\u7531\u6807\u8BC6\uFF08id\uFF1A\u6807\u8BC6\uFF0C\u5177\u6709\u552F\u4E00\u6027\uFF09   \u7EFC\u5408</span>
      <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> route_all
        <span class="token comment"># \u76EE\u6807\u670D\u52A1\u5730\u5740\uFF08uri\uFF1A\u5730\u5740\uFF0C\u8BF7\u6C42\u8F6C\u53D1\u540E\u7684\u5730\u5740\uFF09</span>
        <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//gateway<span class="token punctuation">-</span>service
        <span class="token comment"># \u8DEF\u7531\u6761\u4EF6\uFF08predicates\uFF1A\u65AD\u8A00\uFF0C\u5339\u914D HTTP \u8BF7\u6C42\u5185\u5BB9\uFF09</span>
        <span class="token key atrule">predicates</span><span class="token punctuation">:</span>
        <span class="token comment">## \u8F6C\u53D1\u5730\u5740\u683C\u5F0F\u4E3A uri/routeAll\uFF0C/all \u90E8\u5206\u4F1A\u88AB\u4E0B\u9762\u7684\u8FC7\u6EE4\u5668\u7ED9\u622A\u53D6\u6389</span>
        <span class="token punctuation">-</span> Path=/all/routeAll
        <span class="token comment">## \u5339\u914D GET \u8BF7\u6C42</span>
        <span class="token punctuation">-</span> Method=GET
        <span class="token comment"># \u8FC7\u6EE4\u5668\uFF08filters\uFF1A\u8FC7\u6EE4\u5668\uFF0C\u8FC7\u6EE4\u89C4\u5219\uFF09</span>
        <span class="token key atrule">filters</span><span class="token punctuation">:</span>
        <span class="token comment">## \u622A\u53D6\u8DEF\u5F84\u4F4D\u6570</span>
        <span class="token punctuation">-</span> StripPrefix=1
        <span class="token comment">## \u6DFB\u52A0\u6307\u5B9A\u53C2\u6570</span>
        <span class="token punctuation">-</span> AddRequestParameter=pass<span class="token punctuation">,</span> yes
        <span class="token comment">## \u7194\u65AD</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Hystrix
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> fallbackcmd
            <span class="token comment">### fallback \u65F6\u8C03\u7528\u7684\u65B9\u6CD5 http://localhost:8000/fallback</span>
            <span class="token key atrule">fallbackUri</span><span class="token punctuation">:</span> forward<span class="token punctuation">:</span>/fallback
        <span class="token comment">## \u9650\u6D41</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> RequestRateLimiter
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token comment">### \u9650\u6D41\u8FC7\u6EE4\u5668\u7684 Bean \u540D\u79F0</span>
            <span class="token key atrule">key-resolver</span><span class="token punctuation">:</span> <span class="token string">&#39;#{@uriKeyResolver}&#39;</span>
            <span class="token comment">### \u5E0C\u671B\u5141\u8BB8\u7528\u6237\u6BCF\u79D2\u5904\u7406\u591A\u5C11\u4E2A\u8BF7\u6C42</span>
            <span class="token key atrule">redis-rate-limiter.replenishRate</span><span class="token punctuation">:</span> <span class="token number">1</span>
            <span class="token comment">### \u7528\u6237\u5141\u8BB8\u5728\u4E00\u79D2\u949F\u5185\u5B8C\u6210\u7684\u6700\u5927\u8BF7\u6C42\u6570</span>
            <span class="token key atrule">redis-rate-limiter.burstCapacity</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[l];function p(c,u){return s(),a("div",null,i)}var r=n(t,[["render",p],["__file","SpringGateway.html.vue"]]);export{r as default};
