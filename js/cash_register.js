console.log("cash register works");

function cashReg(){
  var _balance = 0; //amount in memory 
  var _total = 0; //inputted from number buttons
  var _withdraw = 0;
  var _deposit = 0;
  //balance amount on hand
  function balance (x){
    _balance = x;
    return _balance;
  }
  //withdraw blance - x
  function withdraw (x){
   _withdraw = _balance - x;
   return _withdraw;
  }
  //deposit total + X
  function deposit(x) {
    _total = _deposit + x;
    return _balance;
  }
 return {
  balance : balance,
  withdraw: withdraw,
  deposit: deposit,
 };
}

// var register = cashReg();

// var calculations = calculatorModule();


// ( display ) is the primary ui that prints all results
// [clear] will clear the display
// [get balance] will display the current balance
// [deposit cash] will add the amount currently in the ( display ) to the cash register, then clears the display
// [withdraw cash] will remove the amount currently in the ( display ) to the cash register, then clears the display