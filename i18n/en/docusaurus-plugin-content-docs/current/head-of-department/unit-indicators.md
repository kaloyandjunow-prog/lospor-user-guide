---
sidebar_position: 3
title: Unit indicators
---

# Unit indicators

**Unit indicators** (in the top bar; on the phone, a button under the counts)
shows the department's figures: how much was done, how, and with what
results. Every clinician of the department can open it.

What you see depends on the available cases and the installation policy:
thresholds, colleague names and some capabilities are set in Hospital Status,
and small counts are hidden. If the page is unavailable or says “no data”,
check the installation and date range; this is not a change to the clinical
case.

![Unit indicators](/img/screens/en/web-indicators.png)

It is for running the department, not for research: the figures are worked
out from the live records, and they are never exported. For research, see
[Researchers](../researcher/overview.md).

## Reading the figures

- **<5** stands in for any figure based on fewer than 5 cases, so that no
  single patient or clinician can be picked out.
- Times, doses and scores are shown as the **median (interquartile range)**:
  the middle value, and the range of the middle half of the cases.
- Percentages show the counts behind them: **5 % (1/19)**.
- Right after cases change, a line may say that some cases are still being
  worked out. The figures update by themselves.

## Choosing the cases

Above the figures:

- **From** and **To** — the period, up to a year.
- **Theatre**, **Anaesthesiologist**, **Adults and children**, **ASA**,
  **Procedure** — each narrows the cases. **Clear filters** resets them.

The number of cases the figures cover is shown underneath.

## What is shown

| Section | Figures |
|---|---|
| **Activity** | Cases by week (by month for longer periods), case starts by weekday and hour, procedures cancelled before anaesthesia and the reasons, adults and children, technique, cases and hours by theatre |
| **Time** | Anaesthesia duration, duration by procedure, turnover between cases in the same theatre on the same day |
| **Case mix** | Age, ASA class, Apfel score, children |
| **Airway** | Airway devices, video laryngoscope, Cormack–Lehane 3–4, airway complications |
| **Drugs** | Opioids in IV morphine equivalents (per case and per kg), cases with an opioid, sugammadex and neostigmine, TIVA and volatile agents, PONV prophylaxis at Apfel 3–4, most given drugs and infusions, opioids per anaesthesiologist |
| **Environment** | The volatile agents' carbon footprint (kg CO₂e, total and per case), desflurane and nitrous oxide use |
| **Fluids and blood** | Crystalloid in mL/kg/h, cases transfused |
| **Intraoperative events** | Hypotension by age band (cases, minutes, share of monitored time), desaturation, hypothermia, complications per 100 cases and the most recorded |
| **Recovery** | Pain above the threshold on arrival, PONV (and observed against what Apfel predicts), emergence delirium (PAED), Aldrete and Steward scores, admissions to ICU |
| **Documentation** | Ended cases finalised, hours from end to finalised, cases awaiting review, cases ended automatically, what is most often missing in unfinished cases |

![Drugs](/img/screens/en/web-indicators-drugs.png)

### Opioids per anaesthesiologist

Each clinician sees their own row by name (**You**). Colleagues appear by
name or as **Colleague A**, **Colleague B**…, as the hospital chooses. The
morphine equivalents come from common equianalgesic tables: they compare
practice and are never a dosing guide.

### Hypotension and the other thresholds

![Intraoperative events](/img/screens/en/web-indicators-events.png)

Hypotension is counted against a threshold for each age band: systolic
pressure for children, mean arterial pressure for adults. The thresholds for
hypotension, desaturation, hypothermia, pain and emergence delirium, and
whether colleagues are named, are set by the hospital's administrator (see
[Indicator thresholds](../administrator/indicators.md)). The page says
**Thresholds as set in Status.**

### The carbon footprint

An estimate from fresh gas flow, dial concentration and each agent's global
warming potential over 100 years. It covers cases where the gas settings and
agent were charted.

## On the phone

![Unit indicators on the phone](/img/screens/en/phone-indicators.png)

The same figures and filters, one section under another.
