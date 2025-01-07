
let paragrafi = document.querySelectorAll('p')
let cambiaColore = document.querySelector('#cambiaColore')
let rendiGrassetto = document.querySelector('#rendiGrassetto')
let nascondiMostra = document.querySelector('#nascondiMostra')


cambiaColore.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo => {
      let r = Math.floor(Math.random()* 256)
      let g = Math.floor(Math.random()* 256)
      let b = Math.floor(Math.random()* 256)
      paragrafo.style.color = `rgb(${r}, ${g}, ${b})`
    })
});

rendiGrassetto.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo =>{
        paragrafo.style.fontWeight = `bold`
    })
});

nascondiMostra.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo =>{
       if(paragrafo.style.display == `block`){
        paragrafo.style.display = `none`
       } else{
        paragrafo.style.display = `block`
       }
    })
})



