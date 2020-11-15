# Express框架

Express更像是一个使用nodejs编写后端项目的脚手架，可以十分方便的定义项目的，提供一些十分简单明了的API，让nodejs开发后端更加便捷。

## 创建express项目

``` 
# 初始化node项目
node init
# 安装express并写入dependencies配置中
npm install express -s
# 安装node项目热更新插件
npm install nodemon -D
# 使用nodemon热更新启动项目
nodemon ./src/app.js
```

### Helloworld示例

``` javascript
const express = require('express')

const app = express()

app.use((req, res) => {
    res.json({
        name: 'xioaming',
        age: 19
    })
})

app.listen(3000,(req, res) => {
    console.log('express starting...')
})
```

## Express路由

创建路由

``` javascript
const exress = require('express')

const router = express.Router()
# router会像app一样可以定义get、post、use
```







