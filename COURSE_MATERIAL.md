# Web Development Fundamentals in the AI Era
## Course Syllabus & Instructional Material (14 Sessions / 28 Hours)

---

## 1. Course Overview & Teaching Philosophy

### 1.1 The Dilemma of Modern Web Education
In the era of Generative AI, developers no longer spend their days hand-typing repetitive boilerplate. Senior engineers equipped with AI tools deliver at rates that outpace junior developers. Traditional web development curricula—which focus heavily on syntax memorization, manual boilerplate typing, and isolated coding drills (e.g., "build a to-do list from scratch")—leave students vulnerable:
1. Students become passive copy-pasters who cannot debug or evaluate AI output.
2. Students struggle with abstract syntax and syntax punctuation (curly braces vs. brackets, semicolons, quotes), leading to blank-canvas paralysis.
3. Language barriers exacerbate cognitive overload: students often spend more mental energy parsing English technical jargon than understanding computational logic.

### 1.2 The Core Resolution: "Understand First, Orchestrate Second"
This course does not choose between fundamentals and AI. Instead, it redefines the role of fundamentals:
> **Fundamentals are the evaluation filter that makes AI usable.**

A junior developer's market value is no longer typing speed. It is the ability to:
- **Read and audit code** for accessibility, security, and edge cases.
- **Formulate precise technical prompts** grounded in DOM and layout mechanics.
- **Inspect and validate behavior** using Browser DevTools rather than guessing.
- **Understand foundational data structures** (Objects and Arrays) to debug data flow.

```
+--------------------------------------------------------------------------+
|                        THE AI-ERA SKILL SHIFT                            |
+--------------------------------------------------------------------------+
|  TRADITIONAL FOCUS (OBSELETE)       |  AI-ERA FUNDAMENTALS (ESSENTIAL)   |
+-------------------------------------+------------------------------------+
|  Writing HTML syntax from scratch   |  Semantic HTML & Accessibility     |
|  Memorizing obscure CSS properties  |  Box Model & Flexbox Alignment     |
|  Typing manual loops & queries      |  Data Models (Objects/Arrays) & DOM|
|  Writing an app 0 to 1 manually     |  Code Auditing, DevTools & Debug   |
|  Terminal Git rebases & commands    |  Visual GUI Git & Project Hygiene  |
+--------------------------------------------------------------------------+
```

### 1.3 The Subtractive Curriculum Matrix
To make room for deep mental models, DevTools inspection, and code auditing within a 14-session semester, non-essential boilerplate and cognitive friction points are deliberately removed:

| Cut Completely (Cognitive Traps) | Keep & Reinforce (High-Leverage Fundamentals) | Rationale |
| :--- | :--- | :--- |
| **Manual HTML boilerplate memorization** (`<!DOCTYPE html>`, meta tags from memory) | **Parent-child hierarchy, Semantic landmarks** (`<header>`, `<nav>`, `<main>`, `<article>`, `<button>`) | Nobody types boilerplate by hand in production. Understanding DOM tree hierarchy is required to target elements and prevent layout bugs. |
| **Complex CSS & Floats** (floats, CSS keyframe animations, complex math) | **The Box Model & Flexbox 3-Property Rule** (`display: flex`, `justify-content`, `align-items`) | 85% of broken layouts stem from alignment and box model collisions. Modern layout engines solve what used to take hundreds of lines of fragile CSS. |
| **Terminal Git CLI complexity** (rebasing, detached HEAD, command-line cherry-picking) | **VS Code Source Control GUI & GitHub Web UI** (Stage, Commit, Sync, Issues) | Command-line Git mental models overwhelm beginners before they grasp files vs. memory. GUI allows version tracking without terminal panic. |
| **Advanced JS abstractions** (prototypes, closures, ES6 classes, complex regex) | **Objects, Arrays, simple functions, `addEventListener`, and `fetch`** | An Object is a labeled card; an Array is an ordered list. Every web app is just rendering data structures onto a visual screen. |

---

## 2. In-Class Tooling & The AI Socratic Tutor

### 2.1 The In-Class Socratic AI Tutor Prompt
Students are provided with a dedicated system prompt to configure in their AI assistant of choice (ChatGPT, Claude, or local LLMs). The assistant acts as a patient, plain-English tutor that builds understanding rather than writing complete answers.

```text
SYSTEM PROMPT: THE IN-CLASS WEB DEV TUTOR

You are a patient, encouraging teaching assistant for introductory Web Development.
Your target audience is beginner university students who are building their mental models
and may have developing English skills.

RULES:
1. NEVER write the complete solution or full code snippet for homework or lab problems.
2. Break down all explanations into plain, simple English with short sentences.
3. Always use concrete real-world metaphors (e.g., restaurant customer/server, contact cards, ice cube trays).
4. If a student pastes broken code or a syntax error:
   - State what the browser expected in 2 simple sentences.
   - Point out the exact line and character type (e.g., "Line 4 is missing a closing curly brace }").
   - Ask a guiding question that leads them to fix it themselves.
5. Emphasize "Code Reading": Explain what each line does step-by-step.
```

### 2.2 Student Prompting Protocol: From Vague Requests to Technical Specs
Students are trained to avoid "vague prompt requests" and instead formulate modular technical specifications:

```
[WEAK PROMPT]
"Make me a nice navigation bar for a website."
Result: Generates 80 lines of bloated, non-semantic CSS with unpredictable class names.

[TECHNICAL SPECIFICATION PROMPT]
"Generate a responsive horizontal navigation bar. 
Requirements:
1. Use semantic <nav> and <ul> tags.
2. Align links horizontally using Flexbox with equal space between them.
3. Include an accessible mobile toggle button with 'aria-expanded'.
4. Do not include external libraries or complex JavaScript."
Result: Clean, accessible, predictable code that the student can inspect and modify.
```

### 2.3 Scaffolding Mechanics: Beating "Blank Canvas Paralysis"
Whenever new syntax is introduced, students are never presented with an empty code editor. We use:
1. **Parsons Problems**: Code lines are provided out of order or with missing punctuation, and students arrange/complete them.
2. **Fill-in-the-Blank Skeletons**: Pre-built functional frames where students supply specific keys, values, or selectors.
3. **Physical / Visual Metaphors**:
   - **Array**: An *ice cube tray* (ordered slots numbered `0, 1, 2, 3...`).
   - **Object**: A *contact card* (labeled fields: `name: "Amina"`, `age: 20`).
   - **DOM Tree**: *Russian nesting dolls* (parent tags enclosing child tags).

---

## 3. Course Structure & Schedule Overview

- **Total Sessions**: 14 Sessions (1 Session per week, 2 Hours per Session).
- **Session Format**:
  - **Part 1 (45–50 min)**: Core Concept, Mental Models & Live Code Walkthrough.
  - **Part 2 (10 min)**: Rapid Syntax / Concept Drill (Fill-in-the-blank & Parsons Problem).
  - **Part 3 (50–55 min)**: Guided Hands-on Lab & DevTools Exploration.
  - **Part 4 (10 min)**: AI Tutor Challenge & Wrap-up Q&A.

```
+-------------------------------------------------------------------------------+
|                        14-SESSION ROADMAP OVERVIEW                            |
+-------------------------------------------------------------------------------+
| PHASE 1: WEB ARCHITECTURE & VISUAL STRUCTURE (Sessions 1–5)                   |
|   Session 1: How the Web Works: Internet, DNS, HTTP, Client-Server & Browsers |
|   Session 2: Semantic HTML5 & The DOM Tree Architecture                       |
|   Session 3: The CSS Box Model & Cascading Specificity                        |
|   Session 4: Modern Layout Engine: Flexbox (The 3-Property Rule)              |
|   Session 5: Responsive Components & Accessible Forms                         |
+-------------------------------------------------------------------------------+
| PHASE 2: JAVASCRIPT FUNDAMENTALS & DYNAMIC ACTIONS (Sessions 6–10)            |
|   Session 6: JavaScript Core Mental Model & Browser Memory                    |
|   Session 7: Essential Data Structures: Objects & Arrays                      |
|   Session 8: The Bridge: DOM Querying & Dynamic Updates                       |
|   Session 9: Event-Driven Programming: Clicks, Inputs & State                 |
|   Session 10: Array Iteration & Dynamic Card Rendering                        |
+-------------------------------------------------------------------------------+
| PHASE 3: SYSTEMS INTEGRATION, DEVTOOLS & AI AUDITING (Sessions 11–14)         |
|   Session 11: Asynchronous Web & Data Fetching (REST APIs & JSON)            |
|   Session 12: Browser DevTools Mastery & "Find the Bug" Code Audit            |
|   Session 13: Prompt Decomposition, GitHub GUI & Project Assembly             |
|   Session 14: Project Showcase, Live Console Interrogation & Code Defense     |
+-------------------------------------------------------------------------------+
```

---

## 4. Session-by-Session Instructional Guides

---

### Session 1: How the Web Works: Internet, DNS, HTTP, Client-Server & Browsers

#### 1. Objectives & Time Allocation (2 Hours)
- Understand the physical and logical layers of the web (cables, IP, DNS, HTTP).
- Master the Client-Server model using the Restaurant Metaphor.
- Differentiate between `file:///` and `http://localhost`.
- Configure VS Code and Live Server.
- Use Browser DevTools (Network tab) to inspect HTTP status codes and payloads.

#### 2. Concept & Mental Models (45 min)

##### The Internet vs. The Web
- **The Internet**: The global network of connected computers, undersea fiber-optic cables, and routers. It is the physical road network.
- **The Web (World Wide Web)**: The service built on top of the internet that shares pages, documents, images, and videos via HTTP. It is the delivery trucks driving on the road.

##### The Client-Server Model: The Restaurant Metaphor
```
+------------------+         HTTP Request (Menu Order)        +------------------+
|      CLIENT      | ---------------------------------------> |      SERVER      |
| (Customer at     |                                          | (The Kitchen     |
|   Restaurant)    | <--------------------------------------- |   Data Center)   |
+------------------+         HTTP Response (Food / HTML)      +------------------+
```
- **Client**: The web browser (Chrome, Firefox, Safari) asking for resources.
- **Server**: A computer connected to the internet 24/7 storing website files.
- **Request**: The message the browser sends asking for a specific file (`GET /index.html`).
- **Response**: The package returned by the server, containing a **Status Code** and **Payload** (HTML, CSS, images).

