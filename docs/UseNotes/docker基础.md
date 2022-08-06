# Docker基础

## Docker介绍

Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中，然后发布到任何流行的  Linux 或 Windows 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。—— by百度百科

一个完整的 Docker 有以下几个部分组成：

- DockerClient 客户端

- Docker Daemon 守护进程

- Docker Image 镜像

- DockerContainer 容器 

通过 Docker 引擎将共用系统的资源，启动快，占用体积小。Linux 容器不是模拟一个完整的操作系统，而是对进程进行隔离。有了容器，就可以将软件运行所需的所有资源打包到一个隔离的容器中。容器与虚拟机不同，不需要捆绑一整套操作系统，只需要软件工作所需的库资源和设置。系统因此而变得高效轻量并保证部署在任何环境中的软件都能始终如一地运行。

## Docker的安装

系统需要 CentOS6.6  以上，建议 CentOS7.x

更新 yum 工具 `yum update`

#### 1、安装必要的系统工具

```shell
yum install -y yum-utils device-mapper-persistent-data lvm2
```

#### 2、添加阿里yum源

```shell
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

#### 3、更新yum软件包索引

``` shell
yum makecache fast
```

#### 4、安装docker

``` shell
yum -y install docker-ce
```

#### 5、查看安装是否成功

``` shell
docker version
```

#### 6、启动docker

``` shell
systemctl start docker
```

#### 7、配置阿里镜像加速

``` shell
mkdir - p /etc/docker
vi /etc/docker/daemon.json
# 将以下内容写入
{
"registry-mirrors": ["https://zkpixx1l.mirror.aliyuncs.com"]
}

systemctl daemon-reload
systemctl restart docker
```

## Docker常用命令

#### 1、镜像命令

1）`docker images` 查看本地的镜像文件

REPOSITORY：表示镜像的仓库源

TAG：镜像的标签

IMAGE ID：镜像ID

CREATED：镜像创建时间

SIZE：镜像大小

2）`docker search` <镜像名称>  <opition\>，搜索镜像

opition 说明：

-s：列出收藏数不小于指定值得镜像

3）`docker pull` 镜像名字：版本号，如 docker pull centos:7.3 ，拉取镜像到本地

4）`docker rmi` 镜像名字 ID ，删除镜像，删除全部 `docker images -qa`

#### 2、容器命令

1）新建并启动容器 `docker run` [OPITION] image[COMMAND]

OPTIONS说明（常用）：有些是一个减号，有些是两个减号

> --name="容器新名字": 为容器指定一个名称；
>
> -d: 后台运行容器，并返回容器ID，也即启动守护式容器；
>
> -i：以交互模式运行容器，通常与 -t 同时使用；
>
> -t：为容器重新分配一个伪输入终端，通常与 -i 同时使用；
>
> -P: 随机端口映射；
>
> -p: 指定端口映射，有以下四种格式
>
> >    ip:hostPort:containerPort
> >
> >    ip::containerPort
> >
> >    hostPort:containerPort
> >
> >    containerPort

- 交互式创建 `docker run` -it --name=容器命令 镜像名称：TAG /bin/bash，i代表运行，t代表交互
- 守护式创建 `docker run` -di --name=容器命令 镜像名称：TAG

2）查看运行的容器 `docker ps` [OPITION]，-a 查看全部容器

3）退出容器

- `exit`，容器停止退出
- `ctrl+P+Q`，容器不停止退出

4）启动 `docker start` 容器 ID 或者容器名

5）重启容器 `docker restart` 容器 ID 或者容器名

6）停止容器 `docker stop` 容器 ID 或者容器名，强制停止容器 `docker kill`容器 ID 或者容器名

7）删除已停止容器 `docker rm` 容器 ID

重点：

1、守护式启动容器 

2、查看容器日志 `docker logs` -f -t --tail 容器 ID，-t加入时间戳，-f跟随最新的日志打印 ，--tail显示多少条

3、查看容器内运行的进程 `docker top` 容器 ID

4、查看容器内部细节 `docker inspect` 容器 ID

5、重新进入正在运行容器 `docker attach` 容器 ID ，或者 `docker exec` 容器 ID，说明：attach直接进入不启动新进程，exec 打开新终端，并且启动新进程

6、从容器内拷贝文件到主机 `docker cp` hello.txt mycentos7.6:/usr/local 

7、`docker run` -v 宿主目录：容器目录，可以挂载宿主机目录和容器目录（操作文件一致）

## 部署常用软件

#### 创建mysql5.7命令

``` shell
docker run -p 12345:3306 --name="alimysql" -e MYSQL_ROOT_PASSWORD=123456 -di mysql:5.7
```

命令说明：

> -p 12345:3306：将主机的12345端口映射到docker容器的3306端口。
>
> --name mysql：运行服务名字
>
> -v /zzyyuse/mysql/conf:/etc/mysql/conf.d ：将主机/zzyyuse/mysql录下的conf/my.cnf 挂载到容器的 /etc/mysql/conf.d
>
> -v /zzyyuse/mysql/logs:/logs：将主机/zzyyuse/mysql目录下的 logs 目录挂载到容器的 /logs。
>
> -v /zzyyuse/mysql/data:/var/lib/mysql ：将主机/zzyyuse/mysql目录下的data目录挂载到容器的 /var/lib/mysql
>
> -e MYSQL_ROOT_PASSWORD=123456：初始化 root 用户的密码。
>
> -d mysql:5.6 : 后台程序运行mysql5.6

#### 部署tomcat9

``` shell
docker pull tomcat:9

