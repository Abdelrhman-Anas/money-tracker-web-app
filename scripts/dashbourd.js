////function for generating the HTML of dashbourd page////
//exporting it to the main file 
export function dash(lang, totalMoney, currency, bodyElement, indeElement, trackerIn, trackerOut, totalAll) {
  indeElement.innerHTML = '';
  bodyElement.classList.remove('main-section-t', 'main-section-r', 'main-section-s');
  bodyElement.classList.add('main-section-d');
  //finding if the user choosed english or arabic 
  if (lang === 'sa') {
    bodyElement.innerHTML = `
    <div class="calc-area">
        <div class="title"> صافي الثروة </div>
        <div class="total-div">
          <div class="total">${totalAll(trackerIn, trackerOut)}</div>
          <div class="currunt-cur">${currency}</div>
        </div>
      </div>

      <div class="work-area">
        <div class="title-div">
          <div class="title">معاملة جديدة :</div>
        </div>
        <div class="border-div">
          <div class="choose-section">
            <button class="buttonA buttonAB js-if-in">دَخْل</button>
            <div class="gab"></div>
            <button class="buttonB buttonAB js-if-out">مصروف</button>
          </div>

          
          <div class="input-data">

            <div class="compine-div-1">
              <div class="text-input-div">
                <div class="input-disc">الوصف :</div>
                <div class="small-text-input-div">
                  <input type="text" class="js-text-input text-input">
                </div>
              </div>

              <div class="date-input-div">
                <div class="input-disc"></div>
                <input type="date" class="js-date-input date-input">
                
              </div>
            </div>
            
            <div class="compine-div-2">
              <div class="note-input-div">
                <div class="input-disc">ملاحظه :</div>
                <input type="text" class="js-note-input note-input">
                <div class="gab-2"></div>
              </div>
              <div class="money-input-div">
                
                <div class="inputs-money">
                  <input type="number" class="js-money-input money-input">
                  <div class="currunt-cur">${currency}</div>
                </div>
                <div class="money-alert">الرجاء إدخال المبلغ</div>
              </div>
            </div>
            <div class="submit-div">
              <div></div>
              <div class="submit-button" 
              >اضافة الدخل</div
            </div>
          </div>
        </div>
      </div>`;
  } else if (lang === 'us') {
    bodyElement.innerHTML = 
      `<div class="calc-area">
        <div class="title">Net Worth :</div>
        <div class="total-div">
          <div class="total">${totalAll(trackerIn, trackerOut, totalMoney)}</div>
          <div class="currunt-cur">${currency}</div>
        </div>
      </div>

      <div class="work-area">
        <div class="title-div">
          <div class="title">New Transaction :</div>
        </div>
        <div class="border-div">
          <div class="choose-section">
            <button class="buttonA buttonAB js-if-in">Income</button>
            <div class="gab"></div>
            <button class="buttonB buttonAB js-if-out button-active-out">Expense</button>
          </div>

          
          <div class="input-data">

            <div class="compine-div-1">
              <div class="text-input-div">
                <div class="input-disc">name :</div>
                <div class="small-text-input-div">
                  <input type="text" class="js-text-input text-input">
                </div>
              </div>

              <div class="date-input-div">
                <div class="input-disc"></div>
                <input type="date" class="js-date-input date-input">
                
              </div>
            </div>
            
            <div class="compine-div-2">
              <div class="note-input-div">
                <div class="input-disc">Note :</div>
                <input type="text" class="js-note-input note-input">
                <div class="gab-2"></div>
              </div>
              <div class="money-input-div">
                
                <div class="inputs-money">
                  <input type="number" class="js-money-input money-input">
                  <div class="currunt-cur">${currency}</div>
                </div>
                <div class="money-alert">Please put an amount</div>
              </div>
            </div>
            <div class="submit-div">
              <div></div>
              <div class="submit-button">Add Income</div>
            </div>
          </div>
        </div>
      </div>`;
  };
  //
  const totalElement = document.querySelector('.total');
  rightColor();
  function rightColor() {
    totalElement.classList.remove('total-if-po', 'total-if-ne');
    const total = totalAll(trackerIn, trackerOut, totalMoney);
    if (total > 0) {
      totalElement.classList.add('total-if-po');
    } else if (total < 0) {
      totalElement.classList.add('total-if-ne');
    }
  }
  // buttons Elements
  const submitElement = document.querySelector('.submit-button');
  const inElement = document.querySelector('.js-if-in');
  const outElement = document.querySelector('.js-if-out');
  // inputs elements
  const disc = document.querySelector('.js-text-input');
  const date = document.querySelector('.js-date-input');
  const money = document.querySelector('.js-money-input');
  const note = document.querySelector('.js-note-input');
  // the income and the expense buttons 
  let ifInOut = 'Income';
  inElement.addEventListener('click', () => {
  ifInOut = 'Income';
  colorRange();
  subChange();
  });
  outElement.addEventListener('click', () => {
    ifInOut = 'Expense';
    colorRange();
    subChange();
  });
  //when clicking the income/expense buttons their color change to match the one that the user is useing 
  colorRange()
  function colorRange() {
  inElement.classList.remove('button-active-in');
  outElement.classList.remove('button-active-out');
  if (ifInOut === 'Income') {
    inElement.classList.add('button-active-in');
  } else if (ifInOut === 'Expense') {
  outElement.classList.add('button-active-out');
  }
  }
  // changing the submit innerHTML according to what the user need to use 
  subChange()
  function subChange() {
    if (lang === 'sa') {
      if (ifInOut === 'Income') {
        submitElement.innerHTML = `اضف دخل`
      } else if (ifInOut === 'Expense') {
        submitElement.innerHTML = `اضف مصروف`
      };
    } else if (lang === 'us') {
      if (ifInOut === 'Income') {
        submitElement.innerHTML = `Add Income`
      } else if (ifInOut === 'Expense') {
        submitElement.innerHTML = `Add Expense`
      };
    };
  };
  //
  const alertElement = document.querySelector('.money-alert');
  let timeOut;
  submitElement.addEventListener('click', () => {
    if ((money.value === '' || money.value === 0)) {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        alertElement.classList.remove('money-alert-if');
      }, 3000);
      alertElement.classList.add('money-alert-if');
    }else {
      const options = {
      day: 'numeric',
      month: 'short'
      };
      let getDate;
      let aDate;
      let dayMonth;
      // finding if the user pick a date or not, if the user did not pick the computer use todays date 
      if (date.value === '' || date.value === null) {
        aDate = new Date();
      } else {
        getDate = date.value;
        aDate = new Date(getDate);
      } 
      dayMonth = aDate.toLocaleDateString("en-GB", options);
    
      if (ifInOut === 'Income') {
        trackerIn.push({
          disc: disc.value,
          date: dayMonth,
          fullDate: aDate,
          month: new Date(aDate).getMonth(),
          money: Number(money.value),
          note: note.value
        });
      } else if (ifInOut === 'Expense') {
        trackerOut.push({
          disc: disc.value,
          date: dayMonth,
          fullDate: aDate,
          month: new Date(aDate).getMonth(),
          money: Number(-money.value),
          note: note.value
        });
      };
      //saving the data of the income and the expense in the localStorage 
      localStorage.setItem('trackerIn' , JSON.stringify(trackerIn));
      localStorage.setItem('trackerOut', JSON.stringify(trackerOut));
      
      totalElement.innerHTML = totalAll(trackerIn, trackerOut, totalMoney);
      rightColor();
      htmlChange();
    };
  });
  

  // returning all thing to the defult
  function htmlChange() {
    disc.value = '';
    date.value = '';
    money.value = '';
    note.value = '';
  };
}