##### DNS: The Internet's Phonebook
- Computers locate each other using **IP Addresses** (e.g., `142.250.190.46`).
- Humans cannot remember numeric strings for every website.
- **DNS (Domain Name System)** translates human names into IP addresses:
  ```
  User types: "example.com"
  Browser asks DNS: "What IP address is example.com?"
  DNS replies: "93.184.216.34"
  Browser contacts: 93.184.216.34
  ```

##### HTTP Status Codes: The 3 Big Numbers
- **200 OK**: The server found what was requested and returned it successfully.
- **404 Not Found**: The client asked for a URL that does not exist on the server.
- **500 Server Error**: The server encountered an error and crashed while preparing the response.

##### The Browser Rendering Engine: How Code Becomes Pixels
When the browser receives an HTML file:
1. **HTML Parser**: Reads text tags and constructs the **DOM (Document Object Model)** tree in memory.
2. **CSS Parser**: Reads style rules and constructs the **CSSOM (CSS Object Model)**.
3. **Render Tree & Paint**: Combines DOM and CSSOM to calculate pixel positions and paint them on screen.

##### Why `file:///` is not `http://localhost`
- Double-clicking an HTML file loads it with the `file:///` protocol (direct file access).
- Browsers enforce strict security: `file:///` blocks dynamic script fetching, modern web APIs, and local requests.
- **Live Server** runs a lightweight local HTTP server (`http://localhost:5500`), creating an authentic client-server simulation.

#### 3. 10-Minute Syntax & Concept Drill
Fill in the blanks:
```text
1. When you type a web address, the __________ translates the domain name into an IP address.
2. In the client-server model, the web browser acts as the __________, while the remote computer storing files acts as the __________.
3. An HTTP status code of __________ means the page was successfully found, while __________ means the file was missing.
4. The browser reads HTML text and creates an in-memory tree called the __________.
```
*(Answers: 1. DNS; 2. Client, Server; 3. 200, 404; 4. DOM)*

#### 4. Hands-on Lab: DevTools Network Explorer & First Web Page (55 min)
1. **Setup**:
   - Open VS Code. Install the **Live Server** extension (by Ritwick Dey).
   - Create a new project folder `web-foundations`.
2. **Network Tab Investigation**:
   - Open Google Chrome. Press `F12` (or `Cmd+Option+I`) to open Developer Tools.
   - Click the **Network** tab. Check the **Disable cache** box.
   - Navigate to `https://example.com`.
   - Observe the first request:
     - Name: `example.com`
     - Status: `200 OK`
     - Type: `document`
     - Remote Address: (Inspect the IP address provided by DNS)
3. **Build and Serve Your First Page**:
   - In VS Code, create `index.html`:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>How The Web Works</title>
   </head>
   <body>
     <h1>Hello, Web Architecture!</h1>
     <p>This page is served by a local HTTP server.</p>
   </body>
   </html>
   ```
   - Right-click `index.html` -> **Open with Live Server**.
   - Note the URL: `http://127.0.0.1:5500/index.html`.
   - In DevTools Network tab, reload and observe your own local server serving `index.html` with status `200 OK`.

#### 5. AI Tutor Challenge (10 min)
Paste this into your Socratic AI Tutor:
> *"I noticed that when I open a file directly it says `file:///` but with Live Server it says `http://127.0.0.1:5500`. Using the restaurant metaphor, explain why modern web development requires an HTTP server instead of opening the file directly."*

---

### Session 2: Semantic HTML5, DOM Tree Architecture & Strategic AI

