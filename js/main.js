//sticky navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//responsive navbar

const nav= document.querySelector(".nav-content")
const navigation= document.querySelector(".navigation")
const open= document.querySelector(".hamburger")
const close= document.querySelector(".close")
const navLeft = nav.getBoundingClientRect().left;
open.addEventListener("click",()=>{
  if(navLeft < 0){
    navigation.classList.add("show");
    nav.classList.add("show");
    document.body.classList.add("show");
  }
})

close.addEventListener("click",()=>{
  if(navLeft < 0){
    navigation.classList.remove("show");
    nav.classList.remove("show");
    document.body.classList.remove("show");
  }
})


//dropdown
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}