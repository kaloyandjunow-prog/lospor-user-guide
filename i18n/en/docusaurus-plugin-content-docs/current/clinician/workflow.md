---
sidebar_position: 1
title: A case from start to finish
---

# A case from start to finish

Every anaesthetic in LOSPOR is one **case**, recorded in three steps, then
closed and printed.

```
 Preoperative ──► (Preop summary) ──► Intraoperative ──► Postoperative ──► Summary ──► Finished
   the visit         if the hospital     the chart           recovery         review      printed
                     uses it
```

This is the common path. In the actual installation, the **summary**, HIS
suggestions, the hospital-number field, AI and some form sections may be off.
When a capability is off, LOSPOR skips that step; the case is not incomplete.
Read [How the installation changes the workflow](../getting-started/demo-or-hospital.md)
before comparing your screen with this guide.

| Step | Where | What you record |
|---|---|---|
| 1. [Preoperative](./preop.md) | The visit, usually the day before | The patient, diagnosis and planned procedure, history, examination, airway, labs, risk scores, the plan and the orders for the ward |
| 2. [Preop summary](./preop-summary.md) | Before theatre, when enabled in this installation | A one-page summary and the written consent, printed for signing |
| 3. [Intraoperative](./intraop.md) | In theatre | Start and end, technique and airway, the chart: vitals, drugs, infusions, gases, fluids, events |
| 4. [Postoperative](./postop.md) | Recovery | Recovery vitals, the recovery score, pain, nausea, the procedure done, where the patient goes |
| 5. [Summary and finishing](./finalising.md) | After recovery | Review the whole record, then close it. It is then permanent |
| 6. [Printing](./printing.md) | Any time after | The two-page A4 record for the patient's file |

## What a case's status means

The dashboard shows each case's status.

| Status | Means |
|---|---|
| **Draft** | Created, little entered yet |
| **In consultation** | The preoperative assessment has begun |
| **Awaiting allocation** | The preoperative assessment is complete; the case waits for theatre |
| **In theatre** | Anaesthesia has started |
| **Awaiting postop** | Anaesthesia has ended; recovery not yet recorded |
| **Awaiting review** | Recovery recorded; the 30-minute review window is running |
| **Case finished** | Closed and permanent |
| **Procedure cancelled** | The operation was cancelled before anaesthesia started. See [Cancelled procedures](./cancelled-procedures.md) |

## Saving

There is no Save button. Every change is saved as you make it: taps at once,
typing a moment after you stop. **Continue** buttons only move you to the next
step.

Required fields are marked **\***. You can leave a step with fields missing;
LOSPOR lists what is still needed before the case can be closed, each with a
link to it.

## Moving between steps

The **Preop · Intraop · Postop · Summary** bar (in the side panel, or above the
form) takes you to any step at any time, as long as the case is not finished.
