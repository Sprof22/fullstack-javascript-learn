const btnUpdate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle')
console.log('we here')

btnUpdate.addEventListener('click', () => {
    const headline = document.getElementById('headline');
    const input = document.querySelector('.input-main');

    headline.textContent = input.value;
    input.value= '';
});

btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container');
    if(listContainer.style.display === 'none'){
        listContainer.style.display = 'block';
        btnToggle.textContent = 'Show List';
    }   else {
        listContainer.style.display = 'none';
        btnToggle.textContent = 'Hide List';
    };
})
// btnUpdate.addEventListener('click', () => {
//  const headline = document.getElementById('headline');
//  const input = document.querySelector('.input-main');

//  console.log(input.value);

// headline.textContent = input.value;
// input.value = '';
// });