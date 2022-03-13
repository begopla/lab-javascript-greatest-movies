// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(aMovie) { 
  const allDirectors = aMovie.map((movie) => { 
  return movie.director;
  })
  
   return allDirectors;
}
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(aMovie) {
const filteredDirectors = aMovie.filter((anyMovie)=>{

  return (anyMovie.director ==='Steven Spielberg' && anyMovie.genre.includes('Drama'))
})
 return filteredDirectors.length;
  
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(aMovie) {
  if(aMovie.length===0){
    return 0;
  }
  
  const totalScore= aMovie.reduce((acuValue, value) => {
    if(!value.score){
      return acuValue;
    }
    return acuValue + value.score;
  },0)
  const averageValue = totalScore/aMovie.length
  
  //return Math.round(averageValue*100)/100
  return +((totalScore/aMovie.length).toFixed(2)) 
  };



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

 const dramaMovies = moviesArray.filter( movie => (movie.genre.includes('Drama')));
 return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(aMovie) {

const copiedArray=[...aMovie]; //Option 1
// const copiedArray = aMovie.map(movie=>movie)  --> Option 2
// const copiedArray= Array.from(aMovies) --> Option 3
return copiedArray.sort((a,b)=> {
  // if(a.year>b.year) return 1;
  // if(a.year<b.year) return -1;
  // if (a.title>b.title) return 1;
  // if(a.title<b.title) return -1;
  if(a.year===b.year){
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  }
  return a.year - b.year
})
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(aMovie) {
const titleArray = aMovie.map(item=> item.title)
const orderedAlphabetically= titleArray.sort((a,b) =>{
  return a.toLowerCase().localeCompare(b.toLowerCase());
})

const slicedArray= orderedAlphabetically.slice(0,20);
return slicedArray;

}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(anyMovie) {

const newArray= JSON.parse(JSON.stringify(anyMovie))

const modifiedToMinutes=newArray.map((x)=>{

  const splitTime = x.duration.split('h');
  const hour= Number(splitTime[0]);
  const minutes = Number(splitTime[1].trim().split('min')[0]);
  
   x.duration =hour*60+minutes;
   return x
})

return modifiedToMinutes;
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
if (movies.length===0){
  return null;
}
  let year;
  let rate=0;
  let visitedYears = []

  movies.forEach(movie => {
    if (!visitedYears.includes(movie.year)) {
      const sameYearMovies = movies.filter(el => el.year === movie.year);
      const provisionalRate = scoresAverage(sameYearMovies);
      if (provisionalRate >= rate) {
        rate = provisionalRate;
        year = movie.year;
      }
      visitedYears.push(movie.year);
    }
  })
  return `The best year was ${year} with an average score of ${rate}`

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
