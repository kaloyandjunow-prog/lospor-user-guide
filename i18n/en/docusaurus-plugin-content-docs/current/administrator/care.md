---
sidebar_position: 12
title: Updates, backups and going live
---

# Updates, backups and going live

The **Updates and backups** group is the hospital IT's: keeping the appliance
current, backed up and secure.

Status never does the work itself: it leaves a request, and the appliance's
host agent checks it again and carries it out. Only one operation runs at a
time. Each action on these pages says beforehand what it **needs**, whether
it **interrupts service**, whether a **backup** is made first, what **cannot
be undone**, and what is **checked afterwards**.

## Updates

The page shows the installed version, the newest published, and whether one
is downloaded and verified.

- **Check for updates** downloads a new release and checks its signature.
  Unless you choose to apply it at once, it is applied in the overnight
  maintenance window.
- **Apply** installs it. It restarts the clinical services and may change the
  database, so it is a separate step from downloading.

## Backups

![Backups](/img/screens/en/status-maintenance_backups.png)

- Backups run every night by themselves. **Back up now** makes one at once,
  with no interruption.
- **Restore drill** proves the newest backup can be restored: it is restored
  into a separate temporary database, checked, then removed. The live
  database is not touched. Run one regularly; going live needs a passed drill.
- **Copies kept elsewhere:** each verified backup is encrypted, copied to a
  share or an SFTP server, read back and compared. Set the destination here.

## Server

The Ubuntu server's state and its updates, as the host agent reports them.

## Security

- **Secrets escrow:** writes the installation's secrets into one locked file
  that you download to a USB stick on your own computer. **Do this.** Backups
  hold only fingerprints of the secrets: if the server is lost and the secrets
  exist nowhere else, every stored patient identity is unreadable for good.
  Needs your password and an authenticator code; the passphrase is shown once.
  Keep the file and the passphrase apart.
- **Credential rotation:** replaces the passwords and keys the appliance's own
  services use. Everyone signs in again afterwards; escrow the secrets again.

## Support and settings

- **Support bundle:** a file for LOSPOR support with versions, states and
  check results only — no patients, cases, accounts, names or secrets. Read it
  before you send it.
- **Site settings:** the networks that may open Status and Research, the
  support contact shown to clinicians, sign-in email sender, default
  language, and the update route (internet or offline media).
- **Advanced settings.**

## Going live

![Going live](/img/screens/en/status-go-live.png)

After installation, the appliance is **installed, not yet approved for
clinical use**. **Going live** is the way there: 13 steps in five stages,
with **Next step** at the top — why it matters, who does it, and a link to the
page that does it.

- Some steps the appliance checks itself: services healthy, clock
  synchronised, certificate valid, backups, secrets escrowed, update route.
- Five need a person to sign off: a passed restore drill, the network
  allowlists verified from real computers, MFA recovery codes stored, a host
  patch policy, and clinical acceptance.

Until everything holds, signing in to Status lands on this page. When it
does, the verdict reads **Ready for clinical use**.
