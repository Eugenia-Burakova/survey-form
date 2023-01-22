let email = document.querySelector("#email");
let confirm = document.querySelector("#submit");

confirm.addEventListener("click", () => {
    if (email.value) {
        let emailText = email.value;
        let emailPattern = /^[a-z0-9_.]{5,15}[@][a-z]{2,}[.][a-z]{2,}$/;
        let emailCheck = emailPattern.test(emailText);

        if (emailCheck == true) {
            alert("success");
        } else (emailCheck == false) {
            alert("incorrect email");
        }
    
    } else {
        alert("Enter email");
    } 
})