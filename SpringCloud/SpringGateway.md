# Spring Boot Gateway

路由（routes：路由，它由唯一标识（ID）、目标服务地址（uri）、一组断言（predicates）和一组过

滤器组成（filters）。filters 不是必需参数。）

截取请求

``` yml
spring:
  cloud:
    gateway:
      routes:
      # 路由标识（id：标识，具有唯一性）   截取请求
      - id: route_simple
        # 目标服务地址（uri：地址，请求转发后的地址）
        uri: https://www.zouwencong.com
        # 路由条件（predicates：断言，匹配 HTTP 请求内容）
        predicates:
        ## 转发地址格式为 uri/archive，/str 部分会被下面的过滤器给截取掉
        - Path=/str/archive
        filters:
        ## 截取路径位数
        - StripPrefix=1
```



转发指定地址，并传入参数

``` yml
spring:
  cloud:
    gateway:
      routes:
      # 路由标识（id：标识，具有唯一性）   转发指定地址并传入参数
      - id: route_uri
        # 目标服务地址（uri：地址，请求转发后的地址）
        uri: http://localhost:9000
        # 路由条件（predicates：断言，匹配 HTTP 请求内容）
        predicates:
        ## 匹配 GET 请求
        - Method=GET
        # 过滤器（filters：过滤器，过滤规则）
        filters:
        ## 添加指定参数
        - AddRequestParameter=name, zwc
```



转发指定服务，并传递参数

``` yml
spring:
  cloud:
    gateway:
      routes:
      # 路由标识（id：标识，具有唯一性）   转发指定服务并传入参数
      - id: route_addRequestParameter
        # 目标服务地址（uri：地址，请求转发后的地址）
        uri: lb://gateway-service
        # 路由条件（predicates：断言，匹配 HTTP 请求内容）
        predicates:
        ## 匹配 GET 请求
        - Method=GET
        # 过滤器（filters：过滤器，过滤规则）
        filters:
        ## 添加指定参数
        - AddRequestParameter=age, three
```



熔断

``` yml
spring:
  cloud:
    gateway:
      routes:
      # 路由标识（id：标识，具有唯一性）   熔断
      - id: route_hystrix
        # 目标服务地址（uri：地址，请求转发后的地址）
        uri: lb://gateway-service
        # 路由条件（predicates：断言，匹配 HTTP 请求内容）
        predicates:
        ## 匹配 GET 请求
        - Method=GET
        # 过滤器（filters：过滤器，过滤规则）
        filters:
        ## 添加指定参数
        - AddRequestParameter=age, three
        ## 熔断
        - name: Hystrix
          args:
            name: fallbackcmd
            ### fallback 时调用的方法 http://localhost:8000/fallback
            fallbackUri: forward:/fallback
```



限流

``` yml
spring:
  cloud:
    gateway:
      routes:
      # 路由标识（id：标识，具有唯一性）   限流
      - id: route_requestRateLimiter
        # 目标服务地址（uri：地址，请求转发后的地址）
        uri: lb://gateway-service
        # 路由条件（predicates：断言，匹配 HTTP 请求内容）
        predicates:
        ## 匹配 GET 请求
        - Method=GET
        # 过滤器（filters：过滤器，过滤规则）
        filters:
        ## 添加指定参数
        - AddRequestParameter=age, three
        ## 限流
        - name: RequestRateLimiter
          args:
            ### 限流过滤器的 Bean 名称
            key-resolver: '#{@uriKeyResolver}'
            ### 希望允许用户每秒处理多少个请求
            redis-rate-limiter.replenishRate: 1
            ### 用户允许在一秒钟内完成的最大请求数
            redis-rate-limiter.burstCapacity: 3
```



全局过滤

``` yml
spring:
  cloud:
    gateway:      
      routes:
      # 路由标识（id：标识，具有唯一性）   综合
      - id: route_all
        # 目标服务地址（uri：地址，请求转发后的地址）
        uri: lb://gateway-service
        # 路由条件（predicates：断言，匹配 HTTP 请求内容）
        predicates:
        ## 转发地址格式为 uri/routeAll，/all 部分会被下面的过滤器给截取掉
        - Path=/all/routeAll
        ## 匹配 GET 请求
        - Method=GET
        # 过滤器（filters：过滤器，过滤规则）
        filters:
        ## 截取路径位数
        - StripPrefix=1
        ## 添加指定参数
        - AddRequestParameter=pass, yes
        ## 熔断
        - name: Hystrix
          args:
            name: fallbackcmd
            ### fallback 时调用的方法 http://localhost:8000/fallback
            fallbackUri: forward:/fallback
        ## 限流
        - name: RequestRateLimiter
          args:
            ### 限流过滤器的 Bean 名称
            key-resolver: '#{@uriKeyResolver}'
            ### 希望允许用户每秒处理多少个请求
            redis-rate-limiter.replenishRate: 1
            ### 用户允许在一秒钟内完成的最大请求数
            redis-rate-limiter.burstCapacity: 3
```

