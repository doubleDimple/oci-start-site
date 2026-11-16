/* ==========================================================================
   OCI-Start Official Static Site — Interactive & Accessible Controller
   Zero external runtime dependencies; progressive enhancement throughout.
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     0. Conditional Popover Polyfill (only loaded when native support missing)
     ------------------------------------------------------------------------ */
  if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
    import("https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover.min.js").catch(function () {});
  }

  /* ------------------------------------------------------------------------
     1. Bilingual Dictionary (zh-CN / en)
     ------------------------------------------------------------------------ */
  var currentLang = "zh";
  try {
    var savedLang = localStorage.getItem("oci_site_lang");
    if (savedLang === "en" || savedLang === "zh") currentLang = savedLang;
  } catch (_) {}

  var I18N = {
    zh: {
      "skip": "跳至主要内容",
      "aria.nav": "主导航",
      "aria.consoleTabs": "控制台核心界面预览",
      "aria.deployTabs": "部署方案选择",
      "aria.map": "Oracle Cloud 全球商业区域点阵分布图",
      "nav.menu": "菜单",
      "nav.preview": "控制台预览",
      "nav.features": "全景特性",
      "nav.security": "本地隐私",
      "nav.deploy": "快速部署",
      "nav.sponsors": "赞助支持",
      "nav.cta": "一键部署",
      "hero.eyebrow": "全新 Vue 3 工作台 · 100% 开源自托管",
      "hero.title": "所有云端资源，<span class=\"accent\">一处清爽掌控。</span>",
      "hero.lead": "OCI-Start 是专为开发者与运维玩家打造的 Oracle Cloud 实例全生命周期管理平台。把分散在多个租户里的并发开机、区域测速、Web SSH / SFTP、双跳 noVNC 控制台、Cloudflare / EdgeOne DNS 与 VPS 三网质量监测，收进同一个自托管面板。",
      "hero.ctaPrimary": "立即开始部署",
      "hero.ctaGithub": "浏览 GitHub 源码",
      "copy.quick": "复制命令",
      "copy.script": "复制脚本",
      "copy.docker": "复制 Docker 命令",
      "copy.nginx": "复制 Nginx 配置",
      "copy.ok": "已复制",
      "copy.fail": "复制失败",
      "hero.fact1": "私钥本地 H2 存储 · 零远端上传",
      "hero.fact2": "45+ 公开商业区域点阵视图",
      "hero.fact3": "内置 Web SSH · SFTP · 双跳 noVNC",
      "hero.fact4": "一键脚本 / Docker · 默认端口 9856",
      "preview.tab1": "总览与全球区域地图",
      "preview.tab2": "多租户与并发开机",
      "preview.tab3": "实例运维 · SSH 与 noVNC",
      "preview.tab4": "DNS 解析与三网探针",
      "preview.badge": "新版 Vue 3 实时仿真预览",
      "preview.search": "快速搜索菜单 / 区域 / 实例…",
      "preview.localDb": "本地 H2 已加密",
      "sb.sub": "云资源工作台",
      "sb.g1": "服务管理",
      "sb.m1": "监控与区域地图",
      "sb.m2": "租户与并发开机",
      "sb.m3": "OCI 实例与终端",
      "sb.g2": "解析与资源监控",
      "sb.m4": "CF / EdgeOne & 探针",
      "sb.role": "本地加密会话 · H2",
      "p1.kpi1": "OCI 主租户",
      "p1.kpi1s": "PAYG 5 · 普通号 7",
      "p1.kpi2": "运行中实例",
      "p1.kpi2s": "ARM A1 × 16 · AMD × 12",
      "p1.kpi3": "公开商业区域",
      "p1.kpi3s": "支持浏览器并发测速",
      "p1.kpi4": "ARM 开机记录",
      "p1.kpi4s": "Telegram 实时推送",
      "p1.mapTitle": "全球区域分布与 ARM 开机记录（悬停节点查看区域代码）",
      "p1.arcHide": "隐藏连线",
      "p1.arcShow": "显示连线",
      "p1.pause": "暂停动效",
      "p1.play": "播放动效",
      "p1.speedTest": "OCI 延迟测试",
      "p1.leg1": "我的订阅区域 & ARM 记录交集",
      "p1.leg2": "公开商业区域参考节点",
      "p1.mapNote": "Canvas 2D 原生渲染 · 零 WebGL 负担",
      "p2.title": "多租户 API 资产与账号画像",
      "p2.import": "一键导入配置",
      "p2.quota": "配额与审计日志",
      "p2.newBoot": "+ 新建并发开机",
      "p2.th1": "租户别名",
      "p2.th2": "主区域 / 订阅数",
      "p2.th3": "账号类型",
      "p2.th4": "实例状态",
      "p2.th5": "API 连通性",
      "p2.queuing": "并发抢机执行中…",
      "p2.logTitle": "实时开机任务流 · Task #boot-a1-sjc (VM.Standard.A1.Flex · 4 OCPU / 24 GB)",
      "common.normal": "正常",
      "p3.instTitle": "实例生命周期与多网卡管理",
      "p3.switchIp": "一键换 IP / IPv6",
      "p3.c1": "实例 / 规格",
      "p3.c2": "公网 IPv4 / IPv6",
      "p3.c3": "快捷运维",
      "p4.dnsTitle": "Cloudflare & Tencent EdgeOne 域名解析联动",
      "p4.addRecord": "+ 添加解析记录",
      "p4.d1": "服务商",
      "p4.d2": "主机记录",
      "p4.d3": "类型 / 记录值",
      "p4.d4": "代理与加速状态",
      "p4.vpsTitle": "跨厂商 VPS 资源与电信 / 联通 / 移动三网质量监测",
      "p4.probeLive": "ICMP / TCP / HTTP 探针在线",
      "p4.v1": "节点名称",
      "p4.v2": "CPU / 内存",
      "p4.v3": "中国电信 (CT)",
      "p4.v4": "中国联通 (CU)",
      "p4.v5": "中国移动 (CM)",
      "feat.tag": "Capabilities",
      "feat.title": "从并发抢机到日常运维，一步到位。",
      "feat.lead": "告别零散脚本与多窗口切换。新版 OCI-Start 围绕真实云主机管理场景重新打磨了整套前后端能力，让复杂的多租户云操作变得像使用桌面软件一样直觉。",
      "feat.c1t": "多租户资产透视与高并发开机",
      "feat.c1d": "支持批量导入与管理多个 Oracle Cloud 租户 API，直观呈现 PAYG 升级号 / 普通号画像、订阅区域、服务配额、账单费用与审计日志；支持多 API 多实例并发开机与跨可用性域重试，实时流式查看开机日志。",
      "feat.c1b1": "并发抢机调度",
      "feat.c1b2": "配额与账单费用",
      "feat.c1b3": "租户代理池绑定",
      "feat.c2t": "Web SSH、SFTP 与双跳 noVNC 救援控制台",
      "feat.c2d": "内置流畅的浏览器 SSH 终端，支持 ANSI 色彩、窗口自适应缩放、命令收藏与 SFTP 文件直传下载；同时打通 Oracle Cloud 双跳 SSH 隧道与 Websockify 代理，机器失联或重装系统时可在网页端直接操控 VNC 画面。",
      "feat.c2b1": "Web SSH + SFTP",
      "feat.c2b2": "双跳 noVNC 画面",
      "feat.c2b3": "一键 DD 重装",
      "feat.c3t": "VNIC 多网卡与 IPv4 / IPv6 切换",
      "feat.c3d": "可视化管理主辅虚拟网卡（VNIC）、安全列表放行规则，支持一键更换公网 IPv4、挂载 IPv6 地址以及在线修改引导卷容量与 VPU 性能档位。",
      "feat.c3b3": "引导卷 VPU",
      "feat.c4t": "Cloudflare & EdgeOne 双引擎 DNS",
      "feat.c4d": "原生集成 Cloudflare 与腾讯云 EdgeOne 域名服务，支持全量分页同步、A/AAAA/CNAME 记录增删改与 CDN 代理开关，实例换 IP 后即刻更新解析。",
      "feat.c5t": "VPS 探针与三网质量实时看盘",
      "feat.c5d": "跨厂商统一纳管你的所有 VPS 主机，一键部署轻量探针，实时展示 CPU / 内存 / 磁盘 / 流量与电信、联通、移动三网 ICMP / TCP / HTTP 延迟丢包。",
      "feat.c5b1": "电信 / 联通 / 移动",
      "feat.c5b2": "趋势钻取",
      "feat.c6t": "45+ 区域点阵图与浏览器测速",
      "feat.c6d": "内置核对后的公开商业区域坐标目录，叠加历史 ARM 开机记录与我的订阅区域；支持从本地浏览器发起有界并发延迟实测，选区开服心中有数。",
      "feat.c6b1": "点阵地图",
      "feat.c6b2": "并发测速",
      "feat.c7t": "对象存储、邮件与效率工具箱",
      "feat.c7d": "一站式整合 OCI 对象存储桶浏览上传、电子邮件投递配置、TOTP 二步验证码备份与二维码查看、富文本备忘录及全库加密备份迁移。",
      "feat.c7b3": "加密迁移",
      "feat.c8t": "Telegram 推送与开发者 OpenAPI",
      "feat.c8d": "支持 Telegram 机器人与多渠道 Webhook 实时推送抢机与监控通知（不留存任何账号凭据）；内置细粒度 API Token 管理与交互式接口文档。",
      "sec.tag": "Privacy & Architecture",
      "sec.title": "你的云端密钥，只留在你自己的服务器里。",
      "sec.lead": "云账号 API 私钥关乎核心资产安全。OCI-Start 坚持自托管本地优先架构，代码完全开源透明，拒绝任何黑盒云端代管。",
      "sec.n1b": "终端访问",
      "sec.n1t": "你的桌面或移动浏览器",
      "sec.n1d": "RSA 登录加密传输 · TOTP 多因素认证 · 自适应桌面与 iOS 移动布局",
      "sec.n2b": "100% 自托管核心",
      "sec.n2t": "你的私有服务器 (OCI-Start + 本地 H2)",
      "sec.n2d": "API 私钥与配置仅持久化在本地 H2 数据库 · 支持可信反向代理与异常 IP 自动封禁",
      "sec.n3b": "官方直连",
      "sec.n3t": "Oracle Cloud / Cloudflare / EdgeOne",
      "sec.n3d": "直接请求云厂商官方 API 端点（可选配独立 SOCKS5 / HTTP 租户代理），零第三方中转",
      "sec.c1t": "私钥零上传承诺",
      "sec.c1d": "租户 .pem 私钥、DNS 密钥及备份材料全部保存在你部署机器的本地数据库中；Telegram 机器人仅用于推送开机结果消息，绝不上传或留存账号凭据。",
      "sec.c2t": "严格的反向代理与防爆破保护",
      "sec.c2d": "默认仅信任真实物理连接来源 IP，支持精细化配置 client-ip.trusted-proxies 从右向左剥离可信代理链，防止伪造 X-Forwarded-For 绕过登录封禁。",
      "sec.c3t": "加密迁移与完整性校验",
      "sec.c3d": "换机重装时可一键导出全量加密备份包，导入前自动执行结构与关联主键完整性预检，事务级原子恢复，杜绝半成品脏数据。",
      "dep.tag": "Quick Start",
      "dep.title": "三分钟完成私有化部署。",
      "dep.lead": "提供官方一键维护脚本与 Docker 容器两种开箱即用方案。部署完成后浏览器访问 http://your-ip:9856 即可登录工作台。",
      "dep.r1k": "运行环境：",
      "dep.r2k": "推荐系统：",
      "dep.r3k": "默认端口：",
      "dep.r4k": "容器支持：",
      "dep.tab1": "方式一：一键脚本部署（推荐）",
      "dep.tab2": "方式二：Docker 容器部署",
      "dep.tab3": "进阶：Nginx 与 noVNC 反向代理",
      "dep.scriptNote": "提示：若系统尚未安装 JDK，可先执行 sudo apt update && sudo apt install default-jdk。新版本会自动检测并安装 Redis，如本机已有 Redis 请提前评估冲突。",
      "dep.dockerNote": "容器化隔离部署，安装完成后同样通过 http://your-ip:9856 访问控制台。",
      "dep.nginxNote": "使用同机 Nginx / 宝塔绑定 HTTPS 域名时，请在应用配置中设置 server.forward-headers-strategy: none 与 client-ip.trusted-proxies: \"127.0.0.1/32,::1/128\"，并补齐下方 WebSocket 规则以支持 noVNC 控制台。",
      "sp.tag": "Sponsors & Community",
      "sp.title": "感谢生态伙伴与开源社区的持续支持。",
      "sp.lead": "欢迎前往 GitHub 提交 Issue、PR 或点亮一颗 Star，共同完善这款开源云端运维工具。",
      "sp.s1": "项目赞助支持",
      "sp.s2": "服务器资源支持",
      "sp.s3": "开发者与主机社区论坛",
      "sp.s4": "VPS 基础设施提供商",
      "sp.eo": "CDN 边缘加速与安全防护能力支持 · 同时已在 OCI-Start 解析管理模块原生集成",
      "sp.visitEo": "了解 Tencent EdgeOne →",
      "disc.title": "开源操守与免责声明",
      "disc.body": "本项目完全开源，仅用于技术测试、学习与研究。严禁任何人在修改本项目后引导他人部署以窃取云账号信息。使用者须自行遵守所在地区法律法规及云服务商条款，一切使用后果由使用者自行承担，维护者对使用本项目或相关脚本可能引发的任何问题（包括但不限于数据或资产损失）概不负责。",
      "foot.contrib": "参与贡献"
    },
    en: {
      "skip": "Skip to main content",
      "aria.nav": "Primary navigation",
      "aria.consoleTabs": "Console workspace preview",
      "aria.deployTabs": "Deployment options",
      "aria.map": "Oracle Cloud global commercial regions dot-matrix map",
      "nav.menu": "Menu",
      "nav.preview": "Console Preview",
      "nav.features": "Features",
      "nav.security": "Local Privacy",
      "nav.deploy": "Quick Deploy",
      "nav.sponsors": "Sponsors",
      "nav.cta": "Deploy Now",
      "hero.eyebrow": "All-New Vue 3 Workbench · 100% Open-Source Self-Hosted",
      "hero.title": "Every cloud tenant, <span class=\"accent\">in one crisp workspace.</span>",
      "hero.lead": "OCI-Start is an API-driven, self-hosted Oracle Cloud lifecycle workbench built for developers and operators. Unify concurrent instance provisioning, 45+ region latency tests, Web SSH / SFTP, dual-hop noVNC consoles, Cloudflare / EdgeOne DNS, and multi-ISP VPS probes in one place.",
      "hero.ctaPrimary": "Quick Deployment",
      "hero.ctaGithub": "View on GitHub",
      "copy.quick": "Copy Command",
      "copy.script": "Copy Script",
      "copy.docker": "Copy Docker",
      "copy.nginx": "Copy Nginx",
      "copy.ok": "Copied",
      "copy.fail": "Copy failed",
      "hero.fact1": "Local H2 Key Storage · Zero Cloud Upload",
      "hero.fact2": "45+ Commercial Regions Dot-Map",
      "hero.fact3": "Built-in Web SSH · SFTP · Dual-Hop noVNC",
      "hero.fact4": "1-Click Script / Docker · Port 9856",
      "preview.tab1": "Overview & Global Region Map",
      "preview.tab2": "Multi-Tenant & Auto-Boot",
      "preview.tab3": "Instances · SSH & noVNC",
      "preview.tab4": "DNS & Multi-ISP Probes",
      "preview.badge": "Interactive Vue 3 UI Preview",
      "preview.search": "Search menus / regions / instances…",
      "preview.localDb": "Local H2 Encrypted",
      "sb.sub": "Cloud Workbench",
      "sb.g1": "Services",
      "sb.m1": "Dashboard & Regions",
      "sb.m2": "Tenants & Auto-Boot",
      "sb.m3": "OCI Instances & Shell",
      "sb.g2": "DNS & Probes",
      "sb.m4": "CF / EdgeOne & VPS",
      "sb.role": "Local Encrypted · H2",
      "p1.kpi1": "Primary Tenants",
      "p1.kpi1s": "PAYG 5 · Free Tier 7",
      "p1.kpi2": "Running Instances",
      "p1.kpi2s": "ARM A1 × 16 · AMD × 12",
      "p1.kpi3": "Commercial Regions",
      "p1.kpi3s": "Bounded Browser Latency Test",
      "p1.kpi4": "ARM Boot Records",
      "p1.kpi4s": "Instant Telegram Alerts",
      "p1.mapTitle": "Global Commercial Regions & ARM Records (Hover nodes to inspect region code)",
      "p1.arcHide": "Hide Arcs",
      "p1.arcShow": "Show Arcs",
      "p1.pause": "Pause Motion",
      "p1.play": "Play Motion",
      "p1.speedTest": "OCI Latency Test",
      "p1.leg1": "Subscribed & ARM Record Regions",
      "p1.leg2": "Public Commercial Regions",
      "p1.mapNote": "Native Canvas 2D · Zero WebGL Overhead",
      "p2.title": "Multi-Tenant API Assets & Profiles",
      "p2.import": "Import Config",
      "p2.quota": "Quotas & Audit Logs",
      "p2.newBoot": "+ Concurrent Boot Task",
      "p2.th1": "Tenant Alias",
      "p2.th2": "Home / Subscribed Regions",
      "p2.th3": "Plan Type",
      "p2.th4": "Instances",
      "p2.th5": "API Health",
      "p2.queuing": "Concurrent boot running…",
      "p2.logTitle": "Live Boot Stream · Task #boot-a1-sjc (VM.Standard.A1.Flex · 4 OCPU / 24 GB)",
      "common.normal": "Healthy",
      "p3.instTitle": "Instance Lifecycle & Multi-VNIC",
      "p3.switchIp": "Switch IPv4 / IPv6",
      "p3.c1": "Instance / Shape",
      "p3.c2": "Public IPv4 / IPv6",
      "p3.c3": "Quick Ops",
      "p4.dnsTitle": "Cloudflare & Tencent EdgeOne DNS Sync",
      "p4.addRecord": "+ Add DNS Record",
      "p4.d1": "Provider",
      "p4.d2": "Hostname",
      "p4.d3": "Type / Target",
      "p4.d4": "Proxy & Edge Status",
      "p4.vpsTitle": "Multi-Vendor VPS Fleet & Tri-ISP Quality (CT / CU / CM)",
      "p4.probeLive": "ICMP / TCP / HTTP Probes Live",
      "p4.v1": "Node",
      "p4.v2": "CPU / Memory",
      "p4.v3": "China Telecom (CT)",
      "p4.v4": "China Unicom (CU)",
      "p4.v5": "China Mobile (CM)",
      "feat.tag": "Capabilities",
      "feat.title": "From concurrent provisioning to daily ops, all in one place.",
      "feat.lead": "Replace scattered scripts and multiple browser tabs with a cohesive, desktop-grade cloud console tailored for real-world multi-tenant operations.",
      "feat.c1t": "Multi-Tenant Insights & Concurrent Boot",
      "feat.c1d": "Batch-import Oracle Cloud API credentials, inspect PAYG vs. Free Tier profiles, quotas, billing costs, and audit logs, and run multi-AD concurrent boot tasks with real-time SSE logs.",
      "feat.c1b1": "Concurrent Auto-Boot",
      "feat.c1b2": "Quotas & Billing",
      "feat.c1b3": "Per-Tenant Proxy Pool",
      "feat.c2t": "Web SSH, SFTP & Dual-Hop noVNC Console",
      "feat.c2d": "Connect directly from your browser with full ANSI terminal emulation, dynamic PTY resize, SFTP file transfers, and automated dual-hop SSH tunneling + Websockify for graphical noVNC rescue.",
      "feat.c2b1": "Web SSH + SFTP",
      "feat.c2b2": "Dual-Hop noVNC",
      "feat.c2b3": "1-Click DD Reinstall",
      "feat.c3t": "VNIC Management & IPv4 / IPv6 Switching",
      "feat.c3d": "Manage primary and secondary VNICs, security rules, 1-click public IPv4 rotation, IPv6 attachment, and live boot volume size & VPU tuning.",
      "feat.c3b3": "Boot Volume VPU",
      "feat.c4t": "Cloudflare & EdgeOne Dual DNS Engine",
      "feat.c4d": "Full-page synchronized DNS management across Cloudflare and Tencent EdgeOne. Update A/AAAA/CNAME records and proxy states seconds after rotating instance IPs.",
      "feat.c5t": "VPS Fleet Probes & Tri-ISP Quality",
      "feat.c5d": "Monitor servers across any cloud vendor with lightweight agents tracking CPU, RAM, disk, traffic, and real ICMP / TCP / HTTP latency & loss across CT, CU, and CM.",
      "feat.c5b1": "CT / CU / CM Metrics",
      "feat.c5b2": "Trend Drill-Down",
      "feat.c6t": "45+ Region Dot-Map & Browser Speed Test",
      "feat.c6d": "Built on verified commercial OCI region coordinates overlaid with historical ARM boot records and bounded client-side latency probes directly from your browser.",
      "feat.c6b1": "Dot-Matrix Map",
      "feat.c6b2": "Bounded Latency Test",
      "feat.c7t": "Object Storage, Email & Ops Toolkit",
      "feat.c7d": "Includes OCI Object Storage browser & uploader, Email Delivery management, TOTP MFA backup & QR viewer, rich-text memos, and encrypted full-DB migration.",
      "feat.c7b3": "Encrypted Migration",
      "feat.c8t": "Telegram Alerts & Developer OpenAPI",
      "feat.c8d": "Push real-time provisioning and probe alerts via Telegram Bot or Webhooks without storing credentials externally, backed by scoped OpenAPI tokens and docs.",
      "sec.tag": "Privacy & Architecture",
      "sec.title": "Your private keys never leave your own server.",
      "sec.lead": "Cloud API keys control critical infrastructure. OCI-Start is 100% open-source and self-hosted—zero third-party SaaS relays, zero telemetry uploads.",
      "sec.n1b": "Client Access",
      "sec.n1t": "Desktop or Mobile Browser",
      "sec.n1d": "RSA encrypted sign-in · TOTP MFA · Responsive desktop & iOS-style mobile views",
      "sec.n2b": "100% Self-Hosted Core",
      "sec.n2t": "Your Private Host (OCI-Start + Local H2)",
      "sec.n2d": "PEM keys & secrets stay in your local H2 database · Trusted proxy stripping & auto IP ban protection",
      "sec.n3b": "Direct Official SDK",
      "sec.n3t": "Oracle Cloud / Cloudflare / EdgeOne",
      "sec.n3d": "Talks directly to official cloud endpoints (with optional per-tenant SOCKS5 / HTTP proxy), zero middleman",
      "sec.c1t": "Zero Key Upload Guarantee",
      "sec.c1d": "Tenant .pem keys, DNS tokens, and backups reside exclusively on your host disk. Telegram bots only deliver status notifications and never touch account credentials.",
      "sec.c2t": "Hardened Reverse Proxy & Brute-Force Guard",
      "sec.c2d": "Uses physical socket peer IP by default and strips X-Forwarded-For right-to-left only across explicitly configured client-ip.trusted-proxies.",
      "sec.c3t": "Atomic Encrypted Migration",
      "sec.c3d": "Export encrypted full-database snapshots when switching servers, with pre-import schema and foreign-key verification before atomic transaction commit.",
      "dep.tag": "Quick Start",
      "dep.title": "Self-host in under three minutes.",
      "dep.lead": "Choose the official one-line maintenance script or Docker container. Once started, sign in at http://your-ip:9856.",
      "dep.r1k": "Runtime: ",
      "dep.r2k": "Recommended OS: ",
      "dep.r3k": "Default Port: ",
      "dep.r4k": "Containers: ",
      "dep.tab1": "Option 1: 1-Click Script (Recommended)",
      "dep.tab2": "Option 2: Docker Container",
      "dep.tab3": "Advanced: Nginx + noVNC Reverse Proxy",
      "dep.scriptNote": "Tip: Install JDK first if needed via sudo apt update && sudo apt install default-jdk. Recent releases auto-check/install Redis—verify port conflicts if Redis is already running.",
      "dep.dockerNote": "Isolated containerized deployment. Access the web console at http://your-ip:9856 once installed.",
      "dep.nginxNote": "When serving behind local Nginx with HTTPS, set server.forward-headers-strategy: none and client-ip.trusted-proxies: \"127.0.0.1/32,::1/128\", and include the /websockify/ rule for noVNC.",
      "sp.tag": "Sponsors & Community",
      "sp.title": "Backed by ecosystem partners and the open-source community.",
      "sp.lead": "Star the repo, report issues, or submit pull requests on GitHub to help make OCI-Start even better.",
      "sp.s1": "Project Sponsor",
      "sp.s2": "Server Infrastructure",
      "sp.s3": "Developer & Hosting Community",
      "sp.s4": "VPS Infrastructure Provider",
      "sp.eo": "CDN Acceleration & Edge Security Partner · Natively integrated in OCI-Start DNS Management",
      "sp.visitEo": "Explore Tencent EdgeOne →",
      "disc.title": "Open-Source Integrity & Disclaimer",
      "disc.body": "OCI-Start is completely open-source and provided strictly for testing, learning, and research. Modifying and redistributing this software to phish or steal user credentials is strictly prohibited. Users are solely responsible for complying with local laws and cloud provider terms.",
      "foot.contrib": "Contributing"
    }
  };

  /* ------------------------------------------------------------------------
     2. Responsive Header Navigation (`navbar` guide: single tree + ResizeObserver)
     ------------------------------------------------------------------------ */
  var siteHeader = document.getElementById("siteHeader");
  var headerInner = siteHeader ? siteHeader.querySelector(".header-inner") : null;
  var siteMenu = document.getElementById("site-menu");
  var lastCollapsedWidth = 0;

  function syncHeaderLayout(forceMeasure) {
    if (!siteHeader || !headerInner || !siteMenu) return;
    var currentlyWide = siteHeader.classList.contains("is-wide");
    var currentWidth = headerInner.clientWidth;

    if (!currentlyWide && !forceMeasure && currentWidth <= lastCollapsedWidth) {
      return;
    }

    var wasOpen = siteMenu.matches(":popover-open, .\\:popover-open");
    siteHeader.classList.add("is-measuring");
    siteHeader.classList.add("is-wide");
    siteMenu.removeAttribute("popover");

    var fits = headerInner.scrollWidth <= headerInner.clientWidth;

    if (!fits) {
      siteHeader.classList.remove("is-wide");
      siteMenu.setAttribute("popover", "auto");
      lastCollapsedWidth = currentWidth;
      if (wasOpen && typeof siteMenu.showPopover === "function") {
        try { siteMenu.showPopover(); } catch (_) {}
      }
    } else {
      lastCollapsedWidth = 0;
    }

    requestAnimationFrame(function () {
      siteHeader.classList.remove("is-measuring");
    });
  }

  if (siteHeader && siteMenu && "ResizeObserver" in window) {
    var navRo = new ResizeObserver(function () {
      syncHeaderLayout(false);
    });
    navRo.observe(siteHeader);
    navRo.observe(siteMenu);
    syncHeaderLayout(true);
  }

  if (siteMenu) {
    siteMenu.addEventListener("click", function (e) {
      var link = e.target.closest("a[href^='#']");
      if (!link) return;
      if (!siteHeader.classList.contains("is-wide") && typeof siteMenu.hidePopover === "function") {
        try { siteMenu.hidePopover(); } catch (_) {}
      }
    });
  }

  /* Update [aria-current="true"] on nav links as sections scroll into view */
  var navLinks = siteMenu ? Array.from(siteMenu.querySelectorAll("a[href^='#']")) : [];
  if (navLinks.length && "IntersectionObserver" in window) {
    var sectionMap = new Map();
    navLinks.forEach(function (link) {
      var sec = document.querySelector(link.getAttribute("href"));
      if (sec) sectionMap.set(sec, link);
    });
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var activeLink = sectionMap.get(entry.target);
          navLinks.forEach(function (l) {
            if (l === activeLink) l.setAttribute("aria-current", "true");
            else l.removeAttribute("aria-current");
          });
        }
      });
    }, { rootMargin: "-25% 0px -60% 0px" });
    sectionMap.forEach(function (_, sec) { spyObserver.observe(sec); });
  }

  /* ------------------------------------------------------------------------
     3. Accessible Tablists (`tabs` guide: hidden="until-found", beforematch,
        edge-fade IntersectionObserver fallback, and Console Sidebar sync)
     ------------------------------------------------------------------------ */
  var ROUTE_BY_TAB = {
    "tab-overview": "http://127.0.0.1:9856/resource/list",
    "tab-tenants": "http://127.0.0.1:9856/tenants/list",
    "tab-instances": "http://127.0.0.1:9856/oci/list",
    "tab-dns": "http://127.0.0.1:9856/vps/instances/list"
  };

  var browserRouteEl = document.getElementById("browserRoute");
  var sidebarItems = Array.from(document.querySelectorAll("[data-preview-target]"));
  var hasNativeFocusGroup = Object.hasOwn(HTMLElement.prototype, "focusGroup");
  var onOverviewTabChange = null;

  function scrollTabIntoScroller(tab) {
    try {
      tab.scrollIntoView({ block: "nearest", inline: "nearest", container: "nearest" });
    } catch (_) {
      /* Avoid scrolling the whole page in older browsers lacking container:'nearest' */
      var scroller = tab.parentElement;
      if (scroller) {
        var left = tab.offsetLeft - scroller.clientWidth / 2 + tab.clientWidth / 2;
        scroller.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
      }
    }
  }

  function initTablist(tablistEl, onSelectCallback) {
    if (!tablistEl) return null;
    var tabs = Array.from(tablistEl.querySelectorAll("[role='tab']"));
    var panels = tabs.map(function (t) {
      return document.querySelector("[role='tabpanel'][aria-labelledby='" + t.id + "']");
    });

    function selectTab(nextTab, moveFocus) {
      tabs.forEach(function (tab, i) {
        var active = tab === nextTab;
        tab.setAttribute("aria-selected", active ? "true" : "false");
        tab.toggleAttribute("focusgroupstart", active);
        if (!hasNativeFocusGroup) {
          tab.tabIndex = active ? 0 : -1;
        }
        var panel = panels[i];
        if (panel) {
          if (active) {
            panel.hidden = false;
            panel.setAttribute("tabindex", "0");
          } else {
            panel.hidden = "until-found";
            panel.removeAttribute("tabindex");
          }
        }
      });
      if (moveFocus) nextTab.focus();
      scrollTabIntoScroller(nextTab);
      if (onSelectCallback) onSelectCallback(nextTab);
    }

    tabs.forEach(function (tab, idx) {
      tab.addEventListener("click", function () {
        selectTab(tab, false);
      });
      /* Selection follows focus when navigating via focusgroup or keyboard */
      tab.addEventListener("focus", function () {
        if (tab.getAttribute("aria-selected") !== "true") {
          selectTab(tab, false);
        }
      });
      var panel = panels[idx];
      if (panel) {
        panel.addEventListener("beforematch", function () {
          selectTab(tab, false);
        });
      }
    });

    /* Initialize roving tabindex & keyboard arrows when native focusgroup is absent */
    if (!hasNativeFocusGroup) {
      tabs.forEach(function (tab) {
        tab.tabIndex = tab.getAttribute("aria-selected") === "true" ? 0 : -1;
      });
      tablistEl.addEventListener("keydown", function (e) {
        var cur = tabs.indexOf(document.activeElement);
        if (cur < 0) return;
        var next = -1;
        if (e.key === "ArrowRight") next = (cur + 1) % tabs.length;
        else if (e.key === "ArrowLeft") next = (cur - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tabs.length - 1;
        if (next >= 0) {
          e.preventDefault();
          selectTab(tabs[next], true);
        }
      });
    }

    return { selectById: function (id) {
      var match = tabs.find(function (t) { return t.id === id; });
      if (match) selectTab(match, false);
    }};
  }

  var consoleTabsCtrl = initTablist(document.getElementById("consoleTabs"), function (selectedTab) {
    if (browserRouteEl && ROUTE_BY_TAB[selectedTab.id]) {
      browserRouteEl.textContent = ROUTE_BY_TAB[selectedTab.id];
    }
    sidebarItems.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-preview-target") === selectedTab.id);
    });
    if (onOverviewTabChange) {
      onOverviewTabChange(selectedTab.id === "tab-overview");
    }
  });

  sidebarItems.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetId = btn.getAttribute("data-preview-target");
      if (consoleTabsCtrl && targetId) consoleTabsCtrl.selectById(targetId);
    });
  });

  initTablist(document.getElementById("deployTabs"));

  /* Scroll-driven edge-fade fallback for browsers without animation-timeline: scroll() */
  if (typeof CSS !== "undefined" && !CSS.supports("animation-timeline", "scroll()")) {
    document.querySelectorAll(".tablist-scroller").forEach(function (scroller) {
      var startSentinel = document.createElement("div");
      var endSentinel = document.createElement("div");
      startSentinel.setAttribute("aria-hidden", "true");
      endSentinel.setAttribute("aria-hidden", "true");
      startSentinel.style.cssText = "min-inline-size:1px;min-block-size:1px;flex:none";
      endSentinel.style.cssText = "min-inline-size:1px;min-block-size:1px;flex:none";
      scroller.prepend(startSentinel);
      scroller.append(endSentinel);

      if ("IntersectionObserver" in window) {
        var fadeObs = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            scroller.classList.toggle(
              entry.target === startSentinel ? "more-start" : "more-end",
              !entry.isIntersecting
            );
          });
        }, { root: scroller, rootMargin: "1px" });
        fadeObs.observe(startSentinel);
        fadeObs.observe(endSentinel);
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. Copy Button (`copy-button` guide: Invoker Commands + single fallback,
        live status outside button, VoiceOver repeat announcement fix)
     ------------------------------------------------------------------------ */
  var copyTimers = new WeakMap();
  var lastCopyAnnouncement = "";

  function legacyCopy(text) {
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.cssText = "position:fixed;inset-block-start:0;opacity:0";
    document.body.append(field);
    field.select();
    try {
      return document.execCommand("copy");
    } finally {
      field.remove();
    }
  }

  function reportCopy(button, ok) {
    var tip = button.nextElementSibling;
    if (!tip) return;
    clearTimeout(copyTimers.get(button));
    button.removeAttribute("data-copied");
    button.removeAttribute("data-failed");

    var dict = I18N[currentLang] || I18N.zh;
    var message = ok ? dict["copy.ok"] : dict["copy.fail"];
    if (message === lastCopyAnnouncement) message += "\u00A0";
    lastCopyAnnouncement = message;

    tip.textContent = "";
    void button.offsetWidth;
    button.setAttribute(ok ? "data-copied" : "data-failed", "");
    requestAnimationFrame(function () {
      tip.textContent = message;
    });

    copyTimers.set(button, setTimeout(function () {
      button.removeAttribute("data-copied");
      button.removeAttribute("data-failed");
      tip.textContent = "";
    }, 2000));
  }

  async function performCopy(button, target) {
    if (!target) return;
    var text = target.matches("input, textarea") ? target.value : target.innerText.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      reportCopy(button, true);
    } catch (_) {
      if (legacyCopy(text)) reportCopy(button, true);
      else reportCopy(button, false);
    }
  }

  if ("CommandEvent" in window) {
    document.addEventListener("command", function (event) {
      if (event.command && event.command.indexOf("--copy") === 0) {
        performCopy(event.source, event.target);
      }
    }, true);
  } else {
    document.addEventListener("click", function (event) {
      var button = event.target.closest("button[command^='--copy']");
      if (!button) return;
      var target = document.getElementById(button.getAttribute("commandfor"));
      if (target) performCopy(button, target);
    });
  }

  /* ------------------------------------------------------------------------
     5. Light-Mode Dot-Matrix Commercial Region Map (`DotWorldMap` adapted)
        With off-screen pause, document visibility pause, and WCAG 2.2.2 toggle
     ------------------------------------------------------------------------ */
  var LAND = [
    [[-168,65],[-165,60],[-158,57],[-152,58],[-146,60],[-138,59],[-131,53],[-125,49],[-124,42],[-120,34],[-117,32],[-110,24],[-105,20],[-97,16],[-92,15],[-88,16],[-87,21],[-91,21],[-95,19],[-97,23],[-97,26],[-94,29],[-89,29],[-84,30],[-81,25],[-80,32],[-76,35],[-70,42],[-67,45],[-60,47],[-56,51],[-56,54],[-64,60],[-78,62],[-78,55],[-82,55],[-86,66],[-95,68],[-105,68],[-115,70],[-125,70],[-135,69],[-145,70],[-156,71],[-166,68]],
    [[-45,60],[-52,64],[-53,68],[-62,70],[-68,76],[-62,82],[-40,83],[-24,80],[-20,73],[-30,68],[-42,61]],
    [[-81,-4],[-79,0],[-77,8],[-72,12],[-62,10],[-60,8],[-52,5],[-50,0],[-44,-2],[-38,-5],[-35,-8],[-39,-13],[-39,-18],[-48,-25],[-53,-34],[-58,-38],[-62,-40],[-65,-45],[-68,-50],[-70,-54],[-75,-52],[-74,-45],[-73,-37],[-71,-30],[-70,-20],[-75,-15],[-81,-6]],
    [[-17,15],[-16,20],[-12,28],[-10,32],[-5,36],[10,37],[20,32],[28,31],[33,28],[35,23],[38,18],[43,12],[51,12],[51,5],[42,-1],[40,-10],[35,-20],[32,-26],[27,-34],[20,-35],[18,-30],[13,-20],[9,-1],[3,6],[-8,4],[-13,9]],
    [[-10,36],[-9,43],[-2,48],[3,51],[6,53],[9,54],[11,58],[16,60],[22,60],[30,60],[28,66],[21,70],[32,71],[46,68],[62,70],[76,73],[92,75],[106,77],[116,74],[132,72],[146,70],[160,70],[170,66],[179,65],[172,60],[162,58],[155,52],[142,48],[135,43],[130,35],[122,32],[120,25],[110,20],[105,10],[100,6],[97,16],[90,22],[82,17],[77,8],[72,20],[66,25],[57,25],[50,30],[45,37],[36,36],[30,41],[26,38],[22,40],[16,38],[13,45],[8,44],[3,42],[-2,37]],
    [[95,5],[105,-6],[115,-9],[125,-9],[135,-5],[141,-3],[141,-9],[131,-8],[120,-10],[110,-8],[100,0]],
    [[113,-22],[114,-35],[118,-35],[129,-32],[137,-35],[141,-38],[147,-39],[151,-37],[153,-28],[145,-15],[142,-11],[136,-12],[130,-11],[125,-14],[118,-20]],
    [[172,-41],[174,-37],[178,-38],[176,-41],[174,-46],[168,-46],[167,-44]],
    [[130,31],[134,34],[139,35],[141,39],[145,44],[142,42],[137,37],[132,34]],
    [[-5,50],[-6,55],[-3,58],[-1,56],[1,53],[1,51],[-4,50]]
  ];

  var OCI_REGIONS = [
    { code: "ap-tokyo-1", zh: "东京", en: "Tokyo", lat: 35.68, lng: 139.76, active: true },
    { code: "ap-osaka-1", zh: "大阪", en: "Osaka", lat: 34.69, lng: 135.50, active: true },
    { code: "ap-seoul-1", zh: "首尔", en: "Seoul", lat: 37.56, lng: 126.97, active: true },
    { code: "ap-singapore-1", zh: "新加坡", en: "Singapore", lat: 1.35, lng: 103.82, active: true },
    { code: "us-sanjose-1", zh: "圣何塞", en: "San Jose", lat: 37.33, lng: -121.89, active: true },
    { code: "us-phoenix-1", zh: "凤凰城", en: "Phoenix", lat: 33.45, lng: -112.07, active: false },
    { code: "us-ashburn-1", zh: "阿什本", en: "Ashburn", lat: 39.04, lng: -77.49, active: true },
    { code: "eu-frankfurt-1", zh: "法兰克福", en: "Frankfurt", lat: 50.11, lng: 8.68, active: true },
    { code: "uk-london-1", zh: "伦敦", en: "London", lat: 51.51, lng: -0.13, active: false },
    { code: "eu-amsterdam-1", zh: "阿姆斯特丹", en: "Amsterdam", lat: 52.37, lng: 4.90, active: false },
    { code: "ap-mumbai-1", zh: "孟买", en: "Mumbai", lat: 19.08, lng: 72.88, active: false },
    { code: "ap-sydney-1", zh: "悉尼", en: "Sydney", lat: -33.87, lng: 151.21, active: true },
    { code: "sa-saopaulo-1", zh: "圣保罗", en: "São Paulo", lat: -23.55, lng: -46.63, active: false },
    { code: "me-dubai-1", zh: "迪拜", en: "Dubai", lat: 25.20, lng: 55.27, active: false }
  ];

  var ARC_PAIRS = [
    [0, 3], [0, 4], [2, 0], [3, 7], [4, 6], [6, 7], [3, 11], [7, 8], [4, 5]
  ];

  function inPoly(x, y, poly) {
    var hit = false;
    for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      var xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
      if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
    }
    return hit;
  }

  function isLand(lng, lat) {
    for (var i = 0; i < LAND.length; i++) {
      if (inPoly(lng, lat, LAND[i])) return true;
    }
    return false;
  }

  var canvas = document.getElementById("worldCanvas");
  var mapStage = document.getElementById("mapStage");
  var mapTip = document.getElementById("mapTip");
  var mapMotionBtn = document.getElementById("mapMotionBtn");
  var mapArcsBtn = document.getElementById("mapArcsBtn");

  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var userPaused = prefersReduced;
  var showArcs = true;
  var overviewActive = true;
  var inViewport = true;
  var rafId = 0;

  function syncMapButtonLabels() {
    var dict = I18N[currentLang] || I18N.zh;
    if (mapMotionBtn) {
      mapMotionBtn.textContent = userPaused ? dict["p1.play"] : dict["p1.pause"];
    }
    if (mapArcsBtn) {
      mapArcsBtn.textContent = showArcs ? dict["p1.arcHide"] : dict["p1.arcShow"];
    }
  }

  if (canvas && mapStage) {
    var ctx = canvas.getContext("2d");
    var baseCanvas = document.createElement("canvas");
    var baseCtx = baseCanvas.getContext("2d");
    var width = 0, height = 0, dpr = 1;
    var projected = [];
    var hoveredNode = null;
    var LAT_TOP = 78, LAT_BOT = -54, LAT_SPAN = LAT_TOP - LAT_BOT;

    function project(lng, lat) {
      return {
        x: ((lng + 180) / 360) * width,
        y: ((LAT_TOP - lat) / LAT_SPAN) * height
      };
    }

    function rebuildBaseMap() {
      var rect = mapStage.getBoundingClientRect();
      var nextW = Math.max(300, Math.floor(rect.width));
      var nextH = Math.max(190, Math.min(310, Math.round(nextW * 0.36)));
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = nextW;
      height = nextH;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.height = height + "px";

      baseCanvas.width = width * dpr;
      baseCanvas.height = height * dpr;
      baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      baseCtx.clearRect(0, 0, width, height);

      baseCtx.fillStyle = "#bcccd6";
      var step = width < 520 ? 6 : 5;
      for (var py = 6; py < height - 4; py += step) {
        var lat = LAT_TOP - (py / height) * LAT_SPAN;
        for (var px = 6; px < width - 4; px += step) {
          var lng = (px / width) * 360 - 180;
          if (isLand(lng, lat)) {
            baseCtx.beginPath();
            baseCtx.arc(px, py, 1.15, 0, Math.PI * 2);
            baseCtx.fill();
          }
        }
      }

      projected = OCI_REGIONS.map(function (r) {
        var p = project(r.lng, r.lat);
        return { raw: r, x: p.x, y: p.y };
      });
    }

    function renderMapFrame(ts) {
      rafId = 0;
      if (!width || !height) rebuildBaseMap();

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(baseCanvas, 0, 0, width, height);

      var t = (ts || 0) * 0.001;

      /* Curved Arcs & Flowing Light Packets */
      if (showArcs && projected.length) {
        for (var i = 0; i < ARC_PAIRS.length; i++) {
          var a = projected[ARC_PAIRS[i][0]];
          var b = projected[ARC_PAIRS[i][1]];
          if (!a || !b) continue;
          var mx = (a.x + b.x) * 0.5;
          var dist = Math.hypot(b.x - a.x, b.y - a.y);
          var my = (a.y + b.y) * 0.5 - Math.min(56, dist * 0.22);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.quadraticCurveTo(mx, my, b.x, b.y);
          ctx.strokeStyle = "rgba(27, 138, 106, 0.24)";
          ctx.lineWidth = 1.2;
          ctx.stroke();

          if (!userPaused) {
            var u = (t * 0.28 + i * 0.17) % 1;
            var inv = 1 - u;
            var gx = inv * inv * a.x + 2 * inv * u * mx + u * u * b.x;
            var gy = inv * inv * a.y + 2 * inv * u * my + u * u * b.y;
            ctx.beginPath();
            ctx.arc(gx, gy, 2.3, 0, Math.PI * 2);
            ctx.fillStyle = "#1b8a6a";
            ctx.fill();
          }
        }
      }

      /* Region Nodes & Subtle Pulses */
      for (var n = 0; n < projected.length; n++) {
        var item = projected[n];
        var isPrimary = item.raw.active;
        var isHover = hoveredNode === item;

        if (isPrimary && !userPaused) {
          var phase = (t * 0.75 + n * 0.23) % 1;
          ctx.beginPath();
          ctx.arc(item.x, item.y, 4 + phase * 10, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(27, 138, 106," + (0.42 * (1 - phase)).toFixed(3) + ")";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(item.x, item.y, isHover ? 5.5 : (isPrimary ? 4.1 : 3.2), 0, Math.PI * 2);
        ctx.fillStyle = isPrimary ? "#1b8a6a" : "#0071e3";
        ctx.fill();
        ctx.lineWidth = 1.6;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();

        if (isPrimary && width >= 540) {
          ctx.font = "600 11px -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
          ctx.fillStyle = "#1d1d1f";
          var label = currentLang === "en" ? item.raw.en : item.raw.zh;
          ctx.fillText(label, item.x + 7, item.y + 3.5);
        }
      }

      if (shouldAnimateMap()) {
        rafId = requestAnimationFrame(renderMapFrame);
      }
    }

    function shouldAnimateMap() {
      return !userPaused && overviewActive && inViewport && !document.hidden;
    }

    function syncMapLoop() {
      if (shouldAnimateMap()) {
        if (!rafId) rafId = requestAnimationFrame(renderMapFrame);
      } else {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
        renderMapFrame(0);
      }
    }

    onOverviewTabChange = function (isOverview) {
      overviewActive = isOverview;
      if (isOverview) {
        requestAnimationFrame(function () {
          rebuildBaseMap();
          syncMapLoop();
        });
      } else {
        syncMapLoop();
      }
    };

    if ("ResizeObserver" in window) {
      var mapRo = new ResizeObserver(function () {
        if (!overviewActive) return;
        rebuildBaseMap();
        renderMapFrame(performance.now());
      });
      mapRo.observe(mapStage);
    }

    /* Pause Canvas loop when scrolled off-screen */
    var previewSection = document.getElementById("preview");
    if (previewSection && "IntersectionObserver" in window) {
      var mapVisObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          inViewport = entry.isIntersecting;
          syncMapLoop();
        });
      }, { rootMargin: "150px" });
      mapVisObs.observe(previewSection);
    }

    document.addEventListener("visibilitychange", syncMapLoop);

    /* Hover Tooltip Inspection */
    canvas.addEventListener("pointermove", function (e) {
      var rect = canvas.getBoundingClientRect();
      var mx = e.clientX - rect.left;
      var my = e.clientY - rect.top;
      var hit = null;
      var best = 18;
      for (var i = 0; i < projected.length; i++) {
        var d = Math.hypot(projected[i].x - mx, projected[i].y - my);
        if (d < best) {
          best = d;
          hit = projected[i];
        }
      }
      hoveredNode = hit;
      if (hit && mapTip) {
        var city = currentLang === "en" ? hit.raw.en : hit.raw.zh;
        mapTip.innerHTML = "";
        var b = document.createElement("b");
        b.textContent = city;
        var s = document.createElement("span");
        s.textContent = hit.raw.code;
        mapTip.append(b, s);
        mapTip.style.left = Math.min(Math.max(hit.x, 54), width - 54) + "px";
        mapTip.style.top = Math.max(hit.y, 38) + "px";
        mapTip.style.opacity = "1";
        canvas.style.cursor = "pointer";
      } else if (mapTip) {
        mapTip.style.opacity = "0";
        canvas.style.cursor = "default";
      }
      if (!shouldAnimateMap()) renderMapFrame(0);
    });

    canvas.addEventListener("pointerleave", function () {
      hoveredNode = null;
      if (mapTip) mapTip.style.opacity = "0";
      if (!shouldAnimateMap()) renderMapFrame(0);
    });

    if (mapMotionBtn) {
      mapMotionBtn.addEventListener("click", function () {
        userPaused = !userPaused;
        syncMapButtonLabels();
        syncMapLoop();
      });
    }

    if (mapArcsBtn) {
      mapArcsBtn.addEventListener("click", function () {
        showArcs = !showArcs;
        syncMapButtonLabels();
        if (!shouldAnimateMap()) renderMapFrame(0);
      });
    }

    rebuildBaseMap();
    syncMapLoop();
  }

  /* ------------------------------------------------------------------------
     6. Apply Language & Wire Toggle
     ------------------------------------------------------------------------ */
  var langBtn = document.getElementById("langBtn");

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "zh";
    var dict = I18N[currentLang];
    document.documentElement.lang = currentLang === "en" ? "en" : "zh-CN";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    if (langBtn) {
      langBtn.textContent = currentLang === "en" ? "中文" : "EN";
    }

    syncMapButtonLabels();
    syncHeaderLayout(true);

    try {
      localStorage.setItem("oci_site_lang", currentLang);
    } catch (_) {}
  }

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      applyLanguage(currentLang === "zh" ? "en" : "zh");
    });
  }

  if (currentLang === "en") {
    applyLanguage("en");
  } else {
    syncMapButtonLabels();
  }
})();
