const cards = [
    {
        name: "Wireless headphones",
        category: "electronics",
        price: 79,
        tags: ["audio", "wireless"],
        thumb: "WH",
        title: "Wireless headphones",
        description: "Comfortable over-ear headphones with active noise cancellation."
    },
    {
        name: "Classic tee",
        category: "apparel",
        price: 19,
        tags: ["clothing", "casual"],
        thumb: "CT",
        title: "Classic tee",
        description: "Soft cotton t-shirt — great for everyday wear."
    },
    {
        name: "JavaScript Guide",
        category: "books",
        price: 29,
        tags: ["programming", "js"],
        thumb: "JS",
        title: "JavaScript Guide",
        description: "A concise guide to modern JavaScript for developers."
    },
    {
        name: "Smartphone",
        category: "electronics",
        price: 499,
        tags: ["mobile", "android"],
        thumb: "SP",
        title: "Smartphone",
        description: "Latest-gen smartphone with high-resolution display and fast processor."
    },
    {
        name: "Running shoes",
        category: "apparel",
        price: 59,
        tags: ["footwear", "sport"],
        thumb: "RS",
        title: "Running shoes",
        description: "Lightweight and comfortable running shoes for daily training."
    },
    {
        name: "Laptop backpack",
        category: "apparel",
        price: 45,
        tags: ["bag", "work"],
        thumb: "LB",
        title: "Laptop backpack",
        description: "Durable backpack with padded laptop compartment."
    },
    {
        name: "Bluetooth speaker",
        category: "electronics",
        price: 39,
        tags: ["audio", "portable"],
        thumb: "BS",
        title: "Bluetooth speaker",
        description: "Compact wireless speaker with rich bass and long battery life."
    },
    {
        name: "Cookbook",
        category: "books",
        price: 22,
        tags: ["cooking", "recipes"],
        thumb: "CB",
        title: "Cookbook",
        description: "A collection of easy-to-follow recipes from around the world."
    },
    {
        name: "Denim jacket",
        category: "apparel",
        price: 89,
        tags: ["clothing", "casual"],
        thumb: "DJ",
        title: "Denim jacket",
        description: "Classic denim jacket with a modern fit."
    },
    {
        name: "Gaming mouse",
        category: "electronics",
        price: 59,
        tags: ["gaming", "accessory"],
        thumb: "GM",
        title: "Gaming mouse",
        description: "High-precision gaming mouse with customizable RGB lighting."
    }
];

function createCard(arr) {
    if (!arr.length) {
        document.querySelector('#resultsGrid').textContent = 'No results found!';
        return
    }

    arr.forEach(element => {
        const article = document.createElement("article");
        article.className = "card";
        article.dataset.name = element.name;
        article.dataset.category = element.category;
        article.dataset.price = element.price;
        article.dataset.tags = element.tags.join(",");

        const thumb = document.createElement("div");
        thumb.className = "thumb";
        thumb.textContent = element.thumb;

        const meta = document.createElement("div");
        meta.className = "meta";

        const h4 = document.createElement("h4");
        h4.textContent = element.name;

        const p = document.createElement("p");
        p.className = "muted";
        p.textContent = element.description;

        const tagsDiv = document.createElement("div");
        tagsDiv.className = "tags";

        element.tags.forEach(tag => {
            const span = document.createElement("span");
            span.className = "tag";
            span.textContent = tag;
            tagsDiv.appendChild(span);
        });

        meta.appendChild(h4);
        meta.appendChild(p);
        meta.appendChild(tagsDiv);

        article.appendChild(thumb);
        article.appendChild(meta);

        document.querySelector('#resultsGrid').appendChild(article);
    });
};

let inp = document.querySelector('#searchInput');
let checkboxNode = document.querySelectorAll('input[type="checkbox"]');
let checkbox = [...checkboxNode];

document.querySelector('#applyFilters').addEventListener('click', function () {

    let inpVal = inp.value.toLowerCase();
    let filteredCheckbox = checkbox.filter(element => element.checked);
    let priceRangeStr = document.querySelector('#priceSelect');
    let priceRangeArr = priceRangeStr.value.split('-');
    let relevence = document.querySelector('#sortSelect').value;

    let filteredArray = cards.filter(function (card) {

        let itemName = card.name.toLowerCase();
        let itemTag = card.tags
        if (itemName.startsWith(inpVal) || itemTag[0].startsWith(inpVal) || itemTag[1].startsWith(inpVal) || !inpVal) {
            let tf = false;
            filteredCheckbox.forEach(function (elem) {
                if (elem.value.toLowerCase() === card.category) tf = true;
            })

            if (priceRangeArr && !(priceRangeArr[0] <= card.price && priceRangeArr[1] >= card.price)) tf = false

            return tf
        }
    });

    if (relevence === 'relevance') true
    else if (relevence === 'price-asc') filteredArray.sort((a, b) => a.price - b.price)
    else if (relevence === 'price-desc') filteredArray.sort((a, b) => b.price - a.price)
    else if (relevence === 'name-asc') filteredArray.sort((a,b) => a.name.localeCompare(b.name))

    document.querySelector('#resultsGrid').innerHTML = "";
    createCard(filteredArray);
})

document.querySelector('#resetFilters').addEventListener('click', function () {
    inp.value = '';
    checkbox.forEach(function (element) {
        element.checked = false;
    });
    document.querySelector('#sortSelect').value = "relevance";
    document.querySelector('#priceSelect').value = "0-999";
    document.querySelector('#count').textContent = cards.length

    document.querySelector('#resultsGrid').innerHTML = "";
    createCard(cards);
})


createCard(cards);


// thinking how it would go with git