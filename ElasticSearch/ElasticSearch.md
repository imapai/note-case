# ElasticSearch

## 基础概念

1.index（索引）

索引是具有某些类似特征文档集合

2.type（类型）

索引的逻辑类别，允许在同一索引中储存不同的类型文档，官方建议使用单类型，并在将来版本剔除。

3.document（文档）

编制索引的一条基本信息

4.分片

允许将一个索引/类型通过分片的方式分布在不同的机器上，突破单机器物理存储限制

5.副本

+ 保证高可用，副本位置不在同一节点机器
+ 并行计算，扩展搜索量/吞吐量

## 安装ElasticSearch

docker 镜像工厂[地址](http://hub.daocloud.io/)

使用docker方式安装，es+kibana（图形化界面）

+ 编写docker-compose.yml

``` yml
version: "3.1"
services:
  elasticsearch: 
    image: daocloud.io/library/elasticsearch:6.5.4
    restart: always
    container_name: elasticsearch
    ports: 
      - 9200:9200
      - 9300:9300
   kibana:
    image: daocloud.io/library/kibana:6.5.4
    restart: always
    container_name: kibana
    ports: 
      - 5601:5601
    environment:
      - elasticsearch_url=hw.amfun.top:9200
    depends_on:
      - elasticseatch
```

+ docker pull elasticsearch:6.5.4和kibana
+ 在服务器中新建`docker-compose.yml`
+ docker-compose up -d