import { countries } from '../data/countries.js';

document.querySelector('.selector-coun-div').addEventListener('click', () => {
  let html = '';
  countries.forEach((country) => {
    const name = country.country;
    const theValue = country.currency;
    html += 
      `<div class="coun-name" value="${theValue}">${name}</div>`;
  });
  console.log(html);
});


const fristProb = document.querySelector('.js-1');
const secondProb = document.querySelector('.js-2');

let proNum1 = 0;
let proNum2 = 0;
document.querySelector('.js-button').addEventListener('click', () => {
  submit();
});
function submit() {
  const nameElement = document.querySelector('.js-name').value.trim();
  const curElement = document.querySelector('.cur-selector').value;
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