docker run -di --name=alitomcat -p 7070:8080 -v /mydata/tomcat/webapps:/usr/local/tomcat/webapps tomcat:9
```

命令说明：

-v 挂载目录

其他同上部署 mysql

#### 部署Nginx

``` shell
docker pull nginx:1.17

docker run -di --name=alinginx -p 808:80 nginx:1.17
```

**建议使用**

``` shell
# 系统文件挂载，创建nginx
docker run -di --name=alinginx -p 808:80 

-v /mydata/nginx/conf/nginx.conf:/etc/nginx/nginx.conf

-v /mydata/nginx/log:/var/log/nginx

-v /mydata/nginx/html:/usr/share/nginx/html

nginx:1.17
```

#### 部署Redis

``` shell
docker pull redis:5.0

docker run -di --name=aliredis -p 6379:6379 redis:5.0
```

#### 部署MongoDB

``` shell
docker pull mongo:4.0

docker container run -p 27017:27017 --mount source=mongodb,destination=/var/lib/mongodb --name alimongo -di mongo:4.0 --auth
```

说明：

> 1. docker container run ：启动一个容器并运行。以前版本直接用docker run，后来我估计是为了更细分职责，docker添加了manager command，即docker container，docker image等等。这样符合了模块化的思想，职责更明确（个人想法）。
>
> 2. -p 27017:27017 ：宿主机的27017端口与容器的27017端口进行绑定。这样外部可以通过访问宿主机的27017端口进而访问到容器中的27017端口。
>
> 3. --mount source=mysql,destination=/var/lib/mongodb ：数据卷进行绑定。source是指的上面我们在宿主机创建出来的volume，destination即我们要与容器中的哪个数据卷进行绑定。当然绑定数据卷还可以用-v 宿主机数据卷:容器数据卷进行绑定。
>
> 4. -v /etc/localtime:/etc/localtime ：设定容器的时间与宿主机保持一致。
>
> 5. --name alimongo ：设置容器的名称 alimongo 。注意：容器名称是唯一的。
>
> 6. -d mongo ：告诉容器在后台守护进程方式运行 mongo 。
>
> 7. -auth 需要密码连接容器

6）Elasticsearch

``` shell
docker run -e ES_JAVA_OPTS="-Xms256m -Xmx256m" -d -p 9200:9200 -p 9300:9300 --name alies
```

## 迁移与备份

打包本地容器为，镜像

`docker commit` 容器名 镜像名，比如 `docker commit alinginx alinginx_i`

保存镜像,到本地压缩包

`docker save -o alinginx.tar alinginx_i`，说明：-o 输出文件

通过 tar 包恢复镜像，`docker load -i alinginx.tar`，说明：-i 输入文件

## Dockerfile

可以通过配置使用基于基础镜像（如centos）创建，包含其他软件的容器，如使用 Dockerfile 创建包含 jdk1.8 的 centos7。

## 搭建私有仓库

1、拉取镜像 `docker pull registry:2.7`

2、创建 registry 容器，docker run -di --name=aliregistry -p 5000:5000 registry:2.7

3、查看创建结果，浏览器打开 ip:5000/v2/_catalog ，回显 Json 字符串

4、修改配置文件，让 Docker 信任，vi /etc/docker/daemon.json

添加 Json 内容

"insecure-registtries":["amfun.top:5000"]

5、重启docker服务，systemctl restart docker

## 上传到私有仓库

1、`docker tag jdk1.8 amfun.top:5000/jdk1.8`，说明标记此镜像为私有仓库镜像，准备上传

2、`docker push amfun.top:5000/jdk1.8`，上传到远端

3、查看 amfun.top:5000/v2/_catalog

下载：

  （1）需要配置 `vi /etc/docker/daemon.json `,添加私服配置信息

   （2）重启 使用 `docker pull amfun.top:5000/镜像名`，注意：需要填写镜像地址

   

​     