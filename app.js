

function signup(){
    var data = localStorage.getItem('userData');
    var userEmail = document.getElementById('email').value
    var userPassword = document.getElementById('password').value
    var flagUser=false;
    console.log(data);
    var obj ={
        userEmail,
        userPassword
    }

    if(!userEmail === "" || userPassword === ""){
        alert ('data field must be filled');
    }
    if(!userEmail === "" && userPassword === ""){
        alert ('both data field must be filled');
    
    }
    if(!data){
        console.log("Hello Developer jaag jao")
    localStorage.setItem("userData",JSON.stringify([obj]))
    }else{
        
        var usersData = JSON.parse(data);

            for(var i = 0;i<usersData.length;i++){
                if(userEmail == usersData[i].userEmail){
                    alert("Email Address already exist");
                    flagUser=true
                }
            }
            if(!flagUser){
                usersData.push(obj);
                localStorage.setItem("userData",JSON.stringify(usersData))
            }
    }
}

function signIN(){   
         var flagUser=false;
         var data = localStorage.getItem('userData');
         var userEmail = document.getElementById('email').value
         var userPassword = document.getElementById('password').value
         var usersData = JSON.parse(data);
        for(var i = 0;i<usersData.length;i++){
            if(userEmail===usersData[i].userEmail && userPassword===usersData[i].userPassword){
                alert("Email Address are login successfully");
                flagUser=true
            }
        }
        if(!flagUser){
            alert("Please signu up first")
        }

}
