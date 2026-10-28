---
sidebar_position: 1
title: The head of department
---

# The head of department

A head of department is a clinician with a wider view: everything a member
does, plus the whole department's cases.

A head-of-department's exact view depends on the deployment and their rights.
If a capability is off — for example theatres, indicators or paediatric mode
— the role description does not make that screen appear. See
[how installations and enabled capabilities differ](../getting-started/demo-or-hospital.md).

## What changes

| | Member | Head of department |
|---|---|---|
| Cases they can see | Their own, and those they created and handed on | **Every case of the hospital** |
| Cases they can edit | Their own | **Every case of the hospital** |
| Passing a case on | **Hand over** — the colleague must accept | **Assign to** — at once |
| Unit indicators | Yes | Yes |
| Join requests to the department | — | Approves or rejects them |
| Clinical rules | — | Manages the department's ruleset |

![The dashboard of a head of department](/img/screens/en/web-hod-dashboard.png)

On the dashboard, the **anaesthesiologist** filter narrows the list to one
colleague's cases.

## Becoming head of department

- **In the cloud:** in **Settings → Security & Access**, press **Request Head
  of Department access**. An administrator approves it.
- **In a hospital installation:** the administrator sets the role in Status.

Losing the role removes the department-wide view. The person's own cases stay
theirs.

## Requests to join the department

When a clinician asks to join your hospital (see
[Accounts](../getting-started/accounts.md)), you decide: approving gives you
sight of their cases. On the phone: **Settings → Requests to join your
department**. An administrator can decide them too.

## Clinical rules

**Clinical rules** (in the top bar) holds the rulesets behind the
intraoperative menus: default doses and concentrations for drugs, fluids and
infusions, equipment rules, and paediatric dose profiles, separately for
adults and children.

Rules apply in order: **personal**, then **institution**, then **platform**
(the set that comes with LOSPOR). A head of department can:

- see the **Current ruleset** for adults and for children;
- **Create copy** of a ruleset to make an editable draft, add or change rules
  (**Add drug**, **Add fluid/infusion**), then **Publish** it;
- **Use this ruleset** for the department, or **Use inherited rules** to go
  back to the platform set.

A published ruleset is read-only; to change it, make a copy.

:::caution
Rules decide what clinicians are offered in theatre. Change them with the
department's agreement, and check a draft before publishing it.
:::
