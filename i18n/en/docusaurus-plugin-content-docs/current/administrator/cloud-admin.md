---
sidebar_position: 2
title: The cloud admin panel
---

# The cloud admin panel

In the cloud (app.lospor.org), administrators work in the **Admin** panel,
in the top bar of the web app. On the phone it is **Settings → Admin
console**.

![The admin panel](/img/screens/en/web-admin.png)

## Requests waiting

Three lists at the top, each with **Approve** and **Reject**:

- **Requests to join a department** — a clinician asks to move to another
  hospital. The hospital's head of department can decide these too.
- **Pending registrations** — new accounts waiting for approval.
- **Head of Department requests** — a clinician asks for the
  head-of-department role.

## All users

Every account, with its institution, role and when it joined.

- **Role:** **Member** (sees only their own cases), **Head of Dept** (all
  cases of their hospital) or **Admin** (all cases everywhere). Changing a
  role signs the person out everywhere. Demoting a head of department leaves
  their own cases with them.
- **Suspend** stops access at once; **Reactivate** allows it again.
- **Delete** stops access and schedules the account's removal. Until the
  retention deadline, **Restore** brings it back; the person then sets a new
  password.

Actions that change someone's access ask you to type their email, give a
reason, and enter your own password.

## Audit log

**Audit log** lists who did what and when: cases created, changed or deleted,
handovers, sign-ins, role changes and more. Filter by action, then **Load**.
Patient data is never shown in it.

## Clinical rules

The **Clinical rules** page, shared with heads of department, holds the
rulesets behind the intraoperative menus. An administrator can also edit the
platform-wide ruleset. See
[The head of department](../head-of-department/role.md#clinical-rules).
