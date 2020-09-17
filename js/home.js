// ======================================
// JavaScript specific to index.html page
// ======================================

// STAFF DATA (May come from a backend)
// An object of objects with following properties:
// 1. Name as the key of the object
// 2. Twitter handle of the staff
// 3. Role of the staff
// 4. Biography of the staff
const staff = {
    "Deann Hayes": {
        "twitter": "DeanHeyy",
        "role": "Technical Writer",
        "Bio": "Technical writers, also called technical communicators, prepare instruction manuals, how-to guides, journal articles, and other supporting documents to communicate complex and technical information more easily."
    },
    "Lonnie Welch": {
        "twitter": "LonnieToons009",
        "role": "Lead Photographer",
        "Bio": "Technical writers, also called technical communicators, prepare instruction manuals, how-to guides, journal articles, and other supporting documents to communicate complex and technical information more easily."
    },
    "Irene Walker": {
        "twitter": "IreneIvine",
        "role": "Lead Videographer",
        "Bio": "Technical writers, also called technical communicators, prepare instruction manuals, how-to guides, journal articles, and other supporting documents to communicate complex and technical information more easily."
    },
    "Daisy Kelly": {
        "twitter": "busyDaisy",
        "role": "Web Designer",
        "Bio": "Technical writers, also called technical communicators, prepare instruction manuals, how-to guides, journal articles, and other supporting documents to communicate complex and technical information more easily."
    },
    "Fernando Taylor": {
        "twitter": "OfficialFernando",
        "role": "UI/UX Developer",
        "Bio": "Technical writers, also called technical communicators, prepare instruction manuals, how-to guides, journal articles, and other supporting documents to communicate complex and technical information more easily."
    },
    "Zack Williams": {
        "twitter": "ZackTheBuilder",
        "role": "Travel Blogger",
        "Bio": "Technical writers, also called technical communicators, prepare instruction manuals, how-to guides, journal articles, and other supporting documents to communicate complex and technical information more easily."
    },
    "Pearl Welch": {
        "twitter": "pearlOriginal",
        "role": "Assistant Manager",
        "Bio": "Technical writers, also called technical communicators, prepare instruction manuals, how-to guides, journal articles, and other supporting documents to communicate complex and technical information more easily."
    },
    "Donald Cruz": {
        "twitter": "NotTheDuck",
        "role": "Food Blogger",
        "Bio": "Technical writers, also called technical communicators, prepare instruction manuals, how-to guides, journal articles, and other supporting documents to communicate complex and technical information more easily."
    }
};

// AVATAR MODAL
// Modal Div Template
// Get template source text
let staffDataSource = document.getElementById("staff-modal-template").innerHTML;
// Compile the source to template using Handlebars
const template = Handlebars.compile(staffDataSource);

// Get access to the modal div
const modalDiv = document.querySelector(".modal");

// Select All the avatar images
const staffAvatars = document.querySelectorAll(".avatar-grid img");

// Select content inside modal
const modalContent = document.getElementsByClassName("modal-content")[0];

// SHOW MODAL EVENT
// Iterate over each avatar image
for (let avatar of staffAvatars) {
    // Add event listener to listen for 
    // clicks on this `avatar`
    avatar.addEventListener('click', function () {
        // Get current staff data using the alt attribute's value 
        // alt attribute contains the name of the staff
        let currentStaffData = {
            "name": this.alt,
            "role": staff[this.alt]["role"],
            "Bio": staff[this.alt]["Bio"],
            "twitter": staff[this.alt]["twitter"],
            "img_url": this.src,
        };

        // Generate HTML Markup
        modalContent.innerHTML = template(currentStaffData);
        // Trigger modal show animation
        document.querySelector(".modal-content").style.animationName = "showModal";
        // Unhide the modal window
        modalDiv.style.display = "block";

        // CLOSE MODAL EVENT
        // Select the close button
        let closeButton = document.getElementsByClassName("close")[0];
        // Add event listener to listen for 
        // clicks on the close button
        closeButton.addEventListener('click', function () {
            // Trigger hide animation on modal content
            document.querySelector(".modal-content").style.animationName = "hideModal";

            // Hide the modal after 200ms.
            // Added time delay to give the 
            // animation time to complete
            setTimeout(() => modalDiv.style.display = "none", 200);;
        });
    });
}


// Animate category cards on scroll
// Configuration for IntersectionObserver Object
let options = {
    // 100% in view
    threshold: 1.0,
    // In reference to viewport
    root: null,
    // Add margin threshold
    rootMargin: "100px"
};

// Create observer instance
let observer = new IntersectionObserver(callback, options);

// Initially categories are not shown
let categoriesShown = false;

// Select the categories section
let target = document.querySelector('#cat-section');

// Select all the category cards inside the #cat-section div
let cards = document.getElementsByClassName("category-card");

// Iterate over each category card 
for (let card of cards) {
    // Instruct the observer to 
    // observe for intersection of viewport with this 'card'
    observer.observe(card);
}

// Animate avatar image on scroll
// Create another instance of Intersection Observer
// to observe for avatar intersections
let avatarObserver = new IntersectionObserver(showAvatar, options);

// Select all the staff avatars
let avatars = document.getElementsByClassName("circle-avatar");

// Observe every avatar for intersection
// Iterate over all the avatar images
for (let avatar of avatars) {
    // Instruct the observer to observe 
    // for intersection with this `avatar`.
    avatarObserver.observe(avatar);
}


// Callback function to perform operation 
// on intersection b/w elements
function callback(entries) {
    entries.forEach(entry => {
        // If the element is intersecting with the viewport
        if (entry.isIntersecting) {
            // If the element is more than 80% visible
            if (entry.intersectionRatio >= 0.80) {
                // Set the opacity of the target element to 1
                entry.target.style.opacity = 1;
            }
        } else {
            // Not intersecting at all
            // Hide the element
            entry.target.style.opacity = 0;
        }
    });
};

// Callback function to perform operation 
// on intersection b/w elements
function showAvatar(entries) {
    entries.forEach(entry => {
        // If intersecting with window area
        if (entry.isIntersecting && !entry.target.getAttribute("shown")) {
            if (entry.intersectionRatio >= 0.50) {
                // If more than 50% of the container is visible
                entry.target.style.opacity = 1;
                entry.target.setAttribute("shown", true);
            }
        }
    });
}

// ======================================
// END OF FILE
// ======================================