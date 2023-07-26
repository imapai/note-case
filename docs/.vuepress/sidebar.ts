export default {
    '/go': [
        {
            'text': 'Go 语言基础',
            collapsible: true,
            children: [
                '/go/Go语言基础语法.md',
                '/go/Go命名规范.md',
            ]
        },
        {
            'text': 'Go 语言进阶',
            collapsible: true,
            children: [
                '/go/Go语言之优雅的Switch语句.md'
            ]
        }
    ],
    '/install': [
        {
            text: '安装笔记',
            children: [
                '/install/ApacheHttpd文件服务.md',
                '/install/jenkins.md',
                '/install/Linux的Mysql使用rpm安装采坑指南.md',
                '/install/Minio自建OSS对象存储.md'
            ]
        },
    ],
    '/other': [
        {
            text: '杂项',
            link: '/other/README.md',
            collapsible: true,
            children: [
                '/other/Gitbook写文档.md',
                '/other/Gitbook替代者docsify.md',
                '/other/Git常用命令.md',
                '/other/Git配置多个远程仓库.md',
                '/other/IDEA的dockers插件使用.md',
                '/other/Node终极版本管理方案NVM.md',
                '/other/Nrm-npm镜像源管理.md',
                '/other/Oh-My-Zsh.md',
                '/other/docker4springboot.md',
                '/other/docker基础.md',
                '/other/brew 常用命令.md',
            ]
        }
    ]
}