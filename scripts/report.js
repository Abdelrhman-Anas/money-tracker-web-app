const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

export function repo(bodyElement, indeElement, Chart, lang, trackerIn, trackerOut, totalIn, totalOut) {
  indeElement.innerHTML = '';
  bodyElement.classList.remove('main-section-t', 'main-section-d', 'main-section-s');
  bodyElement.classList.add('main-section-r');
  trackerIn.sort((a, b) => {
    const aa = new Date(a.fullDate);
    const bb = new Date(b.fullDate);
    return aa - bb ;
  });
  trackerOut.sort((a, b) => {
    const aa = new Date(a.fullDate);
    const bb = new Date(b.fullDate);
    return aa - bb ;
  });
  let canvElement;
  htmlGenerator()
  function htmlGenerator() {
    if (lang === 'sa') {
      bodyElement.innerHTML = `
        <div class="the-total-div">
          <div></div>
          <div class="in-total">
            <div class="title-div">إجمالي الدخل :</div>
            <div class="in-value-div">
              <span class="in-value">${totalIn(trackerIn)}<span> <span class="currr">EGP</span>
            </div>
          </div>
          <div class="out-total">
            <div class="title-div">إجمالي المصروفات :</div>
            <div class="out-value-div">
              <span class="out-value">${totalOut(trackerOut)}<span> <span class="currr">EGP</span>
            </div>
          </div>
          <div></div>
        </div>
        <div class="container-1-div">
          <div class="buttons-div">
            <button class="year-1">بالسنه</button>
            <button class="month-1">بالشهر</button>
          </div>
          <div class="can-div-1">
          <canvas class="chart-1"></canvas>
        </div>`;
    } else if (lang === 'us') {
      bodyElement.innerHTML = `
        <div class="the-total-div">
          <div></div>
          <div class="in-total">
            <div class="title-div">Total Incomes :</div>
            <div class="in-value-div">
              <span class="in-value">${totalIn(trackerIn)}<span> <span class="currr">EGP</span>
            </div>
          </div>
          <div class="out-total">
            <div class="title-div">Total Expense :</div>
            <div class="out-value-div">
              <span class="out-value">${totalOut(trackerOut)}<span> <span class="currr">EGP</span>
            </div>
          </div>
          <div></div>
        </div>
        <div class="container-1-div">
          <div class="buttons-div">
            <button class="year-1">by Year</button>
            <button class="month-1">by Month</button>
          </div>
          <div class="can-div-1">
          <canvas class="chart-1"></canvas>
        </div>`;
    }
    canvElement = document.querySelector('.can-div-1');
  }
  
    
  //variables
  let YorM = 0;
  let myChart = null;
  which();
  function which() {
    if (YorM === 0) {
      byMounth();
    } else if (YorM === 1) {
      byYear();
    }
  }
  //
  //my month
  function byMounth() {
    let resultIn = [];
    let resultOut = [];
    const todayDate = new Date();
    const fristDayMonth = new Date(todayDate.getFullYear(),todayDate.getMonth(), 1);
    const lastDayMonth = new Date(todayDate.getFullYear(),todayDate.getMonth(), 30);
    trackerIn.forEach((trans) => {
      const transDate = new Date(trans.fullDate);
      if (transDate > fristDayMonth && transDate < lastDayMonth) {
        resultIn.push(trans);
      }
    });
    trackerOut.forEach((trans) => {
      const transDate = new Date(trans.fullDate);
      if (transDate > fristDayMonth && transDate < lastDayMonth) {
        resultOut.push(trans);
      }
    });
    //
    const finalDIn = sumDays(resultIn);
    const finalDOut = sumDays(resultOut);
    getDataOutDay(finalDIn, finalDOut);
  };
  function sumDays(arr) {
    const map = {};
    arr.forEach(trans => {
      const money = Number(trans.money);
      const dayStr = new Date(trans.fullDate).toISOString().split('T')[0];

      if (map[dayStr]) {
        map[dayStr].money += money;
      } else {
        map[dayStr] = { ...trans, money };
      }
    });
    return Object.values(map);
  };
  function getDataOutDay(inn, out) {
    let resultIn = [];
    let resultOut = [];
    days.forEach((nDay) => {
      let i = 0
      let dataF;
      inn.forEach((el) => {
        const data = el.money;
        const fullDate = el.fullDate;
        const day = new Date(fullDate).getDate();
        const dayNum = Number(day)
        if (dayNum === nDay) {
          i = dayNum;
          dataF = data;
        } 
      });
      if (i > 0) {
        resultIn.push(dataF);
      } else if (i === 0) {
        resultIn.push(i);
      }
    });
    days.forEach((nDay) => {
      let i = 0
      let dataF;
      out.forEach((el) => {
        const data = el.money * -1;
        const fullDate = el.fullDate;
        const day = new Date(fullDate).getDate();
        const dayNum = Number(day)
        if (dayNum === nDay) {
          i = dayNum;
          dataF = data;
        } 
      });
      if (i > 0) {
        resultOut.push(dataF);
      } else if (i === 0) {
        resultOut.push(i);
      }
      
    });
    chart1(resultIn, resultOut, days);
  }
  // by year

  function byYear() {
    let resultIn = [];
    let resultOut = [];
    const today = new Date();
    const fristDayYear = new Date(today.getFullYear(), 0, 1);
    const lastDayYear = new Date(today.getFullYear(), 11, 30);
    trackerIn.forEach((trans) => {
      const fullDate = trans.fullDate;
      const date = new Date(fullDate);
      if (date < lastDayYear && date > fristDayYear) {
        resultIn.push(trans);
      }
    });
    trackerOut.forEach((trans) => {
      const fullDate = trans.fullDate;
      const date = new Date(fullDate);
      if (date < lastDayYear && date > fristDayYear) {
        resultOut.push(trans);
      }
    });
    const finalResultIn = sumMonths(resultIn);
    const finalResultOut = sumMonths(resultOut);
    getDataOutMonths(finalResultIn, finalResultOut)
  }
  function sumMonths(arr) {
    const map = {};
    arr.forEach(trans => {
      const money = Number(trans.money);
      const monthStr = trans.month;

      if (map[monthStr]) {
        map[monthStr].money += money;
      } else {
        map[monthStr] = { ...trans, money };
      }
    });
    return Object.values(map);
  };
  function getDataOutMonths(inn, out) {
    let fixArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let resultIn = [];
    let resultOut = [];
    fixArray.forEach((nDay) => {
      let i = 0;
      let dataF;
      inn.forEach((el) => {
        const data = el.money;
        const fullDate = el.fullDate;
        const month = new Date(fullDate).getMonth();
        const dayNum = Number(month)
        if (dayNum === nDay) {
          i = dayNum;
          dataF = data;
        } 
      });
      if (i > 0) {
        resultIn.push(dataF);
      } else if (i === 0) {
        resultIn.push(i);
      }
    }); 
    fixArray.forEach((nMonth) => {
      let i = 0;
      let dataF;
      out.forEach((el) => {
        const data = el.money * -1;
        const fullDate = el.fullDate;
        const day = new Date(fullDate).getMonth();
        const dayNum = Number(day)
        if (dayNum === nMonth) {
          i = dayNum;
          dataF = data;
        } 
      });
      if (i > 0) {
        resultOut.push(dataF);
      } else if (i === 0) {
        resultOut.push(i);
      }
    }); 
    chart1(resultIn, resultOut, months);
  }

  function chart1(data1, data2, time) {
    if (myChart) {
      myChart.destroy();
      canvElement.innerHTML = '';
      canvElement.innerHTML = '<canvas class="chart-1"></canvas>';
      myChart = null;
    }
    const ctx1 = document.querySelector('.chart-1').getContext("2d");
    myChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
              label: 'income',
              data: data1,
              backgroundColor: 'rgba(80, 171, 64, 1)'
            },{
              label: 'expense',
              data: data2,
              backgroundColor: 'rgba(223, 38, 38, 1)'
            }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
              y: { beginAtZero: true },
              x: { beginAtZero: true }
          }
        }
    });
  }
  colorChange();
  function colorChange() {
    const year = document.querySelector('.year-1');
    const month = document.querySelector('.month-1');
    year.classList.remove('active');
    month.classList.remove('active');
    if (YorM === 0) {
      month.classList.add('active');
    } else if (YorM === 1) {
      year.classList.add('active');
    }
  }
  document.querySelector('.year-1').addEventListener('click', () => {
    byYear();
    YorM = 1;
    colorChange();
  });
  document.querySelector('.month-1').addEventListener('click', () => {
    byMounth();
    YorM = 0;
    colorChange();
  });
};