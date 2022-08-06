# Git配置多个远程仓库

背景：国内的git仓库网络比较好，但是Github却是活跃人数最多的开放平台网络不是很好，或者需要重码云迁移到Github。

## 配置一

分别关联两个不同git远程仓库

``` shell
git remote add origin https://github.com/USERNAME/REPO1.git
git remote add gitee https://gitee.com/USERNAME/REPO2.git

git push origin master
git push gitee master
```

这种方法缺点是需要每次推送，分别向两个仓库推送，略显麻烦。



## 配置二

多地址远程仓库，分别给 origin 设两个地址：

``` shell
git remote set-url origin --add https://github.com/USERNAME/REPO1.git
git remote set-url origin --add https://github.com/USERNAME/REPO2.git
```

直接 git push 就可以同时推送两个远程仓库。

当然 URL 和 repo 不一定非要是 GitHub 上的，具有两个 url 的 remote 也不一定要是 origin，比如可以设置成 all。

在 .git/config 里得到

```yaml
...
[remote "origin"]
    url = https://USERNAME@github.com/USERNAME/REPO1.git
    url = https://USERNAME@github.com/USERNAME/REPO2.git
...
[branch "master"]
    remote = origin
...
```

**提醒**：配置一 可以选择任一仓库进行 pull，而配置二缺默认只能从 config 中的第一个 url 内的仓库 pull 代码。



## 只用于 push 的备份 repo

你想从 repo1 pull，但是 push 的时候要推送到 repo1 和 repo2。



```bash
git remote set-url origin --add https://github.com/USERNAME/REPO1.git
git remote set-url origin --push --add https://example.com/USERNAME/REPO2.git
```

在 .git/config 里得到



```yaml
...
[remote "origin"]
    url = https://USERNAME@github.com/USERNAME/REPO1.git
    pushurl = https://USERNAME@example.com/USERNAME/REPO2.git
...
[branch "master"]
    remote = origin
...
```

然后 `git push origin master` 就会同时提交到两个 repo，而 `git pull origin master` 只会从 repo1 里取得更新。

