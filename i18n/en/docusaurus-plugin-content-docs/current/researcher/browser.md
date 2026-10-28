---
sidebar_position: 2
title: The research browser
---

# The research browser

The research browser is LOSPOR's research website. It reads the research data
through LOSPOR's own interface and never touches the clinical database
directly. Everything in it is read-only.

![Signing in](/img/screens/en/browser-login.png)

Sign in with your LOSPOR account. **Access** shows what your grant allows. If
the account has no grant, the browser says so and, for a clinical account,
offers temporary aggregate access.

The sections are in the menu: **Overview**, **Cohort builder**, **Compare**,
**Cases**, **Data quality**, **Benchmarks**, **Exports**, **Access**.

## Overview

![Research overview](/img/screens/en/browser-overview.png)

Finished activity in your scope: complete cases, mean age, mean duration,
complications, PONV; ASA classes, the most frequent procedures, recently
finished cases. Also **ASA suggestion agreement**: for each rule that
suggested an ASA class, how often anaesthetists chose it, and which way they
departed from it.

## Cohort builder

![Cohort builder](/img/screens/en/browser-cohorts.png)

Combine filters, then **Run query**:

- dates, age, sex, BMI, duration, ASA, emergency or elective, the high-risk
  flag;
- diagnosis and comorbidities (ICD-10), procedure and procedure groups,
  technique, position, airway device, monitoring;
- drugs (by INN or ATC, including those given during the operation),
  complications, disposition, Aldrete and pain scores;
- a preoperative question and its answer; whether data came from the hospital
  system;
- terminology mapping status and minimum completeness.

**Save cohort** keeps it, private or shared with the institution. Saved
cohorts can be run again, duplicated, edited or deleted by their owner.

## Compare

![Compare cohorts](/img/screens/en/browser-compare.png)

The same outcomes across two cohorts defined independently: the difference
and the relative difference for each.

## Cases

![Pseudonymous cases](/img/screens/en/browser-cases.png)

With **Inspect pseudonymous cases** in your grant: the cases of a cohort,
one row each, by research ID. Opening one shows demographics and risks,
diagnoses, procedures and comorbidities, the intraoperative summary and a
relative timeline (minutes from the start, never clock time), laboratory
results, preoperative answers with their OMOP concepts, the postoperative
outcome, and the record's completeness.

## Data quality

![Data quality](/img/screens/en/browser-quality.png)

How far the data can be trusted: completeness by field, terminology mapping
(mapped, source only, unmapped), finalisation integrity and impossible
timelines. Same scope as your queries.

## Benchmarks

![Benchmarks](/img/screens/en/browser-benchmarks.png)

Trends by month, quarter or year, and comparison between the institutions in
your scope. Periods with too few cases are withheld — a privacy rule, not an
absence of cases.
