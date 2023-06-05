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
let erase_button = document.querySelector('.item_clean')
let clean_button_all = document.querySelector('.item_clean_all')


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

clean_button_all.addEventListener('click', () => cleanAll())
erase_button.addEventListener('click', () => erase())



function upgradeNumber(number) {
    if (!operation_bool) {
        let arr = Array.from(firstNumber)
        if (number === '.' && firstNumber.includes('.')) return
        arr.push(number)
        firstNumber = arr.join("")
        display_top.textContent = firstNumber
    }
    else {
        let arr2 = Array.from(secondNumber)
        if (number === '.' && secondNumber.includes('.')) return
        arr2.push(number)
        secondNumber = arr2.join("")
        display_bottom.textContent = secondNumber
    }
}


function calculate() {
    if (operation === '+') {
        let sum = Number(firstNumber) + Number(secondNumber)
        sum = sum.toString()
        firstNumber = `${Math.round(sum * 10) / 10}`
        secondNumber = ''
        display_bottom.textContent = secondNumber
        display_top.textContent = firstNumber
    }
    else if (operation === '-') {
        let sum = Number(firstNumber) - Number(secondNumber)
        sum = sum.toString()
        firstNumber = `${Math.round(sum * 10) / 10}`
        secondNumber = ''
        display_bottom.textContent = secondNumber
        display_top.textContent = firstNumber
    }
    else if (operation === '×') {
        let sum = Number(firstNumber) * Number(secondNumber)
        sum = sum.toString()
        firstNumber = `${Math.round(sum * 10) / 10}`
        secondNumber = ''
        display_bottom.textContent = secondNumber
        display_top.textContent = firstNumber
    }
    else if (operation === '÷') {
        let sum = Number(firstNumber) / Number(secondNumber)
        sum = sum.toString()
        firstNumber = `${Math.round(sum * 10) / 10}`
        secondNumber = ''
        display_bottom.textContent = secondNumber
        display_top.textContent = firstNumber
    }
    
}


function cleanAll() {
    firstNumber = ''
    secondNumber = ''
    operation = ''
    operation_bool = false
    display_top.textContent = '0'
    display_bottom.textContent = ''
    display_operation.textContent = ''
}

function erase() {
    if (!operation_bool) {
        let arr = Array.from(firstNumber)
        arr.pop()
        firstNumber = arr.join("")
        if (firstNumber === '') {
            display_top.textContent = '0'
        }
        else {
            display_top.textContent = firstNumber
        }
        
    }
    else {
        let arr2 = Array.from(secondNumber)
        arr2.pop()
        secondNumber = arr2.join("")
        display_bottom.textContent = secondNumber
    }
}

