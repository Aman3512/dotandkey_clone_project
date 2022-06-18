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
        alert("Thank You "+x);


    }
    function subscribe1(){
        let y=document.getElementById("inpdesk").value;
        alert("Thank You "+y);


    }


   