
let userName = "Alice";
let massage = "Welcome "
from = ""
text = ""

function sendMsg(){

    let massage = "Welcome " + userName;
    console.log(massage)
}
sendMsg();

function showMessage(){
    userName = "Bob"
    console.log(massage,userName)
}
showMessage();
console.log(massage,userName)

function sendMsg(from,text){
    from = "anonymous "
    text ="Welcome to my online learnership , send 500"
    return from + text
}
console.log(sendMsg(text,from))