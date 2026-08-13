// Time-related actions
const today = new Date();
const currentYear = document.querySelector('#currentyear');

currentYear.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

// Tips Page
if (window.location.pathname.includes('tips.html')) {
// Tip Objects
const tips = [
  {
    title: "Tip #1: \"Dip, Don't Dig\"",
    copy: "When scooping frozen desserts, don't concentrate on a single spot like you're digging a hole. Instead, hold the scoop nearly perpendicular, just \"dip\" the tip of it into the product you're trying to scoop, and scoop in a circular or spiral path to shave the top off the product. The scoop should naturally roll the material you skim into a sphere. You'll leave the carton looking neater, and it'll be easier and less messy to scoop from it in the future."
  },
  {
    title: "Tip #2: Chilled Glassware",
    copy: "Your dessert may melt less if, in advance, you place the dish you'll serve it into in a freezer or refrigerator. Plus, a root beer float always carries more panache when served in a frosty glass."
  },
  {
    title: "Tip #3: Blending Milkshakes",
    copy: "Milkshakes will have a thicker texture if blended on lower speeds. Chilling all ingredients beforehand can also improve results."
  },
  {
    title: "Tip #4: Use Toasted Nuts",
    copy: "In addition to their enhanced flavor, toasted nuts have greater resistance to becoming soggy in sauces/ice cream."
  },
  {
    title: "Tip #5: Divisive Split",
    copy: "Among various vintage tips collected by writer Paul Dickson is the \"correct\" way to assemble a banana split. Purportedly, the sliced banana should be arranged so that its cut sides are visible, displaying the seeds. Allegedly, this will \"arouse [the] appetite\" of whomever it is served to. Perhaps this advice garnered sales when banana splits were ubiquitous and one needed to stand out. However, modern diners may favor the more natural arrangement over seeing the banana slimy-side out."
  }
];

const dailyTipSection = document.getElementById('tip-of-the-day');
const tipCount = tips.length;
const dayCounter = today.getUTCDate();
const tipNumber = (dayCounter > tipCount) ? dayCounter % tipCount : tipCount % dayCounter;
console.log(tipNumber);
const todaysTip = tips[tipNumber];
const tipHeading = document.createElement('h3');
tipHeading.innerText = todaysTip.title;
const tipCopy = document.createElement('p');
tipCopy.innerText = todaysTip.copy;
dailyTipSection.appendChild(tipHeading);
dailyTipSection.appendChild(tipCopy);

console.log(todaysTip);
}

