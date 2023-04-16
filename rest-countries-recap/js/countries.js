const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    const countriesHTML = countries.map(country => getCountryHTML(country))
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = (country) => {
    console.log(country);
    const {name, flags} = country
    return `
    <div class="country">
        <h2>${name.common}</h2>
        <img src="${flags.png}" alt="">
    </div>
    `
}

// loadCountries();


let ul = `<li>Programming<li>`; 
ul += `<li>Hero<li>`; 
console.log(ul);
