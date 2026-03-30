const table = document.getElementById("countriesTable");

async function getCountries() {
  try {
    const result = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags",
    );
    const countries = await result.json();
    //console.log(countries[16]);
    const arrCountries = Array.from(countries);
    arrCountries.forEach((country) => {
      const currencyValue = Object.values(country.currencies)[0];
      const normalizedCountry = {
        name: country.name.common,
        capital: country.capital[0] || "No capital",
        currency: currencyValue?.name || "No currency",
        flag: country.flags.png,
      };

      printCountry(normalizedCountry);
    });
  } catch (err) {
    console.log(err);
  }
}

function printCountry({ name, capital, currency, flag }) {
  const row = document.createElement("tr");
  const nameTd = document.createElement("td");
  const capitalTd = document.createElement("td");
  const currencyTd = document.createElement("td");
  const flagTd = document.createElement("td");

  row.appendChild(nameTd);
  row.appendChild(capitalTd);
  row.appendChild(currencyTd);
  row.appendChild(flagTd);

  table.appendChild(row);

  nameTd.innerText = name;
  capitalTd.innerText = capital;
  currencyTd.innerText = currency;
  flagTd.innerHTML = `<img src=${flag} >`;
}

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () =>
  getCountryByName(searchInput.value),
);

async function getCountryByName(name) {
  if (!name) return;
  try {
    const result = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const country = await result.json();

    const currencyValue = Object.values(country[0].currencies)[0];
    const normalizedCountry = {
      name: country[0].name.common,
      capital: country[0].capital[0] || "No capital",
      currency: currencyValue?.name || "No currency",
      flag: country[0].flags.png,
    };

    table.innerHTML = "";
    printCountry(normalizedCountry);
  } catch (error) {
    console.log(error);
  }
}

getCountries();
