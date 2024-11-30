// Add this at the top of your script.js
console.log("JavaScript file loaded!");

// Test if button exists
const button = document.getElementById("btn-alert");
if (button) {
    console.log("Button found!");
} else {
    console.log("Button not found - check your HTML ID");
}

// footer with current year
const footerElement = document.getElementById("footer");
const currentYear = new Date().getFullYear();
footerElement.innerHTML = `© ${currentYear} Alexandra Quilao`;

console.log(new Date().toLocaleDateString());

//Greeting based on time of day
function setGreeting() {
    const Greeting = document.getElementById("greeting");
    const hour = new Date().getHours();  // Fixed Date and getHours
    if (hour < 12) {
        Greeting.innerHTML = "Good Morning!";
        Greeting.className = "morning";
    }
    else if (hour < 17) {
        Greeting.innerHTML = "Good Afternoon!";
        Greeting.className = "afternoon";
    }
    else {
        Greeting.innerHTML = "Good Evening!";
        Greeting.className = "evening";
    }
}
setGreeting();

//Alert Button
const AlertButton = document.getElementById("btn-alert");
AlertButton.addEventListener("click", function() {  // remove extra parenthesis
    this.innerText = "Clicked!";  // changed message to be different from hover
});

AlertButton.addEventListener("mouseover", function() {  // remove extra parenthesis
    this.innerText = "Hover activated!";
});

AlertButton.addEventListener("mouseout", function() {  // remove extra parenthesis
    this.innerText = "Click Me!";
});

// For loop to create numbered list
const numbersList = document.getElementById("numbers");
for (let i=1; i<=12; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `List item ${i} is ${i % 2 === 0 ? 'even' : 'odd'}`;
    numbersList.appendChild(listItem);
}