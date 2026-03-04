Calculator

A simple web-based calculator built as part of the JavaScript Foundations curriculum from The Odin Project.

This project implements the logic of a basic calculator using JavaScript, HTML, and CSS, including support for keyboard input and common calculator behaviors.

Features

Basic arithmetic operations

Addition (+)

Subtraction (-)

Multiplication (*)

Division (/)

Decimal number support

Negative number handling

Continuous operations
Example:

5 + 3 * 2

Repeated equals behavior

5 + 3 = 8
= 11
= 14

Keyboard input support

Delete last digit

Clear the entire calculation

Division by zero protection

Built With

HTML

CSS (Flexbox)

JavaScript

The calculator logic is implemented using a state-based approach, tracking the left operand, operator, and right operand.

Keyboard Controls
Key	Action
0–9	Enter numbers

/ | Operators |
Enter | Equals |
Backspace | Delete last digit |
Delete | Delete last digit |
Escape | Clear calculator |
. | Decimal point |

Project Structure
calculator/
│
├── index.html
├── css/
│   └── style.css
├── scripts/
│   └── script.js
└── README.md
What I Learned

Through this project I practiced:

DOM manipulation

Event handling

Separating logic into reusable functions

Managing application state

Handling edge cases (negative numbers, repeated equals, division by zero)

Implementing keyboard controls for a web interface

Creating UI layouts using Flexbox

Future Improvements

Possible improvements include:

Limiting display length

Adding keyboard button highlighting

Improving UI styling and animations

Adding calculation history

Supporting additional operations

Acknowledgements

This project was completed as part of the JavaScript Foundations course from The Odin Project.
