
function City(names){ 

    let specific = names.filter(value => value.city === 'New York'
    );
   
return specific
    }


var Uniquecity = City([
    { name: 'John', city: 'New York' },
    { name: 'Alice', city: 'Los Angeles' },
    { name: 'Bob', city: 'New York' }

]);

console.log("20. New array with only the customers from a specific city.:", Uniquecity);