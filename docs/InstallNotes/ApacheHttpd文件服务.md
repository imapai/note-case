# HTTPD简易搭建文件上传下载

## 安装

linux环境

``` shell
# yum install httpd -y   安装    
# chkconfig --add httpd     加入启动服务    
# chkconfig httpd on	默认启动级别自启动    
# service httpd start	启动httpd服务
```

配置映射80端口

HTTPD的默认配置在 /etc/httpd/conf/httpd.conf

``` shell
ServerRoot "/etc/httpd"  # 服务器根目录
Listen 80  # 默认端口
DocumentRoot "/var/www/html"  #上传下载文件的根目录
```



## 运行

``` shell
# 启动
systemctl start httpd
# 停止
systemctl stop httpd
```

