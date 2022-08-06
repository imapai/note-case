# Hadoop学习笔记

## 大数据启蒙

**分治思想**

question1：

有一万行数据（数字或者单词），找出某个元素，如何在O(4)的复杂度找出这个值

answer1：

一万行数据hashcode散列处理，模除2500，得到2500组数据，每组数据存储4个值，查找是只需要散列后模除，便可以找到该组数据，遍历4次就可以找到。

question2：

假设有一个1T的文件，物理条件单机，内存有限，中间有两行是重复的，找出重复的行？

由于IO读写的问题，不可能每次都查找是否存在，然后按照行读取，比对。磁盘平均读取速度是500M/s，读取一次需要耗时2048秒，大约30分钟，如果有n行数据，则时间就是30*n。

answer2：

> 读取一行，散列处理，模除2000，相同值存储到一个小文件
>
> 相同的内容肯定在一个文件中
>
> 加载到内存比对数据

question3：

假设有1T数据，全部是无序的数字，对内容做一个全排序？

answer3：

​	第一种：每次读取一行，值做判断 if(1>num>100)，读取一遍后得到一个内部无序，外部有序的小文件，依次对小文件排序，追加内容，完成排序。

​	第二种：归并排序，每次读取100个数据，对100个数据排序，读取一遍得到一个内部有序，外部无序的小文件，对文件进行归并排序。

question4：

如何在question2的要求下，追加一条要求，在一分钟之内完成？

answer4：

引出Hadoop的MapReduce

> 必须要多个机器，2000台机器，每一台机器500M，一秒读取完成
>
> 每台机器hashcode后模除2000得到，2000份小文件
>
> 互相拉去1-2000文件到本地，分别计算比对，找出相同内容

结论：

+ 分而治之
+ 并行计算
+ 计算向数据移动
+ 数据本地化读取

以上是大数据技术重点关心的内容。

### HDFS存储模型

HDFS文件存储系统的一些特性，HDFS是大数据存储的基础。

+ 文件线性按字节切割成块（block），具有offset，id
+ 文件与文件的block大小可以不一样
+ 一个文件除了最后一个block，其他block大小一致
+ block块的大小依据硬件的IO特性调整
+ block被分散的存储在集群的节点中，具有location
+ block具有副本（replication），没有主从概念，副本不能出现在同一个节点上
+ 副本是满足可靠性和性能的关键
+ 文件上传可以指定block的大小和副本数，上传后只能修改副本数
+ 一次写入，多次读取，不支持修改
+ 支持追加数据

### 角色

#### NameNode

+ 完全基于内存存储文件的元数据、目录结构、文件block的映射
+ 需要持久化方案保证数据可靠性
+ 提供副本放置策略

#### DateNode

+ 基于本地磁盘存储block（文件形式）
+ 并保证block的校验和数据保证block的可靠性
+ 与NameNode保持心跳，汇报block列表状态

### HDFS中的SecondaryNameNode(SNN)

+ 在非Ha模式下，SNN一般是独立的节点，周期性的完成NameNode的EditLog向FsImage合并，减少EditLog大小，减少NameNode启动时间
+ 根据配置文件设置的时间间隔fs.checkpoint.period 默认3600秒
+ 根据配置文件设置edits log大小 fs.checkpoint.size 规定edits文件最大值默认64MB
+ 当满足一小时，则执行一次，或者EditLog达到64MB后执行一次

### HDFS写流程

+ Client和NameNode连接创建文件元数据
+ NameNode判定元数据是否有效
+ NameNode触发副本房子策略，返回有序的DataNode列表
+ Client和DateNode建立Pipeline连接
+ Client将块切分成packet（64k），并使用chunk（512B）+chunksum（4B）填充
+ Client将packet放入发送队列dataqueue中，并向第一个DateNode发送
+ 第一个DataNode收到packet后本地保存并发送第二个DataNode
+ 第二个DataNode收到packet后本地保存并发送第三个DataNode
+ 这一过程中，上游节点同时发送一个packet
+ HDFS使用这种传输方式，副本数对于Client是透明的
+ 当block传输完成，DataNode各自向NameNode汇报，同时Client继续传输下一个block
+ 所以，client的传输和block的汇报也是并行的

