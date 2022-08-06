import{_ as e,o as a,c as n,e as i}from"./app.9b05354a.js";const d={},s=i(`<h1 id="minio" tabindex="-1"><a class="header-anchor" href="#minio" aria-hidden="true">#</a> Minio</h1><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h2><h3 id="docker\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#docker\u5B89\u88C5" aria-hidden="true">#</a> docker\u5B89\u88C5</h3><ul><li>\u4E0B\u8F7Ddocker\u955C\u50CF</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull minio/minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u542F\u52A8\u6302\u8F7D\u786C\u76D8</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -p <span class="token number">9000</span>:9000 --name minio <span class="token punctuation">\\</span>
  -v /mydata/minio/data:/data <span class="token punctuation">\\</span>
  -v /mydata/minio/config:/root/.minio <span class="token punctuation">\\</span>
  -d minio/minio server /data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8BBF\u95EE\u767B\u5F55web\u7BA1\u7406\u9875\u9762\uFF0C\u521D\u59CB<code>Access key</code>\u548C<code>Secret key</code>\u90FD\u662F<kbd>minioadmin</kbd></li></ul><h3 id="\u4E0A\u4F20\u53CA\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u53CA\u4F7F\u7528" aria-hidden="true">#</a> \u4E0A\u4F20\u53CA\u4F7F\u7528</h3><p>\u7BA1\u7406\u754C\u9762\u53F3\u4E0B\u89D2\u3010+\u3011\u65B0\u5EFAbucket\u6876\uFF0C\u4E4B\u540E\u53EF\u4EE5\u4E0A\u4F20\u6587\u4EF6\uFF0C\u4E0A\u4F20\u540E\uFF0C\u53EF\u4EE5<code>\u5206\u4EAB</code>\u3001<code>\u4E0B\u8F7D</code>\u3001<code>\u5220\u9664</code>\u6216\u8005<code>\u5728\u7EBF\u9884\u89C8</code></p><p>\u5BF9\u4E8E\u6876\u8FD8\u53EF\u4EE5\u8BBE\u7F6E<code>\u8BBF\u95EE\u6743\u9650</code></p><h2 id="api\u65B9\u5F0F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#api\u65B9\u5F0F\u4F7F\u7528" aria-hidden="true">#</a> API\u65B9\u5F0F\u4F7F\u7528</h2><p>TODO</p>`,13),c=[s];function o(r,l){return a(),n("div",null,c)}var h=e(d,[["render",o],["__file","Minio\u81EA\u5EFAOSS\u5BF9\u8C61\u5B58\u50A8.html.vue"]]);export{h as default};
