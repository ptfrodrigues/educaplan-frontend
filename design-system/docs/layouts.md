# Layouts

The Brook Design System ensures that layouts are flexible, scalable, and aligned with the system's guiding principles. By combining modular scales with container queries, layouts adapt dynamically to varying screen sizes and contexts.

## Layout Guidelines

### 1. Responsive Design
- Use a flexible grid system to support varying device sizes and resolutions.
- Combine **container queries** with modular scales to ensure layouts adapt dynamically to their containers.

### 2. Modular Scale
- Define layout spacing, dimensions, and proportions using a modular scale based on the golden ratio (1.618).
- Examples:
  - Small spacing: 16px
  - Medium spacing: 24px
  - Large spacing: 40px

### 3. Grid System
- Implement a grid system that allows for easy alignment and positioning of components.
- Use fractional units (`fr`) in CSS Grid to achieve proportional and fluid layouts.

### 4. Asymmetry for Focus
- Introduce asymmetric layouts to highlight key information or actions.
- Maintain balance and harmony by aligning elements with the modular scale.

### 5. Consistency Across Breakpoints
- Define breakpoints for different screen sizes (e.g., mobile, tablet, desktop).
- Ensure that layouts maintain consistent spacing, proportions, and usability across breakpoints.

## Example Grid
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}
