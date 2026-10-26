function greet(name) {
  return "Hello, "+name+"!";
}
let count = 0;
function myFunc() {
  count++;
  return count;
}
function getRandomNum(max) {
  if(isNaN(max) || max<1){
    return 0;
  }
  return Math.floor(Math.random()*max)+1;
}
function myAdder(x, y) {
  return x+y;
}
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2-x1)**2+(y2-y1)**2).toFixed(2);
}
function tipCalc(bill, tipPercent) {
  return (bill*(tipPercent/100)+bill).toFixed(2);
}
function onGreetClick() {
  let name = document.getElementById("greetInput").value;
  let result = greet(name);
  document.getElementById("outGreet").innerHTML = result;
}

function onMyFuncClick() {
  let result = myFunc();
  document.getElementById("outMyFunc").innerHTML = result;
}

function onRandomClick() {
  let max = parseInt(document.getElementById("maxRand").value);
  let result = getRandomNum(max);
  document.getElementById("outRandom").innerHTML = result;
}

function onAdderClick() {
  let x = parseFloat(document.getElementById("addX").value);
  let y = parseFloat(document.getElementById("addY").value);
  let result = myAdder(x, y);
  document.getElementById("outAdder").innerHTML = result;
}

function onDistanceClick() {
  let x1 = parseFloat(document.getElementById("x1").value);
  let y1 = parseFloat(document.getElementById("y1").value);
  let x2 = parseFloat(document.getElementById("x2").value);
  let y2 = parseFloat(document.getElementById("y2").value);
  let result = distance(x1, y1, x2, y2);
  document.getElementById("outDistance").innerHTML = result;
}

function onTipClick() {
  let bill = parseFloat(document.getElementById("tipBill").value);
  let pct = parseFloat(document.getElementById("tipPercent").value);
  let result = tipCalc(bill, pct);
  document.getElementById("outTip").innerHTML = result;
}
