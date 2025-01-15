# Typography

Typography in the Brook Design System prioritises readability, hierarchy, and scalability. It aligns with the system's minimalist and adaptable nature, ensuring consistency and accessibility across all interfaces.

## Typography Guidelines

### 1. Font Selection
- Use a clean, legible sans-serif font for body text and UI elements.
- Pair with an optional display font for headings to create visual contrast.

### 2. Modular Scale
- Base typography sizes on a modular scale using the golden ratio (1.618) to maintain proportionality.
- Example Sizes:
  - Small Text: 12px
  - Body Text: 14px
  - Subheadings: 22px
  - Headings: 36px

### 3. Line Height and Spacing
- Use line height and spacing in multiples of 8px for visual consistency.
- Example:
  - Small Text: 18px line height
  - Body Text: 20px line height
  - Headings: 44px line height

### 4. Hierarchy
- Define clear styles for headings, subheadings, body text, and captions to establish a visual hierarchy.
- Use font size, weight, and colour to differentiate levels of importance.

### 5. Accessibility
- Ensure text is legible at all sizes, particularly on smaller screens.
- Maintain sufficient contrast between text and background for readability.

### 6. Responsive Typography
- Adjust font sizes and line heights based on container or viewport size to maintain balance and usability.
- Example:
```css
h1 {
  font-size: clamp(28px, 5vw, 40px);
}
