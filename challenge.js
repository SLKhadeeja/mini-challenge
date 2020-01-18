/* This function accepts a string containing multiple words as input
   You're expected to find and return the length of the longest word in the string */
   const findLongestWordLength = (str) => {
     var sentence = str.split(' ');
     var lOfWords = []
     largest = 0;
     for (var i=0; i<sentence.length; i++){
       lOfWords[i] = sentence[i].length;
     }
     //console.log(lOfWords);
     for (var i=0; i<lOfWords.length; i++){
       if (largest < lOfWords[i]){
         largest = lOfWords[i]
       }
     }
     largestWordIndex = lOfWords.indexOf(largest);

     return(sentence[largestWordIndex])
    // Add your logic here
  }
  
  // Return an array consisting of the largest number from each provided sub-array
  const findLargestOfArrays = (arrays) => {
    return arrays.map((subArrays) => {
      subArrays.reduce((previousLargestNumber, currentLargestNumber) => {
        (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
      }, 0);
    });
    // Add your logic here
  }
  