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
        let body_img = document.querySelector("#master-body")
        body_img.style.opacity = 0.5
      
    }else{
         document.querySelector("#menu").src = "https://static.thenounproject.com/png/3025230-200.png"
        submenuBar.style.visibility = "hidden"
        let Body = document.querySelector("body")
        let body_img = document.querySelector("#master-body")
        body_img.style.opacity = 1
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
   
    // SUNIL-JS-START
    let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    // SUNIL-JS-END


    // aman-js-for slider-1
    let i = 0;
let images = document.getElementsByClassName("images");
let img = document.createElement("img");
let arr2 = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4E-Ingredient_9f9c8a93-1d51-499f-bb3f-c285b0c6345a.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4F-Ingredient_73eaecaf-da67-4a0a-8884-ab3215f5d1ce.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4D-Ingredient_2c86db10-ce47-4ff7-9792-2ebf0192e29e.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4C-Ingredient_142737df-d244-4493-baaa-5395de309f36.jpg?v=1655367539",
];
function next() {
  let temp1 = arr2[3];
  for (let i = arr2.length - 1; i >= 0; i--) {
    if (i == 0) arr2[0] = temp1;
    else arr2[i] = arr2[i - 1];
  }
  images[0].src = arr2[0];
  images[1].src = arr2[1];
  images[2].src = arr2[2];
  images[3].src = arr2[3];
}
function prev() {
     let temp = arr2[3];
  for (let i = arr2.length - 1; i >= 0; i--) {
    if (i == 0) arr2[0] = temp;
    else arr2[i] = arr2[i - 1];
  }
  images[0].src = arr2[0];
  images[1].src = arr2[1];
  images[2].src = arr2[2];
  images[3].src = arr2[3];
}

// js slider-2
    let i1 = 0;
let images1 = document.getElementsByClassName("images1");
let img1 = document.createElement("img");
let arr3 = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/serum.jpg?v=1652438356",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/glow_3.jpg?v=1652438348",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/moist.jpg?v=1652438356",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/acne_3_7d4b5389-228e-42ce-9008-0454cff9e3d2.jpg?v=1652438447",
];
function next1() {
  let temp = arr3[3];
  for (let i1 = arr3.length - 1; i1 >= 0; i1--) {
    if (i1 == 0) arr3[0] = temp;
    else arr3[i1] = arr3[i1 - 1];
  }
  images1[0].src = arr3[0];
  images1[1].src = arr3[1];
  images1[2].src = arr3[2];
  images1[3].src = arr3[3];
}
function prev1() {
     let temp = arr3[3];
  for (let i1 = arr3.length - 1; i1 >= 0; i1--) {
    if (i1 == 0) arr3[0] = temp;
    else arr3[i1] = arr3[i1 - 1];
  }
  images1[0].src = arr3[0];
  images1[1].src = arr3[1];
  images1[2].src = arr3[2];
  images1[3].src = arr3[3];
}

// footer-js
let coll= document.querySelectorAll(".conbx");
     
    for(let i=0;i<coll.length;i++)
    {
        coll[i].addEventListener("click",function(){
            this.classList.toggle('active');
        })
    }
  //  document.queryCommandValue("#emailbtnnn").addEventListener("click",subscribe());
    function subscribe(){
        let x=document.getElementById("inpmob").value;
        alert("Thank You for your Response"+x);


    }
    function subscribe1(){
        let y=document.getElementById("inpdesk").value;
        alert("Thank You for your Response"+y);


    }