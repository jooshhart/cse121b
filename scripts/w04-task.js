/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */
let myProfile = {
    name : "Josh Hart",
    photo: "images/self.png",
    favoriteFoods: ['Lomo Saltado', 'Pizza', 'Calzone', 'Chicken Parmesan', 'Chicken Alfredo', 'Fried Rice'],
    hobbies: ['writing', 'cooking', 'hiking', 'building'],
    placesLived: [],
    
};
myProfile.placesLived.push(
    {
        place: "Virginia",
        length: "7 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Arizona",
        length: "14 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Peru",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent= myProfile.name;
/* Photo with attributes */
document.getElementById('#photo').setAttribute('src', myProfile.photo, 'alt', `Profile picture of Josh hart`)= myProfile.photo;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.place.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place;
    document.querySelector('#places-lived').appendChild(dt);
});
myProfile.placesLived.length.forEach(length => {
    let dd = document.createElement('dd');
    dd.textContent = length;
    document.querySelector('#places-lived').appendChild(dd);
});
