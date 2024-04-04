
//Lets create a programe that calculate positive numbers only
//if user enters a negative that number should be skipped
let prompt = require('prompt-sync')();

//negative number -->loop must terminates
//no numerical characters --> skip iteration

let sum = 0;
let num = 0;
while(num>=0){
    sum += num;

    //accept input from user
    num= perseInt(prompt('Enter a number: '));

    //continue condition NaN = Not an Number;
    if(isNaN(num)){
        console.log('You entered a string that is not a number');
        num=0;
        continue;
    }
}
    //display result
    console.log(sum)