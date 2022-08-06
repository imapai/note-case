## 运行
> 初始化项目  
> yarn init  
> 安装项目本地依赖 VuePress  
> yarn add -D vuepress@next  
> 本地运行  
> yarn run docs:run    
> 打包生成部署文件  
> yarn run docs:build  
## 配置
- 修改 /.vuepress/config.ts 进行个性化设置，具体可参考官方文档。  
- 修改 /.vuepress/sidebar.ts 进行左侧边栏配置。

## 部署
1.首先执行打包生成部署文件后，将会在 /docs/.vuepress/dist 目录下生成用户部署的静态文件  
2.执行 deploy.sh 脚本将生成的静态文件推送到 gh-pages 的代码分支上  
3.配置 github 的Github-Pages 服务即可  