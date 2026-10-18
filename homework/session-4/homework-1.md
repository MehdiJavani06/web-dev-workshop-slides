# Homework 01: The Fluid Flexbox Storefront ("Aligned Card Architecture")

> **Deliverable Files:** `products.html` and `products.css`  
> **Topic:** Modern Flexbox Container/Item Architecture, Responsive Multi-Row Wrapping (`flex-wrap`), Fluid Child Sizing (`flex: 1 1 280px`), and the `margin-top: auto` Card Button Alignment Superpower  
> **Prerequisites:** Session 02 (HTML Semantics), Session 03 (Box Model & Specificity), Session 04 (Flexbox Mechanics)  
> **Submission:** Push both files to your GitHub repository in a folder named `session-04/homework-1/` before the start of Session 05.

---

## 🎯 The Mission

Welcome to the **Fluid Flexbox Storefront** project! 🛍️

In e-commerce engineering, card grids are the most common component on the web. However, beginner layouts suffer from two notorious defects:
1. **The Ragged Button Trap:** When one product card has a 1-line title and another has a 3-line title, the "Add to Cart" buttons sit at different vertical heights across the row. The page looks messy and amateurish.
2. **The Horizontal Scrollbar Blowout:** On mobile phones, fixed pixel widths force cards off the edge of the screen, producing an annoying horizontal scrollbar.

Your mission as a **Front-End Layout Architect** is to build `products.html` and `products.css`:
- A responsive store header with brand title on the left and item counter badge on the right using `justify-content: space-between`.
- A category filter bar using Flexbox with smooth gap spacing.
- A responsive multi-card product catalog that renders:
  - **1 column** on mobile phones (< 600px).
  - **2 columns** on tablets (600px – 900px).
  - **3 to 4 columns** on desktop displays (> 900px).
- Every card must have unequal text copy (simulating real product descriptions), yet every "Add to Cart" button must be pinned perfectly to the bottom baseline of each card using **`margin-top: auto`**!

---

## 📐 Visual Blueprint

```text
+---------------------------------------------------------------------------------+
| Browser Window (1200px Desktop): http://localhost:5173/products.html            |
|                                                                                 |
|  [ TECHCRAFT GEAR ]                                          ( 4 Items Online ) |
|  ------------------------------------------------------------------------------ |
|  [ All Products ]  [ Audio ]  [ Wearables ]  [ Photography ]  [ Workstations ]  |
|                                                                                 |
|  +--------------------+  +--------------------+  +--------------------+         |
|  | [Img: Headphones]  |  | [Img: Vintage Cam] |  | [Img: Smartwatch]  |         |
|  |                    |  |                    |  |                    |         |
|  | ★ BESTSELLER       |  | 📷 LIMITED EDITION |  | ⚡ NEW ARRIVAL     |         |
|  | Studio Monitor Pro |  | 35mm Rangefinder   |  | Apex Fitness Watch |         |
|  |                    |  |                    |  |                    |         |
|  | Ultra-low latency  |  | Handcrafted body   |  | Heart-rate & GPS.  |         |
|  | wireless cans with |  | with mechanical    |  |                    |         |
|  | 40h battery and    |  | shutter and dual   |  |                    |         |
|  | active ANC.        |  | lenses included.   |  |                    |         |
|  |                    |  |                    |  |                    |         |
|  | $249.00            |  | $589.00            |  | $179.00            |         |
|  |                    |  |                    |  |                    |         |
|  | [ Add to Cart ]    |  | [ Add to Cart ]    |  | [ Add to Cart ]    | <─── Aligned!
|  +--------------------+  +--------------------+  +--------------------+         |
|                                                                                 |
+---------------------------------------------------------------------------------+
```

---

## 🧱 Technical Requirements

### 1. Document & File Architecture
- Separate files: `products.html` and `products.css`.
- Standard HTML5 skeleton with `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- External stylesheet linked via `<link rel="stylesheet" href="products.css">`.
- Line 1 of `products.css` must include the Universal Reset:
  ```css
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ```

### 2. Semantic Markup (`products.html`)
- `<header class="store-header">`:
  - Brand title `<h1>TechCraft Gear</h1>`.
  - Item counter `<span class="badge-count">4 Products Available</span>`.
- `<nav class="filter-bar" aria-label="Product categories">`:
  - List of at least 4 category filter buttons or tags (`<button type="button" class="filter-pill active">All Products</button>`, etc.).
- `<main class="catalog-container">`:
  - Section wrapper `<section class="product-grid">`.
  - At least **4 `<article class="product-card">`** elements.
- Each `<article class="product-card">` must contain:
  1. Product visual: `<img src="..." alt="Descriptive product photo">` (use `https://picsum.photos/400/260?random=1`, `?random=2`, etc.).
  2. Content wrapper: `<div class="card-body">`:
     - Category badge: `<span class="badge-category">AUDIO</span>`.
     - Title: `<h3>...</h3>`.
     - Description: `<p class="product-desc">...</p>` (**Crucial:** give cards varying lengths—1 sentence, 3 sentences, 2 sentences—to test `margin-top: auto`!).
     - Price tag: `<span class="product-price">$249.00</span>`.
     - Action button: `<button type="button" class="btn-cart">Add to Cart</button>`.

