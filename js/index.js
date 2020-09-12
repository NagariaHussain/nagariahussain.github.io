// ======================================
// JavaScript common to all HTML pages
// ======================================

// Automatic insertion of current year in copyright info
const copyrightYearSpan = document.getElementById("copy-year-span");
// Get current year
const currentYear = new Date().getFullYear();
// Update span text
copyrightYearSpan.innerText = currentYear;


// NAVIGATION TEMPLATE
const source = `
<!-- DESKTOP NAVIGATION -->
    <nav class="desktop-nav">
        <a href="../report.html" target="_blank" class="logo">CHORD</a>
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

// Compile the template using handlebars
const navTemplate = Handlebars.compile(source);

// Generate HTML using the template function
const navHTML = navTemplate();

// Get access to the `navigation` div
const navDiv = document.getElementById('navigation');

// Insert the navigation HTML
navDiv.innerHTML = navHTML;


// Activating Mobile navigation

// Access the nav-button from the DOM
const navButton = document.getElementsByClassName("nav-button")[0];

// Access the mobile-nav page from the DOM
const mobileNavPage = document.getElementsByClassName("mobile-nav")[0];

// Handle Nav Button click
navButton.addEventListener('click', function() {
    // Toggle Show/Hide Navigation Page
    mobileNavPage.classList.toggle('show-nav');
    // Change button icon
    navButton.classList.toggle("is-active");
});


// Automatically highlight the active
// navigation link
const navLinks = Array.from(document.querySelectorAll("nav ul li a"));

// Iterate over all the navigation links
for (let link of navLinks) {
    // If the link points to current page
    if (link.href === location.href) {
        // Highlight the link using `active-link` class
        link.parentElement.classList.add("active-link");
        // Make the link point to current page
        link.href = "#";
    }
}

// Theming each page differently
// Getting access to the global root scope (pseudo element)
let root = document.documentElement;

// Change primary theme color based on window location

// If the user is on shorts.html page
if (location.pathname === "/pages/shorts.html") {
    // Update the primary colors
    root.style.setProperty('--primary-color', "#ffc93c");
    root.style.setProperty('--primary-backdrop-color', "rgba(255, 201, 60, 0.6)");
}

// If the user is on programming.html page
else if (location.pathname === "/pages/programming.html") {
    // Update the primary colors
    root.style.setProperty('--primary-color', "#a3d2ca");
    root.style.setProperty('--primary-backdrop-color', "rgba(163, 210, 202, 0.6)");
}

// If the user is on travel.html page
else if (location.pathname === "/pages/travel.html") {
    // Update the primary colors
    root.style.setProperty('--primary-color', "#ffc1f3");
    root.style.setProperty('--primary-backdrop-color', "rgba(255, 193, 243, 0.6)");
}

// If the user is on food.html page
else if (location.pathname === "/pages/food.html") {
    // Update the primary colors
    root.style.setProperty('--primary-color', "#ee6f57");
    root.style.setProperty('--primary-backdrop-color', "rgba(238, 111, 87, 0.6)");
}

// ======================================
// END OF FILE
// ======================================