### HDFS读流程

+ 为了降低整体的带宽消耗和读取延时，HDFS会尽量让读取程序读取离它最近的副本
+ 如果在读取程序的同一个机架上有一个副本，那么就读取该副本
+ 如果一个HDFS集群跨越多个数据中心，那么客户端也将首先读取本地的数据中心的副本
+ 语义：下载一个文件：
  + Client和NameNode交互文件元数据获取fileBlockLocation
  + NameNode会按照距离策略排序返回
  + Client尝试下载block并校验数据完整性

+ 语义：下载一个文件其实就是获取文件的所有block元数据，那么子集获取某些block应该成立
  + HDFS支持Client给出文件的offset自定义连接哪些block的DataNode，自定义获取数据
  + 这个是支持计算层的分治、并行计算的核心

## 伪分布式的搭建

[官方文档](https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SingleCluster.html)

基础设施

1、安装centos

2、配置vm虚拟网络，配置centos网络

3、添加主机映射

4、关闭防火墙&selinux（时间不一致会触发系统自读）

5、设置host映射

6、时间同步

7、安装JDK

8、配置免密登录



### 安装CentOS7

centos，基于centos7.x

直接在vmware中创建虚拟机，下一步就完成了。

### 配置网络

> vi /etc/sysconfig/network-scripts/ifcfg-ens33
>
> 修改BOOTPROTO=static，ONBOOT=yes，并添加IPADDR、NETMASK、GATEWAY、DNS1参数

```properties
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=6cd00e5c-0cad-45ed-a6f6-e5965b6d7074
DEVICE=ens33
ONBOOT=yes
IPADDR=192.168.17.211
NETMASK=255.255.255.0
GATEWAY=192.168.17.2
DNS1=8.8.8.8
DNS2=114.114.114.114
```

+ 重启网络服务，service network restart
+ 查看ip地址，ip addr
+ 测试ping www.baidu.com
+ xshell连接

添加主机名称映射

> vi /etc/sysconfig/network
>
> NETWORKING=yes
> HOSTNAME=node01
>
> ## centos7
>
> 临时生效
>
> ```
> [root@centos7 ~]# hostname 132
> [root@centos7 ~]# hostname
> 132123
> ```
>
> 永久生效（不会立刻修改，需重启）
>
> ```
> [root@centos7 ~]# hostnamectl set-hostname centos7
> (或者修改完之后执行`exec bash`立即改变)，
> ```
>
> vi /etc/hosts
>
> 添加
>
> `ip`
>
> 192.168.17.211 node01
>
> 192.168.17.212 node02
>
> 192.168.17.213 node03
>
> 192.168.17.214 node04

关闭selinux

> vi /etc/selinux/config
>
> SELINUX=disabled

### 关闭防火墙

1）关闭防火墙

```shell
centos6
# 关闭防火墙
service iptables stop
# 开机禁用
chkconfig iptables off
# 关闭服务
systemctl stop firewalld 
#开机禁用
systemctl disable firewalld
```

centos7遇到问题

> 遇到关闭防火墙，报错：Failed to start firewalled.service: Unit not found.
>
> \# 启用防火墙
>
>   systemctl enable firewalld.service
>
>   systemctl restart firewalld.service
>
> \# 查看防火墙状态
>
>   firewall-cmd --state
>
>   firewall-cmd --list-all

2)开放端口，比如开放3306端口firewalled防火墙

```shell
#开放3306端口
firewall-cmd --permanent --add-port=3306/tcp
#重启防火墙
firewall-cmd --reload
```

### 时间同步

> yum install ntp -y
>
> vi /etc/ntp.conf
>
> server ntp1.aliyun.com
>
> service ntpd start
>
> chkconfig ntpd on



### 配置免密

测试，是否可以连接自己

> ssh localhost
>
> 需要密码就未配置免密

配置免密

> ```shell
>   $ ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa
>   $ cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
>   $ chmod 0600 ~/.ssh/authorized_keys
> ```

如果 A 想要 免密登录到 B:

​	A:	ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa

​	B:	cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

