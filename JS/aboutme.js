// For loop to create numbered list
const numbersList = document.getElementById("numbers");
for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `List item ${i} is ${i % 2 === 0 ? 'even' : 'odd'}`;
    numbersList.appendChild(listItem);
}
