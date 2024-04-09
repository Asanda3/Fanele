
class person{
    constructor(fname){
        this.fname = fname;

    }
    toString(){
        return(`Name of this person : ${this.fname}`)
    }
}
class student extends person{
    constructor(fname,id){
    super(fname);
    this.id = id;
    }
    toString(){
        return(`Name of learner is: ${super.toString()} 
        with Student ID: ${this.id} `);
    }

 } //end pf inherited class

 let student1 = new student("Alice","345628")
 console.log(student1);
 console.log(student1.toString())

