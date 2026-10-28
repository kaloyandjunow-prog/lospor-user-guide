import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

/**
 * The LOSPOR User Guide: how to use LOSPOR, by role (clinicians, heads of
 * department, hospital administrators, researchers). Bulgarian first, English
 * in full. The technical documentation (architecture, API, self-hosting) stays
 * on docs.lospor.org; this guide links to it rather than repeating it.
 */
const english = process.env.DOCUSAURUS_CURRENT_LOCALE === "en"

const config: Config = {
  title: english ? "LOSPOR User Guide" : "Ръководство за LOSPOR",
  tagline: english ? "How to use LOSPOR" : "Как се работи с LOSPOR",
  favicon: "img/logo.png",
  url: "https://guide.lospor.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  markdown: {
    // .md is CommonMark: the guide quotes on-screen text with angle brackets
    // ("<5") that MDX would try to read as tags.
    format: "detect",
    hooks: { onBrokenMarkdownLinks: "throw" },
  },

  i18n: {
    defaultLocale: "bg",
    locales: ["bg", "en"],
    localeConfigs: {
      bg: { label: "Български", htmlLang: "bg" },
      en: { label: "English", htmlLang: "en" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl: "https://github.com/kaloyandjunow-prog/lospor-user-guide/tree/main/",
        },
        blog: false,
        theme: { customCss: "./src/css/custom.css" },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/logo.png",
    colorMode: { defaultMode: "light", disableSwitch: false, respectPrefersColorScheme: true },
    docs: { sidebar: { hideable: true } },
    navbar: {
      title: "LOSPOR",
      logo: { alt: "LOSPOR", src: "img/logo.png", style: { height: "36px", width: "auto" } },
      items: [
        { type: "docSidebar", sidebarId: "guide", position: "left", label: "Ръководство" },
        { type: "localeDropdown", position: "right" },
        { href: "https://app.lospor.org", label: "Към LOSPOR", position: "right" },
        { href: "https://docs.lospor.org", label: "Техническа документация", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "LOSPOR",
          items: [
            { label: "lospor.org", href: "https://lospor.org" },
            { label: "LOSPOR", href: "https://app.lospor.org" },
            { label: "Техническа документация", href: "https://docs.lospor.org" },
          ],
        },
        {
          title: "Отворен код",
          items: [
            { label: "GitHub", href: "https://github.com/kaloyandjunow-prog/lospor-user-guide" },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} LOSPOR · PeriOp Laboratories · AGPL-3.0`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ["bash", "powershell"] },
  } satisfies Preset.ThemeConfig,
}

export default config
