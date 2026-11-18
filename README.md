# OCI-Start Official Website (`oci-start-site`)

[doubleDimple/oci-start](https://github.com/doubleDimple/oci-start) 的独立静态项目介绍站，**零构建依赖**（纯 HTML + CSS + 原生 JS），已支持 **GitHub Pages** 默认预览，并可随时通过 **Cloudflare Pages** 或 **Cloudflare DNS (`CNAME`)** 绑定自定义域名。

- **GitHub Pages 默认预览地址**：<https://doubledimple.github.io/oci-start-site/>
- **主项目仓库**：<https://github.com/doubleDimple/oci-start>

## 目录结构

```text
oci-start-site/
├── assets/
│   ├── fonts/                     # 自托管 Geist 字体与 OFL 许可证
│   ├── hero/                      # 浅色与深色主题的服务器主视觉
│   └── shots/                     # 七组真实面板截图，含高清版本
├── index.html                     # 单页：项目介绍、核心功能、界面截图、快速开始、完整功能清单、社区与赞助、FAQ
├── styles.css                     # 主题、导航、首屏与响应式布局
├── sections.css                   # 界面预览、部署步骤、功能清单、社区与 FAQ
├── app.js                         # 交互（中英文切换、主题切换、截图与部署方式标签页、复制按钮、GitHub Star 与最新版本号）
├── favicon.svg                    # OCI-Start 品牌图标
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
