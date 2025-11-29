export function trans(bodyElement, indeElement, trackerIn, trackerOut, lang, currency, totalIn, totalOut, totalAll, totalMoney) {
  bodyElement.classList.remove('main-section-d', 'main-section-r', 'main-section-s');
  bodyElement.classList.add('main-section-t');
  bodyElement.innerHTML = 
    `<div class="trans-container"></div>
    <div class="calc-container"></div>`;
  const transDivElement = document.querySelector('.trans-container');
  const calcDivElement = document.querySelector('.calc-container');
  if (lang === 'sa') {
    indeElement.innerHTML = 
   `<div class="gab"></div>
    <div class="inde-div">
      <div class="incomes">
        <button class="in-inde inde-button">المدخلات</button>
      </div>
      <div class="expenses">
        <button class="out-inde inde-button">المصروفات</button>
      </div>
    </div>
    <div class="gab"></div>`;
    calcDivElement.innerHTML = 
      `<div class="calc-div">
        <div class="total-in">
          <div class="title-t">اجمالي الدخل :</div>
          <div class="value-div i">
            <span class="value-in">${totalIn(trackerIn)}</span> <span class="curancyy">${currency}</span>
          </div>
        </div>
        <div class="total-out">
          <div class="title-t">اجمالي المصروفات :</div>
          <div class="value-div e">
            <span class="value-out">${totalOut(trackerOut)}</span> <span class="curancyy">${currency}</span>
          </div>
        </div>
        <div class="total-all">
          <div class="title-t">اجمالي الثروه :</div>
          <div class="value-div all">
            <span class="value-all">${totalAll(trackerIn, trackerOut)}</span> <span class="curancyy">${currency}</span>
          </div>
        </div>
      </div>`;
    const inValueElement = document.querySelector('.value-in');
    const outValueElement = document.querySelector('.value-out');
    const allValueElement = document.querySelector('.value-all');
    rightColor();
    function rightColor() {
      allValueElement.classList.remove('total-if-po', 'total-if-ne');
      const total = totalAll(trackerIn, trackerOut, totalMoney);
      if (total > 0) {
        allValueElement.classList.add('total-if-po');
      } else if (total < 0) {
        allValueElement.classList.add('total-if-ne');
      }
    }
    let inOrOut = 'Income';
    const inElement = document.querySelector('.in-inde');
    const outElement = document.querySelector('.out-inde');
    inElement.addEventListener('click', () => {
      inOrOut = 'Income';
      htmlGenerator();
      colorFix();
    });
    outElement.addEventListener('click', () => {
      inOrOut = 'Expense';
      htmlGenerator();
      colorFix();
    });
    colorFix();
    function colorFix() {
      inElement.classList.remove('in-inde-c');
      outElement.classList.remove('out-inde-c');
      if (inOrOut === 'Income') {
        inElement.classList.add('in-inde-c');
      } else if (inOrOut === 'Expense') {
        outElement.classList.add('out-inde-c');
      }
    };
    // generating HTML 
    htmlGenerator();
    function htmlGenerator() {
      let theHtml = '';
      
      if (inOrOut === 'Income') {
        if (trackerIn.length === 0) {
          theHtml = 
          `<div class="nothing">
            <div></div>
            <div class="nothing-text">
              لا يوجد اي معاملات
            </div>
            <div></div>
            <div></div>
            </div>`;
        } else {
          trackerIn.sort((a, b) => {
            const aa = new Date(a.fullDate);
            const bb = new Date(b.fullDate);
            return aa - bb ;
          });
        
          trackerIn.forEach((trans, index) => {
            theHtml += 
              `<div class="a-trans">
                <div class="date">${trans.date}</div>
                <div class="flex-row">
                  <div class="discrip">${trans.disc}</div>
                  
                  <div class="money-amount-div-in">
                    <div class="money-amount">${trans.money}</div> <div class="cur">${currency}</div>
                  </div>
                  <div class="remove-div">
                    <button class="remove-button" data-re="${index}"> 
                      <img src="icons-images/icons/delete.png" class="remove-pic">
                    </button>
                  </div>
                </div>
                <div class="note-div">
                  note : <span class="note">${trans.note}</span>
                </div>
              </div>`;
          });
        }
        transDivElement.innerHTML = theHtml;
        document.querySelectorAll('.remove-button').forEach((remove) => {
          const reCode = remove.dataset.re
          remove.addEventListener('click', () => {
            trackerIn.splice(reCode, 1);
            htmlGenerator();
            localStorage.setItem('trackerIn' , JSON.stringify(trackerIn));
            inValueElement.innerHTML = totalIn(trackerIn);
            outValueElement.innerHTML = totalOut(trackerOut);
            allValueElement.innerHTML = totalAll(trackerIn, trackerOut, totalMoney);
            rightColor();


          });
        });
      } else if (inOrOut === 'Expense') {
        if (trackerOut.length === 0) {
          theHtml = 
          `<div class="nothing">
            <div></div>
            <div class="nothing-text">
              لا يوجد اي معاملات
            </div>
            <div></div>
            <div></div>
            </div>`;
        } else {
          trackerOut.sort((a, b) => {
            const aa = new Date(a.fullDate);
            const bb = new Date(b.fullDate);
            return aa - bb ;
          });
        
          trackerOut.forEach((trans, index) => {
            theHtml += 
              `<div class="a-trans">
                <div class="date">${trans.date}</div>
                <div class="flex-row">
                  <div class="discrip">${trans.disc}</div>
                  
                  <div class="money-amount-div-out">
                    <div class="money-amount">${trans.money}</div> <div class="cur">${currency}</div>
                  </div>
                  <div class="remove-div">
                    <button class="remove-button"> 
                      <img src="icons-images/icons/delete.png" class="remove-pic">
                    </button>
                  </div>
                </div>
                <div class="note-div">
                  note : <span class="note">${trans.note}</span>
                </div>
              </div>`;
          });
        };
        transDivElement.innerHTML = theHtml;
        document.querySelectorAll('.remove-button').forEach((remove) => {
          const reCode = remove.dataset.re
          remove.addEventListener('click', () => {
            trackerOut.splice(reCode, 1);
            htmlGenerator();
            localStorage.setItem('trackerOut' , JSON.stringify(trackerOut));
            inValueElement.innerHTML = totalIn(trackerIn);
            outValueElement.innerHTML = totalOut(trackerOut);
            allValueElement.innerHTML = totalAll(trackerIn, trackerOut, totalMoney);
            rightColor();
          });
        });
      };
    };
  } else if (lang === 'us') {
    indeElement.innerHTML = 
   `<div class="gab"></div>
    <div class="inde-div">
      <div class="incomes">
        <button class="in-inde inde-button">Incomes</button>
      </div>
      <div class="expenses">
        <button class="out-inde inde-button">Expenses</button>
      </div>
    </div>
    <div class="gab"></div>`;
    calcDivElement.innerHTML = 
      `<div class="calc-div">
        <div class="total-in">
          <div class="title-t">Total Income :</div>
          <div class="value-div i">
            <span class="value-in">${totalIn(trackerIn)}</span> <span class="curancyy">${currency}</span>
          </div>
        </div>
        <div class="total-out">
          <div class="title-t">Total Expense :</div>
          <div class="value-div e">
            <span class="value-out">${totalOut(trackerOut)}</span> <span class="curancyy">${currency}</span>
          </div>
        </div>
        <div class="total-all">
          <div class="title-t">Total Worth :</div>
          <div class="value-div all">
            <span class="value-all">${totalAll(trackerIn, trackerOut, totalMoney)}</span> <span class="curancyy">${currency}</span>
          </div>
        </div>
      </div>`;
    const inValueElement = document.querySelector('.value-in');
    const outValueElement = document.querySelector('.value-out');
    const allValueElement = document.querySelector('.value-all');
    rightColor();
    function rightColor() {
      allValueElement.classList.remove('total-if-po', 'total-if-ne');
      const total = totalAll(trackerIn, trackerOut, totalMoney);
      if (total > 0) {
        allValueElement.classList.add('total-if-po');
      } else if (total < 0) {
        allValueElement.classList.add('total-if-ne');
      }
    }
    let inOrOut = 'Income';
    const inElement = document.querySelector('.in-inde');
    const outElement = document.querySelector('.out-inde');
    inElement.addEventListener('click', () => {
      inOrOut = 'Income';
      htmlGenerator();
      colorFix();
    });
    outElement.addEventListener('click', () => {
      inOrOut = 'Expense';
      htmlGenerator();
      colorFix();
    });
    colorFix();
    function colorFix() {
      inElement.classList.remove('in-inde-c');
      outElement.classList.remove('out-inde-c');
      if (inOrOut === 'Income') {
        inElement.classList.add('in-inde-c');
      } else if (inOrOut === 'Expense') {
        outElement.classList.add('out-inde-c');
      }
    };
    // generating HTML 
    htmlGenerator();
    function htmlGenerator() {
      let theHtml = '';
      
      if (inOrOut === 'Income') {
        if (trackerIn.length === 0) {
          theHtml = 
          `<div class="nothing">
            <div></div>
            <div class="nothing-text">
              No transactions found
            </div>
            <div></div>
            <div></div>
            </div>`;
        } else {
          trackerIn.sort((a, b) => {
            const aa = new Date(a.fullDate);
            const bb = new Date(b.fullDate);
            return aa - bb ;
          });
        
          trackerIn.forEach((trans, index) => {
            theHtml += 
              `<div class="a-trans">
                <div class="date">${trans.date}</div>
                <div class="flex-row">
                  <div class="discrip">${trans.disc}</div>
                  
                  <div class="money-amount-div-in">
                    <div class="money-amount">${trans.money}</div> <div class="cur">${currency}</div>
                  </div>
                  <div class="remove-div">
                    <button class="remove-button" data-re="${index}"> 
                      <img src="icons-images/icons/delete.png" class="remove-pic">
                    </button>
                  </div>
                </div>
                <div class="note-div">
                  note : <span class="note">${trans.note}</span>
                </div>
              </div>`;
          });
        }
        transDivElement.innerHTML = theHtml;
        document.querySelectorAll('.remove-button').forEach((remove) => {
          const reCode = remove.dataset.re
          remove.addEventListener('click', () => {
            trackerIn.splice(reCode, 1);
            htmlGenerator();
            localStorage.setItem('trackerIn' , JSON.stringify(trackerIn));
            inValueElement.innerHTML = totalIn(trackerIn);
            outValueElement.innerHTML = totalOut(trackerOut);
            allValueElement.innerHTML = totalAll(trackerIn, trackerOut, totalMoney);
            rightColor();
          });
        });
      } else if (inOrOut === 'Expense') {
        if (trackerOut.length === 0) {
          theHtml = 
          `<div class="nothing">
            <div></div>
            <div class="nothing-text">
              No transactions found
            </div>
            <div></div>
            <div></div>
            </div>`;
        } else {
          trackerOut.sort((a, b) => {
            const aa = new Date(a.fullDate);
            const bb = new Date(b.fullDate);
            return aa - bb ;
          });
        
          trackerOut.forEach((trans, index) => {
            theHtml += 
              `<div class="a-trans">
                <div class="date">${trans.date}</div>
                <div class="flex-row">
                  <div class="discrip">${trans.disc}</div>
                  
                  <div class="money-amount-div-out">
                    <div class="money-amount">${trans.money}</div> <div class="cur">${currency}</div>
                  </div>
                  <div class="remove-div">
                    <button class="remove-button"> 
                      <img src="icons-images/icons/delete.png" class="remove-pic">
                    </button>
                  </div>
                </div>
                <div class="note-div">
                  note : <span class="note">${trans.note}</span>
                </div>
              </div>`;
          });
        };
        transDivElement.innerHTML = theHtml;
        document.querySelectorAll('.remove-button').forEach((remove) => {
          const reCode = remove.dataset.re
          remove.addEventListener('click', () => {
            trackerOut.splice(reCode, 1);
            htmlGenerator();
            localStorage.setItem('trackerOut' , JSON.stringify(trackerOut));
            inValueElement.innerHTML = totalIn(trackerIn);
            outValueElement.innerHTML = totalOut(trackerOut);
            allValueElement.innerHTML = totalAll(trackerIn, trackerOut, totalMoney);
            rightColor();
          });
        });
      };
    };
  };
};