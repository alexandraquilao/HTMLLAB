
const skillsList = document.getElementById('numbers');
const funFactsList = document.getElementById('funFactsList');

// Arrays for skills and fun facts
const skills = [
    'Adobe Software',
    'Introductory Coding using Visual Studio Code',
    'Design Exploration',
    'Portfolio Development'
];

//footer
const footerElement = document.getElementById("current-year");
if (footerElement) {
    const currentYear = new Date().getFullYear();
    footerElement.innerHTML = `© ${currentYear} Alexandra Quilao`;
    console.log(`Today's date: ${new Date().toLocaleDateString()}`);
} else {
    console.error("Footer element not found - check your HTML ID!");
}

const funFacts = [
    'I love travelling. ✈️',
    'Horror Movies are my favourite genre to watch. 🎥',
    'My favourite band is Wave to Earth. 🌊🎸',
    'I have a 2-month-old puppy named Honey. 🍯'
];

// Clear existing content (if any)
skillsList.innerHTML = '';
funFactsList.innerHTML = '';

// Populate the Skills list
skills.forEach((skill, index) => {
    const li = document.createElement('li');
    li.textContent = `Skill ${index + 1}: ${skill}`;
    skillsList.appendChild(li);
});

// Populate the Fun Facts list
funFacts.forEach((fact, index) => {
    const li = document.createElement('li');
    li.textContent = `Fun Fact ${index + 1}: ${fact}`;
    funFactsList.appendChild(li);
});

// Update footer with the current year
document.getElementById('current-year').textContent = new Date().getFullYear();

