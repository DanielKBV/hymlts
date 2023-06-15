var container = document.createElement('div');
container.className = 'container';
var containerInput = document.createElement('div');
containerInput.className = 'containerInput';
var containerButton = document.createElement('div');
containerButton.className = 'containerButton';
var inputRight = document.createElement('input');
inputRight.type = 'number';
var inputLeft = document.createElement('input');
inputLeft.type = 'number';
var buttonPlus = document.createElement('button');
buttonPlus.innerText = '+';
var buttonMinus = document.createElement('button');
buttonMinus.innerText = '–';
var buttonMultiply = document.createElement('button');
buttonMultiply.innerText = '×';
var buttonDivide = document.createElement('button');
buttonDivide.innerText = '÷';
var restart = document.createElement('button');
restart.innerText = 'restart';
restart.className = 'restart';
var h1 = document.createElement('h1');
h1.className = 'h1';
var calculatorPlusHandler = function (symbol) {
    var rightValue = +inputRight.value;
    var leftValue = +inputLeft.value;
    if (symbol === '+') {
        var sum = rightValue + leftValue;
        h1.innerText = "result: ".concat(sum);
    }
    else if (symbol === '-') {
        var sum = rightValue - leftValue;
        h1.innerText = "result: ".concat(sum);
    }
    else if (symbol === '*') {
        var sum = rightValue * leftValue;
        h1.innerText = "result: ".concat(sum);
    }
    else if (symbol === '/') {
        var sum = rightValue / leftValue;
        h1.innerText = "result: ".concat(sum);
    }
    inputRight.value = '';
    inputLeft.value = '';
};
var restartHandler = function () {
    h1.innerText = '';
};
buttonPlus.addEventListener('click', function () { return calculatorPlusHandler('+'); });
buttonMinus.addEventListener('click', function () { return calculatorPlusHandler('-'); });
buttonMultiply.addEventListener('click', function () { return calculatorPlusHandler('*'); });
buttonDivide.addEventListener('click', function () { return calculatorPlusHandler('/'); });
restart.addEventListener('click', restartHandler);
containerButton.append(buttonPlus, buttonMinus, buttonMultiply, buttonDivide, restart);
containerInput.append(inputRight, inputLeft);
container.append(containerInput, containerButton);
document.body.append(container, h1);
