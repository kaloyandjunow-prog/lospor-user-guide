---
sidebar_position: 3
title: Questions and answers
---

# Questions and answers

### Where is the Save button?

There is none. Everything saves as you enter it. See
[The case from start to finish](../clinician/workflow.md#saving).

### Why is there no field for the patient's name in the public demo?

LOSPOR does not store names or ID numbers in the cloud. They print as blank
lines; write them in by hand. Never type them into notes either.

In **LOSPOR Hospital** the rule is separate: if the hospital has permitted
identity, use **Hospital patient number**, not a name or ID in notes. If it is
wrong, use **Correct number**; enter the new number twice, confirm the reason,
and the correction is recorded in the audit log.

### How do I get data from the hospital system?

This is hospital-only. After saving the draft, choose **Fetch patient data**.
Review every suggestion under **From the hospital system**, then choose **Add
selected** or **Don't offer again**. The values are marked as reported by the
hospital system; nothing is added automatically. If the answer is delayed,
you will see **Requested from the hospital system** — choose **Look again** or
enter the values manually. An ambiguous hospital patient number returns no
data.

### What is LOSPOR Central?

In a hospital installation, eligible finished cases are sent to **LOSPOR
Central** automatically. The case panel shows limited delivery state; someone
with delivery permission can use **Request withdrawal** and **Send again**.
**Central delivery** shows deliveries without the hospital number, clinical
data, or internal identifiers.

### Why can't I see “Download PDF”?

The hospital installation has no server PDF. Choose **Print**, then choose a
printer or **Save as PDF** in the browser dialog. **Download PDF** is a public
demo feature.

### I lost the connection in theatre. Is my chart lost?

No. On the phone, keep working: entries are kept on the phone and sent when
the connection returns. On the web, a counter shows saves waiting. Do not
sign out while anything is waiting.

### The case is open on another screen and nothing saves.

Only one screen writes to a case at a time. Press **Take over editing** on the
screen you want to use.

### I entered a value and it says "refused".

The server did not accept it, and says why — for example, a stop earlier than
its start, or a vital sign in the future. Correct it. On the phone, refused
entries are kept under **Unsaved events** in the settings.

### I can't cancel the procedure: the button is grey.

Anaesthesia has started. A procedure can be cancelled only before that. Record
what happened in the intraoperative and postoperative steps instead.

### I finished a case too early.

For 30 minutes, **Unfinalize** reopens it. After that it stays final.

### I can't close the case.

Something required is missing. **Close Now** shows how many things and lists
them, each with a link to the field.

### Why did the case code change?

The case was handed to a colleague who already had a case with that code. The
old code is kept in the handover history.

### My hospital is not in the list when I register.

Choose the nearest one, then ask to join the right one from your settings.
See [Accounts and signing in](../getting-started/accounts.md).

### The lab scan does not work.

It needs **Allow AI assistance for this case** ticked, and the hospital must
allow AI. Crop the photo to the report; keep names out of it.

### I don't see the unit indicators for fewer than 5 cases.

That is on purpose: a figure from so few cases could identify a patient or a
colleague. Widen the period or the filters.

### Who can see my cases?

You, the colleagues you hand them to, your head of department, and
administrators. Researchers see only de-identified data, and only with a
grant.
