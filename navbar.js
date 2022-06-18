let menu = document.querySelector("#menu").addEventListener("click",submenu)

let count = 0;
function submenu(){
    count++
    document.querySelector("#menu").src = "https://static.thenounproject.com/png/1707162-200.png"
    localStorage.setItem("counter",count)
    let counter = localStorage.getItem("counter")
    let submenuBar = document.querySelector("#container")

    if(counter%2===1&&counter!==0){
        submenuBar.style.visibility = "visible"
        let Body = document.querySelector("body")
        Body.style.backgroundColor = "rgba(0,0,0,0.6)"
    }else{
         document.querySelector("#menu").src = "https://static.thenounproject.com/png/3025230-200.png"
        submenuBar.style.visibility = "hidden"
        let Body = document.querySelector("body")
        Body.style.backgroundColor = "transparent"
    }


    // java script for the sub menu bar
    let plus = document.querySelector("#first")
    plus.addEventListener("click",Plus)
    let countPlus = 0;
    function Plus(){
        countPlus++
        let subBar = document.querySelector("#page ul")
    if(countPlus%2===1 && countPlus !==0){
        subBar.style.position = "relative"
        subBar.style.visibility= "visible"
        subBar.style.transition = "12s"
        document.querySelector("#first").removeAttribute("class")
        plus.setAttribute("class","fa-solid fa-minus")
    }else{
        subBar.style.position = "absolute"
        subBar.style.visibility= "hidden"
        subBar.style.transition = "0s"
       document.querySelector("#first").removeAttribute("class")
        plus.setAttribute("class","fa-solid fa-plus")


    }
    }
    // for second plus
     let plus2 = document.querySelector("#second")
    plus2.addEventListener("click",Plus2)
    let countPlus2 = 0;
    function Plus2(){
        countPlus2++
        let subBar2 = document.querySelector("#second-sub-menu")
    if(countPlus2%2===1 && countPlus2 !==0){
        subBar2.style.position = "relative"
        subBar2.style.visibility= "visible"
        subBar2.style.transition = "12s"
        document.querySelector("#second").removeAttribute("class")
        plus2.setAttribute("class","fa-solid fa-minus")
    }else{
        subBar2.style.position = "absolute"
        subBar2.style.visibility= "hidden"
        subBar2.style.transition = "0s"
        document.querySelector("#second").removeAttribute("class")
        plus2.setAttribute("class","fa-solid fa-plus")

    }
    }
    // for third plus
     let plus3 = document.querySelector("#three")
    plus3.addEventListener("click",Plus3)
    let countPlus3 = 0;
    function Plus3(){
        countPlus3++
        let subBar3 = document.querySelector("#three-sub-menu")
    if(countPlus3%2===1 && countPlus3 !==0){
        subBar3.style.position = "relative"
        subBar3.style.visibility= "visible"
        subBar3.style.transition = "12s"
        document.querySelector("#three").removeAttribute("class")
        plus3.setAttribute("class","fa-solid fa-minus")
    }else{
        subBar3.style.position = "absolute"
        subBar3.style.visibility= "hidden"
        subBar3.style.transition = "0s"
        document.querySelector("#three").removeAttribute("class")
        plus3.setAttribute("class","fa-solid fa-plus")

    }
    }

// for forth plush
   let plus4 = document.querySelector("#four")
    plus4.addEventListener("click",Plus4)
    let countPlus4 = 0;
    function Plus4(){
        countPlus4++
        let subBar4 = document.querySelector("#four-sub-menu")
    if(countPlus4%2===1 && countPlus4 !==0){
        subBar4.style.position = "relative"
        subBar4.style.visibility= "visible"
        subBar4.style.transition = "12s"
        document.querySelector("#four").removeAttribute("class")
        plus4.setAttribute("class","fa-solid fa-minus")
    }else{
        subBar4.style.position = "absolute"
        subBar4.style.visibility= "hidden"
        subBar4.style.transition = "0s"
        document.querySelector("#four").removeAttribute("class")
        plus4.setAttribute("class","fa-solid fa-plus")

    }
    }
    // for five plus
       let plus5 = document.querySelector("#five")
    plus5.addEventListener("click",Plus5)
    let countPlus5 = 0;
    function Plus5(){
        countPlus5++
        let subBar5 = document.querySelector("#five-sub-menu")
    if(countPlus5%2===1 && countPlus5 !==0){
        subBar5.style.position = "relative"
        subBar5.style.visibility= "visible"
        subBar5.style.transition = "12s"
        document.querySelector("#five").removeAttribute("class")
        plus5.setAttribute("class","fa-solid fa-minus")
    }else{
        subBar5.style.position = "absolute"
        subBar5.style.visibility= "hidden"
        subBar5.style.transition = "0s"
        document.querySelector("#five").removeAttribute("class")
        plus5.setAttribute("class","fa-solid fa-plus")

    }
    }
}
 // for serach bar 
    let search1 = document.querySelector("#Search-logo").addEventListener("click",jkjkjk)
    function jkjkjk(){
        let searchbar = document.querySelector("#searchbar")
        document.querySelector("#Search-logo").style.visibility = "hidden"
        searchbar.style.visibility = "visible"
        searchbar.style.transition = "0s"
    }

    let cross   = document.querySelector("#cross").addEventListener("click",crossfun)
    function crossfun(){
        let searchbar = document.querySelector("#searchbar")
        document.querySelector("#Search-logo").style.visibility = "visible"
        searchbar.style.visibility = "hidden"
        searchbar.style.transition = "0s"
    }


    // cart redirect
        document.querySelector("#BagImage").addEventListener("click",function(){
            console.log("true")
        window.location.href = "cart.html";
    })
   

