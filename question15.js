function UniqueValues(number)  {
    let NewSet = number.length === new Set(number).size
    return NewSet
    }

      let array = [1, 2, 3, 4, 5]
    console.log(UniqueValues(array));
    //