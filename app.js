let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Soft Gel Extension',
        image: '1.jpg',
        price:  399.00
    },
    {
        id: 2,
        name: 'Acrylic Extension',
        image: '2.jpg',
        price: 599.00
    },
    {
        id: 3,
        name: 'Polygel Extension',
        image: '3.jpg',
        price: 699.00
    },
    {
        id: 4,
        name: 'Customized Press-on Nails Design 1',
        image: '4.jpg',
        price: 200.00
    },
    {
        id: 5,
        name: 'Customized Press-on Nails Design 2',
        image: '6.jpg',
        price: 200.00
    },
    {
        id: 6,
        name: 'Customized Press-on Nails Design 3',
        image: '12.jpg',
        price: 200.00
    },
    {
        id: 7,
        name: 'Customized Press-on Nails Design 4',
        image: '10.jpg',
        price: 200.00
    },
    {
        id: 8,
        name: 'Customized Press-on Nails Design 5',
        image: '11.jpg',
        price: 200.00
    },
    {
        id: 9,
        name: 'Customized Press-on Nails Design 6',
        image: '13.jpg',
        price: 200.00
    },
    {
        id: 10,
        name: 'Customized Press-on Nails Design 7',
        image: '14.jpg',
        price: 200.00
    },
    {
        id: 11,
        name: 'Customized Press-on Nails Design 8',
        image: '9.jpg',
        price: 200.00
    },
    {
        id: 12,
        name: 'Customized Press-on Nails Design 9',
        image: '16.jpg',
        price: 200.000
    },
    {
        id: 13,
        name: 'Nail Polish Douceur',
        image: '17.jpg',
        price: 145.00
    },
    {
        id: 14,
        name: 'Nail Polish Blush',
        image: '18.jpg',
        price: 145.00
    },
    {
        id: 15,
        name: 'Nail Polish Haven',
        image: '19.jpg',
        price: 145.00
    },
    {
        id: 16,
        name: 'Nail Polish Bardot',
        image: '20.jpg',
        price: 145.00
    },
    {
        id: 17,
        name: 'Nail Polish Blossom',
        image: '21.jpg',
        price: 145.00
    },
    {
        id: 18,
        name: 'Nail Polish Nude',
        image: '22.jpg',
        price: 145.00
    },
    {
        id: 19,
        name: 'Nail Polish Beige',
        image: '23.jpg',
        price: 145.00
    },
    {
        id: 20,
        name: 'Nail Polish Nougat',
        image: '24.jpg',
        price: 145.00
    },
    {
        id: 21,
        name: 'Nail Polish Embrace',
        image: '25.jpg',
        price: 145.00
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}