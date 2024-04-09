
function talk(){
    var know = {
        "Hello" : "Hi there",
        "Who are you" : "My name is Fanele",
        "How are you" : "I am good :- ",
        "What can i do for you" : "Give us a follow and likes! ",
        "Your followers?" : "I have 1000 likes no followers yet!",

        "Bye" : "Okey we will meet soon, was nice chatting with you",

    }
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";


    if(user in know){

        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }
    else{
        document.getElementById('chatLog').innerHTML = "Sorry I didn't understand <br>";
    }
}