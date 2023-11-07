let btn = document.querySelector(".btn");
console.log(btn);
let inputDate = document.querySelector(".inputDate");

const todaydate = new Date();

function calculate() {
  let indate = new Date(inputDate.value);
  let year = Math.abs(todaydate.getFullYear() - indate.getFullYear());
  let month = Math.abs(todaydate.getMonth() - indate.getMonth());
  let day = Math.abs(todaydate.getDate() - indate.getDate());

  const total_months = year * 12 + month;

  const result = document.querySelector(".result");
  result.innerHTML = `${year} years ${month} months ${day} days<br>${total_months} months`;
}

btn.addEventListener("click", calculate);
