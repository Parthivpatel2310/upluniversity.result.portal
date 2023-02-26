let submit = document.getElementById("submit");
let username= document.getElementById("username");
let password = document.getElementById("password");
//let helpText = document.getElementByClass("help-text");


const validateusername = (username) => {
    return String(username)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

submit.onmouseover = () => {
    if (validateusername(username.value) && password.value.length > 4) {
        helpText.innerText = "Now you can submit"
    } else {
        if (submit.style.alignSelf === "flex-end") {
            submit.style.alignSelf = "flex-start"
        }
        else {
            submit.style.alignSelf = "flex-end"
        }
       // helpText.innerText = "You cannot submit until your email is validated and passowrd is greater than 8 characters"
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("submit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
