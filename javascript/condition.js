
var mark = 85;
let pass = 50;
const fail = 49;
const abs = 0;
const ave = 50;
const exp =70;
const dist= 80;




if(mark>=dist)
{
    console.log("distinction");
}
else if(mark>=exp && mark<dist)
{
    console.log("exemition")
}
else if(mark>=ave && mark<exp)
{
    console.log("average")
}
else if(mark>abs && mark<=fail){
    console.log("fail")
}
else{
    console.log("absent")
}