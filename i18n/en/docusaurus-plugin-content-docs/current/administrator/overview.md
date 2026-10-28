---
sidebar_position: 1
title: The administrator's work
---

# The administrator's work

What an administrator does depends on where LOSPOR runs.

This page is for the application administrator. If you also maintain the
server, see [Installing](./installing.md) and [Updates, backups and going
live](./care.md): the system administrator operates the appliance but does not
see clinical cases. In Hospital, not every capability is on by default; an
absent screen may mean that the capability is disabled.

| | In the cloud (app.lospor.org) | In a hospital installation |
|---|---|---|
| Where | **Admin** in the top bar of the web app | **Status**, the hospital's own console, at `https://<the hospital's LOSPOR address>/status/` |
| Accounts | People register themselves; the administrator approves registrations, join requests and the head-of-department role | The administrator creates every account; nobody registers |
| Settings | Platform-wide, by the LOSPOR team | Each hospital chooses its forms, theatres, thresholds, connections |
| Updates and backups | Done by the LOSPOR team | Done from Status, by the hospital's IT |

## In the cloud

See [The cloud admin panel](./cloud-admin.md).

## In a hospital

A hospital installation (**LOSPOR Hospital**) is a server inside the hospital
that holds the hospital's records and never sends them anywhere unless the
hospital switches a connection on. Its administrators work in **Status**.

1. [Installing](./installing.md) — the server and LOSPOR on it.
2. [Status](./status.md) — signing in, finding your way, the overview.
3. Then, in any order:
   - [Forms](./forms.md) — what the preoperative and postoperative forms ask;
   - [Operating theatres](./theatres.md);
   - [Indicator thresholds](./indicators.md);
   - [Drug colours](./drug-colours.md);
   - [Guidance and patient identification](./guidance-and-identity.md);
   - [Connections](./connections.md) — the hospital system, codes, LOSPOR Central, AI;
   - [People and research access](./people-and-research.md);
   - [Updates, backups and going live](./care.md).

:::info Status grants no clinical access
A Status administrator account does not sign in to the clinical app and cannot
see a single case. Status only carries out the change shown in each form. If
you also work clinically, you have a separate clinical account.
:::

### Every change is recorded

Changes in Status that affect patients or people ask for a **reason** and your
**administrator password**. Both go into the record of who changed what and
when.
