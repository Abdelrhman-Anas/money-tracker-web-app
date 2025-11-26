import { countries } from '../data/countries.js';
import { userName, totalMoney, country, language, currency, trackerIn, trackerOut } from '../data/user-data.js';
import { dash } from './dashbourd.js';
import { trans } from './transactions.js'
// html elements
const dashName = document.querySelector('.page1');
const transName = document.querySelector('.page2');
const repoName = document.querySelector('.page3');
const sitName = document.querySelector('.page4');
const helloName = document.querySelector('.hello-div');
const nameName = document.querySelector('.user-name');
//
const bodyElement = document.querySelector('.main-section');
const indeElement = document.querySelector('.indecators');
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
// switcher
let page = 0;
function switchPage(newPage) {
  page = newPage;
  console.log("Switching to page:", page);
  thePage();
}
// dashbourd
dashElement.addEventListener('click', () => {
  switchPage(0);
});
// transactions
transElement.addEventListener('click', () => {
  switchPage(1)
});
let pageHtml = bodyElement.innerHTML;
thePage();
function thePage() {
  if (page === 1) {
    dash(language, totalMoney, currency, bodyElement, trackerIn, trackerOut);
  } else if (page === 0) {
    trans(bodyElement, indeElement, trackerIn, trackerOut, language, currency);
  } else if (page === 2) {
    repo();
  } else if (page === 3) {
    sitt();
  }
};