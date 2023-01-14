let isCarMoving=true


function random(){
return Math.floor(Math.random()*6)+1
}

function changeCar(){
    let car =document.getElementById("carImg")
    car.setAttribute("src",`./assets/car${random()}.png`)
}


function changeCarMove(){
let car =document.querySelector(".car")
let surface=document.querySelector(".surface")
let button=document.querySelector("#ChangeMove")

if(isCarMoving){
    car.style.animation="none"
surface.style.animation="none"
button.innerText="Start"

isCarMoving=false

}else{
    car.style.animation="suspension 1s linear infinite"
    surface.style.animation="MoveRight 8s linear infinite"
    isCarMoving=true
    button.innerText="Stop"
}
}