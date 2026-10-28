---
sidebar_position: 5
title: The preoperative and postoperative forms
---

# The preoperative and postoperative forms

In **Clinical setup → Preoperative form** and **Postoperative form**, a
Hospital administrator decides what the forms ask. The public demo has no
Status for this setting and uses the platform form. Adults and children each have their own
settings: a question can be required for children and optional for adults.

A change applies to every open case the next time it is loaded. Answers a
case already holds are kept, and finished cases are never changed.

Every save asks for a **reason** and your **administrator password**.

## The preoperative form

The page has four tabs: **Questions**, **Sections**, **Orders and
instructions**, **Summary and consent**.

### Questions

![The questions](/img/screens/en/status-control_preop.png)

LOSPOR comes with a catalogue of questions (the labels, answers and rules
cannot be edited). For adults and for children, separately:

- **Enabled** — the question is asked.
- **Required** — it must be answered before the case continues to intraop.
- **Order** — drag a question by its handle, or use ↑ and ↓. The order
  applies within each section of the form.
- A follow-up question ("shown when … is yes") is asked only after that
  answer.

Some scores need a set of questions. **Gupta cardiac risk**, for example, is
worked out only when all of its questions are on: turning it on turns them on
together, and the page warns when only some are.

### Sections

![The sections](/img/screens/en/status-control_preop_sections.png)

Demographics, case details, anamnesis, vital signs, airway and the risk
scores are **always on**: a case needs them to continue. For adults and for
children, switch on or off: medical history, current medications, laboratory,
planned anaesthesia, nil by mouth (children), preoperative ward orders,
medication instructions (needs current medications), premedication.

A section switched off is not shown, and its questions are not asked.

### Orders and instructions

The choices offered under **Preoperative ward orders** and **Medication
instructions**, in order. The rows that come with LOSPOR can be switched off
but not renamed. **Add a row of your own** with its text in English and in
Bulgarian; for a medication row, say whether it asks for hours before
surgery.

### Summary and consent

![Summary and consent](/img/screens/en/status-control_preop_documents.png)

- **Preop summary page between preop and intraop** — turns on the
  [preop summary](../clinician/preop-summary.md).
- **Print the written consent with the summary** — needs the summary.
- **Print layout** — A to E, each described on the page.

**Consent texts:** one for adults and patients of 14 to 18, one for children
under 14. Each save is a new version; earlier versions are kept, because each
printed sheet records which version it carried.

- `{{hospital}}`, `{{diagnosis}}`, `{{procedure}}`, `{{date}}` and
  `{{anaesthetist}}` are filled in from the case when the sheet prints.
- For layouts C and D, end the heading of each technique with its tag, for
  example `## Обща анестезия [general]`. The tag never prints.
- Under the heading `## Гладуване`, the child's nil-by-mouth hours are printed
  when they were set at the preop visit.
- The patient's name, ID and signature lines are fixed parts of the sheet.
  Who signs follows the age.

**The bundled text, to start again from** shows the text LOSPOR came with.
Check it against your hospital's own form before use.

## The postoperative form

![The postoperative form](/img/screens/en/status-control_postop.png)

The **recovery score** (Aldrete or Steward) and the **disposition** are always
on: a case cannot be finished without them. For adults and for children,
switch on or off: recovery vital signs, pain, emergence delirium (PAED,
children), postoperative nausea and vomiting, handover instructions.

The page also lists the pain scales offered by age, and **what a case needs
before it can be finalised**. That list is fixed by the release, not by
Status.
