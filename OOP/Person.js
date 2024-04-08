
const Person ={

    //data properties
    firstName : 'Alice',

    get getName(){
        return this.firstName;
    }

    set changeName(newName){
        this.firstName = newName;
    }

}
console.log(Person)
console.log(Person.firstName)
console.log(Person.getName)
personalbar.chanceName ="Alison";
console.log(Person.firstName);