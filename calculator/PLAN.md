Implementation Plan for Calculator App

This plan outlines the steps to build a modern calculator app with a glassmorphism style, dark mode, vibrant gradients, and smooth hover animations using Tailwind CSS.

- [x] Initialize a new React component `Calculator` in `src/app/components/Calculator.tsx`.
- [x] Add the basic calculator layout (display, number buttons, operator buttons, equals button, clear button) within the `Calculator` component.
- [x] Implement the calculator's core logic using React state to handle numbers, operators, and calculations within `Calculator.tsx`.
- [x] Apply the glassmorphism style to the calculator container using Tailwind CSS classes (e.g., `bg-clip-padding`, `backdrop-filter`, `bg-opacity-60`, `border`, `rounded-xl`).
- [x] Implement dark mode using Tailwind CSS's `dark:` variant. Define colors for dark mode in `tailwind.config.js`.
- [x] Add vibrant gradients to the calculator buttons using Tailwind CSS's gradient classes (e.g., `bg-gradient-to-r`, `from-purple-500`, `to-blue-500`).
- [x] Implement smooth hover animations for the buttons using Tailwind CSS's `hover:` and `transition` classes (e.g., `hover:scale-105`, `transition-transform`).
- [x] Style the display area with appropriate font size, colors, and alignment using Tailwind CSS.
- [x] Handle keyboard input for numbers and operators.
- [x] Add error handling for invalid operations (e.g., division by zero).
- [x] Create a `components` folder inside the `app` folder to house `Calculator.tsx` to adhere to best practices.
- [x] Import and render the `Calculator` component in `src/app/page.tsx`.
- [x] Use the `take_screenshot` tool to capture a screenshot of the calculator.
- [x] Review the screenshot and make any necessary adjustments to the styling or layout.
- [x] Add a reset function to restart calculation.
- [x] Implement decimal functionality.
- [x] Implement a backspace/delete button.