function duplicate(values){
    return new Set(values).size !== values.length;
}

var check = duplicate([1, 2, 3, 2, 4])
console.log(check);


//




