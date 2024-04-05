

let prompt =require('prompt-sync')();
//program the checks if the user is old enough to access site

function checkAge(age){

    if(age>=18){
        return true;
    }
    else{
        return console.log("Are you allowed to access the site?");
    }
}
    let age = prompt("How old are you? ")
    if(checkAge(age)){
        console.log("Access is granted")
        showMovie();
    }
    else{
        console.log("Access is deniad")
    }

    function showMovie(){
        
        let d = 100;
        let i = 0;
        for(i = 100000; i>d; i--){
            console.log("Access is granted ");
            console.log("Playing a movie  " , i);
        }
        }

    
