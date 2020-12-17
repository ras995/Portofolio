var goupbtn = document.getElementById("goup");

window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goupbtn.style.display = "block";
  } else {
    goupbtn.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