// Recipe Page
else if (window.location.pathname.includes('recipes.html')) {
// Recipe Objects
const recipes = [
{
  title: "Wet Walnuts",
  type: "toppings",
  tags: ["vintage", "vegan"],
  imageURL: "images/wet-walnuts.svg",
  ingredients: ["1C walnuts", "1C maple syrup", "1/2tsp salt"],
  steps: ["Heat oven to 350F.",
         "Spread the Walnuts on a baking sheet. Place in oven for five minutes, stir, and repeat.",
         "Heat maple syrup in a saucepan on medium-low heat until it just starts to bubble. Stir in salt, then toasted walnuts. Allow to cool, then serve or store in an airtight container."]
},
{
  title: "Marshmallow Sauce",
  type: "toppings",
  tags: ["vintage"],
  imageURL: "images/marshmallow-sauce.svg",
  ingredients: ["8oz marshmallows", "1C granulated sugar"],
  steps: ["Place a medium saucepan over medium heat."]
},
{
  title: "Hot Fudge",
  type: "toppings",
  tags: ["vintage"],
  imageURL: "images/hot-fudge.svg",
  ingredients: ["cream", "butter", "chocolate"],
  steps: ["heat a saucepan"]
},
{
  title: "Raspberry Sorbet",
  type: "frozen",
  tags: ["vegan"],
  imageURL: "images/raspberry-sorbet.svg",
  ingredients: ["16oz raspberries", "1 1/2 C granulated sugar", "1/4 C lemon juice"],
  steps: ["dissolve sugar in water"]
}
// {
//   title: "",
//   type: "",
//   tags: [],
//   imageURL: "",
//   ingredients: [],
//   steps: []
// }

];
const viewedList = JSON.parse(window.localStorage.getItem("viewedList")) || [];
const supportedTags = ['vintage', 'vegan'];
const recentlyViewed = document.getElementById('viewed');
const noneMessage = "None";

function createRecipeCards(categoryObj, target) {
  const category = document.getElementById(target);
  category.innerHTML = "";
  if (categoryObj.length == 0) {
    const noneDisplay = document.createElement('span');
    noneDisplay.id = "empty-section";
    noneDisplay.innerText = noneMessage;
    category.appendChild(noneDisplay);
  } else {
    categoryObj.forEach(recipe => {
      const card = document.createElement('article');
      const cardTitle = document.createElement('h3');
      const cardImage = document.createElement('img');
      const cardButton = document.createElement('button');
      cardTitle.innerText = recipe.title;
      cardImage.alt = recipe.title;
      cardImage.src = recipe.imageURL;
      cardImage.loading = 'lazy';
      cardButton.innerText = "See Full Recipe";
      card.appendChild(cardTitle);
      card.appendChild(cardImage);
      card.appendChild(cardButton);
      const fullDetails = document.createElement('div');
      const ingredientList = document.createElement('ul');
       recipe.ingredients.forEach(ingredient => {
         const ingredientLi = document.createElement('li');
         ingredientLi.innerText = ingredient;
         ingredientList.appendChild(ingredientLi);
       });
       fullDetails.appendChild(ingredientList);
       const stepList = document.createElement('ol');
       recipe.steps.forEach(step => {
         const stepLi = document.createElement('li');
         stepLi.innerText = step;
         stepList.appendChild(stepLi);
       });
       fullDetails.appendChild(stepList);
       fullDetails.classList.toggle('hidden');
      card.appendChild(fullDetails);
      category.appendChild(card);
    // Click interaction
     cardButton.addEventListener('click', function() {
       cardButton.innerText = (cardButton.innerText != "Hide Details") ? "Hide Details" : "See Full Recipe";
       card.classList.toggle('expanded');
       fullDetails.classList.toggle('hidden');
       if (!viewedList.includes(recipe.title)) {
         viewedList.unshift(recipe.title);
       }
       window.localStorage.setItem("viewedList", JSON.stringify(viewedList));
     });
   });
  }
}

function recipeTitleInList(providedList) {
  return recipes.filter(item => providedList.includes(item.title))
}

function recipesWithTag(tag) {
  return recipes.filter(item => item.tags.includes(tag));
}

function recipesOfType(type) {
  return recipes.filter(item => item.type == type);
}

createRecipeCards(recipeTitleInList(viewedList), "viewed");
createRecipeCards(recipesWithTag("vintage"), "vintage");
createRecipeCards(recipesOfType("toppings"), "toppings");


// Search Form
const searchForm = document.getElementById('adv-search');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchData = new FormData(searchForm);
  const recipeType = searchData.get('recipe-type');
  let recipeMatches = recipes;
  if (recipeType != 'all') {
    recipeMatches = recipesOfType(recipeType);
  }
  supportedTags.forEach(tag => {
    if (searchData.has(tag)) {
    recipeMatches = recipeMatches.filter(item => item.tags.includes(tag));
    }
  });
  const searchKeyword = searchData.get('keyword').toLowerCase();
  if (searchKeyword != '') {
    const searchByType = searchData.get('keyword-type');
    const anyKeywordType = (searchByType == 'by-any');
    const keywordRefs = [];
    if (searchByType == 'by-title' || anyKeywordType) {
      const byTitle = (x) => x.title.toLowerCase();
      keywordRefs.push(byTitle);
    }
    if (searchByType == 'by-ingredient' || anyKeywordType) {
      const byIngredient = (x) => x.ingredients.toString().toLowerCase();
      keywordRefs.push(byIngredient);
    }
    recipeMatches = recipeMatches.filter(recipe => {
      let starterValue = false;
      keywordRefs.forEach(method => {
        starterValue = starterValue || method(recipe).includes(searchKeyword);
      });
      return starterValue;
    });
  }
  createRecipeCards(recipeMatches, 'search-results');
  
});

}