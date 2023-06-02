let arrayli = [
    'Artes',
    'Auto ajuda',
    'Biografias',
    'Política',
    'Científicos ou de não-ficçao',
    'Comunicação',
    'Direito',
    'História do Brasil',
    'Historia em quadrinho',
    'Literatura Estrangeira',
    'Infanto-Juvenis',
    'Medicina',
    'Mangá',
    'Psicologia',
    'Religião',
    ]

// Função transição slide
let radio = document.querySelector('.manual-btn')
let cont = 1
document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 2000)

function proximaImg(){
    cont++
    if(cont > 4){
        cont = 1
    }

    document.getElementById('radio' +cont).checked = true

}

    // Função adicionar li no DOM
    for (i= 0; i < arrayli.length; i++){   
        let elementoul = document.getElementById('playul')
        let elementoli = document.createElement('li')
        elementoli.classList.add('playli')
        elementoli.innerHTML = `
        <a href="#">${arrayli[i]}</a>
        `
        elementoul.appendChild(elementoli)
     }

// Função tocar audio sobre li
let myAudio = document.querySelector('audio')
let playli = document.getElementsByClassName('playli')
console.log(myAudio,  playli)

for (i = 0; i <playli.length; i++){
    playli[i].addEventListener("click", ()=>{
        myAudio.play()
    })}



   
   
   


    
    
    
   
    
   








 