const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

submitBtn.onclick = function () {
if (action == '+') {
    const sum = Number(input1.value) + Number(input2.value)
    resultElement.textContent = sum
} else if (action == '-') {
    const sum = Number(input1.value) - Number(input2.value)
    resultElement.textContent = sum
}


}

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}