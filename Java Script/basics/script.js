/*console.log("Hello World!");

let p;
p=10;
p=p+=6;
console.log(p);

const n=61;
console.log(n);

console.log(t);
var t=24; 
*/

/* 
-- NAN => not a number

functional declaration
  -- hoist 
     -- while declaring the 'var' variable after 'console.log' it shifts declaration at the start ,
        initialising  the variable later, Hence it gives 'not defined' error. 

  -- temporal dead zone
     -- if the 'int' variable declared after a certain code ,then the code before 
        its initialising is called dead zone for that particular variable.
  
  -- type cohersion
     -- manages the type of variable acoordingly.

     //Lec-3;

*/


// Q1-Write a program that prints multiplication table of 5 using a for loop.
// let n=5;
// let i=1;
// while(i<11)
// {
//    console.log(n+"*"+i+"="+n*i);
//    i++;
// }


// Q2-Take a number and check if it is even or odd using if-else.
/*let n=prompt("enter the number: ");
if(n%2===0)
{
   console.log("Even");
}
else
{
   console.log("odd");
}*/


/*let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}*/



/* Pattern-1

   *******
   ******
   *****
   ****
   ***
   **
   *           
                  

let n=7;
for (let i=0;i<n;i++)
{
   let str='';
   for (let j=0;j<n-i;j++)
   {
      str=str+'*';
   }
   console.log(str);
}  */



   /* 
   functions 
   doms
   asynchronized 
   */



   // /* Type Coversion*/

   // let strNum='18';
   // let convNum=Number(strNum);
   // console.log(typeof(convNum));


  //ARRAYS

   /* Arrays :  an array is data structute / object that can store multiple values at once .

   Functions:- concat(), indexOf(), push(), lastindexOf(), find()-> it requires function., findIndex(), pop(),
                  Unshift("adds value at index[0]"), sort((a,b)), map, filter, reduce.
   */

//   const arr=[1,2,3,"vaibhav",undefined,null];    // way 1 to define array.
//   const arr1=new Array();console.log(arr1);      // way 2 to define array. 

//   const start=[1,2,3,4];
//   const end=[4,5,6,7];
//   const newArr=[];
//   for (let num of end)
//   {
//    newArr.push(num);
//   }
//   const newArr1=start.concat(end);
//   console.log(newArr);
//   console.log(newArr1);


   // const start=[1,2,3,4,5,6,7,8,9];
   // for(let i=0;i<start.length();i++)
   // {
   //    if(start[i]==56)
   //       console.log(i);
   // }


   // const index = start.indexOf(56);
   // const double=start.map(function(value))
   // {
   //    return value;
   // }


  

   // const arr=[1,3,5,6,11,5,null,"abc"];
   // console.log(arr.find((num)=> num %2===0));
   // console.log(arr.filter((num)=> num %2===0));
   


   // const arr=[1,2,3,4,4,5,6];
   // const doubleArr=arr.map((num)=>num*2);
   // console.log(doubleArr);



   /*const arr=[2,6,4,8,16,29,37];
   const primeArr=arr.filter((num)=>{
      for(let i=2;i<arr.length;i++)
      {
        if( num%i===0)
        {
         return false;
        }
        else{
         return true;
        }
      }
   });
   console.log(primeArr);*/





  




   
