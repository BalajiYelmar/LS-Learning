console.log("=========================Assignment 3=========================");
console.log("===========================Step 1=============================");

function Message()
{
    console.log("First function with no argument no return type");
    console.log("Second function with no argument no return type");
}
Message();
console.log("===========================Step 2=============================");
console.log("========== Function with argument no return type =============");
function personalDetails(firstName,lastName,collageName)
{
 console.log("First Name  =>" +firstName);
 console.log("Last Name   =>" +lastName);
 console.log("Collage Name=>" +collageName);

}
personalDetails("Balaji","Yelmar","Sangola Collage Sangola");
console.log("===========================Step 3=============================");
console.log("========== Function with argument no return type =============");
function swapValues(valueOne,valueTwo)
{
console.log('Before swap ==>', valueOne, valueTwo);
var temp;
temp=valueOne;
valueOne=valueTwo
valueTwo=temp;
console.log('After swap ==>', valueOne, valueTwo);
}
swapValues("Viral","Anushka");
swapValues(1000,2000);
console.log("===========================Step 4=============================");
console.log("========== Function with argument with return type ===========");
function addThreeValues(valueOne,valueTwo,valueThree)
{
console.log("Three values are =>"+valueOne+","+valueTwo+","+valueThree);    
return valueOne+valueTwo+valueThree;

}
var sum=addThreeValues(10.23,600,40);
console.log("Addition==>"+sum);
var sum=addThreeValues("Hello"," Good"," Morning");
console.log("Addition ==>"+sum);
console.log("========================== End =================================");