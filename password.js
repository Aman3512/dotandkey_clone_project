

    document.querySelector("#submit").addEventListener("click",linksent)
    function linksent(event){
event.preventDefault()
        document.getElementById("message").innerText="We've sent you an email with a link to update your password."
        document.getElementById("message").style.color="green"
    }
    document.querySelector("#cancel").addEventListener("click",cancel)
    function cancel(){
        window.location.href="signin.html"
    }
