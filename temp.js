// const { json } = require("express");

// document.addEventListener('DOMContentLoaded', function(){
//     async function fetchProduct(url){
//         let data = await fetch(url);
//         let response = await data.json();
//         console.log(response);
//     };
//     fetchProduct('https://api.escuelajs.co/api/v1/products');
// });

// const body = document.querySelector('body');

var productItem = localStorage.getItem('item') || []
if (!Array.isArray(productItem)) {
    productItem = []
}

const getProducts = async () => {
    let products = document.querySelector('.products')
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();


    data.forEach((item) => {
        const cardElement = document.createElement('div');
        cardElement.innerHTML = `
        <div class="product card-body">
        <img class="image" class="card-img-top" src=${item.image} alt="">
            <p class="title card-title">${item.title}</p>
            <p class="description card-text">${item.description}</p>
            <p class="category card-text">${item.category}</p>
            <p class="price card-text">${item.price}</p>
            <p class="rate card-text">${item.rating.rate}</p>
            <button "type="button" class="btn" onclick=myFunc(${item.id})>Add to card</button>
        </div>
        `;
        // cardElement.innerHTML = card;

        if (products !== null)
            products.appendChild(cardElement);


    })
}
getProducts()

function myFunc(id) {
    productItem.push(id)
    localStorage.setItem('item', productItem)
}

if (window.location.pathname === '/page.html') {
    const temp = document.querySelector(".pages")
    var pageItem = localStorage.getItem('item')
    const newarr = pageItem.split(',');

    newarr.forEach(async (page) => {
        const response = await fetch(`https://fakestoreapi.com/products/${page}`);
        const data = await response.json();
        const pageElement = document.createElement('div')
        pageElement.innerHTML = `
        <div class="card" style="width: 18rem; margin: 30px 20px; background-color: aliceblue;">
        <img style="height: 100px; width: 120px; " class="card-img-top" src=${data.image} alt="">
            <p class="card-title">${data.title}</p>
            <p class="card-text">${data.description}</p>
            <p class="card-text">${data.category}</p>
            <p class="card-text">${data.price}</p>
            <button style="padding: 5px; border-radius: 3px; color: white; background-color: cadetblue;" class="btn">Remove</button>
        </div>
        </div>
        `

        if (temp !== null)
            temp.appendChild(pageElement);
    })

}

// console.log(window.location.pathname);


// const getPages = async () => {
//     let pageItem = document.querySelector('.pages')

//     item.forEach((page) => {
//         const pageElement = document.createElement('div')
//         pageElement.innerHTML = `
//         <img class="image" class="card-img-top" src=${page.image} alt="">
//             <p class="title card-title">${page.title}</p>
//             <p class="description card-text">${page.description}</p>
//             <p class="category card-text">${page.category}</p>
//             <p class="price card-text">${page.price}</p>
//             <p class="rate card-text">${page.rating.rate}</p>
//         </div>
//         `
//     })
// }

// getPages();