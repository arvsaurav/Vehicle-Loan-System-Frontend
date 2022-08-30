function reset(){
    document.getElementById("value1").value = 0;
    document.getElementById("value2").value = 0;
    document.getElementById("value3").value = 0;
    
    document.getElementById("monthly-interest").innerHTML =" Rs. " +0;
    document.getElementById("monthly-payment").innerHTML =" Rs. " +0;
    document.getElementById("total-repayment").innerHTML =" Rs. " +0;
    document.getElementById("total-interest").innerHTML =" Rs. " +0;
  }
  
  function calculation(){
    
    var loanAmount = document.getElementById("value1").value;
    var interestRate = document.getElementById("value2").value;
    var loanDuration = document.getElementById("value3").value;
    var loanDuration1 = loanDuration * 12;
    //.......... declarations.............
    
   var interestPerYear = (loanAmount * interestRate)/100; 
   var monthlyInterest = interestPerYear/12;
    
    
    var monthlyPayment = monthlyInterest + (loanAmount/loanDuration1);
    var totalInterestCost = monthlyInterest * loanDuration1;
    var totalRepayment = monthlyPayment * loanDuration1;
    
    //----------------monthly interest----------------------
    
   document.getElementById("monthly-interest").innerHTML = " Rs. " +monthlyInterest.toFixed(2);
    
   //-------------Monthly payment------------
    
     document.getElementById("monthly-payment").innerHTML = " Rs. " +monthlyPayment.toFixed(2); 
    
    //-------------Total repayment-----------
    
    document.getElementById("total-repayment").innerHTML =" Rs. " +totalRepayment.toFixed(2);
    
    //--------------Total Interest cost----------------
    
    document.getElementById("total-interest").innerHTML =" Rs. " +totalInterestCost.toFixed(2);
    
  }
  