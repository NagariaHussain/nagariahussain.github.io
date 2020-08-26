// STAFF DATA (May come from a backend)
const staff = {
    "Deann Hayes": {
        "twitter": "@DeanHeyy",
        "role": "Tech Blogger",
        "Bio": "She is an excellent blogger and a nerd."
    }
};
// AVATAR MODAL
// MODAL DIV
const modalDiv = document.querySelector(".modal");
const staffAvatars = document.querySelectorAll(".avatar-grid img");
const closeButton = document.querySelector(".close");
const modalContent = document.getElementsByClassName("modal-content")[0];

// SHOW MODAL EVENT
for (let avatar of staffAvatars) {
    avatar.addEventListener('click', function (e) {
        console.log(this.alt);
        const p = document.createElement("p");
        p.innerText = staff[this.alt]["twitter"];
        console.log(modalContent);
        modalContent.insertAdjacentElement("beforeend", p);
        modalDiv.style.display = "block";
    });
}

// CLOSE MODAL EVENT
closeButton.addEventListener('click', function () {
    modalDiv.style.display = "none";
});


// // TODO: Theming each page differently
// window.addEventListener("load", function() {
//     let root = document.documentElement;
//     root.style.setProperty('--primary-color', "rgba(152, 255, 143)");
//     console.log(root);
// });

