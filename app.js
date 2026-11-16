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
      "aria.marquee": "核心能力速览",
      "aria.drawer": "导航菜单",
      "aria.mobileNav": "移动导航",
      "aria.openMenu": "打开导航菜单",
      "aria.closeMenu": "关闭导航菜单",
      "aria.shots": "界面截图",
      "aria.install": "部署方式",
      "nav.features": "功能",
      "nav.shots": "截图",
      "nav.start": "快速开始",
      "nav.all": "功能清单",
      "nav.faq": "常见问题",
      "nav.docs": "文档",
      "nav.releases": "更新日志",
      "theme.toDark": "切换到深色主题",
      "theme.toLight": "切换到浅色主题",
      "motion.pause": "暂停动态",
      "motion.play": "恢复动态",
      "stage.title": "OCI-Start 实时控制台 · :9856",
      "stage.m1k": "多租户 API",
      "stage.m2k": "在线实例",
      "stage.m3k": "并发抢机",
      "stage.m3v": "3 区域运行中",
      "stage.m4k": "三网平均延迟",
      "stage.retry": "重试 #18",
      "stage.chip1": "私钥本机 H2 存储 · 零远端上传",
      "stage.chip2": "Cloudflare / EdgeOne 换 IP 自动联动",
      "stage.log1": "[ap-tokyo-1] A1.Flex (4C/24G) 开机成功 · 已推送 Telegram 与飞书通知",
      "stage.log2": "[ap-singapore-1] 公网 IPv4 已更换 · Cloudflare DNS 记录自动同步完成",
      "stage.log3": "[Batch Check] 12 个 OCI 租户巡检完成 · 9 免费号 / 3 PAYG 升级号全部存活",
      "stage.log4": "[us-sanjose-1] 引导卷在线扩容至 100 GB (20 VPU) · 三网探针上报正常",
      "mq.m1": "多租户 API 批量测活",
      "mq.m2": "ARM A1.Flex 并发抢机",
      "mq.m3": "一键更换公网 IPv4 / IPv6",
      "mq.m4": "Web SSH & SFTP 终端",
      "mq.m5": "VNC 救援控制台",
      "mq.m6": "引导卷扩容 & 0–120 VPU",
      "mq.m7": "Cloudflare & EdgeOne DNS",
      "mq.m8": "电信 · 联通 · 移动三网探针",
      "mq.m9": "Telegram · Bark · 钉钉 · 飞书",
      "mq.m10": "45+ 甲骨文商业区域测速",
      "hero.release": "查看最新版本",
      "hero.releaseTpl": "最新版本 {v}",
      "hero.text": "开源的甲骨文云实例管理面板",
      "hero.tagline": "多租户 API 管理、ARM / AMD 并发开机、换 IP、Web SSH 与 VNC 控制台。部署在你自己的服务器上，私钥不会离开本机。",
      "hero.start": "快速开始",
      "hero.shots": "查看截图",
      "hero.star": "Star on GitHub",
      "copy.install": "复制安装命令",
      "copy.jdk": "复制环境安装命令",
      "copy.url": "复制访问地址",
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
      "foot.issues": "问题反馈",
      "foot.license": "开源协议",
      "foot.copy": "基于 Apache-2.0 协议发布 · Copyright © 2024–present"
    },
    en: {
      "doc.title": "OCI-Start | Open-source Oracle Cloud Instance Management Panel",
      "doc.desc": "OCI-Start is an open-source, self-hosted Oracle Cloud (OCI) instance management panel with multi-tenant API management, concurrent ARM/AMD provisioning, IP/IPv6 rotation, VNICs, boot volume resizing, web SSH and VNC console. Your private keys never leave your server.",
      "doc.ogTitle": "OCI-Start | Open-source Oracle Cloud Instance Panel",
      "doc.ogDesc": "Open-source, self-hosted Oracle Cloud instance panel. One-command deployment; private keys stay on your own server.",
      "skip": "Skip to main content",
      "aria.home": "OCI-Start home",
      "aria.nav": "Main",
      "aria.marquee": "Key capabilities",
      "aria.drawer": "Navigation menu",
      "aria.mobileNav": "Mobile navigation",
      "aria.openMenu": "Open navigation menu",
      "aria.closeMenu": "Close navigation menu",
      "aria.shots": "Screenshots",
      "aria.install": "Install method",
      "nav.features": "Features",
      "nav.shots": "Screenshots",
      "nav.start": "Get Started",
      "nav.all": "All Features",
      "nav.faq": "FAQ",
      "nav.docs": "Docs",
      "nav.releases": "Changelog",
      "theme.toDark": "Switch to dark theme",
      "theme.toLight": "Switch to light theme",
      "motion.pause": "Pause motion",
      "motion.play": "Play motion",
      "stage.title": "OCI-Start Live Console · :9856",
      "stage.m1k": "Tenant APIs",
      "stage.m2k": "Live Instances",
      "stage.m3k": "Boot Tasks",
      "stage.m3v": "3 regions active",
      "stage.m4k": "Avg Carrier Ping",
      "stage.retry": "Retry #18",
      "stage.chip1": "Keys stored in local H2 · zero cloud upload",
      "stage.chip2": "Auto-syncs Cloudflare & EdgeOne on IP change",
      "stage.log1": "[ap-tokyo-1] A1.Flex (4C/24G) provisioned · Telegram & Feishu notified",
      "stage.log2": "[ap-singapore-1] Public IPv4 rotated · Cloudflare A record synced",
      "stage.log3": "[Batch Check] 12 OCI tenants healthy · 9 Free Tier / 3 PAYG active",
      "stage.log4": "[us-sanjose-1] Boot volume resized to 100 GB (20 VPU) · Probes online",
      "mq.m1": "Multi-Tenant Batch Check",
      "mq.m2": "Concurrent ARM A1.Flex Boot",
      "mq.m3": "One-Click IPv4 / IPv6 Rotation",
      "mq.m4": "In-Browser SSH & SFTP",
      "mq.m5": "VNC Rescue Console",
      "mq.m6": "Boot Volume & 0–120 VPU",
      "mq.m7": "Cloudflare & EdgeOne DNS",
      "mq.m8": "3-Carrier Latency Probes",
      "mq.m9": "Telegram · Bark · DingTalk · Feishu",
      "mq.m10": "45+ OCI Region Latency Map",
      "hero.release": "See the latest release",
      "hero.releaseTpl": "Latest release {v}",
      "hero.text": "Open-source Oracle Cloud instance panel",
      "hero.tagline": "Multi-tenant API management, concurrent ARM / AMD provisioning, IP rotation, web SSH and VNC console. Runs on your own server, so your private keys never leave it.",
      "hero.start": "Get Started",
      "hero.shots": "Screenshots",
      "hero.star": "Star on GitHub",
      "copy.install": "Copy install command",
      "copy.jdk": "Copy JDK install command",
      "copy.url": "Copy panel URL",
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
      "foot.copy": "Released under the Apache-2.0 License · Copyright © 2024–present"
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
  var motionBtn = document.getElementById("motionBtn");
  var motionBtnText = document.getElementById("motionBtnText");
  var liveLogText = document.getElementById("liveLogText");
  var motionPaused = false;
  try {
    motionPaused = sessionStorage.getItem("oci_motion_paused") === "1";
  } catch (_) {}

  function syncMotionState() {
    document.documentElement.toggleAttribute("data-motion-paused", motionPaused);
    if (motionBtnText) {
      motionBtnText.textContent = t(motionPaused ? "motion.play" : "motion.pause");
    }
  }

  if (motionBtn) {
    motionBtn.addEventListener("click", function () {
      motionPaused = !motionPaused;
      try { sessionStorage.setItem("oci_motion_paused", motionPaused ? "1" : "0"); } catch (_) {}
      syncMotionState();
    });
  }
  syncMotionState();

  if (liveLogText) {
    var logIndex = 0;
    var reducedMotionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setInterval(function () {
      if (motionPaused || reducedMotionMq.matches || document.hidden) return;
      logIndex = (logIndex + 1) % 4;
      var key = "stage.log" + (logIndex + 1);
      liveLogText.classList.add("is-switching");
      setTimeout(function () {
        liveLogText.setAttribute("data-i18n", key);
        liveLogText.textContent = t(key);
        liveLogText.classList.remove("is-switching");
      }, 150);
    }, 3400);
  }

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

    if (lightThemeMeta) {
      lightThemeMeta.content = pinned ? (c === "dark" ? "#1b1b1f" : "#ffffff") : "#ffffff";
    }
    if (darkThemeMeta) {
      darkThemeMeta.content = pinned ? (c === "dark" ? "#1b1b1f" : "#ffffff") : "#1b1b1f";
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

  /* ---------- Sticky header sentinel + Scrollspy ---------- */
  var nav = document.getElementById("nav");
  var navSentinel = document.getElementById("navSentinel");
  if (nav && navSentinel && !(typeof CSS !== "undefined" && CSS.supports("container-type", "scroll-state")) && "IntersectionObserver" in window) {
    var stickyObs = new IntersectionObserver(function (entries) {
      var entry = entries[entries.length - 1];
      nav.classList.toggle("is-stuck", !entry.isIntersecting);
    });
    stickyObs.observe(navSentinel);
  }

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

  if (navDrawer && drawerOpenBtn && drawerCloseBtn) {
    var drawerScroller = navDrawer.querySelector(".nav-drawer-scroller");
    var drawerSheet = navDrawer.querySelector(".nav-drawer-sheet");
    var pendingHash = "";
    var drawerCloseTimer = 0;
    var isOpeningDrawer = false;

    function onDrawerOpened() {
      isOpeningDrawer = false;
      drawerOpenBtn.setAttribute("aria-expanded", "true");
    }

    function onDrawerClosed() {
      clearTimeout(drawerCloseTimer);
      isOpeningDrawer = false;
      if (!navDrawer.open) return;
      navDrawer.close();
      drawerOpenBtn.setAttribute("aria-expanded", "false");
      if (pendingHash) {
        var target = document.querySelector(pendingHash);
        pendingHash = "";
        if (target) {
          target.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
          });
          try { target.focus({ preventScroll: true }); } catch (_) {}
        }
      }
    }

    async function openDrawer() {
      if (navDrawer.open) return;
      clearTimeout(drawerCloseTimer);
      pendingHash = "";
      isOpeningDrawer = true;
      navDrawer.showModal();
      drawerOpenBtn.setAttribute("aria-expanded", "true");

      if (!(typeof CSS !== "undefined" && CSS.supports("scroll-initial-target", "nearest"))) {
        drawerScroller.scrollTo({ left: drawerScroller.offsetWidth, behavior: "instant" });
        await new Promise(function (resolve) {
          requestAnimationFrame(function () { requestAnimationFrame(resolve); });
        });
      }

      isOpeningDrawer = false;
      drawerScroller.scrollTo({ left: 0, behavior: "auto" });
    }

    function closeDrawer() {
      if (!navDrawer.open) return;
      isOpeningDrawer = false;
      drawerScroller.scrollTo({ left: drawerScroller.offsetWidth, behavior: "auto" });
      clearTimeout(drawerCloseTimer);
      drawerCloseTimer = setTimeout(onDrawerClosed, 450);
    }

    if ("IntersectionObserver" in window && drawerSheet) {
      var visibleThreshold = Math.min(0.05, 1 / Math.max(1, window.innerWidth));
      var drawerObs = new IntersectionObserver(function (entries) {
        var entry = entries[entries.length - 1];
        if (!entry) return;
        if (entry.intersectionRatio < visibleThreshold && !isOpeningDrawer) onDrawerClosed();
        if (entry.intersectionRatio >= 0.99) onDrawerOpened();
      }, { root: navDrawer, threshold: [visibleThreshold, 1] });
      drawerObs.observe(drawerSheet);
    }

    if (!(typeof CSS !== "undefined" && CSS.supports("animation-timeline", "scroll()")) && drawerScroller && drawerSheet) {
      drawerScroller.addEventListener("scroll", function () {
        var w = drawerSheet.offsetWidth || 1;
        var ratio = 1 - Math.min(1, Math.max(0, drawerScroller.scrollLeft / w));
        navDrawer.style.setProperty("--drawer-backdrop", String(ratio));
      }, { passive: true });
    }

    drawerOpenBtn.addEventListener("click", openDrawer);
    drawerCloseBtn.addEventListener("click", closeDrawer);

    navDrawer.addEventListener("click", function (e) {
      if (drawerSheet && !drawerSheet.contains(e.target)) closeDrawer();
    });

    navDrawer.addEventListener("cancel", function (e) {
      if (e.cancelable) {
        e.preventDefault();
        closeDrawer();
      }
    });

    navDrawer.querySelectorAll('.nav-drawer-list a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        pendingHash = link.getAttribute("href") || "";
        closeDrawer();
      });
    });

    var wideNavMq = window.matchMedia("(min-width: 68.0625em)");
    function handleWideNav(e) {
      if (e.matches && navDrawer.open) {
        clearTimeout(drawerCloseTimer);
        pendingHash = "";
        navDrawer.close();
        drawerOpenBtn.setAttribute("aria-expanded", "false");
      }
    }
    if (wideNavMq.addEventListener) wideNavMq.addEventListener("change", handleWideNav);
  }

  /* ---------- Tabs ---------- */
  var nativeFocusGroup = Object.hasOwn(HTMLElement.prototype, "focusGroup");

  function initTabs(list, onSelect) {
    if (!list) return null;
    var tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (tab) {
      return document.querySelector('[role="tabpanel"][aria-labelledby="' + tab.id + '"]');
    });

    function select(tab, focus) {
      var idx = tabs.indexOf(tab);
      if (idx < 0) return;
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
      if (onSelect) onSelect(idx, tab, panels[idx]);
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

    return {
      count: tabs.length,
      getSelectedIndex: function () {
        var idx = tabs.findIndex(function (tab) {
          return tab.getAttribute("aria-selected") === "true";
        });
        return idx >= 0 ? idx : 0;
      },
      selectIndex: function (index, focus) {
        if (!tabs.length) return;
        var normalized = ((index % tabs.length) + tabs.length) % tabs.length;
        select(tabs[normalized], Boolean(focus));
      },
      getItem: function (index) {
        var normalized = ((index % tabs.length) + tabs.length) % tabs.length;
        return {
          tab: tabs[normalized] || null,
          panel: panels[normalized] || null
        };
      }
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

  var supportsDisplayTransition;
  function canTransitionDisplay() {
    if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
    if (typeof CSS === "undefined" || !CSS.supports("transition-behavior", "allow-discrete") || !document.body) {
      return false;
    }
    var probe = document.createElement("div");
    probe.style.cssText = "transition: display 1s allow-discrete !important; display: block;";
    document.body.appendChild(probe);
    getComputedStyle(probe).display;
    probe.style.display = "none";
    supportsDisplayTransition = getComputedStyle(probe).display === "block";
    probe.remove();
    return supportsDisplayTransition;
  }

  function supportsTopLayerExit() {
    return typeof CSS !== "undefined" && CSS.supports("overlay", "auto") && canTransitionDisplay();
  }

  async function closeTopLayer(element) {
    if (!element || !element.open) return;
    if (!supportsTopLayerExit()) {
      element.setAttribute("data-closing", "");
      var animations = element.getAnimations ? element.getAnimations({ subtree: true }) : [];
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map(function (a) { return a.finished; })),
          new Promise(function (resolve) { setTimeout(resolve, 2000); })
        ]);
      }
      if (!element.hasAttribute("data-closing")) return;
      element.removeAttribute("data-closing");
    }
    if (element.open) element.close();
  }

  function openShotDialog() {
    if (!shotDialog || !shotTabsCtrl) return;
    shotDialog.removeAttribute("data-closing");
    renderShotDialog(shotTabsCtrl.getSelectedIndex());
    if (!shotDialog.open) shotDialog.showModal();
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
    if (shotCloseBtn) shotCloseBtn.addEventListener("click", function () { closeTopLayer(shotDialog); });

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
        closeTopLayer(shotDialog);
      }
    });

    if (!("closedBy" in HTMLDialogElement.prototype)) {
      shotDialog.addEventListener("click", function (event) {
        if (event.target !== shotDialog) return;
        var rect = shotDialog.getBoundingClientRect();
        var isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!isDialogContent) closeTopLayer(shotDialog);
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
      langBtn.setAttribute("lang", lang === "en" ? "zh-CN" : "en");
    }
    renderRelease();
    syncMotionState();
    if (shotTabsCtrl) {
      var activeIdx = shotTabsCtrl.getSelectedIndex();
      var activeItem = shotTabsCtrl.getItem(activeIdx);
      if (activeItem) syncShotCaption(activeItem.panel);
      if (shotDialog && shotDialog.open) renderShotDialog(activeIdx);
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
