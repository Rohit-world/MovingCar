function random(){
return Math.floor(Math.random()*5)+1
}

function changeCar(){
    let car =document.getElementById("carImg")
    car.setAttribute("src",`./assets/car${random()}.png`)
}


function changeCarMove(){

}