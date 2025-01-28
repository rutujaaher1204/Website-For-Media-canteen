// Get the search bar and the menu items 
const searchbar = document.getElementById('searchbar'); 
const menuItems = document.querySelectorAll('.menu');

// Add an event listener for the 'keyup' event on the search bar 
searchbar.addEventListener('keyup', (e) => { 
    const userInput = e.target.value.toLowerCase();

// Filter the menu items based on user input 
menuItems.forEach((item) => { 
    const foodName = item.getAttribute('data-name').toLowerCase();


if (foodName.includes(userInput)) { 
    item.style.display = 'block';
 } 
 else {
     item.style.display = 'none';
     }
     }); 
     });