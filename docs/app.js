(function () {
  "use strict";

  const CONFIG = (typeof window !== "undefined" && window.SHAREFLOW_PORTAL_CONFIG) || {
    releasesRepo: "ow7ab/Share-Flow-Releases",
    assetFileName: "Share-Flow.apk",
    manifestFileName: "version.json",
    directLatestApkUrl: "https://github.com/ow7ab/Share-Flow-Releases/releases/latest/download/Share-Flow.apk",
    officialVersionManifestUrl: "https://ow7ab.github.io/Share-Flow-Releases/version.json",
    portalUrl: "https://ow7ab.github.io/Share-Flow-Releases/",
    customManifestUrl: "",
    galleryItems: []
  };

  const I18N = {
    ar: {
      dir: "rtl",
      langBtn: "English",
      brandSub: "مشاركة ملفات سريعة بلا إعلانات • أندرويد",
      navFeatures: "المميزات",
      navGallery: "واجهة التطبيق",
      navReleases: "الإصدارات",
      navFaq: "الأسئلة الشائعة",
      heroEyebrow: "هل مللت من الإعلانات المزعجة في تطبيقات مشاركة الملفات؟",
      officialBadge: "الموقع الرسمي • خالي تماماً من الإعلانات",
      heroTitle: "جرّب Share Flow. شارك ملفاتك بسهولة، بسرعة، وبتجربة أكثر راحة.",
      heroDesc:
        "تجربة مشاركة ملفات مصممة لتكون بسيطة وسلسة، دون تشتيت غير ضروري. انقل الصور والفيديوهات والتطبيقات والمستندات مباشرة عبر Wi-Fi ورمز QR بلا إنترنت.",
      discoverBtn: "اكتشف المميزات",
      spotlightTagline: "نقل محلي مشفّر • تثبيت مباشر • تحديث تلقائي",
      chipAdfree: "0% إعلانات",
      chipOffline: "بدون إنترنت",
      chipEncrypted: "AES-256-GCM",
      chipAndroid: "Android 7.0+",
      autoUpdateNote: "متصل تلقائياً بالتطبيق عبر version.json — لا حاجة لإدخال أي رابط يدوياً.",
      loadingStatus: "جاري التحقق من أحدث إصدار رسمي موقّع (Share-Flow.apk)…",
      readyStatus: "أحدث إصدار رسمي موقّع وجاهز للتثبيت المباشر (Share-Flow.apk)",
      unavailableStatus:
        "لا يوجد إصدار APK منشور للعامة حالياً. فور نشر أول إصدار رسمي في مستودع التوزيع العام سيظهر زر التحميل المباشر تلقائياً هنا.",
      privateHint:
        "تُوزَّع ملفات APK وملف version.json عبر المستودع العام (ow7ab/Share-Flow-Releases) بينما تبقى الشيفرة المصدرية خاصة ومحمية بالكامل.",
      rateLimitStatus:
        "تم بلوغ حد الطلبات المؤقت لخادم الإصدارات من هذه الشبكة. أعد المحاولة بعد قليل.",
      errorStatus:
        "تعذّر الاتصال بخادم الإصدارات حالياً. تحقق من اتصال الإنترنت ثم أعد المحاولة.",
      downloadDirect: "تحميل Share Flow",
      downloadWaiting: "جاري تجهيز تحميل Share Flow…",
      downloadUnavailable: "التحميل غير متاح حالياً",
      downloadStarted: "بدأ تنزيل Share-Flow.apk مباشرة. بعد اكتمال التنزيل افتح الملف لتثبيته.",
      retryBtn: "إعادة الفحص",
      copyShaBtn: "نسخ SHA-256",
      copiedShaBtn: "تم نسخ SHA-256",
      metaVersion: "رقم الإصدار",
      metaSize: "حجم الملف",
      metaUpdated: "تاريخ آخر تحديث",
      metaPackage: "صيغة التثبيت",
      metaSha: "بصمة التحقق الأمني SHA-256",
      releaseNotesLabel: "سجل التغييرات في هذا الإصدار",
      apkFormatValue: "Share-Flow.apk (مباشر بدون ZIP)",
      featuresKicker: "مميزات حقيقية مبنية داخل التطبيق",
      featuresHeading: "لماذا يختار المستخدمون Share Flow؟",
      featuresLead: "كل ميزة هنا موجودة فعلياً داخل تطبيق أندرويد ومصممة لراحتك وخصوصيتك.",
      f1Title: "إرسال واستقبال محلي فائق السرعة",
      f1Desc: "شارك ملفاتك مباشرة عبر Wi-Fi المحلي أو Wi-Fi Direct أو نقطة الاتصال دون استهلاك رصيد الإنترنت.",
      f2Title: "تجربة نظيفة خالية تماماً من الإعلانات",
      f2Desc: "لا إعلانات منبثقة ولا شاشات مزعجة — افتح التطبيق وابدأ الإرسال أو الاستقبال مباشرة بتركيز كامل.",
      f3Title: "ربط فوري عبر رمز QR",
      f3Desc: "امسح رمز QR من الجهاز المستقبِل ليتم الاتصال فوراً بوضوح وأمان دون إعدادات معقدة.",
      f4Title: "دعم شامل لجميع أنواع ملفاتك",
      f4Desc: "يدعم الصور، الفيديوهات، الصوتيات، المستندات، المجلدات، والتطبيقات المثبّتة (بما فيها Split APKs).",
      f5Title: "أمان وتشفير وخصوصية عالية",
      f5Desc: "تشفير AES-256-GCM أثناء النقل، تحقق SHA-256 لسلامة كل ملف، وخزنة خاصة محمية بقفل الجهاز.",
      f6Title: "تحديثات تلقائية آمنة من داخل التطبيق",
      f6Desc: "اضغط «التحقق من التحديثات» داخل الإعدادات ليفحص التطبيق أحدث إصدار ويتحقق من SHA-256 والشهادة تلقائياً.",
      galleryKicker: "الهوية ولقطات المشروع",
      galleryHeading: "معرض صور ومكونات Share Flow",
      galleryLead: "اضغط على أي صورة للتكبير والتنقل بينها بوضوح. تُعرض فقط الأصول واللقطات الحقيقية للمشروع.",
      zoomLabel: "تكبير",
      mod1Title: "الرئيسية (إرسال / استقبال)",
      mod1Desc: "وصول فوري لزرَي الإرسال والاستقبال وآخر التحويلات من أعلى الشاشة.",
      mod2Title: "مدير الملفات والوسائط والتطبيقات",
      mod2Desc: "تصفح منظم للصور، الفيديوهات، الموسيقى، المستندات، والتطبيقات المثبّتة.",
      mod3Title: "الأدوات والخزنة الخاصة",
      mod3Desc: "محلل التخزين، الخزنة المشفّرة، ومشغل الوسائط المدمج داخل التطبيق.",
      mod4Title: "الإعدادات والتحديث السحابي",
      mod4Desc: "تبديل اللغة والمظهر والتحقق التلقائي من تحديثات Share Flow بضغطة واحدة.",
      installTitle: "خطوات التثبيت والتحديث الآمن على أندرويد",
      i1: "اضغط زر «تحميل Share Flow» لتنزيل ملف Share-Flow.apk مباشرة دون أي ملفات ZIP.",
      i2: "افتح ملف Share-Flow.apk فور اكتمال التحميل من إشعارات المتصفح أو مجلد التنزيلات.",
      i3: "عند الطلب لأول مرة، اسمح بتثبيت التطبيقات من هذا المصدر في إعدادات Android.",
      i4: "في التحديثات اللاحقة يمكنك التحديث مباشرة من داخل الإعدادات أو من هذا الموقع مع الحفاظ على بياناتك.",
      historyTitle: "سجل الإصدارات السابقة",
      historySubtitle: "تتحدّث هذه القائمة تلقائياً مع كل إصدار رسمي موقّع جديد.",
      historyEmpty: "سيظهر سجل الإصدارات السابقة فور نشر أكثر من إصدار.",
      historyDownload: "تحميل Share-Flow.apk",
      faqKicker: "إجابات واضحة ومباشرة",
      faqHeading: "الأسئلة الشائعة",
      faqQ1: "ما هو Share Flow؟",
      faqA1: "تطبيق أندرويد سريع وآمن لمشاركة الصور والفيديوهات والمستندات والتطبيقات والمجلدات محلياً عبر شبكة Wi-Fi ورمز QR دون إنترنت، مع تشفير AES-256-GCM وبدون أي إعلانات.",
      faqQ2: "كيف أحمل التطبيق؟",
      faqA2: "اضغط زر «تحميل Share Flow» في أعلى هذه الصفحة ليبدأ تنزيل ملف Share-Flow.apk مباشرة، ثم افتحه لتثبيته على جهازك الأندرويد.",
      faqQ3: "هل التطبيق مجاني وخالي من الإعلانات؟",
      faqA3: "نعم، تطبيق Share Flow مجاني بالكامل وخالي تماماً من الإعلانات ولا يحتوي على أي مكتبات إعلانية.",
      faqQ4: "كيف أستقبل الملفات؟",
      faqA4: "افتح التطبيق واضغط «استقبال» من الشاشة الرئيسية ليظهر رمز QR وجاهزية الاستقبال المحلي، ثم يقوم المرسِل بمسح الرمز أو اختيار جهازك لبدء النقل فوراً.",
      faqQ5: "كيف أتحقق من وجود تحديث؟",
      faqA5: "من داخل تطبيق Share Flow انتقل إلى تبويب «الإعدادات» ثم اضغط «التحقق من التحديثات». سيفحص التطبيق ملف version.json الرسمي تلقائياً، وإذا وُجد إصدار أحدث سيعرض لك رقم الإصدار وسجل التغييرات وزر التنزيل والتحقق والتثبيت.",
      faqQ6: "هل أحتاج إلى إدخال رابط التحديث يدوياً؟",
      faqA6: "لا إطلاقاً. رابط التحديث الرسمي مدمج ومضبوط تلقائياً داخل التطبيق، ويكفي الضغط على زر التحقق من التحديثات فقط.",
      faqQ7: "ماذا أفعل إذا فشل تثبيت التحديث؟",
      faqA7: "تأكد أولاً من تفعيل إذن «تثبيت التطبيقات غير المعروفة» لـ Share Flow أو المتصفح وتوفر مساحة تخزين كافية. وإذا كانت النسخة القديمة على جهازك نسخة اختبارية قديمة (Debug) وتنتقل لأول مرة إلى النسخة الرسمية، احذف النسخة التجريبية مرة واحدة ثم ثبّت النسخة الرسمية لتعمل جميع التحديثات التالية تلقائياً فوقها.",
      footer: "Share Flow — ملفاتك على أجهزتك وتحت تحكمك الكامل.",
      footerMeta: "HTTPS • ملف APK رسمي موقّع • بدون إعلانات"
    },
    en: {
      dir: "ltr",
      langBtn: "العربية",
      brandSub: "Fast Ad-Free Local File Sharing • Android",
      navFeatures: "Features",
      navGallery: "Showcase",
      navReleases: "Releases",
      navFaq: "FAQ",
      heroEyebrow: "Tired of intrusive ads in file-sharing apps?",
      officialBadge: "Official Website • 100% Ad-Free",
      heroTitle: "Try Share Flow. Share your files easily, fast, and comfortably.",
      heroDesc:
        "A clean, smooth local file-sharing experience built without unnecessary distractions. Transfer photos, videos, apps, and documents over direct Wi-Fi and QR pairing with zero internet required.",
      discoverBtn: "Explore Features",
      spotlightTagline: "Encrypted Local Transfer • Direct APK • Auto Updates",
      chipAdfree: "0% Ads",
      chipOffline: "Offline Ready",
      chipEncrypted: "AES-256-GCM",
      chipAndroid: "Android 7.0+",
      autoUpdateNote: "Connected automatically to the app via version.json — no manual URL entry needed.",
      loadingStatus: "Checking latest signed official release (Share-Flow.apk)…",
      readyStatus: "Latest signed official release verified and ready for direct install (Share-Flow.apk)",
      unavailableStatus:
        "No public APK release is published yet. Once the first official release is published, the direct APK download button activates automatically here.",
      privateHint:
        "Signed APKs and version.json are distributed publicly via ow7ab/Share-Flow-Releases while source code remains private.",
      rateLimitStatus:
        "Temporary release server rate limit reached from this network. Please retry shortly.",
      errorStatus:
        "Unable to reach the release server right now. Check your internet connection and retry.",
      downloadDirect: "Download Share Flow",
      downloadWaiting: "Preparing Share Flow download…",
      downloadUnavailable: "Download Currently Unavailable",
      downloadStarted: "Downloading Share-Flow.apk directly. Open the file once complete to install.",
      retryBtn: "Check Again",
      copyShaBtn: "Copy SHA-256",
      copiedShaBtn: "SHA-256 Copied",
      metaVersion: "Version",
      metaSize: "File Size",
      metaUpdated: "Last Updated",
      metaPackage: "Install Format",
      metaSha: "SHA-256 Security Checksum",
      releaseNotesLabel: "Changelog & Release Notes",
      apkFormatValue: "Share-Flow.apk (Direct install, no ZIP)",
      featuresKicker: "Real capabilities built into the Android app",
      featuresHeading: "Why users choose Share Flow",
      featuresLead: "Every feature listed here is genuinely implemented in the Android app for speed and privacy.",
      f1Title: "Fast Offline Send & Receive",
      f1Desc: "Transfer files directly over local Wi-Fi, Wi-Fi Direct, or Hotspot without using mobile data.",
      f2Title: "Clean, 100% Ad-Free Experience",
      f2Desc: "Zero pop-ups, zero ad SDKs — open Share Flow and transfer immediately without distractions.",
      f3Title: "Instant QR Code Pairing",
      f3Desc: "Scan the receiver's QR code to connect directly and securely in seconds.",
      f4Title: "Supports All Your File Types",
      f4Desc: "Share photos, videos, audio, documents, folders, and installed apps (including Split APKs).",
      f5Title: "Strong Encryption & Privacy",
      f5Desc: "AES-256-GCM transport encryption, SHA-256 file verification, and a device-locked Private Vault.",
      f6Title: "Automatic Verified In-App Updates",
      f6Desc: "Tap Check for Updates in Settings to fetch version.json, verify SHA-256 and signing cert, and update in-place.",
      galleryKicker: "Project Visuals & Modules",
      galleryHeading: "Share Flow Visual Showcase",
      galleryLead: "Click any visual to zoom and browse. Only authentic project assets and real screenshots are shown.",
      zoomLabel: "Zoom",
      mod1Title: "Home (Send / Receive)",
      mod1Desc: "Immediate top-level Send & Receive controls with recent transfers and local connection status.",
      mod2Title: "Files, Media & Apps Hub",
      mod2Desc: "Organized browsing for photos, videos, music, documents, folders, and installed APKs.",
      mod3Title: "Tools & Private Vault",
      mod3Desc: "Storage analyzer, encrypted private vault, and built-in media player.",
      mod4Title: "Settings & Cloud Updates",
      mod4Desc: "Language and theme preferences plus one-tap verified update checks.",
      installTitle: "Safe Android Installation & Update Steps",
      i1: "Tap Download Share Flow to download Share-Flow.apk directly (never a ZIP archive).",
      i2: "Open Share-Flow.apk once the download finishes from your browser or Downloads folder.",
      i3: "Allow installation from this source when prompted by Android for the first time.",
      i4: "Future updates install smoothly in-place from Settings or this website while preserving all data.",
      historyTitle: "Previous Releases",
      historySubtitle: "Updates dynamically whenever a new signed official release is published.",
      historyEmpty: "Previous releases will appear here once more than one release is published.",
      historyDownload: "Download Share-Flow.apk",
      faqKicker: "Clear & Direct Answers",
      faqHeading: "Frequently Asked Questions",
      faqQ1: "What is Share Flow?",
      faqA1: "A fast, ad-free Android app for sharing photos, videos, documents, folders, and installed apps offline over local Wi-Fi and QR pairing with AES-256-GCM encryption.",
      faqQ2: "How do I download the app?",
      faqA2: "Tap Download Share Flow at the top of this page to download Share-Flow.apk directly, then open the APK to install.",
      faqQ3: "Is Share Flow free and ad-free?",
      faqA3: "Yes. Share Flow is completely free and contains zero ads or advertising SDKs.",
      faqQ4: "How do I receive files?",
      faqA4: "Open Share Flow and tap Receive on the home screen to show your QR code and local receiver status; the sender scans it to start transferring immediately.",
      faqQ5: "How do I check for updates?",
      faqA5: "Open Settings inside Share Flow and tap Check for Updates. The app reads the official version.json automatically and verifies SHA-256 and signing certificate before installing.",
      faqQ6: "Do I need to type an update URL manually?",
      faqA6: "Never. The official HTTPS version.json endpoint is built into Share Flow automatically.",
      faqQ7: "What should I do if installing an update fails?",
      faqA7: "Ensure Install Unknown Apps is allowed for Share Flow or your browser and that free storage is available. If upgrading for the very first time from an older Debug build to an official Release build, uninstall the Debug build once; all subsequent official releases will update in-place.",
      footer: "Share Flow — Your Files. Your Devices. Your Control.",
      footerMeta: "HTTPS • Direct Signed APK • Zero Ads"
    }
  };

  let currentLang = "ar";
  let latestReleaseState = { status: "loading", data: null, history: [] };
  let activeLightboxIndex = -1;

  function isPrivateOrLoopbackHost(hostname) {
    const clean = String(hostname || "").toLowerCase().replace(/^\[|\]$/g, "");
    if (!clean || clean === "localhost" || clean.endsWith(".localhost") || clean.endsWith(".local")) {
      return true;
    }
    if (
      clean === "::1" ||
      clean === "::" ||
      clean.startsWith("::ffff:") ||
      clean.startsWith("fe80:") ||
      clean.startsWith("fc") ||
      clean.startsWith("fd")
    ) {
      return true;
    }
    const parts = clean.split(".");
    if (parts.length === 4 && parts.every((p) => /^\d+$/.test(p) && Number(p) >= 0 && Number(p) <= 255)) {
      const a = Number(parts[0]);
      const b = Number(parts[1]);
      return (
        a === 10 ||
        a === 127 ||
        a === 0 ||
        (a === 100 && b >= 64 && b <= 127) ||
        (a === 169 && b === 254) ||
        (a === 172 && b >= 16 && b <= 31) ||
        (a === 192 && b === 168)
      );
    }
    return false;
  }

  function isSafeDirectApkUrl(rawUrl) {
    if (typeof rawUrl !== "string") return false;
    const trimmed = rawUrl.trim();
    if (!trimmed || trimmed.length > 512) return false;
    try {
      const parsed = new URL(trimmed);
      if (parsed.protocol !== "https:") return false;
      if (parsed.username || parsed.password) return false;
      if (!parsed.hostname || !parsed.hostname.includes(".")) return false;
      if (isPrivateOrLoopbackHost(parsed.hostname)) return false;
      const pathLower = parsed.pathname.toLowerCase();
      if (!pathLower.endsWith(".apk")) return false;
      if (
        pathLower.endsWith(".zip") ||
        pathLower.endsWith(".tar.gz") ||
        pathLower.includes("/archive/") ||
        pathLower.includes("/zipball/") ||
        pathLower.includes("/tarball/")
      ) {
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }

  function isSafeHttpsEndpoint(rawUrl) {
    if (typeof rawUrl !== "string") return false;
    try {
      const parsed = new URL(rawUrl.trim());
      if (parsed.protocol !== "https:") return false;
      if (parsed.username || parsed.password) return false;
      if (!parsed.hostname || !parsed.hostname.includes(".")) return false;
      return !isPrivateOrLoopbackHost(parsed.hostname);
    } catch {
      return false;
    }
  }

  function formatBytes(bytes, lang) {
    if (!Number.isFinite(bytes) || bytes <= 0) return "—";
    const units = lang === "ar" ? ["بايت", "ك.ب", "م.ب", "ج.ب"] : ["B", "KB", "MB", "GB"];
    let value = bytes;
    let idx = 0;
    while (value >= 1024 && idx < units.length - 1) {
      value /= 1024;
      idx++;
    }
    return `${value.toFixed(idx === 0 ? 0 : 2)} ${units[idx]}`;
  }

  function formatDate(isoString, lang) {
    if (!isoString) return "—";
    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) return "—";
    return new Intl.DateTimeFormat(lang === "ar" ? "ar-SD" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  }

  function extractShaFromNotes(body) {
    if (typeof body !== "string") return "";
    const labeled = body.match(/SHA-256[^0-9a-fA-F]*([0-9a-fA-F]{64})\b/i);
    if (labeled) return labeled[1].toLowerCase();
    const match = body.match(/\b[0-9a-fA-F]{64}\b/);
    return match ? match[0].toLowerCase() : "";
  }

  function extractBuildNumber(title, body) {
    const combined = `${title || ""}\n${body || ""}`;
    const match = combined.match(/\bBuild\s+(\d+)\b/i) || combined.match(/بناء\s+(\d+)/);
    return match ? Number(match[1]) : null;
  }

  function formatReleaseNotes(rawBody) {
    if (Array.isArray(rawBody)) {
      return rawBody
        .map((item) => formatReleaseNotes(String(item || "")))
        .filter(Boolean)
        .join("\n");
    }
    if (typeof rawBody !== "string") return "";
    const cleanedLines = rawBody
      .replace(/\r\n/g, "\n")
      .split("\n")
      .map((line) =>
        line
          .replace(/^\s*#{1,6}\s*/, "")
          .replace(/^\s*[-*]\s+/, "• ")
          .replace(/\*\*(.*?)\*\*/g, "$1")
          .replace(/`([^`]+)`/g, "$1")
          .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, "$1")
          .trim()
      )
      .filter((line) => line.length > 0 && !/^-{3,}$/.test(line));

    const joined = cleanedLines.join("\n").trim();
    return joined.length > 1500 ? `${joined.slice(0, 1497)}…` : joined;
  }

  function toChangelogLines(notesText) {
    if (!notesText) return [];
    return notesText
      .split("\n")
      .map((line) => line.replace(/^•\s*/, "").trim())
      .filter(Boolean)
      .slice(0, 12);
  }

  function selectApkAsset(assets, preferredFileName) {
    if (!Array.isArray(assets)) return null;
    const expectedName = preferredFileName || CONFIG.assetFileName || "Share-Flow.apk";
    const exact = assets.find(
      (a) => a && a.name === expectedName && isSafeDirectApkUrl(a.browser_download_url)
    );
    if (exact) return exact;
    return (
      assets.find(
        (a) =>
          a &&
          typeof a.name === "string" &&
          a.name.toLowerCase().endsWith(".apk") &&
          isSafeDirectApkUrl(a.browser_download_url)
      ) || null
    );
  }

  function mapGithubRelease(release, preferredFileName, canonicalLatestUrl) {
    if (!release || release.draft) return null;
    const expectedName = preferredFileName || CONFIG.assetFileName || "Share-Flow.apk";
    const apkAsset = selectApkAsset(release.assets, expectedName);
    if (!apkAsset) return null;

    const useCanonicalLatest =
      Boolean(canonicalLatestUrl) &&
      apkAsset.name === expectedName &&
      isSafeDirectApkUrl(canonicalLatestUrl);

    const buildNumber = extractBuildNumber(release.name, release.body);
    const baseLabel = release.name || release.tag_name || "Latest";
    return {
      versionLabel: baseLabel,
      tagName: release.tag_name || "",
      buildNumber,
      prerelease: Boolean(release.prerelease),
      apkUrl: useCanonicalLatest ? canonicalLatestUrl.trim() : apkAsset.browser_download_url,
      perTagApkUrl: apkAsset.browser_download_url,
      fileSizeBytes: Number(apkAsset.size) || 0,
      publishedAt: release.published_at || apkAsset.updated_at || "",
      sha256: extractShaFromNotes(release.body),
      releaseNotes: formatReleaseNotes(release.body)
    };
  }

  function resolveReleasesList(releases, preferredFileName) {
    if (!Array.isArray(releases) || releases.length === 0) {
      return { status: "unavailable", data: null, history: [] };
    }

    const mapped = releases
      .map((r) => mapGithubRelease(r, preferredFileName, ""))
      .filter(Boolean);

    if (mapped.length === 0) {
      return { status: "unavailable", data: null, history: [] };
    }

    const stableIndex = mapped.findIndex((r) => !r.prerelease);
    const primaryIndex = stableIndex >= 0 ? stableIndex : 0;
    const primary = mapped[primaryIndex];
    const history = mapped.filter((_, idx) => idx !== primaryIndex);

    return {
      status: "ready",
      data: primary,
      history
    };
  }

  function resolveLatestAndHistory(latestRelease, allReleases, preferredFileName, directLatestApkUrl) {
    const primaryFromLatest = mapGithubRelease(
      latestRelease,
      preferredFileName,
      directLatestApkUrl || ""
    );

    const mappedList = Array.isArray(allReleases)
      ? allReleases.map((r) => mapGithubRelease(r, preferredFileName, "")).filter(Boolean)
      : [];

    if (primaryFromLatest) {
      const seenTags = new Set([primaryFromLatest.tagName]);
      const history = mappedList.filter((item) => {
        if (!item.tagName) return item.apkUrl !== primaryFromLatest.perTagApkUrl;
        if (seenTags.has(item.tagName)) return false;
        seenTags.add(item.tagName);
        return true;
      });
      return {
        status: "ready",
        data: primaryFromLatest,
        history
      };
    }

    return resolveReleasesList(allReleases, preferredFileName);
  }

  function normalizeCustomManifest(data) {
    if (!data || typeof data !== "object") {
      return { status: "unavailable", data: null, history: [] };
    }
    const candidateUrl =
      typeof data.latestApkDownloadUrl === "string" && isSafeDirectApkUrl(data.latestApkDownloadUrl)
        ? data.latestApkDownloadUrl
        : typeof data.apkDownloadUrl === "string" && isSafeDirectApkUrl(data.apkDownloadUrl)
          ? data.apkDownloadUrl
          : data.apkUrl;
    if (!isSafeDirectApkUrl(candidateUrl)) {
      return { status: "unavailable", data: null, history: [] };
    }
    const versionName =
      typeof data.versionName === "string" && data.versionName.trim()
        ? data.versionName.trim()
        : "latest";
    const versionCode = Number(data.versionCode) > 0 ? Number(data.versionCode) : null;
    const label = versionCode ? `v${versionName} (Build ${versionCode})` : `v${versionName}`;
    const notesAr = typeof data.releaseNotesAr === "string" ? data.releaseNotesAr.trim() : "";
    const notesEn = typeof data.releaseNotesEn === "string" ? data.releaseNotesEn.trim() : "";
    const genericNotes = Array.isArray(data.releaseNotes)
      ? formatReleaseNotes(data.releaseNotes)
      : typeof data.releaseNotes === "string"
        ? data.releaseNotes.trim()
        : "";
    return {
      status: "ready",
      data: {
        versionLabel: label,
        tagName: typeof data.releaseTag === "string" ? data.releaseTag : "",
        buildNumber: versionCode,
        prerelease: false,
        apkUrl: candidateUrl.trim(),
        fileSizeBytes: Number(data.fileSizeBytes) || 0,
        publishedAt: typeof data.publishedAt === "string" ? data.publishedAt : "",
        sha256:
          typeof data.sha256 === "string" && /^[0-9a-fA-F]{64}$/.test(data.sha256.trim())
            ? data.sha256.trim().toLowerCase()
            : "",
        releaseNotes: formatReleaseNotes(genericNotes || notesAr || notesEn),
        releaseNotesAr: formatReleaseNotes(notesAr || genericNotes),
        releaseNotesEn: formatReleaseNotes(notesEn || genericNotes)
      },
      history: []
    };
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function applyStaticStrings() {
    const t = I18N[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = t.dir;

    setText("lang-toggle", t.langBtn);
    setText("brand-subtitle", t.brandSub);
    setText("nav-features", t.navFeatures);
    setText("nav-gallery", t.navGallery);
    setText("nav-releases", t.navReleases);
    setText("nav-faq", t.navFaq);
    setText("hero-eyebrow", t.heroEyebrow);
    setText("official-badge", t.officialBadge);
    setText("hero-title", t.heroTitle);
    setText("hero-desc", t.heroDesc);
    setText("discover-features-btn", t.discoverBtn);
    setText("spotlight-tagline", t.spotlightTagline);
    setText("chip-adfree", t.chipAdfree);
    setText("chip-offline", t.chipOffline);
    setText("chip-encrypted", t.chipEncrypted);
    setText("chip-android", t.chipAndroid);
    setText("auto-update-note", t.autoUpdateNote);
    setText("retry-btn", t.retryBtn);
    setText("copy-sha-btn", t.copyShaBtn);
    setText("meta-version-label", t.metaVersion);
    setText("meta-size-label", t.metaSize);
    setText("meta-updated-label", t.metaUpdated);
    setText("meta-package-label", t.metaPackage);
    setText("meta-package-value", t.apkFormatValue);
    setText("meta-sha-label", t.metaSha);
    setText("release-notes-label", t.releaseNotesLabel);

    setText("features-kicker", t.featuresKicker);
    setText("features-heading", t.featuresHeading);
    setText("features-lead", t.featuresLead);
    setText("feat-title-1", t.f1Title);
    setText("feat-desc-1", t.f1Desc);
    setText("feat-title-2", t.f2Title);
    setText("feat-desc-2", t.f2Desc);
    setText("feat-title-3", t.f3Title);
    setText("feat-desc-3", t.f3Desc);
    setText("feat-title-4", t.f4Title);
    setText("feat-desc-4", t.f4Desc);
    setText("feat-title-5", t.f5Title);
    setText("feat-desc-5", t.f5Desc);
    setText("feat-title-6", t.f6Title);
    setText("feat-desc-6", t.f6Desc);

    setText("gallery-kicker", t.galleryKicker);
    setText("gallery-heading", t.galleryHeading);
    setText("gallery-lead", t.galleryLead);
    setText("mod-1-title", t.mod1Title);
    setText("mod-1-desc", t.mod1Desc);
    setText("mod-2-title", t.mod2Title);
    setText("mod-2-desc", t.mod2Desc);
    setText("mod-3-title", t.mod3Title);
    setText("mod-3-desc", t.mod3Desc);
    setText("mod-4-title", t.mod4Title);
    setText("mod-4-desc", t.mod4Desc);

    setText("install-title", t.installTitle);
    setText("inst-1", t.i1);
    setText("inst-2", t.i2);
    setText("inst-3", t.i3);
    setText("inst-4", t.i4);
    setText("history-title", t.historyTitle);
    setText("history-subtitle", t.historySubtitle);

    setText("faq-kicker", t.faqKicker);
    setText("faq-heading", t.faqHeading);
    setText("faq-q1", t.faqQ1);
    setText("faq-a1", t.faqA1);
    setText("faq-q2", t.faqQ2);
    setText("faq-a2", t.faqA2);
    setText("faq-q3", t.faqQ3);
    setText("faq-a3", t.faqA3);
    setText("faq-q4", t.faqQ4);
    setText("faq-a4", t.faqA4);
    setText("faq-q5", t.faqQ5);
    setText("faq-a5", t.faqA5);
    setText("faq-q6", t.faqQ6);
    setText("faq-a6", t.faqA6);
    setText("faq-q7", t.faqQ7);
    setText("faq-a7", t.faqA7);

    setText("footer-text", t.footer);
    setText("footer-meta", t.footerMeta);

    renderGallery();
  }

  function renderGallery() {
    const t = I18N[currentLang];
    const grid = document.getElementById("gallery-grid");
    if (!grid) return;
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }

    const items = Array.isArray(CONFIG.galleryItems) ? CONFIG.galleryItems : [];
    items.forEach((item, index) => {
      if (!item || typeof item.src !== "string" || !item.src.trim()) return;

      const card = document.createElement("button");
      card.type = "button";
      card.className = "glass-card gallery-card";
      card.addEventListener("click", () => openLightbox(index));

      const wrap = document.createElement("div");
      wrap.className = "gallery-thumb-wrap";

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = currentLang === "ar" ? item.altAr || "" : item.altEn || "";
      img.loading = "lazy";
      img.className = item.src.includes("icon") ? "gallery-thumb contain-media" : "gallery-thumb";

      const zoomTag = document.createElement("span");
      zoomTag.className = "gallery-zoom-tag";
      zoomTag.textContent = t.zoomLabel;

      wrap.appendChild(img);
      wrap.appendChild(zoomTag);

      const meta = document.createElement("div");
      meta.className = "gallery-meta";

      const title = document.createElement("h3");
      title.textContent = currentLang === "ar" ? item.titleAr || "" : item.titleEn || "";

      const desc = document.createElement("p");
      desc.textContent = currentLang === "ar" ? item.captionAr || "" : item.captionEn || "";

      meta.appendChild(title);
      meta.appendChild(desc);

      card.appendChild(wrap);
      card.appendChild(meta);
      grid.appendChild(card);
    });
  }

  function openLightbox(index) {
    const items = Array.isArray(CONFIG.galleryItems) ? CONFIG.galleryItems : [];
    if (!items.length || index < 0 || index >= items.length) return;
    activeLightboxIndex = index;
    const item = items[index];
    const modal = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    if (!modal || !img) return;

    img.src = item.src;
    img.alt = currentLang === "ar" ? item.altAr || "" : item.altEn || "";
    setText("lightbox-title", currentLang === "ar" ? item.titleAr || "" : item.titleEn || "");
    setText("lightbox-desc", currentLang === "ar" ? item.captionAr || "" : item.captionEn || "");
    modal.classList.remove("hidden");
  }

  function closeLightbox() {
    const modal = document.getElementById("lightbox");
    if (modal) modal.classList.add("hidden");
    activeLightboxIndex = -1;
  }

  function stepLightbox(delta) {
    const items = Array.isArray(CONFIG.galleryItems) ? CONFIG.galleryItems : [];
    if (!items.length || activeLightboxIndex < 0) return;
    const nextIdx = (activeLightboxIndex + delta + items.length) % items.length;
    openLightbox(nextIdx);
  }

  function renderReleaseState() {
    const t = I18N[currentLang];
    const banner = document.getElementById("status-banner");
    const spinner = document.getElementById("status-spinner");
    const statusText = document.getElementById("status-text");
    const downloadBtn = document.getElementById("download-apk-btn");
    const retryBtn = document.getElementById("retry-btn");
    const shaCard = document.getElementById("meta-sha-card");
    const notesCard = document.getElementById("release-notes-card");
    const notesList = document.getElementById("release-notes-list");
    const copyShaBtn = document.getElementById("copy-sha-btn");
    const privateNote = document.getElementById("private-hint");

    banner.className = "status-banner";
    privateNote.classList.add("hidden");

    if (latestReleaseState.status === "loading") {
      banner.classList.add("status-loading");
      spinner.classList.remove("hidden");
      statusText.textContent = t.loadingStatus;
      downloadBtn.textContent = t.downloadWaiting;
      downloadBtn.removeAttribute("href");
      downloadBtn.setAttribute("aria-disabled", "true");
      retryBtn.classList.add("hidden");
      shaCard.classList.add("hidden");
      if (notesCard) notesCard.classList.add("hidden");
      copyShaBtn.classList.add("hidden");
      setText("meta-version-value", "…");
      setText("meta-size-value", "…");
      setText("meta-updated-value", "…");
    } else if (latestReleaseState.status === "ready" && latestReleaseState.data) {
      const rel = latestReleaseState.data;
      banner.classList.add("status-ready");
      spinner.classList.add("hidden");
      statusText.textContent = t.readyStatus;
      downloadBtn.textContent = `${t.downloadDirect} (${rel.versionLabel})`;
      downloadBtn.setAttribute("href", rel.apkUrl);
      downloadBtn.setAttribute("download", CONFIG.assetFileName || "Share-Flow.apk");
      downloadBtn.removeAttribute("aria-disabled");
      retryBtn.classList.add("hidden");

      setText("meta-version-value", rel.versionLabel);
      setText("meta-size-value", formatBytes(rel.fileSizeBytes, currentLang));
      setText("meta-updated-value", formatDate(rel.publishedAt, currentLang));

      if (rel.sha256) {
        shaCard.classList.remove("hidden");
        copyShaBtn.classList.remove("hidden");
        setText("meta-sha-value", rel.sha256);
      } else {
        shaCard.classList.add("hidden");
        copyShaBtn.classList.add("hidden");
      }

      const localizedNotes =
        currentLang === "ar"
          ? rel.releaseNotesAr || rel.releaseNotes || ""
          : rel.releaseNotesEn || rel.releaseNotes || "";
      const noteLines = toChangelogLines(localizedNotes);
      if (notesCard && notesList && noteLines.length > 0) {
        while (notesList.firstChild) notesList.removeChild(notesList.firstChild);
        noteLines.forEach((line) => {
          const li = document.createElement("li");
          li.textContent = line;
          notesList.appendChild(li);
        });
        notesCard.classList.remove("hidden");
      } else if (notesCard) {
        notesCard.classList.add("hidden");
      }
    } else if (latestReleaseState.status === "unavailable") {
      banner.classList.add("status-unavailable");
      spinner.classList.add("hidden");
      statusText.textContent = t.unavailableStatus;
      privateNote.textContent = t.privateHint;
      privateNote.classList.remove("hidden");
      downloadBtn.textContent = t.downloadUnavailable;
      downloadBtn.removeAttribute("href");
      downloadBtn.setAttribute("aria-disabled", "true");
      retryBtn.classList.remove("hidden");
      shaCard.classList.add("hidden");
      if (notesCard) notesCard.classList.add("hidden");
      copyShaBtn.classList.add("hidden");
      setText("meta-version-value", "—");
      setText("meta-size-value", "—");
      setText("meta-updated-value", "—");
    } else {
      banner.classList.add("status-error");
      spinner.classList.add("hidden");
      statusText.textContent =
        latestReleaseState.status === "rate_limited" ? t.rateLimitStatus : t.errorStatus;
      downloadBtn.textContent = t.downloadUnavailable;
      downloadBtn.removeAttribute("href");
      downloadBtn.setAttribute("aria-disabled", "true");
      retryBtn.classList.remove("hidden");
      shaCard.classList.add("hidden");
      if (notesCard) notesCard.classList.add("hidden");
      copyShaBtn.classList.add("hidden");
      setText("meta-version-value", "—");
      setText("meta-size-value", "—");
      setText("meta-updated-value", "—");
    }

    renderHistory();
  }

  function renderHistory() {
    const t = I18N[currentLang];
    const container = document.getElementById("history-list");
    if (!container) return;
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const items = latestReleaseState.history || [];
    if (items.length === 0) {
      const empty = document.createElement("p");
      empty.className = "section-subcopy";
      empty.textContent = t.historyEmpty;
      container.appendChild(empty);
      return;
    }

    items.forEach((rel) => {
      if (!isSafeDirectApkUrl(rel.apkUrl)) return;
      const row = document.createElement("div");
      row.className = "history-row";

      const info = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = rel.versionLabel;
      const meta = document.createElement("div");
      meta.className = "status-subhint";
      meta.textContent = `${formatBytes(rel.fileSizeBytes, currentLang)} • ${formatDate(rel.publishedAt, currentLang)}`;
      info.appendChild(title);
      info.appendChild(meta);

      const link = document.createElement("a");
      link.className = "history-link";
      link.setAttribute("href", rel.apkUrl);
      link.setAttribute("download", CONFIG.assetFileName || "Share-Flow.apk");
      link.setAttribute("rel", "noopener noreferrer");
      link.textContent = t.historyDownload;

      row.appendChild(info);
      row.appendChild(link);
      container.appendChild(row);
    });
  }

  async function fetchJsonWithTimeout(url, headers, timeoutMs) {
    const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;
    try {
      const res = await fetch(url, {
        headers,
        cache: "no-store",
        signal: controller ? controller.signal : undefined
      });
      return res;
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  async function fetchFromCustomManifest(manifestUrl) {
    const res = await fetchJsonWithTimeout(
      manifestUrl,
      { Accept: "application/json" },
      12000
    );
    if (!res.ok) throw new Error(`HTTP_${res.status}`);
    const data = await res.json();
    return normalizeCustomManifest(data);
  }

  async function trySameOriginVersionManifest() {
    const candidates = ["./version.json", "./latest-release.json"];
    for (const path of candidates) {
      try {
        const res = await fetchJsonWithTimeout(path, { Accept: "application/json" }, 5000);
        if (!res.ok) continue;
        const data = await res.json();
        const normalized = normalizeCustomManifest(data);
        if (normalized.status === "ready") return normalized;
      } catch {
        // Try next same-origin manifest candidate
      }
    }
    return null;
  }

  async function fetchLatestRelease() {
    latestReleaseState = { status: "loading", data: null, history: [] };
    renderReleaseState();

    try {
      if (CONFIG.customManifestUrl && isSafeHttpsEndpoint(CONFIG.customManifestUrl)) {
        latestReleaseState = await fetchFromCustomManifest(CONFIG.customManifestUrl);
        renderReleaseState();
        return;
      }

      const repo = CONFIG.releasesRepo || "ow7ab/Share-Flow-Releases";
      const latestUrl = `https://api.github.com/repos/${repo}/releases/latest`;
      const listUrl = `https://api.github.com/repos/${repo}/releases?per_page=10`;
      const headers = { Accept: "application/vnd.github+json" };

      const [sameOriginManifest, latestRes, listRes] = await Promise.all([
        trySameOriginVersionManifest(),
        fetchJsonWithTimeout(latestUrl, headers, 12000).catch(() => null),
        fetchJsonWithTimeout(listUrl, headers, 12000).catch(() => null)
      ]);

      if (latestRes && latestRes.ok) {
        const latestRelease = await latestRes.json();
        const allReleases = listRes && listRes.ok ? await listRes.json() : [];
        const resolved = resolveLatestAndHistory(
          latestRelease,
          allReleases,
          CONFIG.assetFileName,
          CONFIG.directLatestApkUrl
        );
        if (resolved.status === "ready") {
          // Enrich with localized notes / sha256 from unified version.json when tags match
          if (
            sameOriginManifest &&
            sameOriginManifest.data &&
            (!sameOriginManifest.data.tagName || sameOriginManifest.data.tagName === resolved.data.tagName)
          ) {
            resolved.data.sha256 = resolved.data.sha256 || sameOriginManifest.data.sha256;
            resolved.data.releaseNotesAr = sameOriginManifest.data.releaseNotesAr || resolved.data.releaseNotes;
            resolved.data.releaseNotesEn = sameOriginManifest.data.releaseNotesEn || resolved.data.releaseNotes;
          }
          latestReleaseState = resolved;
          renderReleaseState();
          return;
        }
      }

      if (sameOriginManifest) {
        const allReleases = listRes && listRes.ok ? await listRes.json().catch(() => []) : [];
        const fromList = resolveReleasesList(allReleases, CONFIG.assetFileName);
        if (fromList.status === "ready" && fromList.history.length > 0) {
          sameOriginManifest.history = fromList.history;
        }
        latestReleaseState = sameOriginManifest;
        renderReleaseState();
        return;
      }

      if (latestRes && (latestRes.status === 403 || latestRes.status === 429)) {
        latestReleaseState = { status: "rate_limited", data: null, history: [] };
        renderReleaseState();
        return;
      }

      if (latestRes && latestRes.status === 404) {
        if (listRes && listRes.ok) {
          const allReleases = await listRes.json();
          const resolvedFromList = resolveReleasesList(allReleases, CONFIG.assetFileName);
          if (resolvedFromList.status === "ready") {
            latestReleaseState = resolvedFromList;
            renderReleaseState();
            return;
          }
        }
        latestReleaseState = { status: "unavailable", data: null, history: [] };
        renderReleaseState();
        return;
      }

      latestReleaseState = { status: "error", data: null, history: [] };
      renderReleaseState();
    } catch {
      const fallback = await trySameOriginVersionManifest();
      latestReleaseState = fallback || { status: "error", data: null, history: [] };
      renderReleaseState();
    }
  }

  function init() {
    applyStaticStrings();

    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        currentLang = currentLang === "ar" ? "en" : "ar";
        applyStaticStrings();
        renderReleaseState();
        if (activeLightboxIndex >= 0) openLightbox(activeLightboxIndex);
      });
    }

    const retryBtn = document.getElementById("retry-btn");
    if (retryBtn) {
      retryBtn.addEventListener("click", fetchLatestRelease);
    }

    const downloadBtn = document.getElementById("download-apk-btn");
    const feedback = document.getElementById("download-feedback");
    if (downloadBtn && feedback) {
      downloadBtn.addEventListener("click", () => {
        if (downloadBtn.getAttribute("aria-disabled") === "true") return;
        feedback.textContent = I18N[currentLang].downloadStarted;
        feedback.classList.remove("hidden");
      });
    }

    const copyShaBtn = document.getElementById("copy-sha-btn");
    if (copyShaBtn) {
      copyShaBtn.addEventListener("click", async () => {
        const sha = latestReleaseState.data && latestReleaseState.data.sha256;
        if (!sha || !navigator.clipboard) return;
        try {
          await navigator.clipboard.writeText(sha);
          copyShaBtn.textContent = I18N[currentLang].copiedShaBtn;
          setTimeout(() => {
            copyShaBtn.textContent = I18N[currentLang].copyShaBtn;
          }, 2000);
        } catch {
          // Clipboard permission unavailable
        }
      });
    }

    const closeBtn = document.getElementById("lightbox-close");
    const backdrop = document.getElementById("lightbox-backdrop");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (backdrop) backdrop.addEventListener("click", closeLightbox);
    if (prevBtn) prevBtn.addEventListener("click", () => stepLightbox(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => stepLightbox(1));

    document.addEventListener("keydown", (event) => {
      if (activeLightboxIndex < 0) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") stepLightbox(currentLang === "ar" ? 1 : -1);
      if (event.key === "ArrowRight") stepLightbox(currentLang === "ar" ? -1 : 1);
    });

    fetchLatestRelease();
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      isSafeDirectApkUrl,
      isSafeHttpsEndpoint,
      selectApkAsset,
      formatBytes,
      formatReleaseNotes,
      toChangelogLines,
      extractShaFromNotes,
      extractBuildNumber,
      resolveReleasesList,
      resolveLatestAndHistory,
      normalizeCustomManifest
    };
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
