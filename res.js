
let singupbtn = ()=>{
    window.location.href = "singup.html"
}



var food = [
    {
        shop: "PIZZA HUT",
        flavour: "TIKKA",
        price: 1750,
        url: "pizza-card.jfif"
    },
    {
        shop: "PIZZA HUT",
        flavour: "TIKKA",
        price: 1750,
        url: "pizza-card.jfif"
    },
    {
        shop: "PIZZA HUT",
        flavour: "TIKKA",
        price: 1750,
        url: "pizza-card.jfif"
    },
    {
        shop: "PIZZA HUT",
        flavour: "TIKKA",
        price: 1750,
        url: "pizza-card.jfif"
    },
    {
        shop: "PIZZA HUT",
        flavour: "TIKKA",
        price: 1750,
        url: "pizza-card.jfif"
    },
    {
        shop: "PIZZA HUT",
        flavour: "TIKKA",
        price: 1750,
        url: "pizza-card.jfif"
    },
];



let filterData = food.filter(val => val.shop.startsWith("p"))

console.log(filterData)


var products = document.getElementById("products");
for (var i = 0; i < food.length; i++) {
    products.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${food[i].url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${food[i].shop}</h5>
    <h3 class="card-title">${food[i].flavour}</h3>
    <p class="card-text">${food[i].price}</p>
    <a href="#" onclick="addToCart(${i})" class="btn btn-primary">Add to cart</a>
  </div>
</div>
    `
}



