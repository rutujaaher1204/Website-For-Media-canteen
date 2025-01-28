// const menuTable=document.querySelector('#menu-table');
// const menuItems=Array.from(menuTable.querySelectorAll('.menu'));
// const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]');

// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener('change', () => {
//     const checkedValues = Array.from(checkboxes)
//       .filter((checkbox) => checkbox.checked)
//       .map((checkbox) => checkbox.value)
//       .join(',');

//     // Filter the menu items based on the checked values
//     menuItems.forEach((item) => {
//       const price = item.getAttribute('data-price');

//       if (checkedValues.includes(price)) {
//         item.style.display = 'table-row';
//       } else {
//         item.style.display = 'none';
//       }
//     });
//   });
// });
// const priceDropdown = document.querySelector('#price-dropdown');
// const menuItems = Array.from(document.querySelectorAll('.menu'));
// priceDropdown.addEventListener('change', () => {
//   const selectedValue = priceDropdown.value;

//   // Filter the menu items based on the selected value
//   menuItems.forEach((item) => {
//     const price = item.getAttribute('data-price');

//     if (selectedValue === '' || selectedValue === price) {
//       item.style.display = 'table-row';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// });
    
document.addEventListener('DOMContentLoaded', () => {
  const priceDropdown = document.querySelector('#price-dropdown');
  const menuItems = Array.from(document.querySelectorAll('.menu'));

  priceDropdown.addEventListener('change', () => {
    const selectedValue = priceDropdown.value;

    // Filter the menu items based on the selected value
    menuItems.forEach((item) => {
      const price = item.getAttribute('data-price');

      if (selectedValue === '' || selectedValue === price) {
        item.style.display = 'table-row';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
