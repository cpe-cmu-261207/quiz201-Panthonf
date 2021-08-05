const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length') // BY ID
const color = document.querySelector('#color') // BY SELECTOR

let num = false; // SET NUM = FALSE
const data1 = '630612105 PANTHON KANSAP';
const data2 = '630612105'
    // define more constants and variables here
btn_toggle.onclick = () => { // BOTTON CHANGE STUDENT ID & NAME
    if (num == false) {
        const number = 630612105;
        const number2 = parseInt(length.value); // Converts a string to an integer   - BY ID
        const number3 = number + number2; // NAME + STUDENT ID
        author.innerHTML = number3; //SHOW IN AUTHOR
        btn_toggle.innerHTML = 'Show Author' // SHOW IN BOTTON
        num = true; //CHANGE NUM
    } else if (num == true) {
        author.innerHTML = '630612105 PANTHON KANSAP'
        btn_toggle.innerHTML = 'Show Calculation'
        num = false;
    }
}

// more codes for Search and Reset buttons here
//console.log(length.value)

const btns = document.getElementById('search')
const text = document.querySelector('#text')
btns.onclick = () => {
    text.innerHTML = highlight() // CALL FUNCTION
}

const btnre = document.querySelector('#reset')
btnre.onclick = () => {
    text.innerHTML = reset() // CALL FUNCTION
}

function highlight() {
    let output = "";
    const data = text.textContent.split(" ");
    let replace = "";
    for (let i = 0; i < data.length; i++) {
        let word = data[i];
        if (word.length > length.value) {
            replace = "<span style='color:" + color.value + "'>" + word + "</span>"
        } else {
            replace = word;
        }
        output = output + " " + replace + " ";
    }
    return output
}

function reset() {
    let output = "";
    const data = text.textContent.split(" ");
    let replace = "";
    for (let i = 0; i < data.length; i++) {
        let word = data[i];
        if (word.length > length.value) {
            replace = "<span style='color:#000'>" + word + "</span>"
        } else {
            replace = word;
        }
        output = output + " " + replace + " ";
    }
    return output
}