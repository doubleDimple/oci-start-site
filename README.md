# OCI-Start Official Website (`oci-start-site`)

[doubleDimple/oci-start](https://github.com/doubleDimple/oci-start) 的独立静态项目介绍站，**零构建依赖**（纯 HTML + CSS + 原生 JS），已支持 **GitHub Pages** 默认预览，并可随时通过 **Cloudflare Pages** 或 **Cloudflare DNS (`CNAME`)** 绑定自定义域名。

- **GitHub Pages 默认预览地址**：<https://doubledimple.github.io/oci-start-site/>
- **主项目仓库**：<https://github.com/doubleDimple/oci-start>

## 目录结构

```text
oci-start-site/
├── assets/
│   ├── hero-sky-1x.jpg / 2x.jpg   # 首屏暮色云海背景图（1x/2x 多分辨率）
│   └── hero-card-1x.jpg / 2x.jpg  # 首屏右侧磨砂边框云基础设施视觉卡图
├── index.html                     # 主页面（分栏首屏、6 格能力矩阵、深海军蓝交互控制台、安全与部署区）
├── styles.css                     # 视觉样式（#FFFFFF 独立白顶栏 + #08141F 深海军蓝 + #FF6B1F 活力橙 + #2EE59D 在线绿）
├── app.js                         # 交互脚本（自适应导航、无障碍标签页、Canvas 点阵区域地图、复制反馈、中英双语）
├── favicon.svg                    # OCI-Start 经线圆环品牌图标
├── _headers                       # Cloudflare Pages 安全与缓存响应头配置
├── .nojekyll                      # GitHub Pages 免 Jekyll 构建标记
└── README.md                      # 本地预览与 Cloudflare 域名绑定指南
```

## 本地预览

```bash
python3 -m http.server 8080
# 浏览器访问 http://localhost:8080
```

---

## 绑定 Cloudflare 域名指南（两种方案任选）

### 方案 A：Cloudflare Pages 直连本仓库（推荐，全球与国内边缘访问更快）

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) → 进入 **Workers & Pages** → 点击 **Create** → **Pages** → **Connect to Git**。
2. 选择 `doubleDimple/oci-start-site` 仓库。
3. 构建设置保持默认（零构建）：
   - **Production branch**: `main`
   - **Framework preset**: `None`
   - **Build command**: 留空
   - **Build output directory**: `/`
4. 点击 **Save and Deploy** 完成部署。
5. 进入该 Pages 项目的 **Custom domains（自定义域）** → **Set up a custom domain** → 填入你在 Cloudflare 托管的域名（如 `oci.yourdomain.com` 或根域名），Cloudflare 会自动添加 DNS 记录并签发 HTTPS 证书。

### 方案 B：GitHub Pages + Cloudflare DNS 解析

1. 在本仓库根目录新建 `CNAME` 文件（无后缀），写入你的自定义域名（如 `oci.yourdomain.com`），提交并推送到 `main` 分支。
2. 打开 Cloudflare Dashboard → 选择对应域名 → **DNS → Records**，添加记录：
   - **子域名**（如 `oci`）：类型 `CNAME`，名称填 `oci`，目标填 `doubledimple.github.io`
   - **根域名**（`@`）：类型 `CNAME`，名称填 `@`，目标填 `doubledimple.github.io`
3. **SSL/TLS 注意事项**：首次在 GitHub 仓库 **Settings → Pages** 勾选 **Enforce HTTPS** 时，建议先将 Cloudflare 该条记录设为 **DNS only（灰色云朵）**，待 GitHub 证书签发完成后再开启橙色云朵代理，并将 Cloudflare **SSL/TLS 加密模式设为 Full 或 Full (strict)**。
