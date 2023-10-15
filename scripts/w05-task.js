/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('#temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach (temple => {
            const arti = document.createElement("article");
            const h3 = document.createElement("h3");
            h3.textContent = temple.templeName;
            const im = document.createElement("img");
            im.setAttribute('src', temple.imageUrl);
            im.setAttribute('alt', temple.location);
            arti.appendChild(h3);
            arti.appendChild(im);
            templesElement.appendChild(arti);
        });
};
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList.appendChild(data);
    displayTemples(templeList);
};
/* reset Function */
const reset = () => {
    templesElement = [];
};
/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.getElementById('#sortBy');
    switch (filter) {
        case "utah":
            const utahTemples = temples.filter((temple) =>

               temple.location.toLowerCase().includes('utah')
            );
            displayTemples(utahTemples);
            break;

        case "notutah":
            const notUtah = temples.filter((temple) =>
                !temple.location.toLowerCase().includes('utah')
            );
            displayTemples(notUtah);
            break;

        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};
getTemples();

/* Event Listener */
document.querySelector("#SortBy").addEventListener("change", () => {sortBy(templeList)});
