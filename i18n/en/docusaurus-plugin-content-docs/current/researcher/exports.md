---
sidebar_position: 3
title: Exports
---

# Exports

With **CSV** or **JSON** in your grant, **Exports** creates complete
pseudonymous research files.

![Exports](/img/screens/en/browser-exports.png)

## Requesting an export

1. Under **Create complete export**, choose the **Cohort** (a saved cohort, or
   **All finalized cases**), the **File name** and the **Format**.
2. **Request export.**

The request **freezes the cohort** as it is at that moment and waits for the
operator's approval. Once approved, the file is prepared.

## Export history

Each export is listed with when it was created, its status, the number of rows,
and **Download** while it is available. Files are kept for **30 days**; their
SHA-256 checksum and the history stay after that, so a published analysis can
always be traced to the exact file it used.

## OMOP

An **OMOP** export (OMOP Common Data Model 5.4) needs, besides the OMOP
permission:

- CSV or JSON permission too;
- **approval of the exact dataset**: the administrator sees the cohort's case
  count and fingerprints in Status and approves that dataset alone (see
  [People and research access](../administrator/people-and-research.md#exact-omop-approvals)).

In the export, each person is a pseudonym derived from the case, with an
approximate year of birth (from the age at operation) and no names or ID
numbers. Codes follow standard vocabularies where LOSPOR has a confident
mapping; the original code and its English and Bulgarian labels always travel
with it.

## What an export holds

- **Never:** names, ID numbers, or any direct identifier.
- **Cleaned first:** the few free-text fields exported (for example allergy
  notes) are redacted of personal details.
- **Exact times:** intraoperative events keep their exact date and time, for
  the sequence of the anaesthetic. Combined with outside data, a date can help
  re-identify someone: keep export files as protected as the approval
  requires, and never try to link them back.
- **Cancelled cases** are marked as cancelled, so they are never read as
  operations that took place.
