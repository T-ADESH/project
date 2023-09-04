function Checkout(movies){

    const genre = movies.filter(movies => movies.genre === 'Action'
      );
     
 return genre
 
   }
 
   var movies = [
     { title: 'Movie 1', genre: 'Action' },
     { title: 'Movie 2', genre: 'Comedy' },
     { title: 'Movie 3', genre: 'Action' }
   ]
 
 console.log(Checkout(movies));


 //