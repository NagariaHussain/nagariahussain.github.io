// (ES6 Class) Modal for Post object
class Post {
    constructor(heading, author, creationDate, body, category, imageUrl) {
        this.heading = heading;
        this.author = author;
        this.creationDate = creationDate || new Date();
        this.body = body;
        this.category = category;
        this.imageUrl = imageUrl;
    }

    getCategory() {
        return this.category;
    }
}

// Posts from bussinessnewsdaily.com and fonearena.com
// unless otherwise stated
// Can come as JSON from a backend
const shorts = [
    new Post(
        "The Best Receipt-Tracking Tools for Professionals",
        "Andrew Martins",
        new Date(2020, 8, 25),
        "Modern receipt-tracking apps help businesses track and calculate a wide range of expenses. From desktop computer software to apps designed for your mobile phone, receipt-tracking software digitizes documentation, and ensures simple reimbursement and taxation. Though apps do most of the work, businesses should establish best practices to ensure paperwork is kept organized. This article is for any small business owner looking to streamline their receipt-tracking efforts using specialized software.",
        "BUSSINESS",
        "/assets/images/shorts_page/banner0.webp"
    ),
    new Post(
        "Apple said to start direct online store in India from September",
        "Milan Nair",
        new Date(2020, 8, 26),
        "After nearly a year since the Indian Government relaxed Foreign Direct Investment (FDI) norms, Apple is set to finally begin selling their products directly through their online store in India. Along with this, Apple is also reportedly looking into opening a second physical store in Bangalore, India.",
        "BUSSINESS",
        "/assets/images/shorts_page/banner1.jpg"
    ),
    new Post(
        "25 Types of Insurance Your Small Business Should Consider",
        "Skye Schooley",
        new Date(2020, 8, 27),
        "Business insurance protects your company from financial loss in the event of an accident or crisis. There are several types of business insurance that can protect you and your property against liability and disaster. The best combination of insurance depends on your specific business needs. This article is for entrepreneurs, startups and small business owners who want to know what types of business insurance are available.",
        "BUSSINESS",
        "/assets/images/shorts_page/banner7.webp"
    ),
    new Post(
        "Difference Between LLC and Inc.",
        "Adam Uzialko",
        new Date(2020, 6, 26),
        "LLCs limit owner liability and offer more flexible taxation as a pass-through entity. Corporations, such as S-corps and C-corps, are entities for larger, profitable businesses or those with shareholders. How you incorporate your business entity has a profound effect on the organization of your company, the distribution of profits and losses, and the way your business is taxed. This article is for entrepreneurs trying to determine the best type of business entity for their company when preparing to incorporate.",
        "BUSSINESS",
        "/assets/images/shorts_page/banner8.webp"
    ),
    new Post(
        "Realme 7 and Realme 7 Pro launching in India on September 3",
        "Srivatsan Sridhar",
        new Date(2020, 8, 27),
        "The realme 7 Pro will be one of India’s fastest charging phone that can charge from 0 to 100% in 34 minutes. 3 minutes of charging will offer 3.5 hours calling, 2.5 hours movie, 13.2 hours music and 3 rounds on PUBG, says the company. The company’s CEO says that it will be the best mid-range flagship with India’s fastest charging. The phone has passed TUV Reinland certification.",
        "TECHNOLOGY",
        "/assets/images/shorts_page/banner1.jpg"
    ),
    new Post(
        "Moto g9: The go-to mobile of 2020 under Rs. 12,000",
        "Sponsored Motorola",
        new Date(2020, 7, 15),
        "Right now, if you ask any tech enthusiast about the most memorable smartphone from Motorola, they may say the iconic flip phone Moto Razr V3. Well, if you ask anyone now about Motorola’s legendary comeback after a long gap, the Moto g series comes to mind, a great line-up of smartphones that are still running today.",
        "TECHNOLOGY",
        "/assets/images/shorts_page/banner4.jpg"
    ),
    new Post(
        "Xiaomi shows off 3rd generation under-display camera technology, smartphones coming in 2021",
        "Srivatsan Sridhar",
        new Date(2020, 8, 28),
        "Xiaomi today introduced its third-generation under-display smartphone camera technology, which the company says is the best solution for under-screen cameras, with perfect display and selfies. The first generation of under-screen camera technology that was introduced in June 2019 with transparent cathode and anode materials laid the foundation for the subsequent development of under-screen camera technology, said the CEO Lei Jun.",
        "TECHNOLOGY",
        "/assets/images/shorts_page/banner5.gif"
    ),
    new Post(
        "Walmart is working with Microsoft in a deal to acquire TikTok’s US operations",
        "Milan Nair",
        new Date(2020, 8, 20),
        "The September 15th deadline is nearing and TikTok is yet to finalize a deal with either Oracle or Microsoft to sell their app’s operations in U.S., Canadian, Australian and New Zealand. Now, Walmart has expressed their interest in partnering with Microsoft to acquire TikTok’s operations.",
        "TECHNOLOGY",
        "/assets/images/shorts_page/banner6.jpg"
    ),
    new Post(
        "Caged Congolese man: Why a zoo took 114 years to apologise",
        "Staff",
        new Date(2020, 8, 26),
        "The Wildlife Conservation Society's apology for its 1906 exhibition of Ota Benga, a native of Congo, comes in the wake of global protests prompted by the videotaped police killing of George Floyd that again shone a bright light on racism in the United States. During a national moment of reckoning, Cristian Samper, the Wildlife Conservation Society's president and CEO, said it was important 'to reflect on WCS's own history, and the persistence of racism in our institution'.",
        "WORLD",
        "/assets/images/shorts_page/banner3.png"
    ),
    // by hindustantimes.com
    new Post(
        "China’s missiles warn US aircraft carriers to stay away",
        "Kanishka Sarkar",
        new Date(2020, 8, 28),
        "China’s latest volley of missile launches into the world’s most hotly contested body of water served as a warning to two key US targets: aircraft carriers and regional bases. The missiles launched into the South China Sea on Wednesday included the DF-21D and DF-26B, the South China Morning Post reported, citing a person close to the People’s Liberation Army. Those weapons are central to China’s strategy of deterring any military action off its eastern coast by threatening to destroy the major sources of US power projection in the region.",
        "WORLD",
        "/assets/images/shorts_page/banner9.webp"
    ),
    // by theguardian.com
    new Post(
        "Japan PM Shinzo Abe quits over health concerns",
        "Justin McCurry",
        new Date(2020, 8, 28),
        "Japan’s prime minister, Shinzo Abe, has said he will resign because of his declining health, telling a shocked country that the return of a chronic bowel condition had left him unable to steer it through the coronavirus pandemic. 'Poor health should not influence political decisions, and as long as I am unable to meet the expectations of the Japanese people, I have decided that I cannot stay on as prime minister and will step down,' Abe told a televised news conference on Friday.",
        "WORLD",
        "/assets/images/shorts_page/banner10.jpg"
    ),
    // by https://www.bbc.com/news/av/world-us-canada-53941956
    new Post(
        "Hurricane Laura slams Louisiana and Texas",
        "Staff",
        new Date(2020, 5, 27),
        "At least six people were killed and hundreds of thousands left without power as Hurricane Laura struck with winds of up to 150mph (240km/h).",
        "WORLD",
        "/assets/images/shorts_page/banner11.jpg"
    )
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
const randomPostDiv = document.getElementById("random-post");

// Picking a random post from all posts
const randomPostIndex = getRandomIndex(shorts);
const randomPost = shorts[randomPostIndex];

// Updating HTML for random post
randomPostDiv.innerHTML = cardTemplate({
    index: randomPostIndex,
    title: randomPost.title,
    author: randomPost.author,
    body: randomPost.body,
    imageUrl: randomPost.imageUrl
});


// Render Posts to page 
// Show all posts if no category is provided
function showPosts(category) {
    const shortsList = document.getElementById("shorts-list");
    // Clear the list
    shortsList.innerHTML = "";

    // Posts to render
    let toRender = shorts;

    // If a particular category is to be rendered
    if (category != null) {
        toRender = getShortsOfCategory(shorts, category);
    }

    // Append post to the list
    for (let i = 0; i < toRender.length; i++) {
        let post = toRender[i];
        let postHTML = `<li>${cardTemplate({
            index: i,
            title: post.title,
            author: post.author,
            body: post.body,
            imageUrl: post.imageUrl
        })}</li>`;

        // Appending post to the DOM
        shortsList.insertAdjacentHTML('beforeend', postHTML);
    }
}

showPosts('TECHNOLOGY');

// Displaying through Handlebars
// Modal Div
const modalDiv = document.querySelector(".modal");

// Modal Div Template
let dataSource = document.getElementById("modal-template").innerHTML;
const template = Handlebars.compile(dataSource);

// Attaching event listeners to buttons
const readMoreButtons = document.querySelectorAll("article button");

// Attaching event to every "Read more" button
// inside the shorts.html page
for (let button of readMoreButtons) {
    button.addEventListener('click', function () {
        // Getting the index of post
        // from the id of the button
        let index = Number(this.id.slice(6));
        let currentPost = shorts[index];

        console.log(this.id.slice(6));
        // Generating modal content
        let modalContent = template({
            "title": currentPost.heading,
            "author": currentPost.author,
            "date": currentPost.creationDate,
            "body": currentPost.body
        });

        // Updating modal content
        modalDiv.innerHTML = modalContent;

        // Displaying the modal
        document.querySelector(".modal-content").style.animationName = "showModal";
        modalDiv.style.display = "block";

        // Handeling modal close
        let closeButton = document.getElementsByClassName("close")[0];
        closeButton.addEventListener('click', function () {
            // Hiding the modal after an animation
            document.querySelector(".modal-content").style.animationName = "hideModal";
            // Adding delay to enable hiding animation
            setTimeout(() => modalDiv.style.display = "none", 200);
        });
    });
}

const categorySelect = document.getElementById("category-selector");

categorySelect.addEventListener('input', function () {
    if (this.value === "ALL")
        showPosts();
    else 
        showPosts(this.value);
});