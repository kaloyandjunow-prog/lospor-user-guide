---
sidebar_position: 10
title: Connections
---

# Connections

A hospital installation keeps its records to itself. Each connection to
something outside it is off until an administrator switches it on, under
**Connections**.

## Hospital system

**Connections → Hospital system** brings patient data from the hospital
information system into LOSPOR: demographics, diagnoses, allergies, lab
results, vitals.

![Hospital system](/img/screens/en/status-control_ehr.png)

- **EHR import transport:** **None**, **Watched folder** (the hospital system
  writes one file per patient into a folder; no password needed), or **FHIR**.
  FHIR needs a credential, entered on the same page and stored sealed: Status
  never shows it again.
- **Nothing is written into a case directly.** What arrives is offered to the
  clinician as suggestions ("From the record: Yes?"), field by field, to accept
  or reject.
- **Days staged EHR data is kept** (1 to 14): imports nobody reviewed are then
  deleted.
- **Asking the hospital system for a patient:** when on, looking up a patient
  for whom nothing has arrived sends a request to the hospital system. Switch
  it on only when the hospital system's team has built the answer.

## Codes

**Connections → Codes** teaches LOSPOR the hospital's own codes.

![Codes](/img/screens/en/status-control_codes.png)

- **Laboratory code map** — each lab code the hospital sends that LOSPOR does
  not know waits under **Waiting for an answer**. **Record this as** the
  matching test, then **Map this code**. Nothing is blocked meanwhile: the
  result still reaches the clinician under the laboratory's own name.
  **Unmap** undoes it.
- **Medication code map** and **PREOP vital-code map** — the same, for drugs
  and vital signs.
- **Code-list addresses** — each coded value arrives with the address of the
  list it belongs to. If the hospital system uses an address LOSPOR does not
  recognise, say once which list it is (ICD-10, ICD-10-PCS, КСМП, the NHIS
  lists…).

## Terminology package

**Connections → Terminology package**. The release already carries the codes
clinical use needs. Only to import a licensed Athena (OMOP) package: Hospital
IT places its folder under `reference-data/`, then this page offers it by
name. **Verify, stage and activate** checks every file before use; the
previous package is kept, so **Rollback terminology** can go back. The
clinical apps stop briefly during both.

## LOSPOR Central

**Connections → LOSPOR Central** sends finished, de-identified cases to LOSPOR
Central, the shared research register. It is **push only**: Central can never
read or change the hospital's database. Off by default; switching it on
needs the enrolment details Central provides. The page shows the keys,
certificates and the last delivery.

## AI assistance

**Connections → AI assistance** — Mistral (EU) only.

![AI assistance](/img/screens/en/status-control_ai.png)

- **Allow external-AI features for this hospital** switches on reading lab
  reports and monitor photos, and the preoperative advisor for adults.
  Clinicians must still tick **Allow AI assistance** on each case.
- **AI models:** which Mistral model each feature uses. When Mistral retires a
  model, the AI features stop and Status says so: choose another here.
- **Replace the Mistral credential:** the key is passed once to LOSPOR and
  never shown again.

Only what a clinician sends with an explicit AI action leaves the hospital.
Saving these settings sends no clinical data.
