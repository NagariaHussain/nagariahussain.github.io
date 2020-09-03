// Automatic insertion of current year in copyright info
const copyrightYearSpan = document.getElementById("copy-year-span");
// Get current year
const currentYear = new Date().getFullYear();
// Update span text
copyrightYearSpan.innerText = currentYear;


// NAVIGATION BAR/PAGE TEMPLATE
const source = `
<!-- DESKTOP NAVIGATION -->
    <nav class="desktop-nav">
        <a href="/" class="logo">CHORD</a>
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/pages/shorts.html">SHORTS</a></li>
            <li><a href="/pages/programming.html">PROGRAMMING</a></li>
            <li><a href="/pages/food.html">FOOD</a></li>
            <li><a href="/pages/travel.html">TRAVEL</a></li>
        </ul>
    </nav>

    <!-- MOBILE NAVIGATION BUTTON -->
    <button class="nav-button hamburger hamburger--elastic" aria-label="Menu" aria-controls="navigation"
        aria-expanded="false">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>

    <!-- MOBILE NAVIGATION -->
    <nav class="mobile-nav">
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/pages/shorts.html">SHORTS</a></li>
            <li><a href="/pages/programming.html">PROGRAMMING</a></li>
            <li><a href="/pages/food.html">FOOD</a></li>
            <li><a href="/pages/travel.html">TRAVEL</a></li>
        </ul>
    </nav>
`;

const navTemplate = Handlebars.compile(source);
const navHTML = navTemplate();
const navDiv = document.getElementById('navigation');

// Insert in HTML
navDiv.innerHTML = navHTML;



// Mobile naviagtion
const navButton = document.getElementsByClassName("nav-button")[0];
const mobileNavPage = document.getElementsByClassName("mobile-nav")[0];

// Handle Nav Button click
navButton.addEventListener('click', function () {
    // Toggle Show/Hide Navigation Page
    mobileNavPage.classList.toggle('show-nav');
    // Change button icon
    navButton.classList.toggle("is-active");
});


// Automatically highlight the active
// navigation link
const navLinks = Array.from(document.querySelectorAll("nav ul li a"));

for (let link of navLinks) {
    if (link.href === location.href) {
        link.parentElement.classList.add("active-link");
        link.href = "#";
    }
}

// EXPERIMENTAL
// Theming each page differently
// by changing the CSS Variable: --primary-color
// window.addEventListener("load", function() {
    // Getting access to the global root scope (pseudo element)
    let root = document.documentElement;

    // Change primary theme color based on window location
    if (location.pathname === "/pages/shorts.html") {
        root.style.setProperty('--primary-color', "#ffc93c");
        root.style.setProperty('--primary-backdrop-color', "rgba(255, 201, 60, 0.6)");
    }
    else if (location.pathname === "/pages/programming.html") {
        root.style.setProperty('--primary-color', "#a3d2ca");
        root.style.setProperty('--primary-backdrop-color', "rgba(163, 210, 202, 0.6)");

    } 
    else if (location.pathname === "/pages/travel.html") {
        root.style.setProperty('--primary-color', "#ffc1f3");
        root.style.setProperty('--primary-backdrop-color', "rgba(255, 193, 243, 0.6)");

    }
    else if (location.pathname === "/pages/food.html") {
        root.style.setProperty('--primary-color', "#ee6f57");
        root.style.setProperty('--primary-backdrop-color', "rgba(238, 111, 87, 0.6)");

    }
// });

