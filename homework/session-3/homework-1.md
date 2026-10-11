# Homework 01: The CSS Bug Clinic ("Layout Surgery")

> **Deliverable Files:** `clinic.html` and `clinic.css`  
> **Topic:** Live DevTools Diagnosis, Box Model Surgery, Specificity Repair & Syntax Debugging  
> **Prerequisites:** Session 02 (HTML Semantics) & Session 03 (CSS Foundations)  
> **Submission:** Push both files to your GitHub repository in a folder named `session-03/homework-1/` before the start of Session 04.

---

## 🎯 The Mission

Welcome to the **CSS Bug Clinic**! 🩺

You have just joined a front-end engineering team, and an intern handed you a broken workshop event card. The markup and styling contain **5 severe CSS defects** that cause the page to look glitchy, overlap lines, blow past the screen edges, and lock out button clicks.

Your job as the **Lead Code Auditor** is to:
1. Copy the broken starter code below into `clinic.html` and `clinic.css`.
2. Open `clinic.html` in Google Chrome and launch Chrome DevTools (`Cmd + Option + I` on Mac or `F12` on Windows).
3. Use the **Elements**, **Styles**, and **Box Model** panels to diagnose the root cause of all 5 bugs.
4. Perform surgical fixes in `clinic.css` (and clean up any HTML flaws) until the card renders cleanly, responsively, and beautifully.

---

## 📂 The Broken Starter Code (Copy These Files First)

### 1. `clinic.html` (Save in your homework directory)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Bug Clinic — Patient Zero</title>
  <link rel="stylesheet" href="clinic.css">
</head>
<body>

  <main class="page-wrapper">
    <article class="event-card" id="card-patient">
      <span class="badge">LIVE WORKSHOP</span>
      
      <!-- BUG SYMPTOM: Lines in this heading collide and overlap! -->
      <h2 class="event-title">Mastering Modern Web Architecture and Responsive Design</h2>

      <p class="event-meta">📅 Saturday, November 14 • 10:00 AM</p>

      <div class="event-description">
        <p>Join world-class engineers for an intensive breakdown of modern browser rendering, the CSS Box Model, and layout architecture.</p>
      </div>

      <!-- BUG SYMPTOM: This button refuses to turn accent red despite class="btn-primary" -->
      <button type="button" id="legacy-btn" class="btn-primary">
        Claim Free Ticket
      </button>
    </article>
  </main>

</body>
</html>
```

### 2. `clinic.css` (The Flawed Stylesheet)
```css
/* ============================================================
   FLAWED STYLESHEET — CONTAINS 5 CRITICAL CSS DEFECTS
   ============================================================ */

/* DEFECT A: Base body styles are glitching out.
   Why are font-family and line-height not applying? */
body {
  background-color: #f1f5f9
  font-family: system-ui, -apple-system, sans-serif;
  color: #1e293b;
  padding: 40px;
}

/* DEFECT B: Box sizing & dimension explosion.
   Notice how horizontal scrollbars appear on small screens! */
.event-card {
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 32px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
}

/* DEFECT C: Heading line collision.
   Look closely at the 2-line title in the browser! */
.event-title {
  font-size: 26px;
  line-height: 16px; /* <-- What happens when font-size is bigger than line-height? */
  margin-top: 12px;
  margin-bottom: 12px;
  color: #0f172a;
}

.event-meta {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 16px;
}

/* DEFECT D: Padding vs. Margin bleed.
   The background color is spilling or failing to provide inner breathing room. */
.event-description {
  background-color: #f8fafc;
  margin: 20px 0;
  /* Notice the text touches the bare gray edge without breathing room! */
  border-radius: 8px;
}

.badge {
  display: inline-block;
  background-color: rgba(222, 59, 61, 0.1);
  color: #de3b3d;
  font-weight: 700;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 9999px;
}

/* DEFECT E: Specificity lock-in!
   Why does the button stay boring gray instead of vibrant red? */
#legacy-btn {
  background-color: #94a3b8;
  color: #ffffff;
  padding: 12px;
  border: none;
  border-radius: 8px;
  width: 100%;
}

