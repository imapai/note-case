## kubernetes单机版本安装

操作系統：CentOS 7

(1)关闭防火墙

systemctl disable firewalld

systemctl stop firewalld

(2)安装etcd和kubernetes软件（会自动安装docker）

yum install -y etcd kubernetes

(3) kubernetes apiserver配置文件为/etc/kubernetes/apiserver，

把--admission-control参数中的ServiceAccount删除

把KUBE_API_ADDRESS修改成 KUBE_API_ADDRESS="--insecure-bind-address=0.0.0.0"

(4) 按顺序启动所有服务

systemctl start etcd

systemctl start docker

systemctl start kube-apiserver

systemctl start kube-controller-manager

systemctl start kube-scheduler

systemctl start kubelet

systemctl start kube-proxy

(5) 关闭所有服务



