/* ==========================================================================
   OCI-Start Official Website — Interactive Controller ("Meridian" System)
   ========================================================================== */
(function () {
  "use strict";

  /* 0. Conditional Popover Polyfill (only loaded when native support missing) */
  if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
    import("https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover.min.js").catch(function () {});
  }

  /* 1. Bilingual Dictionary (zh-CN / en) */
  var currentLang = "zh";
  try {
    var savedLang = localStorage.getItem("oci_site_lang");
    if (savedLang === "en" || savedLang === "zh") currentLang = savedLang;
  } catch (_) {}

  var I18N = {
    zh: {
      "skip": "跳至主要内容",
      "aria.nav": "主导航",
      "aria.moduleTabs": "面板功能模块目录",
      "aria.consoleTabs": "控制台核心界面预览",
      "aria.deployTabs": "部署方案选择",
      "aria.map": "Oracle Cloud 全球商业区域点阵分布图",
      "nav.menu": "菜单",
      "nav.tag": "甲骨文云面板",
      "nav.home": "首页",
      "nav.cap": "核心亮点",
      "nav.all": "功能说明",
      "nav.console": "面板预览",
      "nav.security": "密钥安全",
      "nav.deploy": "一键部署",
      "nav.cta": "立即部署 →",
      "hero.eyebrow": "ORACLE CLOUD INSTANCE PANEL · 甲骨文云实例管理面板",
      "hero.l1": "甲骨文云实例。",
      "hero.l2": "并发抢机与运维。",
      "hero.l3": "一处全掌控。",
      "hero.sub": "专为 Oracle Cloud (OCI) 打造的开源自托管实例管理面板。多租户 API 并发抢开 ARM / AMD、一键换 IP / IPv6、引导卷调优、Web SSH 与双跳 noVNC 救援一应俱全。",
      "copy.hero": "复制安装",
      "copy.script": "复制脚本",
      "copy.docker": "复制 Docker",
      "copy.nginx": "复制配置",
      "copy.ok": "已复制",
      "copy.fail": "复制失败",
      "hero.s1": "OCI 商业区域",
      "hero.s2": "多 API 并发抢机",
      "hero.s3": "网页直连救援",
      "hero.s4n": "H2 本地",
      "hero.s4": "API 私钥零上传",
      "ohp.title": "实例生命周期管控",
      "ohp.m1k": "当前 OCI 租户",
      "ohp.m2k": "ARM A1 弹性配额",
      "ohp.m3k": "月度出站流量",
      "ohp.booting": "AD 抢机中",
      "ohp.sel": "选中实例：",
      "ohp.a1": "一键换 IPv4",
      "ohp.a2": "开启 IPv6",
      "ohp.a3": "附属 VNIC",
      "ohp.a5": "双跳 noVNC",
      "ohp.a6": "引导卷 VPU",
      "ohp.barStrong": "ARM 自动抢机引擎：",
      "ohp.barText": "多租户并发轮询 · 成交通知推送 TG",
      "cap.kicker": "ORACLE CLOUD LIFECYCLE",
      "cap.title": "围绕甲骨文云痛点打磨的全能实例面板。",
      "cap.lead": "无需登录臃肿缓慢的甲骨文官方后台，也不用东拼西凑抢机脚本，一个自托管面板搞定全部 OCI 实例操作。",
      "cap.c1t": "多租户画像与 ARM / AMD 并发抢机",
      "cap.c1d": "批量导入管理多个甲骨文云 API，自动识别 PAYG 升级号 / 免费号、配额、账单费用与审计日志；支持跨可用性域（AD）并发抢开 A1.Flex 并实时推送到 TG。",
      "cap.c2t": "双跳 noVNC 救援与 Web SSH / SFTP",
      "cap.c2d": "告别繁琐的甲骨文云串行/VNC 双跳命令，面板自动建立两层 SSH 隧道与 Websockify 转发，失联救砖网页直连；内置全功能 Web SSH 终端与 SFTP。",
      "cap.c3t": "一键换公网 IP / IPv6 与多网卡引导卷",
      "cap.c3d": "面板内一键更换实例公网 IPv4、挂载原生 IPv6、增删附属 VNIC 网卡、管理安全放行规则，并支持在线无损修改 OCI 引导卷容量与 VPU 性能。",
      "cap.c4t": "换 IP 秒级联动 CF & EdgeOne 解析",
      "cap.c4d": "原生打通 Cloudflare 与腾讯云 EdgeOne 域名解析 API，甲骨文实例更换公网 IPv4 或 IPv6 后，无需切出面板即可同步更新域名解析记录。",
      "cap.c5t": "10TB 出站流量监控与三网质量探针",
      "cap.c5d": "对照甲骨文每月 10TB 免费流量阈值实时汇总出入站消耗，并支持一键部署轻量探针，持续监测电信、联通、移动三网 ICMP / TCP / HTTP 延迟丢包。",
      "cap.c6t": "45+ OCI 区域测速 · 对象存储与备份",
      "cap.c6d": "内置 45+ 甲骨文商业区域浏览器并发测速、OCI 对象存储桶管理、邮件服务、一键 DD 重装、TOTP MFA 备份与全库加密迁移。",
      "dir.kicker": "IMPLEMENTED MODULES · 6 大模块 35 项已实现功能",
      "dir.title": "按模块浏览面板全部已实现能力。",
      "dir.lead": "左侧切换 OCI-Start 真实业务菜单，右侧查看对应页面已落地的具体操作与安全边界。",
      "dir.m1": "OCI 租户与账号治理",
      "dir.m2": "并发开机与抢机调度",
      "dir.m3": "实例、多网卡与终端",
      "dir.m4": "商业区域、测速与存储",
      "dir.m5": "CF / EdgeOne 与探针",
      "dir.m6": "代理池、通知与安全",
      "dir.d1t": "OCI 租户与账号安全治理",
      "dir.d1c1t": "受限 API 创建与一键降权",
      "dir.d1c1d": "粘贴配置自动解析；支持创建最小权限专用 OCI 用户（不持久化主号原始 API），存量租户支持一键降权。",
      "dir.d1c2t": "租户画像与批量账号测活",
      "dir.d1c2d": "一键检测全部主账号状态，自动识别个人/企业、免费号/试用号/PAYG 升级号/多区号，统计存活天数与成本。",
      "dir.d1c3t": "IAM 用户、密码策略与社媒登录",
      "dir.d1c3d": "管理身份域用户增删启停、重置临时密码、配置密码过期天数、开启/重置邮箱 MFA 及社交登录绑定。",
      "dir.d1c4t": "区域订阅、配额、账单与审计",
      "dir.d1c4d": "在线订阅新区域、查看云端配额，按汇总/趋势/明细查询真实账单费用，独立游标分页查看 OCI 审计日志。",
      "dir.d1c5t": "流量阈值预警与超额自动关机",
      "dir.d1c5d": "按月统计租户出入站流量，设置 GB 预警线，支持达到阈值自动关闭该租户实例，严防升级号超额计费。",
      "dir.d1c6t": "验证码保护导出与转让锁定",
      "dir.d1c6d": "导出单/全量租户 JSON 备份需经通知渠道验证码校验；支持登记租户转让金额并自动锁定高危变更。",
      "dir.d2t": "OCI 多租户并发开机与抢机调度",
      "dir.d2c1t": "快速开机与全系规格模板",
      "dir.d2c1d": "支持快速开机与自定义配置双模式，内置 ARM 基础/标准/高性能/A2 与 AMD 基础/E3/E4/E5 等规格模板。",
      "dir.d2c2t": "OCI 按量参考价实时估算",
      "dir.d2c2d": "调整 OCPU、内存与引导卷容量时，自动按商业区官方单价实时计算每小时与每月预估参考费用。",
      "dir.d2c3t": "动态系统镜像与版本匹配",
      "dir.d2c3d": "按所选区域和 CPU 架构动态拉取可用操作系统与版本镜像，也可一键交由系统自动匹配默认镜像。",
      "dir.d2c4t": "自定义重试间隔与抢机时段",
      "dir.d2c4d": "支持设置目标实例台数、秒级重试间隔（后台保底防过快保护）、每日指定抢机时段（如 1-8 点）与自动生成初始密码。",
      "dir.d2c5t": "API 创机风控提示与防重保护",
      "dir.d2c5d": "内置 Oracle API 开机风控显式确认与未知提交核对提示，防止网络抖动导致重复下发抢机任务。",
      "dir.d2c6t": "SSE 实时任务流与历史日志",
      "dir.d2c6d": "全局汇总总抢机次数与成功/失败分布，支持在详情页通过 SSE 实时追踪子任务滚动日志并检索历史记录。",
      "dir.d3t": "OCI 实例运维、多网卡与远程救援",
      "dir.d3c1t": "生命周期、热变配与 DD 重装",
      "dir.d3c1d": "支持启动、停止、TG 验证码保护终止（可选保留启动盘）、在线热调 CPU（1–24C）与内存（1–256G）、同步改名与一键 DD 重装。",
      "dir.d3c2t": "引导卷无损扩容与 VPU 调优",
      "dir.d3c2d": "在线扩展实例引导卷容量（GB），支持在 0–120 范围内按 10 的倍数动态调整磁盘 VPUs/GB 性能档位。",
      "dir.d3c3t": "主辅 VNIC 与指定 CIDR 换 IP",
      "dir.d3c3d": "单次批量挂载 1–31 张辅助网卡或一键清理辅助网卡；更换公网 IPv4 支持填入多个目标 CIDR 网段定向刷选。",
      "dir.d3c4t": "批量 IPv6 与 AMD NLB 编排",
      "dir.d3c4d": "单张网卡支持添加/删除 1–32 个原生 IPv6；支持 AMD 实例一键编排 NAT 网关 + 路由表 + NLB 负载均衡及网络还原。",
      "dir.d3c5t": "浏览器 Web SSH 与 SFTP 传输",
      "dir.d3c5d": "内置全彩 ANSI 终端（自适应 PTY 尺寸、命令收藏、搜索、日志下载），支持 SFTP 文件直传与按远端路径下载。",
      "dir.d3c6t": "双跳 SSH 隧道 noVNC 救援台",
      "dir.d3c6d": "自动构建甲骨文两层控制台 SSH 隧道与本地 Websockify 代理，网页直连 RFB 图形画面、发送按键文本与异步硬重启。",
      "dir.d4t": "OCI 原生云服务、区域地图与测速",
      "dir.d4c1t": "45+ 商业区域平铺点阵地图",
      "dir.d4c1d": "内置核对后的官方商业区域城市级坐标目录，同屏叠加「历史 ARM 开机记录」与「我的订阅区域」交集与动态航线。",
      "dir.d4c2t": "本机浏览器有界并发延迟测速",
      "dir.d4c2d": "从浏览器直接向各 OCI 区域端点发起有界并发实测，切页即停不卡顿，直观对比本地到全球各机房的真实延迟。",
      "dir.d4c3t": "OCI 对象存储桶浏览与直传",
      "dir.d4c3d": "按租户与区域管理 Object Storage 存储桶，支持在线上传文件、预览对象内容、游标分页检索与文件下载。",
      "dir.d4c4t": "OCI 电子邮件服务配置发信",
      "dir.d4c4d": "在线为租户配置 Email Delivery 发件域名验证、生成 SMTP 登录凭据，并提供面板内邮件撰写与投递功能。",
      "dir.d4c5t": "VCN 安全放行规则可视化",
      "dir.d4c5d": "直观查看并新增、编辑、删除租户虚拟云网络（VCN）安全列表的入站与出站协议及端口放行策略。",
      "dir.d4c6t": "Google Cloud (GCP) 实例扩展",
      "dir.d4c6d": "除核心甲骨文云外，已支持导入 GCP 服务账号 JSON 凭据并在同一工作台查看与管理 GCP 虚拟机实例。",
      "dir.d5t": "CF / EdgeOne 域名解析与三网探针",
      "dir.d5c1t": "Cloudflare DNS 全量分页同步",
      "dir.d5c1d": "在线测通 CF 凭据，完整拉取云端分页解析记录，支持按名称/内容检索及编辑 A/AAAA/CNAME/MX、TTL 与小黄云开关。",
      "dir.d5c2t": "腾讯云 EdgeOne 解析与加速",
      "dir.d5c2d": "原生接入 EdgeOne SDK，支持完整云端快照同步、保留线路与权重更新解析记录，并管理加速域名。",
      "dir.d5c3t": "跨厂商 VPS 纳管与一键探针",
      "dir.d5c3d": "不限云厂商汇总全部 VPS 主机，支持在面板内通过 SSH 一键安装、升级或卸载轻量监控探针并校验真实服务状态。",
      "dir.d5c4t": "主机负载与全量 OCI Ping 巡检",
      "dir.d5c4d": "实时上报 CPU、内存、磁盘与流量数据；支持开启全部 OCI 实例自动定时 Ping 或手动发起全量 Ping 连通检测。",
      "dir.d5c5t": "电信 / 联通 / 移动三网质量矩阵",
      "dir.d5c5d": "每台被监控 VPS 主动探测目标节点，列表直显三网延迟、ICMP 丢包率与 TCP/HTTP 失败率，支持整页历史趋势钻取。",
      "dir.d6t": "系统安全、代理池、多端通知与工具",
      "dir.d6c1t": "全局代理池与单租户专属绑定",
      "dir.d6c1d": "集中管理 HTTP/HTTPS 代理并支持全量连通性检测，可为单个 OCI 租户绑定强制或可选专属代理以隔离请求出口。",
      "dir.d6c2t": "四大推送渠道与每日定时巡检",
      "dir.d6c2d": "支持 Telegram 机器人（可配独立代理）、Bark、钉钉、飞书签名推送；支持每日定时执行账号测活、抢机统计与费用检测。",
      "dir.d6c3t": "OAuth / Turnstile / MFA 登录防护",
      "dir.d6c3d": "支持账密 RSA 加密、指定账号 GitHub / Google OAuth 登录、Cloudflare Turnstile 验证、系统 TOTP 二验与异常 IP 封禁管理。",
      "dir.d6c4t": "MFA 备份仓、富文本笔记与迁移",
      "dir.d6c4d": "内置共享 TOTP 验证码备份（二维码识别与 CSV 导出）、富文本备忘录，以及带结构与外键预检的全库原子加密迁移。",
      "dir.d6c5t": "宿主机监控、SSE 日志与 OpenAPI",
      "dir.d6c5d": "提供宿主机 CPU/温度/内存/磁盘/网卡监控、SSE 实时系统日志流、细粒度开发者 API Token 配置与在线接口文档。",
      "dir.d6c6t": "自定义换肤引擎与手机 iOS 适配",
      "dir.d6c6d": "支持深浅色模式、侧栏与内容区独立取色换肤、中英双语切换，以及针对手机端专门设计的 iOS 分组列表交互界面。",
      "con.kicker": "OCI-START WEB CONSOLE",
      "con.title": "甲骨文云多租户与实例管理，一屏直达。",
      "con.lead": "点击下方标签，预览 OCI 商业区域点阵图、ARM 并发抢机实时流、双跳 noVNC 救援终端与换 IP 解析联动。",
      "con.t1": "全球商业区域点阵图",
      "con.t2": "多租户与并发开机",
      "con.t3": "实例运维 · SSH & noVNC",
      "con.t4": "CF / EdgeOne DNS & 三网探针",
      "con.live": "本地 H2 加密会话在线",
      "p1.title": "Oracle Cloud 45+ 公开商业区域与 ARM 开机记录（悬停节点查看区域代码）",
      "p1.arcHide": "隐藏航线",
      "p1.arcShow": "显示航线",
      "p1.pause": "暂停动效",
      "p1.play": "播放动效",
      "p1.speed": "支持浏览器有界并发测速",
      "p1.leg1": "已订阅区域 & ARM 历史开机热点",
      "p1.leg2": "公开商业区域参考坐标",
      "p1.note": "Canvas 2D 原生点阵绘制 · 离屏自动休眠省电",
      "p2.h1": "租户别名",
      "p2.h2": "主区域 / 订阅数",
      "p2.h3": "账号画像",
      "p2.h4": "运行中实例",
      "p2.h5": "API 状态",
      "common.healthy": "连通正常",
      "p2.running": "并发抢机轮询中…",
      "p2.stream": "实时并发开机日志 · Task #boot-a1-sjc (VM.Standard.A1.Flex · 4 OCPU / 24 GB)",
      "p3.h1": "实例 / 规格",
      "p3.h2": "公网 IPv4 / IPv6",
      "p3.h3": "快捷操作",
      "p4.d1": "DNS 引擎",
      "p4.d2": "域名记录",
      "p4.d3": "解析目标 / 代理",
      "p4.v1": "VPS 节点",
      "p4.v2": "电信 (CT)",
      "p4.v3": "联通 (CU)",
      "p4.v4": "移动 (CM)",
      "sec.kicker": "LOCAL-FIRST SECURITY",
      "sec.title": "你的 API 私钥，永远留在你自己的服务器。",
      "sec.lead": "开源透明、100% 私有化部署。浏览器加密直连你的自托管实例，直接调用云厂商官方 SDK，零第三方中转。",
      "sec.i1t": "本地 H2 存储 · 零远端上传",
      "sec.i1d": "所有租户 .pem 私钥、Cloudflare / EdgeOne 令牌均保存在本机 H2 数据库中；Telegram 机器人仅推送抢机通知，绝不接触账号凭据。",
      "sec.i2t": "可信代理剥离与防爆破封禁",
      "sec.i2d": "默认取物理连接真实 IP，支持 client-ip.trusted-proxies 从右向左精确剥离可信反向代理，配合登录 RSA 加密、TOTP 二验与异常 IP 自动封禁。",
      "sec.i3t": "结构预检与全量加密迁移",
      "sec.i3d": "换机升级支持一键导出加密备份包，导入前执行表结构与关联外键完整性预检，事务级原子提交，杜绝半成品脏数据。",
      "dep.kicker": "3-MINUTE DEPLOYMENT",
      "dep.title": "任选脚本或 Docker，即刻启动。",
      "dep.lead": "支持 Debian / Ubuntu (Java 8+)，启动后浏览器访问 http://your-ip:9856 即可登录。",
      "dep.t1": "一键脚本（推荐）",
      "dep.t2": "Docker 容器",
      "dep.t3": "Nginx + noVNC 反代",
      "dep.h1": "自动检测环境并完成服务配置（若未装 JDK 可先执行 apt install default-jdk；如本机已有 Redis 请留意端口评估）。",
      "dep.h2": "容器化隔离运行，支持一键安装、卸载与实时日志跟踪。",
      "dep.h3": "同机 Nginx 反代时请配置 forward-headers-strategy: none 与 client-ip.trusted-proxies: \"127.0.0.1/32,::1/128\"，并添加 /websockify/ 转发。",
      "sp.kicker": "ECOSYSTEM & SPONSORS",
      "sp.sub": "感谢以下机构与开源社区对 OCI-Start 的持续支持",
      "sp.s1": "项目赞助商",
      "sp.s2": "服务器资源支持",
      "sp.s3": "社区论坛支持",
      "sp.s4": "VPS 基础设施",
      "sp.s5": "CDN 加速与安全防护",
      "disc": "开源操守与免责声明：本项目完全开源（Apache-2.0），仅用于技术测试、学习与研究。严禁修改功能后引导他人部署以盗取云账号信息。使用者须遵守所在地区法律法规及云厂商服务条款，一切使用后果由使用者自行承担。",
      "foot.contrib": "参与贡献"
    },
    en: {
      "skip": "Skip to main content",
      "aria.nav": "Primary navigation",
      "aria.moduleTabs": "Panel feature modules",
      "aria.consoleTabs": "Console workspace preview",
      "aria.deployTabs": "Deployment options",
      "aria.map": "Oracle Cloud global commercial regions dot-matrix map",
      "nav.menu": "Menu",
      "nav.tag": "OCI Panel",
      "nav.home": "Home",
      "nav.cap": "Highlights",
      "nav.all": "All Features",
      "nav.console": "Live Panel",
      "nav.security": "Key Safety",
      "nav.deploy": "Deploy",
      "nav.cta": "Deploy Now →",
      "hero.eyebrow": "ORACLE CLOUD INSTANCE PANEL · OPEN-SOURCE SELF-HOSTED",
      "hero.l1": "Oracle Cloud.",
      "hero.l2": "Every instance.",
      "hero.l3": "One control panel.",
      "hero.sub": "The open-source self-hosted panel purpose-built for Oracle Cloud (OCI) — multi-tenant ARM/AMD auto-boot, 1-click IPv4/IPv6 rotation, boot volume VPU tuning, Web SSH & dual-hop noVNC.",
      "copy.hero": "Copy Install",
      "copy.script": "Copy Script",
      "copy.docker": "Copy Docker",
      "copy.nginx": "Copy Config",
      "copy.ok": "Copied",
      "copy.fail": "Copy failed",
      "hero.s1": "OCI regions",
      "hero.s2": "ARM/AMD auto-boot",
      "hero.s3": "Web shell & rescue",
      "hero.s4n": "Local H2",
      "hero.s4": "Zero key upload",
      "ohp.title": "Instance Control Plane",
      "ohp.m1k": "Active OCI Tenant",
      "ohp.m2k": "ARM A1 Flex Quota",
      "ohp.m3k": "Outbound Traffic",
      "ohp.booting": "AD Polling",
      "ohp.sel": "Selected: ",
      "ohp.a1": "Rotate IPv4",
      "ohp.a2": "Enable IPv6",
      "ohp.a3": "Attach VNIC",
      "ohp.a5": "Dual-Hop noVNC",
      "ohp.a6": "Boot Vol VPU",
      "ohp.barStrong": "ARM Auto-Boot Engine: ",
      "ohp.barText": "Multi-AD polling · Telegram alerts active",
      "cap.kicker": "ORACLE CLOUD LIFECYCLE",
      "cap.title": "Purpose-built for every Oracle Cloud instance workflow.",
      "cap.lead": "Skip the sluggish official OCI console and scattered grabber scripts — manage every tenant, VM, and network rule from one fast self-hosted panel.",
      "cap.c1t": "Multi-Tenant Profiles & ARM/AMD Auto-Boot",
      "cap.c1d": "Batch-import OCI API keys, inspect PAYG vs. Free Tier status, quotas, billing, and audit logs, and run multi-AD concurrent VM.Standard.A1.Flex boot tasks with Telegram alerts.",
      "cap.c2t": "Dual-Hop noVNC Rescue & Web SSH / SFTP",
      "cap.c2d": "Automates Oracle's two-hop instance console SSH tunnel and Websockify proxy for instant browser VNC rescue, alongside a full ANSI Web SSH terminal and SFTP.",
      "cap.c3t": "1-Click IPv4 / IPv6 Rotation & Multi-VNIC",
      "cap.c3d": "Rotate public IPv4 addresses, attach native IPv6, manage secondary VNICs and security rules, and tune OCI boot volume size & VPU performance online.",
      "cap.c4t": "Instant Cloudflare & EdgeOne DNS Sync",
      "cap.c4d": "Natively integrates Cloudflare and Tencent EdgeOne DNS APIs so you can update A/AAAA records immediately after rotating an OCI instance's public IP.",
      "cap.c5t": "10TB Traffic Tracking & Tri-ISP Probes",
      "cap.c5d": "Monitor outbound bandwidth against OCI's 10TB monthly free tier and deploy lightweight probes for live CT / CU / CM latency and packet-loss tracking.",
      "cap.c6t": "45+ OCI Region Speed Test & Ops Toolkit",
      "cap.c6d": "Includes bounded browser latency tests across 45+ OCI regions, Object Storage, Email Delivery, 1-click DD reinstall, TOTP MFA backup, and encrypted migration.",
      "dir.kicker": "IMPLEMENTED MODULES · 6 DOMAINS · 35 FEATURES",
      "dir.title": "Explore every implemented capability by module.",
      "dir.lead": "Select a real OCI-Start menu domain on the left to inspect every shipped workflow and safety boundary.",
      "dir.m1": "Tenants & Governance",
      "dir.m2": "Concurrent Auto-Boot",
      "dir.m3": "Instances, VNIC & Shell",
      "dir.m4": "Regions, Speed & Storage",
      "dir.m5": "CF / EdgeOne & Probes",
      "dir.m6": "Proxies, Alerts & Security",
      "dir.d1t": "OCI Tenant & Account Governance",
      "dir.d1c1t": "Restricted API & 1-Click Downgrade",
      "dir.d1c1d": "Auto-parse OCI configs; create dedicated least-privilege OCI users without storing root keys, or downgrade existing tenants in one click.",
      "dir.d1c2t": "Tenant Profiling & Batch Health Check",
      "dir.d1c2d": "Check all primary accounts in bulk, detect Personal/Corporate and Free/Trial/PAYG/Multi-region tiers, and track account age & costs.",
      "dir.d1c3t": "IAM Users, Password Policy & SSO",
      "dir.d1c3d": "Manage identity domain users, reset temporary passwords, configure password expiry days, toggle email MFA, and bind social login.",
      "dir.d1c4t": "Subscriptions, Quotas, Billing & Audit",
      "dir.d1c4d": "Subscribe to new OCI regions, inspect service quotas, analyze billing trends & line items, and browse cursor-paginated audit logs.",
      "dir.d1c5t": "Traffic Alerts & Auto-Shutdown",
      "dir.d1c5d": "Track monthly bandwidth, set GB alert thresholds, and optionally auto-stop tenant instances at threshold to prevent overage charges.",
      "dir.d1c6t": "Code-Verified Export & Transfer Lock",
      "dir.d1c6d": "Require notification-channel verification codes before exporting tenant JSON backups; log transfer amounts and lock mutations.",
      "dir.d2t": "OCI Concurrent Auto-Boot & Scheduling",
      "dir.d2c1t": "Quick Launch & Full Shape Templates",
      "dir.d2c1d": "Quick and custom launch modes with built-in templates across ARM A1/A2 and AMD E2/E3/E4/E5 shapes.",
      "dir.d2c2t": "Live OCI PAYG Price Estimator",
      "dir.d2c2d": "Automatically estimates hourly and monthly reference costs as you adjust OCPU, RAM, and boot volume GB.",
      "dir.d2c3t": "Dynamic OS & Image Matching",
      "dir.d2c3d": "Fetches available operating systems and image versions per region and architecture, or selects optimal default images.",
      "dir.d2c4t": "Custom Intervals & Daily Windows",
      "dir.d2c4d": "Configure multi-instance targets, second-level retry intervals, daily launch windows (e.g. 01:00–08:00), and auto-generated passwords.",
      "dir.d2c5t": "API Risk Warnings & Deduplication",
      "dir.d2c5d": "Includes explicit OCI API risk confirmation dialogs and unconfirmed-submission checks to prevent duplicate tasks.",
      "dir.d2c6t": "Live SSE Streams & Boot History",
      "dir.d2c6d": "Aggregates total attempts, successes, and failures with real-time SSE per-task log streams and historical boot logs.",
      "dir.d3t": "OCI Instance Ops, Multi-VNIC & Rescue Shell",
      "dir.d3c1t": "Lifecycle, Live Resize & DD Reinstall",
      "dir.d3c1d": "Start, stop, Telegram-verified terminate (optionally keeping boot volumes), live-resize CPU (1–24C) & RAM (1–256G), and 1-click DD reinstall.",
      "dir.d3c2t": "Online Volume Expansion & VPU Tuning",
      "dir.d3c2d": "Expand boot volume GB online and adjust disk performance from 0 to 120 VPUs/GB in increments of 10.",
      "dir.d3c3t": "Secondary VNICs & CIDR IPv4 Rotation",
      "dir.d3c3d": "Attach 1–31 secondary VNICs at once, remove all secondary NICs, and rotate public IPv4 matching target CIDR ranges.",
      "dir.d3c4t": "Batch IPv6 & AMD NLB Orchestration",
      "dir.d3c4d": "Add/remove 1–32 native IPv6 addresses per VNIC; one-click NAT Gateway + Route Table + NLB setup and restoration for AMD VMs.",
      "dir.d3c5t": "Browser Web SSH & SFTP Transfers",
      "dir.d3c5d": "Full ANSI terminal with dynamic PTY resize, command favorites, search, log export, SFTP upload, and path download.",
      "dir.d3c6t": "Dual-Hop SSH Tunnel noVNC Console",
      "dir.d3c6d": "Automates Oracle's two-hop console SSH tunnel and local Websockify proxy for browser RFB display, keystroke text input, and hard reset.",
      "dir.d4t": "OCI Cloud Services, Region Map & Speed Test",
      "dir.d4c1t": "45+ Commercial Region Dot-Map",
      "dir.d4c1d": "Verified city-level OCI region catalog overlaying historical ARM boot records, subscribed regions, and animated arcs.",
      "dir.d4c2t": "Bounded Browser Latency Test",
      "dir.d4c2d": "Runs bounded-concurrency latency probes from your browser to OCI endpoints, cancelling cleanly on navigation.",
      "dir.d4c3t": "OCI Object Storage Browser",
      "dir.d4c3d": "Manage Object Storage buckets by tenant and region with direct browser uploads, object previews, pagination, and downloads.",
      "dir.d4c4t": "OCI Email Delivery Service",
      "dir.d4c4d": "Configure sender domain verification, generate SMTP credentials, and compose/send emails inside the panel.",
      "dir.d4c5t": "Visual VCN Security Rule Editor",
      "dir.d4c5d": "Inspect, add, edit, and delete VCN security list ingress and egress rules across protocols and port ranges.",
      "dir.d4c6t": "Google Cloud (GCP) VM Extension",
      "dir.d4c6d": "Import GCP service account JSON credentials to inspect and manage Google Cloud VM instances in the same console.",
      "dir.d5t": "CF / EdgeOne DNS & Tri-ISP VPS Probes",
      "dir.d5c1t": "Cloudflare DNS Full Pagination Sync",
      "dir.d5c1d": "Verify credentials, pull all paginated DNS records, filter by name/content, and edit A/AAAA/CNAME/MX, TTL, and proxy state.",
      "dir.d5c2t": "Tencent EdgeOne DNS & Acceleration",
      "dir.d5c2d": "Native EdgeOne SDK integration for full cloud snapshot sync, weighted record updates, and acceleration domain management.",
      "dir.d5c3t": "Cross-Vendor VPS Fleet & SSH Probe",
      "dir.d5c3d": "Track VPS hosts from any provider and install, upgrade, or uninstall lightweight monitoring agents over SSH.",
      "dir.d5c4t": "Host Telemetry & Global OCI Ping",
      "dir.d5c4d": "Live CPU, RAM, disk, and traffic metrics plus scheduled or manual ICMP ping sweeps across every OCI instance.",
      "dir.d5c5t": "CT / CU / CM Tri-ISP Quality Matrix",
      "dir.d5c5d": "Active per-VPS probing showing China Telecom, Unicom, and Mobile latency, ICMP loss, TCP/HTTP failure rates, and trend charts.",
      "dir.d6t": "Platform Security, Proxy Pool, Alerts & Toolkit",
      "dir.d6c1t": "Global Proxy Pool & Tenant Binding",
      "dir.d6c1d": "Manage HTTP/HTTPS proxies with batch connectivity checks and bind required or optional dedicated proxies per OCI tenant.",
      "dir.d6c2t": "4 Alert Channels & Daily Cron Checks",
      "dir.d6c2d": "Telegram Bot (with proxy), Bark, DingTalk, and Feishu signed Webhooks plus daily account health, boot log, and cost checks.",
      "dir.d6c3t": "OAuth / Turnstile / TOTP Hardening",
      "dir.d6c3d": "RSA sign-in encryption, allowlisted GitHub & Google OAuth, Cloudflare Turnstile, login TOTP 2FA, and automated IP ban controls.",
      "dir.d6c4t": "MFA Vault, Rich Notes & Migration",
      "dir.d6c4d": "Shared TOTP authenticator backup with QR & CSV export, rich-text memos, and pre-checked atomic encrypted full-DB migration.",
      "dir.d6c5t": "Host Monitor, SSE Logs & OpenAPI",
      "dir.d6c5d": "Server CPU/temp/RAM/disk/NIC dashboard, real-time SSE system logs, scoped developer API tokens, and interactive API docs.",
      "dir.d6c6t": "Theme Engine & Mobile iOS Layout",
      "dir.d6c6d": "Light/dark modes, custom sidebar & content palettes, EN/ZH i18n, and an iOS-style grouped mobile interface.",
      "con.kicker": "OCI-START WEB CONSOLE",
      "con.title": "Every Oracle Cloud tenant and VM in one view.",
      "con.lead": "Explore the OCI commercial region dot-map, live ARM auto-boot stream, dual-hop noVNC rescue shell, and DNS sync.",
      "con.t1": "Global Commercial Region Map",
      "con.t2": "Multi-Tenant & Auto-Boot",
      "con.t3": "Instances · SSH & noVNC",
      "con.t4": "CF / EdgeOne DNS & Probes",
      "con.live": "Local H2 Encrypted Session",
      "p1.title": "Oracle Cloud 45+ Public Commercial Regions & ARM Records (Hover nodes for region code)",
      "p1.arcHide": "Hide Routes",
      "p1.arcShow": "Show Routes",
      "p1.pause": "Pause Motion",
      "p1.play": "Play Motion",
      "p1.speed": "Bounded Browser Latency Test",
      "p1.leg1": "Subscribed & Active ARM Regions",
      "p1.leg2": "Public Commercial Region Coordinates",
      "p1.note": "Native Canvas 2D dot-matrix · Auto-pauses off-screen",
      "p2.h1": "Tenant Alias",
      "p2.h2": "Home / Subscribed",
      "p2.h3": "Account Plan",
      "p2.h4": "Active Instances",
      "p2.h5": "API Health",
      "common.healthy": "Healthy",
      "p2.running": "Concurrent boot polling…",
      "p2.stream": "Live Boot Stream · Task #boot-a1-sjc (VM.Standard.A1.Flex · 4 OCPU / 24 GB)",
      "p3.h1": "Instance / Shape",
      "p3.h2": "Public IPv4 / IPv6",
      "p3.h3": "Quick Actions",
      "p4.d1": "DNS Engine",
      "p4.d2": "Hostname",
      "p4.d3": "Target / Proxy",
      "p4.v1": "VPS Node",
      "p4.v2": "Telecom (CT)",
      "p4.v3": "Unicom (CU)",
      "p4.v4": "Mobile (CM)",
      "sec.kicker": "LOCAL-FIRST SECURITY",
      "sec.title": "Your API private keys never leave your own host.",
      "sec.lead": "100% open-source and self-hosted. Your browser connects directly to your private instance, talking straight to official cloud SDKs with zero middleman.",
      "sec.i1t": "Local H2 Storage · Zero Cloud Upload",
      "sec.i1d": "All tenant .pem keys and Cloudflare / EdgeOne credentials stay inside your local H2 database; Telegram bots push status alerts only and never touch keys.",
      "sec.i2t": "Trusted Proxy Stripping & Auto IP Ban",
      "sec.i2d": "Uses physical peer socket IP by default and strips X-Forwarded-For right-to-left across explicit client-ip.trusted-proxies, paired with RSA sign-in and TOTP MFA.",
      "sec.i3t": "Schema Pre-Check & Atomic Encrypted Migration",
      "sec.i3d": "Export encrypted full-DB snapshots when migrating hosts, verifying schema and foreign-key integrity before atomic transaction commit.",
      "dep.kicker": "3-MINUTE DEPLOYMENT",
      "dep.title": "Launch with one script or Docker.",
      "dep.lead": "Runs on Debian / Ubuntu (Java 8+). Sign in at http://your-ip:9856 once started.",
      "dep.t1": "1-Click Script (Recommended)",
      "dep.t2": "Docker Container",
      "dep.t3": "Nginx + noVNC Proxy",
      "dep.h1": "Auto-configures runtime services (install JDK first via apt install default-jdk if needed; verify Redis port if Redis is already installed).",
      "dep.h2": "Isolated containerized deployment with one-command install, uninstall, and live log streaming.",
      "dep.h3": "For local Nginx HTTPS proxying, set forward-headers-strategy: none and client-ip.trusted-proxies: \"127.0.0.1/32,::1/128\", plus /websockify/.",
      "sp.kicker": "ECOSYSTEM & SPONSORS",
      "sp.sub": "Supported by infrastructure partners and the open-source community",
      "sp.s1": "Project Sponsor",
      "sp.s2": "Server Infrastructure",
      "sp.s3": "Community Forum",
      "sp.s4": "VPS Infrastructure",
      "sp.s5": "CDN & Edge Security",
      "disc": "Open-Source Integrity & Disclaimer: OCI-Start is open-source under Apache-2.0 strictly for testing, learning, and research. Modifying and redistributing it to phish or steal cloud credentials is strictly prohibited. Users assume full responsibility for regulatory and provider compliance.",
      "foot.contrib": "Contributing"
    }
  };

  /* 2. Responsive Header Navigation (`navbar` guide: single tree + ResizeObserver) */
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

  /* Active section indicator (`[aria-current="true"]` with orange bottom border) */
  var navLinks = siteMenu ? Array.from(siteMenu.querySelectorAll("a[href^='#']")) : [];
  function setActiveNavHref(href) {
    navLinks.forEach(function (link) {
      if (link.getAttribute("href") === href) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  if (navLinks.length && "IntersectionObserver" in window) {
    var trackedIds = ["#capabilities", "#features-all", "#console", "#security", "#deploy"];
    var spyObs = new IntersectionObserver(function (entries) {
      if (window.scrollY < 240) {
        setActiveNavHref("#top");
        return;
      }
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActiveNavHref("#" + entry.target.id);
        }
      });
    }, { rootMargin: "-22% 0px -62% 0px" });

    trackedIds.forEach(function (sel) {
      var el = document.querySelector(sel);
      if (el) spyObs.observe(el);
    });

    window.addEventListener("scroll", function () {
      if (window.scrollY < 220) setActiveNavHref("#top");
    }, { passive: true });
  }

  /* 3. Accessible Tablists (`tabs` guide compliant) */
  var ROUTE_BY_TAB = {
    "tab-overview": "http://127.0.0.1:9856/resource/list",
    "tab-tenants": "http://127.0.0.1:9856/tenants/list",
    "tab-instances": "http://127.0.0.1:9856/oci/list",
    "tab-dns": "http://127.0.0.1:9856/vps/instances/list"
  };

  var browserRouteEl = document.getElementById("browserRoute");
  var hasNativeFocusGroup = Object.hasOwn(HTMLElement.prototype, "focusGroup");
  var onOverviewTabChange = null;

  function scrollTabIntoScroller(tab) {
    try {
      tab.scrollIntoView({ block: "nearest", inline: "nearest", container: "nearest" });
    } catch (_) {
      var scroller = tab.parentElement;
      if (scroller) {
        var left = tab.offsetLeft - scroller.clientWidth / 2 + tab.clientWidth / 2;
        scroller.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
      }
    }
  }

  function initTablist(tablistEl, onSelectCallback) {
    if (!tablistEl) return;
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

    if (!hasNativeFocusGroup) {
      tabs.forEach(function (tab) {
        tab.tabIndex = tab.getAttribute("aria-selected") === "true" ? 0 : -1;
      });
      tablistEl.addEventListener("keydown", function (e) {
        var cur = tabs.indexOf(document.activeElement);
        if (cur < 0) return;
        var next = -1;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (cur + 1) % tabs.length;
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (cur - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tabs.length - 1;
        if (next >= 0) {
          e.preventDefault();
          selectTab(tabs[next], true);
        }
      });
    }
  }

  initTablist(document.getElementById("moduleTabs"));

  initTablist(document.getElementById("consoleTabs"), function (selectedTab) {
    if (browserRouteEl && ROUTE_BY_TAB[selectedTab.id]) {
      browserRouteEl.textContent = ROUTE_BY_TAB[selectedTab.id];
    }
    if (onOverviewTabChange) {
      onOverviewTabChange(selectedTab.id === "tab-overview");
    }
  });

  initTablist(document.getElementById("deployTabs"));

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

  /* 4. Copy Button (`copy-button` guide: Invoker Commands + VoiceOver repeat fix) */
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

  /* 5. Deep Navy + Signal Orange (#FF6B1F) + Live Green (#2EE59D) Dot-Matrix World Map */
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
  var inViewport = false;
  var rafId = 0;

  function syncMapButtonLabels() {
    var dict = I18N[currentLang] || I18N.zh;
    if (mapMotionBtn) mapMotionBtn.textContent = userPaused ? dict["p1.play"] : dict["p1.pause"];
    if (mapArcsBtn) mapArcsBtn.textContent = showArcs ? dict["p1.arcHide"] : dict["p1.arcShow"];
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
      var nextH = Math.max(210, Math.min(370, Math.round(nextW * 0.36)));
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

      baseCtx.fillStyle = "#21384f";
      var step = width < 540 ? 6 : 5;
      for (var py = 6; py < height - 4; py += step) {
        var lat = LAT_TOP - (py / height) * LAT_SPAN;
        for (var px = 6; px < width - 4; px += step) {
          var lng = (px / width) * 360 - 180;
          if (isLand(lng, lat)) {
            baseCtx.beginPath();
            baseCtx.arc(px, py, 1.18, 0, Math.PI * 2);
            baseCtx.fill();
          }
        }
      }

      projected = OCI_REGIONS.map(function (r) {
        var p = project(r.lng, r.lat);
        return { raw: r, x: p.x, y: p.y };
      });
    }

    function shouldAnimateMap() {
      return !userPaused && overviewActive && inViewport && !document.hidden;
    }

    function renderMapFrame(ts) {
      rafId = 0;
      if (!width || !height) rebuildBaseMap();

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(baseCanvas, 0, 0, width, height);

      var t = (ts || 0) * 0.001;

      if (showArcs && projected.length) {
        for (var i = 0; i < ARC_PAIRS.length; i++) {
          var a = projected[ARC_PAIRS[i][0]];
          var b = projected[ARC_PAIRS[i][1]];
          if (!a || !b) continue;
          var mx = (a.x + b.x) * 0.5;
          var dist = Math.hypot(b.x - a.x, b.y - a.y);
          var my = (a.y + b.y) * 0.5 - Math.min(60, dist * 0.22);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.quadraticCurveTo(mx, my, b.x, b.y);
          ctx.strokeStyle = "rgba(255, 107, 31, 0.28)";
          ctx.lineWidth = 1.2;
          ctx.stroke();

          if (!userPaused) {
            var u = (t * 0.28 + i * 0.17) % 1;
            var inv = 1 - u;
            var gx = inv * inv * a.x + 2 * inv * u * mx + u * u * b.x;
            var gy = inv * inv * a.y + 2 * inv * u * my + u * u * b.y;
            ctx.beginPath();
            ctx.arc(gx, gy, 2.3, 0, Math.PI * 2);
            ctx.fillStyle = "#FF6B1F";
            ctx.fill();
          }
        }
      }

      for (var n = 0; n < projected.length; n++) {
        var item = projected[n];
        var isPrimary = item.raw.active;
        var isHover = hoveredNode === item;

        if (isPrimary && !userPaused) {
          var phase = (t * 0.72 + n * 0.23) % 1;
          ctx.beginPath();
          ctx.arc(item.x, item.y, 4 + phase * 11, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(255, 107, 31," + (0.46 * (1 - phase)).toFixed(3) + ")";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(item.x, item.y, isHover ? 5.6 : (isPrimary ? 4.2 : 3.2), 0, Math.PI * 2);
        ctx.fillStyle = isPrimary ? "#FF6B1F" : "#2EE59D";
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "#050d15";
        ctx.stroke();

        if (isPrimary && width >= 540) {
          ctx.font = "600 11px Inter, -apple-system, 'PingFang SC', sans-serif";
          ctx.fillStyle = "rgba(255, 255, 255, 0.88)";
          var label = currentLang === "en" ? item.raw.en : item.raw.zh;
          ctx.fillText(label, item.x + 7, item.y + 3.5);
        }
      }

      if (shouldAnimateMap()) {
        rafId = requestAnimationFrame(renderMapFrame);
      }
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

    /* Pause Canvas via contentvisibilityautostatechange & IntersectionObserver (`efficient-background-processing`) */
    var consoleSection = document.getElementById("console");
    if (consoleSection) {
      consoleSection.addEventListener("contentvisibilityautostatechange", function (ev) {
        inViewport = !ev.skipped;
        syncMapLoop();
      });
      if (!("contentVisibility" in document.documentElement.style) && "IntersectionObserver" in window) {
        var mapVisObs = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            inViewport = entry.isIntersecting;
            syncMapLoop();
          });
        }, { rootMargin: "200px" });
        mapVisObs.observe(consoleSection);
      } else if ("IntersectionObserver" in window) {
        var exactVisObs = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            inViewport = entry.isIntersecting;
            syncMapLoop();
          });
        }, { rootMargin: "150px" });
        exactVisObs.observe(consoleSection);
      }
    }

    document.addEventListener("visibilitychange", syncMapLoop);

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
    renderMapFrame(0);
  }

  /* 6. Interactive Hero OCI Instance Card Row Selection */
  var ohpRows = Array.from(document.querySelectorAll(".ohp-row"));
  var ohpSelName = document.getElementById("ohpSelName");
  var ohpSelSpec = document.getElementById("ohpSelSpec");
  ohpRows.forEach(function (row) {
    row.addEventListener("click", function () {
      ohpRows.forEach(function (r) {
        r.setAttribute("aria-pressed", r === row ? "true" : "false");
      });
      if (ohpSelName) ohpSelName.textContent = row.getAttribute("data-inst-name") || "";
      if (ohpSelSpec) ohpSelSpec.textContent = row.getAttribute("data-inst-spec") || "";
    });
  });

  /* 7. Language Toggle */
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
