const btn = document.querySelector('[data-troca]')
const div = document.querySelector('.quadrado')

const cores = ['vermelho', 'verde', 'azul', 'rosa']

btn.addEventListener('click', (evento)=> {
  evento.preventDefault();

  cores.forEach(element => {
    if(div.classList.contains(element)){
      const cor = element
      div.classList.remove(cor);
    } 

  });
  
  const elemento = cores[Math.floor(Math.random() * cores.length)]

  div.classList.add(`${elemento}`)
})
