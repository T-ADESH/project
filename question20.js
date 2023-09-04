
function City(names){ 

    let specific = names.filter(value => value.city === 'New York'
    );
   
return specific
    }


var SpecifiedCity = City([
    { name: 'John', city: 'New York' },
    { name: 'Alice', city: 'Los Angeles' },
    { name: 'Bob', city: 'New York' }

]);

console.log(SpecifiedCity);


//