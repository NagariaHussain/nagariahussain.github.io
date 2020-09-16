// ======================================
// JavaScript specific to shorts.html page
// ======================================

// Highlights the search pattern
// inside the HTML
function highlightText(match) {
    return `<span class="highlight">${match}</span>`;
}

// Getting random index 
// in range [0, length of allShorts]
function getRandomIndex(allShorts) {
    // A random number between 0 and len(allShorts)
    let rIndex = Math.floor(Math.random() * allShorts.length);
    // returning the random index
    return rIndex;
}

// (ES6 Class) Model for Post object
class Post {
    // Object constructor
    constructor(heading, author, creationDate, body, category, imageUrl) {
        // Set object properties

        // Set the heading (title) of the post 
        this.heading = heading;

        // Set the author of the post
        this.author = author;

        // Set creation date to given creationDate
        // Set to current date if none provided
        this.creationDate = creationDate || new Date();

        // Set the body of the post
        this.body = body;

        // Set the category of the post
        this.category = category;

        // Set the image url related to the post
        this.imageUrl = imageUrl;
    }

    // Return the category of the post
    getCategory() {
        return this.category;
    }
}

// Posts from bussinessnewsdaily.com and fonearena.com
// unless otherwise stated.
// Can come as JSON from a backend
// An array of `Post` objects
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



// Register with Handlebars a helper function
// to trim the given string to 100 characters
Handlebars.registerHelper('trim', function(string) {
    // if the given string has more 
    // than 100 characters
    if (string.length > 100) {
        // return the first 100 characters
        return string.slice(0, 100) + "...";
    }
    // else return the string as is
    return string;
});

// Random card Generation
// Get card template string source
let cardDataSource = document.getElementById("post-card-template").innerHTML;

// Compile the source using Handlebars
const cardTemplate = Handlebars.compile(cardDataSource);

// Get the div that will hold the random post
const randomPostDiv = document.getElementById("random-post");

// Picking a random post from all posts
// Generating a random index
const randomPostIndex = getRandomIndex(shorts);

// Get a random post using the random index
const randomPost = shorts[randomPostIndex];

// Generate HTML using template function
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
function showPosts() {
    // Container of the list
    const shortsList = document.getElementById("shorts-list");

    // Clear the list
    shortsList.innerHTML = "";

    // Posts to render
    let toRender = shorts;


    // Append post to the list
    for (let i = 0; i < toRender.length; i++) {
        // Getting the current post
        let post = toRender[i];

        // Generating HTML using handlebars template
        let postHTML = cardTemplate({
            index: i,
            title: post.heading,
            author: post.author,
            body: post.body,
            imageUrl: post.imageUrl
        });

        // Appending post to the DOM
        shortsList.insertAdjacentHTML('beforeend', postHTML);
    }
}


// Show All posts initially
showPosts();

// Displaying through Handlebars
// Modal Div
const modalDiv = document.querySelector(".modal");

// Modal Div Template
let dataSource = document.getElementById("modal-template").innerHTML;
const template = Handlebars.compile(dataSource);

// Access all the buttons inside posts
const readMoreButtons = document.querySelectorAll("article button");

// Iterate over each of the read more buttons
for (let button of readMoreButtons) {
    // Add event listener ot this `button`
    button.addEventListener('click', function() {
        // Getting the index (e.g. 0) of post
        // from the id ("shorts0") of the button
        let index = Number(this.id.slice(6));

        // Get the post using the index
        let currentPost = shorts[index];

        // Generating modal content
        // using the template function
        let modalContent = template({
            "title": currentPost.heading,
            "author": currentPost.author,
            "date": currentPost.creationDate.toDateString(),
            "body": currentPost.body
        });

        // Updating modal content
        modalDiv.innerHTML = modalContent;

        // Displaying the modal
        // Trigger show animation
        document.querySelector(".modal-content").style.animationName = "showModal";

        // Show the modal
        modalDiv.style.display = "block";

        // Handeling modal close
        // Access the close button of the modal
        let closeButton = document.getElementsByClassName("close")[0];

        // Listen to click on close button
        closeButton.addEventListener('click', function() {
            // Trigger the hide modal animation
            document.querySelector(".modal-content").style.animationName = "hideModal";
            // Wait for 200ms
            // Then hide the modal from the DOM 
            setTimeout(() => modalDiv.style.display = "none", 200);
        });
    });
}

// Access dropdown for category selection
const categorySelect = document.getElementById("category-selector");

// Listening to category change event
categorySelect.addEventListener('input', function() {
    // Trigger post filtering
    filterPosts(postSearchInput.value, this.value);
});


// Access search text input
const postSearchInput = document.getElementById('post-search-input');

// Listening to search string change
postSearchInput.addEventListener('input', function() {
    // Trigger post filtering 
    filterPosts(this.value, categorySelect.value);
});

// Filter the posts based on
// search string and category
function filterPosts(filterString, category) {
    // Getting all post HTML elements
    let allCards = document.getElementById('shorts-list').children;

    // To track the number of hidden cards
    let hiddenCardsCount = 0;

    // Create Regular Expression object
    // with global "g" and case-insensitive "i"
    let searchPattern = new RegExp(filterString, "gi");

    // Iterating through each of the element
    // in order to apply the filter
    for (let card of allCards) {
        // Showing the card initially
        card.style.display = 'flex';

        // Get the index from the
        // button element's id
        let index = Number(card.children[3].id.slice(6));

        // Get the post at the index
        let currentPost = shorts[index];

        // If category is not ALL
        if (category !== 'ALL') {
            // Hide the elements that are NOT 
            // in the selected category
            if (currentPost.getCategory() !== category) {
                // Hide the `card` from the DOM
                card.style.display = 'none';
                // Increment hidden card count
                hiddenCardsCount += 1;
            }
        }

        // If search string (input box) is not empty
        if (filterString !== '') {
            // Hide the elements that does not satisfy the 
            // search string
            if (searchPattern.test(card.children[1].innerHTML) || searchPattern.test(card.children[2].innerHTML)) {} else {
                // Hide the `card` from the DOM
                card.style.display = 'none';
                // Increment the hidden card count
                hiddenCardsCount += 1;
            }
        }
    }

    // If all the cards are hidden
    // i.e. No result for current filter
    if (hiddenCardsCount === allCards.length) {
        // Show a message to the user
        document.getElementById("no-result").style.display = 'block';
    } else {
        // Hide the message from the DOM
        document.getElementById("no-result").style.display = 'none';
    }
}

// ======================================
// END OF FILE
// ======================================