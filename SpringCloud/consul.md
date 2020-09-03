依赖导入：

``` xml
		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-consul-discovery</artifactId>
		</dependency>
```

项目入口Application增加`@EnableDiscoveryClient`

配置信息：

``` yml
spring:
  application:
    name: service-yy
  cloud:
    consul:
      host: localhost
      port: 8500
      discovery:
        serviceName: service-yy
        prefer-ip-address: true
        query-passing: true
```

