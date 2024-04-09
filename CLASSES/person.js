class person{

    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    addAddress(address){
        this.address =address;
    }
    getDetails(){
        console.log(`The name of the person id: ${this.name};
        residing at ${this.address}`)

    }
}
let person1 = new person('Bob',10);
person1.addAddress('Limpompo');


//Abstraction
person1.getDetails()