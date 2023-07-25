import { defaultTheme, defineUserConfig } from 'vuepress'
import navbar from './navbar'
import sidebar from './sidebar'

export default defineUserConfig({
  // 网站的标题
  title: "未销的笔记",
  description: "学习笔记在线站点",
  // 上下文根
  base: "/notes/",
  theme: defaultTheme({
    navbar: navbar,
    sidebar: sidebar,
    logo: '/images/logo.JPG',
  })
})
