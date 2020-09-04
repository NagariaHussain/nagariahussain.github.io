// STAFF DATA (May come from a backend)
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
let staffDataSource = document.getElementById("staff-modal-template").innerHTML;
const template = Handlebars.compile(staffDataSource);

// Modal Div
const modalDiv = document.querySelector(".modal");
const staffAvatars = document.querySelectorAll(".avatar-grid img");
const modalContent = document.getElementsByClassName("modal-content")[0];

// SHOW MODAL EVENT
for (let avatar of staffAvatars) {
    avatar.addEventListener('click', function () {
        let currentStaffData = {
            "name": this.alt,
            "role": staff[this.alt]["role"],
            "Bio": staff[this.alt]["Bio"],
            "twitter": staff[this.alt]["twitter"],
            "img_url": this.src,
        };

        // Generate HTML Markup
        modalContent.innerHTML = template(currentStaffData);
        document.querySelector(".modal-content").style.animationName = "showModal";
        modalDiv.style.display = "block";

        // CLOSE MODAL EVENT
        let closeButton = document.getElementsByClassName("close")[0];
        closeButton.addEventListener('click', function () {
            document.querySelector(".modal-content").style.animationName = "hideModal";
            setTimeout(() => modalDiv.style.display = "none", 200);
            ;
        });
    });
}


// Animate category cards on scroll
let options = {
    threshold: 1.0,
    root: null,
    rootMargin: "100px"
};

let observer = new IntersectionObserver(callback, options);
let categoriesShown = false;
let target = document.querySelector('#cat-section');

let cards = document.getElementsByClassName("category-card");
for (let card of cards) {
    observer.observe(card);
}


function callback(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.80) {
                entry.target.style.opacity = 1;
            }
        }
        else {
            entry.target.style.opacity = 0;
        }
    });
};

// Animate avatar image on scroll
let avatarObserver = new IntersectionObserver(showAvatar, options);
let avatars = document.getElementsByClassName("circle-avatar");

// Observe every avatar for intersection
for (let avatar of avatars) {
    avatarObserver.observe(avatar);
}

// Show avatar on scroll
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