#### 1. Objectives & Time Allocation (2 Hours)
- Understand HTML syntax, tag anatomy, attributes (`href`, `src`, `alt`), and document skeleton (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
- Understand the DOM tree as a parent-child hierarchy (Russian nesting dolls) and visualize element flow (Block vs. Inline).
- Replace non-semantic `<div>` soup with landmark HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Learn the **4-Stage AI Learning Curve** for beginners and adopt the **3-Point AI HTML Audit** to critically evaluate AI-generated code.
- Inspect and navigate the live DOM tree in Browser DevTools Elements tab using keyboard navigation.

#### 2. Concept & Mental Models (45 min)

##### 1. The Anatomy of an HTML Document & Syntax
HTML (HyperText Markup Language) defines the structure and meaning of web content. It is a document markup language, not a programming language:
- **Tags & Elements**: `<p class="lead">Hello World</p>`
  - `<p>` is the opening tag.
  - `class="lead"` is an attribute (name-value pair modifying the element).
  - `Hello World` is the text content.
  - `</p>` is the closing tag.
- **Void (Self-Closing) Elements**: Elements that cannot contain child content do not require closing tags in HTML5: `<img>`, `<input>`, `<br>`, `<meta>`.
- **Head vs. Body Boundary**:
  - `<head>`: Invisible metadata, character encoding (`<meta charset="UTF-8">`), responsive viewport configuration, external stylesheets, and document `<title>`.
  - `<body>`: Everything rendered visually on screen.

##### 2. The Russian Nesting Dolls Metaphor (DOM Hierarchy)
HTML elements are containers that sit inside other containers:
```
+-----------------------------------------------------------+
| <body> (Parent)                                           |
|   +-----------------------------------------------------+ |
|   | <header> (Child of body, Parent of h1)              | |
|   |   <h1>The Web Academy</h1>                          | |
|   +-----------------------------------------------------+ |
|   +-----------------------------------------------------+ |
|   | <main> (Child of body)                              | |
|   |   +-----------------------------------------------+ | |
|   |   | <article> (Child of main)                     | | |
|   |   |   <h2>Article Title</h2>                      | | |
|   |   |   <p>Paragraph text inside article.</p>       | | |
|   |   +-----------------------------------------------+ | |
|   +-----------------------------------------------------+ |
+-----------------------------------------------------------+
```
If you close a parent tag before closing its child tag, the browser attempts error correction automatically, producing unpredictable rendering anomalies and layout bugs.

##### 3. Block vs. Inline Flow
- **Block Elements** (`<h1>`–`<h6>`, `<p>`, `<div>`, `<header>`, `<article>`): Start on a new line and stretch horizontally to fill 100% of the parent width.
- **Inline Elements** (`<a>`, `<span>`, `<strong>`, `<em>`): Flow alongside neighboring text, taking only the width required by their content.
- *Rule of Thumb*: Never nest a block-level container inside an inline element unless explicitly structuring an accessible link wrapper in HTML5.

##### 4. Core Semantic Landmarks to Master
- `<header>`: Introductory branding, navigation container, or site banner.
- `<nav>`: Primary navigation menus containing structured lists (`<ul>` / `<li>`) of hyperlinks.
- `<main>`: The central, unique content of the page (strictly **one** `<main>` per document).
- `<section>`: A thematic grouping of content, typically introduced with a heading (`<h2>`–`<h6>`).
- `<article>`: A self-contained, independently distributable composition (e.g., product card, blog post, review).
- `<footer>`: Closing section containing copyright, legal disclosures, and supplementary links.
- `<aside>`: Tangentially related content (sidebars, callout boxes, related article lists).

##### 5. The Golden Interaction Rule: `<button>` vs. `<a>`
- Use `<a>` (anchor) when **navigating to a new location or URL** (`href="/profile"`).
- Use `<button>` when **triggering an in-page action** (opening a modal, submitting a form, toggling a menu).
- *Why this matters*: Screen readers announce buttons as actionable controls. Buttons inherently support keyboard activation via `Enter` and `Spacebar`, whereas `<div onclick>` is completely invisible and unreachable to keyboard-only and assistive-technology users.

##### 6. HTML Forms & The `<label>` Accessibility Contract
Forms are the primary mechanism for collecting user input and transmitting data to web servers:
- **The `<form>` Container**:
  - Encapsulates input controls and defines where data goes (`action="/api/register"`) and how (`method="POST"` or `GET`).
  - Supports native `Enter`-key form submission when focused on any input field.
- **The `<label for="...">` Contract**:
  - Always pair each `<input id="x">` with a `<label for="x">`.
  - *Usability*: Clicking the label text automatically focuses the input field or toggles a checkbox/radio button (drastically expands touch targets for mobile users).
  - *Accessibility*: Assistive screen readers announce the label text when the user tabs into the field.
  - *Anti-Pattern*: Never substitute `placeholder="..."` for `<label>`. Placeholders disappear as soon as the user types, suffer from low contrast, and are frequently skipped by screen readers.
- **Core Input Types**:
  - Textual: `<input type="text">`, `<input type="email">`, `<input type="password">`, `<textarea>`
  - Choices: `<input type="checkbox">`, `<input type="radio">` (grouped by shared `name`), `<select>` with `<option>`
  - Submit Control: `<button type="submit">Submit</button>` vs. `<button type="button">Action</button>`

##### 7. HTML Tables & Tabular Data Architecture
Tables are designed specifically to display two-dimensional tabular data (schedules, matrices, financial rows, comparisons):
- **`<table>`**: The root container for structured tabular datasets.
- **`<caption>`**: The accessible title of the table, placed as the immediate first child. Read aloud by screen readers so users understand the table's purpose before navigating rows.
- **`<thead>`, `<tbody>`, `<tfoot>`**: Structural segment containers separating header columns, data rows, and summary totals.
- **`<tr>`**: Table row.
- **`<th>` (Header Cell)**: Column or row header. Must include `scope="col"` (for column headers) or `scope="row"` (for row headers) so assistive tech can associate data cells with headers.
- **`<td>` (Data Cell)**: Standard data cell.
- **The Cardinal Rule**: *Tables are strictly for tabular data, NEVER for layout!* Using tables for page layout breaks mobile responsiveness, destroys accessibility, and creates unmaintainable HTML.

##### 8. The 4-Stage Beginner AI Curve
To avoid blank-canvas paralysis and avoid producing unmaintainable code, students learn to use AI along a disciplined 4-stage adoption curve:
```
[Stage 1: AI as Socratic Tutor]
Ask AI to explain concepts, demystify errors, and quiz you. Do NOT ask it to write the lab.

[Stage 2: Mental Model First, Generation Second]
Never generate code you cannot mentally parse line-by-line. If you can't trace the DOM tree,
you cannot maintain the project.

[Stage 3: The 3-Point AI Output Audit]
Every time an AI model outputs HTML, run the 3-Point Audit before copying it into your project.

[Stage 4: Technical Specification Prompting]
Prompt using precise semantic tags, attribute constraints, and accessibility rules rather than vague wishes.
```

##### 9. The 3-Point AI HTML Audit Checklist
AI models trained on legacy web code frequently generate obsolete patterns. Before accepting AI-generated HTML, verify:
1. **The Landmark Check**: Did the AI generate generic `<div class="...">` containers instead of `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, or `<form>`?
2. **The Interaction Check**: Did the AI output `<div onclick="...">` or `<a href="#">` for an action, instead of a semantic `<button type="button">` or `<button type="submit">`?
3. **The Attribute Check**: Did the AI omit `alt` attributes on `<img>` tags or fail to pair form inputs with explicit `<label for="...">` tags?

#### 3. 10-Minute Syntax & Concept Drills
- **Drill A (Parsons Problem: Fix the Broken Nesting)**:
  ```html
  <!-- Given broken snippet: -->
  <main>
    <article>
      <h2>Understanding the DOM</h2>
      <p>The DOM is an object tree.
    </main>
  </article>
  ```
  *(Solution: Close `<p>` with `</p>`, then `</article>`, then `</main>`)*.
- **Drill B (AI Code Smell Spotting)**:
  Identify the 3 fatal flaws in this AI snippet:
  `<div class="btn" onclick="save()">Save</div>`
  *(Flaws: 1. Non-semantic div, 2. No keyboard accessibility [no Enter/Space trigger], 3. Missing `type="button"` and ARIA role)*.

#### 4. Hands-on Lab: Refactoring "Div Soup" into Semantic HTML5 (55 min)

##### 4.1 Learning Example: Partnering with AI to Refactor (10 min)
Before students begin their independent refactoring, study this step-by-step case study modeling the professional AI workflow:
1. **The Scenario (Flawed Legacy Component)**:
   Notice this typical unsemantic newsletter widget:
   ```html
   <div class="newsletter-card">
     <div class="heading">Subscribe to updates</div>
     <div class="input-row">
       <input placeholder="Your email here">
     </div>
     <div class="btn" onclick="send()">Subscribe</div>
   </div>
   ```
2. **The Technical Specification Prompt**:
   How a developer prompts AI with architectural constraints:
   ```
   "Refactor this legacy component into accessible Semantic HTML5:
   1. Wrap in a <form> with a <button type="submit">.
   2. Pair the input with an explicit <label for="email">.
   3. Ensure it passes Tab keyboard navigation.
   Explain the 3 main improvements you made."
   ```
3. **The Live 60-Second Audit**:
   Critique the AI output line-by-line:
   - Verify the `<form>` wrapper and `<button type="submit">`.
   - Confirm that `<label for="email">` matches `<input id="email">`.
   - Test clicking the label to verify that the text box gains focus automatically!
4. **DevTools Verification**:
   Open Chrome DevTools, navigate the DOM tree, and verify the Accessibility tree.

##### 4.2 Student Hands-on Challenge: Div Soup Surgery (45 min)
1. In your project workspace, create `semantic.html`.
2. Inspect this typical AI-generated code containing zero semantic meaning:
```html
<div class="top-bar">
  <div class="site-title">Student Portal</div>
  <div class="links">
    <span onclick="goTo('/')">Home</span>
    <span onclick="goTo('/courses')">Courses</span>
  </div>
</div>
<div class="content">
  <div class="card">
    <div class="card-img"><img src="profile.jpg"></div>
    <div class="card-title">Introduction to Web</div>
    <div class="card-desc">Learn HTML, CSS, and JS fundamentals.</div>
    <div class="btn" onclick="enroll()">Enroll Now</div>
  </div>
</div>
```
3. Refactor the code into accessible, semantic HTML5:
   - Convert `.top-bar` to `<header>`.
   - Convert `.links` to `<nav>` with `<ul>` and `<li>` containing `<a href="...">`.
   - Convert `.content` to `<main>`.
   - Convert `.card` to `<article>`.
   - Add descriptive `alt` attributes to images (e.g., `alt="Course instructor profile avatar"`).
   - Convert `.btn` to a real `<button type="button">`.
4. Open the page in Chrome, open **DevTools Elements tab**, and navigate the DOM tree using arrow keys (`Left`/`Right` to collapse/expand nodes).
5. Open the **Accessibility** pane in Chrome DevTools Elements tab to verify that landmarks and buttons expose correct ARIA roles.

#### 5. AI Tutor Challenge & Reflection (10 min)
Prompt your AI tutor using the Socratic prompt:
> *"Why does a screen reader or a keyboard-only user struggle when a developer uses `<div onclick="...">` instead of `<button>`? Explain in 3 simple sentences using the doorman metaphor."*

#### 6. Homework 1: The Accessible Event Showcase Card
Build a standalone HTML document (`event.html`) representing an upcoming tech conference, workshop, or concert:
1. **Document Skeleton**:
   - Proper `<!DOCTYPE html>`, `<html lang="en">`, `<head>` with UTF-8 charset, responsive viewport `<meta>`, and descriptive `<title>`.
2. **Semantic Header & Navigation**:
   - `<header>` with site/event name (`<h1>` or `<h2>`) and `<nav>` with an unordered list (`<ul>`) of links (`<a href>`) to "Schedule", "Speakers", and "Venue".
3. **Core Landmark & Event Card**:
   - `<main>` container enclosing an `<article class="event-card">`.
   - Event poster image (`<img>`) with a descriptive `alt` attribute.
   - Event title (`<h2>`), date/time paragraph (`<p>`), and venue description.
   - A real `<button type="button">` for "Register Now / RSVP" (no fake `<div onclick>`!).
4. **Footer**:
   - `<footer>` with copyright information and an email contact link (`<a href="mailto:...">`).
5. **Pragmatic AI Task**:
   - Prompt your AI assistant to generate 3 realistic workshop schedule items using the Spec Prompt format.
   - Run the 3-Point Audit on the AI response: inspect whether it used `<li>` or generic `<div>` tags, fix any flaws, and embed the clean HTML into your file.
   - **Verification**: Open `event.html` in Chrome, press `Tab` to verify keyboard focus reaches all links and the button, and test pressing `Enter`/`Space` on the button.

#### 7. Homework 2: Conference Registration & Schedule Portal (portal.html)
Create a single HTML document named `portal.html`. Your mission is to build a complete developer conference portal that integrates an accessible user registration form and a structured schedule and pricing table.

##### 1. Project Requirements & Deliverables

**Part A: The Interactive Registration Form (`<form>`)**:
- Encapsulated in a semantic `<form action="/register" method="POST">`.
- **Personal Details**:
  - Full Name: `<input type="text" id="full-name" name="name" required>` paired with an explicit `<label for="full-name">`.
  - Email Address: `<input type="email" id="user-email" name="email" required>` paired with `<label for="user-email">`.
- **Ticket / Track Selection**:
  - Workshop Track: `<select id="track-select" name="track">` with multiple `<option>` elements (e.g. Frontend Foundations, Full-Stack Mastery, AI Engineering).
  - Attendance Mode: A pair of radio buttons (`<input type="radio" name="mode">`) for "In-Person Attendance" and "Virtual Live Stream".
- **Special Requirements**:
  - Accessibility & Dietary Notes: `<textarea id="notes" name="notes">` with paired `<label for="notes">`.
- **Mandatory Consent & Submission**:
  - Code of Conduct agreement: `<label for="terms"><input type="checkbox" id="terms" required> I agree to the code of conduct</label>`.
  - Real submit button: `<button type="submit">Complete Registration</button>`.

**Part B: The Workshop Schedule & Pricing Table (`<table>`)**:
- A semantic data table displaying the event matrix:
  - Accessible `<caption>Workshop Schedule & Track Pricing Matrix</caption>`.
  - `<thead>` defining column headers with `<th scope="col">Time</th>`, `<th scope="col">Session Topic</th>`, `<th scope="col">Room</th>`, `<th scope="col">Instructor</th>`, and `<th scope="col">Pricing</th>`.
  - `<tbody>` containing at least 4 session rows (`<tr>`), using `<th scope="row">` for time slots and `<td>` for cell data.
  - `<tfoot>` summarizing total workshop hours and perks (e.g., `<td colspan="5">All in-person tickets include breakfast and workshop materials</td>`).

##### 2. Pragmatic AI Workflow for Homework 2
1. **Mock Data Generation Prompt**:
   Interrogate your AI assistant to produce the dataset for your table:
   > *"Generate an accessible HTML5 table for a 4-session tech workshop. Columns: Time, Topic, Room, Instructor, and Price. Include a <caption>, <thead>, <tbody>, <tfoot>, and proper <th scope='col'> and <th scope='row'> attributes. Do not use generic divs."*
2. **The 60-Second Code Audit**:
   Inspect the AI response before adding it to `portal.html`:
   - Did the AI include `<caption>`?
   - Did it correctly assign `scope="col"` to column headers?
   - Did it avoid using layout `<div>` containers inside `<table>`?
3. **Form Crafting & Browser Verification**:
   Hand-code the `<form>` section, open `portal.html` in Chrome, and test:
   - Click each `<label>` text on screen: verify that the corresponding input gains focus or toggles.
   - Press `Tab` repeatedly to ensure logical keyboard navigation order throughout the page.

---

### Session 3: CSS Foundations, The Box Model & Visual Architecture

#### 1. Objectives & Time Allocation (2 Hours)
- Understand the Separation of Concerns: Why HTML provides structure and CSS provides presentation.
- Master CSS Syntax: Selectors, declarations, properties, and values.
- Compare the 3 Stylesheet Locations: Inline (`style=""`), Internal (`<style>`), and External (`<link>`).
- Demystify CSS Specificity (Tags vs. Classes vs. IDs) using the Trophy Hierarchy.
- Style core visual properties: Typography (`font-family`, `font-size`, `font-weight`, `line-height`, `color`), backgrounds, and borders.
- Master CSS Measurement Units: Absolute (`px`) vs Relative (`rem`, `em`, `%`, `vh`, `vw`).
- Master the 4 layers of the Box Model: Content, Padding, Border, Margin.
- Understand `box-sizing: border-box` and why layouts break without the Universal Reset.
- Inspect and debug layouts live using Chrome DevTools Styles & Box Model tabs.
- Complete two production-grade homework assignments combining HTML5 semantics and CSS styling.

#### 2. Concept & Mental Models (45 min)

##### 1. The Separation of Concerns: Skeleton vs. Clothing
HTML provides semantic meaning and document structure—the bones and blueprint of a house.
CSS (*Cascading Style Sheets*) provides the aesthetic layer—the interior paint, wallpaper, lighting, furniture spacing, and tailoring.
Without CSS, all HTML renders with raw browser default styles: black Times New Roman, 100% width, zero margins, unstyled blue underlined links.
Separating structure from presentation allows:
- Redesigning an entire website by editing a single `.css` file.
- Serving different layouts (mobile, tablet, desktop, print) for the exact same HTML.
- Keeping HTML accessible, clean, and machine-readable.

##### 2. CSS Syntax & Rule Anatomy
A CSS document consists of a list of rules:
```css
selector {
  property: value;
  property: value;
}
```
- **Selector**: Points to the HTML element(s) you want to style (e.g., `h1`, `.card`, `#hero`).
- **Declaration Block**: Enclosed in curly braces `{ ... }`.
- **Declaration**: A single styling instruction (`property: value;`).
- **Property**: The feature you are changing (e.g., `color`, `font-size`, `margin`).
- **Value**: How you want that feature configured (e.g., `#2563eb`, `1.5rem`, `24px`).
- **Semicolon (`;`)**: **Mandatory** at the end of each declaration. Omitting a semicolon breaks all subsequent rules in that block!

##### 3. The 3 Stylesheet Locations: Where Does CSS Live?
There are three ways to apply CSS to HTML:

| Location | Syntax | Best For | Production Verdict |
| :--- | :--- | :--- | :--- |
| **Inline Styles** | `<p style="color: red;">` | Quick debugging, email HTML, dynamic JS values | ❌ **Avoid**: Impossible to maintain, high specificity trap |
| **Internal Styles** | `<style>` in `<head>` | Single-page standalone demos, quick prototypes | ⚠️ **Use sparingly**: Styles can't be shared across pages |
| **External Stylesheet** | `<link rel="stylesheet" href="style.css">` | All real-world web applications | ✅ **Standard**: Cached by browser, DRY, clean separation |

**The Professional `<link>` Contract:**
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <!-- Connects external CSS to HTML -->
  <link rel="stylesheet" href="style.css">
</head>
```

##### 4. Targeting Elements: Tag vs. Class vs. ID
- **Tag / Element Selector** (`p`, `h1`, `button`):
  Targets every occurrence of that tag globally. Use sparingly for base document resets.
- **Class Selector** (`.card`, `.btn-primary`, `.badge`):
  Begins with a dot `.`. Reusable across multiple elements. **The primary workhorse of professional web development.**
- **ID Selector** (`#header`, `#submit-button`):
  Begins with a hash `#`. Must be unique to a single element per page. **Avoid in CSS**—it creates specificity lock-in that is nearly impossible to override.

##### 5. Cascading Specificity Without Mathematics (The Trophy Hierarchy)
When two conflicting CSS rules target the same element, the browser needs a way to decide which one wins.
Instead of memorizing complex 4-digit math, use the **Trophy Hierarchy**:

```
[Level 4: Inline Style] (style="...") ──> The Nuclear Option (Overrides almost everything)
        ▲
[Level 3: ID Selector] (#header)      ──> Heavyweight Champion (Overrides classes)
        ▲
[Level 2: Class / Attribute] (.card)   ──> Middleweight (Standard workhorse)
        ▲
[Level 1: Tag Selector] (p, h1, div)   ──> Lightweight (Weakest baseline)
```
- If specificity is equal, **the rule written lower in the CSS file wins** (The Cascade).
- If one rule is more specific, it wins regardless of source order!

##### 6. Essential Typography & Color Styling
- **Colors**:
  - Hex codes: `#2563eb` (standard 6-character hex).
  - RGB / RGBA: `rgba(37, 99, 235, 0.15)` (ideal for soft tints and transparent overlays).
- **Typography**:
  - `font-family`: Comma-separated font stack with fallbacks (e.g. `system-ui, -apple-system, sans-serif`).
  - `font-size`: Text scale (e.g. `1.125rem`, `2rem`).
  - `font-weight`: `400` (normal), `600` (semibold), `700` (bold).
  - `line-height`: Vertical distance between lines. **Golden Rule**: Use unitless numbers between `1.4` and `1.6` for readable body copy.
  - `text-align`: `left`, `center`, `right`.
- **Backgrounds & Borders**:
  - `background-color`: Fills the content and padding area.
  - `border`: Shorthand: `width style color` (e.g. `border: 1px solid #e2e8f0;`).
  - `border-radius`: Rounded corners (e.g. `8px` for subtle cards, `9999px` for pill badges).

##### 7. CSS Measurement Units: Absolute vs. Relative
Screens come in all sizes—from 320px mobile phones to 4K monitors. Understanding units is essential for responsive, accessible design:

| Unit | Type | What It's Based On | Best Used For |
| :--- | :--- | :--- | :--- |
| **`px`** | Absolute | 1 physical screen pixel | Borders (`1px solid`), subtle shadows, hairline dividers |
| **`rem`** | Relative | Root font size of `<html>` (default: 16px) | **Everything text and spacing!** `font-size`, `padding`, `margin` |
| **`em`** | Relative | Font size of the *immediate parent* element | Badges or buttons where padding scales proportionally with icon/text |
| **`%`** | Relative | Size of the *parent container* | Layout widths (`width: 50%`, `max-width: 100%`) |
| **`vw` / `vh`** | Relative | 1% of the browser Viewport Width / Height | Hero section heights (`min-height: 80vh`), full-bleed banners |

**Why `rem` is the Modern Standard:**
If a visually impaired user increases their browser default font size to 24px, a site built with `rem` will scale cleanly and remain accessible. A site hardcoded in `px` will ignore user settings and stay tiny.

##### 8. The Postal Box Metaphor (The Box Model)
Every single HTML element on a webpage is rendered as a rectangular cardboard shipping box:
```
+-------------------------------------------------------+
| MARGIN (Clear space outside the box / neighbor buffer) |
|   +-------------------------------------------------+ |
|   | BORDER (The cardboard package wall)             | |
|   |   +-------------------------------------------+ | |
|   |   | PADDING (Bubble wrap protecting the item) | | |
|   |   |   +-------------------------------------+ | | |
|   |   |   | CONTENT (The actual item: text/img) | | | |
|   |   |   +-------------------------------------+ | | |
|   |   +-------------------------------------------+ | |
|   +-------------------------------------------------+ |
+-------------------------------------------------------+
```
- **Content**: The inner text, icon, or image.
- **Padding**: Inner breathing room between content and border. **Padding adopts the element's background color!**
- **Border**: The outer frame of the box.
- **Margin**: The invisible buffer separating this box from surrounding boxes. Always transparent.

##### 9. The `box-sizing: border-box` Rescue & The Universal Reset
By default in CSS (`box-sizing: content-box`), if you define `width: 300px` and add `padding: 20px`, the browser calculates:
$$\text{Total Width} = 300\text{px} + 20\text{px} + 20\text{px} = 340\text{px}$$
This unexpected expansion breaks multi-column layouts and forces boxes onto new lines.
With `box-sizing: border-box`, `width: 300px` includes the padding and border:
$$\text{Total Width} = 300\text{px (content shrinks to 260px)}$$

**The Universal Reset (Line 1 of every modern stylesheet):**
```css
/* Universal reset applied to every project */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

##### 10. Margin Collapsing Explained Simply
When two vertical block elements touch (e.g. paragraph with `margin-bottom: 20px` followed by another paragraph with `margin-top: 15px`), their margins **collapse** into the single largest value ($20\text{px}$), rather than adding up to $35\text{px}$.
This is intentional browser behavior to keep paragraphs from spacing too far apart.

#### 3. 10-Minute Syntax & Concept Drill
Fill in the blanks and diagnose the issues:

```css
/* Drill 1: Box Model Dimensions
   Given: width: 200px, padding: 15px, border: 2px solid black.
   Under border-box, what is the total rendered width?
   Answer: ________ */

/* Drill 2: Selector Specificity
   Which rule turns the button text white? */
button { color: red; }
.btn { color: green; }
#submit { color: white; }
/* Answer: ________ */

/* Drill 3: Spacing Shorthand
   margin: 10px 20px;
   Top/Bottom = ________, Left/Right = ________ */
```
*(Answers: 200px; #submit (ID has highest specificity); Top/Bottom = 10px, Left/Right = 20px)*

#### 4. Hands-on Lab: The Extreme CSS Makeover (35 min)

##### Starter HTML Code (`event.html`):
Students create `event.html` and `style.css`, linked via `<link rel="stylesheet" href="style.css">`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Showcase Makeover</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <article class="event-card">
    <span class="badge">WORKSHOP</span>
    <h2>Web Architecture 2026</h2>
    <p class="meta">📅 Saturday, Oct 24 • 10:00 AM</p>
    <p class="desc">
      Master modern CSS layout engines, box model mechanics,
      and responsive typography tokens from the ground up.
    </p>
    <button type="button" class="btn-register">
      Register Now • Free
    </button>
  </article>
</body>
</html>
```

##### Sprint Breakdown:
1. **Sprint 1: Universal Reset & Base Typography (8 min)**
   - Add the 3-line reset at line 1 of `style.css`:
     `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`
   - Set `body` to `font-family: system-ui, sans-serif; background-color: #f1f5f9; color: #1e293b; line-height: 1.6; padding: 2rem;`.
2. **Sprint 2: Card Box Geometry & Spacing (15 min)**
   - Target `.event-card`: `max-width: 420px; margin: 40px auto; background-color: #ffffff; padding: 24px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.08);`.
   - Target `.badge`: `display: inline-block; padding: 4px 12px; border-radius: 9999px; background-color: rgba(222, 59, 61, 0.1); color: #de3b3d; font-size: 0.75rem; font-weight: 700; margin-bottom: 12px;`.
   - Set `.event-card h2`: `font-size: 1.5rem; margin-bottom: 8px; color: #0f172a;`.
   - Set `.meta`: `color: #64748b; font-size: 0.9rem; margin-bottom: 14px;`.
   - Set `.desc`: `color: #475569; font-size: 0.95rem; margin-bottom: 20px;`.
3. **Sprint 3: Interactive CTA Button & Hover Polish (12 min)**
   - Target `.btn-register`: `display: block; width: 100%; padding: 12px; border-radius: 8px; background-color: #de3b3d; color: #ffffff; border: none; font-size: 1rem; font-weight: 700; cursor: pointer; transition: background-color 0.2s ease, transform 0.1s ease;`.
   - Add `.btn-register:hover`: `background-color: #b91c1c; transform: translateY(-1px);`.
   - Add `.btn-register:active`: `transform: translateY(0);`.

##### Visual Blueprint (Expected Target Output):
```text
+-------------------------------------------------------------+
| Browser Window: http://localhost:5173/event.html           |
| (Page Background: #f1f5f9)                                  |
|                                                             |
|           +-------------------------------------+           |
|           | ( WORKSHOP )  (pill badge)          |           |
|           |                                     |           |
|           | Web Architecture 2026               |           |
|           | 📅 Sat, Oct 24 • 10:00 AM           |           |
|           |                                     |           |
|           | Master modern CSS layout engines,   |           |
|           | box model mechanics, and responsive |           |
|           | typography from the ground up.      |           |
|           |                                     |           |
|           | [ Register Now • Free ]             |           |
|           | (Accent red, hover: #b91c1c)        |           |
|           +-------------------------------------+           |
|                                                             |
+-------------------------------------------------------------+
```

#### 5. AI Tutor Challenge (10 min)
Test your understanding by prompting your AI tutor:
> *"I have a `<button>` inside a `<div>`. When I add `margin-top: 20px` to the button, the whole parent container moves down instead of just the button moving inside the container. Why is this happening in CSS, and how do front-end developers solve it using padding or border-box?"*

#### 6. Homework 1: The CSS Bug Clinic (5 Layout Surgeries) (`clinic.html` + `clinic.css`)
- **Objective**: Diagnose and repair 5 real-world CSS defects in an intentionally broken codebase using Chrome DevTools.
- **Deliverables**: `clinic.html` and `clinic.css` pushed to GitHub under `session-03/homework-1/`.
- **The 5 Clinical Defects to Repair**:
  1. **Semicolon Paralysis:** A missing semicolon in a declaration block that silently cancels subsequent styling properties.
  2. **Content-Box Blowout:** An element with `width: 100%` plus `padding: 24px` blowing out past the viewport edge because `box-sizing: border-box` was omitted.
  3. **ID Specificity Lockout:** An `#id` selector in CSS preventing a button class `.btn-primary` from changing background color.
  4. **Margin Bleed Trap:** Padding vs. margin confusion causing background colors to bleed outside intended borders.
  5. **Line-Height Collision:** A hardcoded `line-height: 14px` causing multi-line `24px` title text to overlap and collide.
- **Diagnostic Method**: Inspect the Elements & Styles tab in DevTools, spot crossed-out rules and computed box dimensions, and surgically fix each flaw.

#### 7. Homework 2: The Modern SaaS Pricing Tier (`pricing.html` + `pricing.css`)
- **Objective**: Build a high-converting, professional SaaS pricing card and feature comparison showcase.
- **Deliverables**: `pricing.html` and `pricing.css` pushed to GitHub.
- **Core Requirements**:
  1. Semantic structure with `<header>`, `<section class="pricing-card">`, and `<footer>`.
  2. "Most Popular" or "Pro Tier" highlight badge.
  3. Big typography pricing display (e.g. `$29` with `/month` subscript).
  4. Feature checklist (`<ul>`) with custom styled checkmark indicators.
  5. High-contrast CTA button with a styled `:hover` transition.
  6. Zero ID selectors in CSS; all rules scoped cleanly using reusable classes.
  7. Strict box model sizing to prevent any overflow or layout breaking.

---

### Session 4: Modern Layout Engine: Flexbox (The 3-Property Rule)

#### 1. Objectives & Time Allocation (2 Hours)
- Understand the Flex Container vs. Flex Item relationship.
- Master the 3 essential Flexbox properties: `display: flex`, `justify-content`, `align-items`.
- Understand main axis vs. cross axis.
- Build a responsive multi-card product grid without floats or absolute positioning.

#### 2. Concept & Mental Models (45 min)

##### The Parent-Child Relationship in Flexbox
Flexbox applies to a **Parent Container** to control how its direct **Child Items** are arranged:
```
+-------------------------------------------------------------------+
| .parent (display: flex)                                           |
|                                                                   |
|   +-------------------+  +-------------------+  +---------------+ |
|   | .child (Item 1)   |  | .child (Item 2)   |  | .child (Item3)| |
|   +-------------------+  +-------------------+  +---------------+ |
+-------------------------------------------------------------------+
```

##### The 3-Property Rule
You only need 3 CSS properties to solve 90% of layout problems:
1. `display: flex;` -> Activates the Flexbox layout engine on the parent.
2. `justify-content: ...;` -> Aligns children along the **Main Axis** (default: horizontal row).
   - `flex-start` | `center` | `flex-end` | `space-between`
3. `align-items: ...;` -> Aligns children along the **Cross Axis** (default: vertical column).
   - `stretch` | `center` | `flex-start` | `flex-end`

```
JUSTIFY-CONTENT (Horizontal Row):
[Item1] [Item2] [Item3]                   -> flex-start
            [Item1] [Item2] [Item3]       -> center
[Item1]            [Item2]        [Item3] -> space-between

ALIGN-ITEMS (Vertical Alignment):
+-------------------------------+
| [Top]                         | -> flex-start
|            [Center]           | -> center
|                         [Bot] | -> flex-end
+-------------------------------+
```

##### Controlling Direction & Wrapping
- `flex-direction: column;` -> Flips the main axis to vertical (ideal for mobile stacks).
- `flex-wrap: wrap;` -> Allows cards to wrap down to the next row when the screen is narrow.

#### 3. 10-Minute Syntax & Concept Drill
**Fill in the blanks to center a card horizontally and vertically on the screen:**
```css
.hero-container {
  display: ________;
  justify-content: ________; /* Horizontal center */
  align-items: ________;     /* Vertical center */
  height: 100vh;
}
```
*(Answers: flex; center; center)*

#### 4. Hands-on Lab: Building an Accessible Product Grid (55 min)
1. Create `products.html` and `products.css`.
2. Add the semantic markup:
```html
<main class="store-container">
  <header class="store-header">
    <h2>Featured Products</h2>
    <span class="badge">3 Items</span>
  </header>

  <section class="card-grid">
    <article class="card">
      <img src="https://picsum.photos/300/200?random=1" alt="Vintage Camera">
      <div class="card-body">
        <h3>Vintage Camera</h3>
        <p class="price">$199.00</p>
        <button type="button">Add to Cart</button>
      </div>
    </article>
    <article class="card">
      <img src="https://picsum.photos/300/200?random=2" alt="Wireless Headphones">
      <div class="card-body">
        <h3>Wireless Headphones</h3>
        <p class="price">$89.00</p>
        <button type="button">Add to Cart</button>
      </div>
    </article>
    <article class="card">
      <img src="https://picsum.photos/300/200?random=3" alt="Smart Watch">
      <div class="card-body">
        <h3>Smart Watch</h3>
        <p class="price">$149.00</p>
        <button type="button">Add to Cart</button>
      </div>
    </article>
  </section>
</main>
```
3. Style the grid with Flexbox:
```css
.store-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  flex: 1 1 280px; /* Grow, shrink, base width */
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}
.card-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.card-body button {
  margin-top: auto; /* Pushes button to the bottom of the card */
  padding: 10px;
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```
4. Open in Chrome. Resize the window to verify that cards wrap smoothly without media queries.

#### 5. AI Tutor Challenge (10 min)
Prompt your AI tutor:
> *"Why does `margin-top: auto` push an item to the very bottom inside a Flex container with `flex-direction: column`? Explain the mechanics simply."*

---

### Session 5: Responsive Components & Accessible Forms

#### 1. Objectives & Time Allocation (2 Hours)
- Build accessible form controls with proper `<label>` to `<input>` binding.
- Understand the viewport meta tag and media query mental models.
- Build a responsive navigation bar with a mobile hamburger toggle layout.
- Use AI as a CSS troubleshooter without allowing it to break existing styles.

#### 2. Concept & Mental Models (45 min)

##### The Accessible Form Contract
Never place an input without a connected label. Users with assistive technology or small touchscreen targets need to click the label to focus the input:
```html
<!-- Explicit binding via "for" and "id" -->
<label for="user-email">Email Address</label>
<input type="email" id="user-email" name="email" required placeholder="name@domain.com">
```

##### The Mobile Viewport Meta Tag
Without this single line in `<head>`, mobile phones pretend to be desktop monitors (zooming out to 980px):
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

##### Responsive Philosophy: Mobile-First Stacking
1. Start with single-column layouts for mobile screens (cards stack naturally).
2. Use `@media (min-width: 768px)` to enhance the layout into multiple columns when room is available:
```css
/* Base: Mobile single column */
.nav-links {
  display: none; /* hidden behind toggle on mobile */
  flex-direction: column;
}
/* Enhanced: Desktop horizontal row */
@media (min-width: 768px) {
  .nav-links {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
}
```

#### 3. 10-Minute Syntax & Concept Drill
**Fill in the missing attributes to connect the label to the input:**
```html
<form>
  <label ______="student-id">Student ID Number</label>
  <input type="text" ______="student-id" name="id" required>
</form>
```
*(Answers: for; id)*

#### 4. Hands-on Lab: Accessible Contact Card & Responsive Form (55 min)
1. Create `contact.html`.
2. Build an accessible registration card with inputs for name, email, account type (select dropdown), and a submit button.
3. Apply responsive styling:
   - On screens `< 600px`, inputs take `width: 100%`.
   - On screens `> 600px`, use Flexbox to display First Name and Last Name side by side.
4. Test keyboard accessibility:
   - Press `Tab` repeatedly to ensure the focus ring moves logically from label to input to button.

#### 5. AI Tutor Challenge (10 min)
Paste your HTML into your AI tutor:
> *"Review this form markup. Check if I have any accessibility mistakes with labels, ARIA attributes, or button types. Explain any recommendation in 2 sentences."*

---

### Session 6: JavaScript Core Mental Model & Browser Memory

#### 1. Objectives & Time Allocation (2 Hours)
- Understand the role of JavaScript: changing state and reacting to actions.
- Demystify browser memory vs. code files.
- Master variables (`const` vs. `let`), primitive types (string, number, boolean).
- Use `console.log()` as the primary inspection tool.

#### 2. Concept & Mental Models (45 min)

##### What JavaScript Actually Does
HTML creates the structure (the house). CSS provides the styling (the paint). JavaScript provides the electrical wiring (turning lights on/off, opening doors):
```
Static Page (HTML/CSS) + State / User Action -> Dynamic Page (JavaScript)
```

##### Browser Memory vs. Files
- An HTML file sits on your disk or server as inert text.
- When loaded, JavaScript allocates temporary storage in the computer's **RAM (Memory)**.
- If you reload the page, memory is wiped clean and re-created from scratch.

##### Storing Data in Memory: Labeled Boxes
- `const` (Constant): A locked box. The label cannot be moved to a different box. **Default to `const`**.
- `let`: An unlocked box. The value inside can be replaced later. Use only when a value *must* change (e.g., counters).
- *Never use `var`* (an obsolete keyword with confusing scoping rules).

```javascript
// Primitive Data Types:
const studentName = "Amina";       // String (Text in quotes)
const studentAge = 21;             // Number (Raw numeric value)
const isEnrolled = true;           // Boolean (true or false)
```

#### 3. 10-Minute Syntax & Concept Drill
**Fill in the blanks with `const` or `let`, and identify the data type:**
```javascript
// A university ID never changes:
______ studentID = 90210;         // Data type: __________

// A game score changes during play:
______ currentScore = 0;          // Data type: __________

// Is the student logged in?
______ isLoggedIn = false;        // Data type: __________
```
*(Answers: const, Number; let, Number; let, Boolean)*

#### 4. Hands-on Lab: Exploring Variables in DevTools Console (55 min)
1. Open Google Chrome, press `F12`, and switch to the **Console** tab.
2. Type these lines directly into the console, hitting Enter after each:
```javascript
const courseName = "Web Fundamentals";
let attendees = 25;
console.log(courseName);
console.log("Attendees count:", attendees);

attendees = attendees + 1;
console.log("Updated attendees:", attendees);
```
3. Intentionally trigger errors to learn how to read browser diagnostics:
   - Type: `courseName = "Advanced Web";`
   - Observe the error: `TypeError: Assignment to constant variable.`
   - Type: `console.log(nonExistentVar);`
   - Observe the error: `ReferenceError: nonExistentVar is not defined.`
4. Create a local `script.js`, link it via `<script src="script.js" defer></script>`, and log personalized variables.

#### 5. AI Tutor Challenge (10 min)
Prompt your AI tutor:
> *"Why does JavaScript throw a TypeError when I reassign a `const`, but allows me to modify properties inside an object declared with `const`? Explain using the labeled box metaphor."*

---

### Session 7: Essential Data Structures: Objects & Arrays

#### 1. Objectives & Time Allocation (2 Hours)
- Master Objects using the **Contact Card** metaphor (labeled key-value pairs).
- Master Arrays using the **Ice Cube Tray** metaphor (ordered numbered slots).
- Access, read, and modify data using dot notation and zero-based indexing.
- Combine objects and arrays to model real-world web data (e-commerce products, user profiles).

#### 2. Concept & Mental Models (45 min)

##### The Object: A Contact Card
An Object is a single item with labeled properties (`key: value`):
```
+------------------------------------+
| CONTACT CARD (Object)              |
| name:    "Carlos"                  |
| role:    "Student"                 |
| credits: 15                        |
+------------------------------------+
```
In JavaScript:
```javascript
const student = {
  name: "Carlos",
  role: "Student",
  credits: 15
};

// Accessing properties via dot notation:
console.log(student.name);    // "Carlos"
console.log(student.credits); // 15
```

##### The Array: An Ice Cube Tray
An Array is a numbered list of items. Each slot has an index starting at **0**:
```
+-------------+-------------+-------------+-------------+
|   Slot 0    |   Slot 1    |   Slot 2    |   Slot 3    |
|   "Apple"   |  "Banana"   |  "Cherry"   |   "Date"    |
+-------------+-------------+-------------+-------------+
```
In JavaScript:
```javascript
const fruits = ["Apple", "Banana", "Cherry", "Date"];

console.log(fruits[0]); // "Apple"
console.log(fruits[2]); // "Cherry"
console.log(fruits.length); // 4
```

##### Modeling Real-World Web Data
Every modern website (Netflix, Spotify, Amazon) is an array of objects:
```javascript
const courseCatalog = [
  { id: 101, title: "HTML Basics", durationHours: 4 },
  { id: 102, title: "CSS Mastery", durationHours: 6 },
  { id: 103, title: "JS Logic",    durationHours: 8 }
];

console.log(courseCatalog[1].title); // "CSS Mastery"
```

#### 3. 10-Minute Syntax & Concept Drill
**Fill in the missing punctuation (commas, colons, curly braces, brackets):**
```javascript
// A profile object:
const instructor = __
  name__: "Dr. Smith",
  department: "Computer Science"__
  isActive: true
__;

// Access the department:
console.log(instructor.__);
```
*(Answers: `{`, `:`, `,`, `}`, `department`)*

#### 4. Hands-on Lab: Modeling an E-Commerce Product Catalog (55 min)
1. Create `data.js`.
2. Construct an array of 3 product objects. Each product must have:
   - `id` (Number)
   - `title` (String)
   - `price` (Number)
   - `inStock` (Boolean)
   - `tags` (Array of Strings)
3. Practice queries in the Console:
   - Print the title of the first product.
   - Print the second tag of the third product.
   - Update `inStock` of product 1 from `true` to `false`.
4. Run a live check-in: call the instructor over to inspect your console queries.

#### 5. AI Tutor Challenge (10 min)
Prompt your AI tutor:
> *"I have an array of objects. How do I know whether to use square brackets `[]` or dot notation `.` when extracting data? Give me a 2-step decision rule."*

---

### Session 8: The Bridge: DOM Querying & Dynamic Updates

#### 1. Objectives & Time Allocation (2 Hours)
- Understand the DOM as an API that JavaScript uses to interact with HTML.
- Master `document.querySelector()` using familiar CSS selectors.
- Update text content (`textContent`) and toggle CSS classes (`classList.toggle`).
- Map JavaScript object data directly onto HTML UI elements.

#### 2. Concept & Mental Models (45 min)

##### The DOM Bridge
JavaScript does not edit your `.html` file on your disk. It edits the **live DOM tree** currently in the browser's memory:
```
[JavaScript Memory: user.name = "Ali"]
                 |
                 v document.querySelector("#user-name").textContent = user.name;
[Live DOM Tree: <h2 id="user-name">Ali</h2>]
                 |
                 v
[Browser Screen: Paints "Ali" on display]
```

##### Selecting Elements: `document.querySelector`
Use the exact same selector strings you use in CSS:
- By Tag: `document.querySelector("h1")`
- By Class: `document.querySelector(".price-tag")`
- By ID: `document.querySelector("#submit-button")`

##### Safe Property Modification
- **Good: `element.textContent = "New Text";`** (Safely renders plain text, prevents security vulnerabilities).
- **Good: `element.classList.add("active");`** (Allows CSS to handle styling changes).
- **Avoid: `element.innerHTML = "<p>Text</p>";`** (Dangerous: opens XSS security flaws when handling user input).

#### 3. 10-Minute Syntax & Concept Drill
**Fill in the blanks to select the card title and update its text:**
```javascript
// Select the element with class "card-title":
const titleElement = document.querySelector("________");

// Update its text to "Smartphone Pro":
titleElement.________ = "Smartphone Pro";
```
*(Answers: `.card-title`; `textContent`)*

#### 4. Hands-on Lab: Dynamic Student Profile Card (55 min)
1. Create `profile.html`:
```html
<main>
  <article class="profile-card">
    <h2 id="profile-name">Student Name</h2>
    <p id="profile-major">Major</p>
    <p id="profile-gpa">GPA: 0.0</p>
    <div id="status-badge" class="badge badge-pending">Pending</div>
  </article>
</main>
```
2. Create `profile.js`:
```javascript
const studentData = {
  fullName: "Sara Al-Mansoor",
  major: "Software Engineering",
  gpa: 3.85,
  isHonors: true
};

// 1. Select the DOM elements
const nameEl = document.querySelector("#profile-name");
const majorEl = document.querySelector("#profile-major");
const gpaEl = document.querySelector("#profile-gpa");
const badgeEl = document.querySelector("#status-badge");

// 2. Inject data into the DOM
nameEl.textContent = studentData.fullName;
majorEl.textContent = studentData.major;
gpaEl.textContent = `GPA: ${studentData.gpa}`;

// 3. Modify classes dynamically
if (studentData.isHonors) {
  badgeEl.textContent = "Honors Student";
  badgeEl.classList.remove("badge-pending");
  badgeEl.classList.add("badge-honors");
}
```
3. Load the page with Live Server and verify that the HTML content updates dynamically without hardcoded text.

#### 5. AI Tutor Challenge (10 min)
Prompt your AI tutor:
> *"Why should beginners use `textContent` instead of `innerHTML` when changing text on a webpage? Give me one security reason and one simplicity reason."*

---

### Session 9: Event-Driven Programming: Clicks, Inputs & State

#### 1. Objectives & Time Allocation (2 Hours)
- Understand the Event Loop and asynchronous user triggers.
- Master `element.addEventListener('click', callbackFunction)`.
- Manage simple UI state (counters, theme toggles, modal dialogs).
- Read input values from text fields in real time.

#### 2. Concept & Mental Models (45 min)

##### The Doorman Metaphor (`addEventListener`)
Think of `addEventListener` as hiring a doorman and giving them instructions:
> *"Wait by the front button. When someone clicks it, execute this specific instruction."*

```javascript
const button = document.querySelector("#counter-btn");

button.addEventListener("click", function() {
  console.log("The button was clicked!");
});
```

##### UI State: Memory That Drives the View
"State" is simply data in memory that changes based on user interactions:
```
[User Clicks Button] -> [State Increments: count = count + 1] -> [DOM Updates textContent]
```

##### Reading Input Values
To read what a user has typed into a form input:
```javascript
const input = document.querySelector("#search-input");
console.log(input.value); // The current string typed inside the input
```

#### 3. 10-Minute Syntax & Concept Drill
**Fill in the blanks to listen for a click and toggle the class "dark-mode" on `document.body`:**
```javascript
const toggleBtn = document.querySelector("#theme-btn");

toggleBtn.addEventListener("______", function() {
  document.body.classList.toggle("______");
});
```
*(Answers: `click`; `dark-mode`)*

#### 4. Hands-on Lab: Interactive Click Counter & Theme Switcher (55 min)
1. Create `counter.html`:
```html
<div class="app-container">
  <button id="theme-toggle" type="button">Toggle Theme</button>
  <div class="counter-display">
    <h1 id="count-value">0</h1>
    <div class="btn-group">
      <button id="decrement-btn" type="button">-</button>
      <button id="increment-btn" type="button">+</button>
      <button id="reset-btn" type="button">Reset</button>
    </div>
  </div>
</div>
```
2. In `counter.js`, implement state tracking:
```javascript
let count = 0;

const countDisplay = document.querySelector("#count-value");
const incrementBtn = document.querySelector("#increment-btn");
const decrementBtn = document.querySelector("#decrement-btn");
const resetBtn = document.querySelector("#reset-btn");
const themeToggle = document.querySelector("#theme-toggle");

function updateDisplay() {
  countDisplay.textContent = count;
  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

incrementBtn.addEventListener("click", function() {
  count = count + 1;
  updateDisplay();
});

decrementBtn.addEventListener("click", function() {
  count = count - 1;
  updateDisplay();
});

resetBtn.addEventListener("click", function() {
  count = 0;
  updateDisplay();
});

themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});
```

#### 5. AI Tutor Challenge (10 min)
Prompt your AI tutor:
> *"What is an 'event listener callback function' in JavaScript? Explain it using an everyday analogy like a doorbell or telephone."*

---

### Session 10: Array Iteration & Dynamic Card Rendering

#### 1. Objectives & Time Allocation (2 Hours)
- Master iterating through arrays of objects using `for...of` and `forEach`.
- Build HTML card templates dynamically and append them to the DOM.
- Connect data collections to responsive Flexbox card grids.
- Implement a basic client-side text search filter.

#### 2. Concept & Mental Models (45 min)

##### Looping Through the Ice Cube Tray
When you have a collection of items in an array, you want to perform the same action for each item:
```javascript
const cities = ["Tokyo", "London", "Cairo"];

for (const city of cities) {
  console.log(`Welcome to ${city}`);
}
```

##### Dynamic HTML Template Generation
Instead of hardcoding 10 `<article>` cards in your HTML, you write a JavaScript loop that creates the cards from your data array:
```javascript
const container = document.querySelector("#card-container");
container.innerHTML = ""; // Clear existing

for (const product of productList) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h3>${product.title}</h3>
    <p>Price: $${product.price}</p>
  `;
  container.appendChild(card);
}
```

#### 3. 10-Minute Syntax & Concept Drill
**Fill in the blanks to loop over students and print their names:**
```javascript
const students = [
  { name: "Maya", grade: 90 },
  { name: "John", grade: 85 }
];

