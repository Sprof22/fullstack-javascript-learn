const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch('https://dog.ceo/api/breeds/list')
.then(response => response.json())
.then(data => console.log(data))

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => generateImage(data.message))

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
    function generateOptions(data){
        const options = data.map(item => `
            <option value='${item}'></option>
        `)
    }


    function generateImage(data) {
        const html = `
            <img src='${data}' alt>
            <p>Click to view of images of ${select.value}s</p>
        `;
        card.innerHTML = html;
    }


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

