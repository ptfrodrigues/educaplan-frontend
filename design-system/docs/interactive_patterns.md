
# Interactive Patterns

The Brook Design System provides a set of interactive patterns to ensure consistency and usability across components. These patterns define how elements behave during interactions, creating a seamless and intuitive user experience.

## Guidelines for Interactive Patterns

### 1. Hover States
- Use hover states to indicate interactivity:
  - Buttons and links: Change colour, add shadows, or apply subtle animations.
  - Cards: Elevate slightly or change the background shade.
- Example:
  ```css
  .button:hover {
    background-color: var(--accent-color);
    transform: scale(1.05);
    transition: transform 0.2s ease, background-color 0.2s ease;
  }
  ```

### 2. Focus States
- Ensure focus states are accessible and clearly visible:
  - Use outlines, borders, or colour changes to highlight focused elements.
  - Example:
    ```css
    .input:focus {
      outline: 2px solid var(--primary-color);
    }
    ```

### 3. Active States
- Indicate active elements with distinct visual cues:
  - Buttons: Depress slightly (e.g., `transform: translateY(2px)`).
  - Tabs or navigation links: Highlight the active section with a border or underline.

### 4. Feedback for Actions
- Provide immediate feedback for user actions:
  - **Ripple effects** for clicks (inspired by water ripples).
  - Visual confirmation (e.g., button colour change, spinner for loading).

### 5. Animations and Transitions
- Use smooth animations to enhance interactivity:
  - Transitions for menu openings or modal overlays.
  - Example:
    ```css
    .dropdown {
      transition: max-height 0.3s ease;
      overflow: hidden;
    }
    ```

### 6. Tooltips and Popovers
- Display contextual information on hover or focus:
  - Ensure tooltips are accessible (e.g., triggered on keyboard focus).
  - Use subtle fade-in or slide-in animations.

### 7. Accessibility
- Ensure all interactive patterns are keyboard navigable.
- Include `aria-labels` or `aria-describedby` attributes for interactive elements.
- Avoid relying solely on hover states; ensure focus and active states are equally functional.

## Example Implementation

### Interactive Button
```html
<button class="interactive-button">Click Me</button>
```

```css
.interactive-button {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.interactive-button:hover {
  background-color: var(--accent-color);
  transform: scale(1.05);
}

.interactive-button:active {
  transform: translateY(2px);
}
```