for (const student ______ students) {
  console.log(student.______);
}
```
*(Answers: `of`; `name`)*

#### 4. Hands-on Lab: Dynamic Movie Showcase with Live Search (55 min)
1. Create `movies.html` with an input `<input type="text" id="search-box" placeholder="Filter movies...">` and a `<section id="movie-grid" class="card-grid"></section>`.
2. In `movies.js`, define an array of 5 movie objects (title, genre, year, rating).
3. Write a `renderMovies(list)` function that empties `#movie-grid` and creates DOM cards for each item.
4. Add an `input` event listener to `#search-box` that filters the array and re-renders:
```javascript
const searchBox = document.querySelector("#search-box");

searchBox.addEventListener("input", function() {
  const searchTerm = searchBox.value.toLowerCase();
  const filtered = movies.filter(function(movie) {
    return movie.title.toLowerCase().includes(searchTerm);
  });
  renderMovies(filtered);
});
```

#### 5. AI Tutor Challenge (10 min)
Prompt your AI tutor:
> *"Why is clearing the container with `container.innerHTML = ''` before re-rendering in a search filter considered simple, and what are its performance limits? Explain in 3 sentences."*

---

### Session 11: Asynchronous Web & Data Fetching (REST APIs & JSON)

#### 1. Objectives & Time Allocation (2 Hours)
- Understand the Asynchronous Web: Why network calls cannot freeze the browser.
- Understand JSON (JavaScript Object Notation) as text-formatted data.
- Master the `fetch()` API and `async/await` syntax.
- Handle loading states and network errors (`404`, offline failures) gracefully.

