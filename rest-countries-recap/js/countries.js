
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesHTML = countries.map(country => getCountryHTML(country))
    console.log(countriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = country => {
    return `
    <div>
        <h2>${country.name.common}</h2>
    </div>
    `
}

loadCountries()