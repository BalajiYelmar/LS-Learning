
console.log(`========================= Assignment 2 ===========================`);
console.log(`------------------------- Step 1 ---------------------------------`);

function greaterNumber(valueOne,ValueTwo)
{
  console.log(`Given number are ${valueOne} & ${ValueTwo}`);
  var graterNumber=(valueOne>ValueTwo)?valueOne:ValueTwo;
  console.log(`Greater number in between is: ${graterNumber}`);
}
greaterNumber(10,-10);
console.log(`--------------------------------------------------------------------`);
greaterNumber(800,899);
console.log(`----------------------------End step 1------------------------------`);

console.log(`---------------------------- Step 2 --------------------------------`);

function isEvenOrOddNum(valueOne)
{
    var checkGivenNumber=(valueOne%2==0)?true:false;
    console.log(`Given Number is ${valueOne} => ${checkGivenNumber}`); 
}
isEvenOrOddNum(29);
console.log(`---------------------------------------------------------------------`);
isEvenOrOddNum(44);
console.log(`---------------------------------------------------------------------`);
isEvenOrOddNum(0);
console.log(`---------------------------------------------------------------------`);
isEvenOrOddNum(101);
console.log(`---------------------------- End Step 2 -----------------------------`);

console.log(`---------------------------- Step 3 ----------------------------------`);

function wordLength(valueOne)
{
var checkWord=(valueOne.length%2==0)?"EVEN":"ODD";
console.log(`Given string is => "${valueOne}" & its length is =>${checkWord}`);
}
wordLength("JavaScript");
console.log(`---------------------------------------------------------------------`);
wordLength("Developer");
console.log(`---------------------------------------------------------------------`);
wordLength("Google");
console.log(`---------------------------- End Step 3 -----------------------------`);

