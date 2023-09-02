function isobjempty (obj) {
    return Object.values(obj);
}



let emptyobject = {}

console.log(isobjempty(emptyobject));
console.log(isobjempty(emptyobject));


function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

const sampleInput = {};
const isEmpty = isEmptyObject(sampleInput);

console.log(isEmpty); // This will output: true



 


 function m(arr){
    let empty = {};
    if( Array.isArray(empty) && empty.length){
        return false;
    }else{ return true}
}
var o = m({});
console.log("6. Bolean value of an empty object :", o)


















