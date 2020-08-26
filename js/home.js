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



// // TODO: Theming each page differently
// window.addEventListener("load", function() {
//     let root = document.documentElement;
//     root.style.setProperty('--primary-color', "rgba(152, 255, 143)");
//     console.log(root);
// });

