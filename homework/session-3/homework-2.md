# Homework 02: The Modern SaaS Pricing Tier & Feature Showcase

> **Deliverable Files:** `pricing.html` and `pricing.css`  
> **Topic:** Professional CSS Layout, Box Model Precision, Typography Hierarchy & Interactive UI States  
> **Prerequisites:** Session 02 (Semantic Landmarks, Forms/Buttons) & Session 03 (CSS Foundations)  
> **Submission:** Push both files to your GitHub repository in a folder named `session-03/homework-2/` before the start of Session 04.

---

## 🎯 The Mission

Every modern web app—from Spotify to Notion to GitHub—has a high-converting **Pricing Tier** component.
A great pricing card isn't just about looking nice; it requires rock-solid CSS architecture:
- High typographic contrast so users instantly spot the price.
- Prominent "Most Popular" badge with perfect pill spacing.
- A scannable bullet checklist with custom visual indicators.
- A high-visibility Call-To-Action (CTA) button with distinct interactive states (`:hover`, `:active`).
- Bulletproof box model calculations so nothing overflows or breaks.

You will build a standalone landing section with a featured pricing tier named `pricing.html` styled with `pricing.css`.

---

## 📐 Visual Blueprint

```text
+-------------------------------------------------------------------------+
|                                                                         |
|                          FLEXIBLE PLANS FOR TEAMS                       |
|                 Simple, transparent pricing that scales with you.       |
|                                                                         |
|            +-----------------------------------------------+            |
|            |                [ ★ MOST POPULAR ]             |            |
|            |                                               |            |
|            |   Pro Developer Tier                          |            |
|            |   Everything you need to launch and scale.    |            |
|            |                                               |            |
|            |   $29 / month                                 |            |
|            |   Billed annually ($348/yr) or $35 month-to-month |        |
|            |                                               |            |
|            |   -----------------------------------------   |            |
|            |                                               |            |
|            |   WHAT'S INCLUDED:                            |            |
|            |   ✓  Unlimited private project repositories   |            |
|            |   ✓  Automated GitHub Actions CI/CD pipeline  |            |
|            |   ✓  Custom domains with automatic SSL        |            |
|            |   ✓  24/7 Priority Discord & email support    |            |
|            |   ✓  Advanced team analytics & audit logs     |            |
|            |                                               |            |
|            |   [  Get Started with Pro  ->  ]              |            |
|            |                                               |            |
|            |   🔒 14-day free trial. No credit card required. |          |
|            +-----------------------------------------------+            |
|                                                                         |
+-------------------------------------------------------------------------+
```

---

## 🧱 Technical Requirements

### 1. Document & File Architecture
- Separate `pricing.html` and `pricing.css`.
- External `<link rel="stylesheet" href="pricing.css">` inside `<head>`.
- Responsive viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

### 2. Semantic HTML5 Landmarks (`pricing.html`)
- Page container `<main class="page-container">`.
- Section header:
  - Eyebrow tag: `<p class="eyebrow">FLEXIBLE PLANS FOR TEAMS</p>`.
  - Main heading: `<h1>Simple, transparent pricing</h1>`.
  - Subtitle paragraph `<p class="lead">`.
- Pricing card wrapper: `<article class="pricing-card featured">` or `<section class="pricing-card featured">`.
- Badge: `<span class="badge-featured">★ MOST POPULAR</span>`.
- Tier title & description: `<h2>Pro Developer Tier</h2>` and description paragraph.
- Pricing lockup:
  - Container `<div class="price-lockup">`.
  - Currency symbol and big number `<span class="price-amount">$29</span>`.
  - Frequency unit `<span class="price-period">/ month</span>`.
  - Small billing note `<p class="billing-note">Billed annually ($348/yr)</p>`.
- Feature checklist:
  - Label `<h3 class="features-label">WHAT'S INCLUDED:</h3>`.
  - List `<ul class="features-list">` with 5 semantic `<li>` items.
- Action button:
  - `<button type="button" class="btn-cta">Get Started with Pro</button>`.
- Trust note / guarantee: `<p class="guarantee-note">🔒 14-day free trial. No credit card required.</p>`.

### 3. CSS Architecture & Box Model (`pricing.css`)

#### A. Universal Reset & Foundation
```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #0f172a; /* Modern dark background or clean off-white */
  color: #f8fafc;
  line-height: 1.5;
  padding: 3rem 1rem;
}
```

#### B. The Featured Pricing Card
- `max-width: 460px; margin: 0 auto;` (centered).
- `background-color: #1e293b;` (elevated dark card) or `#ffffff` (if using light mode).
- `border: 2px solid #de3b3d;` or `#3b82f6;` (prominent colored border for featured tier).
- `border-radius: 16px;`
- `padding: 2.5rem 2rem;` (generous inner breathing room).
- `box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.4);` (gives depth).
- `position: relative;` (for badge positioning if desired).

#### C. The Featured Badge
- Centered at the top:
  - `display: inline-block;`
  - `background-color: #de3b3d;` (or vibrant accent).
  - `color: #ffffff;`
  - `font-size: 0.75rem;`
  - `font-weight: 700;`
  - `letter-spacing: 0.08em;`
  - `padding: 0.35rem 0.85rem;`
  - `border-radius: 9999px;`
  - `margin-bottom: 1.25rem;`

#### D. Pricing Lockup Typography
- Amount: `font-size: 3.25rem; font-weight: 800; color: #ffffff; line-height: 1;`.
- Period: `font-size: 1.125rem; color: #94a3b8; font-weight: 500;`.
- Billing note: `font-size: 0.875rem; color: #64748b; margin-top: 0.5rem;`.

#### E. Features Checklist Styling
- Remove default bullets: `list-style: none; padding: 0; margin: 2rem 0;`.
- Spacing between items: `margin-bottom: 0.85rem;`.
- Custom indicator: Use an inline checkmark icon or unicode `✓` styled with an accent green or sky blue color.

#### F. Interactive CTA Button (`.btn-cta`)
- `display: block; width: 100%;`
- `padding: 1rem;`
- `font-size: 1.05rem;`
- `font-weight: 700;`
- `border-radius: 10px;`
- `border: none;`
- `cursor: pointer;`
- `background-color: #de3b3d; color: #ffffff;`
- Smooth interaction: `transition: background-color 0.2s ease, transform 0.1s ease;`
- `:hover` state: slightly darker / brighter accent color.
- `:active` state: subtle transform press effect (`transform: scale(0.98);`).

---

## 🤖 Strategic AI Prompting for Homework 2

Test your understanding of layout and specificity by asking your AI tutor:

> *"I am building a pricing card. I want my `.btn-cta:hover` state to smoothly change background color, but it feels jumpy. Also, my checklist items are sticking to the left edge without breathing room. Look at my CSS snippet below and explain how padding and transitions work together to create polish, without writing the code for me."*

---

## 📊 Grading Rubric (100 Points Total)

| Criteria | Points | What Success Looks Like |
| :--- | :---: | :--- |
| **Semantic Structure** | 20 | Meaningful use of `<section>`, `<h1>`-`<h3>`, `<ul class="features-list">`, `<button>`. |
| **Box Model & Reset** | 25 | Zero layout breakage; proper `border-box` reset; clear padding inside card, margin outside. |
| **Typographic Hierarchy & Units** | 25 | High contrast price lockup, distinct `rem` sizing across badge, headings, and copy. |
| **Button States & Micro-interactions** | 20 | Clear `:hover` and `:active` styling on CTA button with smooth transitions. |
| **CSS Cleanliness & Best Practices** | 10 | Reusable classes, no `#id` selectors in CSS, clean indentation and formatting. |
