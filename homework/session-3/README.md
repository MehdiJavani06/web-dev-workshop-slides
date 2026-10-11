# Session 03 — Homework Assignments

Welcome to the homework for **Session 03: CSS Foundations, The Box Model & Visual Architecture**!

In this session, you learned how to take raw, unstyled HTML structures and transform them into polished, professional web interfaces. You mastered:
- How CSS rules work (`selector { property: value; }`).
- Why external stylesheets (`<link rel="stylesheet">`) are the industry standard for maintainable code.
- How to target elements with precision using **class selectors** rather than fragile tags or IDs.
- How to scale typography and spacing responsively using **`rem` units** rather than hardcoded pixel traps.
- The physics of web layout: **The Box Model** (Content, Padding, Border, Margin) and the life-saving `box-sizing: border-box` universal reset.

These two homework projects let you put those concepts into practice by building two real-world deliverables from scratch.

---

## 📋 The Assignments at a Glance

| Assignment | Deliverable Files | What You Will Build | Key Concepts Mastered |
| :--- | :--- | :--- | :--- |
| **[Homework 1: The CSS Bug Clinic](./homework-1.md)** | `clinic.html`<br>`clinic.css` | Diagnose and repair 5 real-world layout and specificity defects in an intentionally broken codebase. | DevTools element inspection, semicolon syntax traps, `border-box` rescue, specificity hierarchy, line-height scaling. |
| **[Homework 2: SaaS Pricing Tier Showcase](./homework-2.md)** | `pricing.html`<br>`pricing.css` | A high-converting SaaS pricing card with a highlight badge, feature checklist, and CTA. | External CSS architecture, class-based styling, button `:hover` states, card layout, contrast accessibility. |

---

## 🌟 3 Golden Rules to Remember Before You Write CSS

Keep these three rules pinned to your desk while building your homework:

### 1. The Universal Reset (Line 1 of Every CSS File)
Always start your `style.css` with the border-box reset. Without it, adding padding will expand your elements and break your layout calculations:
```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

### 2. Classes for Styling, IDs for Anchors
Style with reusable classes (`.card`, `.btn-primary`, `.badge-pill`). Never use `#id` selectors in your CSS! IDs create a specificity brick wall that makes future tweaks painful and brittle.

### 3. The Postal Box Rule: Padding Inside, Margin Outside
- **Padding** is inner breathing room (bubble wrap). It adopts the element's background color and expands clickable surface area.
- **Margin** is outer buffer space between neighbors. It is always transparent.
- If you want space *inside* a card: use `padding`.
- If you want distance *between* two cards: use `margin`.

---

## 🤖 Strategic AI Guidelines for Session 3

Just like in Session 2, you are the **Lead Architect** and AI is your **Junior Assistant**:
- **Do not ask AI to generate the entire CSS file at once.** Monolithic CSS prompts often inject bloated rules, random `!important` tags, and brittle absolute positioning.
- **Ask AI for targeted diagnostic help:**
  > *"I have a `.badge` class with `padding: 4px 12px`. Why is the vertical padding overlapping the line of text above it? What display property should I use?"*
- **Audit every AI suggestion against DevTools:**
  Open the Elements tab in Chrome and inspect the **Styles** and **Box Model** diagram to verify what each AI-suggested rule actually does on screen!
