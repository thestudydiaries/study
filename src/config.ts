import type { Site, RuntimeConfig, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://studydiaries.netlify.app/",
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
  showBackButton: true,
  editPost: {
    enabled: false, // Turned this off so your site looks cleaner
    url: "https://github.com/your-username/your-repo-name/edit/main/src/content/blog/",
    text: "Edit Post",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Bangkok",
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false, // Keeps the minimalist text logo
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Follow on Github`,
    active: false,
  },
];
