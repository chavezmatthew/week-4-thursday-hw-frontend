// 3. Styling with JavaScript

// Objective: The objective of this assignment is to practice manipulating CSS styles dynamically using JavaScript. By the end of this assignment, students should be able to apply various styling changes to HTML elements based on user interaction or other events.

// Problem Statement: You are tasked with creating a web page that demonstrates dynamic styling using JavaScript. The page should include HTML elements that change their appearance in response to user actions or events triggered by JavaScript functions.

// Task 1: Create an HTML structure with at least 5 elements that will be styled dynamically.

// Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.

// Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.


function changeColor() {
    const box = document.getElementById('box');
    const colors = ['lightblue', 'lightcoral', 'lightseagreen', 'lightgoldenrodyellow', 'lightpink'];
    const currentColor = box.style.backgroundColor;

    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);

    box.style.backgroundColor = newColor;
}


function enlargeButton(button) {
    button.style.transform = 'scale(1.2)';
    setTimeout(() => button.style.transform = 'scale(1)', 300);
}


const hoverElement = document.querySelector('.hover-element');
hoverElement.addEventListener('mouseover', () => {
    hoverElement.style.transform = 'scale(1.1)';
    hoverElement.style.backgroundColor = '#90ee90';
});
hoverElement.addEventListener('mouseout', () => {
    hoverElement.style.transform = 'scale(1)';
    hoverElement.style.backgroundColor = 'lightgreen';
});


const inputElement = document.querySelector('.input-style');
inputElement.addEventListener('focus', () => {
    inputElement.style.borderColor = '#007bff';
    inputElement.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)';
});
inputElement.addEventListener('blur', () => {
    inputElement.style.borderColor = '#ddd';
    inputElement.style.boxShadow = 'none';
});


function changeTextColor() {
    const text = document.getElementById('text');
    text.style.color = text.style.color === 'red' ? 'black' : 'red';
}


// Expected Outcomes:

// The HTML structure includes an element (e.g., a box) that responds to user interaction.
// JavaScript code successfully changes the color of the box element when clicked, providing a visual feedback mechanism.
// Additional styling changes, such as mouse hover effects or button clicks, are implemented to enhance user experience and engagement.