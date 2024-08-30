// 2. Form Manipulation with JavaScript

// Objective: The aim of this assignment is to practice manipulating HTML forms dynamically using JavaScript, with a focus on handling arrays, objects, and form elements to capture user input and modify form behavior.

// Problem Statement: You are tasked with creating a web page containing a form that allows users to input their information. The page should utilize JavaScript to dynamically handle form submissions, store input data in arrays and objects, and modify form behavior based on user interaction.

// Task 1: Create an HTML form with input fields for the user's name, email, and message.

// Task 2: Write JavaScript code to handle form submissions and store user input in an object.

// Task 3: Implement form validation to ensure that all required fields are filled before submission.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('messageError').textContent = '';

        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }

        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('emailError').textContent = 'Invalid email format';
            isValid = false;
        }

        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required';
            isValid = false;
        }

        if (isValid) {
            const userInput = {
                name: name,
                email: email,
                message: message
            };

            console.log('User Input:', userInput);
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});



// Expected Outcomes:

// Successful creation of an HTML form with input fields for name, email, and message.
// Proper handling of form submissions using JavaScript to capture user input and store it in an object.
// Implementation of form validation to ensure that all required fields are filled before submission.