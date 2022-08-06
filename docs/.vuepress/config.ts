import { defaultTheme, defineUserConfig } from 'vuepress'
import sidebar from './sidebar'

export default defineUserConfig({
  // 网站的标题
  title: "something",
  // 上下文根
  base: "/note-case/",
  theme: defaultTheme({
    sidebar: sidebar
  })
})
