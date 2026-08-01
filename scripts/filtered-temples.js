const navi = document.getElementById("mobile-nav");
const menuButton = document.getElementById("menu-icon");
const gallery = document.getElementById("gallery");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6-24",
    area: 382207,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  },
  {
    templeName: "Logan Utah Temple",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-utah-temple-winter-1155598-wallpaper.jpg"
  },
  {
    templeName: "Wichita Kansas Temple",
    location: "Wichita, Kansas, United States",
    dedicated: "2026, November, 1",
    area: 9950,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/bw92gjj0cq0hn3d5zex5ztcbflmf0hgz7gem5c6g/full/640%2C/0/default"
  }
];

const oldTemples = temples.filter(temple => Number(temple.dedicated.slice(0,4)) < 1900);
const newTemples = temples.filter(temple => Number(temple.dedicated.slice(0,4)) > 2000);
const largeTemples = temples.filter(temple => temple.area > 90000);
const smallTemples = temples.filter(temple => temple.area < 10000);

menuButton.addEventListener("click", function() {
    navi.classList.toggle("rest");
    navi.classList.toggle("open");
    if (menuButton.innerHTML == "x") {
        menuButton.innerHTML = "≡";
    } else {
        menuButton.innerHTML = "x";
    }
});

function displayTemples(templeList)
{
templeList.forEach(item => {
    const fig = document.createElement('figure');
    const name = document.createElement('h3');
    const loc = document.createElement('figcaption');
    const ded = document.createElement('figcaption');
    const area = document.createElement('figcaption');
    const pic = document.createElement('img');
    name.innerText = item.templeName;
    loc.innerHTML = `<span class="label">Location:</span> ${item.location}`;
    ded.innerHTML = `<span class="label">Dedicated:</span> ${item.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${item.area}`;
    pic.src = item.imageUrl;
    pic.alt = item.templeName;
    pic.loading = "lazy";
    gallery.appendChild(fig);
    fig.appendChild(name);
    fig.appendChild(loc);
    fig.appendChild(ded);
    fig.appendChild(area);
    fig.appendChild(pic);
});
}

const filterQuery = window.location.search;
let templeFilter;
if (filterQuery == "?old")
{
  templeFilter = oldTemples;
}
else if (filterQuery == "?new")
{
  templeFilter = newTemples;
}
else if (filterQuery =="?large")
{
  templeFilter = largeTemples;
}
else if (filterQuery =="?small")
{
  templeFilter = smallTemples;
}
else
{
  templeFilter = temples;
}
displayTemples(templeFilter);