function goodToSubmit(){
    let validEmail = emailValid();
    let validPassword = passwordValid()
    let successMsg = document.getElementById("success");

    
    if(validEmail && validPassword){
        successMsg.style.display = "block";
    } else {
        successMsg.style.display = "none";
    }
  }


function emailValid(){
let email = document.getElementById("email").value;
let error = document.getElementById("error-1");
  if(email.length > 2 && email.includes("@") && email.includes(".")){
    error.style.display = `none`;
    return true
  }else{
    error.style.display = `block`;
    return false;
  }
}
function passwordValid(){
    let password = document.getElementById("password").value;
    let error = document.getElementById("error-2");
    if(password.length > 7){
        error.style.display = `none`;
        return true;
    }else{
        error.style.display = `block`;
        return false;
    }
}

function onSubmit(event){
    event.preventDefault();
 let confirm = window.confirm("Are you sure you want to submit?")
 if(confirm == true){
    alert(`successfull signup`);
 }else{
    location.reload();
 }
}