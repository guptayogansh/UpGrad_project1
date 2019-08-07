var edit = document.getElementById("edit");
var save = document.getElementById("save");
edit.onclick = function(){
  edit.style.display="none";
  save.style.display="block";
  document.getElementById("blogBody").style.boxShadow = "inset 0 0 5px #000";
  document.getElementById("blogBody").contentEditable="true";
}

save.onclick = function(){
  edit.style.display="block";
  save.style.display="none";
  document.getElementById("blogBody").style.boxShadow = "none";
  document.getElementById("blogBody").contentEditable="false";

}

