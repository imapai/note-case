## 安装

官方[Quick Start](https://github.com/ctripcorp/apollo/wiki/Quick-Start)

大致步骤：

1.创建数据库，导入sql文件

2.修改安装包下的`demo.sh`文件

``` properties
#apollo config db info
apollo_config_db_url=jdbc:mysql://localhost:3306/ApolloConfigDB?characterEncoding=utf8
apollo_config_db_username=用户名
apollo_config_db_password=密码（如果没有密码，留空即可）

# apollo portal db info
apollo_portal_db_url=jdbc:mysql://localhost:3306/ApolloPortalDB?characterEncoding=utf8
apollo_portal_db_username=用户名
apollo_portal_db_password=密码（如果没有密码，留空即可）
```

3.执行脚本`./demo.sh start`

## Apollo配置中心使用

1.访问`http://localhost:8070`，登录账号`apollo`；密码`admin`