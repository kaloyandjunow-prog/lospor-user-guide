---
sidebar_position: 1
title: Accounts and signing in
---

# Accounts and signing in

How you get an account depends on where LOSPOR runs.

## In a hospital installation

The hospital's LOSPOR administrator creates your account in Status (see
[People and research access](../administrator/people-and-research.md)). You do
not register yourself.

1. The administrator gives you a **one-time activation link**, on paper or as a
   QR code to scan with your phone. It works once.
2. Open it and choose your password.
3. Sign in with your **username** (for example `ivan.petrov`) and that password.

Your username uses Latin letters; your name as shown in LOSPOR can be in
Cyrillic. Capital letters in the username do not matter when you sign in.

**Forgot your password?** Ask the administrator for a **recovery link**. It
works the same way as the activation link, and signs you out everywhere.

## In the cloud (app.lospor.org)

![The sign-in screen](/img/screens/en/web-login.png)

1. On the sign-in screen choose **Create account**.
2. Fill in your name, title, email and password, then your **country** and
   **institution** — choose your hospital from the list.
3. Accept the Terms of Use, the Privacy Policy and the Medical Disclaimer.
4. Open the link in the email LOSPOR sends you (valid for 24 hours). Your
   account is ready once the email is verified.

![Creating an account](/img/screens/en/web-register.png)

:::tip Your hospital is not on the list
Choose the nearest one to finish registering. Then open the
**Account & Settings** menu (⚙ at the top right), choose **Edit** beside the
institution, and ask to join the right one. An administrator
confirms the change.
:::

**Forgot your password?** Choose **Forgot your password?** on the sign-in
screen and enter your email. The reset link is valid for one hour.

## The first time you sign in

LOSPOR shows a short statement of what it is and is not — documentation and
calculated guidance, not a medical device — and asks you to confirm it before
you continue.

## Roles

| Role | Can |
|---|---|
| **Member** (every clinician) | Record cases, see and edit their own and those handed to them, see the unit's figures |
| **Head of department** | Everything a member can, plus see and edit every case of the department and assign cases straight to a colleague. See [Heads of department](../head-of-department/role.md) |
| **Administrator** | Manage accounts and, in a hospital installation, the hospital's settings in Status |
| **Research account** | Use the research browser only, never clinical records. See [Researchers](../researcher/overview.md) |

A system administrator is an operational, not a clinical, role: they maintain
the Hospital appliance and server and have no access to clinical cases.
Whatever your role, the capabilities enabled in the installation determine
which menus and steps you see.

A member who leads the department can ask for the head-of-department role in
**Settings → Security & Access** (**Request Head of Department access**); an administrator approves it.

## Signing out

The **sign-out** icon is at the top right. If saves made without a connection
are still waiting, LOSPOR warns you first: signing out would discard them from
this device.
