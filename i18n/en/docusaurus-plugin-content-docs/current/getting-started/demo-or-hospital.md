---
sidebar_position: 1
title: How the installation changes the workflow
---

# How the installation changes the workflow

This is **one guide** for members, heads of department, administrators and
system administrators. The screens and the main case path are shared, but the
available capabilities depend on two things:

1. whether you use the public **demo** or **LOSPOR Hospital** (the hospital
   appliance); and
2. whether a particular capability is enabled, configured and available in
   that installation.

## The two installations

| | **Public demo (serverless)** | **LOSPOR Hospital (appliance)** |
|---|---|---|
| Purpose | Learning, training and evaluation | Real work for one hospital |
| Where it runs | `app.lospor.org`, `pwa.lospor.org`, `api.lospor.org` | A server inside the hospital, run by its IT team |
| Sign-in | Email, self-registration and email recovery | Username; accounts and recovery are managed by an administrator |
| Administration | **Admin** for the platform; shared settings | **Status**; settings for this hospital |
| System administrator | No local server for the user to maintain | Prepares the server, network, certificates, updates and backups |
| Real patients | **Never** | Only under the hospital's rules and approval |

The demo is for learning and evaluation. Never enter real patient data there.

## What can differ in the workflow

| Capability | Public demo | Hospital appliance and its workflow effect |
|---|---|---|
| **Patient identity** | Patient name and identifier are not stored; printed identity lines are filled in by hand | The hospital may allow a locally stored, masked hospital number and EGN linking. Turning it off stops new links but does not automatically change old records |
| **Hospital information system (HIS)** | None | When configured in Status, data arrives as suggestions. The clinician accepts or rejects it; it is not written into the case automatically |
| **LOSPOR Central** | None | May be enabled for outbound delivery of eligible finished, de-identified cases. Central cannot read or change the hospital database |
| **Preoperative sections and questions** | The platform form | The administrator can enable or disable optional sections, questions and orders separately for adults and children. This changes what a member sees |
| **Preoperative summary and consent** | No step when the deployment does not declare the capability | In Hospital the administrator may enable them. When they are off, **Continue to intraoperative** goes straight to the intraoperative record |
| **Operating theatres** | No hospital theatre list | They appear only when the hospital creates them and enables their use. Then theatre affects the dashboard, filters and indicators |
| **Indicators** | Work from the available cases and platform settings | The administrator sets thresholds and name visibility; small counts are hidden. Missing settings or data are not a damaged case |
| **Drug colours** | Platform colours | The hospital may choose its own colours in Status; they also apply when older cases are viewed again |
| **Calculated guidance** | Platform rules | In Hospital it is available only when the setting and rule baseline are compatible. Otherwise the clinician enters doses by hand, without calculated suggestions |
| **AI assistance** | Appears only if the public deployment declares it and the provider is available | The administrator first allows external AI and chooses an EU Mistral model. The clinician still gives a separate tick for each case. If the provider is off or unavailable, enter the data by hand |
| **Paediatric mode** | Available only with reviewed rules and an enabled deployment | The same conditions apply, plus a minimum client version. When it is off, new paediatric records cannot use the mode and existing records may become read-only |
| **Printing** | Server-generated PDF is available | There is no server PDF; use printable HTML and the browser printer. Summary printing also depends on the summary being enabled |

“Enabled” means that the capability is allowed, configured and supported by
the client. “Disabled” or “unavailable” may mean that a screen is hidden, a
step is skipped or an administrator must act. Follow LOSPOR's message; do not
put data in another field to bypass an unavailable capability.

## How to read the rest of the guide

### Member

Follow [a case from start to finish](../clinician/workflow.md). In the actual
installation:

- HIS suggestions, the hospital number, EGN, Central and AI appear only when
  the corresponding capability is available and enabled;
- preoperative sections and questions may differ from the examples here;
- the preoperative summary appears only when the administrator has enabled it;
- when AI, paediatric mode or a compatible client is unavailable, use manual
  entry and follow the on-screen message.

### Head of department

The role adds case oversight, assignment and indicators according to the
available rights and data. Department settings and the indicators policy can
limit what is shown; “no data” or a hidden value for a small number of cases
does not mean that a case was deleted. Department clinical rules affect the
theatre menus only where that capability is active.

### Administrator

In the public demo, an administrator approves people and access in the cloud
panel. In Hospital, the administrator manages accounts and enabled
capabilities in Status. A page or field that is absent is often an intentional
disabled capability, not a missing step in the guide. Check this page first,
then [Status](../administrator/status.md), [Forms](../administrator/forms.md)
and [Connections](../administrator/connections.md).

### System administrator

The system administrator works with the Hospital appliance: installation,
host preparation, network boundaries, certificates, updates, backups, secrets
and **Going live**. They do not see clinical cases. They should tell the
administrator which capabilities are enabled and tell clinicians which step
will change.

## Privacy in the demo and Hospital

Do not put a patient's name, EGN, hospital number or another direct identifier
in notes, uploads or free text. A **planned procedure** is clinical content:
the privacy rule does not prohibit describing the procedure in free text. It
is not a place for a patient's name or identifier.

In Hospital, the hospital number may be stored encrypted locally when the
hospital allows it. It is not sent to LOSPOR Central.

See [Accounts and signing in](./accounts.md) for access and [Web and phone](./web-and-phone.md)
for client differences.
