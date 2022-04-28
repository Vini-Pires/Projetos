const btn = document.querySelector('[data-btn]')
const html = document.querySelector('[data-switch]')

btn.addEventListener('click', ()=>{
  btn.classList.toggle('button-move')

  html.toggleAttribute('dark-mode')
})