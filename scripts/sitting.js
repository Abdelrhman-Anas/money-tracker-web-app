export function sitt(bodyElement, indeElement, userName, totalMoney, Usercountry, lang, currency, trackerIn, trackerOut, countries, languages) {
  indeElement.innerHTML = '';
  bodyElement.classList.remove('main-section-t', 'main-section-d', 'main-section-r');
  bodyElement.classList.add('main-section-s');
  if (lang === 'sa') {
    bodyElement.innerHTML = 
      `<div class="change-area">
        <div class="name-input-div the-div">
          <div class="s-title">تغيير الاسم :</div>
          <input class="name-input js-name">
        </div>

        <div class="coun-input-div the-div">
          <div class="s-title">تغيير العمله :</div>
          <div class="whole-cell">
           <div class="selector-curr-div-s"></div>
            <div class="viewer-curr-div-s">
                
            </div>
          </div>
        </div>

        <div class="lang-input-div the-div">
          <div class="s-title">تغيير اللغه :</div>
          <div class="whole-cell">
            <div class="selector-lang-div-s"></div>
            <div class="viewer-lang-div-s">
                  
            </div>
          </div>
        </div>

        <div class="coun-input-div the-div">
          <div class="s-title">تغيير البلد :</div>
          <div class="whole-cell">
            <div class="selector-coun-div-s"></div>
            <div class="viewer-coun-div-s">
                
            </div>
          </div>
        </div>
        <div class="button-div">
          <button class="submit-button sub">حفظ</button>
        </div>
      </div>
        
      <div class="delete-all-div">
        <div class="s-title">حذف كل البيانات :</div>
        <button class="button-delete">
          حذف الكل
          <img class="trash-pic" src="icons-images/icons/delete.png">
        </button>
        <div class="pop-div">
          <!--
            <div class="text">هل انت متاك ,انك حذف جميع بياناتك ?</div>
            <div class="yes-no-div">
              <button class="yes i">Yes</button>
              <button class="No i">No</button>
            </div>
        </div>
        -->
      </div> `;
  } else if (lang === 'us') {
    bodyElement.innerHTML = 
      `<div class="change-area">
        <div class="name-input-div the-div">
          <div class="s-title"> name Change :</div>
          <input class="name-input js-name">
        </div>

        <div class="coun-input-div the-div">
          <div class="s-title">currency Change :</div>
          <div class="whole-cell">
            <div class="selector-curr-div-s"></div>
            <div class="viewer-curr-div-s">
                
            </div>
          </div>
        </div>

        <div class="lang-input-div the-div">
          <div class="s-title">language Change :</div>
          <div class="whole-cell">
            <div class="selector-lang-div-s"></div>
            <div class="viewer-lang-div-s">
                  
            </div>
          </div>
        </div>

        <div class="coun-input-div the-div">
          <div class="s-title">country Change :</div>
          <div class="whole-cell">
            <div class="selector-coun-div-s"></div>
            <div class="viewer-coun-div-s">
                
            </div>
          </div>
        </div>
        <div class="button-div">
          <button class="submit-button sub">save</button>
        </div>
      </div>
        
      <div class="delete-all-div">
        <div class="s-title">Delete all Data :</div>
        <button class="button-delete">
          Delete All
          <img class="trash-pic" src="icons-images/icons/delete.png">
        </button>
        <div class="pop-div">
          <!--
            <div class="text">Are you sure you want to delete all your data ?</div>
            <div class="yes-no-div">
              <button class="yes i">Yes</button>
              <button class="No i">No</button>
            </div>
        </div>
        -->
      </div>`;
  }
  // saving variabels
  let co;
  let la;
  let cu;
  // html Elements 
  const counElement = document.querySelector('.viewer-coun-div-s');
  const counResult = document.querySelector('.selector-coun-div-s');
  const langELement = document.querySelector('.viewer-lang-div-s');
  const langResult = document.querySelector('.selector-lang-div-s');
  const currELement = document.querySelector('.viewer-curr-div-s');
  const currResult = document.querySelector('.selector-curr-div-s');
  // inputs 
  const nameInput = document.querySelector('.name-input');
  // buttons 
  const subElement = document.querySelector('.sub');
  const deleteElement = document.querySelector('.button-delete');
  // click tracker
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
  //country
  counResult.addEventListener('click', () => {
    let html = '';
    countries.forEach((coun) => {
      const name = coun.country;
      const theValue = coun.code;
      console.log(coun.code);
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
        counResult.innerHTML = `<span class="fi fi-${counData.code} coun-pic"></span> <div class="coun-name">${counData.country}</div>`;
        counElement.innerHTML = '';
      });
    });
  });
  // language selector
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
        langELement.innerHTML = '';
        langResult.innerHTML = 
          `<span class="fi fi-${langData.code} coun-pic"></span> <div class="lang-name">${langData.lang}</div>`;
      });
    })   
  });
  // currancy selector
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
        currELement.innerHTML = '';
        currResult.innerHTML = 
          `<span class="fi fi-${currData.code} curr-pic"></span> <div class="curr-name">${currData.currency}</div>`;
      });
    })   
  });
  subElement.addEventListener('click', () => {
    let name = nameInput.value.trim();
    if (co === undefined) {
      co = Usercountry;
    };
    if (la === undefined) {
      la = lang;
    };
     if (cu === undefined) {
      cu = currency;
    };
    if (name === '' || name === null || name === undefined) {
      name = userName;
    }
    userName = name;
    Usercountry = co;
    lang = la;
    currency = cu;
    localStorage.setItem('userName', JSON.stringify(userName));
    localStorage.setItem('currency', JSON.stringify(currency));
    localStorage.setItem('language', JSON.stringify(lang));
    localStorage.setItem('country', JSON.stringify(Usercountry));
    window.location.reload();
  });
  deleteElement.addEventListener('click', () => {
    const pop = document.querySelector('.pop-div');
    pop.innerHTML = 
      ` <div class="text">Are you sure you want to delete all your data ?</div>
        <div class="yes-no-div">
          <button class="yes i">Yes</button>
          <button class="No i">No</button>
        </div>`;
    document.querySelector('.yes').addEventListener('click',() => {
      localStorage.removeItem('userName', JSON.stringify(userName));
      localStorage.removeItem('currency', JSON.stringify(currency));
      localStorage.removeItem('language', JSON.stringify(lang));
      localStorage.removeItem('country', JSON.stringify(Usercountry));
      localStorage.removeItem('totalMoney', JSON.stringify(totalMoney));
      localStorage.removeItem('trackerIn', JSON.stringify(trackerIn));
      localStorage.removeItem('trackerOut', JSON.stringify(trackerOut));
      localStorage.clear();
      location.replace("account.html");
    });
    document.querySelector('.No').addEventListener('click',() => {
      pop.innerHTML = '';
    });
  });
}