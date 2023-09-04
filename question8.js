let students = [
    {name: "John", gpa: 3.5},
    {name: "Alice", gpa: 4.0},
    {name: "Bob", gpa: 3.8},
]


const StudentRank = students.filter((students) => {
    let index = students.gpa[0];
    while( index < students.length ){
        if ( index > students.gpa[0] ) {
            students.gpa = students.gpa[index]
        }
        index++
    }
    return students.gpa;
})

console.log(StudentRank);

//

























