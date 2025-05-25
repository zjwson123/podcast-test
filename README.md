# 播客App高保真原型

## 项目概述

这是一个类似小宇宙的播客应用高保真原型，包含完整的用户界面设计和交互逻辑。原型采用现代化的设计语言，完全按照iPhone 15 Pro的尺寸和iOS设计规范制作。

## 功能特性

### 🎯 核心功能
- **首页** - 个性化推荐、最近播放、热门内容
- **发现** - 分类浏览、热门排行、搜索功能
- **播放器** - 全功能音频播放控制界面
- **订阅** - 已订阅播客管理、更新提醒
- **个人中心** - 用户信息、设置、收藏管理

### 🎨 设计特色
- **iPhone 15 Pro尺寸** (393x852px) 完美适配
- **iOS设计语言** - 毛玻璃效果、圆角设计、系统字体
- **真实图片素材** - 来自Unsplash的高质量图片
- **现代化配色** - 橙色渐变主题色，符合播客应用特色
- **完整交互元素** - 状态栏、导航栏、Tab栏、迷你播放器

### 💻 技术实现
- **HTML5** - 语义化标签，结构清晰
- **Tailwind CSS** - 现代化CSS框架，快速开发
- **FontAwesome** - 丰富的图标库
- **响应式设计** - 适配不同屏幕尺寸
- **模块化结构** - 每个页面独立文件，便于维护

## 文件结构

```
podcast-test/
├── index.html              # 主入口文件，展示所有原型
├── assets/
│   └── common.css          # 公共样式文件
├── pages/
│   ├── home.html           # 首页
│   ├── discover.html       # 发现页
│   ├── player.html         # 播放器
│   ├── subscriptions.html  # 订阅页
│   └── profile.html        # 个人中心
└── README.md               # 项目说明
```

## 使用方法

1. **本地预览**
   ```bash
   # 直接在浏览器中打开 index.html
   open index.html
   ```

2. **本地服务器**
   ```bash
   # 使用Python启动本地服务器
   python -m http.server 8000
   # 或使用Node.js
   npx serve .
   ```

3. **在线部署**
   - 可直接部署到GitHub Pages、Netlify、Vercel等静态网站托管平台

## 界面说明

### 首页 (home.html)
- 顶部推荐横幅
- 最近播放列表
- 热门推荐内容
- 迷你播放器

### 发现页 (discover.html)
- 搜索功能
- 分类标签
- 热门排行榜
- 推荐卡片
- 新上线内容

### 播放器 (player.html)
- 大尺寸播客封面
- 播放进度控制
- 播放速度调节
- 功能按钮（收藏、分享、下载）
- 节目描述

### 订阅页 (subscriptions.html)
- 订阅统计信息
- 筛选标签
- 订阅列表
- 更新状态提醒

### 个人中心 (profile.html)
- 用户信息展示
- 收听统计
- 功能菜单
- 设置选项

## 开发建议

### 转换为移动应用
1. **React Native**
   - 可直接参考样式和布局
   - 使用React Native Elements或NativeBase
   - 集成音频播放库如react-native-track-player

2. **Flutter**
   - 参考Material Design适配
   - 使用flutter_audio_service处理音频
   - 采用Provider或Bloc进行状态管理

3. **原生开发**
   - iOS: 使用UIKit或SwiftUI
   - Android: 使用Jetpack Compose或传统View

### 后端集成
- 播客RSS源解析
- 用户认证系统
- 播放历史记录
- 推荐算法
- 离线下载功能

## 设计规范

### 颜色规范
- 主色调: `#FF6B35` (橙色)
- 辅助色: `#F7931E` (橙黄色)
- 文字色: `#000000` (黑色)
- 次要文字: `#8E8E93` (灰色)
- 背景色: `#FFFFFF` (白色)

### 字体规范
- 系统字体: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`
- 标题: 17-24px, 600字重
- 正文: 14-16px, 400字重
- 说明文字: 12-14px, 400字重

### 间距规范
- 页面边距: 16px
- 卡片间距: 8-16px
- 内容间距: 12px
- 图标大小: 16-24px

## 许可证

本项目仅供学习和参考使用，图片素材来源于Unsplash，遵循其使用条款。

## 联系方式

如有问题或建议，欢迎提出Issue或Pull Request。