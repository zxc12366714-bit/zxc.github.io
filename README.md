# 司空震资料馆

一个可直接部署的静态个人网站，整理《王者荣耀》英雄司空震的技能机制、背景故事、历史调整、胜率/出装公开数据点和皮肤官方入口。

## 本地预览

直接打开 `index.html` 即可浏览。也可以启动静态服务器：

```powershell
python -m http.server 4173
```

然后访问 `http://localhost:4173/`。

## 全球访问部署

推荐用任一静态托管平台：

- GitHub Pages：把本目录推到 GitHub 仓库，在 `Settings > Pages` 选择分支部署。
- Cloudflare Pages：连接 GitHub 仓库，构建命令留空，输出目录填 `/`。
- Netlify：拖拽整个目录或连接仓库，发布目录填 `/`。

## 版权策略

- 项目内的 `assets/storm-citadel-hero.png` 是原创生成的抽象主视觉，不含司空震肖像、皮肤、Logo 或游戏界面。
- 皮肤插画使用腾讯官方 CDN 远程加载，不下载、不修改、不打包进项目仓库。
- 官方技能、公告和故事内容只做原创摘要与来源链接，避免复刻长篇文本。
- 《王者荣耀》、司空震、相关角色、皮肤、商标和官方美术版权归其权利人所有。

## 已核对来源

- 官方英雄页：`https://pvp.qq.com/web201605/herodetail/537.shtml`
- 官方英雄列表接口：`https://pvp.qq.com/web201605/js/herolist.json`
- 2022-07-29 平衡调整：`https://pvp.qq.com/web201706/newsdetail.shtml?tid=575320`
- 2023-10-19 平衡调整：`https://pvp.qq.com/web201706/newsdetail.shtml?tid=609358`
- 2024-12-04 平衡调整：`https://pvp.qq.com/web201706/newsdetail.shtml?tid=638456`
- 2024-12-05 出装判定说明：`https://pvp.qq.com/web201706/newsdetail.shtml?tid=638502`
- 2025-01-08 平衡调整：`https://pvp.qq.com/web201706/newsdetail.shtml?tid=640921`
- 2025-01-22 平衡调整：`https://pvp.qq.com/web201706/newsdetail.shtml?tid=641975`
- 2025-04-16 平衡调整：`https://pvp.qq.com/web201706/newsdetail.shtml?tid=648134`
