---
sidebar_position: 10
title: Cancelled procedures
---

# Cancelled procedures

When an operation will not happen after all, record it as **cancelled**
rather than deleting the case. Everything entered is kept, the reason is
recorded, and the cancellation counts in the department's figures.

| | Delete | Procedure cancelled |
|---|---|---|
| Use it for | A case created by mistake | An operation that was planned and will not take place |
| What is kept | Nothing | Everything entered, with the reason |
| Counts in Unit indicators | No | Yes, under cancellations |
| Can be undone | No | Yes |

## Cancelling

Press **Procedure cancelled** in the case's row on the dashboard (on the
phone: hold the case, then **Procedure cancelled**).

![Cancelling a procedure](/img/screens/en/web-cancel-dialog.png)

Choose the **Reason**:

- The patient's condition
- The patient refused or did not come
- No theatre time or staff
- Equipment or blood not available
- Surgical decision
- Other — then say what it was in the **Note**

The note is optional for the other reasons. Never put names or ID numbers in
it. **Cancel the procedure** confirms.

### Until anaesthesia starts

A procedure can be cancelled only before the anaesthesia start is set. After
that, the button stays in place but is greyed out: an anaesthetic has been
given, and the case is completed as usual — record what happened in the
intraoperative and postoperative steps.

## A cancelled case

![A cancelled case](/img/screens/en/web-case-cancelled.png)

- On the dashboard it shows the status **Procedure cancelled**.
- It opens read-only, with the reason and the time of the cancellation at the
  top.
- It cannot be edited, handed over or assigned a theatre.
- It can still be printed (**Print case**), marked as cancelled.
- Research exports carry it as a cancelled procedure, so it is never read as
  an operation that took place.

## Undoing a cancellation

If the operation goes ahead after all, press **Undo cancellation** in the
case's row, then **Confirm undo**. The case reopens where it was. Both the
cancellation and the undo are recorded in the audit log.
