// Get the ordered list element
const numbersList = document.getElementById("numbers");

for (let i = 1; i <= 12; i++) {
    // Create a new list item element
    const listItem = document.createElement("li");
    
    // Set the text content with even/odd indicator
    listItem.textContent = `List item ${i} is ${i % 2 === 0 ? 'even' : 'odd'}`;
    
    numbersList.appendChild(listItem);
}
