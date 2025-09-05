export const SITE = {
  website: "https://mrsibe.pages.dev/", // replace this with your deployed domain
  author: "MrSibe",
  profile: "https://mrsibe.pages.dev/",
  desc: "在这里，你可以知道关于计算机、天文的一切——西贝的博客小站",
  title: "啊啊啊啊西贝",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/MrSibe/sibe_blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
