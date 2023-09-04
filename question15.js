function UniqueValues(number)  {
    let NewSet = number.length === new Set(number).size
    return NewSet
    }

     
    


    let array = [1, 2, 3, 4, 5]
    console.log(UniqueValues(array));


    // function unique(arr){
    //     let NewSet = arr.length === new Set(arr).size
    
    //     return NewSet
    //     }
    
    
    //     var U = unique([1, 2, 3, 4, 5])
    //     console.log("15. Unique Bolean value of an array:",U)