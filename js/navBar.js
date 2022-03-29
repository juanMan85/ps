// menu circular
const boton = document.querySelector(".menu__btn")
const menu = document.querySelector(".menu__ul")

let flag = true;

boton.addEventListener("click", ()=>{
    if(flag){
        menu.classList.add("reducir");
        boton.classList.add("rotar")
        flag = false;
    }
    else{
        menu.classList.remove("reducir");
        boton.classList.remove("rotar")
        flag = true;
    }
})


// menu iconos
const boton2 = document.querySelector(".menu__btn2")
const btnInner = document.querySelector(".menu__btn-inner2")
const menu2 = document.querySelector(".menu__ul2")
let flag2 = true;


boton2.addEventListener("click", ()=>{
    if(flag2){
        btnInner.classList.add("animarBtn")
        flag2=false
        console.log("se quito navBar")
        menu2.classList.add("slideMenu")
    }
    else{
        btnInner.classList.remove("animarBtn")
        flag2=true;
        console.log("se agrego navBar")
        menu2.classList.remove("slideMenu")
    }
})

