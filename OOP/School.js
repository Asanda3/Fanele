let school ={
    name: "Secunda Secondary Scsool",
    established: "1999",
    location: "Mpumalanga",
    learners: 100,

    displayinfo: function(){
        console.log(`The name of school is  ${school.name}\n located at
        ${school.location} established at ${school.established}`);
    
    }
    hardData: function(){
        console.log("The name of school is" +school.name + "\n"
        + "Located at" + school.location)
    }


}