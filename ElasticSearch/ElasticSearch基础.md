# ElasticSearch入门

## 安装

### 安装ElasticSearch

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

### 安装IK分词器

