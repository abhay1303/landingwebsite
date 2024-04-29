let button = document.getElementsByClassName("menubutton")[0]

let button2 = document.getElementsByClassName("crossbutton")[0]

let input1 = document.getElementById("name")
let input2 = document.getElementById("email")
let input3 = document.getElementById("message")
let submit = document.getElementById("submit")

button.addEventListener("click", display)

button2.addEventListener("click", remove)

submit.addEventListener("click", print)

function display() {
    document.getElementById("menupage").style.visibility = "visible";
}

function remove() {
    document.getElementById("menupage").style.visibility = "hidden";
}

function print() {
    let x = document.getElementById("name").value;
    let z = document.getElementById("message").value;
    let text;
    let text1;

    if (x == "") {
        alert("Name must be filled out");
    }

    if (x.length < 3 || x.length > 11) {
        text = "Input not valid";
    }
    else {
        console.log(input1.value);
    }

    
    document.getElementById("namerror").innerText = text;
    // console.log(input2.value);
    // console.log(input3.value);
}
let x1 = document.getElementById("name")
x1.addEventListener("click",remove1)
 
function remove1() {
 document.getElementById("namerror").innerText = "";
}
