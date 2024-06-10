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
  { price: "$200,000", text: "Beautiful Family House" },
  { price: "$300,000", text: "Modern Apartment" },
  { price: "$150,000", text: "Cozy Cottage" },
  { price: "$250,000", text: "Spacious Villa" },
  { price: "$180,000", text: "Stylish Condo" },
  { price: "$400,000", text: "Luxurious Mansion" },
  { price: "$350,000", text: "Urban Loft" },
  { price: "$220,000", text: "Suburban Home" },
  { price: "$275,000", text: "Elegant Duplex" },
  { price: "$320,000", text: "Rural Farmhouse" }
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

//TOOGLE BUTTON