结论：B包含了A的公钥，A就可以免密的登录到B

### 安装JDK

上传JDK到，/usr/java，解压，tar -zxvf jdk...，删除jdk的压缩包

> 做软链接映射，避免有些软件找不到JDK
>
>  ln -s /usr/java/jdk1.8.0_231/ latest
>
> ln -s /usr/java/latest default

vi /etc/profile

> ```properties
> export JAVA_HOME=/usr/java/default
> export PATH=$PATH:$JAVA_HOME/bin
> ```

### Hadoop部署配置

伪分布式：（单一节点）

1.部署路径文件

规划路径：

+ mkdir /opt/bigdata
+ tar -zxvf hadoop.xxx.gz
+ mv hadoop-2.7.3  /opt/bigdata/

2.配置文件

+ hadoop-env.sh，hadoop的运行环境
+ core-site.xml，Common组件的环境
+ hdfs-site.xml，HDFS组件的配置
+ slaves，配置所有DataNode的主机名

配置Hadoop的环境变量，这样就可以在任意位置使用hadoop的脚本文件

> vi /etc/profile
>
> 追加，export HADOOP_HOME=/opt/bigdata/hadoop-2.7.3
>
> ```properties
> export JAVA_HOME=/usr/java/default
> export HADOOP_HOME=/opt/bigdata/hadoop-2.7.3
> export PATH=$PATH:$JAVA_HOME/bin:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
> ```

hadoop-env.sh，配置Hadoop角色

> vi hadoop-env.sh
>
> 修改JAVA_HOME为绝对路径，避免其他主机远程说使用ssh访问不到，因为是不加载/etc/profile，导致jdk缺失
>
> export JAVA_HOME=/usr/java/default

core-site.xml，给出NameNode角色在哪里启动

> vi core-site.xml
>
> ```xml
> <property>
>     <name>fs.defaultFS</name>
>     <value>hdfs://node01:9000</value>
> </property>
> ```

hdfs-site.xml，配置hdfs副本的数量为1

> vi hdfs-site.xml
>
> ```xml
>     <property>
>         <name>dfs.replication</name>
>         <value>1</value>
>     </property>
> ```

slaves，配置DataNode在哪一台主机启动

> vi slaves
>
> node01

添加配置

> vi hdfs-site.xml
>
> ``` xml
> <property>
>     <name>dfs.namenode.name.dir</name>
>     <value>/var/bigdata/hadoop/local/dfs/name</value>
> </property>
> <property>
>     <name>dfs.datanode.data.dir</name>
>     <value>/var/bigdata/hadoop/local/dfs/data</value>
> </property>
> <property>
>     <name>dfs.namenode.secondary.http-address</name>
>     <value>node01:50090</value>
> </property>
> <property>
>     <name>dfs.namenode.checkpoint.dir</name>
>     <value>/var/bigdata/hadoop/local/dfs/secondary</value>
> </property>
> ```
>
> NN：确定DFS名称节点应该将名称表(fsimage)存储在本地文件系统的何处。如果这是一个以逗号分隔的目录列表，那么为了避免冗余，将在所有目录中复制name表。
>
> DN：确定DFS数据节点应在本地文件系统上的哪个位置存储其块。 如果这是逗号分隔的目录列表，则数据将存储在所有命名的目录中，通常在不同的设备上。 对于HDFS存储策略，应使用相应的存储类型（[SSD] / [DISK] / [ARCHIVE] / [RAM_DISK]）标记目录。 如果目录没有显式标记的存储类型，则默认存储类型为DISK。 如果本地文件系统权限允许，将创建不存在的目录。

3.初始化&启动

> hdfs namenode -format
>
> 初始化一个空的FsImage
>
> VERSION
>
> CID

start-dfs.sh，第一次：datanode和secondary角色会初始化创建自己的数据目录，也会生成VERSION，其中CID三者相同，保证datanode和secondary与namenode同步。

4.简单使用

hdfs dfs -mkdir /bigdata

hdfs dfs -mkdir -p /user/root

hdfs dfs -put  上传

5.验证知识点

cd 	/var/bigdata/hadoop/local/dfs/name/current

