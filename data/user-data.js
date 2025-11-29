//the user name
export let userName = JSON.parse(localStorage.getItem('userName')) || 'abdooo';
// your net worth before using the app
export let totalMoney = JSON.parse(localStorage.getItem('totalMoney')) || '20000';
// the user country
export let country = JSON.parse(localStorage.getItem('country')) || 'eg';
// user language
export let language = JSON.parse(localStorage.getItem('language')) || 'us';
// the user currency 
export let currency = JSON.parse(localStorage.getItem('currency')) || 'EGP';
// the array which all the income transactions are saved in 
export let trackerIn = JSON.parse(localStorage.getItem('trackerIn')) || [];
// the array which all the expense transactions are saved in 
export let trackerOut = JSON.parse(localStorage.getItem('trackerOut')) || [];
