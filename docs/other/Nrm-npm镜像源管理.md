# Npm镜像源管理

## 介绍

`Nrm`是一个npm镜像源的管理工具，方便切换npm包下载的源码库，毕竟国内太难了。

## 安装

cmd命令中，执行<kbd>npm install -g nrm</kbd>，全局安装nrm

## 应用

常用命令：

``` shell
# 查看帮助命令
nrm -h
# 查看所有镜像源
nrm ls 
---
PS C:\Users\chengming> nrm ls

  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
---
# 切换镜像源
nrm use taobao
# 增加镜像源
nrm add <registry_name> <url>
# 测试镜像源延迟
nrm test <registry_name>
# 删除镜像源
nrm del <registry_name>
```

