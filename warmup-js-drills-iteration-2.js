
// ---------------------------------------
// EXERCISE 1 : dogSpeak()
//  (takes two arrays of values, and returns a smaller array)
// ---------------------------------------
// Write a `dogSpeak()` that takes an sentence string and 
// replaces the first letter of each word with an 'r'


//INPUT - String
var dogSpeak = function(inputStr){
   var wordsArray = inputStr.split(' ')
   var dogSentenceWordsArray = []   

   for(var i = 0; i < wordsArray.length; i += 1  /* i = i + 2 */ ){
      
      var theWord = wordsArray[i]
      var theWordMinusIndex0 = theWord.slice(1)
      var dogWord = 'r' + theWordMinusIndex0
      dogSentenceWordsArray.push(dogWord)
      // console.log(dogSentenceWordsArray)
   }
   
   var dogSentenceString = dogSentenceWordsArray.join(" ")
   // console.log(dogSentenceString)
   return dogSentenceString
   // console.log('================')
   //OUTPUT - String
}



console.assert( dogSpeak('i love you') === 'r rove rou' )
console.assert( dogSpeak('Time for a walk') === 'rime ror r ralk' )
console.assert( dogSpeak('Will you feed me?') === 'rill rou reed re?' )

// ---------------------------------------
// EXERCISE 2 : popAtIndex()
//  (takes two arrays of values, and returns a smaller array)
// ---------------------------------------
// Write a `popAtIndex()` function that takes an array of values and an array of index
// numbers. The function should return an array of the values that EXCLUDES values
// from the original array if for those indexes that are found in the
// provided array of index numbers.

//INPUT : array of values, array of index numbers
var popAtIndex = function(arrVals, arrOfIndexes){
   
   var filteredArr = [];

   for(var i = 0; i < arrVals.length; i = i + 1){
      if( arrOfIndexes.indexOf(i) === -1 ){
         console.log( i , ' - ', arrVals[i] );
         filteredArr.push(arrVals[i])

      }
   }

   console.log("=============")
   return filteredArr
   //OUTPUT : array of values (filtered set)
}

var partySchools = [
   "Tulane University",
   "University of Georgia",
   "West Virginia University",
   "Miami University",
   "University of Iowa",
   "UC Santa Barbara",
   "Howard University",
   "Ohio University"
]

// EXAMPLE:
//  popAtIndex(partySchools, [0,1,6,7])
//  => ['West Virginia University', 'Miami University', 'University of Iowa', 'UC Santa Barbara']
//     // (i.e. missing index-0 )
var smallerList = popAtIndex(partySchools, [0,4,5])

console.assert(smallerList.length === 5 )
console.assert(smallerList[0] === "University of Georgia" )
console.assert(smallerList[3] === "Howard University")

// asserts that 'Universtiy of Iowa' is NOT on the returned array
console.assert(smallerList.indexOf('Tulane University') < 0 )
console.assert(smallerList.indexOf('University of Iowa') < 0 )
