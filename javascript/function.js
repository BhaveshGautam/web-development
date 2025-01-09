// all about functions 
function printNumber(num){
    console.log('printed number',num)
}
printNumber(5) // this is an arguement and num is the paramater oof that function


// return functions 
function getsSum(a,b,c){
    let sum = a+b+c
    return sum
}
 let answer= getsSum(1,2,3)
 console.log(answer)

 // fucntion tretaed as value in  javascript
 let abc=function multiply(a,b){
    return a*b

 }
 let ans =multiply(2,3)
 console.log(abc);

 // arrow functions
 let b=multiply(a,b)=> {
    return a*b

 }
 let answer1=multiply(2,3)
 console.log(answer1);

