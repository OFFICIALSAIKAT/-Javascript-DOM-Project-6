function validate(){
    var email = document.getElementById('email').value;
    var number= document.getElementById("number").value;
    var password = document.getElementById("password").value;

    var emailmsg = document.getElementById("emailmsg");
    var numbermsg = document.getElementById("numbermsg");
    var passwordmsg =document.getElementById("passwordmsg");

    var emailcheck = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})(.[a-z]{2,8})?$/;
    var numbercheck = /^([0-9]{10})$/;
    var passwordcheck =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;


    if (emailcheck.test(email)){
        emailmsg.innerHTML = "";
       }else{
        emailmsg.innerHTML = "Enter a valid email!";
        return false;
    
    }

    if (numbercheck.test(number)){
        numbermsg.innerHTML = "";
      
    }else{
      
        numbermsg.innerHTML = "Enter a valid number!";
        return false;
    
    }

    if (passwordcheck.test(password)){
        passwordmsg.innerHTML = "";
      
    }else{
      
        passwordmsg.innerHTML = "Enter a valid password!";
        return false;
    
    }

    if(emailcheck.test(email)&&numbercheck.test(number)&&passwordcheck.test(password)){
        panel.innerHTML = "Email Verified and Submitted!"
    }
    else{
        panel.innerHTML= ""
    }


   
   
}