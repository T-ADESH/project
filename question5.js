function certainyear(arr){ 
    var output = [];
    
    for( var i = 0; i < arr.length; i++){
      if(arr[i].year === 2010) {
        output.push(arr[i].title);
    
        
      }
    }
   
  return output;
  
  }
  
  var Year = certainyear([
      { title: 'Book 1', year: 2010 },
      { title: 'Book 2', year: 2015 },
      { title: 'Book 3', year: 2010 }
    ])
  
  
  console.log(Year);

  //
  
  