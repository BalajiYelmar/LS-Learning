console.log("============================== Assignment 1 =====================================");
console.log("------------------------------ Step 1 -------------------------------------------");

function maleMarriageEligibility(gender,age,boyName)
{
 var strMarriageEligibility=(gender=="Male" && age>=21)?`Hey "${boyName}" Congrats ! you are eligible for Marriage`:`Sorry "${boyName}" Not eligible for Marriage`;
 return strMarriageEligibility;
}
var checkstatus=maleMarriageEligibility("Male",25,"Bill Gates");
console.log(checkstatus);
console.log(`----------------------------------------------------------------------------------`);
checkstatus=maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(checkstatus);
console.log(`----------------------------------------------------------------------------------`);

console.log("------------------------------ Step 2 -------------------------------------------");

function femaleMarriageEligibility(gender,age,girlName)
{
 var strMarriageEligibility=(gender=="Female" && age>=18)?`Hey "${girlName}" Congrats ! you are eligible for Marriage`:`Sorry "${girlName}" Not eligible for Marriage`;
 return strMarriageEligibility;
}
var checksFemalestatus=femaleMarriageEligibility("Female",16,"Jenifer");
console.log(checksFemalestatus);
console.log(`----------------------------------------------------------------------------------`);
checksFemalestatus=femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(checksFemalestatus);
console.log(`----------------------------------------------------------------------------------`);
