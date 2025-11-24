import { countries } from '../data/countries.js';
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

//click tracker
document.addEventListener('click', (e) => {
  if (!(e.target === counResult)) {
   counElement.innerHTML = ''; 
  }
});
//country selector
counResult.addEventListener('click', () => {
  let html = '';
  countries.forEach((country) => {
    const name = country.country;
    const theValue = country.code;
    html += 
      `<div class="coun-div" data-coun="${theValue}" onclick="
      ">
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