​	观察 editLog的id是不是在fsimage的后面

cd 	/var/bigdata/hadoop/local/dfs/secondary/current

​	SNN 只需要从NN拷贝最后时点的FSimage和增量的EditLog



hdfs dfs -put  hadoop.xx.tar.gz

cd	/var/bigdata/hadoop/local/dfs/data/current/BP-955638036-192.168.17.211-1585708220284/current/finalized/subdir0/subdir0

会看到文件存储的块的信息



for i in \`seq 100000\`;do echo "hello hadoop $i"  >> data.txt ;done

hdfs dfs -D dfs.blocksize=1048576 -put data.txt

cd	/var/bigdata/hadoop/local/dfs/data/current/BP-955638036-192.168.17.211-1585708220284/current/finalized/subdir0/subdir0

检查文件，block被切割后的文件

结论：块按照字节的大小切分，不考虑文件的内容

## 完全分布式：

基础环境

部署配置

### 基础环境

```
1.角色在哪里启动
NameNode：core-site.xml  fs.defaultFS hdfs://node01:9000
DataNode: slaves node01
SNN: hdfs-site.xml dfs.namenode.secondary.http.address node01:50090
2.角色启动时的细节配置
dfs.namenode.name.dir
dfs.datanode.data.dir
```

| host   | NameNode | Secondary | DataNode |
| ------ | -------- | --------- | -------- |
| node01 | *        |           |          |
| node02 |          | *         | *        |
| node03 |          |           | *        |
| node04 |          |           | *        |

+ 每台机器配置化网络，配置 JDK，OK

+ 其他几台机器输入 ssh localhost，激活创建/root/.ssh隐藏文件夹
+ 在node01中，scp ./id_rsa.pub    node02:/root/.ssh/node01.pub（其他几台同样分发）
+ 在node02中，cat node01.pub  >> authorized_keys

具体操作：

```shell
node02:
	ssh locahost
node03:
	ssh localhsot
node04:
	ssh localhost
node01:
	cd ~/.ssh
	scp ./id_rsa.pub    node02:/root/.ssh/node01.pub
	scp ./id_rsa.pub    node03:/root/.ssh/node01.pub
	scp ./id_rsa.pub    node04:/root/.ssh/node01.pub
node02；
	cd ~/.ssh
	cat node01.pub  >> authorized_keys
node03；
	cd ~/.ssh
	cat node01.pub  >> authorized_keys
node04；
	cd ~/.ssh
	cat node01.pub  >> authorized_keys
```

测试node01是否可以免密登录到其他机器

### 配置部署

修改前可以备份文件到本地hadoop-local，复制文件，cp	 -r 	hadoop/ 		haoop-local

```xml
node01:
	cd $HADOOP/etc/hadoop
	vi core-site.xml NN配置不需要修改
	vi hdfs-site.cml ,修改如下：
	<property>
        <name>dfs.replication</name>
        <value>2</value>
    </property>
    <property>
        <name>dfs.namenode.name.dir</name>
        <value>/var/bigdata/hadoop/full/dfs/name</value>
    </property>
    <property>
        <name>dfs.datanode.data.dir</name>
        <value>/var/bigdata/hadoop/full/dfs/data</value>
    </property>
    <property>
        <name>dfs.namenode.secondary.http-address</name>
        <value>node02:50090</value>
    </property>
    <property>
        <name>dfs.namenode.checkpoint.dir</name>
        <value>/var/bigdata/hadoop/full/dfs/secondary</value>
    </property>

	vi 	slaves
		node02
		node03
		node04
```

分发Hadoop：

```
cd /opt
	scp -r ./bigdata/ node02:`pwd`
	scp -r ./bigdata/ node03:`pwd`
	scp -r ./bigdata/ node04:`pwd`
