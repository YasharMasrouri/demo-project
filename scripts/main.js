
// Functions for making navigation bar responsive.
function navbarResponsive() {
    let x = document.getElementById("mainNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

const mediaQuery = window.matchMedia('(min-width: 600px)')
function navbarReset(e) {
    // Check if the media query is true

    if (e.matches) {
        let nav = document.getElementById("mainNav");
        nav.className = "navbar";
    }
}
// Register event listener
mediaQuery.addEventListener("change", navbarReset)

function toggleDropdown() {
    console.log("clicked");
    document.getElementById("about-dropdown-content").classList.toggle("dropdown-visible");
}
// navbar end **


// slide show functions

let slideIndex = 1;

window.addEventListener('load', function() {
    showDivs()
    setTimeout(function(){
        document.body.className="";
    },1000);
});

function plusDivs(n) {
    slideIndex += n;
    showDivs();
}

function currentDiv(n) {
    slideIndex = n;
    showDivs();
}

function showDivs() {
    let i;
    let x = document.getElementsByClassName("slideShow-slide");
    let dots = document.getElementsByClassName("slideShow-image-badge");
    if (slideIndex > x.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = x.length}

    for (i = 0; i < x.length; i++) {
        // x[i].className = "slideShow-slide";
        x[i].className = x[i].className.replace("slide-visible", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    x[slideIndex-1].className += " slide-visible";
    dots[slideIndex-1].className += " active";
    // slideIndex++;
    // setTimeout(showDivs, 3000)

}

// slide show end **

// login card functions
function showSignIn() {
    const backdrop = document.getElementById("backdrop")
    const signInForm = document.getElementById("signIn-card")
    const loginForm = document.getElementById("login-card")

    backdrop.style.visibility = "visible"
    loginForm.style.display = "none";
    signInForm.style.display = "block";
}
function showLogin() {
    const backdrop = document.getElementById("backdrop")
    const signInForm = document.getElementById("signIn-card")
    const loginForm = document.getElementById("login-card")

    backdrop.style.visibility = "visible"
    signInForm.style.display = "none";
    loginForm.style.display = "block";
}
function closeBackdrop() {
    const backdrop = document.getElementById("backdrop")

    backdrop.style.visibility = "hidden"
}
//*******

// product image slideshow
let imageIndex = 1;
window.addEventListener('load', function() {
    showImage()
});
function showImage(){
    let i;
    let slides = document.getElementsByClassName("product-info-pic-slide");
    let dots = document.getElementsByClassName("product-info-pic-badge");

    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace("current-slide", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("current-badge", "");
    }
    slides[slideIndex-1].className += " current-slide";
    dots[slideIndex-1].className += " current-badge";
}
function currentSlide(n) {
    slideIndex = n;
    showImage();
}

