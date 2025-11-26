import { countries } from '../data/countries.js';
import { userName, totalMoney, country, language, currency, trackerIn, trackerOut } from '../data/user-data.js';
import { dash } from './dashbourd.js';
let page = 0;
// html elements
const dashName = document.querySelector('.page1');
const transName = document.querySelector('.page2');
const repoName = document.querySelector('.page3');
const sitName = document.querySelector('.page4');
const helloName = document.querySelector('.hello-div');
const nameName = document.querySelector('.user-name');
const bodyElement = document.querySelector('.main-section');
//
const dashElement = document.querySelector('.dashbourd-div');
//
const transElement = document.querySelector('.transactions-div');
//
const repoElement = document.querySelector('.report-div');
//
const sitElement = document.querySelector('.sittings-div');
///// the static part/////
nameName.innerHTML = userName;
countries.forEach((coun) => {
  if (coun.code = country) {
    document.querySelector('.country-div').innerHTML = `<span class="fi fi-${coun.code}"></span>`
  }
});
if (language === 'sa') {
  dashName.innerHTML = 'وحده التحكم';
  transName.innerHTML = 'المعملات';
  repoName.innerHTML = 'التقارير';
  sitName.innerHTML = 'الاعدادات';
  helloName.innerHTML = 'مرحباً /';
} else if (language === 'us') {
  dashName.innerHTML = 'Dashbourd';
  transName.innerHTML = 'transactions';
  repoName.innerHTML = 'Reports';
  sitName.innerHTML = 'Sittings';
  helloName.innerHTML = 'welcome /';
};
// dashbourd 
dashElement.addEventListener('click', () => {
  page = 0;
  thePage();
});
thePage();
function thePage() {
  if (page === 0) {
    dash(language, totalMoney, currency, bodyElement, trackerIn, trackerOut);
  } else if (page === 1) {
    trans();
  } else if (page === 2) {
    repo();
  } else if (page === 3) {
    sitt();
  }
};