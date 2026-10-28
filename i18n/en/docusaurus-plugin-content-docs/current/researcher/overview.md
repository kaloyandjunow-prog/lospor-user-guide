---
sidebar_position: 1
title: Research with LOSPOR
---

# Research with LOSPOR

LOSPOR records every anaesthetic in a structured, coded form, so the
finished cases can answer research and quality questions. Researchers work in
the **research browser**, a separate website, never in the clinical records.

## What a researcher sees

- **Finished cases, mainly.** The overview counts finished cases. A cohort
  can include other statuses with its **Case statuses** filter; a cancelled
  procedure always carries its cancellation.
- **De-identified.** Each case carries a research pseudonym. The browser
  returns no names, ID numbers, free-text notes or exact calendar dates.
  Export files keep exact event times; see [Exports](./exports.md#what-an-export-holds).
- **Small groups hidden.** A figure from fewer than five cases is withheld
  ("<5"), so that no patient can be picked out.
- **Within the grant.** Only the institutions, and only the actions, the grant
  allows.

## Getting access

Every account needs an explicit **research grant** — clinicians and heads of
department too. A grant names the purpose, the institutions, the period
(90 days by default, up to a year) and the permissions:

| Permission | Allows |
|---|---|
| **Aggregate queries** | Counts, means and distributions over cohorts |
| **Inspect pseudonymous cases** | Opening single de-identified cases |
| **CSV**, **JSON** | Exporting cohorts as files |
| **OMOP** | Exporting in OMOP CDM 5.4 — needs CSV or JSON too, and approval of each exact dataset |
| **Share institution cohorts** | Making saved cohorts visible to others in the institution |

- **In a hospital installation**, the administrator issues grants in Status
  (see [People and research access](../administrator/people-and-research.md)).
  A research-only account cannot open the clinical app at all.
- A clinical account without a grant may switch on **Temporary aggregate
  access** for eight hours, at most once a day: aggregate queries only.

## Where to go next

- [The research browser](./browser.md) — overview, cohorts, cases, data
  quality, benchmarks.
- [Exports](./exports.md) — complete research files and OMOP.
