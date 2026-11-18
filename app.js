/* OCI-Start website: theme toggle, i18n, tabs, drawer, lightbox, copy buttons, GitHub stats */
(function () {
  "use strict";

  /* ---------- i18n ---------- */
  var I18N = {
    zh: {
      "doc.title": "OCI-Start | 开源的甲骨文云 (Oracle Cloud) 实例管理面板",
      "doc.desc": "OCI-Start 是一个开源、可自托管的 Oracle Cloud (OCI) 实例管理面板：多租户 API 管理、ARM/AMD 并发开机、换 IP / IPv6、VNIC、引导卷调整、Web SSH 与 VNC 控制台，私钥只保存在你自己的服务器。",
      "doc.ogTitle": "OCI-Start | 开源的甲骨文云实例管理面板",
      "doc.ogDesc": "开源、自托管的 Oracle Cloud 实例管理面板。一条命令部署，私钥只保存在你自己的服务器。",
      "skip": "跳到主要内容",
      "aria.home": "OCI-Start 首页",
      "aria.nav": "主导航",
      "aria.drawer": "导航菜单",
      "aria.mobileNav": "移动导航",
      "aria.openMenu": "打开导航菜单",
      "aria.closeMenu": "关闭导航菜单",
      "aria.shots": "界面截图",
      "aria.install": "部署方式",
      "nav.features": "功能概览",
      "nav.shots": "界面预览",
      "nav.start": "快速开始",
      "nav.all": "功能清单",
      "nav.faq": "常见问题",
      "nav.docs": "文档",
      "nav.releases": "更新日志",
      "theme.toDark": "切换到深色主题",
      "theme.toLight": "切换到浅色主题",
      "hero.release": "查看最新版本",
      "hero.releaseTpl": "最新版本 {v}",
      "hero.tagline": "在自己的服务器上运行 OCI-Start，集中管理多租户、云实例与网络资源。从并发开机到日常监控，私钥始终保存在本机。",
      "hero.start": "快速部署",
      "hero.shots": "界面预览",
      "copy.jdk": "复制环境安装命令",
      "copy.url": "复制访问地址",
      "copy.script": "复制脚本部署命令",
      "copy.docker": "复制 Docker 部署命令",
      "copy.ok": "已复制",
      "copy.fail": "复制失败",
      "meta.license": "开源协议",
      "meta.runtime": "部署方式",
      "feat.title": "一个面板，管理云上日常",
      "shots.title": "界面预览",
      "shots.lead": "以下截图来自项目 README，界面会随版本持续更新。",
      "shots.t1": "系统监控",
      "shots.t2": "API 管理",
      "shots.t3": "开机配置",
      "shots.t4": "快速添加 API",
      "shots.t5": "账号批量检测",
      "shots.t6": "系统设置",
      "shots.t7": "笔记",
      "shots.zoom": "放大查看当前截图",
      "shots.zoomShort": "放大",
      "shots.prev": "上一张截图",
      "shots.next": "下一张截图",
      "shots.close": "关闭大图预览",
      "shots.a1": "系统监控页：API 数、开机实例数、抢机次数，以及 CPU、内存和系统信息仪表盘",
      "shots.a2": "API 管理页：租户列表与添加、导入、导出、批量检测等操作",
      "shots.a3": "添加实例页：ARM 与 AMD 配置模板以及部署数量设置",
      "shots.a4": "快速添加 API 页：粘贴 OCI 配置后自动填写各字段",
      "shots.a5": "账号批量检测结果：总账号、存活账号与失效账号数量柱状图",
      "shots.a6": "系统设置页：账号安全、Telegram 通知、GitHub 登录和钉钉通知配置",
      "shots.a7": "笔记页：添加速记标题和内容",
      "start.title": "三步完成部署",
      "start.lead": "支持脚本和 Docker 两种方式，任选其一。",
      "start.s1t": "准备环境",
      "start.s1d": "一台 Linux 服务器，推荐 Debian 或 Ubuntu。脚本方式需要 Java 8 及以上版本。",
      "start.s2t": "运行安装命令",
      "start.s2d": "复制所选部署方式的命令，在服务器上执行。新版本会自动检测并安装 Redis，如本机已有 Redis 请先评估端口冲突。",
      "start.s3t": "打开面板",
      "start.s3d": "浏览器访问下面的地址，使用配置的用户名和密码登录。",
      "start.tScript": "脚本部署（推荐）",
      "start.common": "常用命令",
      "start.note": "使用 Nginx 或宝塔反向代理、需要 VNC 控制台转发时，请参考",
      "start.noteLink": "README 中的配置说明",
      "cmd.stop": "停止",
      "cmd.restart": "重启",
      "cmd.status": "查看状态",
      "cmd.update": "升级",
      "cmd.uninstall": "卸载",
      "cmd.ps": "查看容器状态",
      "cmd.logs": "实时查看日志",
      "all.title": "完整功能清单",
      "all.lead": "按面板菜单分组，列出已经实现的功能。",
      "all.g1": "租户与账号",
      "all.g1i1": "粘贴配置快速导入，支持创建最小权限专用 API 用户",
      "all.g1i2": "账号批量测活，识别免费号、试用号与 PAYG 升级号",
      "all.g1i3": "IAM 用户管理、密码策略、邮箱 MFA",
      "all.g1i4": "区域订阅、配额查询、账单费用与审计日志",
      "all.g1i5": "月度流量预警，超过阈值自动关机",
      "all.g1i6": "租户备份导出需验证码确认",
      "all.g2": "开机任务",
      "all.g2i1": "快速开机与自定义配置两种模式",
      "all.g2i2": "ARM 与 AMD 多档规格模板，含付费规格",
      "all.g2i3": "按区域和架构拉取可用系统镜像",
      "all.g2i4": "自定义实例数量、重试间隔与每日时段",
      "all.g2i5": "按区域单价估算每小时与每月费用",
      "all.g2i6": "实时任务日志与历史记录",
      "all.g3": "实例运维",
      "all.g3i1": "启动、停止、终止（可保留启动盘）、改名",
      "all.g3i2": "在线调整 CPU 与内存，一键 DD 重装",
      "all.g3i3": "引导卷扩容，VPU 在 0–120 之间调整",
      "all.g3i4": "换公网 IPv4，可按指定网段筛选",
      "all.g3i5": "批量添加 IPv6，管理附属 VNIC",
      "all.g3i6": "Web SSH、SFTP 与 VNC 控制台",
      "all.g4": "云服务与工具",
      "all.g4i1": "45+ 商业区域地图与历史开机记录",
      "all.g4i2": "浏览器直连各区域延迟测试",
      "all.g4i3": "对象存储桶浏览、上传与下载",
      "all.g4i4": "OCI 邮件服务配置与发信",
      "all.g4i5": "VCN 安全列表规则管理",
      "all.g4i6": "GCP 实例查看与管理",
      "all.g5": "DNS 与监控",
      "all.g5i1": "Cloudflare 解析记录同步与编辑",
      "all.g5i2": "腾讯云 EdgeOne 解析与加速域名",
      "all.g5i3": "任意厂商 VPS 统一纳管",
      "all.g5i4": "一键安装探针，上报 CPU、内存、磁盘与流量",
      "all.g5i5": "电信、联通、移动三网延迟与丢包",
      "all.g6": "系统与安全",
      "all.g6i1": "HTTP 代理池，可为单个租户绑定代理",
      "all.g6i2": "Telegram、Bark、钉钉、飞书通知与每日巡检",
      "all.g6i3": "GitHub / Google 登录、Turnstile、TOTP 二次验证",
      "all.g6i4": "MFA 验证码备份、笔记、加密数据迁移",
      "all.g6i5": "系统日志、宿主机监控、开发者 API Token",
      "all.g6i6": "深浅色主题、中英文界面、手机端适配",
      "com.title": "社区与贡献者",
      "com.lead": "OCI-Start 由社区共同维护。欢迎提交 Issue、Pull Request，或者点一个 Star。",
      "com.contrib": "贡献者",
      "com.contribAlt": "OCI-Start 贡献者头像",
      "com.contribFallback": "查看 GitHub 全部贡献者列表 →",
      "com.guide": "贡献指南",
      "com.issue": "反馈问题",
      "com.history": "Star 趋势",
      "com.historyAlt": "OCI-Start GitHub Star 数量随时间变化的曲线",
      "com.historyFallback": "前往 Star History 查看实时趋势曲线 →",
      "sp.title": "赞助商",
      "sp.s1": "项目赞助",
      "sp.s2": "服务器资源",
      "sp.s3": "社区论坛",
      "sp.s4": "VPS 提供商",
      "sp.s5": "CDN 加速与安全防护",
      "faq.title": "常见问题",
      "faq.q1": "OCI-Start 收费吗？",
      "faq.a1": "不收费。项目基于 Apache-2.0 协议开源，可以自由部署和修改。",
      "faq.q2": "我的 API 私钥安全吗？",
      "faq.a2": "面板部署在你自己的服务器上，私钥保存在本机 H2 数据库，不会上传到任何远端。Telegram 机器人只用来推送通知，不接触账号数据。",
      "faq.q3": "需要什么样的服务器？",
      "faq.a3": "推荐 Debian 或 Ubuntu。脚本部署需要 Java 8 及以上版本，也可以选择 Docker 部署。",
      "faq.q4": "如何升级到新版本？",
      "faq.a4": "脚本部署执行 ./oci-start.sh update 即可。面板的“关于”页面也会提示新版本。",
      "faq.q5": "怎么修改默认端口或配置反向代理？",
      "faq.a5": "默认端口为 9856，可在配置文件的 server.port 中修改。使用 Nginx 或宝塔反代时需要设置可信代理，具体请看 README 的配置章节。",
      "faq.q6": "除了甲骨文云还支持其他云吗？",
      "faq.a6": "核心功能围绕 Oracle Cloud。此外支持导入 GCP 服务账号查看和管理实例，以及纳管任意厂商的 VPS 进行监控。",
      "foot.disc": "本项目仅用于技术测试、学习与研究。严禁修改功能后引导他人部署以盗取账号信息。使用者须遵守所在地区法律法规及云厂商服务条款，一切后果由使用者自行承担。",
      "foot.issues": "Issues",
      "foot.license": "License",
      "foot.copy": "基于 Apache-2.0 协议发布 · Copyright © 2024–present",
      "hero.kicker": "自托管云管理面板",
      "hero.headline": "掌控你的",
      "meta.arch": "计算架构",
      "meta.storage": "私钥存储",
      "meta.local": "本地 H2",
      "feat.all": "完整功能清单",
      "cap.tenancy": "多租户管理",
      "cap.tenancyDesc": "批量导入 OCI 账号，统一查看租户状态、区域订阅与配额。",
      "cap.compute": "实例生命周期",
      "cap.computeDesc": "并发创建 ARM 与 AMD 实例，在面板内完成启停、扩容和远程运维。",
      "cap.monitor": "资源监控",
      "cap.monitorDesc": "跟踪实例流量和主机负载，查看网络延迟与丢包情况。",
      "aria.stack": "计算、网络与存储的分层示意"
    },
    en: {
      "doc.title": "OCI-Start | Open-source Oracle Cloud Instance Management Panel",
      "doc.desc": "OCI-Start is an open-source, self-hosted Oracle Cloud (OCI) instance management panel with multi-tenant API management, concurrent ARM/AMD provisioning, IP/IPv6 rotation, VNICs, boot volume resizing, web SSH and VNC console. Your private keys never leave your server.",
      "doc.ogTitle": "OCI-Start | Open-source Oracle Cloud Instance Panel",
      "doc.ogDesc": "Open-source, self-hosted Oracle Cloud instance panel. One-command deployment; private keys stay on your own server.",
      "skip": "Skip to main content",
      "aria.home": "OCI-Start home",
      "aria.nav": "Main",
      "aria.drawer": "Navigation menu",
      "aria.mobileNav": "Mobile navigation",
      "aria.openMenu": "Open navigation menu",
      "aria.closeMenu": "Close navigation menu",
      "aria.shots": "Screenshots",
      "aria.install": "Install method",
      "nav.features": "Features",
      "nav.shots": "Interface",
      "nav.start": "Get Started",
      "nav.all": "All Features",
      "nav.faq": "FAQ",
      "nav.docs": "Docs",
      "nav.releases": "Changelog",
      "theme.toDark": "Switch to dark theme",
      "theme.toLight": "Switch to light theme",
      "hero.release": "See the latest release",
      "hero.releaseTpl": "Latest release {v}",
      "hero.tagline": "Run OCI-Start on your own server. Manage tenants, provision instances and monitor your Oracle Cloud resources in one place. Your private keys stay local.",
      "hero.start": "Quick start",
      "hero.shots": "Preview UI",
      "copy.jdk": "Copy JDK install command",
      "copy.url": "Copy panel URL",
      "copy.script": "Copy script install commands",
      "copy.docker": "Copy Docker install commands",
      "copy.ok": "Copied",
      "copy.fail": "Copy failed",
      "meta.license": "License",
      "meta.runtime": "Deployment",
      "feat.title": "Everyday cloud operations",
      "shots.title": "Screenshots",
      "shots.lead": "These screenshots come from the project README. The UI keeps evolving with each release.",
      "shots.t1": "Monitoring",
      "shots.t2": "API Management",
      "shots.t3": "Boot Config",
      "shots.t4": "Quick Add API",
      "shots.t5": "Account Check",
      "shots.t6": "Settings",
      "shots.t7": "Notes",
      "shots.zoom": "Zoom current screenshot",
      "shots.zoomShort": "Zoom",
      "shots.prev": "Previous screenshot",
      "shots.next": "Next screenshot",
      "shots.close": "Close preview",
      "shots.a1": "Monitoring page with API, instance and boot counts plus CPU, memory and system gauges",
      "shots.a2": "API management page with the tenant list and add, import, export and batch check actions",
      "shots.a3": "Add instance page with ARM and AMD shape templates and instance count",
      "shots.a4": "Quick add API page that fills in fields from a pasted OCI config",
      "shots.a5": "Account check result: bar chart of total, active and dead accounts",
      "shots.a6": "Settings page with account security, Telegram, GitHub login and DingTalk options",
      "shots.a7": "Notes page for adding a quick memo",
      "start.title": "Up and running in three steps",
      "start.lead": "Install with a script or with Docker. Pick one.",
      "start.s1t": "Prepare a server",
      "start.s1d": "Any Linux server; Debian or Ubuntu is recommended. The script install needs Java 8 or later.",
      "start.s2t": "Run the installer",
      "start.s2d": "Run the commands for your chosen deployment method on your server. New versions install Redis automatically, so check for port conflicts if Redis is already running.",
      "start.s3t": "Open the panel",
      "start.s3d": "Visit the address below and sign in with the username and password you configured.",
      "start.tScript": "Script (recommended)",
      "start.common": "Common commands",
      "start.note": "Using Nginx or BT Panel as a reverse proxy, or forwarding the VNC console? See",
      "start.noteLink": "the configuration guide in the README",
      "cmd.stop": "stop",
      "cmd.restart": "restart",
      "cmd.status": "status",
      "cmd.update": "upgrade",
      "cmd.uninstall": "uninstall",
      "cmd.ps": "container status",
      "cmd.logs": "follow logs",
      "all.title": "Everything it can do",
      "all.lead": "Implemented features, grouped by panel menu.",
      "all.g1": "Tenants and accounts",
      "all.g1i1": "Quick import from a pasted config, with optional least-privilege API users",
      "all.g1i2": "Batch health checks that detect Free Tier, trial and PAYG accounts",
      "all.g1i3": "IAM users, password policy and email MFA",
      "all.g1i4": "Region subscriptions, quotas, billing and audit logs",
      "all.g1i5": "Monthly traffic alerts with auto-shutdown at a threshold",
      "all.g1i6": "Tenant backup export protected by a verification code",
      "all.g2": "Boot tasks",
      "all.g2i1": "Quick boot and custom configuration modes",
      "all.g2i2": "ARM and AMD shape templates, including paid shapes",
      "all.g2i3": "Images loaded per region and architecture",
      "all.g2i4": "Instance count, retry interval and daily time window",
      "all.g2i5": "Hourly and monthly cost estimates from regional prices",
      "all.g2i6": "Live task logs and history",
      "all.g3": "Instance operations",
      "all.g3i1": "Start, stop, terminate (optionally keep boot volume), rename",
      "all.g3i2": "Online CPU and memory resize, one-click DD reinstall",
      "all.g3i3": "Boot volume resize with VPUs from 0 to 120",
      "all.g3i4": "Public IPv4 rotation with CIDR filtering",
      "all.g3i5": "Batch IPv6 and secondary VNIC management",
      "all.g3i6": "Web SSH, SFTP and VNC console",
      "all.g4": "Cloud services and tools",
      "all.g4i1": "Map of 45+ commercial regions with boot history",
      "all.g4i2": "In-browser latency tests to each region",
      "all.g4i3": "Object Storage buckets: browse, upload, download",
      "all.g4i4": "OCI Email Delivery setup and sending",
      "all.g4i5": "VCN security list rules",
      "all.g4i6": "GCP instance listing and management",
      "all.g5": "DNS and monitoring",
      "all.g5i1": "Cloudflare record sync and editing",
      "all.g5i2": "Tencent EdgeOne records and acceleration domains",
      "all.g5i3": "VPS from any provider in one list",
      "all.g5i4": "One-click probes for CPU, memory, disk and traffic",
      "all.g5i5": "Latency and loss for the three major China carriers",
      "all.g6": "System and security",
      "all.g6i1": "HTTP proxy pool with per-tenant binding",
      "all.g6i2": "Telegram, Bark, DingTalk and Feishu alerts with daily checks",
      "all.g6i3": "GitHub / Google login, Turnstile and TOTP",
      "all.g6i4": "MFA code backup, notes and encrypted data migration",
      "all.g6i5": "System logs, host monitoring and developer API tokens",
      "all.g6i6": "Light and dark themes, Chinese and English, mobile layout",
      "com.title": "Community",
      "com.lead": "OCI-Start is maintained with help from the community. Issues, pull requests and stars are all welcome.",
      "com.contrib": "Contributors",
      "com.contribAlt": "Avatars of OCI-Start contributors",
      "com.contribFallback": "View all contributors on GitHub →",
      "com.guide": "Contributing guide",
      "com.issue": "Report an issue",
      "com.history": "Star history",
      "com.historyAlt": "Chart of OCI-Start GitHub stars over time",
      "com.historyFallback": "View live Star History chart →",
      "sp.title": "Sponsors",
      "sp.s1": "Sponsor",
      "sp.s2": "Server resources",
      "sp.s3": "Community forum",
      "sp.s4": "VPS provider",
      "sp.s5": "CDN and security",
      "faq.title": "FAQ",
      "faq.q1": "Is OCI-Start free?",
      "faq.a1": "Yes. It is open source under the Apache-2.0 license, so you can deploy and modify it freely.",
      "faq.q2": "Are my API private keys safe?",
      "faq.a2": "The panel runs on your own server and keys are stored in a local H2 database. Nothing is uploaded to a remote service. The Telegram bot only sends notifications and never sees account data.",
      "faq.q3": "What server do I need?",
      "faq.a3": "Debian or Ubuntu is recommended. The script install needs Java 8 or later; Docker works too.",
      "faq.q4": "How do I upgrade?",
      "faq.a4": "With the script install, run ./oci-start.sh update. The panel's About page also tells you when a new version is out.",
      "faq.q5": "How do I change the port or set up a reverse proxy?",
      "faq.a5": "The default port is 9856 and can be changed with server.port. Behind Nginx or BT Panel you need to configure trusted proxies; see the configuration section of the README.",
      "faq.q6": "Does it support clouds other than Oracle?",
      "faq.a6": "The core features target Oracle Cloud. You can also import GCP service accounts to manage instances, and add VPS from any provider for monitoring.",
      "foot.disc": "This project is for testing, learning and research only. Do not modify it to trick others into deploying it and steal their accounts. You must follow local laws and your cloud provider's terms; you are responsible for how you use it.",
      "foot.issues": "Issues",
      "foot.license": "License",
      "foot.copy": "Released under the Apache-2.0 License · Copyright © 2024–present",
      "hero.kicker": "Self-hosted console",
      "hero.headline": "Manage your",
      "feat.all": "All capabilities",
      "meta.arch": "Compute architectures",
      "meta.storage": "Private key storage",
      "meta.local": "Local H2",
      "cap.tenancy": "Tenant management",
      "cap.tenancyDesc": "Import OCI accounts in bulk and review tenant health, region subscriptions and quotas.",
      "cap.compute": "Instance lifecycle",
      "cap.computeDesc": "Provision ARM and AMD instances in parallel, resize them and open a remote console.",
      "cap.monitor": "Resource monitoring",
      "cap.monitorDesc": "Track instance traffic, host load, network latency and packet loss.",
      "aria.stack": "A layered illustration of compute, networking and storage"
    }
  };

  function detectLanguage() {
    try {
      var param = new URLSearchParams(window.location.search).get("lang");
      if (param === "en" || param === "zh") return param;
    } catch (_) {}
    try {
      var saved = localStorage.getItem("oci_site_lang");
      if (saved === "en" || saved === "zh") return saved;
    } catch (_) {}
    var navLang = navigator.language || "";
    if (navLang && navLang.toLowerCase().indexOf("zh") !== 0) return "en";
    return "zh";
  }

  var lang = detectLanguage();

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.zh[key] || "";
  }

  var langBtn = document.getElementById("langBtn");
  var releaseTag = "";
  var releaseText = document.getElementById("releaseText");
  var shotCaption = document.getElementById("shotCaption");
  var shotDialog = document.getElementById("shotDialog");
  var shotTabsCtrl = null;
  function renderRelease() {
    if (releaseText && releaseTag) {
      releaseText.textContent = t("hero.releaseTpl").replace("{v}", releaseTag);
    }
  }

  function updateMetaContent(selector, value) {
    var el = document.querySelector(selector);
    if (el && value) el.setAttribute("content", value);
  }

  /* ---------- Theme toggle (two-state: system <-> opposite override) ---------- */
  var schemeMeta = document.querySelector('meta[name="color-scheme"]');
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  var themeBtn = document.getElementById("themeBtn");
  var darkStack = document.getElementById("darkStack");
  var lightThemeMeta = document.getElementById("themeColorLight");
  var darkThemeMeta = document.getElementById("themeColorDark");
  var starHistoryImg = document.getElementById("starHistoryImg");
  var historyFallback = document.getElementById("historyFallback");

  function renderedScheme() {
    var c = schemeMeta ? schemeMeta.content : "light dark";
    if (c === "light" || c === "dark") return c;
    return systemDark.matches ? "dark" : "light";
  }

  function syncThemeAssets() {
    var isDark = renderedScheme() === "dark";
    var c = schemeMeta ? schemeMeta.content : "light dark";
    var pinned = c === "light" || c === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    darkStack.media = isDark ? "all" : "not all";

    if (lightThemeMeta) {
      lightThemeMeta.content = pinned ? (c === "dark" ? "#191b19" : "#f8f8f5") : "#f8f8f5";
    }
    if (darkThemeMeta) {
      darkThemeMeta.content = pinned ? (c === "dark" ? "#191b19" : "#f8f8f5") : "#191b19";
    }
    if (starHistoryImg) {
      var targetSrc = "https://star-history.dera.page/svg?repos=doubleDimple/oci-start&type=Date" + (isDark ? "&theme=dark" : "");
      if (starHistoryImg.getAttribute("src") !== targetSrc) {
        starHistoryImg.hidden = false;
        if (historyFallback) historyFallback.hidden = true;
        starHistoryImg.setAttribute("src", targetSrc);
      }
    }
  }

  function setStored(value) {
    try {
      if (value) localStorage.setItem("color-scheme", value);
      else localStorage.removeItem("color-scheme");
    } catch (_) {}
    if (schemeMeta) schemeMeta.content = value || "light dark";
    syncThemeAssets();
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var target = renderedScheme() === "dark" ? "light" : "dark";
      var system = systemDark.matches ? "dark" : "light";
      setStored(target === system ? null : target);
    });
  }

  if (systemDark.addEventListener) {
    systemDark.addEventListener("change", syncThemeAssets);
  }

  function bindImageFallback(imgId, fallbackId) {
    var img = document.getElementById(imgId);
    var fallback = document.getElementById(fallbackId);
    if (!img || !fallback) return;
    function showFallback() {
      img.hidden = true;
      fallback.hidden = false;
    }
    function showImage() {
      img.hidden = false;
      fallback.hidden = true;
    }
    img.addEventListener("error", showFallback);
    img.addEventListener("load", showImage);
    if (img.complete && img.naturalWidth === 0) showFallback();
  }

  bindImageFallback("contribImg", "contribFallback");
  bindImageFallback("starHistoryImg", "historyFallback");
  syncThemeAssets();

  /* ---------- Section navigation ---------- */
  var navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  function setActiveNavLink(activeLink) {
    navLinks.forEach(function (a) {
      var on = a === activeLink;
      a.classList.toggle("target-current", on);
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  if (typeof CSS !== "undefined" && CSS.supports("scroll-target-group", "auto")) {
    var syncAriaCurrent = function () {
      var current = document.querySelector(".nav-links a:target-current");
      navLinks.forEach(function (a) {
        if (a === current) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };
    syncAriaCurrent();
    document.addEventListener("scrollend", syncAriaCurrent, { passive: true });
  } else if ("IntersectionObserver" in window) {
    var sections = Array.from(document.querySelectorAll("main > section[id]"));
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = "#" + entry.target.id;
        var match = navLinks.find(function (a) { return a.getAttribute("href") === id; }) || null;
        setActiveNavLink(match);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (target) { spy.observe(target); });
  }

  /* ---------- Mobile navigation drawer ---------- */
  var navDrawer = document.getElementById("navDrawer");
  var drawerOpenBtn = document.getElementById("drawerOpenBtn");
  var drawerCloseBtn = document.getElementById("drawerCloseBtn");

  function prepareDialog(dialog) {
    if (!dialog || typeof dialog.showModal === "function") return;
    dialog.classList.add("fallback-dialog");
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    var backdrop = document.createElement("div");
    backdrop.className = "dialog-backdrop";
    backdrop.setAttribute("aria-hidden", "true");
    var returnFocus;

    dialog.showModal = function () {
      returnFocus = document.activeElement;
      document.body.appendChild(backdrop);
      document.body.classList.add("dialog-open");
      dialog.setAttribute("open", "");
      dialog.querySelector("[autofocus]").focus();
    };

    dialog.close = function () {
      dialog.removeAttribute("open");
      backdrop.remove();
      document.body.classList.remove("dialog-open");
      if (returnFocus) returnFocus.focus({ preventScroll: true });
      dialog.dispatchEvent(new Event("close"));
    };

    backdrop.addEventListener("click", dialog.close);
    dialog.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        event.preventDefault();
        dialog.close();
      } else if (event.key === "Tab") {
        var controls = dialog.querySelectorAll('a[href], button, [tabindex="0"]');
        var first = controls[0];
        var last = controls[controls.length - 1];
        var next = event.shiftKey ? last : first;
        if (document.activeElement === (event.shiftKey ? first : last)) {
          event.preventDefault();
          next.focus();
        }
      }
    });
  }

  prepareDialog(navDrawer);
  prepareDialog(shotDialog);

  if (navDrawer && drawerOpenBtn && drawerCloseBtn) {
    drawerOpenBtn.addEventListener("click", function () {
      navDrawer.showModal();
      drawerOpenBtn.setAttribute("aria-expanded", "true");
    });
    drawerCloseBtn.addEventListener("click", function () { navDrawer.close(); });
    navDrawer.addEventListener("close", function () {
      drawerOpenBtn.setAttribute("aria-expanded", "false");
    });
    navDrawer.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      var rect = navDrawer.getBoundingClientRect();
      if (link || event.clientX < rect.left || event.clientX > rect.right) navDrawer.close();
      if (link && link.hash && link.origin === location.origin) {
        var destination = document.getElementById(link.hash.slice(1));
        if (destination) destination.focus({ preventScroll: true });
      }
    });
    var wideNav = window.matchMedia("(min-width: 821px)");
    wideNav.addEventListener("change", function () {
      if (wideNav.matches && navDrawer.hasAttribute("open")) navDrawer.close();
    });
  }

  /* ---------- Tabs ---------- */
  function initTabs(list, onSelect) {
    if (!list) return null;
    var tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (tab) { return document.getElementById(tab.getAttribute("aria-controls")); });
    var selected = 0;

    function selectIndex(index, focus) {
      selected = (index + tabs.length) % tabs.length;
      tabs.forEach(function (tab, i) {
        var active = i === selected;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
        var panel = panels[i];
        if (active) {
          panel.removeAttribute("hidden");
          panel.tabIndex = 0;
        } else {
          panel.setAttribute("hidden", "until-found");
          panel.removeAttribute("tabindex");
        }
      });
      var activeTab = tabs[selected];
      if (focus) activeTab.focus({ preventScroll: true });
      if (list.scrollWidth > list.clientWidth) {
        var offset = activeTab.getBoundingClientRect().left - list.getBoundingClientRect().left;
        if (offset < 0) list.scrollLeft += offset;
        if (offset + activeTab.offsetWidth > list.clientWidth) list.scrollLeft += offset + activeTab.offsetWidth - list.clientWidth;
      }
      if (onSelect) onSelect(selected, activeTab, panels[selected]);
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () { selectIndex(index, false); });
      panels[index].addEventListener("beforematch", function () { selectIndex(index, false); });
    });
    list.addEventListener("keydown", function (event) {
      var index = tabs.indexOf(event.target);
      if (index < 0) return;
      var next = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: tabs.length - 1 };
      if (Object.prototype.hasOwnProperty.call(next, event.key)) {
        event.preventDefault();
        selectIndex(next[event.key], true);
      }
    });
    selectIndex(0, false);
    return {
      count: tabs.length,
      selectIndex: selectIndex,
      getSelectedIndex: function () { return selected; },
      getItem: function (i) { return { tab: tabs[i], panel: panels[i] }; }
    };
  }

  function syncShotCaption(panel) {
    if (!shotCaption || !panel) return;
    var img = panel.querySelector("img");
    if (!img) return;
    var key = img.getAttribute("data-i18n-alt");
    shotCaption.textContent = (key && t(key)) || img.getAttribute("alt") || "";
  }

  shotTabsCtrl = initTabs(document.getElementById("shotTabs"), function (_idx, _tab, panel) {
    syncShotCaption(panel);
  });
  initTabs(document.getElementById("installTabs"));
  document.querySelectorAll("[data-shot]").forEach(function (link) {
    link.addEventListener("click", function () {
      var tab = document.getElementById(link.dataset.shot);
      if (tab) tab.click();
    });
  });

  /* ---------- Screenshot Lightbox Dialog ---------- */
  var shotZoomBtn = document.getElementById("shotZoomBtn");
  var shotDialogTitle = document.getElementById("shotDialogTitle");
  var shotDialogCount = document.getElementById("shotDialogCount");
  var shotDialogImg = document.getElementById("shotDialogImg");
  var shotDialogCaption = document.getElementById("shotDialogCaption");
  var shotPrevBtn = document.getElementById("shotPrevBtn");
  var shotNextBtn = document.getElementById("shotNextBtn");
  var shotCloseBtn = document.getElementById("shotCloseBtn");

  function getHiResSrc(img) {
    var srcset = img.getAttribute("srcset") || "";
    var parts = srcset.split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    if (parts.length) {
      var candidate = parts[parts.length - 1].split(/\s+/)[0];
      if (candidate) return candidate;
    }
    return img.getAttribute("src") || "";
  }

  function renderShotDialog(index) {
    if (!shotTabsCtrl || !shotDialog) return;
    var item = shotTabsCtrl.getItem(index);
    if (!item || !item.tab || !item.panel) return;
    var img = item.panel.querySelector("img");
    if (!img) return;
    var titleText = item.tab.textContent || "";
    var altKey = img.getAttribute("data-i18n-alt");
    var captionText = (altKey && t(altKey)) || img.getAttribute("alt") || "";

    if (shotDialogTitle) shotDialogTitle.textContent = titleText;
    if (shotDialogCount) shotDialogCount.textContent = (index + 1) + " / " + shotTabsCtrl.count;
    if (shotDialogImg) {
      shotDialogImg.src = getHiResSrc(img);
      shotDialogImg.width = img.width || 1440;
      shotDialogImg.height = img.height || 751;
      shotDialogImg.alt = captionText;
    }
    if (shotDialogCaption) shotDialogCaption.textContent = captionText;
  }

  function openShotDialog() {
    if (!shotDialog || !shotTabsCtrl) return;
    renderShotDialog(shotTabsCtrl.getSelectedIndex());
    if (!shotDialog.hasAttribute("open")) shotDialog.showModal();
  }

  function stepShotDialog(delta) {
    if (!shotTabsCtrl) return;
    var next = (shotTabsCtrl.getSelectedIndex() + delta + shotTabsCtrl.count) % shotTabsCtrl.count;
    shotTabsCtrl.selectIndex(next, false);
    renderShotDialog(next);
  }

  if (shotZoomBtn) shotZoomBtn.addEventListener("click", openShotDialog);

  document.querySelectorAll("#screenshots .panels img").forEach(function (img) {
    img.addEventListener("click", openShotDialog);
  });

  if (shotDialog) {
    if (shotPrevBtn) shotPrevBtn.addEventListener("click", function () { stepShotDialog(-1); });
    if (shotNextBtn) shotNextBtn.addEventListener("click", function () { stepShotDialog(1); });
    if (shotCloseBtn) shotCloseBtn.addEventListener("click", function () { shotDialog.close(); });

    shotDialog.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        stepShotDialog(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        stepShotDialog(1);
      }
    });

    shotDialog.addEventListener("cancel", function (e) {
      if (e.cancelable) {
        e.preventDefault();
        shotDialog.close();
      }
    });

    if (!("closedBy" in shotDialog)) {
      shotDialog.addEventListener("click", function (event) {
        if (event.target !== shotDialog) return;
        var rect = shotDialog.getBoundingClientRect();
        var isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!isDialogContent) shotDialog.close();
      });
    }
  }

  /* ---------- Language switcher ---------- */
  function applyLanguage(next, persist) {
    lang = next === "en" ? "en" : "zh";
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.title = t("doc.title");
    updateMetaContent('meta[name="description"]', t("doc.desc"));
    updateMetaContent('meta[property="og:title"]', t("doc.ogTitle"));
    updateMetaContent('meta[property="og:description"]', t("doc.ogDesc"));
    updateMetaContent('meta[name="twitter:title"]', t("doc.ogTitle"));
    updateMetaContent('meta[name="twitter:description"]', t("doc.ogDesc"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = I18N[lang][el.getAttribute("data-i18n")];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = I18N[lang][el.getAttribute("data-i18n-aria")];
      if (v !== undefined) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var v = I18N[lang][el.getAttribute("data-i18n-alt")];
      if (v !== undefined) el.setAttribute("alt", v);
    });
    if (langBtn) {
      langBtn.textContent = lang === "en" ? "中文" : "EN";
      langBtn.setAttribute("aria-label", lang === "en" ? "切换为中文" : "Switch to English");
      langBtn.setAttribute("lang", lang === "en" ? "zh-CN" : "en");
    }
    renderRelease();
    if (shotTabsCtrl) {
      var activeIdx = shotTabsCtrl.getSelectedIndex();
      var activeItem = shotTabsCtrl.getItem(activeIdx);
      if (activeItem) syncShotCaption(activeItem.panel);
      if (shotDialog && shotDialog.hasAttribute("open")) renderShotDialog(activeIdx);
    }
    if (persist !== false) {
      try { localStorage.setItem("oci_site_lang", lang); } catch (_) {}
    }
  }

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      applyLanguage(lang === "zh" ? "en" : "zh", true);
    });
  }
  if (lang === "en") applyLanguage("en", false);

  window.addEventListener("storage", function (e) {
    if (e.key === "color-scheme" && schemeMeta) {
      schemeMeta.content = e.newValue || "light dark";
      syncThemeAssets();
    }
    if (e.key === "oci_site_lang" && (e.newValue === "en" || e.newValue === "zh")) {
      applyLanguage(e.newValue, false);
    }
  });

  /* ---------- Copy buttons (Invoker Commands with click & LAN HTTP fallback) ---------- */
  var timers = new WeakMap();
  var lastMsg = "";

  function report(button, ok) {
    var tip = button.nextElementSibling;
    if (!tip) return;
    clearTimeout(timers.get(button));
    button.removeAttribute("data-copied");
    button.removeAttribute("data-failed");
    var msg = ok ? t("copy.ok") : t("copy.fail");
    if (msg === lastMsg) msg += "\u00A0";
    lastMsg = msg;
    tip.textContent = "";
    void button.offsetWidth;
    button.setAttribute(ok ? "data-copied" : "data-failed", "");
    requestAnimationFrame(function () { tip.textContent = msg; });
    timers.set(button, setTimeout(function () {
      button.removeAttribute("data-copied");
      button.removeAttribute("data-failed");
      tip.textContent = "";
    }, 2000));
  }

  function legacyCopy(text) {
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.cssText = "position:fixed;inset-block-start:0;opacity:0";
    document.body.append(field);
    field.select();
    try {
      return document.execCommand("copy");
    } catch (_) {
      return false;
    } finally {
      field.remove();
    }
  }

  async function copy(button, target) {
    if (!target) return;
    var text = target.innerText.trim();
    if (!text) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else if (!legacyCopy(text)) {
        throw new Error("Copy failed");
      }
      report(button, true);
    } catch (_) {
      if (legacyCopy(text)) report(button, true);
      else report(button, false);
    }
  }

  if ("CommandEvent" in window) {
    document.addEventListener("command", function (e) {
      if (e.command && e.command.indexOf("--copy") === 0) copy(e.source, e.target);
    }, true);
  } else {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest('button[command^="--copy"]');
      if (!btn) return;
      copy(btn, document.getElementById(btn.getAttribute("commandfor")));
    });
  }

  /* ---------- GitHub stats (public API, cached per session) ---------- */
  var navStars = document.getElementById("navStars");

  function showStats(data) {
    if (typeof data.stars === "number") {
      var compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(data.stars);
      if (navStars) {
        navStars.textContent = compact;
        navStars.hidden = false;
      }
    }
    if (data.tag) {
      releaseTag = data.tag;
      renderRelease();
    }
  }

  function loadStats() {
    try {
      var cached = JSON.parse(sessionStorage.getItem("oci_gh_stats") || "null");
      if (cached && Date.now() - cached.at < 30 * 60 * 1000) {
        showStats(cached);
        return;
      }
    } catch (_) {}

    var base = "https://api.github.com/repos/doubleDimple/oci-start";
    var headers = { Accept: "application/vnd.github+json" };
    Promise.allSettled([
      fetch(base, { headers: headers }).then(function (r) { return r.ok ? r.json() : null; }),
      fetch(base + "/releases/latest", { headers: headers }).then(function (r) { return r.ok ? r.json() : null; })
    ]).then(function (res) {
      var repo = res[0].status === "fulfilled" ? res[0].value : null;
      var rel = res[1].status === "fulfilled" ? res[1].value : null;
      var data = {
        at: Date.now(),
        stars: repo && typeof repo.stargazers_count === "number" ? repo.stargazers_count : null,
        tag: rel && rel.tag_name ? String(rel.tag_name) : ""
      };
      showStats(data);
      if (data.stars !== null || data.tag) {
        try { sessionStorage.setItem("oci_gh_stats", JSON.stringify(data)); } catch (_) {}
      }
    });
  }

  loadStats();
})();
