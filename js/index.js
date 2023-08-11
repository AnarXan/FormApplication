let passInput = document.getElementById("passinput")
let passIcon = document.getElementById("passicon")
function ac(){
    if(passInput.type === "password"){
        passInput.type = "text"
        passIcon.name = "eye-outline"
        passIcon.style.color = "red"
        passIcon.style.transitionDuration = "0.5s"
        passIcon.style.fontSize = "1.5em"
    }else{
        passInput.type = "password"
        passIcon.name = "eye-off-outline"
        passIcon.style.color = "#999999"
        passIcon.style.transitionDuration = "0.5s"
        passIcon.style.fontSize = "1.2em"
    }
}

