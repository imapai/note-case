# Express框架

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

``` 
const exress = require('express')

const router = express.Router()
# router会像app一样可以定义get、post、use
```







