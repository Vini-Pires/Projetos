const increaseBtn$ = document.querySelector('[data-aum]')
const decreaseBtn$ = document.querySelector('[data-dim]')
const resetBtn$ = document.querySelector('[data-zero]')

const visor$ = document.querySelector('[data-visor]')

let cont = 0
visor$.textContent = cont

resetBtn$.addEventListener('click', () => {
  visor$.textContent = cont = 0
})

increaseBtn$.addEventListener('click', () => {
  visor$.textContent = ++cont
})

decreaseBtn$.addEventListener('click', () => {
  if(visor$.textContent != 0){
    visor$.textContent = --cont
  }
})