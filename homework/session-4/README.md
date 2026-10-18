# Session 04 — Homework Assignments

Welcome to the homework for **Session 04: Modern Layouts with Flexbox, Responsive Design & CSS Wrap-up**!

In this milestone session, you finished Phase 1 of the web development curriculum. You learned how professional engineers build fluid, responsive web layouts that adapt seamlessly from 375px smartphones to giant desktop displays without brittle hacks. You mastered:

- The **Parent-Child Contract in Flexbox**: activating `display: flex` on the container to orchestrate direct child items.
- The **3-Property Rule**: `display: flex`, `justify-content` (Main Axis), and `align-items` (Cross Axis).
- Modern spacing with `gap` that replaces fragile margin hacks.
- Advanced flex child mechanics: `flex-direction`, `flex-wrap: wrap`, and `flex: 1 1 280px`.
- The secret weapon of card design: **`margin-top: auto`** to align action buttons perfectly across unequal text cards.
- The **Mobile Viewport Contract**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` and why phones zoom out to 980px without it.
- **Mobile-First Responsive Design**: starting with natural single-column stacking and enhancing upward with `@media (min-width: 640px)` and `@media (min-width: 1024px)`.
- Real-world production components: **Responsive Navbars**, **Fluid Card Grids**, and **Accessible Two-Column Forms**.

These two homework deliverables will cement your CSS mastery before we take our giant leap into **JavaScript** next session!

---

## 📋 The Assignments at a Glance

| Assignment | Deliverable Files | What You Will Build | Key Concepts Mastered |
| :--- | :--- | :--- | :--- |
| **[Homework 1: Fluid Flexbox Storefront](./homework-1.md)** | `products.html`<br>`products.css` | A responsive e-commerce showcase with filter tags, fluid cards, and aligned action buttons. | `display: flex`, `flex-wrap: wrap`, `gap`, `flex: 1 1 280px`, `margin-top: auto` sticky buttons, card hover lift. |
| **[Homework 2: Responsive Conference Portal](./homework-2.md)** | `portal.html`<br>`portal.css` | A complete mobile-first event portal with a responsive navbar and an accessible two-column form. | Viewport meta tag, `@media (min-width: ...)`, responsive navbar, 2-column to 1-column form layout, accessible focus rings. |

---

## 🌟 3 Golden Rules to Remember Before Writing Flexbox & Responsive CSS

Keep these three rules pinned to your workspace while building your homework:

### 1. The Parent-Child Flexbox Boundary
Flex properties are strictly split between parents and children:
- **Parent Container Properties:** `display: flex`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `gap`.
- **Child Item Properties:** `flex` (`flex-grow`, `flex-shrink`, `flex-basis`), `align-self`, `margin-top: auto`.
- *Rule of Thumb:* If elements aren't aligning, 9 times out of 10 you wrote `justify-content` on the child instead of the parent container!

### 2. Always Mobile-First (`min-width`)
Write your base CSS rules for small mobile screens first without any media queries:
```css
/* Base: Mobile-first single column */
.form-row {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Enhanced: Desktop multi-column when screen width allows */
@media (min-width: 640px) {
  .form-row {
    flex-direction: row;
  }
}
```
Starting with mobile and using `min-width` prevents cascading overrides, keeps your stylesheets lean, and eliminates awkward horizontal scrollbars.

### 3. The `margin-top: auto` Superpower
When product cards in a flex row have different amounts of title or description copy, cards end up with different heights.
Instead of hardcoding brittle pixel heights, give the card's body `display: flex; flex-direction: column; flex-grow: 1;` and add `margin-top: auto;` to the button!
The browser will automatically push the button to the bottom of the card, creating a clean, aligned horizontal baseline across every card on the screen.

---

## 🤖 Strategic AI Prompting for Session 4

As the **Lead Architect**, use AI to audit your responsive layouts—not to write bloated code for you:

- **Do NOT ask AI for an entire responsive template.** AI often hallucinates legacy CSS (`float: left`, `position: absolute`, or fixed `width: 350px`) that breaks on mobile devices.
- **Ask AI for targeted Flexbox diagnostics:**
  > *"I have a card container with `display: flex` and `flex-wrap: wrap`. On mobile screens, I want cards to be 100% width, but on tablets I want them side-by-side with a minimum width of 280px. How do I configure the `flex` shorthand property without media queries?"*
- **Audit in DevTools Responsive Mode:**
  Press `Cmd + Option + I` (or `F12`), toggle the **Device Toolbar** (`Cmd + Shift + M`), and drag the viewport slider from 360px up to 1400px. If any horizontal scrollbar appears, you have a fixed-width leak!

---

## 🚀 Looking Ahead: Session 05 Kickoff

Congratulations on mastering CSS! You have now mastered:
1. **HTML:** The structural skeleton and semantic meaning.
2. **CSS:** The visual presentation, box model physics, and responsive layout engine.

In Session 05, we ignite the engine of the web: **JavaScript**! We will explore how browser memory works, write our first variables and functions, inspect state changes in DevTools Console, and bring our static pages to life!
