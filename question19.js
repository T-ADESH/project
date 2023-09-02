function positive(numbers) {
    let index = 0;
    let NewArray = [] 
while ( index < numbers.length){
    postiveNumbers = numbers[index];
    if (postiveNumbers >= 0 ) {
 NewArray.push(postiveNumbers)
    }
    index++
}
return NewArray;
}



let input = positive([-10, 15, 99, -6, -8, 0]);
console.log(input);








//  let input = [-2, 3, -4, 7, -1]

//  console.log(input.l)