#### 2. Concept & Mental Models (45 min)

##### The Asynchronous Coffee Shop Metaphor
- **Synchronous (Blocking)**: You order coffee. The barista goes to brew it. You freeze in place, and everyone behind you in line must freeze. Nobody can move until your coffee is in hand.
- **Asynchronous (Non-Blocking)**: You order coffee. The barista gives you a receipt with a buzzer (a **Promise**). You step aside, sit at a table, browse your phone. When the coffee is ready, the buzzer sounds (`await`), and you pick it up. The rest of the shop continues operating.

##### What is JSON?
JSON is simply an object written as plain text so it can travel across HTTP cables:
```json
{
  "id": 1,
  "title": "Fjallraven Backpack",
  "price": 109.95,
  "category": "men's clothing"
}
```

##### The Modern `async/await` Pattern
```javascript
async function loadUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    // Check if the server responded with an error (e.g. 404 or 500)
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json(); // Parse text into real JS objects
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }
}
```

#### 3. 10-Minute Syntax & Concept Drill
**Fill in the missing keywords for handling an asynchronous fetch:**
```javascript
______ function getProducts() {
  try {
    const response = ______ fetch("https://fakestoreapi.com/products");
    const products = ______ response.json();
    console.log(products);
  } catch (err) {
    console.log("Error:", err);
  }
}
```
*(Answers: `async`; `await`; `await`)*

