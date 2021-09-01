/*var x="Hello"
x.length
x.slice(2,4)
x.substring
x.replace("Goodbye")
x.toUpperCase
x.toLowerCase
x.trim //will delete white space
x.padStart(5) //00000Hello
x.padEnd(5)  //Hello00000
x.charAt(0)
x.charCodeAt //Returns UTF-8 code of letter
*/
/*
var x=82
NaN
Infinity
x.toString
x.toExponential
x.toFixed //if we have a number with a lot of decimals can specify how many decimals we want in a number
x.toPrecision //like fixed, but specifying from the start of the number. Eg: 1000,13890 with toPrecision(5) you get 1000,1
x.valueOf
//var z = (x*y).valueOf
Number("82")//will return number 82
//  True or False --> 1 or 0
//  "Today is 1 Wednesday" --> NaN
parseInt("5g sugar")// WIll return first number --> 5 "500.21g sugar, 20g amareto" returns 500.21 but not 20
x.MAX_VALUE
MIN_VALUE
*/
/*
var x={"Someone",210,True,"chachacha"}
var y = {1,2,3,4}
toString
join(*)//select the separator between the content and array --> Someone * 210 * True * chachacha
x.pop()
x.shift()//like pop, but the start
x.unshift()//add element in the first position in the array
x.push()//gonna add an element at the end
x.length()//will return 4
x.delete(1)// will change 210 to undefined
x.splice(1,3) //will return array without elements we specify
var z=concat(x,y) //will make a new array with both array
x.slice()//will take elements we want from inside the array

x.sort()//will order array 0123456789 abcde
x.reverse()//reverse of sort

*/
//exercise: make 5 different functions. Make it a sum, rest, division, multiplication, module, rest, division make 4 buttons
/*var num1=15;
var num2=4;

function sum(num1, num2) {
    return num1+num2;
}

function dif(num1, num2) {
    return num1-num2;
}

function div(num1, num2) {
    return num1/num2;
}

function mult(num1, num2) {
    return num1*num2;
}

function mod(num1, num2) {
    return num1%num2;
}
*/
let valueinput, tries=0;
var x=Math.floor(Math.random()*100);
function enter(){
valueinput = document.getElementById("entry").value;
    }
function guess(valueinput){
    if(valueinput==x) {window.alert("Correct! Took you " + tries + " tries!");}
    else if(valueinput>x) {window.alert("Try lower."); tries++;}
    else {window.alert("Try higher."); tries++;}
}

//exercitiu cu un input sa gasesti numarul random