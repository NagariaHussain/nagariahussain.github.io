// Modal for Post object
class Post {
    constructor(heading, author, creationDate, body, category) {
        this.heading = heading;
        this.author = author;
        this.creationDate = creationDate || new Date();
        this.body = body;
        this.category = category;
    }

    getCategory() {
        return this.category;
    }
}

// Can come as JSON from a backend
const shorts = [
    new Post(
        "The Best Receipt-Tracking Tools for Professionals",
        "Andrew Martins",
        new Date(2020, 8, 25),
        "Modern receipt-tracking apps help businesses track and calculate a wide range of expenses. From desktop computer software to apps designed for your mobile phone, receipt-tracking software digitizes documentation, and ensures simple reimbursement and taxation. Though apps do most of the work, businesses should establish best practices to ensure paperwork is kept organized. This article is for any small business owner looking to streamline their receipt-tracking efforts using specialized software.",
        "BUSSINESS"),
    new Post(
        "Apple said to start direct online store in India from September",
        "Milan Nair",
        new Date(2020, 8, 26),
        "After nearly a year since the Indian Government relaxed Foreign Direct Investment (FDI) norms, Apple is set to finally begin selling their products directly through their online store in India. Along with this, Apple is also reportedly looking into opening a second physical store in Bangalore, India.",
        "BUSSINESS"
    ),
    new Post(
        "Realme 7 and Realme 7 Pro launching in India on September 3",
        "Srivatsan Sridhar",
        new Date(2020, 8, 27),
        "The realme 7 Pro will be one of India’s fastest charging phone that can charge from 0 to 100% in 34 minutes. 3 minutes of charging will offer 3.5 hours calling, 2.5 hours movie, 13.2 hours music and 3 rounds on PUBG, says the company. The company’s CEO says that it will be the best mid-range flagship with India’s fastest charging. The phone has passed TUV Reinland certification.",
        "TECHNOLOGY"
    ),
    new Post(
        "Caged Congolese man: Why a zoo took 114 years to apologise",
        "Ota Benga",
        new Date(2020, 8, 26),
        "The Wildlife Conservation Society's apology for its 1906 exhibition of Ota Benga, a native of Congo, comes in the wake of global protests prompted by the videotaped police killing of George Floyd that again shone a bright light on racism in the United States. During a national moment of reckoning, Cristian Samper, the Wildlife Conservation Society's president and CEO, said it was important 'to reflect on WCS's own history, and the persistence of racism in our institution'.",
        "WORLD"
    ),
];

// Getting random post
function getRandomIndex(allShorts) {
    // A random number between 0 and len(allShorts)
    let rIndex = Math.floor(Math.random() * allShorts.length);
    // returning post at random index
    return rIndex;
}

// Getting shorts of category
function getShortsOfCategory(allShorts, category) {
    // All posts where catergory = post.category
    return allShorts.filter(
        (post) => post.getCategory() === category
    );
}

// Random card Generation
let cardDataSource = document.getElementById("post-card-template").innerHTML;
const cardTemplate = Handlebars.compile(cardDataSource);
const randomPostDiv= document.getElementById("random-post");
const randomPostIndex = getRandomIndex(shorts);
const randomPost = shorts[randomPostIndex];

randomPostDiv.innerHTML = cardTemplate({
    index: randomPostIndex,
    title: randomPost.title,
    author: randomPost.author,
    body: randomPost.body,
    imageUrl: randomPost.imageUrl
});

// Displaying through Handlebars
// Modal Div
const modalDiv = document.querySelector(".modal");

// Modal Div Template
let dataSource = document.getElementById("modal-template").innerHTML;
const template = Handlebars.compile(dataSource);

// Attaching event listeners to buttons
const readMoreButtons = document.querySelectorAll("article button");
for (let button of readMoreButtons) {
    button.addEventListener('click', function () {
        // Getting the index of post
        let index = Number(this.id.slice(5));
        let currentPost = shorts[index];

        let modalContent = template({
            "title": currentPost.heading,
            "author": currentPost.author,
            "date": currentPost.creationDate,
            "body": currentPost.body
        });

        modalDiv.innerHTML = modalContent;
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
