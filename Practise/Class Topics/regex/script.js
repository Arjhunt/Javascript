function validation(){
    let text= document.getElementById("inp").value 
    let regex=/^[6-9]\d{9}$/

    if(regex.test(text)){
        document.getElementById("inp1").innerHTML= "Valid";
        document.getElementById("inp1").style.visibility= "Visible"
        document.getElementById("inp1").style.color= "green"
    }

    else{
        document.getElementById("inp1").innerHTML= "InValid";
        document.getElementById("inp1").style.validation= "Visible"
        document.getElementById("inp1").style.color= "Red"
    }
}