function capitalized(first){

    let capitalized = first.map((a)=>{
    return a[0].toUpperCase() + a.slice(1)})

    return capitalized
}

let FristAlphabetCapitalized = capitalized(['apple', 'banana', 'cherry'])
console.log(FristAlphabetCapitalized)











