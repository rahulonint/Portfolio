const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");
const logo = document.querySelector(".logo")

// logo
logo.textContent = "</rahulonint>"

// show menu
menuBtn.addEventListener("click", () => {
    menu.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
})

// hide menu
closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
})

const navItems = menu.querySelectorAll("li");

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector("a");
        link.classList.remove("active");
    });
}

// add active class to clicked nav item
navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.addEventListener("click", () => {
        changeActiveItem();
        link.classList.add("active");
    })
})

// add box shadow on scroll
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("show-box-shadow", window.scrollY > 0)
})

// read more about
const readMoreBtn = document.querySelector(".read-more");
const readMoreContent = document.querySelector(".read-more-content");

readMoreBtn.addEventListener("click", () => {
    readMoreContent.classList.toggle("show-content");
    if (readMoreContent.classList.contains("show-content")) {
        readMoreBtn.textContent = "Show less";
    }
    else {
        readMoreBtn.textContent = "Show more";
    }
})


