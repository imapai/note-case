# Oh-My-Zsh

## 介绍

通常情况下，linux默认的shell解释器是`bash`，通过命令`echo $SHELL`查看当前系统使用的shell解释器

`cat /etc/shells`查看目前系统安装的shell解释器，比如：

> /bin/sh
> /bin/bash
> /bin/rbash
> /bin/dash
> /usr/bin/tmux
> /usr/bin/screen
> /bin/zsh
> /usr/bin/zsh

`zsh`是shell解释器的一种，几乎完美兼容bash命令，`zsh`实现更强大的功能和炫酷的命令页面，`oh-my-zsh`是一个让你快速、简单配置你的`zsh`的开源项目，包含有很多的[主题](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)和许多的插件

## 安装

### 安装 zsh

> Redhat Linux，执行：sudo yum install zsh
> Ubuntu Linux，执行：sudo apt-get install zsh

安装完成后设置当前用户使用 zsh：`chsh -s /bin/zsh`，查看当前shell解释器`ech $SHELL`

### 安装 oh-my-zsh

方式一：官方推荐命令

``` shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

如果访问有问题，推荐使用方式二：

``` shell
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

重启终端就会看到命令行主题发生变化。

## 配置

``` shell
cd ~
la
--.zshrc #zsh主要配置文件
--.oh-my-zsh #
```

### 设置主题风格

``` shell
vi ~/.zshrc
ZSH_THEME=”robbyrussell” #修改其他主题名称即可
```

`cd ~/.oh-my-zsh/themes`查看包含的主题，[预览主题效果](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

### 插件安装

#### 语法高亮插件 

zsh-syntax-highlighting

```shell
# 执行下面指令自动安装
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

#### 自动补全插件 

zsh-autosuggestions

```shell
# 执行下面指令自动安装
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

#### 启用插件

```shell
# 编辑~/.zshrc   
vim ~/.zshrc    
# 在plugins后括号里添加安装的插件名字
plugins=( git 
            autojump 
            zsh-autosuggestions 
            zsh-syntax-highlighting
            )
# 最后刷新
source ~/.zshrc    
```