const container: HTMLDivElement = document.createElement('div')
container.className = 'container'

const containerInput: HTMLDivElement = document.createElement('div')
containerInput.className = 'containerInput'

const containerButton: HTMLDivElement = document.createElement('div')
containerButton.className = 'containerButton'

const inputRight: HTMLInputElement = document.createElement('input')
inputRight.type = 'number'

const inputLeft: HTMLInputElement = document.createElement('input')
inputLeft.type = 'number'

const buttonPlus: HTMLButtonElement = document.createElement('button')
buttonPlus.innerText = '+'

const buttonMinus: HTMLButtonElement = document.createElement('button')
buttonMinus.innerText = '–'

const buttonMultiply: HTMLButtonElement = document.createElement('button')
buttonMultiply.innerText = '×'

const buttonDivide: HTMLButtonElement = document.createElement('button')
buttonDivide.innerText = '÷'

const restart: HTMLButtonElement = document.createElement('button')
restart.innerText = 'restart'
restart.className = 'restart'

const h1: HTMLHeadingElement = document.createElement('h1')
h1.className = 'h1'

const calculatorPlusHandler = (symbol: string) => {
  const rightValue: number = +inputRight.value
  const leftValue: number = +inputLeft.value

  if (symbol === '+') {
    const sum: number = rightValue + leftValue
    h1.innerText = `result: ${sum}`
  } else if (symbol === '-') {
    const sum: number = rightValue - leftValue
    h1.innerText = `result: ${sum}`
  } else if (symbol === '*') {
    const sum: number = rightValue * leftValue
    h1.innerText = `result: ${sum}`
  } else if (symbol === '/') {
    const sum: number = rightValue / leftValue
    h1.innerText = `result: ${sum}`
  }

  inputRight.value = ''
  inputLeft.value = ''
}

const restartHandler = () => {
  h1.innerText = ''
}

buttonPlus.addEventListener('click', () => calculatorPlusHandler('+'))
buttonMinus.addEventListener('click', () => calculatorPlusHandler('-'))
buttonMultiply.addEventListener('click', () => calculatorPlusHandler('*'))
buttonDivide.addEventListener('click', () => calculatorPlusHandler('/'))

restart.addEventListener('click', restartHandler)

containerButton.append(
  buttonPlus,
  buttonMinus,
  buttonMultiply,
  buttonDivide,
  restart
)

containerInput.append(inputRight, inputLeft)

container.append(containerInput, containerButton)

document.body.append(container, h1)
