---
sidebar_position: 8
title: Printing the record
---

# Printing the record

A finished case prints as a **two-page anaesthesia record** on A4 landscape,
for the patient's file.

![The print page](/img/screens/en/web-print.png)

## Where to print from

- **Print case** on the summary of a finished case, or in the case's row on
  the dashboard.
- On the phone: **Print case** in the case's menu (hold the case on the
  dashboard) or on the case screen. The phone makes a PDF to print or share.

:::info Demo and hospital installation differ
In the public demo, the page has **Download PDF** and the server creates the
finished file. **LOSPOR Hospital** has no server PDF: choose **Print**, then
choose a printer or **Save as PDF** in the browser dialog. The appliance prints
the same record as printable HTML. On the phone, use **Print case** and the
system print or share dialog.

In the demo, the patient's name and ID are not stored and stay blank on the
printout. In the hospital installation, do not put a name or ID in notes; when
Status permits patient identity, follow the hospital's rules for the hospital
patient number and what belongs in the medical record.
:::

## On the print page

- **Download PDF** builds the finished A4 file. This is the easiest way on a
  phone, and gives the same result in every browser.
- **Print** sends the page to the browser's printer. Set A4, landscape,
  margins None, background graphics on.
- **Back to case** returns to the summary.

## What is on the two pages

| Page | Contents |
|---|---|
| **1 — Intraoperative timetable** | The graph of blood pressure and heart rate with the drugs marked on it, the table of vitals, agents, infusions, gases and fluids, the drug administration log, drug and agent totals, fluid balance, and the intraoperative notes |
| **2 — Pre- & post-operative** | The preoperative assessment (history and comorbidities, investigations, airway, anthropometry, ASA), the postoperative recovery with the recovery score, and the staff with room for names and signatures |

The header carries the hospital, the date, the operating theatre, the **case
code** and the page number.

### Name and ID in the public demo

The patient's name and ID number are never stored in LOSPOR, so they print as
empty lines: **Patient name** and **ID / File №**. Fill them in by hand after
printing.

### A cancelled case

A cancelled case prints too, marked **PROCEDURE CANCELLED**, with what was
recorded up to the cancellation. See [Cancelled procedures](./cancelled-procedures.md).

## The preop summary

The preoperative summary and the consent are printed from their own page,
before theatre. See [The preop summary and consent](./preop-summary.md).