.btn-primary {
  background-color: #de3b3d;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
}
```

---

## 🔍 The 5 Clinical Defect Files & Diagnosis Guide

Use Chrome DevTools to locate and treat each symptom:

### Bug 1: Semicolon Paralysis
- **Symptom:** Open `clinic.html` in Chrome. Notice that the page background is white (not `#f1f5f9`), and the font defaults to Times New Roman instead of system-ui!
- **DevTools Diagnosis:** In the Elements tab, inspect `<body>`. In the Styles tab, look at the `background-color` rule. You will see an error warning icon or subsequent properties crossed out!
- **Surgical Fix:** Add the missing semicolon `;` after `#f1f5f9`. Observe how the font stack instantly wakes up across the whole document.

### Bug 2: Missing Universal Reset (`border-box`)
- **Symptom:** Elements with padding and borders calculate their widths in unpredictable ways. On narrow mobile screens or nested containers, boxes expand past their containers.
- **DevTools Diagnosis:** Inspect `.event-card` and scroll down to the interactive **Box Model** diagram. Notice `box-sizing` is computed as `content-box`.
- **Surgical Fix:** Insert the 3-line Universal Reset at line 1 of `clinic.css`:
  ```css
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ```

### Bug 3: Line-Height Collision
- **Symptom:** The 2-line title `"Mastering Modern Web Architecture and Responsive Design"` looks scrambled. Line 2 crashes directly into line 1.
- **DevTools Diagnosis:** Inspect `.event-title`. The font size is `26px`, but `line-height` is hardcoded to `16px`. A line height smaller than font size forces characters to render on top of each other!
- **Surgical Fix:** Replace the fixed pixel value with the **1.3–1.4 unitless rule**: `line-height: 1.3;`.

### Bug 4: Padding vs. Margin Inner Bleed
- **Symptom:** Inside the gray `.event-description` box, the text touches the outer edges. There is no inner breathing room.
- **DevTools Diagnosis:** The author used `margin: 20px 0;` instead of `padding`. Remember: **Padding** is inner bubble wrap (adopts background color); **Margin** is outer buffer.
- **Surgical Fix:** Add `padding: 14px 16px;` to `.event-description` so text sits comfortably inside its soft background.

### Bug 5: The `#id` Specificity Trap
- **Symptom:** The author added `.btn-primary { background-color: #de3b3d; }`, but the button remains stubborn dull gray (`#94a3b8`).
- **DevTools Diagnosis:** In DevTools, click the button. Notice that `#legacy-btn` has crossed out `.btn-primary`! An `#id` selector scores 100 points, while `.btn-primary` scores only 10 points.
- **Surgical Fix:** Remove `#legacy-btn` from `clinic.css`. Style the button using clean, reusable class selectors (`.btn-primary`), and add a `:hover` state (`background-color: #b91c1c;`).

---

## 🤖 Socratic AI Prompting for Assistance

If you get stuck diagnosing any of the 5 defects, test your diagnostic reasoning with this prompt:

> *"I am doing a CSS layout surgery exercise on an event card.  
> When I inspect my button in DevTools, the background-color from my .btn-primary class is crossed out with a strikethrough, and a rule from #legacy-btn is active instead.  
> Explain why this is happening based on CSS specificity scores, and guide me on how front-end engineers refactor this without using !important."*

---

## 📊 Grading Rubric (100 Points Total)

| Criteria | Points | What Success Looks Like |
| :--- | :---: | :--- |
| **Bug 1: Semicolon Syntax Fixed** | 20 | Background color and system font stack apply cleanly across document. |
| **Bug 2: Universal Reset Added** | 20 | `box-sizing: border-box` placed at line 1, eliminating default margin quirks. |
| **Bug 3: Line-Height Restored** | 20 | Multi-line title text breathes naturally with proportional unitless line-height. |
| **Bug 4: Description Box Model** | 20 | Inner padding added to `.event-description` with proper border radius and margins. |
| **Bug 5: Specificity Refactored** | 20 | `#id` removed from CSS, button styled via classes with an interactive `:hover` state. |
