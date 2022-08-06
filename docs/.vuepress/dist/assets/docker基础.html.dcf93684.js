import{_ as e,o as a,c as n,e as s}from"./app.9b05354a.js";const i={},d=s(`<h1 id="docker\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#docker\u57FA\u7840" aria-hidden="true">#</a> Docker\u57FA\u7840</h1><h2 id="docker\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#docker\u4ECB\u7ECD" aria-hidden="true">#</a> Docker\u4ECB\u7ECD</h2><p>Docker \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5E94\u7528\u5BB9\u5668\u5F15\u64CE\uFF0C\u8BA9\u5F00\u53D1\u8005\u53EF\u4EE5\u6253\u5305\u4ED6\u4EEC\u7684\u5E94\u7528\u4EE5\u53CA\u4F9D\u8D56\u5305\u5230\u4E00\u4E2A\u53EF\u79FB\u690D\u7684\u955C\u50CF\u4E2D\uFF0C\u7136\u540E\u53D1\u5E03\u5230\u4EFB\u4F55\u6D41\u884C\u7684 Linux \u6216 Windows \u673A\u5668\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u865A\u62DF\u5316\u3002\u5BB9\u5668\u662F\u5B8C\u5168\u4F7F\u7528\u6C99\u7BB1\u673A\u5236\uFF0C\u76F8\u4E92\u4E4B\u95F4\u4E0D\u4F1A\u6709\u4EFB\u4F55\u63A5\u53E3\u3002\u2014\u2014 by\u767E\u5EA6\u767E\u79D1</p><p>\u4E00\u4E2A\u5B8C\u6574\u7684 Docker \u6709\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206\u7EC4\u6210\uFF1A</p><ul><li><p>DockerClient \u5BA2\u6237\u7AEF</p></li><li><p>Docker Daemon \u5B88\u62A4\u8FDB\u7A0B</p></li><li><p>Docker Image \u955C\u50CF</p></li><li><p>DockerContainer \u5BB9\u5668</p></li></ul><p>\u901A\u8FC7 Docker \u5F15\u64CE\u5C06\u5171\u7528\u7CFB\u7EDF\u7684\u8D44\u6E90\uFF0C\u542F\u52A8\u5FEB\uFF0C\u5360\u7528\u4F53\u79EF\u5C0F\u3002Linux \u5BB9\u5668\u4E0D\u662F\u6A21\u62DF\u4E00\u4E2A\u5B8C\u6574\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u800C\u662F\u5BF9\u8FDB\u7A0B\u8FDB\u884C\u9694\u79BB\u3002\u6709\u4E86\u5BB9\u5668\uFF0C\u5C31\u53EF\u4EE5\u5C06\u8F6F\u4EF6\u8FD0\u884C\u6240\u9700\u7684\u6240\u6709\u8D44\u6E90\u6253\u5305\u5230\u4E00\u4E2A\u9694\u79BB\u7684\u5BB9\u5668\u4E2D\u3002\u5BB9\u5668\u4E0E\u865A\u62DF\u673A\u4E0D\u540C\uFF0C\u4E0D\u9700\u8981\u6346\u7ED1\u4E00\u6574\u5957\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u53EA\u9700\u8981\u8F6F\u4EF6\u5DE5\u4F5C\u6240\u9700\u7684\u5E93\u8D44\u6E90\u548C\u8BBE\u7F6E\u3002\u7CFB\u7EDF\u56E0\u6B64\u800C\u53D8\u5F97\u9AD8\u6548\u8F7B\u91CF\u5E76\u4FDD\u8BC1\u90E8\u7F72\u5728\u4EFB\u4F55\u73AF\u5883\u4E2D\u7684\u8F6F\u4EF6\u90FD\u80FD\u59CB\u7EC8\u5982\u4E00\u5730\u8FD0\u884C\u3002</p><h2 id="docker\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#docker\u7684\u5B89\u88C5" aria-hidden="true">#</a> Docker\u7684\u5B89\u88C5</h2><p>\u7CFB\u7EDF\u9700\u8981 CentOS6.6 \u4EE5\u4E0A\uFF0C\u5EFA\u8BAE CentOS7.x</p><p>\u66F4\u65B0 yum \u5DE5\u5177 <code>yum update</code></p><h4 id="_1\u3001\u5B89\u88C5\u5FC5\u8981\u7684\u7CFB\u7EDF\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5B89\u88C5\u5FC5\u8981\u7684\u7CFB\u7EDF\u5DE5\u5177" aria-hidden="true">#</a> 1\u3001\u5B89\u88C5\u5FC5\u8981\u7684\u7CFB\u7EDF\u5DE5\u5177</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2\u3001\u6DFB\u52A0\u963F\u91CCyum\u6E90" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u6DFB\u52A0\u963F\u91CCyum\u6E90" aria-hidden="true">#</a> 2\u3001\u6DFB\u52A0\u963F\u91CCyum\u6E90</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3\u3001\u66F4\u65B0yum\u8F6F\u4EF6\u5305\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u66F4\u65B0yum\u8F6F\u4EF6\u5305\u7D22\u5F15" aria-hidden="true">#</a> 3\u3001\u66F4\u65B0yum\u8F6F\u4EF6\u5305\u7D22\u5F15</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4\u3001\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u5B89\u88C5docker" aria-hidden="true">#</a> 4\u3001\u5B89\u88C5docker</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5\u3001\u67E5\u770B\u5B89\u88C5\u662F\u5426\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u67E5\u770B\u5B89\u88C5\u662F\u5426\u6210\u529F" aria-hidden="true">#</a> 5\u3001\u67E5\u770B\u5B89\u88C5\u662F\u5426\u6210\u529F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6\u3001\u542F\u52A8docker" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u542F\u52A8docker" aria-hidden="true">#</a> 6\u3001\u542F\u52A8docker</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_7\u3001\u914D\u7F6E\u963F\u91CC\u955C\u50CF\u52A0\u901F" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u914D\u7F6E\u963F\u91CC\u955C\u50CF\u52A0\u901F" aria-hidden="true">#</a> 7\u3001\u914D\u7F6E\u963F\u91CC\u955C\u50CF\u52A0\u901F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> - p /etc/docker
<span class="token function">vi</span> /etc/docker/daemon.json
<span class="token comment"># \u5C06\u4EE5\u4E0B\u5185\u5BB9\u5199\u5165</span>
<span class="token punctuation">{</span>
<span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://zkpixx1l.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#docker\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Docker\u5E38\u7528\u547D\u4EE4</h2><h4 id="_1\u3001\u955C\u50CF\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u955C\u50CF\u547D\u4EE4" aria-hidden="true">#</a> 1\u3001\u955C\u50CF\u547D\u4EE4</h4><p>1\uFF09<code>docker images</code> \u67E5\u770B\u672C\u5730\u7684\u955C\u50CF\u6587\u4EF6</p><p>REPOSITORY\uFF1A\u8868\u793A\u955C\u50CF\u7684\u4ED3\u5E93\u6E90</p><p>TAG\uFF1A\u955C\u50CF\u7684\u6807\u7B7E</p><p>IMAGE ID\uFF1A\u955C\u50CFID</p><p>CREATED\uFF1A\u955C\u50CF\u521B\u5EFA\u65F6\u95F4</p><p>SIZE\uFF1A\u955C\u50CF\u5927\u5C0F</p><p>2\uFF09<code>docker search</code> &lt;\u955C\u50CF\u540D\u79F0&gt; &lt;opition&gt;\uFF0C\u641C\u7D22\u955C\u50CF</p><p>opition \u8BF4\u660E\uFF1A</p><p>-s\uFF1A\u5217\u51FA\u6536\u85CF\u6570\u4E0D\u5C0F\u4E8E\u6307\u5B9A\u503C\u5F97\u955C\u50CF</p><p>3\uFF09<code>docker pull</code> \u955C\u50CF\u540D\u5B57\uFF1A\u7248\u672C\u53F7\uFF0C\u5982 docker pull centos:7.3 \uFF0C\u62C9\u53D6\u955C\u50CF\u5230\u672C\u5730</p><p>4\uFF09<code>docker rmi</code> \u955C\u50CF\u540D\u5B57 ID \uFF0C\u5220\u9664\u955C\u50CF\uFF0C\u5220\u9664\u5168\u90E8 <code>docker images -qa</code></p><h4 id="_2\u3001\u5BB9\u5668\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5BB9\u5668\u547D\u4EE4" aria-hidden="true">#</a> 2\u3001\u5BB9\u5668\u547D\u4EE4</h4><p>1\uFF09\u65B0\u5EFA\u5E76\u542F\u52A8\u5BB9\u5668 <code>docker run</code> [OPITION] image[COMMAND]</p><p>OPTIONS\u8BF4\u660E\uFF08\u5E38\u7528\uFF09\uFF1A\u6709\u4E9B\u662F\u4E00\u4E2A\u51CF\u53F7\uFF0C\u6709\u4E9B\u662F\u4E24\u4E2A\u51CF\u53F7</p><blockquote><p>--name=&quot;\u5BB9\u5668\u65B0\u540D\u5B57&quot;: \u4E3A\u5BB9\u5668\u6307\u5B9A\u4E00\u4E2A\u540D\u79F0\uFF1B</p><p>-d: \u540E\u53F0\u8FD0\u884C\u5BB9\u5668\uFF0C\u5E76\u8FD4\u56DE\u5BB9\u5668ID\uFF0C\u4E5F\u5373\u542F\u52A8\u5B88\u62A4\u5F0F\u5BB9\u5668\uFF1B</p><p>-i\uFF1A\u4EE5\u4EA4\u4E92\u6A21\u5F0F\u8FD0\u884C\u5BB9\u5668\uFF0C\u901A\u5E38\u4E0E -t \u540C\u65F6\u4F7F\u7528\uFF1B</p><p>-t\uFF1A\u4E3A\u5BB9\u5668\u91CD\u65B0\u5206\u914D\u4E00\u4E2A\u4F2A\u8F93\u5165\u7EC8\u7AEF\uFF0C\u901A\u5E38\u4E0E -i \u540C\u65F6\u4F7F\u7528\uFF1B</p><p>-P: \u968F\u673A\u7AEF\u53E3\u6620\u5C04\uFF1B</p><p>-p: \u6307\u5B9A\u7AEF\u53E3\u6620\u5C04\uFF0C\u6709\u4EE5\u4E0B\u56DB\u79CD\u683C\u5F0F</p><blockquote><p>ip:hostPort:containerPort</p><p>ip::containerPort</p><p>hostPort:containerPort</p><p>containerPort</p></blockquote></blockquote><ul><li>\u4EA4\u4E92\u5F0F\u521B\u5EFA <code>docker run</code> -it --name=\u5BB9\u5668\u547D\u4EE4 \u955C\u50CF\u540D\u79F0\uFF1ATAG /bin/bash\uFF0Ci\u4EE3\u8868\u8FD0\u884C\uFF0Ct\u4EE3\u8868\u4EA4\u4E92</li><li>\u5B88\u62A4\u5F0F\u521B\u5EFA <code>docker run</code> -di --name=\u5BB9\u5668\u547D\u4EE4 \u955C\u50CF\u540D\u79F0\uFF1ATAG</li></ul><p>2\uFF09\u67E5\u770B\u8FD0\u884C\u7684\u5BB9\u5668 <code>docker ps</code> [OPITION]\uFF0C-a \u67E5\u770B\u5168\u90E8\u5BB9\u5668</p><p>3\uFF09\u9000\u51FA\u5BB9\u5668</p><ul><li><code>exit</code>\uFF0C\u5BB9\u5668\u505C\u6B62\u9000\u51FA</li><li><code>ctrl+P+Q</code>\uFF0C\u5BB9\u5668\u4E0D\u505C\u6B62\u9000\u51FA</li></ul><p>4\uFF09\u542F\u52A8 <code>docker start</code> \u5BB9\u5668 ID \u6216\u8005\u5BB9\u5668\u540D</p><p>5\uFF09\u91CD\u542F\u5BB9\u5668 <code>docker restart</code> \u5BB9\u5668 ID \u6216\u8005\u5BB9\u5668\u540D</p><p>6\uFF09\u505C\u6B62\u5BB9\u5668 <code>docker stop</code> \u5BB9\u5668 ID \u6216\u8005\u5BB9\u5668\u540D\uFF0C\u5F3A\u5236\u505C\u6B62\u5BB9\u5668 <code>docker kill</code>\u5BB9\u5668 ID \u6216\u8005\u5BB9\u5668\u540D</p><p>7\uFF09\u5220\u9664\u5DF2\u505C\u6B62\u5BB9\u5668 <code>docker rm</code> \u5BB9\u5668 ID</p><p>\u91CD\u70B9\uFF1A</p><p>1\u3001\u5B88\u62A4\u5F0F\u542F\u52A8\u5BB9\u5668</p><p>2\u3001\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7 <code>docker logs</code> -f -t --tail \u5BB9\u5668 ID\uFF0C-t\u52A0\u5165\u65F6\u95F4\u6233\uFF0C-f\u8DDF\u968F\u6700\u65B0\u7684\u65E5\u5FD7\u6253\u5370 \uFF0C--tail\u663E\u793A\u591A\u5C11\u6761</p><p>3\u3001\u67E5\u770B\u5BB9\u5668\u5185\u8FD0\u884C\u7684\u8FDB\u7A0B <code>docker top</code> \u5BB9\u5668 ID</p><p>4\u3001\u67E5\u770B\u5BB9\u5668\u5185\u90E8\u7EC6\u8282 <code>docker inspect</code> \u5BB9\u5668 ID</p><p>5\u3001\u91CD\u65B0\u8FDB\u5165\u6B63\u5728\u8FD0\u884C\u5BB9\u5668 <code>docker attach</code> \u5BB9\u5668 ID \uFF0C\u6216\u8005 <code>docker exec</code> \u5BB9\u5668 ID\uFF0C\u8BF4\u660E\uFF1Aattach\u76F4\u63A5\u8FDB\u5165\u4E0D\u542F\u52A8\u65B0\u8FDB\u7A0B\uFF0Cexec \u6253\u5F00\u65B0\u7EC8\u7AEF\uFF0C\u5E76\u4E14\u542F\u52A8\u65B0\u8FDB\u7A0B</p><p>6\u3001\u4ECE\u5BB9\u5668\u5185\u62F7\u8D1D\u6587\u4EF6\u5230\u4E3B\u673A <code>docker cp</code> hello.txt mycentos7.6:/usr/local</p><p>7\u3001<code>docker run</code> -v \u5BBF\u4E3B\u76EE\u5F55\uFF1A\u5BB9\u5668\u76EE\u5F55\uFF0C\u53EF\u4EE5\u6302\u8F7D\u5BBF\u4E3B\u673A\u76EE\u5F55\u548C\u5BB9\u5668\u76EE\u5F55\uFF08\u64CD\u4F5C\u6587\u4EF6\u4E00\u81F4\uFF09</p><h2 id="\u90E8\u7F72\u5E38\u7528\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u5E38\u7528\u8F6F\u4EF6" aria-hidden="true">#</a> \u90E8\u7F72\u5E38\u7528\u8F6F\u4EF6</h2><h4 id="\u521B\u5EFAmysql5-7\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAmysql5-7\u547D\u4EE4" aria-hidden="true">#</a> \u521B\u5EFAmysql5.7\u547D\u4EE4</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -p <span class="token number">12345</span>:3306 --name<span class="token operator">=</span><span class="token string">&quot;alimysql&quot;</span> -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> -di mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u547D\u4EE4\u8BF4\u660E\uFF1A</p><blockquote><p>-p 12345:3306\uFF1A\u5C06\u4E3B\u673A\u768412345\u7AEF\u53E3\u6620\u5C04\u5230docker\u5BB9\u5668\u76843306\u7AEF\u53E3\u3002</p><p>--name mysql\uFF1A\u8FD0\u884C\u670D\u52A1\u540D\u5B57</p><p>-v /zzyyuse/mysql/conf:/etc/mysql/conf.d \uFF1A\u5C06\u4E3B\u673A/zzyyuse/mysql\u5F55\u4E0B\u7684conf/my.cnf \u6302\u8F7D\u5230\u5BB9\u5668\u7684 /etc/mysql/conf.d</p><p>-v /zzyyuse/mysql/logs:/logs\uFF1A\u5C06\u4E3B\u673A/zzyyuse/mysql\u76EE\u5F55\u4E0B\u7684 logs \u76EE\u5F55\u6302\u8F7D\u5230\u5BB9\u5668\u7684 /logs\u3002</p><p>-v /zzyyuse/mysql/data:/var/lib/mysql \uFF1A\u5C06\u4E3B\u673A/zzyyuse/mysql\u76EE\u5F55\u4E0B\u7684data\u76EE\u5F55\u6302\u8F7D\u5230\u5BB9\u5668\u7684 /var/lib/mysql</p><p>-e MYSQL_ROOT_PASSWORD=123456\uFF1A\u521D\u59CB\u5316 root \u7528\u6237\u7684\u5BC6\u7801\u3002</p><p>-d mysql:5.6 : \u540E\u53F0\u7A0B\u5E8F\u8FD0\u884Cmysql5.6</p></blockquote><h4 id="\u90E8\u7F72tomcat9" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72tomcat9" aria-hidden="true">#</a> \u90E8\u7F72tomcat9</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull tomcat:9

<span class="token function">docker</span> run -di --name<span class="token operator">=</span>alitomcat -p <span class="token number">7070</span>:8080 -v /mydata/tomcat/webapps:/usr/local/tomcat/webapps tomcat:9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u547D\u4EE4\u8BF4\u660E\uFF1A</p><p>-v \u6302\u8F7D\u76EE\u5F55</p><p>\u5176\u4ED6\u540C\u4E0A\u90E8\u7F72 mysql</p><h4 id="\u90E8\u7F72nginx" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72nginx" aria-hidden="true">#</a> \u90E8\u7F72Nginx</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx:1.17

<span class="token function">docker</span> run -di --name<span class="token operator">=</span>alinginx -p <span class="token number">808</span>:80 nginx:1.17
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5EFA\u8BAE\u4F7F\u7528</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7CFB\u7EDF\u6587\u4EF6\u6302\u8F7D\uFF0C\u521B\u5EFAnginx</span>
<span class="token function">docker</span> run -di --name<span class="token operator">=</span>alinginx -p <span class="token number">808</span>:80 

-v /mydata/nginx/conf/nginx.conf:/etc/nginx/nginx.conf

-v /mydata/nginx/log:/var/log/nginx

-v /mydata/nginx/html:/usr/share/nginx/html

nginx:1.17
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u90E8\u7F72redis" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72redis" aria-hidden="true">#</a> \u90E8\u7F72Redis</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull redis:5.0

<span class="token function">docker</span> run -di --name<span class="token operator">=</span>aliredis -p <span class="token number">6379</span>:6379 redis:5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u90E8\u7F72mongodb" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72mongodb" aria-hidden="true">#</a> \u90E8\u7F72MongoDB</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull mongo:4.0

<span class="token function">docker</span> container run -p <span class="token number">27017</span>:27017 --mount <span class="token assign-left variable">source</span><span class="token operator">=</span>mongodb,destination<span class="token operator">=</span>/var/lib/mongodb --name alimongo -di mongo:4.0 --auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u660E\uFF1A</p><blockquote><ol><li><p>docker container run \uFF1A\u542F\u52A8\u4E00\u4E2A\u5BB9\u5668\u5E76\u8FD0\u884C\u3002\u4EE5\u524D\u7248\u672C\u76F4\u63A5\u7528docker run\uFF0C\u540E\u6765\u6211\u4F30\u8BA1\u662F\u4E3A\u4E86\u66F4\u7EC6\u5206\u804C\u8D23\uFF0Cdocker\u6DFB\u52A0\u4E86manager command\uFF0C\u5373docker container\uFF0Cdocker image\u7B49\u7B49\u3002\u8FD9\u6837\u7B26\u5408\u4E86\u6A21\u5757\u5316\u7684\u601D\u60F3\uFF0C\u804C\u8D23\u66F4\u660E\u786E\uFF08\u4E2A\u4EBA\u60F3\u6CD5\uFF09\u3002</p></li><li><p>-p 27017:27017 \uFF1A\u5BBF\u4E3B\u673A\u768427017\u7AEF\u53E3\u4E0E\u5BB9\u5668\u768427017\u7AEF\u53E3\u8FDB\u884C\u7ED1\u5B9A\u3002\u8FD9\u6837\u5916\u90E8\u53EF\u4EE5\u901A\u8FC7\u8BBF\u95EE\u5BBF\u4E3B\u673A\u768427017\u7AEF\u53E3\u8FDB\u800C\u8BBF\u95EE\u5230\u5BB9\u5668\u4E2D\u768427017\u7AEF\u53E3\u3002</p></li><li><p>--mount source=mysql,destination=/var/lib/mongodb \uFF1A\u6570\u636E\u5377\u8FDB\u884C\u7ED1\u5B9A\u3002source\u662F\u6307\u7684\u4E0A\u9762\u6211\u4EEC\u5728\u5BBF\u4E3B\u673A\u521B\u5EFA\u51FA\u6765\u7684volume\uFF0Cdestination\u5373\u6211\u4EEC\u8981\u4E0E\u5BB9\u5668\u4E2D\u7684\u54EA\u4E2A\u6570\u636E\u5377\u8FDB\u884C\u7ED1\u5B9A\u3002\u5F53\u7136\u7ED1\u5B9A\u6570\u636E\u5377\u8FD8\u53EF\u4EE5\u7528-v \u5BBF\u4E3B\u673A\u6570\u636E\u5377:\u5BB9\u5668\u6570\u636E\u5377\u8FDB\u884C\u7ED1\u5B9A\u3002</p></li><li><p>-v /etc/localtime:/etc/localtime \uFF1A\u8BBE\u5B9A\u5BB9\u5668\u7684\u65F6\u95F4\u4E0E\u5BBF\u4E3B\u673A\u4FDD\u6301\u4E00\u81F4\u3002</p></li><li><p>--name alimongo \uFF1A\u8BBE\u7F6E\u5BB9\u5668\u7684\u540D\u79F0 alimongo \u3002\u6CE8\u610F\uFF1A\u5BB9\u5668\u540D\u79F0\u662F\u552F\u4E00\u7684\u3002</p></li><li><p>-d mongo \uFF1A\u544A\u8BC9\u5BB9\u5668\u5728\u540E\u53F0\u5B88\u62A4\u8FDB\u7A0B\u65B9\u5F0F\u8FD0\u884C mongo \u3002</p></li><li><p>-auth \u9700\u8981\u5BC6\u7801\u8FDE\u63A5\u5BB9\u5668</p></li></ol></blockquote><p>6\uFF09Elasticsearch</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -e <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms256m -Xmx256m&quot;</span> -d -p <span class="token number">9200</span>:9200 -p <span class="token number">9300</span>:9300 --name alies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8FC1\u79FB\u4E0E\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u8FC1\u79FB\u4E0E\u5907\u4EFD" aria-hidden="true">#</a> \u8FC1\u79FB\u4E0E\u5907\u4EFD</h2><p>\u6253\u5305\u672C\u5730\u5BB9\u5668\u4E3A\uFF0C\u955C\u50CF</p><p><code>docker commit</code> \u5BB9\u5668\u540D \u955C\u50CF\u540D\uFF0C\u6BD4\u5982 <code>docker commit alinginx alinginx_i</code></p><p>\u4FDD\u5B58\u955C\u50CF,\u5230\u672C\u5730\u538B\u7F29\u5305</p><p><code>docker save -o alinginx.tar alinginx_i</code>\uFF0C\u8BF4\u660E\uFF1A-o \u8F93\u51FA\u6587\u4EF6</p><p>\u901A\u8FC7 tar \u5305\u6062\u590D\u955C\u50CF\uFF0C<code>docker load -i alinginx.tar</code>\uFF0C\u8BF4\u660E\uFF1A-i \u8F93\u5165\u6587\u4EF6</p><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h2><p>\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u4F7F\u7528\u57FA\u4E8E\u57FA\u7840\u955C\u50CF\uFF08\u5982centos\uFF09\u521B\u5EFA\uFF0C\u5305\u542B\u5176\u4ED6\u8F6F\u4EF6\u7684\u5BB9\u5668\uFF0C\u5982\u4F7F\u7528 Dockerfile \u521B\u5EFA\u5305\u542B jdk1.8 \u7684 centos7\u3002</p><h2 id="\u642D\u5EFA\u79C1\u6709\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u79C1\u6709\u4ED3\u5E93" aria-hidden="true">#</a> \u642D\u5EFA\u79C1\u6709\u4ED3\u5E93</h2><p>1\u3001\u62C9\u53D6\u955C\u50CF <code>docker pull registry:2.7</code></p><p>2\u3001\u521B\u5EFA registry \u5BB9\u5668\uFF0Cdocker run -di --name=aliregistry -p 5000:5000 registry:2.7</p><p>3\u3001\u67E5\u770B\u521B\u5EFA\u7ED3\u679C\uFF0C\u6D4F\u89C8\u5668\u6253\u5F00 ip:5000/v2/_catalog \uFF0C\u56DE\u663E Json \u5B57\u7B26\u4E32</p><p>4\u3001\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u8BA9 Docker \u4FE1\u4EFB\uFF0Cvi /etc/docker/daemon.json</p><p>\u6DFB\u52A0 Json \u5185\u5BB9</p><p>&quot;insecure-registtries&quot;:[&quot;amfun.top:5000&quot;]</p><p>5\u3001\u91CD\u542Fdocker\u670D\u52A1\uFF0Csystemctl restart docker</p><h2 id="\u4E0A\u4F20\u5230\u79C1\u6709\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u5230\u79C1\u6709\u4ED3\u5E93" aria-hidden="true">#</a> \u4E0A\u4F20\u5230\u79C1\u6709\u4ED3\u5E93</h2><p>1\u3001<code>docker tag jdk1.8 amfun.top:5000/jdk1.8</code>\uFF0C\u8BF4\u660E\u6807\u8BB0\u6B64\u955C\u50CF\u4E3A\u79C1\u6709\u4ED3\u5E93\u955C\u50CF\uFF0C\u51C6\u5907\u4E0A\u4F20</p><p>2\u3001<code>docker push amfun.top:5000/jdk1.8</code>\uFF0C\u4E0A\u4F20\u5230\u8FDC\u7AEF</p><p>3\u3001\u67E5\u770B amfun.top:5000/v2/_catalog</p><p>\u4E0B\u8F7D\uFF1A</p><p>\uFF081\uFF09\u9700\u8981\u914D\u7F6E <code>vi /etc/docker/daemon.json </code>,\u6DFB\u52A0\u79C1\u670D\u914D\u7F6E\u4FE1\u606F</p><p>\uFF082\uFF09\u91CD\u542F \u4F7F\u7528 <code>docker pull amfun.top:5000/\u955C\u50CF\u540D</code>\uFF0C\u6CE8\u610F\uFF1A\u9700\u8981\u586B\u5199\u955C\u50CF\u5730\u5740</p><p>\u200B</p>`,102),o=[d];function c(r,l){return a(),n("div",null,o)}var t=e(i,[["render",c],["__file","docker\u57FA\u7840.html.vue"]]);export{t as default};
