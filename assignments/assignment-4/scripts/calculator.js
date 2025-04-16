// calculator.js

const display = document.getElementById("display");
const nums = document.querySelectorAll("[data-number]");
const ops  = document.querySelectorAll("[data-operator]");
const clearBtn = document.getElementById("clear");
const signBtn  = document.getElementById("toggle-sign");
const pctBtn   = document.getElementById("percent");
const eqBtn    = document.getElementById("equals");

let curr = "0", prev = null, op = null;

function update() {
    display.textContent = curr;
}

function append(n) {
    if (n === "." && curr.includes(".")) return;
    curr = (curr === "0" && n !== ".") ? n : curr + n;
    update();
}

function chooseOperator(o) {
    if (op !== null) compute();
    prev = curr; op = o; curr = "0";
}

function compute() {
    const a = parseFloat(prev), b = parseFloat(curr);
    if (isNaN(a) || isNaN(b)) return;
    let res;
    switch(op) {
        case "+": res = a + b; break;
        case "-": res = a - b; break;
        case "*": res = a * b; break;
        case "/": res = b === 0 ? "Error" : a / b; break;
    }
    curr = res.toString();
    op = prev = null;
    update();
}

nums.forEach(b => b.addEventListener("click", () => append(b.dataset.number)));
ops .forEach(b => b.addEventListener("click", () => chooseOperator(b.dataset.operator)));

clearBtn.addEventListener("click", () => { curr="0"; prev=op=null; update(); });
signBtn .addEventListener("click", () => { curr = (parseFloat(curr)*-1).toString(); update(); });
pctBtn  .addEventListener("click", () => { curr = (parseFloat(curr)/100).toString(); update(); });
eqBtn   .addEventListener("click", compute);

// Keyboard support
document.addEventListener("keydown", e => {
    if (/\d/.test(e.key) || e.key === ".") append(e.key);
    if (["+","-","*","/"].includes(e.key)) chooseOperator(e.key);
    if (e.key === "Enter") compute();
    if (e.key === "Escape") { curr="0"; prev=op=null; update(); }
});