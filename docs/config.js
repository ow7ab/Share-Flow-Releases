/**
 * Share Flow Official Public Website & Download Portal Configuration
 *
 * Source repository (PRIVATE): ow7ab/Share-Flow
 * Public distribution & GitHub Pages repository (PUBLIC): ow7ab/Share-Flow-Releases
 *
 * Security guarantee:
 * - Browser-side JavaScript NEVER contains tokens, API keys, or keystore secrets.
 * - All APK downloads and version.json manifests are served publicly over HTTPS.
 */
window.SHAREFLOW_PORTAL_CONFIG = Object.freeze({
  releasesRepo: "ow7ab/Share-Flow-Releases",
  assetFileName: "Share-Flow.apk",
  manifestFileName: "version.json",
  directLatestApkUrl: "https://github.com/ow7ab/Share-Flow-Releases/releases/latest/download/Share-Flow.apk",
  officialVersionManifestUrl: "https://ow7ab.github.io/Share-Flow-Releases/version.json",
  portalUrl: "https://ow7ab.github.io/Share-Flow-Releases/",
  customManifestUrl: "",
  // Real bundled project visuals; add real phone captures under docs/screenshots/ to extend the gallery automatically.
  galleryItems: Object.freeze([
    Object.freeze({
      src: "assets/shareflow-icon.png",
      altAr: "شعار تطبيق Share Flow الرسمي لأندرويد",
      altEn: "Official Share Flow Android app icon",
      titleAr: "هوية Share Flow البصرية",
      titleEn: "Share Flow Visual Identity",
      captionAr: "الأيقونة الرسمية لتطبيق Share Flow لأندرويد — تصميم انسيابي يعكس سرعة نقل الملفات.",
      captionEn: "Official Share Flow Android launcher icon representing fast direct file flow."
    }),
    Object.freeze({
      src: "assets/shareflow-hero.jpg",
      altAr: "تصميم موجات النقل الرقمي لتطبيق Share Flow",
      altEn: "Share Flow local transfer wave artwork",
      titleAr: "موجات النقل المحلي السريع",
      titleEn: "High-Speed Local Transfer Engine",
      captionAr: "العمل الفني المدمج داخل Share Flow لتجربة نقل محلي مشفّر عبر Wi-Fi ورمز QR.",
      captionEn: "In-app visual artwork representing encrypted local Wi-Fi and QR pairing."
    })
  ])
});
