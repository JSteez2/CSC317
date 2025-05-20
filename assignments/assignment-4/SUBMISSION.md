**Name:** Jaden Deldio  
**Student ID:** 922226887

---

## Links

- **GitHub Repository:** https://github.com/JSteez2/CSC317
- **Live GitHub Pages URL:** https://JSteez2.github.io/CSC317/

---

## Implementation Overview

For Assignment 4, I began by configuring Node.js LTS and verifying with simple console scripts, then built a fully featured calculator in vanilla JavaScript. The calculator handles basic arithmetic operations (addition, subtraction, multiplication, division), percentage calculations, sign toggling, decimal input, and keyboard events. I leveraged ES6 features (const/let, arrow functions, template literals) for cleaner, more modular code. The UI uses CSS Grid for a responsive layout, with fluid widths and media queries for mobile support. I integrated the calculator into my existing portfolio by adding a project card and deploying via GitHub Pages in a docs folder. I also implemented robust error handling for edge cases like division by zero and multiple decimals. Overall, this project deepened my understanding of DOM manipulation, event handling, and deployment workflows.

---

## Challenges and Solutions

- **Responsive Layout:** Ensuring the calculator grid resized correctly on mobile required adding the viewport meta tag and using `width:100%; max-width:320px` with media queries.
- **Keyboard Support Conflicts:** My initial keydown handler triggered multiple actions; I refactored it into an `if/else if` chain so only one action fires per key.
- **GitHub Pages Setup:** I moved the site files into a `docs/` folder and configured Pages to avoid 404 errors.

---

## Additional Features

- **Theme Switcher (Bonus):** Implemented a light/dark mode toggle for both the calculator and portfolio using CSS custom properties and a simple JavaScript switch.

---

## Acknowledgments

- MDN Web Docs for guidance on [KeyboardEvent](https://developer.mozilla.org/…) handling and CSS Grid.
- CSS-Tricks for responsive layout patterns.
- Stack Overflow for troubleshooting GitHub Pages deployment nuances.