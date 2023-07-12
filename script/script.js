//! ROTACION 

let obj = document.getElementById("obj");
let word = document.getElementById("especial");
let wallpaper = document.getElementById("wallpaper");
let ar_1 = document.getElementById("ar-1");
let ar_2 = document.getElementById("ar-2");


// let test = word.style.color = "transparent";


window.addEventListener("scroll", function(){
    let value = window.scrollY;


    // obj.style.transform = "rotate(" + (value * 0.111) + "deg)";
    // obj.style.top = value * .7 + 'px';
    // obj.style.top = value * 0.9 + "px";
    // obj.style.width = value * 1.2 + "px";
    // obj.style.height = value * 1.3 + "px";
    // word.style.top = value * .7 + 'px';
    

    word.style.top = value * 0.2 + "px";
    word.style.marginTop = value * 0.34 + "px";
    // word.style.color = "transparent";
    obj.style.top = value * 0.5 + "px";
    obj.style.marginTop = value * 0.65 + "px";
    obj.style.transform = "rotate(" + (value * 0.2705) + "deg)";
})



//! GENERADOR DE CONTRASEÑAS

let abc = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890!#$%&/()=?¿¡";

function generator (){
    let length = parseInt(large.value); 
    let result = "";
    for(let i = 0; i <= length; i++){
        result += abc.charAt(Math.floor(Math.random() * abc.length));
    }
    password.value = result;
}

