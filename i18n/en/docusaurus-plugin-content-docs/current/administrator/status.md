---
sidebar_position: 4
title: Status, the hospital's console
---

# Status, the hospital's console

**Status** is where a hospital installation is run: is LOSPOR working, what
needs doing, and every hospital setting. It opens at
`https://<the hospital's LOSPOR address>/status/`, and only from the networks
the hospital allows (usually the IT management networks).

## Signing in

Status administrators sign in with their **email and password, and a code from
an authenticator app** (two-step sign-in). The first time, scan the QR code
Status shows with the authenticator app on your phone, or type the key by
hand.

A new Status administrator receives a one-time activation link from an
existing one (see [People and research access](./people-and-research.md)).

## The overview

![The Status overview](/img/screens/en/status-overview.png)

- At the top, one line answers **is LOSPOR safe to use today**, and when it was
  last checked.
- **The map** shows the appliance in the middle (web, phone app, API,
  database, gateway, server) and everything it connects to: phones and
  computers, the hospital system, LOSPOR Central, the AI provider, research,
  updates and backups. Each has a coloured dot: green working, amber needs
  attention, red not working, grey not in use or no data yet.
- **To do** lists what needs you, most urgent first, each with the button that
  does it.
- **Using it now**: how many people are signed in and cases open (counts only).
- **Going live**: how far the appliance is from approval for clinical use.

Status shows only operational facts and counts. It never shows a patient,
a case or a person's clinical work.

## Finding your way

Across the top, the groups: **Overview**, **Services**, **Connections**,
**Clinical setup**, **People**, **Updates and backups**. Each group's pages
appear as a row of buttons under it.

| Group | Pages |
|---|---|
| **Services** | How each part has worked over 24 hours, 7 or 90 days; incidents; recent events |
| **Connections** | Hospital system, Codes, Terminology package, LOSPOR Central, AI assistance |
| **Clinical setup** | Preoperative form, Postoperative form, Operating theatres, Unit indicators, Drug colours, Calculated guidance, Patient identification |
| **People** | Accounts, Research access |
| **Updates and backups** | Updates, Backups, Server, Security, Support and settings, Going live |

**Configure** lists every setting on one page, grouped the same way.

### Display settings

The round button at the top right (your initials) opens **Display settings**:

- **Skin** — how Status is laid out: **Map hub** (the default, above),
  **Sidebar** (every page in a menu on the left), **Inbox** (by what you came
  to do), **Settings index** (a searchable list; press `/`), **Console**
  (drop-down menus, for a big screen), or **Legacy**.
- **Light or dark**, and the **language**.

They are kept in this browser only. **Sign out** is there too.

## Services

![Services and events](/img/screens/en/status-services.png)

**Availability** shows each part of LOSPOR in 15-minute blocks over 24 hours,
7 days or 90 days. Below: the checks, incident history and recent events.
Status cannot see a power cut, the physical server or the hospital network
itself.
