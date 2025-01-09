console.log('hi I am bhavesh')
// javscript is dynamically typed language 
/*
a=30
a='bhavesh' 
a=true 
*/
// 3 ways of declaring and defining a variable and type of that varibale need not to be defined 
// let a=10;// redeclared and redefined not allowed but reassignment is possible a=30without let
//let b='abc'
//let c=5.2
//const= c=5.2
//var a=10
//var a=20 // it is a global variable and also redeclare  and redefine of that variable is possible
//const a=10 cannot be redefined and redeclared both 
//const a='abc'
{
    //let a=10 // behave as local variable--.> error dega a is not defined 
}
{
      //var a=10 // being in the these bracket ,if else ,conditioinal it behave as a global variable
}
{
    const a=10  //behave as local variable --.> error dega a is not defined 
}
console.log(a)


//function div(){
    a=10 // behave as locla variable and if you dont use let var char then it behave globally
//}


//....... function in javascript.........//
// div()
//console.log(a)
//function div(x){
    //console.log(x)
    //console.log("first")
    //console.log("second")
    //console.log("third")
//}
//div(10);// this is an aruguement 
// anoonmyous function 
//let div=function(){
  //  console.log("this is a function without name")
//}
//div()
//a=20 // variable without let var char and it is a global variable
//console.log(a)

//var a=10  // it shows undefined on output screen
 //let a=10 // Cannot access 'a' before initialization -->error 
// .... hoisting(calling is done before declration of function) is very impoartant............//////////
//console.log(div) // undefined using var 
//console.log(div) //ReferenceError: Cannot access 'div' before initialization using let 
//div()
//let div=()=>{ // ReferenceError: Cannot access 'div' before initialization using let variable  
    // TypeError: div is not a function using var variable 
   // console.log("this is a hoisting by using arrow function")
//}