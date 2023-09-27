console.log("============================= Assignment 5 ========================");
console.log('------------------------------  Step 1 ----------------------------');
function squareOfWordLength(strName)
{

    var countStringLength=strName.length* strName.length;
    return `Given string is ==>"${strName}" & its square of length =>${countStringLength}`;
}
var str=squareOfWordLength("JavaScript");

console.log(str);
str=squareOfWordLength("Google Chrome");
console.log('---------------------------------------------------------------------');
console.log(str);
str=squareOfWordLength("Developer Smart");
console.log('---------------------------------------------------------------------');
console.log(str);

console.log('------------------------------  Step 2 ----------------------------');
function Developer()
{
    var strName="I am Angular Developer";
    var countWord=strName.split(" ").length;
    console.log(`Given string name is =>${strName}`);
    console.log('---------------------------------------------------------------------');
    console.log(`i.  The string length and divide by total number of words => ${strName.length/countWord}`);
    console.log(`ii. The string length and multiple by total number of words => ${strName.length*countWord}`);
}
Developer();


