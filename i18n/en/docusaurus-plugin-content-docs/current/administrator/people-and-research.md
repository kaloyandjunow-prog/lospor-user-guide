---
sidebar_position: 11
title: People and research access
---

# People and research access

In a hospital installation nobody registers themselves: every account is
created in Status, under **People → Accounts**.

## Creating a clinical or research account

Under **Create a clinical or research account**:

| Field | |
|---|---|
| **Login username** | 3–64 characters, Latin letters, numbers, dot, underscore or hyphen, starting with a letter (for example `ivan.petrov`). Capitals are kept but do not matter when signing in |
| **First name**, **Last name**, **Title** | As shown in LOSPOR; Cyrillic is fine |
| **Contact email** | Optional, and never used to sign in |
| **Institution / department** | |
| **Account access** | **Clinical member**, **Clinical head of department**, or **Research only** (no clinical app) |
| **Account language** | Bulgarian or English |

**Create account and activation link** shows a **one-time link** and its QR
code — once. Copy, print or let the person scan it there and then. It works
once and expires after 72 hours. The person opens it and chooses their
password. No email service is needed.

## Looking after accounts

Under **Existing clinical and research accounts**, each account shows its
state (waiting for activation, active, suspended) and its actions:

- **Replace activation link** — a new link; the old one stops working.
- **Issue recovery link** — for a forgotten password. It expires after 8
  hours and signs the person out everywhere.
- **Change login username** — the old username stays reserved; the person gets
  a recovery link.
- **Change clinical role** — **Member**, **Head of department** or **Clinical
  administrator**. Signs the person out. A demoted head of department keeps
  their own cases.
Every change asks for a reason and your Status password.

Suspending or deleting an account is done by a **clinical administrator** in
the clinical app's **Admin** panel, which works the same way as in the cloud
(see [The cloud admin panel](./cloud-admin.md#all-users)).

## Status administrators

![Status administrators](/img/screens/en/status-accounts.png)

At the top of the page. There are no levels: every Status administrator can
do everything in Status, and none can see clinical records. Creating one needs
a reason and your password, and gives a one-time activation link for them.
The first, protected administrator is the one created at installation.

## Research access

**People → Research access**. Seeing research data in detail, or exporting
it, needs an explicit **grant** — for everyone, clinicians and heads of
department included.

![Research access](/img/screens/en/status-control_research.png)

A grant names:

- the **account** and the **institution** (or all);
- a **specific research purpose**;
- **validity**, 90 days by default, up to 365;
- the **permissions**: aggregate queries, inspecting pseudonymous cases, CSV,
  JSON, OMOP, sharing institution cohorts.

**Issue immutable grant**: a grant cannot be edited later, only replaced by a
new one.

### Exact OMOP approvals

An OMOP export also needs approval of the exact dataset: the researcher
defines the cohort in the research browser, and it appears here with its case
count and fingerprints. Approve it with a reason and your password. Only that
exact dataset can then be exported. See [Researchers](../researcher/overview.md).
