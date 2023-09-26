function bankDetails(bankName,accountNo,location,PinCode)
{
 console.log("Bank Name =>",bankName,"Account Number =>",accountNo,"Location =>",location,"Pin Code =>",PinCode)
}
console.log("================================ Assignment 1 ====================================");

bankDetails('CITI Bank',3456782345,'Pune',431202);
bankDetails('AXIS Bank',7856782345,'Mumbai',441202);
bankDetails('HDFC Bank',8956782345,'Pune',631202,'Open');

console.log("===================================== End ==========================================");


console.log("================================= Assignment 2 =====================================");

function stringBasics(hobby1,hobby2,hobby3)
{
console.log("================================= Step 1 ===========================================");

 console.log("My dream compony name is =>","DreamSwift");   
 
console.log("================================= Step 2 ===========================================");
 console.log('My hobbies are =>',hobby1,hobby2,hobby3);
 console.log("Hobby1 total character =>",hobby1.length);
 console.log("Hobby2 total character =>",hobby2.length);
 console.log("Hobby3 total character =>",hobby3.length);
 console.log("Total count =>",hobby1.length+hobby2.length+hobby3.length);
}
stringBasics('Chess','Running','Swimming');