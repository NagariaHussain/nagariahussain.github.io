// Automatically highlighting the active
// navigation link
const navLinks = Array.from(document.querySelectorAll("nav li a"));

for (let link of navLinks) {
    console.log(link.href);
    console.log(location.href);
    if (link.href === location.href) {
        link.parentElement.classList.add("active-link");
        link.href = "#";
    }
}

// Mobile naviagtion
const navButton = document.getElementsByClassName("nav-button")[0];
const mobileNavPage = document.getElementsByClassName("mobile-nav")[0];

// Handle Nav Button click
navButton.addEventListener('click', function() {
    // Toggle Show/Hide Navigation Page
    mobileNavPage.classList.toggle('show-nav');
    mobileNavPage.toggleAttribute("open");

    // Change button icon
    navButton.classList.toggle("is-active");

});
