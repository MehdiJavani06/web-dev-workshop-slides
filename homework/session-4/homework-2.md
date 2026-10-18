# Homework 02: The Responsive Tech Portal & Accessible Form ("Mobile-First Architecture")

> **Deliverable Files:** `portal.html` and `portal.css`  
> **Topic:** Mobile-First Responsive Architecture, Viewport Meta Tag Contract, Media Queries (`@media (min-width: ...)`), Responsive Navigation, Accessible 2-Column to 1-Column Form Layouts, and Custom `:focus-visible` Outlines  
> **Prerequisites:** Session 02 (HTML5 Forms & Landmarks), Session 03 (Box Model & Units), Session 04 (Flexbox & Media Queries)  
> **Submission:** Push both files to your GitHub repository in a folder named `session-04/homework-2/` before the start of Session 05.

---

## 🎯 The Mission

Welcome to the **Responsive Tech Portal & Accessible Registration Form** project! 🌐

In production web engineering, over 55% of global web traffic originates from mobile devices. If a developer builds desktop-first using fixed widths and tries to "shrink" things down later, forms break, labels unbind, and touch targets become impossibly tiny.

Your mission as a **Senior Front-End Architect** is to build `portal.html` and `portal.css`:
1. **The Mobile Viewport Contract:** Include `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to prevent mobile browsers from rendering at 980px zoom.
2. **Responsive Navigation Bar:**
   - On mobile screens (< 640px): Brand logo and navigation links stack vertically with 100% width.
   - On desktop screens (≥ 640px): Logo sits on the left, navigation links align horizontally on the right.
3. **Hero Intro Section:** High-impact heading and lead paragraph highlighting the upcoming developer summit.
4. **Accessible, Mobile-First Registration Form (`<form>`):**
   - **Personal Details Row:** On mobile, First Name and Last Name inputs stack into 1 column. On screens ≥ 640px, they sit side-by-side in a 2-column flex row (`flex: 1`).
   - Every input field must be paired with an explicit `<label for="...">` contract.
   - **Attendance Mode:** A pair of styled radio buttons ("In-Person Summit" vs "Virtual Livestream") organized horizontally with Flexbox.
   - **Track Selection:** Accessible `<select>` dropdown with styled `<option>` values.
   - **Accessibility & Focus Rings:** High-visibility `:focus-visible` outline rings so keyboard-only users can navigate seamlessly.
   - **CTA Submit Button:** Vibrant, full-width button with hover and active states.

---

## 📐 Visual Blueprint

```text
+---------------------------------------------------------------------------------+
| Browser Window (Desktop ≥ 640px): http://localhost:5173/portal.html             |
|                                                                                 |
|  [ NEXUS SUMMIT 2026 ]                     [ Overview ]  [ Speakers ]  [ RSVP ] |
|  ============================================================================== |
|                                                                                 |
|                  GLOBAL DEVELOPER ARCHITECTURE SUMMIT 2026                      |
|          Join 2,500+ engineers for two days of modern web architecture,         |
|                     responsive layouts, and systems design.                     |
|                                                                                 |
|         +-------------------------------------------------------------+         |
|         |                   RESERVE YOUR ATTENDEE PASS                |         |
|         |                                                             |         |
|         |  First Name                 Last Name                       |         |
|         |  [ e.g. Carlos            ] [ e.g. Santana                ] | <── 2-Col
|         |                                                             |         |
|         |  Work Email Address                                         |         |
|         |  [ carlos@engineering.io                                  ] |         |
|         |                                                             |         |
|         |  Attendance Format                                          |         |
|         |  (•) In-Person Pass ($199)      ( ) Virtual Stream (Free)   | <── Flex
|         |                                                             |         |
|         |  Engineering Workshop Track                                 |         |
|         |  [ Frontend Architecture & Flexbox Layouts               ▼] |         |
|         |                                                             |         |
|         |  [✓] I agree to the Developer Code of Conduct               |         |
|         |                                                             |         |
|         |  [ Complete Registration — Instant Confirmation  → ]        |         |
|         +-------------------------------------------------------------+         |
|                                                                                 |
|  © 2026 Nexus Engineering Summit • Designed with Mobile-First Responsive CSS    |
+---------------------------------------------------------------------------------+

