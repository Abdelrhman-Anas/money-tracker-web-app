import { countries } from '../data/countries.js';
import { languages } from '../data/language.js';
import { userName, TotalMoney, country, lang, currancy } from '../data/user-data.js';
//data variables
let us;
let to;
let co;
let la;
let cu;
// elements inside the html
const counElement = document.querySelector('.viewer-coun-div');
const counResult = document.querySelector('.selector-coun-div');
const langELement = document.querySelector('.viewer-lang-div');
const langResult = document.querySelector('.selector-lang-div');
//click tracker
document.addEventListener('click', (e) => {
  if (!(e.target === counResult)) {
    counElement.innerHTML = ''; 
  };
  if (!(e.target === langResult)) {
    langELement.innerHTML = '';
  }
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
        }
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



const fristProb = document.querySelector('.js-1');
const secondProb = document.querySelector('.js-2');

let proNum1 = 0;
let proNum2 = 0;
document.querySelector('.js-button').addEventListener('click', () => {
  submit();
});
function submit() {
  const nameElement = document.querySelector('.js-name').value.trim() || '';
  //const curElement = document.querySelector('.cur-selector') || 'EG';
  if (nameElement.length === 0) {
    fristProb.innerHTML = 'Please put a name';
    proNum1 = 1;
  } else if (nameElement.length >= 30) {
    fristProb.innerHTML = 'name should have less than 30 letters'
    proNum1 = 1;
  } else if ((nameElement.length > 1) && (nameElement.length < 30)) {
    fristProb.innerHTML = '';
    proNum1 = 0;
  };
  
  if ((proNum1 === 0) && (proNum2 === 0)) {
    localStorage.setItem('userName', JSON.stringify(nameElement));
    localStorage.setItem('totalMoney', JSON.stringify(moneyElement));
    localStorage.setItem('currancy', JSON.stringify(curElement));
    window.location.href = 'home.html';
  };
  console.log(nameElement.length)
};
