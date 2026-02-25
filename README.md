# TempConversion
A sleek, real-time temperature conversion tool built with JavaScript, HTML5, and CSS3 that instantly calculates values across Celsius, Fahrenheit, and Kelvin scales.
A minimalist and efficient web utility for converting temperatures between Celsius, Fahrenheit, and Kelvin scales in real-time.

## Key Features
- **Bi-directional Conversion:** Convert from any scale to the other two simultaneously.
- **Real-time Updates:** Values update instantly as you type, with no "Calculate" button required.
- **Mathematical Accuracy:** Implemented precise formulas for high-accuracy conversions.
- **Input Validation:** Prevents non-numeric characters to ensure a smooth user experience.
- **Clean Design:** Modern UI with CSS Flexbox for a centered, responsive layout.

## 🛠️ Tech Stack
- **Structure:** HTML5
- **Styling:** CSS3 (Flexbox & Responsive Design)
- **Logic:** Vanilla JavaScript (ES6+)

## Formulas Used
- **Celsius to Fahrenheit:** $(C \times 9/5) + 32$
- **Celsius to Kelvin:** $C + 273.15$
- **Fahrenheit to Celsius:** $(F - 32) \times 5/9$

## What I Learned
- **Event Listeners:** Using `input` events for immediate calculation feedback.
- **Data Parsing:** Managing floating-point numbers and `toFixed()` for clean decimal output.
- **UX Logic:** Designing a "clear" function to reset all fields simultaneously.
