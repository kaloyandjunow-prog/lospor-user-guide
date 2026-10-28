---
sidebar_position: 3
title: The preoperative assessment
---

# The preoperative assessment

Start a case with **New case** (top bar, or **+ New case** on the phone). The
preoperative form opens.

![The preoperative form](/img/screens/en/web-preop.png)

With the **Sidebar** layout (see [Your settings](../getting-started/settings.md)),
the panel on the right shows the patient's key facts, the scores, the sections
still to complete (a red dot) and where the case is. Click a section to jump
to it.

:::info Hospital installation only
At the start of a case there may be a **Hospital patient number**. It stays
encrypted on the hospital appliance, is shown masked, and is not sent to
LOSPOR Central. If it is wrong, press **Correct number**, enter the new number
twice, give a reason, review it and confirm. The correction is recorded in the
audit log.

If the hospital has enabled its hospital-system connection, saving the draft
can show **Fetch patient data**. Nothing is written automatically. Under **From
the hospital system**, review each suggestion and choose **Add selected** or
**Don't offer again**. Values carry the provenance **Reported by the hospital
system, not by the patient**. If the answer is delayed, LOSPOR shows **Requested
from the hospital system**; choose **Look again** later or enter the values by
hand. If the number is ambiguous, LOSPOR fetches nothing.

These functions do not exist in the public demo: do not enter patient identity
there.
:::

## The sections

In Hospital, the administrator decides which optional sections the form has,
separately for adults and children. The public demo uses the platform form and
has no Status setting for this. In either case, you may see fewer than listed
here.

| Section | What goes in |
|---|---|
| **Demographics** | Adult or child, age, sex, height, weight (BMI, ideal and adjusted weight are worked out), blood group |
| **Case details** | Diagnosis (ICD-10) and planned procedure, team notes |
| **Medical History** | Comorbidities, allergies, latex allergy, family history of anaesthetic problems |
| **Current medications** | What the patient takes, from the drug catalogue |
| **Clinical Anamnesis & History** | The hospital's questions (Yes/No, with follow-ups), smoking, alcohol and others |
| **Physical examination — Vitals** | Blood pressure, heart rate, SpO₂, temperature, respiratory rate |
| **Airway evaluation** | Mallampati, mouth opening, thyromental distance, neck movement, upper lip bite test, previous difficult airway |
| **Laboratory** | Results, typed or scanned from a report |
| **Risk scores** | ASA (required) and the scores LOSPOR works out |
| **Planned anaesthesia** | The techniques, airway and lines you plan |
| **Premedication** | What to give the night before and the morning of surgery |
| **Nil by mouth** | For a child: hours before surgery for each intake |
| **Preoperative ward orders** | What the ward must do before the operation |
| **Medication instructions** | Which of the patient's medicines to stop, continue or change |
| **Notes** | Anything else for the team (never names or ID numbers) |

## Diagnosis and procedure

Both are searched as you type, in Bulgarian or English, by name or code.

- **Diagnosis:** ICD-10. Common synonyms work ("heart attack" finds acute
  myocardial infarction).
- **Planned procedure:** choose the procedure group, for example
  "Cholecystectomy". Below it you may then pick the **exact operation**
  (**Choose exact operation** — laparoscopic or open, whole or partial), which gives the record its
  research code. The group alone is a valid answer.

### When the procedure is not yet known

Tick **Not yet known — decided during surgery** beside the procedure when the
extent of the operation will be decided in theatre, for example an
exploratory laparotomy. The search is set aside and the tick stands for the
planned procedure. You then record what was done in the postoperative form,
under **Procedure done**, before the case can be finished.

![Not yet known, beside the procedure](/img/screens/en/web-preop-case-details.png)

## Questions the hospital adds

A hospital installation can ask more than the standard form: its
administrator chooses questions from a catalogue that comes with LOSPOR.

- Most are **Yes / No**; some also offer **Unknown** or **N/A**, a few their
  own choices.
- A **follow-up** appears only after **Yes** to the question above it.
- A question marked **\*** is required before you continue to the
  intraoperative step. A draft always saves.
- Questions about pregnancy and breastfeeding are not asked of a male
  patient; a few are asked only from a certain age.
- **From the record: Yes?** under a question is a suggestion from the
  hospital information system. Accept it, or reject it.

## Risk scores

- **ASA** is required. LOSPOR **suggests** a class from the coded diagnoses,
  comorbidities and BMI, and names the reasons; you choose.
- **RCRI**, **Apfel** (nausea and vomiting) and **STOP-BANG** are worked out as
  you answer their questions. Each shows how many of its questions were
  actually asked: an unasked question is not counted as "no".
- **Gupta** (cardiac risk) appears when the hospital switches its questions on.

For children the adult scores are replaced by POVOC and, where relevant,
COLDS. See [Children](./children.md). What each score means is in
[Scores](../reference/scores.md).

## Orders for the ward

- **Preoperative ward orders:** choose from the hospital's list (for example
  a consultation with a named specialty, a laboratory test, blood products).
- **Medication instructions:** for each of the patient's current medicines,
  whether to stop it, continue it or change it, and how many hours before
  surgery. Add the current medications first: an instruction picks one of them.
- **Premedication:** for the night before and the morning of surgery. What you
  order here fills in the premedication of the intraoperative record, where it
  can be confirmed or changed.

All three print on the preop summary.

## Laboratory results

Type a result, or scan a printed report (**Scan lab report**): the photo is read
and the values are offered for you to check before anything is added. Values
outside the reference range are flagged.

Scanning needs **Allow AI assistance for this case**, at the bottom of the
form. It is off by default, and covers the lab scan, the monitor scan and, for
adults, the AI advisor. The image goes to the hospital's AI provider (Mistral,
in the EU): keep names and ID numbers out of the picture.

## Continuing

**Continue to Intraoperative** checks the required fields and lists any that
are missing, in the order of the form. If the hospital uses the preop summary,
the summary opens first: see [The preop summary and consent](./preop-summary.md).

On the phone the same form is shown one section at a time: swipe sideways or
tap the section names at the top.
