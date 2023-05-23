let slider=document.querySelector(".carousel-inner")
let right=document.querySelector(".carousel-control-next")
let left=document.querySelector(".carousel-control-prev")

const rightFunction=()=>{
    let active=document.querySelector(".active")
    if(active.nextElementSibling !== null){
        active.nextElementSibling.classList.add("active");
        active.classList.remove("active");
    }else{
        slider.firstElementChild.firstElementChild.classList.add("active")
        active.classList.remove("active");
    }
}
const leftFunction=()=>{
    let active=document.querySelector(".active")
    if(active.previousElementSibling !== null){
        active.previousElementSibling.classList.add("active");
        active.classList.remove("active");
    }else{
        slider.firstElementChild.lastElementChild.classList.add("active")
        active.classList.remove("active");
    } 
}
right.addEventListener("click" , rightFunction);
left.addEventListener("click" , leftFunction);
document.body.addEventListener("keyup",(e)=>{
    if(e.which==39){
        rightFunction();
    }
    if(e.which==37){
        leftFunction();
    }
})