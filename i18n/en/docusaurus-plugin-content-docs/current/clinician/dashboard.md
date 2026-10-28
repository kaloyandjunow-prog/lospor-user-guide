---
sidebar_position: 2
title: The dashboard
---

# The dashboard

The dashboard is the first screen after signing in: every case you may see,
newest and most urgent first.

![The dashboard](/img/screens/en/web-dashboard.png)

## At the top

- **Total cases**, **This month**, **ICU admissions** — click one to show only
  those cases.
- The **scopes** below narrow the list: **All**, **Today**, **Month**,
  **Active** (not finished), **Drafts**, **Awaiting postop**, **Complete**,
  **Handovers** (waiting for a colleague to accept).
- The **filters**: by **operating theatre** (when the hospital uses them) and
  by **anaesthesiologist**. **Clear filters** removes both.
- **Search** finds a case by procedure, diagnosis or case code.

The top bar has **Ongoing cases** (a count, and a quick list of your open
cases), **Unit indicators** (the department's figures, see
[Unit indicators](../head-of-department/unit-indicators.md)) and **New case**.

## A case row

Each row shows the procedure, its status, the diagnosis, age and sex, the ASA
class, where the patient went after recovery, and the **case code** (for
example `2026-0438`) — the number that ties the printed record to LOSPOR.
Click a row to open the case: an open case continues where it is, a finished
or cancelled one opens its read-only summary.

On the right, what you can do with the case:

| Button | Does |
|---|---|
| **Delete** | Removes a case that is not finished. Use it for a case created by mistake; a cancelled operation is recorded with **Procedure cancelled** instead |
| **Procedure cancelled** | The operation will not happen. Records why, keeps everything entered, and closes the case. Possible until anaesthesia starts; after that the button stays, greyed out. See [Cancelled procedures](./cancelled-procedures.md) |
| **Undo cancellation** | Reopens a cancelled case |
| **Theatre** | Assigns or changes the operating theatre, until anaesthesia starts (hospital installations that use theatres) |
| **Hand over** / **Assign to** | Passes the case to a colleague. See [Handing a case over](./handover.md) |
| **Print case** | On a finished case: the two-page record. See [Printing](./printing.md) |

![Choosing an operating theatre](/img/screens/en/web-dashboard-theatre-menu.png)

### When two people change the theatre at once

If a colleague changed the case's theatre while your menu was open, LOSPOR does
not overwrite their choice. It shows what the case has now and who set it
("Changed meanwhile to Operating theatre 2 by Dr Ivanov. Choose again."), and
you choose again.

:::info Hospital installation only: LOSPOR Central
When the hospital has enabled Central, the case page has an **LOSPOR Central**
panel. Eligible finalized cases are delivered automatically; there is no
per-case approval button. After Central accepts a case, someone with the right
authority can choose **Request withdrawal**, and a withdrawn case can be sent
again with **Send again**. The hospital number, clinical content and internal
identifiers are not shown in this panel.

**Central delivery** appears in the top navigation. It shows only bounded
delivery state and finalization time for cases whose delivery you are allowed
to manage. The public demo has neither Central screen.
:::

## On the phone

![The dashboard on the phone](/img/screens/en/phone-dashboard.png)

The same scopes and filters, as a scrolling row. **Unit indicators** is a
button under the counts.

**Hold a case** to open its menu: cancel the procedure, delete it, assign the
theatre, hand it over or, on a finished case, print it.

![The menu of a held case](/img/screens/en/phone-menu.png)

## Handovers waiting for you

When a colleague sends you a case, a yellow **Pending case handovers** banner
appears at the top, with **Accept** and **Decline**. See
[Handing a case over](./handover.md).
