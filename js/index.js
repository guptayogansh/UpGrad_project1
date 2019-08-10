//  Function for opening bloglist page on All Posts button click
var allposts = document.getElementById("allPosts");
allposts.onclick = function(){
 window.location = "./html/bloglist.html";
}

// Function to display create Post Modal
var btn2 = document.getElementById("createPosts");
btn2.onclick = function(){
createPostModal.style.display = "block";
}

// Create post modal X functionality
var span2 = document.getElementById("close1");
span2.onclick = function(){
createPostModal.style.display="none";
}

