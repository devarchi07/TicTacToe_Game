let tur=document.querySelector("#turn")
let but=document.querySelector(".btn")
let paly1=document.querySelector(".play1")
let val=""
let turn=document.querySelector(".play1")
let winner=document.querySelector(".winner")
let win=document.querySelector("#win")
but.addEventListener("click",()=>{
    location.reload()
})
const change=()=>{
    if(tur.innerHTML==='X')
    {
        val="O"
        tur.innerHTML=val
    }
    else{
        val="X"
        tur.innerHTML=val
    }
}
// let boxes=document.querySelectorAll(".boxcont")
// console.log(boxes)
// let arr=Array.from(boxes)
// console.log(arr)
// arr.forEach((Element,index)=>{
//     console.log(Element)
//     let boxtxt=Element.querySelector(".boxtxt")
//     console.log(boxtxt)
//     if(boxtxt.innerHTML===""){
//         boxtxt.innerHTML=val
//         change()

//     }
    
// })
// Array.from(boxes).forEach(Element=>{
//     let boxtxt=Element.querySelector(".boxtxt")
//     Element.addEventListener("click",()=>{
//         if(boxtxt.innerHTML===" "){
//             boxtxt.innerHTML=val
//             change()
//         }
//     })
// })
const checkwin=()=>{
    let box=document.getElementsByClassName("boxcont")
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],

    ]
    wins.forEach(e=>{
        if((box[e[0]].innerText===box[e[1]].innerText)&&(box[e[1]].innerText===box[e[2]].innerText))
        {
            if(box[e[0]].innerText!== "")
            {
                box[e[0]].style.setProperty("text-decoration","line-through")
                box[e[1]].style.setProperty("text-decoration","line-through")
                box[e[2]].style.setProperty("text-decoration","line-through")
                turn.style.setProperty("display","none")
                win.innerHTML=box[e[0]].innerHTML
                winner.style.setProperty("visibility","visible")
        }}
    })
}

let boxes=document.querySelectorAll(".boxcont")
console.log(boxes)
let arr=Array.from(boxes)
console.log(arr)
arr.forEach((Element)=>{
    console.log(Element)
    let boxtxt=Element.querySelector(".boxtxt")
    if(boxtxt.innerHTML==='')
       {
    Element.addEventListener('click',()=>{
    //    if(Element.innerHTML===' ')
    //    {
        Element.innerHTML=val
        checkwin()
        change()
       
       })}
})

