import{_ as n,o as a,c as s,e as t}from"./app.9b05354a.js";var e="/note-case/assets/image-20201010173127061.2854c172.png",p="/note-case/assets/image-20201010173940191.0333187a.png",c="/note-case/assets/image-20201010174329915.212f14d4.png",l="/note-case/assets/image-20201010174516378.8c9025b9.png",i="/note-case/assets/image-20201010175152155.f6f852f8.png";const o={},u=t(`<h1 id="idea\u63D2\u4EF6\u4E4Bdocker" tabindex="-1"><a class="header-anchor" href="#idea\u63D2\u4EF6\u4E4Bdocker" aria-hidden="true">#</a> IDEA\u63D2\u4EF6\u4E4BDocker</h1><h2 id="\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907" aria-hidden="true">#</a> \u51C6\u5907</h2><ul><li><p>Idea\u5B89\u88C5Docker\u63D2\u4EF6</p></li><li><p>\u5B89\u88C5docker</p></li></ul><h2 id="\u5F00\u542Fdocker\u8FDC\u7A0B\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542Fdocker\u8FDC\u7A0B\u8BBF\u95EE" aria-hidden="true">#</a> \u5F00\u542FDocker\u8FDC\u7A0B\u8BBF\u95EE</h2><p>\u5728root\u8D26\u53F7\u4E0B\u4FEE\u6539docker\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /lib/systemd/system/docker.service

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+`" alt="image-20201010173127061"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u6CE8\u91CAExecStart\u884C

\u6DFB\u52A0 <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock\uFF08centos7\u7CFB\u7EDF\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5982\u679C\u662Fcentos7\u4EE5\u4E0B\u7684\u8BDD\uFF0C\u5C31\u628AExecStart\u4FEE\u6539\u4E3A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2375
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u4FEE\u6539\uFF0C\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl reload daemon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u91CD\u542Fdocker\u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> <span class="token function">docker</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u672C\u5730\u8FDE\u63A5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> http://localhost:2375/version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u4E0B\uFF0C\u8F93\u51FA\uFF1A</p><p><img src="`+p+'" alt="image-20201010173940191"></p><h2 id="\u914D\u7F6E\u8FDE\u63A5\u8FDC\u7A0Bdocker" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8FDE\u63A5\u8FDC\u7A0Bdocker" aria-hidden="true">#</a> \u914D\u7F6E\u8FDE\u63A5\u8FDC\u7A0BDocker</h2><p>\u5728idea\u4E2D\u6DFB\u52A0\u8FDC\u7A0Bdocker\u7684\u8BBF\u95EE\u5730\u5740</p><p><img src="'+c+'" alt="image-20201010174329915"></p><p>\u4E4B\u540E\u4FBF\u53EF\u4EE5\u5728idea\u4E3B\u9875\u770B\u5230docker\u4FE1\u606F\uFF0C\u53EF\u4EE5\u770B\u5230docker\u4E2D\u7684\u5BB9\u5668\u548C\u955C\u50CF\u6587\u4EF6\uFF0C\u53EF\u89C6\u5316\u7684\u5BF9\u5BB9\u5668\u6216\u8005\u955C\u50CF\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5341\u5206\u65B9\u4FBF\u4E0D\u5728\u6F14\u793A\u3002</p><p><img src="'+l+'" alt="image-20201010174516378"></p><h2 id="\u521B\u5EFA\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a> \u521B\u5EFA\u5BB9\u5668</h2><p>\u901A\u8FC7\u53F3\u952E\u955C\u50CF\u6587\u4EF6\uFF0C\u9009\u62E9\u521B\u5EFA\u5BB9\u5668\uFF0C\u7B80\u5355\u914D\u7F6E\u5373\u53EF</p><p><img src="'+i+`" alt="image-20201010175152155"></p><h2 id="\u4E00\u952E\u90E8\u7F72\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E00\u952E\u90E8\u7F72\u5E94\u7528" aria-hidden="true">#</a> \u4E00\u952E\u90E8\u7F72\u5E94\u7528</h2><h3 id="\u4F7F\u7528maven\u63D2\u4EF6\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528maven\u63D2\u4EF6\u65B9\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528Maven\u63D2\u4EF6\u65B9\u5F0F</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u5F15\u7528\u6211\u4EEC\u7684\u9879\u76EE\u540D\u5B57 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>finalName</span><span class="token punctuation">&gt;</span></span>\${project.artifactId}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>finalName</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>


            <span class="token comment">&lt;!--\u4F7F\u7528docker-maven-plugin\u63D2\u4EF6--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.spotify<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>docker-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--\u5C06\u63D2\u4EF6\u7ED1\u5B9A\u5728\u67D0\u4E2Aphase\u6267\u884C--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>build-image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token comment">&lt;!--\u7528\u6237\u53EA\u9700\u6267\u884Cmvn package \uFF0C\u5C31\u4F1A\u81EA\u52A8\u6267\u884Cmvn docker:build--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>package<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>build<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--\u6307\u5B9A\u751F\u6210\u7684\u955C\u50CF\u540D,\u8FD9\u91CC\u662F\u6211\u4EEC\u7684\u4F5C\u8005\u540D+\u9879\u76EE\u540D--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>imageName</span><span class="token punctuation">&gt;</span></span>cainiao/\${project.artifactId}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>imageName</span><span class="token punctuation">&gt;</span></span>

                    <span class="token comment">&lt;!--\u6307\u5B9A\u6807\u7B7E \u8FD9\u91CC\u6307\u5B9A\u7684\u662F\u955C\u50CF\u7684\u7248\u672C\uFF0C\u6211\u4EEC\u9ED8\u8BA4\u7248\u672C\u662Flatest--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>imageTags</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>imageTag</span><span class="token punctuation">&gt;</span></span>latest<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>imageTag</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>imageTags</span><span class="token punctuation">&gt;</span></span>

                    <span class="token comment">&lt;!--\u6307\u5B9A\u57FA\u7840\u955C\u50CFjdk1.8--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>baseImage</span><span class="token punctuation">&gt;</span></span>java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>baseImage</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--
                    \u955C\u50CF\u5236\u4F5C\u4EBA\u672C\u4EBA\u4FE1\u606F
                    &lt;maintainer&gt;bruceliu@email.com&lt;/maintainer&gt;
                    --&gt;</span>
                    <span class="token comment">&lt;!--\u5207\u6362\u5230ROOT\u76EE\u5F55--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>workdir</span><span class="token punctuation">&gt;</span></span>/ROOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>workdir</span><span class="token punctuation">&gt;</span></span>

                    <span class="token comment">&lt;!--\u67E5\u770B\u6211\u4EEC\u7684java\u7248\u672C--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cmd</span><span class="token punctuation">&gt;</span></span>[&quot;java&quot;, &quot;-version&quot;]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cmd</span><span class="token punctuation">&gt;</span></span>

                    <span class="token comment">&lt;!--\${project.build.finalName}.jar\u662F\u6253\u5305\u540E\u751F\u6210\u7684jar\u5305\u7684\u540D\u5B57--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entryPoint</span><span class="token punctuation">&gt;</span></span>[&quot;java&quot;, &quot;-jar&quot;, &quot;/\${project.build.finalName}.jar&quot;]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entryPoint</span><span class="token punctuation">&gt;</span></span>

                    <span class="token comment">&lt;!--\u6307\u5B9A\u8FDC\u7A0B docker api\u5730\u5740--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dockerHost</span><span class="token punctuation">&gt;</span></span>http://192.168.29.133:2375<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dockerHost</span><span class="token punctuation">&gt;</span></span>

                    <span class="token comment">&lt;!-- \u8FD9\u91CC\u662F\u590D\u5236 jar \u5305\u5230 docker \u5BB9\u5668\u6307\u5B9A\u76EE\u5F55\u914D\u7F6E --&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>targetPath</span><span class="token punctuation">&gt;</span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>targetPath</span><span class="token punctuation">&gt;</span></span>
                            <span class="token comment">&lt;!--jar \u5305\u6240\u5728\u7684\u8DEF\u5F84  \u6B64\u5904\u914D\u7F6E\u7684 \u5373\u5BF9\u5E94 target \u76EE\u5F55--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">&gt;</span></span>\${project.build.directory}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">&gt;</span></span>
                            <span class="token comment">&lt;!--\u7528\u4E8E\u6307\u5B9A\u9700\u8981\u590D\u5236\u7684\u6587\u4EF6 \u9700\u8981\u5305\u542B\u7684 jar\u5305 \uFF0C\u8FD9\u91CC\u5BF9\u5E94\u7684\u662F Dockerfile\u4E2D\u6DFB\u52A0\u7684\u6587\u4EF6\u540D\u3000--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>\${project.build.finalName}.jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728Maven\u4E2D\u6E05\u7406clean\u4E4B\u540E\u91CD\u65B0\u6253\u5305\u5C31\u4F1A\u5728\u4F60\u7684\u8FDC\u7A0Bdocker\u7684images\u4E2D\u663E\u793A\u4F60\u6253\u5305\u7684\u6587\u4EF6\u3002</p><h3 id="\u4F7F\u7528dockerfile\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528dockerfile\u65B9\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528dockerfile\u65B9\u5F0F</h3>`,31),d=[u];function r(k,g){return a(),s("div",null,d)}var m=n(o,[["render",r],["__file","IDEA\u7684dockers\u63D2\u4EF6\u4F7F\u7528.html.vue"]]);export{m as default};
