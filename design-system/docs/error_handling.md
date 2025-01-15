# Error Handling

Error handling in the Brook Design System focuses on providing clear, actionable, and visually distinct feedback to users. Proper error handling ensures that users can quickly identify, understand, and resolve issues.

## Guidelines for Error Handling

### 1. Visual Distinction
- Use a consistent visual style to indicate errors:
  - Borders: Highlight input fields with a distinct border colour.
  - Icons: Use universally recognised icons (e.g., exclamation marks) for error indicators.
  - Text: Provide clear, concise error messages near the associated element.

### 2. Clarity in Messaging
- Ensure error messages are:
  - **Descriptive**: Clearly state the problem (e.g., "Password must be at least 8 characters").
  - **Actionable**: Provide steps to fix the issue (e.g., "Enter a valid email address").
  - **Concise**: Avoid overly technical language or lengthy explanations.

### 3. Hierarchy and Priority
- Errors should draw appropriate attention:
  - High-priority errors (e.g., form submission failures) should be prominently displayed.
  - Inline errors (e.g., invalid input) should appear near the related element.

### 4. Feedback Timing
- Inline feedback should appear in real time when possible (e.g., while the user types).
- Summarise all errors at the top of a form if validation occurs on submission.

### 5. Accessibility
- Ensure error messages are screen reader-friendly by associating them with the relevant fields using `aria-describedby`.
- Avoid relying solely on colour to indicate errors; include icons or text for clarity.

## Example Error States

### Inline Error Example:
```html
<div class="form-group error">
  <label for="email">Email</label>
  <input type="email" id="email" class="error-input" />
  <span class="error-message">Please enter a valid email address.</span>
</div>
