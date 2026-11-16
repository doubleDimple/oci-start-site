/* OCI-Start website: theme toggle, i18n, tabs, copy buttons, GitHub stats */
(function () {
  "use strict";

  /* ---------- i18n ---------- */
  var I18N = {
    zh: {
      "skip": "跳到主要内容",
      "aria.home": "OCI-Start 首页",
      "aria.nav": "主导航",
      "aria.shots": "界面截图",
      "aria.install": "部署方式",
      "nav.features": "功能",
      "nav.shots": "截图",
      "nav.start": "快速开始",
      "nav.faq": "常见问题",
      "nav.docs": "文档",
      "nav.releases": "更新日志",
      "theme.toDark": "切换到深色主题",
      "theme.toLight": "切换到浅色主题",
      "hero.release": "查看最新版本",
      "hero.releaseTpl": "最新版本 {v}",
      "hero.text": "开源的甲骨文云实例管理面板",
      "hero.tagline": "多租户 API 管理、ARM / AMD 并发开机、换 IP、Web SSH 与 VNC 控制台。部署在你自己的服务器上，私钥不会离开本机。",
      "hero.start": "快速开始",
      "hero.shots": "查看截图",
      "hero.star": "Star on GitHub",
      "copy.install": "复制安装命令",
      "copy.script": "复制脚本部署命令",
      "copy.docker": "复制 Docker 部署命令",
      "copy.ok": "已复制",
      "copy.fail": "复制失败",
      "meta.license": "开源协议",
      "meta.stars": "Stars",
      "meta.runtime": "运行环境",
      "meta.port": "默认端口",
      "feat.title": "为甲骨文云日常运维而做",
      "feat.lead": "不用反复登录官方控制台，也不用拼凑各种脚本。常用的 OCI 操作都可以在一个面板里完成。",
      "feat.f1t": "多租户 API 管理",
      "feat.f1d": "粘贴配置即可导入多个 OCI 账号。批量测活，识别免费号与升级号，查看配额、账单和审计日志，订阅新区域。",
      "feat.f2t": "ARM / AMD 并发开机",
      "feat.f2d": "内置 A1.Flex、E2.1.Micro 等规格模板。多个 API 同时开机，可设置重试间隔和每日时段，成功后推送通知。",
      "feat.f3t": "实例全生命周期",
      "feat.f3d": "启动、停止、终止、同步和改名。在线调整 CPU 与内存，扩容引导卷并修改 VPU，一键 DD 重装系统。",
      "feat.f4t": "IP、IPv6 与网卡",
      "feat.f4d": "一键更换公网 IPv4，可指定目标网段。添加 IPv6、附属 VNIC，可视化管理安全列表规则。",
      "feat.f5t": "Web SSH 与 VNC 控制台",
      "feat.f5d": "浏览器内的 SSH 终端，支持 SFTP 上传下载。实例失联时可直接打开 OCI 控制台连接进行救援。",
      "feat.f6t": "DNS 解析联动",
      "feat.f6d": "接入 Cloudflare 与腾讯云 EdgeOne。换 IP 后可直接在面板里更新域名解析记录。",
      "feat.f7t": "流量与网络质量监控",
      "feat.f7d": "按月统计出入站流量，超过阈值可自动关机。一键安装探针，查看电信、联通、移动三网延迟与丢包。",
      "feat.f8t": "多渠道通知",
      "feat.f8d": "支持 Telegram、Bark、钉钉和飞书。开机结果、每日账号巡检和费用检查都可以推送。",
      "feat.f9t": "私钥本地存储",
      "feat.f9d": "API 私钥保存在本机 H2 数据库，不上传任何远端。登录支持 TOTP 二次验证、OAuth、Turnstile 和异常 IP 封禁。",
      "shots.title": "界面预览",
      "shots.lead": "以下截图来自项目 README，界面会随版本持续更新。",
      "shots.t1": "系统监控",
      "shots.t2": "API 管理",
      "shots.t3": "开机配置",
      "shots.t4": "快速添加 API",
      "shots.t5": "账号批量检测",
      "shots.t6": "系统设置",
      "shots.t7": "笔记",
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
      "start.s2d": "复制右侧命令到服务器执行。新版本会自动检测并安装 Redis，如本机已有 Redis 请先评估端口冲突。",
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
      "com.guide": "贡献指南",
      "com.issue": "反馈问题",
      "com.history": "Star 趋势",
      "com.historyAlt": "OCI-Start GitHub Star 数量随时间变化的曲线",
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
      "foot.disc": "本项目仅用于技术测试、学习与研究。严禁修改功能后引导他人部署以盗取账号信息。使用者须遵守所在地区法律法规及云厂商服务条款，一切后果由使用者自行承担。"
    },
    en: {
      "skip": "Skip to main content",
      "aria.home": "OCI-Start home",
      "aria.nav": "Main",
      "aria.shots": "Screenshots",
      "aria.install": "Install method",
      "nav.features": "Features",
      "nav.shots": "Screenshots",
      "nav.start": "Get Started",
      "nav.faq": "FAQ",
      "nav.docs": "Docs",
      "nav.releases": "Changelog",
      "theme.toDark": "Switch to dark theme",
      "theme.toLight": "Switch to light theme",
      "hero.release": "See the latest release",
      "hero.releaseTpl": "Latest release {v}",
      "hero.text": "Open-source Oracle Cloud instance panel",
      "hero.tagline": "Multi-tenant API management, concurrent ARM / AMD provisioning, IP rotation, web SSH and VNC console. Runs on your own server, so your private keys never leave it.",
      "hero.start": "Get Started",
      "hero.shots": "Screenshots",
      "hero.star": "Star on GitHub",
      "copy.install": "Copy install command",
      "copy.script": "Copy script install commands",
      "copy.docker": "Copy Docker install commands",
      "copy.ok": "Copied",
      "copy.fail": "Copy failed",
      "meta.license": "License",
      "meta.stars": "Stars",
      "meta.runtime": "Runtime",
      "meta.port": "Default port",
      "feat.title": "Built for everyday Oracle Cloud work",
      "feat.lead": "No more bouncing between the official console and a pile of scripts. The OCI tasks you do every day live in one panel.",
      "feat.f1t": "Multi-tenant API management",
      "feat.f1d": "Paste a config to import OCI accounts. Batch health checks, Free Tier vs. PAYG detection, quotas, billing, audit logs and region subscriptions.",
      "feat.f2t": "Concurrent ARM / AMD provisioning",
      "feat.f2d": "Shape templates for A1.Flex, E2.1.Micro and more. Run boot tasks across many APIs with custom retry intervals and daily windows, and get notified on success.",
      "feat.f3t": "Full instance lifecycle",
      "feat.f3d": "Start, stop, terminate, sync and rename. Resize CPU and memory online, grow boot volumes, tune VPUs, and reinstall with DD in one click.",
      "feat.f4t": "IPs, IPv6 and VNICs",
      "feat.f4d": "Rotate the public IPv4, optionally targeting specific CIDRs. Add IPv6 and secondary VNICs, and edit security list rules visually.",
      "feat.f5t": "Web SSH and VNC console",
      "feat.f5d": "An in-browser SSH terminal with SFTP upload and download. When an instance is unreachable, open the OCI console connection to rescue it.",
      "feat.f6t": "DNS integration",
      "feat.f6d": "Connects to Cloudflare and Tencent EdgeOne, so you can update DNS records right after rotating an IP.",
      "feat.f7t": "Traffic and network monitoring",
      "feat.f7d": "Monthly inbound and outbound traffic with optional auto-shutdown at a threshold. One-click probes report latency and loss for China Telecom, Unicom and Mobile.",
      "feat.f8t": "Notifications",
      "feat.f8d": "Telegram, Bark, DingTalk and Feishu. Get boot results, daily account checks and cost checks pushed to you.",
      "feat.f9t": "Keys stay local",
      "feat.f9d": "API private keys are stored in a local H2 database and never uploaded anywhere. Login supports TOTP, OAuth, Turnstile and IP banning.",
      "shots.title": "Screenshots",
      "shots.lead": "These screenshots come from the project README. The UI keeps evolving with each release.",
      "shots.t1": "Monitoring",
      "shots.t2": "API Management",
      "shots.t3": "Boot Config",
      "shots.t4": "Quick Add API",
      "shots.t5": "Account Check",
      "shots.t6": "Settings",
      "shots.t7": "Notes",
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
      "start.s2d": "Copy the commands on the right to your server. New versions install Redis automatically, so check for port conflicts if Redis is already running.",
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
      "com.guide": "Contributing guide",
      "com.issue": "Report an issue",
      "com.history": "Star history",
      "com.historyAlt": "Chart of OCI-Start GitHub stars over time",
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
      "foot.disc": "This project is for testing, learning and research only. Do not modify it to trick others into deploying it and steal their accounts. You must follow local laws and your cloud provider's terms; you are responsible for how you use it."
    }
  };

  var lang = "zh";
  try {
    var saved = localStorage.getItem("oci_site_lang");
    if (saved === "en" || saved === "zh") lang = saved;
  } catch (_) {}

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.zh[key] || "";
  }

  var langBtn = document.getElementById("langBtn");
  var releaseTag = "";
  var releaseText = document.getElementById("releaseText");

  function renderRelease() {
    if (releaseText && releaseTag) {
      releaseText.textContent = t("hero.releaseTpl").replace("{v}", releaseTag);
    }
  }

  function applyLanguage(next) {
    lang = next === "en" ? "en" : "zh";
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
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
      langBtn.setAttribute("lang", lang === "en" ? "zh-CN" : "en");
    }
    renderRelease();
    try { localStorage.setItem("oci_site_lang", lang); } catch (_) {}
  }

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      applyLanguage(lang === "zh" ? "en" : "zh");
    });
  }
  if (lang === "en") applyLanguage("en");

  /* ---------- Theme toggle (two-state: system <-> opposite override) ---------- */
  var schemeMeta = document.querySelector('meta[name="color-scheme"]');
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  var themeBtn = document.getElementById("themeBtn");

  function renderedScheme() {
    var c = schemeMeta ? schemeMeta.content : "light dark";
    if (c === "light" || c === "dark") return c;
    return systemDark.matches ? "dark" : "light";
  }

  function setStored(value) {
    try {
      if (value) localStorage.setItem("color-scheme", value);
      else localStorage.removeItem("color-scheme");
    } catch (_) {}
    if (schemeMeta) schemeMeta.content = value || "light dark";
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var target = renderedScheme() === "dark" ? "light" : "dark";
      var system = systemDark.matches ? "dark" : "light";
      setStored(target === system ? null : target);
    });
  }

  window.addEventListener("storage", function (e) {
    if (e.key === "color-scheme" && schemeMeta) schemeMeta.content = e.newValue || "light dark";
    if (e.key === "oci_site_lang" && (e.newValue === "en" || e.newValue === "zh")) applyLanguage(e.newValue);
  });

  /* ---------- Nav border on scroll + current section ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 4);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    var navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = "#" + entry.target.id;
        navLinks.forEach(function (a) {
          if (a.getAttribute("href") === id) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    navLinks.forEach(function (a) {
      var target = document.querySelector(a.getAttribute("href"));
      if (target) spy.observe(target);
    });
  }

  /* ---------- Tabs ---------- */
  var nativeFocusGroup = Object.hasOwn(HTMLElement.prototype, "focusGroup");

  function initTabs(list) {
    if (!list) return;
    var tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (tab) {
      return document.querySelector('[role="tabpanel"][aria-labelledby="' + tab.id + '"]');
    });

    function select(tab, focus) {
      tabs.forEach(function (item, i) {
        var on = item === tab;
        item.setAttribute("aria-selected", on ? "true" : "false");
        item.toggleAttribute("focusgroupstart", on);
        if (!nativeFocusGroup) item.tabIndex = on ? 0 : -1;
        var panel = panels[i];
        if (!panel) return;
        if (on) {
          panel.hidden = false;
          panel.setAttribute("tabindex", "0");
        } else {
          panel.hidden = "until-found";
          panel.removeAttribute("tabindex");
        }
      });
      if (focus) tab.focus();
      try {
        tab.scrollIntoView({ block: "nearest", inline: "nearest", container: "nearest" });
      } catch (_) {}
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(tab, false); });
      tab.addEventListener("focus", function () {
        if (tab.getAttribute("aria-selected") !== "true") select(tab, false);
      });
      if (panels[i]) {
        panels[i].addEventListener("beforematch", function () { select(tab, false); });
      }
    });

    if (!nativeFocusGroup) {
      tabs.forEach(function (tab) {
        tab.tabIndex = tab.getAttribute("aria-selected") === "true" ? 0 : -1;
      });
      list.addEventListener("keydown", function (e) {
        var cur = tabs.indexOf(document.activeElement);
        if (cur < 0) return;
        var next = -1;
        if (e.key === "ArrowRight") next = (cur + 1) % tabs.length;
        else if (e.key === "ArrowLeft") next = (cur - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tabs.length - 1;
        if (next >= 0) {
          e.preventDefault();
          select(tabs[next], true);
        }
      });
    }

    if (typeof CSS !== "undefined" && !CSS.supports("animation-timeline", "scroll()") && "IntersectionObserver" in window) {
      var start = document.createElement("div");
      var end = document.createElement("div");
      [start, end].forEach(function (s) {
        s.setAttribute("aria-hidden", "true");
        s.style.cssText = "min-inline-size:1px;min-block-size:1px;flex:none";
      });
      list.prepend(start);
      list.append(end);
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          list.classList.toggle(entry.target === start ? "more-start" : "more-end", !entry.isIntersecting);
        });
      }, { root: list, rootMargin: "1px" });
      obs.observe(start);
      obs.observe(end);
    }
  }

  initTabs(document.getElementById("shotTabs"));
  initTabs(document.getElementById("installTabs"));

  /* ---------- Copy buttons (Invoker Commands with click fallback) ---------- */
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

  async function copy(button, target) {
    if (!target) return;
    var text = target.innerText.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      report(button, true);
    } catch (_) {
      report(button, false);
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
  var metaStars = document.getElementById("metaStars");

  function showStats(data) {
    if (typeof data.stars === "number") {
      var compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(data.stars);
      if (navStars) {
        navStars.textContent = compact;
        navStars.hidden = false;
      }
      if (metaStars) metaStars.textContent = data.stars.toLocaleString("en");
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
