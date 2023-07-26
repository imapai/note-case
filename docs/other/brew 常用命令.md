# Homebrew 常用命令

## 系统

brew 帮助信息

```shell
brew help
```

子命令帮助信息

```shell
brew command -h 或 brew help command
```

查看配置信息

``` shell
brew config
```

更新 brew

``` shell
brew update
```

## 软件安装

搜索软件

```shell
brew search 软件名称
```

查看软件信息

``` shell
brew install 软件名称
```

查看可更新的软件列表

``` shell
brew outdated
```

更新软件

``` shell
brew upgrade #升级全部可更新软件
brew upgrade 软件名称
```

卸载软件

``` shell
brew uninstall 软件名称
brew uninstall --force #彻底卸载软件，包括旧版本
```

查看本机已安装软件

``` shell
brew list
```

清理软件

``` shell
brew cleanup -n #需要清理的列表
brew cleanup #清理所有过时软件
brew cleanup 软件名称 #清理指定过时软件
```

## 服务管理

正在运行的服务

``` shell
brew services list
```

启动指定软件

``` shell
brew services start 软件名称
```

停止指定软件

``` shell
brew services stop 软件名称
```

重启指定软件

``` shell
brew services restart 软件名称
```
