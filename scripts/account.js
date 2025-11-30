import { countries } from '../data/countries.js';
import { languages } from '../data/language.js';
import { userName, totalMoney, userCountry, language, currency } from '../data/user-data.js';
//data variablescountry
let to;
let co;
let la;
let cu;
// elements inside the html
//selectors
const counElement = document.querySelector('.viewer-coun-div');
const counResult = document.querySelector('.selector-coun-div');
const langELement = document.querySelector('.viewer-lang-div');
const langResult = document.querySelector('.selector-lang-div');
const currELement = document.querySelector('.viewer-curr-div');
const currResult = document.querySelector('.selector-curr-div');
//inputs
const nameInput = document.querySelector('.name-input');
const netInput = document.querySelector('.net-input');
//buttons
const subButton = document.querySelector('.js-button');
//error Elements
const error1 = document.querySelector('.js-1');
const error2 = document.querySelector('.js-2');
const error3 = document.querySelector('.js-3');
//click tracker
document.addEventListener('click', (e) => {
  if (!(e.target === counResult)) {
    counElement.innerHTML = ''; 
  };
  if (!(e.target === langResult)) {
    langELement.innerHTML = '';
  };
  if (!(e.target === currResult)) {
    currELement.innerHTML = '';
  };
});
//country selector
counResult.addEventListener('click', () => {
  let html = '';
  countries.forEach((country) => {
    const name = country.country;
    const theValue = country.code;
    html += 
      `<div class="coun-div" data-coun="${theValue}">
        <span class="fi fi-${theValue} coun-pic"></span> <div class="coun-name">${name}</div>
      </div>`;
  });
  counElement.innerHTML = html;
  document.querySelectorAll('.coun-div').forEach((button) => {
    button.addEventListener('click', () => {
      const buttonValue = button.dataset.coun;
      let counData;
      countries.forEach((coun) => {
        if (coun.code === buttonValue) {
          counData = coun;
        };
      });
      co = counData.code;
      console.log(co);
      counResult.innerHTML = `<span class="fi fi-${counData.code} coun-pic"></span> <div class="coun-name">${counData.country}</div>`;
      counElement.innerHTML = '';
    });
  });
});
//language selector
langResult.addEventListener('click', () => {
  let html = '';
  languages.forEach((lang) => {
    const name = lang.lang;
    const theValue = lang.code;
    html += 
      `<div class="lang-div" data-lang="${theValue}">
        <span class="fi fi-${theValue} lang-pic"></span> <div class="lang-name">${name}</div>
      </div>`;
  });
  langELement.innerHTML = html;
  document.querySelectorAll('.lang-div').forEach((lang) => {
    lang.addEventListener('click', () => {
      const langValue = lang.dataset.lang;
      let langData;
      languages.forEach((language) => {
        if (langValue === language.code) {
          langData = language;
        };
      });
      la = langData.code;
      console.log(la);
      langELement.innerHTML = '';
      langResult.innerHTML = 
        `<span class="fi fi-${langData.code} coun-pic"></span> <div class="lang-name">${langData.lang}</div>`;
    });
  })   
});
//currency selector
currResult.addEventListener('click', () => {
  let html = '';
  countries.forEach((coun) => {
    const theCurr = coun.currency;
    const theValue = coun.code;
    html += 
      `<div class="curr-div" data-curr="${theValue}">
        <span class="fi fi-${theValue} curr-pic"></span> <div class="curr-name">${theCurr}</div>
      </div>`;
  });
  currELement.innerHTML = html;
  document.querySelectorAll('.curr-div').forEach((curr) => {
    curr.addEventListener('click', () => {
      const currValue = curr.dataset.curr;
      let currData;
      countries.forEach((coun) => {
        if (currValue === coun.code) {
          currData = coun;
        };
      });
      cu = currData.currency;
      console.log(cu);
      currELement.innerHTML = '';
      currResult.innerHTML = 
        `<span class="fi fi-${currData.code} curr-pic"></span> <div class="curr-name">${currData.currency}</div>`;
    });
  })   
});
//submit button
subButton.addEventListener('click', () => {
  error1.innerHTML = '';
  error2.innerHTML = '';
  error3.innerHTML = '';
  const nameValue = nameInput.value.trim();
  const moneyValue = netInput.value.trim();
  if (nameValue.length === 0 || nameValue === undefined || nameValue === null) {
    error1.innerHTML = 'Please put a name.'
  };
  if (moneyValue.length === 0 || moneyValue === null || moneyValue === undefined) {
    to = 0;
  } else {
    to = moneyValue;
  };
  if (co === undefined) {
    error2.innerHTML = 'Please choose a country.';
  };
  if (la === undefined) {
    la = 'us'
  };
  if (cu === undefined) {
    error3.innerHTML = 'please choose a currency.'
  }
  if (co && la && cu && to && (nameValue.length > 0)) {
    localStorage.setItem('userName', JSON.stringify(nameValue));
    localStorage.setItem('totalMoney', JSON.stringify(to));
    localStorage.setItem('country', JSON.stringify(co));
    localStorage.setItem('language', JSON.stringify(la));
    localStorage.setItem('currency', JSON.stringify(cu));
    console.log('finished');
    location.replace("main.html");
  } else {
    console.log('failed');
  };
});