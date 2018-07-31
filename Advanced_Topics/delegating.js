function leadBootcamp(language, leader){
    var outcome = leader(language);
    console.log(outcome);
}

function Mike(language){
    var languages={
      'javascript':'successful leader',
      'PHP':'successful leader',
      'Python':'successful leader',
      'Ruby':'successful leader',
    }
    if(languages[language]) return languages[language];
    else return "maybe not yet";
  }
  function Charlie(language){
    var languages={
      'javascript':'successful leader',
      'PHP':'successful leader',
      'Python':'successful leader',
      'Ruby':'successful leader',
    }
    if(languages[language]) return languages[language];
    else return "maybe not yet";
  }
  function Jimmy(language){
    var languages={
      'javascript':'successful leader',
      'PHP':'successful leader',
      'Python':'successful leader',
      'Ruby':'successful leader',
      'iOS':'successful leader',
      'java_android':'successful leader',
    }
    if(languages[language]) return languages[language];
    else return "maybe not yet";
  }

// leadBootcamp('java_android', Mike);
// leadBootcamp('java_android', Charlie);
// leadBootcamp('java_android', Jimmy);


// Function that just prints the result of another list of instructions
function printResult(doSomething){
    var result = doSomething();
    console.log(result);
}
printResult(function returnFive(){return 5;})


// function each(arr, callback){
//     // loop through the array
//     for (var i = 0; i < arr.length; i++){
//         callback(arr[i]); // invoking the callback many times --> delegation
//     }
// }
// // call the each function
// each([1,2,3], function(num) {alert(num + "- I am from the callback!");})



