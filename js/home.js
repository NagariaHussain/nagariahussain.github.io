// AVATAR MODAL
// MODAL DIV
const modalDiv = document.querySelector(".modal");
const staffAvatars = document.querySelectorAll(".avatar-grid img");
const closeButton = document.querySelector(".close");

// SHOW MODAL EVENT

for (let avatar of staffAvatars) {
    avatar.addEventListener('click', function () {
        modalDiv.style.display = "block";
    });
}

// CLOSE MODAL EVENT
closeButton.addEventListener('click', function () {
    modalDiv.style.display = "none";
});