                          //  QUESTION 2 
function   Average_salary(employees_details) {
    let sum = 0;
for (index = 0; index < employees_details.length; index++) {
sum +=employees_details[index].salary;
}
index++
return sum / employees_details.length;
}

let employees_details = [ 
    {name: "John", salary: 50000},
    {name: "Alice", salary: 60000},
    {name: "Bob", salary: 70000},
]

console.log((`Average salary is ${Average_salary(employees_details)}`));