MOBILE VIEW (< 640px):
+-----------------------------------+
| [ NEXUS SUMMIT 2026 ]             |
| Overview • Speakers • RSVP        | <── Stacks into vertical flow!
| --------------------------------- |
| First Name                        |
| [ e.g. Carlos                   ] |
| Last Name                         | <── Stacks into 1 column!
| [ e.g. Santana                  ] |
| Work Email Address                |
| [ carlos@engineering.io         ] |
| (•) In-Person   ( ) Virtual       |
| [ Complete Registration  → ]      |
+-----------------------------------+
```

---

## 🧱 Technical Requirements

### 1. Document & File Architecture
- Separate files: `portal.html` and `portal.css`.
- Linked via `<link rel="stylesheet" href="portal.css">`.
- Crucial responsive meta tag in `<head>`:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- Universal Reset at line 1 of `portal.css`:
  ```css
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ```

### 2. Semantic HTML5 Structure (`portal.html`)
- `<header class="site-header">`:
  - Brand lockup `<a href="#" class="brand-logo">Nexus Summit 2026</a>`.
  - Semantic `<nav class="nav-links">`:
    - List `<ul>` with links to `#about`, `#schedule`, and `#register`.
- `<main class="portal-main">`:
  - Hero Section `<section class="hero">`:
    - Eyebrow `<span class="badge-eyebrow">OCTOBER 24–25 • SAN FRANCISCO & VIRTUAL</span>`.
    - Main title `<h1>Global Developer Architecture Summit</h1>`.
    - Lead description `<p class="lead">`.
  - Registration Section `<section class="registration-section">`:
    - Form card container `<div class="form-card">`.
    - Semantic `<form action="/register" method="POST">`.
- Form Controls Specification:
  1. **Name Row Container:** `<div class="form-row">` containing two form-groups:
     - Group 1: `<label for="first-name">First Name</label>` + `<input type="text" id="first-name" name="first-name" required placeholder="Carlos">`.
     - Group 2: `<label for="last-name">Last Name</label>` + `<input type="text" id="last-name" name="last-name" required placeholder="Santana">`.
  2. **Email Group:** `<label for="user-email">Work Email</label>` + `<input type="email" id="user-email" name="email" required placeholder="carlos@engineering.io">`.
  3. **Attendance Mode Radio Group:** `<fieldset class="radio-fieldset">`:
     - `<legend>Attendance Mode</legend>`.
     - Container `<div class="radio-options">` with two styled radio labels:
       - `<label class="radio-pill"><input type="radio" name="mode" value="in-person" checked> In-Person Pass ($199)</label>`.
       - `<label class="radio-pill"><input type="radio" name="mode" value="virtual"> Virtual Stream (Free)</label>`.
  4. **Track Select Dropdown:** `<label for="track-select">Workshop Track</label>` + `<select id="track-select" name="track">`:
     - At least 3 options (e.g. Modern Flexbox Layouts, Systems Architecture, AI Auditing).
  5. **Consent Checkbox:** `<div class="checkbox-group">`:
     - `<input type="checkbox" id="terms" name="terms" required>` + `<label for="terms">I agree to the Developer Code of Conduct</label>`.
  6. **Submit Button:** `<button type="submit" class="btn-submit">Complete Registration — Instant Confirmation</button>`.
- `<footer>`: Closing copyright and contact information.

### 3. Mobile-First CSS Architecture (`portal.css`)

#### A. Base Mobile Rules (Outside Any Media Query)
- Body background: `#f8fafc`, typography: `system-ui, -apple-system, sans-serif`, color: `#0f172a`.
- `.site-header`:
  - `display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 20px;`.
- `.nav-links ul`:
  - `display: flex; gap: 16px; list-style: none;`.
- `.form-card`:
  - `max-width: 680px; margin: 0 auto; background: #ffffff; padding: 24px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.06);`.
- `.form-row`:
  - `display: flex; flex-direction: column; gap: 16px; margin-bottom: 20px;` (Single column on mobile!).
- `.form-group`:
  - `display: flex; flex-direction: column; gap: 8px; flex: 1;`.
