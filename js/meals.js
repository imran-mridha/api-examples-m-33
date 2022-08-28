const loadMeals = (search)=>{
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
  const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
  meals.forEach(meal => {
    // console.log(meal)
    const mealsDiv = document.createElement('div');
    mealsDiv.classList.add('col');
    mealsDiv.innerHTML = `
    <div onclick="loadMealDetails(${meal.idMeal})" class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
      </div>
    </div>
    `;
    mealsContainer.appendChild(mealsDiv)
  })
}

const searchFood = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadMeals(searchText);
  searchField.value = '';
}

const loadMealDetails = idMeal => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealsDetails(data.meals[0]))
}

const displayMealsDetails = meal => {
  console.log(meal)
  const mealDetailsContainer = document.getElementById('details-container');
  mealDetailsContainer.innerHTML = '';
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('card');
  detailsDiv.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  mealDetailsContainer.appendChild(detailsDiv);
}

loadMeals('')