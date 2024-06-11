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
  { price: "$200,000", text: "Beautiful Family House", city: "Pokhara" },
  { price: "$300,000", text: "Modern Apartment", city: "Pokhara" },
  { price: "$150,000", text: "Cozy Cottage", city: "Pokhara" },
  { price: "$250,000", text: "Spacious Villa", city: "Pokhara" },
  { price: "$180,000", text: "Stylish Condo", city: "Pokhara" },
  { price: "$400,000", text: "Luxurious Mansion", city: "Pokhara" },
  { price: "$350,000", text: "Urban Loft", city: "Pokhara" },
  { price: "$220,000", text: "Suburban Home", city: "Pokhara" },
  { price: "$275,000", text: "Elegant Duplex", city: "Pokhara" },
  { price: "$320,000", text: "Rural Farmhouse", city: "Pokhara" }
];
const image = document.querySelector('.image');
// image.src = home_images[0];

const fhouse = document.querySelector('.featuredhouse');
const rhouse = document.querySelector('.Recenthouse');

const f_houses = home_images.slice(0, 5);
const r_houses = home_images.slice(5, 10);
const close=document.querySelector('.close');

function createHouseItem(src, details) {
  const container = document.createElement('div');
  container.classList.add('house-item');

  const img = document.createElement('img');
  img.src = src;
  img.alt = `Rent house`;

  const text = document.createElement('p');
  text.classList.add('info');
  text.innerHTML = `${details.text}-${details.city}`;

  const price = document.createElement('p');
  price.classList.add('price');
  price.innerHTML = details.price;

  const a = document.createElement('a');
  a.href = 'booking.html';

  const button = document.createElement('button');
  button.classList.add('book-now');
  button.textContent = "Book Now";

  a.appendChild(button);

  document.body.appendChild(a);

  button.addEventListener('click',()=>{
    document.querySelector('#selected-house-details').innerHTML=`${details.text}=${details.city}(${details.price})`;
    document.querySelector('#booking-modal').style.display='block';
    document.querySelector('#booking-modal').style.transition='.3s ease';
  })

  container.appendChild(img);
  container.appendChild(text);
  container.appendChild(price);
  container.appendChild(button);

  return container;
}

close.addEventListener('click',()=>{
  document.querySelector('#booking-modal').style.display='none';
});

f_houses.forEach((src, index) => {
  const houseItem = createHouseItem(src, home_details[index]);
  fhouse.appendChild(houseItem);
});

r_houses.forEach((src, index) => {
  const houseItem = createHouseItem(src, home_details[index + 5]);
  rhouse.appendChild(houseItem);
});


const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // const formData = new FormData(bookingForm);
  // const houseDetails = document.getElementById('selected-house-details').textContent;
  // const name = formData.get('name');
  // const email = formData.get('email');

  // console.log(`Booking request for ${houseDetails} received from ${name} (${email})`);
  document.getElementById('booking-modal').style.display = 'none';
  alert('Booking request submitted successfully. We will contact you shortly.');
});

const head = document.querySelector('head');
const li = document.createElement('link');
li.rel = "icon";
li.href = home_images[3];
head.appendChild(li);
