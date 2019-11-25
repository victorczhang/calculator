var firstInputArray = [];
var secondInputArray = [];

var operator;
// var operator = [];

var x = 0;
var y = 0;

var total = 0;

function add() {
    total = x + y;
    x = total;
};

function subtract() {
    total = x - y;
    x = total;
};

function multiply() {
    total = x * y;
    x = total;
};

function divide() {
    total = x / y;
    x = total;
};

function entry(e) {
    // if (operator && y == 0)
    if (operator) {
        // SECOND ENTRY BELOW
        var numValue = e.value;
        secondInputArray.push(numValue);
        secondValue = secondInputArray.join('');
        secondStrToNum = Number(secondValue);
        y = Math.round(secondStrToNum * 100) / 100;
        document.getElementById('screen').innerHTML = y;
    } else {
        // FIRST ENTRY BELOW
        var numValue = e.value;
        firstInputArray.push(numValue);
        firstValue = firstInputArray.join('');
        firstStrToNum = Number(firstValue);
        x = Math.round(firstStrToNum * 100) / 100;
        document.getElementById('screen').innerHTML= x;
    };
};

function clearEntry() {
    firstInputArray = [];
    secondInputArray = [];
    x = 0;
    y = 0;
    operator = '';
    // console.log(firstInputArray);
    // console.log(secondInputArray);
    // console.log(operator)
    document.getElementById('screen').innerHTML = '0';
    // alert('Cleared!')
};

function operatorSelector(e) {
    // operator.push(e.value);
    operator = e.value;

    // Clear the field for next entry after operator
    secondInputArray = [];
    secondValue = 0;
    y = 0;
    // document.getElementById('screen').innerHTML = '0';
};

function operate(x, y) {
    if (operator == '+') {
        add();
    } else if (operator == '-') { 
        subtract();
    } else if (operator == '*') {
        multiply();
    } else if (operator == '/') {
        divide();
    // } else if (operator == '/' && y == 0) {
    //     alert('no');
    };
    document.getElementById('screen').innerHTML = total;
};

// function operate(x, y) {
//     for (i=0; i < operator.length; i++) {
//         if (operator[i] == '+') {
//             add();
//         } else if (operator[i] == '-') { 
//             subtract();
//         } else if (operator[i] == '*') {
//             multiply();
//         } else if (operator[i] == '/') {
//             divide();
//         };
//     };
//     document.getElementById('screen').innerHTML = total;
// };

function backspace() {
    if (!operator) {
        firstInputArray.pop();
        var firstValue = firstInputArray.join('');
        var firstStrToNum = Number(firstValue);
        x = firstStrToNum;
        document.getElementById('screen').innerHTML = x;
    } else {
        secondInputArray.pop();
        var secondValue = secondInputArray.join('');
        var secondStrToNum = Number(secondValue);
        y = secondStrToNum;
        document.getElementById('screen').innerHTML = y;
    }
}