import type { SidebarsConfig } from "@docusaurus/plugin-content-docs"

/**
 * One sidebar, by who is reading: everyone starts at "Getting started", then
 * the section for their role. Labels are Bulgarian (the default language);
 * English ones are in i18n/en/docusaurus-plugin-content-docs/current.json.
 */
const sidebars: SidebarsConfig = {
  guide: [
    "intro",
    {
      type: "category",
      label: "Първи стъпки",
      key: "getting-started",
      collapsed: false,
      items: [
        "getting-started/demo-or-hospital",
        "getting-started/accounts",
        "getting-started/web-and-phone",
        "getting-started/settings",
      ],
    },
    {
      type: "category",
      label: "Анестезиолози",
      key: "clinician",
      collapsed: false,
      items: [
        "clinician/workflow",
        "clinician/dashboard",
        "clinician/preop",
        "clinician/preop-summary",
        "clinician/intraop",
        "clinician/postop",
        "clinician/finalising",
        "clinician/printing",
        "clinician/handover",
        "clinician/cancelled-procedures",
        "clinician/children",
        "clinician/phone",
      ],
    },
    {
      type: "category",
      label: "Началници на отделения",
      key: "head-of-department",
      items: [
        "head-of-department/role",
        "head-of-department/assigning",
        "head-of-department/unit-indicators",
      ],
    },
    {
      type: "category",
      label: "Администратори и системни администратори",
      key: "administrator",
      items: [
        "administrator/overview",
        "administrator/cloud-admin",
        "administrator/installing",
        "administrator/status",
        "administrator/forms",
        "administrator/theatres",
        "administrator/indicators",
        "administrator/drug-colours",
        "administrator/guidance-and-identity",
        "administrator/connections",
        "administrator/people-and-research",
        "administrator/care",
      ],
    },
    {
      type: "category",
      label: "Изследователи",
      key: "researcher",
      items: [
        "researcher/overview",
        "researcher/browser",
        "researcher/exports",
      ],
    },
    {
      type: "category",
      label: "Справочник",
      key: "reference",
      items: [
        "reference/scores",
        "reference/glossary",
        "reference/faq",
      ],
    },
  ],
}

export default sidebars
