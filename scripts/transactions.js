export function trans(bodyElement, indeElement, trackerIn, trackerOut, lang, currency) {
  bodyElement.classList.remove('main-section-d', 'main-section-r', 'main-section-s');
  bodyElement.classList.add('main-section-t');
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
    let inOrOut = 'Income';
    const inElement = document.querySelector('.in-inde');
    const outElement = document.querySelector('.out-inde');
    inElement.addEventListener('click', () => {
      inOrOut = 'Income';
      htmlGenerator();
      colorFix();
      console.log(inOrOut);
    });
    outElement.addEventListener('click', () => {
      inOrOut = 'Expense';
      htmlGenerator();
      colorFix();
      console.log(inOrOut);
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
        bodyElement.innerHTML = theHtml;
        document.querySelectorAll('.remove-button').forEach((remove) => {
          const reCode = remove.dataset.re
          remove.addEventListener('click', () => {
            trackerIn.splice(reCode, 1);
            htmlGenerator();
            localStorage.setItem('trackerIn' , JSON.stringify(trackerIn));
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
        bodyElement.innerHTML = theHtml;
        document.querySelectorAll('.remove-button').forEach((remove) => {
          const reCode = remove.dataset.re
          remove.addEventListener('click', () => {
            trackerOut.splice(reCode, 1);
            htmlGenerator();
            localStorage.setItem('trackerOut' , JSON.stringify(trackerOut));
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
    let inOrOut = 'Income';
    const inElement = document.querySelector('.in-inde');
    const outElement = document.querySelector('.out-inde');
    inElement.addEventListener('click', () => {
      inOrOut = 'Income';
      htmlGenerator();
      colorFix();
      console.log(inOrOut);
    });
    outElement.addEventListener('click', () => {
      inOrOut = 'Expense';
      htmlGenerator();
      colorFix();
      console.log(inOrOut);
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
        bodyElement.innerHTML = theHtml;
        document.querySelectorAll('.remove-button').forEach((remove) => {
          const reCode = remove.dataset.re
          remove.addEventListener('click', () => {
            trackerIn.splice(reCode, 1);
            htmlGenerator();
            localStorage.setItem('trackerIn' , JSON.stringify(trackerIn));
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
        bodyElement.innerHTML = theHtml;
        document.querySelectorAll('.remove-button').forEach((remove) => {
          const reCode = remove.dataset.re
          remove.addEventListener('click', () => {
            trackerOut.splice(reCode, 1);
            htmlGenerator();
            localStorage.setItem('trackerOut' , JSON.stringify(trackerOut));
          });
        });
      };
    };
  };
};