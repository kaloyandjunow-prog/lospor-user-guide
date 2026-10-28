---
sidebar_position: 3
title: Installing LOSPOR Hospital
---

# Installing LOSPOR Hospital

This page is the overview for the person who installs. The technical detail —
host preparation, networks, certificates, every option — is in the
[LOSPOR Hospital documentation](https://github.com/kaloyandjunow-prog/lospor-hospital/tree/main/docs).

## What you need

- A server or virtual machine with **Ubuntu Server 24.04 LTS**, at least
  **8 processor cores, 16 GiB of memory and 200 GiB of free disk**, reachable
  from the hospital network. The installer refuses less.
- An address for the clinical app (for example `lospor.hospital.bg`), and one
  for the research website if you will use it.
- A certificate for those addresses, from the hospital's own authority or a
  public one.
- The networks that may open Status (the IT management networks) and the
  research website (research computers).

## Three ways in, one installer

Every way checks the maintainer's signature before anything runs.

- **On Windows with Hyper-V: the wizard.** Extract the Windows kit and
  double-click **Install LOSPOR Hospital**. It asks everything once, checks
  every answer, builds the virtual machine, installs Ubuntu and then LOSPOR
  by itself.
- **Online, at the server's console:** download `losporctl-install.sh` from
  lospor.org and run it with `sudo`.
- **Offline, from the maintainer's USB stick:** run the installer from the
  stick with `sudo`.

The installer asks about 13 questions, in Bulgarian or English: language, the
addresses, certificates, the networks for Status and Research, the hospital's
name and city, and the first administrator. Everything else takes a safe
default and can be changed later in Status.

### The progress window

With the wizard, a window follows the whole installation: preparing the
Ubuntu installer, installing Ubuntu, starting the server, installing LOSPOR
Hospital. It takes about an hour and needs nothing from you; you can keep
working meanwhile. **Show details** shows the log.

![Installation in progress](/img/screens/en/installer-progress.png)

When it ends, the window gives the address of the **Go-live** page and the
console user. **Open Go-live** opens it.

![Installation finished](/img/screens/en/installer-done.png)

### If it stops part-way

Run the same installer again. It says what the attempt left behind, and
offers to continue it or to discard the unfinished installation and start
again.

## Installed is not ready

After installation, LOSPOR is **installed, not yet approved for clinical
use.** Open Status and follow **Going live**: it lists every step that is
left, in order, with who does it. See
[Updates, backups and going live](./care.md#going-live).
