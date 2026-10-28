---
sidebar_position: 5
title: The intraoperative record
---

# The intraoperative record

The intraoperative record is where the anaesthetic is charted as it happens:
the timeline of vitals, drugs, infusions, gases, fluids and events, and the
technique, airway and lines around it.

![The intraoperative chart](/img/screens/en/web-intraop.png)

## The four tabs

On the web the record has four tabs (or, with the **Sidebar** layout, four
sections in the panel on the right):

| Tab | What is in it |
|---|---|
| **Overview** | The preoperative assessment in brief (allergies and a difficult airway in red), **Suggested equipment & sizes** for this patient, and the **Timing**: start and end of the case |
| **Anaesthesia** | Patient position, monitoring, anaesthesia technique, airway, vascular access, premedication |
| **Chart** | The timeline itself, and the laboratory results taken during the case |
| **Finish** | Drug and fluid balance totals, complications and the event log |

A red dot beside a tab means something required is still missing there.

## Starting the case

Under **Timing**, **Start Case** sets the start of anaesthesia: **Start now**,
or **Start at…** for a time already past. Everything on the chart is timed
from that moment, so nothing can be charted before it.

**Quick Setup** fills technique, airway and monitoring from a template in one
click: **Standard GA**, **TIVA**, **Spinal C-Section**, **Paediatric
Inhalational** or **Awake Fiberoptic**. It replaces any technique and airway
already chosen, so it asks first.

## The chart

The chart is a timeline in **5-minute columns**. An orange line marks now.
From top to bottom:

| Lane | What it holds |
|---|---|
| Graph | Blood pressure and heart rate, drawn from the rows below |
| **BP SYS**, **BP DIA**, **HR**, **SpO₂**, **EtCO₂**, **TEMP** | The vitals, one value per column. Only what you chose under **Monitoring** appears |
| **Agent** | Volatile agents (for example sevoflurane) as bars, with their percentage |
| **Gas settings** | Fresh gas flow, carrier gas (air or N₂O) and FiO₂ |
| **Labs** | Blood samples taken during the case |
| **Events** | Incision, intubation and any other clinical event |
| **Drugs** | Single doses, as pills in the column they were given |
| **Infusions** and **Fluids** | Running infusions and fluids, as bars |

### Recording

- **Vitals:** click a cell and enter the value; ↑ and ↓ adjust it. An unusual
  value (for example SpO₂ under 80%) asks you to check the reading. Vitals
  cannot be recorded in the future.
- **A drug:** click **+** in the column. The menu opens on your
  **Favourites**, then the clinical scenario groups; **Browse all drugs**
  searches the whole list. Choose the dose and route.
- **An infusion or fluid:** the same menu in the infusions or fluids lane.
  An infusion runs at a rate (or, for propofol, remifentanil, sufentanil and alfentanil, as **TCI**
  with a target); a fluid as a bag or at a rate.
- **An agent:** **choose** in the agent lane, then **Start agent here**.
- **Gas settings:** **tap to start**, then set flow, carrier gas and FiO₂.
  Oxygen alone fixes FiO₂ at 100%.
- **An event:** click the events lane; **Log clinical event** searches the
  list of events.
- **Labs:** the labs lane opens the same laboratory editor as the preop form,
  with a time for the sample.

Choose your favourites in [Your settings](../getting-started/settings.md);
the same list appears on the phone.

:::info Hospital installation only
When the hospital has enabled this connection, the intraoperative screen has
**Labs from the hospital system**. It looks for new results after the case
started and shows them for review; nothing is added without your action. If the
hospital system does not answer, enter the result by hand. The public demo has
manual entry only.
:::

### Bars: running, changed, stopped

A bar runs until you stop it. Click a bar to select it, double-click it for
its options: change the rate or dose, or stop it at a time. Dragging a bar
moves it; it never stops it by itself. A strip above the bar shows each rate
or concentration it ran at.

A change or stop dated after now is drawn where it will apply, marked
**Planned**, and takes effect when its time comes. When a planned stop is
reached, LOSPOR asks whether it really stopped.

### When a drug clashes with an allergy

If you give a drug the patient has a recorded allergy to (the same drug, the
same class, or a possible cross-reaction), LOSPOR asks first. **Give anyway**
records it, with a note on the dose that you saw the allergy; **Don't give**
leaves the chart as it was. It never blocks you.

### Keyboard shortcuts

| Key | Does |
|---|---|
| Click | Select or deselect an item |
| Esc | Deselect, close a dialog |
| Tab | Move between drugs, infusions, fluids, agents |
| Del / Backspace | Delete the selected item |
| → / ← | Extend or shorten a bar; copy a drug to the next column, or remove it |
| Double-click | Change an infusion's rate or a drug's dose; resume a stopped bar |
| Enter | Confirm a value |

### Auto-fill vitals

If you switch on **Auto-fill vitals** in your settings, each new column
copies the previous EtCO₂, temperature and SpO₂ (and, if you choose, blood
pressure and heart rate). Copied values are marked **auto**. After 60 minutes
without any entry, auto-fill pauses and asks whether the case is still
running, so a forgotten chart cannot grow on its own.

## Saving, and what the marks mean

Everything saves as you enter it. Next to an entry you may see:

- **not yet saved** — no connection; it will be sent when the connection is
  back.
- **saving…** — on its way.
- **refused** — the server did not accept it, with the reason (for example,
  a stop earlier than its start). **Seen** dismisses the message.

### The same case on two screens

Only one screen writes to a case at a time. If the case is open elsewhere,
yours says who is editing it and saves nothing. **Take over editing** makes
yours the one that writes.

## Ending the case

**End Case** (under **Timing**, or **End case…** on the chart) sets the end of
anaesthesia. If anything is still running, LOSPOR lists it: for each item
choose what to do, and for a fluid bag say whether the full bag was infused or
how much was. LOSPOR then checks the record: something required that is
missing stops the end and is listed with a link to it; a warning asks once.

Entries charted after the end time must each be marked **Happened** or
**Didn't happen** before the case can be finished.

A case still open 48 hours after its start is ended automatically. If it is
really still running, resume it; LOSPOR offers to remove the stops it made.

**Continue to Postoperative** goes on to [the postoperative step](./postop.md).

## On the phone

![The intraoperative record on the phone](/img/screens/en/phone-intraop.png)

On top: the technique, the procedure, the time since the start, whether the
case is saved, and the latest vitals. Below, a row of tabs — swipe sideways or
tap: **Equipment**, **Technique**, **Timing**, **Position**, **Monitoring**,
**Airway**, **Vascular**, **Premedication**, **Timetable**, **Fluid status**,
**Event log**. A red star marks a tab with something required still missing.

![Equipment suggestions](/img/screens/en/phone-intraop-equipment.png)

The **Timetable** runs down the screen in 5-minute rows, with now marked in
orange. Tap a row to add to it: **Vitals**, **Drug**, **Infusion**, **Fluid**,
**Agent**, **Gas**, **Labs**, **Event**. Running items show in each row with
**Manage**, **Stop** or **End fluid**. After each entry an **Undo** bar
appears for a moment.

At the bottom: **📊 Chart** shows the whole anaesthetic as a graph, the way it
prints; **↓ Now** jumps to the current time; **End case** ends it.

![The chart view on the phone](/img/screens/en/phone-intraop-chart.png)
