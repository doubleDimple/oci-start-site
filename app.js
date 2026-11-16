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
      "aria.consoleTabs": "控制台核心界面预览",
      "aria.deployTabs": "部署方案选择",
      "aria.map": "Oracle Cloud 全球商业区域点阵分布图",
      "nav.menu": "菜单",
      "nav.home": "首页",
      "nav.cap": "核心能力",
      "nav.console": "工作台预览",
      "nav.security": "隐私安全",
      "nav.deploy": "快速部署",
      "nav.cta": "立即部署 →",
      "hero.eyebrow": "LIVE CLOUD ORCHESTRATION · 开源自托管",
      "hero.l1": "每一个租户。",
      "hero.l2": "每一台实例。",
      "hero.l3": "尽在掌控。",
      "hero.sub": "集多租户并发开机、Web SSH / noVNC、双云 DNS 与三网探针于一体，私钥 100% 本地 H2 存储，从抢机到日常运维全链路实时可视。",
      "copy.hero": "复制安装",
      "copy.script": "复制脚本",
      "copy.docker": "复制 Docker",
      "copy.nginx": "复制配置",
      "copy.ok": "已复制",
      "copy.fail": "复制失败",
      "hero.s1": "全球商业区域",
      "hero.s2": "本地私钥存储",
      "hero.s3n": "3 网",
      "hero.s3": "实时质量探针",
      "hero.s4": "并发开机值守",
      "cap.kicker": "CORE CAPABILITIES",
      "cap.title": "一套自托管系统，打通云端全生命周期。",
      "cap.lead": "告别零散脚本与多窗口切换。围绕真实多租户运维场景构建高内聚的 Web 控制台与自动化引擎。",
      "cap.c1t": "多租户画像与高并发抢机",
      "cap.c1d": "批量导入管理多个 OCI 租户，清晰洞察 PAYG 升级号 / 普通号、配额、账单费用与审计日志；支持跨可用性域多 API 并发开机与实时任务流追踪。",
      "cap.c2t": "Web SSH · SFTP 与双跳 noVNC",
      "cap.c2d": "浏览器直连全彩 ANSI 终端与 SFTP 文件存取；自动编排 Oracle 官方双跳 SSH 隧道与 Websockify 代理，机器失联或重装时直接操控图形控制台。",
      "cap.c3t": "VNIC 多网卡与 IPv4 / IPv6 切换",
      "cap.c3d": "可视化管理主辅虚拟网卡与安全放行规则，一键更换公网 IPv4、开启 IPv6 双栈地址，并支持在线调整引导卷容量与 VPU 性能档位。",
      "cap.c4t": "Cloudflare & EdgeOne 双云 DNS",
      "cap.c4d": "原生打通 Cloudflare 与腾讯云 EdgeOne 域名解析 API，支持全量分页同步、记录增删改与 CDN 代理状态联动，实例换 IP 后秒级更新域名。",
      "cap.c5t": "跨厂商 VPS 与三网质量探针",
      "cap.c5d": "统一纳管多云 VPS 节点，一键下发轻量探针，实时展示 CPU / 内存 / 磁盘负载及电信、联通、移动三网 ICMP / TCP / HTTP 延迟与丢包率。",
      "cap.c6t": "工具箱 · Telegram 通知与 OpenAPI",
      "cap.c6d": "内置 45+ 区域浏览器并发测速、对象存储、邮件投递、TOTP MFA 备份、加密迁移，支持 Telegram 抢机推送与细粒度开发者 API Token。",
      "con.kicker": "INTERACTIVE WORKBENCH",
      "con.title": "实时全局视野，一屏纵览多云动态。",
      "con.lead": "点击下方模块标签，体验新版 Vue 3 控制台的全球商业区域点阵图、并发抢机流、远程终端与三网监控界面。",
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
      "aria.consoleTabs": "Console workspace preview",
      "aria.deployTabs": "Deployment options",
      "aria.map": "Oracle Cloud global commercial regions dot-matrix map",
      "nav.menu": "Menu",
      "nav.home": "Home",
      "nav.cap": "Capabilities",
      "nav.console": "Live Console",
      "nav.security": "Security",
      "nav.deploy": "Deploy",
      "nav.cta": "Deploy Now →",
      "hero.eyebrow": "LIVE CLOUD ORCHESTRATION · SELF-HOSTED",
      "hero.l1": "Every tenant.",
      "hero.l2": "Every instance.",
      "hero.l3": "Accounted for.",
      "hero.sub": "Concurrent provisioning, Web SSH / noVNC, dual-cloud DNS, and tri-ISP probes with live visibility from boot to production — 100% self-hosted.",
      "copy.hero": "Copy Install",
      "copy.script": "Copy Script",
      "copy.docker": "Copy Docker",
      "copy.nginx": "Copy Config",
      "copy.ok": "Copied",
      "copy.fail": "Copy failed",
      "hero.s1": "Commercial regions",
      "hero.s2": "Local H2 key storage",
      "hero.s3n": "3-ISP",
      "hero.s3": "Live quality probes",
      "hero.s4": "Auto-boot & alerts",
      "cap.kicker": "CORE CAPABILITIES",
      "cap.title": "One self-hosted workbench across your entire cloud fleet.",
      "cap.lead": "Replace scattered CLI scripts and multiple browser tabs with a cohesive control plane engineered for multi-tenant operations.",
      "cap.c1t": "Multi-Tenant Profiles & Concurrent Boot",
      "cap.c1d": "Batch-manage OCI credentials, inspect PAYG vs. Free Tier profiles, quotas, billing costs, and audit logs, and run multi-AD concurrent boot tasks with live SSE streams.",
      "cap.c2t": "Web SSH · SFTP & Dual-Hop noVNC",
      "cap.c2d": "Browser-native ANSI terminal with SFTP file transfers, plus automated dual-hop SSH tunneling and Websockify proxying for instant graphical noVNC rescue.",
      "cap.c3t": "Multi-VNIC & IPv4 / IPv6 Rotation",
      "cap.c3d": "Manage primary and secondary VNICs, security rules, one-click public IPv4 switching, IPv6 attachment, and online boot volume capacity & VPU tuning.",
      "cap.c4t": "Cloudflare & EdgeOne Dual DNS",
      "cap.c4d": "Synchronize full paginated DNS zones across Cloudflare and Tencent EdgeOne. Update A/AAAA/CNAME records and proxy states seconds after rotating IPs.",
      "cap.c5t": "Multi-Cloud VPS & Tri-ISP Probes",
      "cap.c5d": "Track servers across any provider with lightweight agents reporting CPU, RAM, disk, and real ICMP / TCP / HTTP latency & packet loss across CT, CU, and CM.",
      "cap.c6t": "Ops Toolkit · Telegram & OpenAPI",
      "cap.c6d": "Includes bounded 45+ region browser latency tests, Object Storage, Email Delivery, TOTP MFA backup, encrypted DB migration, Telegram alerts, and API tokens.",
      "con.kicker": "INTERACTIVE WORKBENCH",
      "con.title": "Real-time fleet visibility in a single pane of glass.",
      "con.lead": "Switch tabs below to explore the Vue 3 region dot-map, concurrent provisioning stream, remote shell, and tri-ISP probe matrix.",
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
    var trackedIds = ["#capabilities", "#console", "#security", "#deploy"];
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
  }

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

  /* 6. Language Toggle */
  var langBtn = document.getElementById("langBtn");

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "zh";
    var dict = I18N[currentLang];
    document.documentElement.lang = currentLang === "en" ? "en" : "zh-CN";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
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