```

格式化启动

​	hdfs namenode -format

​	start-dfs.sh

HDFS解决Namenode问题

> + 单点故障
>   + 高可用方案：HA
>   + 多个NameNode，主备切换
> + 压力过大，内存受限
>   + 联邦机制：Federation（元数据分片）
>   + 多个NN，管理不同的元数据
> + Hadoop 2.x只支持HA的一主一备

HDFS—HA解决方案

> CAP原则
>
> Consistency：一致性
>
> AVailability：可用性
>
> Partition tolerence：分区容忍性

## 引入Zookeeper

+ 基础环境
  + 增加NNs的ssh免密
+ 应用搭建
  + zookeeper
  + 格式化NN
  + 格式化ZK
+ 启动集群

角色规划

| HOST   | NN   | JNN  | DN   | ZKFC | ZK   |
| ------ | ---- | ---- | ---- | ---- | ---- |
| node01 | *    | *    |      | *    |      |
| node02 | *    | *    | *    | *    | *    |
| node03 |      | *    | *    |      | *    |
| node04 |      |      | *    |      | *    |

Full 	--> 	HA:

### 配置：

``` xml
core-site.xml
<property>
  <name>fs.defaultFS</name>
  <value>hdfs://mycluster</value>
</property>
<property>
  <name>ha.zookeeper.quorum</name>
  <value>node02:2181,node03:2181,node04:2181</value>
</property>
=====================================================
hdfs-site.xml
# 一对多
<property>
  <name>dfs.nameservices</name>
  <value>mycluster</value>
</property>
<property>
  <name>dfs.ha.namenodes.mycluster</name>
  <value>nn1,nn2</value>
</property>
<property>
  <name>dfs.namenode.rpc-address.mycluster.nn1</name>
  <value>node01:8020</value>
</property>
<property>
  <name>dfs.namenode.rpc-address.mycluster.nn2</name>
  <value>node02:8020</value>
</property>
<property>
  <name>dfs.namenode.http-address.mycluster.nn1</name>
  <value>node01:50070</value>
</property>
<property>
  <name>dfs.namenode.http-address.mycluster.nn2</name>
  <value>node02:50070</value>
</property>
# 一下是JN在哪里启动，数据存储在哪里
<property>
  <name>dfs.namenode.shared.edits.dir</name>
  <value>qjournal://node01:8485;node02:8485;node03:8485/mycluster</value>
</property>
<property>
  <name>dfs.journalnode.edits.dir</name>
  <value>/var/bigdata/hadoop/ha/dfs/jn</value>
</property>
# 角色切换的代理类和实现方法，使用的ssh免密
<property>
  <name>dfs.client.failover.proxy.provider.mycluster</name>
  <value>org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider</value>
</property>
<property>
  <name>dfs.ha.fencing.methods</name>
  <value>sshfence</value>
</property>
<property>
  <name>dfs.ha.fencing.ssh.private-key-files</name>
  <value>/root/.ssh/id_rsa</value>
</property>
# 开启自动化，启动zkfc
 <property>
   <name>dfs.ha.automatic-failover.enabled</name>
   <value>true</value>
 </property>

```

### 流程：

——基础设施

————ssh免密：

​				1）启动start-dfs.sh脚本的机器需要将公钥分发给别的节点

​				2）在HA模式下，每一个NN身边会启动一个ZKFC，ZKFC会用免密的方式控制自己和其他NN节点的NN状态

——应用搭建

​				HA	依赖	ZK	，搭建的ZK集群

​				修改hadoop的配置文件，并集群同步

——初始化启动

​				1）先启动JN	hadoop-daemon.sh 	start	journalnode

​				2）选择一个NN做格式化： hdfs  namenode  -format

​				3）启动这个格式化的NN，以备另一台同步：hadoop-daemon.sh  start namenode

​				4）在另外一台机器中： hdfs  namenode  -bootstrapStandby

​				5）格式化ZK， hdfs	zkfc	-formatZK

​				6）start-dfs.sh

——使用	



### 实际操作

1.停止之前的集群

2.免密：node01,node02，互相免密

3.Zookeeper安装

```shell
node02:
	tar xf zook...tar.gz
	mv zoo..	/opt/bigdata
	cd /opt/bigdata/zoo....
	cd conf
	cp zoo_sample.cfg zoo.cfg
	vi zoo.cfg
		datadir=/var/bigdata/hadoop/zk
		server.1=node02:2888:3888
		server.2=node03:2888:3888
		server.3=node04:2888:3888
	
	mkdir /var/bigdata/hadoop/zk
	echo 1 > /var/bigdata/hadoop/zk/myid
	// 配置环境变量
	vi /etc/profile
		export ZOOKEEPER_HOME=/opt/bigdata/zookeeper
		export ....:$ZOOKEEPER_HOME/bin
	
	// 分发Zookeeper给node03和node04
    cd /opt/bigdata
    scp -r ./zoo...	node03:`pwd`
    scp -r ./zoo...	node04:`pwd`
