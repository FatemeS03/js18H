/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/
const sum= (num1, num2)=> {
  return new Promise((resolve,reject)=>{
    
      if (num1>0 && num2>0){
        setTimeout(()=>{
        resolve(num1 +num2)},500)
      }else{
reject("rejected")
      }
  }

  )
}
sum(1,2)
.then((res)=> console.log(res)).catch((er)=> console.log("er"))
sum(1,-2)
.then((res)=> console.log(res)).catch((er)=> console.log(er))