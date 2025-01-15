# Spacing

The Brook Design System uses a structured approach to spacing to ensure visual harmony, consistency, and adaptability across all layouts and components. Spacing is based on a modular scale to align with the system's minimalist and proportional design philosophy.

## Spacing Guidelines

### 1. Modular Scale
- Use a modular scale based on the **golden ratio (1.618)** to define spacing increments.
- Examples of standard spacing values:
  - **Base Unit**: 8px
  - **Small Spacing**: 8px, 16px
  - **Medium Spacing**: 24px, 40px
  - **Large Spacing**: 64px, 104px

### 2. Consistency
- Apply spacing consistently to all elements, including padding, margins, and gaps between components.
- Ensure spacing aligns with the 8px base grid for clarity and alignment.

### 3. Component Spacing
- Define padding and margin rules for components:
  - **Buttons**: Padding inside buttons should follow the 8px grid (e.g., 8px vertical, 16px horizontal).
  - **Cards**: Maintain a consistent margin of 16px or more between cards.
  - **Forms**: Spacing between form fields should be at least 24px.

### 4. Responsive Spacing
- Use scalable spacing values for responsiveness:
  - Use `clamp()` or `minmax()` for dynamic spacing that adjusts based on container or viewport size.
  - Example:
    ```css
    .container {
      padding: clamp(16px, 2vw, 40px);
    }
    ```

### 5. Accessibility in Spacing
- Ensure sufficient spacing between interactive elements for touch targets (minimum 48px height/width).
- Avoid overcrowding to maintain readability and usability.

## Example CSS for Spacing
```css
.card {
  margin: 16px; /* Base unit */
  padding: 24px; /* Medium spacing */
}

.grid {
  gap: 24px; /* Consistent spacing between items */
}
