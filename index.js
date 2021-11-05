'use strict'


const littlePics = document.querySelectorAll('.littlePics');
let bigPic = document.getElementById('bigPic');
for (let i = 0; i < littlePics.length; i++) {
    littlePics[i].addEventListener('mouseenter', () => {
        littlePics[i].style.opacity = '0.3';
        littlePics[i].style.border = '3px solid rgba(255, 0, 0, 1)';
        bigPic.setAttribute('src', `./images/image-product-${i + 1}.jpg`)
    })
    littlePics[i].addEventListener('mouseleave', () => {
        littlePics[i].style.opacity = '1';
        littlePics[i].style.border = '0px solid hsl(26, 100%, 55%)';

    })

}
  let numberItem = document.getElementById('compteur')
 let numberItemCart = document.getElementById('compteur2')
let button2 = document.getElementById('buttons2')


button2.addEventListener('click' , (()=>{

    numberItemCart.style.visibility = 'visible'
}))



    let i = 0;
numberItem.innerText = i.toString()
numberItemCart.innerText = i.toString()
document.getElementById("plusButton").addEventListener("click", function () {
    i++
    if(i>0){
        numberItemCart.style.backgroundColor = 'green'
    }
    numberItem.innerText = i.toString()
    numberItemCart.innerText = i.toString()
    console.log(i)
   document.getElementById('buttons1').style.backgroundColor = 'rgba(128, 128, 128, 0.05)'
});
document.getElementById("minusButton").addEventListener("click", function () {
    if(i>0){
        i--
    }
     if(i<1){
        numberItemCart.style.backgroundColor = 'red'
    }
     numberItemCart.innerText = i.toString()

    numberItem.innerText = i.toString()
    console.log(i)
    document.getElementById('buttons1').style.backgroundColor = 'rgba(128, 128, 128, 0.05)'
});

