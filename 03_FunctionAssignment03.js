function stringHandsOn()
{
    console.log(`================ Assignment 3 ===============================`);    
var str="   Hey you are doing good, Keep it up    ";
console.log(`1. Given string is ==> ${str}`);
console.log('----------------------------------------------------------------');
console.log(`2. Given string length is ==> ${str.length}`);
console.log('----------------------------------------------------------------');
console.log(`3. Removed extra space and total length is ==>${str.trim().length}`);
console.log('----------------------------------------------------------------');
console.log(`4. Total number of extra spaces  ==>${str.length-str.trim().length}`);
console.log('----------------------------------------------------------------');
var lastIndexChar = str.trim().charAt(str.trim().length-1);
console.log(`5. i) First character of string is  ==> ${str.trim().charAt(0)} ii) Last character of string is  ==>${lastIndexChar}`);
console.log('----------------------------------------------------------------');
console.log(`6. Total number words  ==>,${str.trim().split(" ").length}`);
console.log('----------------------------------------------------------------');
console.log(`7. Index of "good" form given string is ==> ${str.trim().indexOf('good')}`);
console.log('----------------------------------------------------------------');
console.log(`8. Substring starting from index 22 is==> ${str.trim().slice(22,38)}`);
console.log('----------------------------------------------------------------');
console.log(`9. String end with word "up" ==> ${str.trim().includes("up")}`);
console.log('----------------------------------------------------------------');
console.log(`10. String start with word "Hey" ==> ${str.trim().includes("Hey")}`);


}
stringHandsOn();