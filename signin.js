
    let form=document.querySelector("form");
    let userData=JSON.parse(localStorage.getItem("userData")) || [];
    form.addEventListener("submit",function(event){
        event.preventDefault();
        let data={
            email:form.email.value,
            password:form.password.value,
        }
        if(checkSignin(data.email,data.password)===true){
            localStorage.setItem("signin",JSON.stringify(data));
            alert("Sign in Successful");
            window.location.href="index.html";
        }else{
            let message=document.querySelector("#message")
                message.innerText="Incorrect email or password."
            
           
               

        }
    })
    function checkSignin(email,password){
        let filter=userData.filter(function(element){
            return element.email===email && element.password===password;
        })
        if(filter.length>0){
            return true;
        }else{
            return false;
        }
    }

    document.querySelector("#linkCreateAccount").addEventListener("click",createAccount)
    function createAccount(){
        window.location.href="signup.html"
    }
    
    document.querySelector("#passwordRecovery").addEventListener("click",recoveraccount)
    function recoveraccount(){
        window.location.href="password.html"
    }

    document.querySelector("#facebook").addEventListener("click",facebook)
    function facebook(){
        window.location.href="https://www.facebook.com/dotandkey/"
    }

    document.querySelector("#google").addEventListener("click",google)
    function google(){
        window.location.href="https://accounts.google.com/ServiceLogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
    }
