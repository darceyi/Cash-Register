console.log("calculator works");

// DECLARING CALCULATOR VARIABLES
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var doubleZero = document.getElementById("doubleZero");
var decimal = document.getElementById("decimal");
var clearButton = document.getElementById("clearButton");


// DISPLAY 
var display = document.getElementById("display");


// CALCULATOR EVENT LISTENERS
one.addEventListener("click", function() {
  display.innerHTML = display.innerHTML.concat("1");
   console.log(display.innerHTML);
});

two.addEventListener("click", function() {
  display.innerHTML = display.innerHTML.concat("2");
   console.log(display.innerHTML);
});

three.addEventListener("click", function() {
  display.innerHTML = display.innerHTML.concat("3");
  console.log(display.innerHTML);
});

four.addEventListener("click", function() {
  display.innerHTML = display.innerHTML.concat("4");
  console.log(display.innerHTML);
});

five.addEventListener("click", function() {
  display.innerHTML = display.innerHTML.concat("5");
   console.log(display.innerHTML);
});

six.addEventListener("click", function() {
  display.innerHTML = display.innerHTML.concat("6");
   console.log(display.innerHTML);
});

seven.addEventListener("click", function() {
  display.innerHTML = display.innerHTML.concat("7");
   console.log(display.innerHTML);
});

eight.addEventListener("click", function() { 
  display.innerHTML = display.innerHTML.concat("8");
   console.log(display.innerHTML);
});

nine.addEventListener("click", function() {
  display.innerHTML = display.innerHTML.concat("9");
   console.log(display.innerHTML);
});

zero.addEventListener("click", function() {
  display.innerHTML = display.innerHTML.concat("0");
   console.log(display.innerHTML);
});

doubleZero.addEventListener("click", function() {
  display.innerHTML = display.innerHTML.concat("00");
   console.log(display.innerHTML);
});

decimal.addEventListener("click", function() {
  display.innerHTML = display.innerHTML.concat(".");
  console.log(display.innerHTML);
});

clearButton.addEventListener("click", function() {
  display.innerHTML = "";
});

// OPERATIONS initialized

var alpha = 0; 
var operator = "";


var addPress = document.getElementById("addition"); 
  addPress.addEventListener("click", function(){   
      alpha = display.innerHTML;
      display.innerHTML = "";      
      operator = "add";    
  });

var subtractPress = document.getElementById("subtraction"); 
  subtractPress.addEventListener("click", function(){   
      alpha = display.innerHTML;
      display.innerHTML = "";
      operator = "subtract";   
  });

var multiplyPress = document.getElementById("multiply"); 
  multiplyPress.addEventListener("click", function(){   
      alpha = display.innerHTML;
      display.innerHTML = ""; 
      operator = "multiply";         
  });

var dividePress = document.getElementById("division"); 
  dividePress.addEventListener("click", function(){   
      alpha = display.innerHTML;
      display.innerHTML = "";  
      operator = "divide";   
  });


  //OPERATIONS USING SWITCH
  var equals = document.getElementById("equals");
  equals.addEventListener("click", function() {
     switch(operator) {
        case "add":
            display.innerHTML = parseFloat(alpha) + parseFloat(display.innerHTML);
            break;
        case "subtract":
            display.innerHTML = parseFloat(alpha) - parseFloat(display.innerHTML);
            break;
        case "multiply":
            display.innerHTML = parseFloat(alpha) * parseFloat(display.innerHTML);
            break;
        case "divide":
            display.innerHTML = parseFloat(alpha) / parseFloat(display.innerHTML); 
      }
  });

// IF ELSE VARIATION WHEN SWITCH GOT WONKY
// var equals = document.getElementById("equals");
//   equals.addEventListener("click", function() {
//      if(operator === "add") {
//         display.innerHTML = parseFloat(alpha) + parseFloat(display.innerHTML);
//       } else if(operator === "subtract") {
//         display.innerHTML = parseFloat(alpha) - parseFloat(display.innerHTML);
//       } else if(operator === "multiply") {
//         display.innerHTML = parseFloat(alpha) * parseFloat(display.innerHTML);
//       } else if(operator === "divide") {
//         display.innerHTML = parseFloat(alpha) / parseFloat(display.innerHTML);
//       }
//   });


// BELOW IS THE ORIGINAL CALCULATOR SCRIPT

// function calculatorModule(){
  
//   var calculator = { };
//   var _memory = 0;
//   var _total = 0;

//   /**
//    * sets the `total` to the number passed in
//    * @param  { Number } x
//    * @return { Number }    current total
//    */
//   function load (x){
//     validation(x);
//     _total = x;
//     return _total;
//   }
//   /**
//    * Return the value of `total`
//    * @return { Number }
//    */

//     function getTotal (x){
//     return _total;
//    }

//   /**
//    * Sums the value passed in with `total`
//    * @param { Number } x
//    */

//    function add (x){
//     validation(x);
//     _total = _total + x;
//   }

//   /**
//    * Subtracts the value passed in from `total`
//    * @param  { Number } x
//    */

//    function subtract  (x){
//     validation(x);
//     _total = _total - x;
//    }

//   /**
//    * Multiplies the value by `total`
//    * @param  { Number } x
//    */

//    function multiply (x){
//     validation(x);
//     _total = _total * x;
//    }

//   /**
//    * Divides the value passing in by `total`
//    * @param  { Number } x
//    */

//    function divide (x){
//     validation(x);
//     _total = _total / x;
//    }

//   /**
//    * Return the value stored at `memory`
//    * @return { Number }
//    */

//    function recallMemory (x){
//     return _memory;
//    }

//   /**
//    * Stores the value of `total` to `memory`
//    */

//    function saveMemory (x){
//     _memory = _total;
//    }

//   /**
//    * Clear the value stored at `memory`
//    */

//    function clearMemory (x){
//     _memory = 0;
//    }

//   /**
//    * Validation
//    */

//   function validation(x){
//     if (typeof x !== "number"){
//       throw error;
//     }
//   }

//    return {
//     load: load,
//     getTotal: getTotal,
//     add: add,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide,
//     recallMemory: recallMemory,
//     saveMemory:  saveMemory,
//     clearMemory: clearMemory
//   };
// }