# Gitbook替代者docsify

GItbook因为一些原因已经在2018年停止更新，我个人的使用中是遇到很多的问题，有一些奇怪的Bug，所以决定放弃它寻找类似的产品替代它。也就是今天要介绍的主角[docsify](https://github.com/docsifyjs/docsify)。

## 满足需求

个人的诉求是平时喜欢使用Markdown写文档或者记笔记，文档存放在Git仓库，通过码云的静态网页部署功能将文档渲染到网页，所以需要将Markdown自动转换为网页。

## 快速开始

推荐全局安装 `docsify-cli` 工具

``` javascript
npm i docsify-cli -g
```

## 初始化配置

在当前目录初始化

``` javascript
// 在当前目录的doc文件夹初始化
docsify init ./doc 
// 在当前文件夹初始化
docsify init
```

## 简单配置

主要在 `index.html` 中配置一些个性化，使用以下配置满足基本需求

``` javascript
 <script>
    window.$docsify = {
      loadSidebar: true, // 加载侧边栏
      subMaxLevel: 3, // 最大目录数目
      alias: {
      '/.*/_sidebar.md': '/_sidebar.md' // 指定侧边栏配置文件，自动生成
      },
      name: '',
      repo: ''
    }
  </script>
```

## 小工具

自动生成目录文件，github地址：https://github.com/imapai/Docsify-Build-Sidebar

请参考[官方文档](https://docsify.js.org/#/zh-cn/)