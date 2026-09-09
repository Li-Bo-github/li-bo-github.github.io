# Bo Li · React Portfolio

基于 React + Vite 的中英文个人主页，继续使用 GitHub Pages。默认中文，右上角切换英文。无需后端或付费托管服务。

## 本地开发

安装 Node.js 22.12+（或 Node.js 24）和 pnpm 10.15.1，然后在本目录运行：

```sh
pnpm install --frozen-lockfile
pnpm dev
```

发布前执行 `pnpm test` 和 `pnpm build`。`pnpm preview` 可以预览 `dist/` 中的生产构建。不要直接双击 index.html。

## 手动修改的位置

| 内容                                             | 文件                          |
| ------------------------------------------------ | ----------------------------- |
| 个人简介、联系方式、工作、教育、技能、中英文文案 | `src/data/profile.js`         |
| 展示项目、AI 视频、研究、更多项目                | `src/data/projects.js`        |
| 主题颜色、间距、移动端布局                       | `src/styles.css`              |
| 页面区块顺序                                     | `src/App.jsx`                 |
| 可复用项目卡片、导航、经历区块、标题             | `src/components/`             |
| 头像                                             | `public/images/bo-li.jpg`     |
| 最新 PDF 简历                                    | `public/resumes/`             |
| 视频、封面、字幕                                 | `public/media/`               |
| 自动构建和部署                                   | `.github/workflows/pages.yml` |

文案用 `text('中文', 'English')` 管理，不需要在组件里查找简历内容。新增项目只需在 `projects` 数组添加记录，使用唯一 `id`。

## 添加 AI 视频

把视频和封面放入 `public/media/`，在 `src/data/projects.js` 中修改 AI 影像记录：

```js
{
  id: 'video',
  category: 'AI / MOTION',
  title: text('我的作品标题', 'My film title'),
  description: text('作品说明', 'Film description'),
  tags: ['Generative AI', 'Video'],
  visual: 'motion',
  status: 'published',
  media: {
    src: '/media/my-film.mp4',
    poster: '/media/my-film.jpg',
    // 可选 WebVTT 字幕；仅在文件真实存在时填写。
    // captions: '/media/my-film.zh.vtt',
    // captionsLang: 'zh',
  },
  url: null,
}
```

也可将 `media.src` 替换为 HTTPS 直链视频。YouTube/Bilibili 等播放页面链接放入 `url` 并保留 `media: null`，卡片会显示外链。视频使用浏览器原生控件、不自动播放、移动端内联播放、按需加载，播放失败提供原视频入口。包含对白时可添加字幕。

当前 AI 卡片是预留位置，没有虚构作品或播放按钮。大型视频建议使用视频平台或对象存储，避免把大文件提交到 Git 仓库。

## GitHub Pages 发布

GitHub Pages 支持 React 的静态构建。此用户主页仓库部署在域名根目录，所以 Vite `base` 是 `/`。页面采用锚点导航，不依赖服务端路由，刷新不会出现 SPA 子路由 404。

1. 在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
2. 将重构分支合并到 `main`。PR 阶段仅构建检查；`main` 更新后自动发布 `dist/`。
3. 在 Actions 中确认 `Build and deploy React portfolio` 成功，然后访问 https://li-bo-github.github.io/ 。

如需撤回，revert 本次提交并恢复原来的 Pages 发布来源设置。旧 MDB 的 css/js/scss 和 License.pdf 保留在仓库中用于历史兼容及版权说明，但不会进入新的 Vite 构建。

## 内容来源

- 工作与教育信息以用户提供的《简历中文 - 李博.pdf》为主要来源，《resume bo 中英.pdf》补充英文表达。
- Amazon 2025 的工作终止日期为 2025.12，没有标为在职；跨境事件采用中文版的 40,000+ 汇总口径。
- Tharzen、ClaimTrust、其他研究和早期项目保留自原主页，并保留已有代码链接。
- 下载入口提供用户提交的原始 PDF；两份 PDF 中电话号码和内容细节存在差异，文件未被改写。页面联系方式采用两份简历一致的邮箱。
- 公共网站没有后端上传功能。手动修改数据、添加媒体、提交到 main 即可更新。

## 验证范围

`pnpm test` 检查双语字段、项目 ID、链接协议和静态资源路径；`pnpm build` 检查 React/Vite 生产构建。未提供真实视频，因此发布后的真实媒体还需自行确认浏览器解码、外链访问和字幕同步。
