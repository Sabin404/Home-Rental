// import './externalFiles/search.js'

const home_images = [
  "https://th.bing.com/th/id/OIP.efnJ95bSkFJqx7LYn9jCWQHaE3?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP._ornIK8XKAE6nVoXpK9TlQHaEY?w=760&h=450&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP._ornIK8XKAE6nVoXpK9TlQHaEY?w=760&h=450&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.efnJ95bSkFJqx7LYn9jCWQHaE3?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP._ornIK8XKAE6nVoXpK9TlQHaEY?w=760&h=450&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP._ornIK8XKAE6nVoXpK9TlQHaEY?w=760&h=450&rs=1&pid=ImgDetMain",
  
  "https://th.bing.com/th/id/OIP._ornIK8XKAE6nVoXpK9TlQHaEY?w=760&h=450&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP._ornIK8XKAE6nVoXpK9TlQHaEY?w=760&h=450&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP._ornIK8XKAE6nVoXpK9TlQHaEY?w=760&h=450&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP._ornIK8XKAE6nVoXpK9TlQHaEY?w=760&h=450&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP._ornIK8XKAE6nVoXpK9TlQHaEY?w=760&h=450&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP._ornIK8XKAE6nVoXpK9TlQHaEY?w=760&h=450&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP._ornIK8XKAE6nVoXpK9TlQHaEY?w=760&h=450&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP._ornIK8XKAE6nVoXpK9TlQHaEY?w=760&h=450&rs=1&pid=ImgDetMain",
];

const home_details = [
  { price: "$200,000", text: "Beautiful Family House" ,city:"Pokhara" },
  { price: "$300,000", text: "Modern Apartment",city:"Pokhara" },
  { price: "$150,000", text: "Cozy Cottage" ,city:"Pokhara"},
  { price: "$250,000", text: "Spacious Villa" ,city:"Pokhara"},
  { price: "$180,000", text: "Stylish Condo" ,city:"Pokhara"},
  { price: "$400,000", text: "Luxurious Mansion" ,city:"Pokhara"},
  { price: "$350,000", text: "Urban Loft" ,city:"Pokhara"},
  { price: "$220,000", text: "Suburban Home" ,city:"Pokhara"},
  { price: "$275,000", text: "Elegant Duplex" ,city:"Pokhara"},
  { price: "$320,000", text: "Rural Farmhouse" ,city:"Pokhara"}
];
const image = document.querySelector('.image');
// image.src = home_images[0];

const fhouse=document.querySelector('.featuredhouse');
const rhouse=document.querySelector('.Recenthouse');

const f_houses = home_images.slice(0, 5);
const r_houses = home_images.slice(5, 10);

function createHouseItem(src, details) {
    const container = document.createElement('div');
    container.classList.add('house-item');

    const img = document.createElement('img');
    img.src = src;
    img.alt = "Rent house";

    const text = document.createElement('p');
    text.classList.add('info');
    text.innerHTML = details.text;

    const price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = details.price;

    const button = document.createElement('button');
    button.classList.add('book-now');
    button.textContent = "Book Now";

    container.appendChild(img);
    container.appendChild(text);
    container.appendChild(price);
    container.appendChild(button);

    return container;
}

f_houses.forEach((src, index) => {
    const houseItem = createHouseItem(src, home_details[index]);
    fhouse.appendChild(houseItem);
});

r_houses.forEach((src, index) => {
    const houseItem = createHouseItem(src, home_details[index + 5]);
    rhouse.appendChild(houseItem);
});

const head=document.querySelector('head');
const li=document.createElement('link');
li.rel="icon";
li.href=home_images[3];
head.appendChild(li);

document.addEventListener('DOMContentLoaded', () => {

const searchButton=document.querySelector('#searchbutton');
const searchCity=document.querySelector('#searchCity');
const minprice=document.querySelector('#minprice');
const maxprice=document.querySelector('#maxprice');
const searchForm = document.querySelector('#searchForm');


function submit(e){
  e.preventDefault();
  let city=searchCity.value.toLowerCase();
  let minP=parseInt(minprice.value);
  let maxP=parseInt(maxprice.value);

  if (city && !isNaN(minP) && !isNaN(maxP)) {
    localStorage.setItem('city', city);
    localStorage.setItem('min_Price', minP);
    localStorage.setItem('max_Price', maxP);
    window.location.href = './externalFiles/search.html';
} else {
    alert('Please enter valid values for all fields.');
}
}

searchForm.addEventListener('submit',submit);
});

