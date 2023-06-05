let firstNumber = ''
let secondNumber = ''
let operation = ''
let operation_bool = false

let display_top = document.querySelector('#top_row')
let display_bottom = document.querySelector('#bottom_row')
let display_operation = document.querySelector('#operation') 
let operation_buttons = document.querySelectorAll('.operation_button')
let number_buttons = document.querySelectorAll(".number")
let equal_button = document.querySelector(('.equal_button'))



function upgradeNumber(number) {
    if (!operation_bool) {
        let arr = Array.from(firstNumber)
        arr.push(number)
        firstNumber = arr.join("")
        display_top.textContent = firstNumber
    }
    else {
        let arr2 = Array.from(secondNumber)
        arr2.push(number)
        secondNumber = arr2.join("")
        display_bottom.textContent = secondNumber
    }
}

function calculate() {
    if (operation === '+') {
        let sum = Number(firstNumber) + Number(secondNumber)
        sum = sum.toString()
        firstNumber = `${sum}`
        secondNumber = ''
        //operation = ''
        //display_operation.textContent = operation
        display_bottom.textContent = secondNumber
        display_top.textContent = firstNumber
    }
    else if (operation === '-') {
        let sum = Number(firstNumber) - Number(secondNumber)
        sum = sum.toString()
        firstNumber = `${sum}`
        secondNumber = ''
        //operation = ''
        //display_operation.textContent = operation
        display_bottom.textContent = secondNumber
        display_top.textContent = firstNumber
    }
    else if (operation === '×') {
        let sum = Number(firstNumber) * Number(secondNumber)
        sum = sum.toString()
        firstNumber = `${sum}`
        secondNumber = ''
        //operation = ''
        //display_operation.textContent = operation
        display_bottom.textContent = secondNumber
        display_top.textContent = firstNumber
    }
    else if (operation === '÷') {
        let sum = Number(firstNumber) / Number(secondNumber)
        sum = sum.toString()
        firstNumber = `${sum}`
        secondNumber = ''
        //operation = ''
        //display_operation.textContent = operation
        display_bottom.textContent = secondNumber
        display_top.textContent = firstNumber
    }
    
}

number_buttons.forEach(number => {
    number.addEventListener('click', element => {
        upgradeNumber(element.target.textContent)
    })
})

operation_buttons.forEach(operationer => {
    operationer.addEventListener('click', element => {
        operation = element.target.textContent
        display_operation.textContent = operation
        operation_bool = true
        if (secondNumber !== '') {
            calculate()
        } 

    })
})

equal_button.addEventListener('click', () => {
    display_operation.textContent = ''
    operation_bool = false
    calculate()
})

