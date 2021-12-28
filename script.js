// Selecionar os Elementos
var toggleModes
var bigWrapper
var hamburgerMenu
var overlay

function declare() {
  toggleModes = document.querySelector('.toggleModes')
  bigWrapper = document.querySelector('.bigWrapper')
  hamburgerMenu = document.querySelector('.hamburgerMenu')
  overlay = document.querySelector('.overlay')
}
declare()

const main = document.querySelector('main')

let dark = false

function toggleAnimation() {
  //Clonagem do Big Wrapper
  dark = !dark
  console.log(dark)

  let clone = bigWrapper.cloneNode(true) //false(padrão): clona somente o node (o elemento HTML) e seus atributos; true: clona o node, seus atributos e seus descendentes. '
  if (dark) {
    clone.classList.remove('light')
    clone.classList.add('dark')
  } else {
    clone.classList.remove('dark')
    clone.classList.add('light')
  }
  clone.classList.add('copy')
  main.appendChild(clone)

  document.body.classList.add('stopScrolling')

  clone.addEventListener('animationend', () => {
    document.body.classList.remove('stopScrolling')
    bigWrapper.remove()
    clone.classList.remove('copy')
    //Resetar as Variáveis (toggleModes e bigWrapper)
    declare()
    //Resetar a Função (events)
    events()
  })
}

function events() {
  toggleModes.addEventListener('click', toggleAnimation)
  hamburgerMenu.addEventListener('click', () => {
    bigWrapper.classList.toggle('menuActive')
    document.body.classList.toggle('stopScrolling')
  })
  overlay.addEventListener('click', () => {
    document.body.classList.remove('stopScrolling')
    bigWrapper.classList.remove('menuActive')
  })
}
events()
