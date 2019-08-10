// Getting the SignUp modal
var modal = document.getElementById("signUpModal");

// Getting the button that opens the modal
var btn = document.getElementById("SignUp");

// Getting the <span> element that closes the modal
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
// whether it be SignIn modal or SignUp modal or Create Post modal 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }

  if(event.target == createPostModal){
    createPostModal.style.display="none";
  }
  
}

//Similar to SignUp modal done above in the same js file
var btn1 = document.getElementById("SignIn");
btn1.onclick = function(){
   signInModal.style.display = "block";
}

var span1 = document.getElementById("close");
span1.onclick = function(){
  signInModal.style.display = "none";

}

// Getting the hyperlink in SignIn modal to open sign up modal
var link = document.getElementById("hyperlink");
link.onclick = function(){
  signInModal.style.display="none";
  modal.style.display="block";

}


