const dropDown = document.querySelectorAll('.drop-down');
const dropDownContent = document.querySelectorAll('.drop-down-content');

// create an event listener for each drop down

dropDown.forEach((item, index) => {
  item.addEventListener('click', () => {
    dropDownContent[index].classList.toggle('visible');
  });
});
