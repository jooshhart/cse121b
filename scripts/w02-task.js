/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Josh Hart';
const d = new Date();
let currentYear = d.getFullYear();
let profilePicture = 'images/self.png';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profilepicture');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

const favFood = ['Lomo Saltado', 'Pizza', 'Calzone', 'Chicken Parmesan', 'Chicken Alfredo', 'Fried Rice'];
foodElement.textContent = `${favFood}`;
let newFood = 'Breakfast Burrito';
favFood.push(newFood);
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;