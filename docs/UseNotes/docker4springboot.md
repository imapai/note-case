# 制作一个简单的 docker 镜像

## 制作 Docker 镜像练习

使用Docker部署Springboot项目，将项目制作成镜像，把镜像上传到Harbor私有仓库

### 制作镜像

1.将Springboot项目打包成可以运行的jar文件

2.新建一个目录/docker/springboot4docker，进入该目录

3.在新建目录中编写Dockerfile

``` dockerfile
# 基础镜像使用java8
FROM java:8

# 指定临时文件目录为/tmp
VOLUME /tmp

# 将jar包添加到容器并更名app.jar
ADD springboot4docker-demo.jar app.jar

RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","app.jar","> /log/app.log"]
```

4.把jar包复制一份到上述文件目录内

5.在命令行内执行docker build指令

``` 
cd到上述文件目录
docker build -t springboot4docker:1.0.1 .
解释：
	-t 指定镜像image的tag名称
	. 当前目录文件
	使用 docker images查看制作好的镜像
```

### 运行制作的镜像到Docker容器

```
docker run -d --name springboot4docker-test -p 8002:8001 springboot4docker:1.0.1
解释：
	-d 后台运行
	--name 容器的别名
	-p 端口映射
```

如果是在本地，现在可以访问测试。

### 上传镜像到Harbor

1.先登录到仓库

> docker login [IP地址]

2.打tag

``` 
docker tag springboot4docker-test:1.0.1 [IP]/test/springboot4docker:1.0.1
解释：
	tag 打tag命令
	springboot4docker-test:1.0.1 本地镜像tag
	test Harbor仓库的项目地址名称
	springboot4docker:1.0.1 远程Harbor仓库中的tag名称
```

3.上传到Harbor仓库

``` 
docker push [IP]/test/springboot4docker:1.0.1
```

end