

function person(fname,lname){
    let firstname = fname;
    let lastname = lname;

    //let declaration, convert method to be private
    let getDetails_noAccess = function(){
        return(`First name is: ${firstname} and last name is: ${lastname}`)

    }
    this.getDetails_Access = function(){}
    return(`First name is: ${firstname} and last name is: ${lastname}`)

} //End of function

let person1 = new person("Alice","Mazibuko")
console.log(person1.firstname);
console.log(person1.getDetails_noAccess());
console.log(person1.getDetails_Access());