node03:
	mkdir /var/bigdata/hadoop/zk
	echo 2 > /var/bigdata/hadoop/zk/myid
	// 配置环境变量
	vi /etc/profile
		export ZOOKEEPER_HOME=/opt/bigdata/zookeeper
		export ....:$ZOOKEEPER_HOME/bin
node04:
	mkdir /var/bigdata/hadoop/zk
	echo 3 > /var/bigdata/hadoop/zk/myid
	// 配置环境变量
	vi /etc/profile
		export ZOOKEEPER_HOME=/opt/bigdata/zookeeper
		export ....:$ZOOKEEPER_HOME/bin
node02-node04:
	zkServer.sh start
```

4）配置hadoop的core-site.xml和hdfs-site.xml

5）分发配置给其他机器

```shell
scp core-site.xml hdfs-site.xml node02:`pwd`
scp core-site.xml hdfs-site.xml node03:`pwd`
scp core-site.xml hdfs-site.xml node04:`pwd`
```

6）验证

```
node01,node02,node03:
	hadoop-daemon.sh start journalnode
观察 /var/bigdata/hadoop/ha/dfs/jn下并没有文件
node03打开新的窗口，cd /opt/bigdata/hadoop.xx/logs,阻塞日志
tail -f hadoop-root-journalnode-node03.log 

node01:
	hdfs namenode -format ,格式化namenode（任意选择一台		namenode，不要重复格式化）
node02:
	hdfs namenode -bootstrapStandby,拉去namenode同步
	现在在/var/bigdata/hadoop/ha/dfs/name下就会有namenode的文件生成
node04：
	zkServer.sh start
	zkCli.sh，打开zookeeper的客户端
	ls ，查看目录树
	
node01:
	hdfs zkfc -formatZK，格式化zookeeper
	此操作会创建hadoop-ha/mycluster
ok,初始化完成
node01：
	start-dfs.sh
深入验证：
	1）去看jn的日志和目录变化
	2）node04
		zkCli.sh,ls /,启动后看锁
		get /hadoop-ha/mycluster/ActiveStandbyElectorLock
	3)去node01，杀死namenode，观察锁和网页两个namenode的状态
	4）恢复node01的namenode，hadoop-daemon.sh start namenode，观察锁和网页
	5）去node02，杀死zkfc，观察锁和网页

```

## HDFS权限

HDFS没有用户权限管理相关命令和接口，它使用信任客户端的方式，一般是谁启动就是谁。

有超级用户的概念：

​	linux系统中的超级用户：root

​	hdfs系统中超级用户：是namenode进程的启动用户

### 权限管理

实际操作：切换我们用root搭建的HDFS ，用god这个用户来启动

node01~node04:

​	*）关闭服务

​	1）添加用户：root

```
useradd god
passwd god
```

​	2）资源与用户绑定，（a、安装部署程序，b、数据存放的目录）

```
	chown	 -R 	god 	src
​	/opt/bigdata/hadoop.xxx
​	/var/bigdata/hadoop
```



​	3）切换到god去启动	start-dfs.sh   < 需要免密

````
	给god做免密
​	su  god
​	ssh localhost	>> 为了拿到.ssh
​	node01~node02:
​			cd /home/god/.ssh
​			ssh-keygen -t rsa -P '' -f ./id_rsa
​	node01:
			ssh-copy-id -i id_rsa node01
			ssh-copy-id -i id_rsa node02
			ssh-copy-id -i id_rsa node03
			ssh-copy-id -i id_rsa node04
	node02:
			cd /home/god/.ssh
			ssh-copy-id -i id_rsa node01
			ssh-copy-id -i id_rsa node02		
​							
````

​	4）修改hdfs-site.xml，免密存放的位置修改

  5）god：start-dfs.sh

### 用户权限验证实际操作

```
node01:
	su god
	hdfs dfs -mkdir /temp
	hdfs dfs -chown god:ooxx /temp
	hdfs dfs -chmod 770 /temp
