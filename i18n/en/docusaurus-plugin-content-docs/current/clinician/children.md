---
sidebar_position: 11
title: Children
---

# Children

A patient under 18 is recorded in **paediatric mode**. The form, the scores,
the reference values and the printed documents all follow the child's age.

![The preop form for a child](/img/screens/en/web-preop-child.png)

## Switching to paediatric mode

Under **Demographics**, **Clinical mode** has **Adult** and **Pediatric**.
A patient younger than 18 must use paediatric mode; LOSPOR says so and offers
**Switch to pediatric mode**. Paediatric mode is only for patients under 18.

Switching clears the adult risk scores and vitals already entered, because
they do not apply to a child.

### Age

Enter the **Precise age** with its **Age unit**: **Days**, **Months** or
**Years**. LOSPOR names the age group (Neonate, Infant, Toddler, Preschool
child, School-age child, Adolescent) and uses it for everything below.

### Broselow

From the height (or, failing that, the weight), the side panel shows the
child's **Broselow** colour band, used for equipment sizes and doses.

## The preoperative assessment

- **Vitals** show the normal range for the age beside the value (heart rate,
  respiratory rate, systolic pressure by percentile). They are a reference,
  not a diagnosis.
- The hospital may ask extra questions for children: **Pediatric risk**,
  **Pediatric safety**, **Pediatric history**. Children and adults can have
  different forms (see [Forms](../administrator/forms.md)).
- **Risk scores:** **POVOC** (risk of postoperative vomiting in children)
  replaces Apfel. Tick **Use COLDS assessment** for a child with a current or
  recent upper respiratory infection to get the **COLDS score**.

### Nil by mouth

**Nil by mouth** sets how many hours before surgery each intake stops:
solid food or cow's milk, infant formula (under 1 year), breast milk, clear
fluids. **Assign APAGBI 2023 hours** fills in the standard hours. A time
shorter than the APAGBI minimum is flagged. Once the start of surgery is
known, LOSPOR shows the clock time each one stops.

The hours print on the preop summary and, with layout E, on the large-print
page for the parents.

## In theatre

- **Paediatric reference**, at the top of the intraoperative record: body
  surface area, maintenance fluid (per day and per hour), and resuscitation
  doses — shock energy, adrenaline and amiodarone — for this child's weight.
  Worked out each time; nothing to accept.
- **Suggested equipment & sizes** are by age, weight and Broselow band:
  tube size and depth, laryngeal mask, laryngoscope blade, and more.
- **Quick Setup** has a **Paediatric Inhalational** template.
- Drug doses are offered from reviewed paediatric profiles. Where there is
  none for a drug, LOSPOR says so: enter the dose by hand and check it
  independently.
- The AI advisor is not available for children.

## After surgery

- **Steward recovery score** replaces Aldrete: ready at 4 or more.
- **Pain** scales by age: **NIPS** for a newborn, **FLACC** and **FPS-R** (the
  faces) for a younger child, **NRS** from 8 years.
- **Emergence delirium (PAED):** scored for every child. The first three
  items score in reverse (not at all = 4). The total reads as no, possible or
  likely emergence delirium.

## Consent

The hospital has a separate consent text for children, printed with the
[preop summary](./preop-summary.md):

| Age | Consent text | Who signs |
|---|---|---|
| Under 14 | Children | Parent or guardian, and the anaesthetist |
| 14 to 17 | Adults and children 14–18 | Patient, parent or guardian, and the anaesthetist |
| 18 and over | Adults | Patient and the anaesthetist |
