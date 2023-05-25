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

let myAudio = document.querySelector('audio')
let playli = document.getElementsByClassName('playli')
console.log(myAudio,  playli)

for (i = 0; i <playli.length; i++){
    playli[i].addEventListener("mouseover", ()=>{
        myAudio.play()
    })}

    








// let arrayli = [
//     {li: Biografias},
//     {li: Ciência Política},
//     {li: Científicos ou de não-ficçao},
//     {li: Comunicação},
//     {li: Direito},
//     {li: História do Brasil},
//     {li: Historia em quadrinho},
//     {li: Literatura Estrangeira},
//     {li: Infanto-Juvenis},
//     {li: Medicina},
//     {li: Mangá},
//     {li: Psicologia},
//     {li: Religião},
// ]

    
    
    
   
    
   








 