node04:
	root:
		useradd good
		goupadd ooxx
		usermod -a -G ooxx good
	su good
		hdfs dfs -mkdir /temp/abc <失败
		hdfs groups
			good:  <因为hdfs已经启动不知道新添加的用户
*node01
	root:
		useradd good
		groupadd ooxx
		usermod -a -G ooxx good
	su god
		hdfs dfsadmin -refreshUserToGroupsMappings
node04:
	good:
		hdfs groups
			good : good ooxx
结论：默认hdfs依赖操作系统上的用户和组
```

### hdfs api 实际操作

语义：开发hdfs的client

权限：1）参考系统登录用户名；

配置环境变量，HADOOP_USER_NAME	god

jdk版本：集群和开发环境版本一致

maven：构建工具

hdfs的pom：

​	hadoop：（common，hdfs，yarn，mapreduce）

----------

MapReduce：批量计算

​	计算模型：map和reduce是一种阻塞关系

​	实现：----> 框架

​		计算向数据移动：

​				hdfs暴露数据的位置

​				1）资源管理

​				2）任务调度

​		角色：

​				JobTracker

​						1.资源管理

​						2.任务调度

​				TaskTracker

​						1）任务管理

​						2）资源汇报

​				Client

​						1）根据每次的计算数据，咨询NN元数据（block）=》算切片：split》得到一个切片的【清单】，map的数量就有了

split是逻辑的。block是物理的，block身上有（offset，locations），split和block是有映射关系

结果：split包含偏移量，以及split对应的map任务应该移动到哪些节点（locations）split01 A 0 500 n1 n2 n3

可以支持计算向数据移动~！！！

2）生成计算程序未来运行时的相关配置文件：xxxxxxx.xml

3）未来的移动应该是相对可靠

​	Cli会讲jar，split清单，配置xml	上传到hdfs的目录中

4）cli会调用JobTracker，通知要启动一个计算程序了，并且告知文件都放在了hdfs的哪些地方



JobTracker收到启动程序之后：

​	1）从hdfs中取回【split清单】

​	2）根据自己收到的TT汇报的资源，最终确定每一个split对应的map应该去到哪一个节点，【确定清单】

​	3）未来，TT再心跳的时候回取回分配给自己的任务量

TaskTracker

​	1）在心跳取回任务后

 	2）从hdfs中下载jar，xml。。到本机

​	3）最终启动任务描述中的MapTask/ReduceTas，（最终，代码在某一个节点被启动，是通过，cli上传，TT下载）

问题：

​	JobTracker 3个问题：

​	1.单点故障

​	2.压力过大

​	3.集成【资源管理和任务调度】，两者耦合

​		弊端：未来新的计算框架不能复用资源管理

​				1，重复造轮子

​				2，因为各自实现资源管理，但是他们部署在同一批硬件上，因为隔离，所以不能感知对方的使用

so：资源争抢~~~~~~~~~



hadoop2.xx

实现：架构

​	ResourceManage 主

​		负责整体资源的管理

​	NodeManage 从

​		向RS汇报心跳，提交自己的资源情况

MR运行 MapReduece	on	yarn

1，MR-cli（切片清单、配置、jar、上传到HDFS）

2，RM选择一台不忙的节点通知NM启动一个Container，在里面反射一个MRAppMaster

3，启动MRAppMaster，从hdfs下载切片清单，向RM申请资源

4，有RM根据自己掌握的资源情况得到一个【确定清单】，通知NM来启动Container

5，Container启动后会反向注册到已经启动的MRAppMaster进程

6，MRAppMaster（曾经的JobTracker阉割版本不带资源管理） 最终将任务Task发送给Container（消息）

7，container会反射相应的Tash类对象，调用方法执行，其结果就是我们的业务逻辑代码的执行

8，计算框架都会有Task失败重试的机制

结论：

​	问题：

​		1，单点故障

​			yarn：每一个APP由一个自己的AppMaster调度

​		2，压力过大

​			yarn中每一个计算程序自有AppMaster，每一个AppMaster只负责自己计算程序对的任务调度

​		3，集成【资源管理和任务调度】，两者耦合

​			yarn只是资源管理，不负责具体的任务调度

​			是公立的，只要计算框架继承yarn的AppMaster，大家都可以使用一个统一视图的资源层~

----

## Yarn搭建

1.最终开发MR程序

2.hadoop2.xx 出现了一个yarn：资源管理

yarn模型：container 容器，里面会运行我们的AppMaster，map/reduce Task

搭建：

| node   | NN   | JN   | ZKFC | ZK   | DN   | RM   | NM   |
| ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| node01 | *    | *    | *    |      |      |      |      |
| node02 | *    | *    | *    | *    | *    |      | *    |
| node03 |      | *    |      | *    | *    | *    | *    |
| node04 |      |      |      | *    | *    | *    | *    |

配置文件

mapred-site.xml

```xml
<configuration>
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
    </property>
