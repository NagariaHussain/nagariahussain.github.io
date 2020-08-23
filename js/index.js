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
        <a href="/" id="logo">CHORD</a>
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
navButton.addEventListener('click', function() {
    // Toggle Show/Hide Navigation Page
    mobileNavPage.classList.toggle('show-nav');

    // Change button icon
    navButton.classList.toggle("is-active");
});


// Automatically highlight the active
// navigation link
const navLinks = Array.from(document.querySelectorAll("nav ul li a"));

for (let link of navLinks) {
    console.log(link);
    if (link.href === location.href) {
        link.parentElement.classList.add("active-link");
        link.href = "#";
    }
}
