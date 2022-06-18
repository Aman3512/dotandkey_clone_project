
    let form=document.querySelector("form")
    let userData=JSON.parse(localStorage.getItem("userData")) || [];
    form.addEventListener("submit",function(event){
        event.preventDefault();
        let data={
            name:form.name1.value,
            name:form.name2.value,
            email:form.email.value,
            password:form.password.value,
        }
        if(checkEmails(data.email)===true){
            userData.push(data);
            localStorage.setItem("userData",JSON.stringify(userData))
        }else{
            alert("Account Already Exist");
            window.location.href="signin.html";
        }
       
    })

    function checkEmails(email){
            let filtered=userData.filter(function(element){
                return email===element.email
            })
            if(filtered.length>0){
                return false;
            }else{
                return true;
            }
        }

        document.querySelector("#linkLogin").addEventListener("click",createAccount)
    function createAccount(){
        window.location.href="signin.html"
    }

    document.querySelector("#facebook").addEventListener("click",facebook)
    function facebook(){
        window.location.href="https://www.facebook.com/dotandkey/"
    }

    document.querySelector("#google").addEventListener("click",google)
    function google(){
        window.location.href="https://accounts.google.com/ServiceLogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
    }

    document.querySelector('#logo').addEventListener("click",function(){
        window.location.href="index.html";
      })
      
      document.querySelector('#location_aman').addEventListener("click",function(){
        window.location.href="location.html";
      })
      
      document.querySelector('#profile_aman').addEventListener("click",function(){
        window.location.href="signin.html";
      })
      
      