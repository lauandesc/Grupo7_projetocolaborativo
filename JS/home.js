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
let playli = document.getElementById('playli')
console.log(playli, myAudio)


playli.addEventListener('mouseover', ()=>{
    myAudio.play()
})
