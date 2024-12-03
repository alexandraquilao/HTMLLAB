
console.log("JavaScript file loaded!");

// Footer with dynamic year
const footerElement = document.getElementById("current-year");
if (footerElement) {
    const currentYear = new Date().getFullYear();
    footerElement.innerHTML = `© ${currentYear} Alexandra Quilao`;
    console.log(`Today's date: ${new Date().toLocaleDateString()}`);
} else {
    console.error("Footer element not found - check your HTML ID!");
}

// Greeting based on time of day
function setGreeting() {
    const greetingElement = document.getElementById("greeting");
    if (!greetingElement) {
        console.error("Greeting element not found - check your HTML!");
        return;
    }
    const hour = new Date().getHours();
    if (hour < 12) {
        greetingElement.innerHTML = "Good Morning!";
        greetingElement.className = "morning";
    } else if (hour < 17) {
        greetingElement.innerHTML = "Good Afternoon!";
        greetingElement.className = "afternoon";
    } else {
        greetingElement.innerHTML = "Good Evening!";
        greetingElement.className = "evening";
    }
}
setGreeting();

// Alert Button functionality
const alertButton = document.getElementById("btn-alert");
if (alertButton) {
    alertButton.addEventListener("click", function() {
        this.innerText = "Yay! :) ";
    });

    alertButton.addEventListener("mouseover", function() {
        this.innerText = "Almost there!";
    });

    alertButton.addEventListener("mouseout", function() {
        this.innerText = "Click Me for Good Vibes!";
    });
} else {
    console.error("Alert button not found - check your HTML ID!");
}
