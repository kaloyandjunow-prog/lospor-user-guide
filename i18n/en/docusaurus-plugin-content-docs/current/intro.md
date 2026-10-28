---
slug: /
sidebar_position: 1
title: Welcome
---

# The LOSPOR User Guide

LOSPOR (Large Open Source Perioperative Register) is where an anaesthesia
department keeps its anaesthetic records: the preoperative assessment, the
intraoperative chart, the recovery, and the printed record that goes into the
patient's file. The same records, stripped of anything that identifies a
patient, feed the department's own figures and approved research.

This guide shows how to use it, screen by screen. Pick the part for your role:

| You are… | Start with |
|---|---|
| An **anaesthesiologist** recording cases | [A case from start to finish](./clinician/workflow.md) |
| A **head of department** | [What the role adds](./head-of-department/role.md) |
| A **hospital administrator or IT** looking after a hospital installation | [Administration at a glance](./administrator/overview.md) |
| A **researcher** | [Research with LOSPOR](./researcher/overview.md) |

Everyone should read [Getting started](./getting-started/accounts.md) first.

## Two ways to use it, the same records

- **On a computer**, in the browser: the full form, the chart, the summary and
  printing, the unit's figures.
- **On a phone or tablet**, the LOSPOR app: built for the operating theatre,
  with large buttons, swiping between sections, and saving that carries on
  without a connection.

A case started on one can be continued on the other at any moment; both show
the same record. See [Web and phone](./getting-started/web-and-phone.md).

## One case path, different capabilities

Read [How the installation changes the workflow](./getting-started/demo-or-hospital.md)
before you start. The public demo is for learning and trying LOSPOR; **never
enter real patients there**. In Hospital, extra steps also depend on what the
hospital has enabled in Status.

:::info Patient identity
In the public demo, a patient's name and ID are never stored; the printed record
has blank fields, filled in by hand. In Hospital, the hospital number may be
kept encrypted locally and is shown masked. It is not sent to LOSPOR Central.
ЕГН linking exists only when the hospital permits it in Status.

In either environment, do not put names, ЕГН or other identifiers in notes,
uploads or free text. A planned procedure is clinical content and may be
described freely; it is not a place for a patient identifier.
:::

:::note Not a medical device
LOSPOR documents care and offers calculated guidance. It does not make clinical
decisions, and every suggestion it shows is for a clinician to accept or not.
:::

The technical documentation (architecture, API, installing and operating the
server) is at [docs.lospor.org](https://docs.lospor.org).
