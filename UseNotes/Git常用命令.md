# Git常用命令

## 基础命令

初始化本地仓库，在文件夹内使用

```shell
git init
```

### branch命令

#### 创建

* 创建分支，`git branch <branch_name>`
* 切换并创建，`git checkout -b <branch_name>`

#### 切换分支

* 切换，`git checkout <branch_name>`
* 同步一个远程新建分支，本地没有该分支，`git checkout --track origin/<branch_name>`

#### 删除分支

+ 删除本地分支，`git branch -d <branch_name>`
+ 删除远程分支，`git  branch -r -d origin/<branch_name>`



### stash命令

**TODO**

## 场景示例

### 远程关联

步骤：

+ 本地初始化，`git init`
+ 建立远程仓库关联，`git remote add origin [Url]` 
+ 本地分支关联远程，`git branch --set-upstream-to=orgin/<romote_branch>  local_branch`，或者直接推送并关联，`git push --set-upstream origin master` 
+ 