#### 4. Hands-on Lab: Live Data Fetching from a Public API (55 min)
1. Create `api-feed.html`.
2. Connect to the public FakeStore API (`https://fakestoreapi.com/products`).
3. Implement a 3-state UI:
   - **Loading State**: Show `<div id="loading">Loading products from server...</div>`.
   - **Success State**: Replace loading indicator with dynamically rendered product cards.
   - **Error State**: If the network is unplugged or the URL is invalid, display `<div class="error">Unable to load products. Please check your connection.</div>`.
4. Test network failure in DevTools:
   - In DevTools Network tab, change **Throttling** from "No throttling" to **Offline**.
   - Reload the page. Verify that your `catch` block executes and displays the friendly error message.

#### 5. AI Tutor Challenge (10 min)
Prompt your AI tutor:
> *"Why do we need two `await` statements when fetching data—one for `fetch()` and one for `response.json()`? Explain what each step is waiting for."*

---

### Session 12: Browser DevTools Mastery & "Find the Bug" Code Audit

#### 1. Objectives & Time Allocation (2 Hours)
- Transform DevTools from a viewing tool into a deep diagnostic validator.
- Master the Console stack trace and Network throttling (simulating slow 3G mobile).
- Audit and spot 4 subtle bugs that AI routinely generates:
  1. Race condition in asynchronous data fetching.
  2. Missing accessibility tags (`alt`, form associations).
  3. CSS Flexbox wrap failure causing mobile blowout.
  4. Dangling event listeners / memory leaks.

