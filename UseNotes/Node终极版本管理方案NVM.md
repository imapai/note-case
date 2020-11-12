# Nodejs版本管理工具Nvm

经常遇到的问题就是，为了熟悉新的Nodejs特性需要更新Nodejs版本，但是开发有不需要高版本，而且卸载Node重新安装很麻烦（我也不知道为啥卸载不掉）。最后终于在一顿摸索之后发现神器，Nvm版本管理工具（已安装就解决我卸载不掉旧版本的问题，舒服了）。下面介绍Nvm安装、配置、使用。

## 安装

通过github上的仓库进行下载，[windows版下载地址](https://github.com/coreybutler/nvm-windows/releases)

## 配置

### 修改nvm配置

安装目录的setting.txt文件如下：

``` javascript
# nvm安装目录
root: D:\software\nvm
# nodejs安装目录
path: F:\environment\nodejs
arch: 64
proxy: none
# 指定镜像源
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/

```

### 环境变量设置

如安装未自动配置环境变量，手动配置如下：

- 配置 NVM_HOME：`D:\software\nvm` ，nvm安装目录
- 配置NVM_SYMLINK: `F:\environment\nodejs`，nodejs目录

## 常用命令

- nvm install [version]，安装指定版本nodejs
- nvm uninstall [version]，删除指定版本
- nvm use [version]，使用什么版本nodejs
- nvm list，列出本地安装过的版本并展示目前正在使用
- nvm current，显示当前版本