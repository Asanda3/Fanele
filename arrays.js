
let courses =["JavaScript", "Java" ,"Angular", "React"];
courses.length= 10;
courses[4] = "Typescript";
courses[5] = "Vue";

console.log("Number of courses available: "+ courses);
//check if an object is an array or string
console.log(typeof courses);

//injecting multiple values into a single array
courses.push("C++", "Flutter", "C#", "Python")
console.log("New semester: "+courses)
//check if an array is an array method
console.log(`courses are : ${courses instanceof Array}`)


let faculty = courses.toString();
console.log("Courses as string: " + courses )
console.log(typeof faculty)
console.log(faculty.toLocaleUpperCase());
