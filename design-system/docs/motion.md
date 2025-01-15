# Motion

Motion in the Brook Design System is inspired by the fluidity and adaptability of water. It ensures that interactions feel smooth, natural, and intuitive, enhancing the overall user experience.

## Motion Guidelines

### 1. Natural Flow
- Transitions should mimic the smooth flow of water, avoiding abrupt or jarring movements.
- Use easing curves to replicate natural acceleration and deceleration:
  - Example: `cubic-bezier(0.4, 0.0, 0.2, 1)`

### 2. Subtle Animations
- Keep animations minimal to avoid distracting users.
- Use motion to guide attention or indicate state changes, such as expanding a menu or revealing additional content.

### 3. Continuity
- Animate changes within a single environment to maintain context and continuity.
- Example: When transitioning between two states, use shared element animations to connect them visually.

### 4. Accessibility in Motion
- Avoid motion effects that may cause discomfort for users with vestibular disorders.
- Provide a "reduce motion" setting that disables or simplifies animations.

## Example CSS for Motion
```css
.button {
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.button:hover {
  transform: scale(1.05);
}
