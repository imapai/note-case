# Linux安装Mysql5.5

本次安装的是mysql的5.5版本，使用npm包的方式安装

## 准备rpm安装包

1、首先准备npm的安装包，一个server，一个client，地址如下：

```
https://www.lanzous.com/b00tf3m8d
密码:btle
```

## 清理环境

centos7会自带一个mariadb，建议删除这个与官方不一致易出现问题

查看是否已安装

rpm -qa |grep -i mysql

rpm -qa |grep -i mariadb（centos7默认系统自带的）

删除

rpm -e 加上包名，把mariadb包清掉

可以看到用rpm删除会失败，提示有依赖关系的软件需要安装

rpm -e mariadb-libs-5.5.xxxx

建议执行：**rpm删除时如果有依赖关系，可以用yum remove + 包名来删除mariadb**

## 安装

1、上传npm文件到服务器，执行命令

```
rpm -ivh MySQL-server-5.5.45-1.el6.x86_64.rpm 
rpm -ivh MySQL-client-5.5.45-1.el6.x86_64.rpm 
```

检验

ps -ef|grep -i mysql，此时会显示mysql

```
root     16791 16609  0 20:40 pts/0    00:00:00 grep --color=auto -i mysql
```

rpm -qa|grep -i mysql，会显示如下

```
MySQL-client-5.5.45-1.el6.x86_64
MySQL-server-5.5.45-1.el6.x86_64
```

## 启动

service mysql start，

mysql –uroot –p 回车，第一次不需要密码

重置密码方法：set password=password(‘root’);

mysql5.6版本以后要设置一个root账号的随机密码

密码保存到root/.mysql_secret文件里

需要先拿到密码才可以登录，登录后重置密码

## 开启允许远程登录

直接使用Navicat连接会发生，错误代码1130提示，此时需要给远程连接的用户权限

结果这样子操作mysql库，即可解决。在本机登入mysql后，更改 “mysql” 数据库里的 “user” 表里的 “host” 项，从”localhost”改称'%'。。

````mysql
mysql -u root -p
mysql>use mysql;
mysql>select 'host' from user where user='root';
mysql>update user set host = '%' where user ='root';
mysql>flush privileges;
mysql>select 'host'  from user where user='root';
````

**解释**：

第一句是以权限用户root登录

第二句：选择mysql库

第三句：查看mysql库中的user表的host值（即可进行连接访问的主机/IP名称）

第四句：修改host值（以通配符%的内容增加主机/IP地址），当然也可以直接增加IP地址

第五句：刷新MySQL的系统权限相关表

第六句：再重新查看user表时，有修改

测试连接已经成功，如果不行就重起mysql服务。

OK，此时可以愉快的使用Mysql啦~！！！

# 解毒Mysql5.7.25

## 卸载旧的mysql

查看是否安装

```shell
rpm -qa | grep mysql
```

查看`postfix`和`mariadb-libs`

```shell
rpm -qa | grep postfix
rpm -qa | grep mariadb
```

如果存在，卸载

```shell
rpm -ev postfix-2.10.1-6.el7.x86_64
rpm -ev mariadb-libs-5.5.52-1.el7.x86_64
```

如果已经安装过mysql，想要升级换代，需要正确删除mysql

## 准备rpm包

可以去官网下载Mysql的5.7.25的社区版安装包，选择相应的系统版本，下载一下4个需要的rpm包

官网地址：https://downloads.mysql.com/archives/community/

````
mysql-community-common-5.7.25-1.el7.x86_64.rpm 
mysql-community-libs-5.7.25-1.el7.x86_64.rpm 
mysql-community-client-5.7.25-1.el7.x86_64.rpm 
mysql-community-server-5.7.25-1.el7.x86_64.rpm 
````



执行安装，顺序安装，否则会报错有依赖关系

```
rpm -ivh mysql-community-common-5.7.25-1.el7.x86_64.rpm 
rpm -ivh mysql-community-libs-5.7.25-1.el7.x86_64.rpm 
rpm -ivh mysql-community-client-5.7.25-1.el7.x86_64.rpm 
rpm -ivh mysql-community-server-5.7.25-1.el7.x86_64.rpm 
```

遇到错误：

``` 
error: Failed dependencies:
	mysql-community-libs(x86-64) >= 5.7.9 is needed by mysql-community-client-5.7.25-1.el7.x86_64
```

解决方法，在安装命令后添加 `--nodeps --force`

## 启动

service mysqld start，5.7.25没有显示什么

service mysqld status，查看状态，显示active是成功启动

mysql5.7.25，会默认生成一个密码，你需要查看这个密码，用于首次登陆，登陆后记得修改密码

查看默认密码

```
grep password /var/log/mysqld.log
显示如下：
2020-04-05T02:03:04.427534Z 1 [Note] A temporary password is generated for root@localhost: mdhs)POhO35k
POhO35k就是你的密码
```

输入》mysql -uroot -p，输入上面密码登陆

```
# 设置新密码
set password = password("Mysql_123456");

# 退出当前登录
quit;
```

### 首次登陆报错

```
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)
```

1.停止mysql服务，service mysqld stop

2.修改免密登录

vi /etc/my.cnf，添加一句

```
skip-grant-tables 
```

3.重启mysql服务，service mysqld start

4.登录，mysql -uroot -p，回车

5，设置密码

```
mysql> use mysql
mysql> update user set authentication_string=password('123456') where user='root';
输出如下：
Query OK, 1 row affected, 1 warning (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 1
成功！！！
```

6，再次执行，vi /etc/my.cnf，添加#注释免密登录`#skip-grant-tables `

7，再次登录，mysql -uroot -p，输入密码，回车

8，navicat测试远程连接

hw:xgng3780

### 修改密码安全权

1、查看 mysql 初始的密码策略，
输入语句 “ SHOW VARIABLES LIKE 'validate_password%'; ” 进行查看。

2、首先需要设置密码的验证强度等级，设置 validate_password_policy 的全局参数为 LOW 即可，
输入设值语句 “ set global validate_password_policy=LOW; ” 进行设值。

3、当前密码长度为 8 ，如果不介意的话就不用修改了，按照通用的来讲，设置为 6 位的密码，设置 validate_password_length 的全局参数为 6 即可，
输入设值语句 “ set global validate_password_length=6; ” 进行设值。

4、现在可以为 mysql 设置简单密码了，只要满足六位的长度即可，
输入修改语句 “ ALTER USER 'root'@'localhost' IDENTIFIED BY '123456'; ” 可以看到修改成功，表示密码策略修改成功了！！！