
let students = [
    {
        name: "terrance",
        track: "front-end", 
        achievements: 12,
        points: 6
    },
    {
        name: "juliet", 
        track: "back-end",
        achievements: 14,
        points: 7
    },
    {
        name: "Miller",
        track: "full-stack",
        achievements: 9,
        points: 7
    },
    {
        name: "Johnson", 
        track: "full-stack",
        achievements: 9,
        points: 5
    },
    {
        name: "Smith",
        track: "front-end",
        achievements: 9,
        points: 8
    }
]
var message = "";
var student = "";

let outDiv = document.querySelector("#mine");

for(key in students){
    student=students[key];
    console.log(key, " : ", students[key]);
    
    outDiv.innerHTML += 
    `<p> ${student.name}, Track: ${student.track}, Acieviments: ${student.achievements}, Points: ${student.points} 
     </p>`;
}