---
sidebar_position: 9
title: Calculated guidance and patient identification
---

# Calculated guidance and patient identification

## Calculated guidance

**Clinical setup → Calculated guidance** shows whether the dose guidance in
theatre is available, for adults and for children separately.

![Calculated guidance](/img/screens/en/status-control_clinical.png)

For each, the page says whether the policy is on, whether the hospital's
selected rule baseline matches the one this release was checked with, and
therefore whether **calculated guidance is available now**. When it is not —
switched off, or the baseline does not match — clinicians still chart doses
by hand; only the calculated suggestions are withheld.

The rulesets themselves are managed in the clinical app's **Clinical rules**
page (see [The head of department](../head-of-department/role.md#clinical-rules)).

## Patient identification

**Clinical setup → Patient identification** decides whether the national
identifier (ЕГН) may be recorded to link a patient across admissions.

![Patient identification](/img/screens/en/status-control_identity.png)

The ЕГН is what joins a patient's separate admissions into one person; a
record number alone restarts every January and cannot do that. Recording it
is a heavier privacy commitment, and the hospital — not LOSPOR's makers — is
its data controller.

**Permit ЕГН linking for this hospital**, with a reason and your password,
switches it on. Turning it off later only stops new links; an ЕГН already
recorded stays.

:::note
This applies to a hospital installation only. The cloud stores no patient
name or ID at all.
:::
