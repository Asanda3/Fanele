let people ={
    gender: 'male',

}
let person =Object(people);

person.name = "Fanele";
person.age = '22';
person.nationality = 'SA';

for(let key in person){
    console.log(key)
}