#### 2. Concept & Mental Models (45 min)

##### The Junior Developer as Code Auditor
When an AI generates code, it writes code that *looks* syntactically plausible. It is the human developer's job to test the code against real-world browser conditions:
- Does it work when the internet is slow?
- Can a blind user navigate it with a screen reader?
- Does it break when the screen shrinks to a phone width?
- Does clicking a button twice trigger two duplicate server requests?

##### Reading the Console Stack Trace
When an error appears in red in DevTools:
```
Uncaught TypeError: Cannot read properties of undefined (reading 'title')
    at renderCard (app.js:42:25)
    at app.js:18:5
```
- Line 1 tells you **what** broke (`Cannot read properties of undefined`).
- Line 2 tells you **where** it broke: file `app.js`, line `42`.
- You do not guess; you click the link directly to open the exact line in DevTools Sources tab.

#### 3. 10-Minute Syntax & Concept Drill
**Identify the bug in this AI-generated snippet:**
```javascript
async function showUser() {
  const res = fetch("https://api.example.com/user");
  console.log(res.name);
}
```
*(Answer: Missing `await` before `fetch()` and missing `await res.json()`. `res` is a pending Promise, not a user object!)*

#### 4. Hands-on Lab: The "Find the Bug" Audit Challenge (55 min)
Students are given `audit-starter/` containing an app with 4 deliberate AI bugs:
1. **Bug 1 (Accessibility)**: Product images lack `alt` attributes, and search input has no associated `<label>`.
2. **Bug 2 (CSS Layout)**: Flexbox container lacks `flex-wrap: wrap;`, causing cards to collapse to 10px width on mobile.
3. **Bug 3 (Async Error)**: The fetch call assumes the response is always `200 OK` and does not check `if (!response.ok)`.
4. **Bug 4 (Event Listener Duplication)**: An `addEventListener` is declared inside a loop, attaching 10 identical click handlers to a single button.

**Student Task**:
- Open DevTools. Use Elements, Console, and Network tabs to identify each bug.
- Document the bug in their audit sheet: *What was broken? Why did it happen? What was the fix?*
- Apply the manual code edits to make the app resilient.

#### 5. AI Tutor Challenge (10 min)
Prompt your AI tutor:
> *"I have an image in HTML with `alt=""`. Is an empty alt attribute better or worse than omitting the alt attribute entirely? Explain the difference for screen readers."*

---

