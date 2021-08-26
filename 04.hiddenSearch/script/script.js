const domEL = (function () {
  return {
    buttonEL: document.getElementById('btn__search'),
    inputEL: document.getElementById('search__input'),
    countriesEL: document.getElementById('countries'),
  };
})();

class SearchApp {
  constructor() {
    this.searchString = '';
    this.filteredCountry = [];
    this.countries = [];
  }

  eventHandler() {
    domEL.buttonEL.addEventListener('click', (e) => {
      e.preventDefault();
      domEL.inputEL.classList.toggle('show');
    });

    domEL.inputEL.addEventListener('input', (e) => {
      this.searchString = e.target.value;
      const filteredCountry = this.filterCountry();
      console.log(filteredCountry);
      if (filteredCountry.length > 0) {
        this.renderCountry(filteredCountry);
      } else {
        const pEL = document.createElement('p');
        pEL.innerText = 'Sorry! The country is in another universe.';
        pEL.style.fontSize = '2rem';
        domEL.countriesEL.innerHTML = '';
        domEL.countriesEL.appendChild(pEL);
      }
    });
  }

  filterCountry() {
    return this.countries.filter((country) => {
      const [name, flag] = Object.entries(country)[0];

      if (name.toLowerCase().includes(this.searchString.toLowerCase())) {
        return { name, flag };
      }
      return false;
    });
  }

  async fetchData(link) {
    try {
      const data = await fetch(link);
      const parsedData = await data.json();
      return parsedData;
    } catch (error) {
      console.log(error);
    }
  }

  createCountry(data) {
    const [country, flag] = Object.entries(data)[0];

    const countryEL = document.createElement('div');
    countryEL.className = 'country';

    const nameEL = document.createElement('span');
    nameEL.className = 'name';
    nameEL.textContent = country;

    const flagEL = document.createElement('div');
    flagEL.className = 'flag';
    flagEL.innerHTML = flag;

    countryEL.insertAdjacentElement('beforeend', flagEL);
    countryEL.insertAdjacentElement('beforeend', nameEL);
    return countryEL;
  }

  async renderCountry(countries) {
    domEL.countriesEL.innerHTML = '';
    for (let country of countries) {
      domEL.countriesEL.appendChild(this.createCountry(country));
    }
  }

  async init() {
    const countries = await this.fetchData(
      // 'https://50projects-blank.netlify.app/04.hiddensearch/data/Countries.json'
      '../data/Countries.json'
    );
    this.countries = countries;
    this.eventHandler();
    this.renderCountry(this.countries);
  }
}

new SearchApp().init();