- Labels & Inputs:
  - Labels: `font-size: 0.9rem; font-weight: 600; color: #334155;`.
  - Inputs & Select: `width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; transition: border-color 0.2s ease, box-shadow 0.2s ease;`.
  - Accessible Focus Ring:
    ```css
    input:focus-visible, select:focus-visible {
      outline: 2px solid #de3b3d;
      outline-offset: 2px;
      border-color: #de3b3d;
    }
    ```
- Radio Pills:
  - `.radio-options`: `display: flex; flex-direction: column; gap: 10px; margin-top: 8px;`.
  - `.radio-pill`: `display: flex; align-items: center; gap: 10px; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer;`.

#### B. Progressive Enhancement via Media Queries
```css
/* Tablet & Desktop Breakpoint: Enhance to Multi-Column Layouts */
@media (min-width: 640px) {
  .site-header {
    flex-direction: row;
    justify-content: space-between;
    padding: 24px 48px;
  }

  .form-card {
    padding: 36px 40px;
  }

  .form-row {
    flex-direction: row; /* First Name and Last Name sit side-by-side! */
  }

  .radio-options {
    flex-direction: row; /* In-Person and Virtual buttons sit side-by-side! */
  }
}

/* Wide Desktop Breakpoint: Expanded Hero */
@media (min-width: 1024px) {
  .hero h1 {
    font-size: 3rem;
  }
}
```

---

## 🔍 Chrome DevTools Verification Checklist

Open `portal.html` in Chrome:

1. **Device Emulation Test:** Press `Cmd + Option + I` (or `F12`), then toggle the Device Toolbar (`Cmd + Shift + M`).
   - Select **iPhone SE (375px)**:
     - Check the header: the logo and links should wrap or stack cleanly without horizontal overflow.
     - Check the name fields: First Name and Last Name must stack vertically.
     - Check inputs: full width, easy to tap, no text spilling.
   - Select **iPad Mini (768px)**:
     - Check the name fields: First Name and Last Name must snap side-by-side into 2 equal columns.
     - Check radio options: In-Person and Virtual sit side-by-side.
2. **Keyboard Accessibility Test:** Click into the browser address bar, then press `Tab` repeatedly without using your mouse:
   - Verify that the focus indicator jumps logically from the Logo $\rightarrow$ Nav Links $\rightarrow$ First Name $\rightarrow$ Last Name $\rightarrow$ Email $\rightarrow$ Radios $\rightarrow$ Track Select $\rightarrow$ Terms $\rightarrow$ Submit Button.
   - Verify that our `:focus-visible` outline is clearly visible on every single control!
3. **Label Click Test:** Click the text label `"Work Email"`. Verify that the text cursor automatically focuses inside the email input box.

---

## 🤖 Strategic Socratic AI Prompt

If you encounter responsive layout or media query bugs, prompt your AI assistant:

> *"I am building a responsive registration form.  
> On mobile phones (< 640px), I want my First Name and Last Name inputs to stack in a single column. On desktop displays (≥ 640px), I want them to sit side-by-side in equal 50% columns.  
> Using mobile-first CSS with `@media (min-width: 640px)`, write the exact Flexbox CSS rules for `.form-row` and `.form-group`, and explain why mobile-first is less prone to bugs than desktop-first."*

---

## 📊 Grading Rubric (100 Points Total)

| Criteria | Points | What Success Looks Like |
| :--- | :---: | :--- |
| **Mobile Viewport Meta & Universal Reset** | 15 | `<meta name="viewport">` included, preventing 980px mobile zoom, 3-line reset at line 1. |
| **Responsive Header & Navigation** | 20 | Stacks into clean vertical flow on mobile, snaps into horizontal split row on desktop. |
| **Accessible Form Binding & Contract** | 25 | Every input paired with an explicit `<label for>`, required attributes set, accessible `<select>` and `<fieldset>`. |
| **Mobile-First Media Query Architecture** | 25 | Base CSS written for mobile, enhanced with `@media (min-width: 640px)` for 2-column form rows and radio options. |
| **Keyboard Accessibility & Focus States** | 15 | High-contrast `:focus-visible` styling, smooth tab navigation order, and interactive button hover polish. |