### 3. Flexbox Styling Rules (`products.css`)

#### A. Header & Filter Bar
- `.store-header`:
  - `display: flex; justify-content: space-between; align-items: center;`.
  - Margin bottom and subtle bottom border.
- `.filter-bar`:
  - `display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 32px;`.
  - Filter pills styled with padding, border radius (`9999px`), and interactive `:hover` state.

#### B. The Product Grid Engine
- `.product-grid`:
  - `display: flex;`
  - `flex-wrap: wrap;`
  - `gap: 24px;`
  - No CSS Grid allowed! Master pure Flexbox wrapping.

#### C. The Product Card & Sticky Button Superpower
- `.product-card`:
  - `flex: 1 1 280px;` (Grow to fill remaining space, shrink if squeezed, minimum starting basis of 280px).
  - `display: flex; flex-direction: column;` (Turns the card into a flex column).
  - Background color `#ffffff`, border `1px solid #e2e8f0`, border radius `16px`, overflow `hidden`.
  - Subtle hover lift: `transition: transform 0.2s ease, box-shadow 0.2s ease;`.
  - `:hover` state: `transform: translateY(-4px); box-shadow: 0 12px 24px -6px rgba(0,0,0,0.1);`.
- Card Image:
  - `width: 100%; height: 200px; object-fit: cover;`.
- `.card-body`:
  - `padding: 20px;`
  - `display: flex; flex-direction: column; flex-grow: 1;` (Expands to absorb all empty space inside the card!).
- `.btn-cart`:
  - **`margin-top: auto;`** (The magic rule that pushes the button to the bottom, aligning all buttons across the row!).
  - Full width button with padding `12px`, border radius `8px`, background `#de3b3d`, color `#ffffff`, font weight `700`, cursor `pointer`.
  - Hover state: `background: #b91c1c;`.

---

## 🔍 Chrome DevTools Verification Checklist

Open `products.html` in Chrome and test with DevTools:

1. **Flexbox Badges:** Inspect `.product-grid` in the Elements tab. Click the small **`flex`** badge next to the element to reveal Chrome's live Flexbox overlay with dashed axis lines and gap markers!
2. **Resize Test:** Grab the corner of your browser window and drag it from 1400px wide down to 360px wide:
   - At desktop widths, observe cards sitting 3 or 4 per row.
   - At tablet widths (~750px), observe cards wrapping smoothly into 2 columns.
   - At mobile widths (< 500px), observe cards stacking into a clean 1-column layout without horizontal scrollbars.
3. **Button Baseline Check:** Look horizontally across the cards. Even though Card 2 has a long description and Card 3 has a short description, verify that all "Add to Cart" buttons share the exact same bottom margin!

---

## 🤖 Strategic Socratic AI Prompt

If you encounter alignment bugs, ask your AI tutor:

> *"I am building a responsive product card grid using CSS Flexbox.  
> My parent container has `display: flex` and `flex-wrap: wrap`. Each card has a different amount of text in its description paragraph.  
> Right now, the 'Add to Cart' buttons sit at jagged, unequal heights.  
> How does setting `display: flex; flex-direction: column; flex-grow: 1;` on the card body and `margin-top: auto;` on the button solve this problem? Explain using the spring metaphor."*

---

## 📊 Grading Rubric (100 Points Total)

| Criteria | Points | What Success Looks Like |
| :--- | :---: | :--- |
| **Document Architecture & Universal Reset** | 15 | Semantic HTML5 structure, responsive meta tag, and 3-line reset at line 1 of CSS. |
| **Store Header & Category Filter Flexbox** | 20 | Header aligned with `justify-content: space-between`, filter pills aligned with `gap` and wrapping. |
| **Fluid Card Grid (`flex-wrap` & `flex: 1 1 280px`)** | 25 | Cards wrap dynamically between 1, 2, and 3–4 columns without horizontal overflow. |
| **The `margin-top: auto` Button Alignment** | 25 | All "Add to Cart" buttons align along a clean horizontal baseline despite uneven text lengths. |
| **Visual Polish & Interactive States** | 15 | Card hover shadow lift, button hover color transitions, and clean typography. |
