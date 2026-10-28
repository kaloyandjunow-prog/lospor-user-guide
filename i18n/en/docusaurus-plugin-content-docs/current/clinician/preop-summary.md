---
sidebar_position: 4
title: The preop summary and consent
---

# The preop summary and consent

Some installations add a step between the preoperative assessment and theatre:
a one-page **preoperative summary**, printed for the colleague who will give
the anaesthetic and, if the hospital uses it, with the patient's **written
consent** attached.

The step may be absent in the public demo. In Hospital it is off unless the
administrator switches it on (see [Forms](../administrator/forms.md)). Without
it, **Continue to Intraoperative** goes straight to theatre. The rest of this
page describes the behaviour when the capability is enabled.

## The summary page

**Continue to Intraoperative** at the end of the preop form opens the summary
instead. On top are the actions of this step; below, the first page exactly as
it will print.

| Button | Does |
|---|---|
| **Edit preop** | Back to the form. The summary always shows what is in the form now |
| **Hand over** | Gives the case to the colleague who will do the anaesthetic. See [Handing a case over](./handover.md) |
| **Print summary** / **Print summary and consent** | Opens the printable pages |
| **Start intraop** | Goes on to the intraoperative record |

Once the case is with a colleague you can still read and print the summary;
editing and starting intraop are theirs.

## Printing

The print page shows every sheet in order. **Download PDF** gives a PDF;
**Print** uses the browser's printer. Print A4, portrait, with background
graphics on.

The patient's name and ID number are never stored in LOSPOR, so they print as
blank lines: write them in by hand.

### What prints

The administrator chooses one of five layouts for the whole hospital:

| Layout | What you get |
|---|---|
| **A — Document №2, filled in** | The ward's paper form in its own order, sections I to V, with every answer LOSPOR holds printed in and the rest left for the pen. The consent follows in full |
| **B — Summary, then consent** | A summary for the colleague taking the case over, with the whole questionnaire, then the whole consent in two columns. The default |
| **C — Consent per technique** | Before printing, tick the planned techniques. The consent describes only those, and general anaesthesia as the fallback, each with a box for the patient's initials |
| **D — One sheet, both sides** | A dense summary on the front, the consent as a table on the back. Print double-sided |
| **E — Hospital copy and patient's copy** | The hospital's pages carry the summary and the signatures; a large-print page with the fasting instructions, and the full consent text, go home with the patient or parent |

With layout **C**, a row of tick boxes above the pages lists the techniques.
If you tick nothing, the consent describes every technique.

### The consent

The consent text is the hospital's own, one for adults and one for children,
chosen by the patient's age. The diagnosis, the planned procedure, the date
and your name are filled in from the case.

Each time you print or download the consent, LOSPOR notes on the case which
version of the text was on the paper (and, for layout C, which techniques). If
you are offline, a message asks you to print again once you are back online,
so that the print is recorded.

## In theatre

The intraoperative record opens with the preoperative assessment in brief at
the top: what you need in view while running the case.

## On the phone

The phone has the same step: **Start intraop**, **Hand over**, and the print
button, which opens the PDF to share or print.
