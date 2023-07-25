# Gitbook使用

## 介绍

百度百科：GitBook 是一个基于 Node.js 的命令行工具，可使用 [Github](https://baike.baidu.com/item/Github)/Git 和 [Markdown](https://baike.baidu.com/item/Markdown) 来制作精美的电子书。

个人理解：Gitbook可以使用Markdown的形式编写文档，它可以生成静态网页。按照规定指定文件的层级结构，可以通过命令自动生成类似博客网页，十分方便对笔记的查看。

## 安装

`前提`：需要node环境，nodejs安装略

```shell
$ npm install gitbook-cli -g
```

校验安装是否成功

```shell
$ gitbook -V
CLI version: 2.3.2
GitBook version: 3.2.3
```

## 创建项目

命令：

```shell
# 初始化当前文件夹为gitbook项目
$ gitbook init 
# 启动浏览器访问（若初次构建，项目目录自动构建_book文件夹）
$ gitbook server
# 构建web项目，_book文件夹
$ gitbook build
```

命令示例：

```shell
$ gitbook init
E:\document\notebook\gitbook-init>gitbook init
warn: no summary file in this book
info: create README.md
info: create SUMMARY.md
info: initialization is finished
===========================================
$ gitbook serve
E:\document\notebook\gitbook-init>gitbook serve
Live reload server started on port: 35729
Press CTRL+C to quit ...

info: 7 plugins are installed
info: loading plugin "livereload"... OK
info: loading plugin "highlight"... OK
info: loading plugin "search"... OK
info: loading plugin "lunr"... OK
info: loading plugin "sharing"... OK
info: loading plugin "fontsettings"... OK
info: loading plugin "theme-default"... OK
info: found 1 pages
info: found 0 asset files
info: >> generation finished with success in 2.0s !

Starting server ...
Serving book on http://localhost:4000
========================================
$ gitbook build
E:\document\notebook\gitbook-init>gitbook build
info: 7 plugins are installed
info: 6 explicitly listed
info: loading plugin "highlight"... OK
info: loading plugin "search"... OK
info: loading plugin "lunr"... OK
info: loading plugin "sharing"... OK
info: loading plugin "fontsettings"... OK
info: loading plugin "theme-default"... OK
info: found 1 pages
info: found 0 asset files
info: >> generation finished with success in 0.4s !
```

初始化后自动生成文件目录为：

```
- README.md
- SUMMARY.md
```

## 项目结构

```
.
├── book.json
├── README.md
├── SUMMARY.md
├── chapter-1/
|   ├── README.md
|   └── something.md
└── chapter-2/
    ├── README.md
    └── something.md
```

### book.json

书籍配置信息，详细参数参考[官方地址][Gitbook官网]

### Summary

```shell
# Summary

* [Introduction](README.md)
* [Part I](part1/README.md)
    * [Writing is nice](part1/writing.md)
    * [GitBook is nice](part1/gitbook.md)
* [Part II](part2/README.md)
    * [We love feedback](part2/feedback_please.md)
    * [Better tools for authors](part2/better_tools.md)
```

## 插件

如果要配置使用的插件可以在 book.json 文件中加入即可，比如我们添加 [plugin-github](https://links.jianshu.com/go?to=https%3A%2F%2Fplugins.gitbook.com%2Fplugin%2Fgithub)，我们在 book.json 中加入配置如下即可：

```json
{
    "plugins": [ "github" ],
    "pluginsConfig": {
        "github": {
            "url": "https://github.com/your/repo"
        }
    }
}
```

然后在终端输入 `gitbook install ./` 即可

插件一：

- [gitbook-plugin-summary](https://github.com/julianxhokaxhiu/gitbook-plugin-summary) 自动生成Summary目录

## 附录：

[Gitbook官网]:https://docs.gitbook.com/