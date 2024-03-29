//Kristen Kozinski
// 12/3/13

// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){
        var numInArray = 0;
        var total = 0;

        for(var i= 0; i < arr.length; i++){
        total+= arr[i];
        ++numInArray;
        var answer = total / numInArray;   
        };

        return answer; 
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

     var fullName = function(firstname, lastname){
        var name = firstname.concat(lastname); 
        return name;
     }

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

    var wordCount = function(words){
        var stringToArray = words.split(" ");
        var numInArray = 0;
        var total = 0;

        for(var i= 0; i < stringToArray.length; i++){
        total+= stringToArray[i];
        ++numInArray;
        var answer = numInArray;
        };
        //console.log(stringToArray);
        return answer;

    };

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

     var charCount = function(words) {
        var numInString = words.split("");
        var numInArray = 0;
        var total = 0;
        //console.log(numInString);

        for(var i= 0; i < numInString.length; i++){
        total+= numInString[i];
        ++numInArray;
        var answer = numInArray;
        };
        //console.log(stringToArray);
        return answer;
        
     }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

    var vowelsInWord = function(word){
        var letInString = word.split("");
        var vowelInString = 0
        var total = 0
    for(var i = 0; i<letInString.length; i++){
        if(letInString[i] === "a" || letInString[i] === "e" || letInString[i] === "i" || letInString[i] === "o" || letInString[i] === "u"){
        total+=vowelInString;
        ++vowelInString;
        var answer = vowelInString
        }
    }

    return answer;    

    }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

    // Could not figure out this one.
    var findNum = function(arrayNum, boolean){

    var evenNum = [];
    var oddNum = [];

    for(var i = 0; i<arrayNum.length; i++){
        if(boolean == false){
            if(arrayNum[i] % 2 != 0){
                oddNum.push(i);
            }

        }else{
            if(arrayNum[i] % 2 == 0){
                evenNum.push(i);
            }
        }
    }

    return evenNum;
    return oddNum;

    }

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();