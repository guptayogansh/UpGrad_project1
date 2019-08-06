// Get the modal
var modal = document.getElementById("signUpModal");

// Get the button that opens the modal
var btn = document.getElementById("SignUp");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
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
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
}

var btn1 = document.getElementById("SignIn");
btn1.onclick = function(){
   signInModal.style.display = "block";
}

var span1 = document.getElementById("close");
span1.onclick = function(){
  signInModal.style.display = "none";

}



var link = document.getElementById("hyperlink");
link.onclick = function(){
  signInModal.style.display="none";
  modal.style.display="block";

}

