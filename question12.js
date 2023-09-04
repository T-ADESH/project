// factorial of a number;

//5! = 5 * 4 * 3 * 2 * 1
                  //MR GANIYU'S WAY
// function factorial(first) {
//     let factorial = 1;
//     if (n ==0 || n ==1 ) {
//         return factorial;
//     } else 
//     if(n > 1){
//         for(var i = n; i >=1; i--){
//             factorial = factorial*i;
//         } 
//         return factorial;
//     }
// }


                     // MY WAY
function factorial (n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--
    }
    
 return result   
}

console.log(factorial(5));


//





