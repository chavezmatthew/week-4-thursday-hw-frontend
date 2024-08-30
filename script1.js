// 1. Document Manipulation with JavaScript

// Objective: The aim of this assignment is to enhance proficiency in manipulating HTML documents dynamically using JavaScript, focusing on the manipulation of arrays and objects to modify document content and structure.

// Problem Statement: You are tasked with creating a web page that dynamically updates its content based on user interaction. The page should utilize JavaScript to manipulate the document structure and content using arrays and objects.

// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Write a function to display the product information on the webpage dynamically.

function displayProducts() {
    const productContainer = document.getElementById('product-container');

    productContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        productContainer.appendChild(productDiv);
    });
}

// Task 3: Implement an event listener to trigger the display of products when the page loads.

window.addEventListener('load', displayProducts);

// Expected Outcomes:

// Successful creation of an array containing product information.
// Proper display of product information on the webpage using JavaScript.
// Implementation of an event listener to trigger the display of products upon page load.