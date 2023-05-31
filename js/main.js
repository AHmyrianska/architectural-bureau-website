//--------HAMBURGER MENU-----------

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

  
//---------FIXED NAV WHEN SCROLLING-----------

  $(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > document.documentElement.clientHeight) {
        //document.documentElement.clientHeight - window height 
        
          $('.nav').addClass('background')
          $('.nav').addClass('fixed')

       } else {
          $('.nav').removeClass('background')
          $('.nav').removeClass('fixed')
       }
    });
 });


//---------HIGHLIGHT ACTIVE NAV LINK ON PAGE SCROLL-------------

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);
window.addEventListener("scroll", moveImages);


function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150;
    let sectionId = current.getAttribute("id");
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".nav a[href*=" + sectionId + "]").classList.add("chosen")
    } else {
      document.querySelector(".nav a[href*=" + sectionId + "]").classList.remove("chosen");
    }
  });
}

//------MAKE IMAGE MOVE IN SECTIONS--------

function moveImages() {
  
  const mediaQuery = window.matchMedia('(min-width: 1024px)');
  let scrollY = window.pageYOffset;
  let about = document.querySelector("#about");

    const sectionHeight = about.offsetHeight;
    const sectionTop = about.offsetTop - 200;

    if (
      mediaQuery.matches &&
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      $('.about__image').addClass('move-right-bottom');
      $('.about__content').addClass('move-right');
      $('.about__image-reverse').addClass('move-left-bottom');
      $('.about__content-reverse').addClass('move-left');
    }
    else {
      $('.about__image').removeClass('move-right-bottom');
      $('.about__content').removeClass('move-right');
      $('.about__image-reverse').removeClass('move-left-bottom');
      $('.about__content-reverse').removeClass('move-left');
    }
  };


//ENLARGE IMG ON CLICK

let imgsGal = document.getElementsByClassName("img-gal");

for (let i = 0; i < imgsGal.length; i++) {
  imgsGal[i].addEventListener("click", function() {

    this.classList.toggle("cursor");
    this.classList.toggle("opacity");
    this.style.zIndex = 10;

    if(imgsGal[i].classList.contains("big")) {
      this.classList.toggle("zoom");
    } else {
      this.classList.toggle("zoom-big");
    }
  });
}

//GALLERY BUTTON

const btnGal = document.getElementById("button-gal");
const galMore = document.getElementById("gal-more")

btnGal.addEventListener('click', function() {
  galMore.style.display = "grid";
  btnGal.style.display = "none";
} 
)


//SMOOTH SCROLLING FROM NAV TO SECTIONS
const links = document.querySelectorAll(".scroll");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop; //+150

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

