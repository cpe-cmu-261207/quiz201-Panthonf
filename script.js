const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
    btn_toggle.classList.toggle('button');
    author.innerHTML = '640631102'
    btn_toggle.innerHTML = 'Display Author'
        // your code here
}

// more codes for Search and Reset buttons here
