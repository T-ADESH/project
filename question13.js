let numbers = [2, 7, 4, 9, 1];
let index = 0;
let maxi = numbers[0];
let mini = numbers[0];
function array() {
    while (index < numbers.length) {
        if ( maxi < numbers[index] ) {
            maxi = numbers[index]
        }
       else if  ( mini > numbers[index] ) {
            mini = numbers[index]   
        }
        index++
    }
    let maxmin = {
        "highest": maxi,
        "lowest": mini
    }
    
    return maxmin
}


console.log(array());
