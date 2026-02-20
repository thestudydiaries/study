export const SITE = {
  website: "https://studydiaries.netlify.app/", // replace this with your deployed domain
  author: "StudyDiaries",
  profile: "https://studydiaries.netlify.app/",
  desc: "A study journal on thoughts and reflections.",
  title: "The Study Diaries",
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
    url: "https://studydiaries.netlify.app/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok",
} as const;