### Session 13: Prompt Decomposition, GitHub GUI & Capstone Assembly

#### 1. Objectives & Time Allocation (2 Hours)
- Master **Prompt Decomposition**: Breaking a feature into small, verifiable chunks.
- Learn version control without terminal stress using the VS Code Source Control GUI.
- Connect local work to a remote GitHub repository.
- Begin assembly of the Capstone Mini-Project from a verified starter template.

#### 2. Concept & Mental Models (45 min)

##### The Danger of the "Monolithic Prompt"
Beginners often ask an AI:
> *"Write me a complete e-commerce store with a cart, checkout, payment gateway, and dark mode."*
This fails 100% of the time. The AI generates hundreds of lines of hallucinated code that the student cannot read or debug.

##### The Modular Decomposition Strategy
Always build in 4 small, verifiable steps:
1. **Step 1**: Structure the data model (e.g., array of product objects).
2. **Step 2**: Render static visual cards using HTML & Flexbox.
3. **Step 3**: Connect JavaScript to render cards dynamically from the array.
4. **Step 4**: Add a single interactive event (e.g., "Add to Cart" increments a badge).

##### Git Without the Terminal
Students use the built-in **VS Code Source Control GUI**:
1. **Stage Changes** (+ icon): Select files ready to save.
2. **Commit Message**: Write a short explanation of what changed ("Add responsive card layout").
3. **Commit** (Checkmark icon): Save a snapshot in local history.
4. **Sync / Publish**: Push to GitHub with a single click.

```
Working Directory -> [Stage (+)] -> Staging Area -> [Commit (✓)] -> Local History -> [Sync] -> GitHub
```

#### 3. 10-Minute Syntax & Concept Drill
Order the proper sequence for introducing a new feature:
```text
(A) Ask AI to generate an addEventListener for a filter dropdown.
(B) Inspect the DOM elements in DevTools to verify IDs and classes.
(C) Write a 3-line technical specification detailing the input and expected output.
(D) Test the click event in the console using console.log().
```
*(Correct sequence: C -> B -> A -> D)*

#### 4. Hands-on Lab: Capstone Starter Template & GitHub Sync (55 min)
1. Initialize a repository using VS Code Source Control.
2. Publish to GitHub under the student's personal account.
3. Download the Capstone Mini-Project starter template (`capstone-starter/`):
   - A pre-built skeleton for a Media Catalog (Movies, Books, or Games).
4. Implement Feature 1 using modular technical prompting:
   - Write a prompt to add a category filter.
   - Audit the generated code before pasting it.
   - Verify the filter in Chrome DevTools.
   - Stage and commit the change in VS Code GUI with the message: `feat: add category filter to catalog`.

#### 5. AI Tutor Challenge (10 min)
Prompt your AI tutor:
> *"Here is my feature idea: 'Add a favorites button to each card that saves to local storage'. Break this feature down into 3 smaller, bite-sized coding steps for me to implement one by one."*

---

### Session 14: Project Defense, Live Console Interrogation & Code Review

#### 1. Objectives & Time Allocation (2 Hours)
- Final Showcase of Capstone Mini-Projects.
- Conduct 2-Minute **Live Console Interrogations** with each student.
- Submit the **Decomposition Journal** detailing AI collaboration and manual fixes.
- Semester retrospective: The junior developer's role in the evolving AI landscape.

#### 2. The 2-Minute Live Console Interrogation (In-Class Execution)
While students showcase their running projects, the instructor spends 2 minutes with each student opening the browser console on their project:
```javascript
// Instructor types live into student's browser console:
const testItem = { title: "Test Card", price: 50 };

// Instructor asks student:
"1. How do I print the price of testItem to the console?"
"2. If I want to select your project's main heading, what querySelector would I type?"
"3. Show me in the Elements tab where this card's Flexbox properties are defined."
```
*Rationale*: This test isolates true understanding from language barriers and AI generation. A student who understands will immediately point to the right property and selector without needing to write an essay.

#### 3. The Decomposition Journal Review
Students submit their completed 1-page Decomposition Journal alongside their GitHub link:
- **Prompt Log**: What technical prompt was given to the AI?
- **AI Flaws**: What did the AI get wrong on the first attempt? (e.g., used `var`, forgot accessibility attributes, hallucinated a CSS property).
- **Manual Verification**: What specific lines did the student manually edit to fix the code?

#### 4. Closing Lecture & Career Roadmap (45 min)
- Moving from Fundamentals to Modern Frameworks (React, Next.js, TypeScript).
- Why the foundations mastered in this course (DOM tree, Box Model, Objects, Arrays, DevTools debugging, API fetching) will never change, even as AI models evolve.

---

## 5. Assessment & Grading Framework

To maintain academic integrity and build authentic engineering capability in the AI era, traditional homework is replaced with verification-based assessments:

```
+--------------------------------------------------------------------------+
|                       SEMESTER GRADING DISTRIBUTION                      |
+--------------------------------------------------------------------------+
|  20%  | Weekly In-Class Syntax Drills & Lab Check-ins (Sessions 1–10)    |
|  25%  | "Find the Bug" Code Audit Lab (Session 12)                       |
|  25%  | The Decomposition Journal (Milestones & Capstone)                |
|  30%  | Capstone Mini-Project & Live Console Interrogation (Session 14)  |
+--------------------------------------------------------------------------+
```

---

### 5.1 The "Find the Bug" Code Audit Specification (Session 12 Lab)

The instructor distributes a repository with the following intentionally flawed file. Students must identify, explain, and fix all 4 issues.

#### Flawed Codebase: `audit-exercise.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Product Finder</title>
  <style>
    /* BUG 2: Missing flex-wrap causes layout blowout on small screens */
    .catalog-container {
      display: flex;
      gap: 16px;
    }
    .card {
      width: 300px;
      border: 1px solid #ddd;
      padding: 16px;
    }
  </style>
</head>
<body>
  <!-- BUG 1: Missing label association for input -->
  <input type="text" id="filter-input" placeholder="Search products...">
  
  <div class="catalog-container" id="catalog"></div>

  <script>
    const catalog = document.querySelector("#catalog");
    const input = document.querySelector("#filter-input");

    async function fetchProducts() {
      // BUG 3: Does not check response.ok or catch errors; race condition
      const response = await fetch("https://fakestoreapi.com/products?limit=5");
      const products = await response.json();
      
      catalog.innerHTML = "";
      products.forEach(p => {
        // BUG 1 (cont.): Missing alt attribute on image
        catalog.innerHTML += `
          <div class="card">
            <img src="${p.image}">
            <h3>${p.title}</h3>
            <button class="buy-btn">Buy</button>
          </div>
        `;
      });

      // BUG 4: Adding event listeners inside render repeatedly
      const buttons = document.querySelectorAll(".buy-btn");
      buttons.forEach(btn => {
        btn.addEventListener("click", () => alert("Added to cart!"));
      });
    }

    input.addEventListener("input", () => {
      fetchProducts(); // Triggers dozens of simultaneous API calls while typing
    });

    fetchProducts();
  </script>
</body>
</html>
```

#### Grading Rubric for Code Audit Lab (100 Points Total)
- **Bug 1 Identified & Fixed (25 pts)**: Added explicit `<label for="...">` and `<img alt="${p.title}">`.
- **Bug 2 Identified & Fixed (25 pts)**: Added `flex-wrap: wrap;` and responsive sizing to `.card`.
- **Bug 3 Identified & Fixed (25 pts)**: Added `try/catch` block and `if (!response.ok)` status validation.
- **Bug 4 Identified & Fixed (25 pts)**: Moved event listeners or used event delegation instead of re-attaching listeners on every render.

---

### 5.2 The Decomposition Journal Template

Students must include this markdown log with their project repository:

```markdown
# Student Decomposition Journal

**Student Name:** ________________________
**Project Title:** _______________________
**GitHub Repository URL:** _______________

### Milestone: Feature Implementation Log

#### 1. Technical Specification Provided to AI
*Copy and paste the exact technical prompt you gave to the AI:*
> 

#### 2. AI Initial Output & Flaws
*What code did the AI generate? What mistakes, bugs, or missing elements did you find when inspecting it in DevTools?*
- Mistake 1:
- Mistake 2:

#### 3. Manual Edits & DevTools Validation
*Explain the manual changes you made to make the code functional, accessible, and secure:*
- Edit 1:
- Edit 2:

#### 4. DevTools Verification Proof
- What status code did you see in the Network tab?
- Did the Console report zero red errors? (Yes/No)
- How did the layout behave when resized to mobile view (375px)?
```

---

### 5.3 Live Console Interrogation Bank & Scoring Sheet

The instructor spends 2 minutes per student during Session 14.

| Question Type | Prompt Typed by Instructor | What Student Must Explain / Do | Score (0–10) |
| :--- | :--- | :--- | :--- |
| **Object Inspection** | `const book = { title: "Clean Code", pages: 464 };` | "How do I access the number of pages?" -> Student answers: `book.pages`. | /10 |
| **DOM Querying** | (Points to a card on student's screen) | "Type a querySelector in the console to select that specific button." -> Student types `document.querySelector(...)`. | /10 |
| **DevTools Navigation** | "Show me the padding of your card." | Student opens Elements tab, locates Box Model view, and reads the padding value. | /10 |

---

## 6. Software Setup & Student Onboarding Guide

### 6.1 Essential Tooling Installation Checklist
1. **Google Chrome / Brave Browser**: Primary development and DevTools environment.
2. **Visual Studio Code (VS Code)**: Code editor.
   - Extension: **Live Server** (by Ritwick Dey) -> Enables local HTTP development.
   - Extension: **Prettier - Code Formatter** -> Keeps code cleanly indented.
3. **GitHub Account & VS Code Source Control**:
   - Install Git (standard installer).
   - Sign into GitHub directly inside VS Code (`Accounts` icon in bottom left).
   - No terminal configuration required: use VS Code GUI buttons to Stage, Commit, and Push.

### 6.2 AI Assistant Setup
1. Open your AI tool of choice (ChatGPT, Claude, or a free alternative).
2. Create a new custom chat or system instruction.
3. Copy and paste the **In-Class Socratic AI Tutor System Prompt** from Section 2.1.
4. Pin the chat and use it exclusively for in-class troubleshooting, error explanation, and conceptual inquiries.
