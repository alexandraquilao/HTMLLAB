// Get the ordered list (Skills) and unordered list (Fun Facts) elements
const skillsList = document.getElementById('numbers');
const funFactsList = document.getElementById('funFactsList');


const skills = [
    'Adobe Software',
    'Introductory Coding using Visual Studio Code',
    'Design Exploration',
    'Portfolio Development'
];


const funFacts = [
    'I love travelling. ✈️',
    'Horror Movies are my favourite genre to watch. 🎥',
    'My favourite band is Wave to Earth. 🌊🎸',
    'I have a 2 month old puppy named Honey. 🍯'
];


skillsList.innerHTML = '';
funFactsList.innerHTML = '';


skills.forEach((skill, index) => {
    const li = document.createElement('li');
    li.textContent = `Skill ${index + 1}: ${skill}`;
    skillsList.appendChild(li);
});

// Fun Facts list
funFacts.forEach((fact, index) => {
    const li = document.createElement('li');
    li.textContent = `Fun Fact ${index + 1}: ${fact}`;
    funFactsList.appendChild(li);
});

// copyright year
document.getElementById('2024').textContent = new Date().getFullYear();

