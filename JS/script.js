// footer with current year
const footerElement = document.getElementById("footer");
const currentYear = new Date().getFullYear();
footerElement.innerHTML = `© ${currentYear} Alexandra Quilao`;

console.log(new Date().toLocaleDateString());

//Greeting based on time of day
function setGreeting() {
    const Greeting = document.getElementById("greeting");
    const hour = new date().gethours();

    if (hour<12) {
        Greeting.innerHTML = "Good Morning!";
        Greeting.className = "morning";
    } 
    else if (hour<17) {
        Greeting.innerHTML = "Good Afternoon!";
        Greeting.className = "afternoon";

    }
    else {
        Greeting.innerHTML = "Good Evening!";
        Greeting.className = "evening";
    }
}