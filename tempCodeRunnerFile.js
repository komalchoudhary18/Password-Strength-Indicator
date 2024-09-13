const inputField=document.getElementById("password")
const outputField=document.getElementById("output")

inputField.addEventListener('input',() =>{
    const password=inputField.value;
    if(password.length<8){
        outputField.innerText="Password is too short";
        outputField.style.color='red';
    }
    else{

        if(password.search(/[A-Z]/)==-1)
        {
            outputField.innerText="Password is missing  a uppercase letter";
            outputField.style.color='red';
        }
        else if(password.search(/[a-z]/)==-1)
                {
                    outputField.innerText="Password is missing  a lowercase letter";               outputField.style.color='red';
}
  else if(password.search(/[0-9]/)==-1){
    outputField.innerText="Password is missing  a numeric letter";
    outputField.style.color='red';
                }
        else if(password.search(/[!\@\#\$\%\^\&\*\(\)?\<]/)==-1){
            outputField.innerText="Password is missing  a symbol";
            outputField.style.color='red';
        }
        else{
            outputField.innerText="password is strong";
            outputField.style.color='green';
        }

    }

});


