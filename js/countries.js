
const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => displayCountries(data))
}

const displayCountries = countries => {
  const countriesContainer = document.getElementById('countries-container')
  for(const country of countries){
   const countriesDive = document.createElement('div')
   countriesDive.classList.add('country')
   countriesDive.innerHTML = `
   <h2>Name: ${country.name.common}</h2>
   <p>Capital: ${country.capital ? country.capital : 'Not Capital'}</p>
   <button onclick="loadCountryDetails('${country.cca2}')">Country Details</button>
   `;
   countriesContainer.appendChild(countriesDive)
  }
}

const loadCountryDetails = code => {
  
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
  const countryDetails = document.getElementById('country-details');
  const detailsDiv = document.createElement('div');
  detailsDiv.innerHTML =`
  <h2>Name: ${country.name.common}</h2>
  <img src="${country.flags.png}">
  `;
  countryDetails.innerHTML = '';
  countryDetails.appendChild(detailsDiv)
}

loadCountries()