</configuration>
```

yarn-site.xml

```xml
<property>
  <name>yarn.nodemanager.aux-services</name>
  <value>mapreduce_shuffle</value>
</property>
<property>
  <name>yarn.resourcemanager.ha.enabled</name>
  <value>true</value>
</property>
<property>
  <name>yarn.resourcemanager.zk-address</name>
  <value>node02:2181,node03:2181,node04:2181</value>
</property>
<property>
  <name>yarn.resourcemanager.cluster-id</name>
  <value>zhaoxingang</value>
</property>
<property>
  <name>yarn.resourcemanager.ha.rm-ids</name>
  <value>rm1,rm2</value>
</property>
<property>
  <name>yarn.resourcemanager.hostname.rm1</name>
  <value>node03</value>
</property>
<property>
  <name>yarn.resourcemanager.hostname.rm2</name>
  <value>node04</value>
</property>
<property>
  <name>yarn.resourcemanager.webapp.address.rm1</name>
  <value>node03:8088</value>
</property>
<property>
  <name>yarn.resourcemanager.webapp.address.rm2</name>
  <value>node04:8088</value>
</property>
```

流程：

hdfs所有操作在root账号下

``` shell
node01:
	cd $HADOOP_HOME/etc/hadoop
	cp mared-site.xml.template mapred-site.xml
	vi mapred-site.xml
	vi yarn-site.xml
	scp mapred-site.xml yarn-site.xml node02:`pwd`
	scp mapred-site.xml yarn-site.xml node03:`pwd`
	scp mapred-site.xml yarn-site.xml node04:`pwd`
	vi slaves // NodeManage默认会在和datanode相同点
	start-yarn.sh
node03~node04:
	yarn-daemon.sh start resourcemanager
	
```

运行官方提供的WC

```shell
hdfs dfs -mkdir -p /data/wc/input
hdfs dfs -put data.txt /data/wc/input
cd $HADOOP_HOME/share/hadoop/mapreduce
hadoop jar hadoop-mapreduce-examples-xxx.jar wordcount /data/wc/input 	/data/wc/output

hdfs dfs -cat /data/wc/output/part-r-r00000
hdfs dfs -get /data/wc/output/part-r-r00000 ./
```

## MR提交三种方式

1.开发 -> jar -> 上传到集群中的某一个节点运行

2.嵌入【linux，windows】（非hadoop jar）的集群方式 on yarn

​	client	->	RM	->AppMaster

​	mapreduce.framework.name	->	yarn

​	conf.set("mapreduce.app-submission.cross-platform","true");

​	job.setJar("F:\\codehome\\bigdata\\hdfs-api\\target\\hdfs-api-1.0-0.1.jar");

3.local，单机

​	mapreduce.framework.name	->	local

​	conf.set("mapreduce.app-submission.cross-platform","true");//win运行必须配置

支持输入

```java
String[] other = new GenericOptionsParser(conf, args).getRemainingArgs();
other[0] 输入路径
other[1] 输出路径
```

​	





