
# Theming

The Brook Design System supports theming to provide flexibility for branding, user preferences (e.g., light and dark modes), and adaptability to different contexts.

## Theming Guidelines

### 1. Core Theme Variables
- Define a set of global variables for colours, typography, and spacing:
  ```css
  :root {
    --primary-color: #base-color;
    --accent-color: #accent-color;
    --text-color: #text-color;
    --background-color: #background-color;
  }
  ```

### 2. Light and Dark Modes
- **Light Mode**:
  - Use neutral backgrounds (e.g., light greys or whites).
  - Pair with darker text for high contrast.
- **Dark Mode**:
  - Use darker backgrounds (e.g., dark greys or muted blues).
  - Pair with lighter text for readability.
- Example:
  ```css
  @media (prefers-color-scheme: dark) {
    :root {
      --background-color: #1a1a1a;
      --text-color: #ffffff;
    }
  }
  ```

### 3. Custom Branding
- Allow custom themes for branding:
  - Replace global variables with brand-specific colours or fonts.
  - Example:
    ```css
    :root.brand {
      --primary-color: #brand-primary;
      --accent-color: #brand-accent;
    }
    ```

### 4. Dynamic Adaptation
- Use container queries or responsive utilities to adapt themes dynamically based on device or user settings.

### 5. Accessibility in Theming
- Ensure all themes meet WCAG contrast ratio requirements for text and background combinations.
- Test themes for legibility, especially in dark mode.

## Example Implementation
```css
body {
  background-color: var(--background-color);
  color: var(--text-color);
}

button.primary {
  background-color: var(--primary-color);
  color: var(--text-color);
}
```
