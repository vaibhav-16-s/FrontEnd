/*var name="VAIBHAV";
var name="KOTA";    
console.log(name);*/



/*const sum=(num1,num2)=>
{
    return num1+num2;
};*/



//IMPLICIT RETURN
/*const sum=(num1,num2)=> num1+num2;
const double=num=>num*2;*/



// const iseven=num=> console.log(num % 2===0 ? true:false);
// console.log(iseven(4));



/*const greet=name=>console.log("Hello "+name+"!");
greet("Vaibhav");
const add=(num,num1)=>console.log(num+num1);
add(8,6);
const iseven=num=>(num%2===0? true:false);
console.log(iseven(123));*/



// const num=[1,2,3,4,5,6];
// const square=num.map()



/*let name="VAIBHAV";
let age=20;
console.log(`Hello ,my name is ${name} and i am ${age} years old, I was born in ${2025-age}`);*/

/*   QUE-1
const user="AMAN";
const point="120";
const message=`Hey ${user}, You have ${point} points.`;
console.log(message);*/



/*//   Declaring Object {method 1}
const person =
{
    firstName: "VAIBHAV", lastName : "SINGH", age: 20,
    introduce: function()
    {
        console.log(`Hi my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`);
    },
};
const name2="firstName";
console.log(person.firstName);
console.log(person[name2]);
console.log(person.lastName);
console.log(person.age)

person.introduce();*/




/*//    que-2 create a function outside of object to put values inside the object.

const intro = {}; // empty object
function addValues()        // function to put values in object.
 {      
  intro.fName = "Vaibhav";
  intro.lName = "Singh";
  intro.age = 20;
}


addValues();
console.log(intro);*/





/*const fruits=["apple","banana","Lichi","papaya"];
const [a,,b]=fruits;
console.log(a,b);*/




/*const arr=[1,2,3,4,5,6,7,8,9];
const[first,second, ...rest]=arr;
console.log(first);
console.log(second);
console.log(rest);
console.log(arr);*/




/*const arr=[1,2,3,4,5,6,7,8,9];
const arr1=[10,11,12,13];
const result=[...arr,"vaibhav",...arr1];
console.log(result);*/





/*const name="ritik";
const age=20;

const person=
{
    name:name,
    age:age,
};
console.log(person);*/



/*console.log(20);
console.log(30);
setTimeout(() =>console.log("Hello!"), 2000);
console.log(40);*/



/*let count=1;
const timer=setInterval(()=>{
    console.log("Hello!"+count);
    count++;
    if(count>5) clearInterval(timer);

},1000);*/



let count =10;
const timer=setInterval((reveresd)=>{
    console.log(count);
    count--;
    if(count===0)clearInterval(timer);
    
},1000);
setTimeout(()=>console.log("KaBoom!"), 11000);

// METHOD-2

/*let count = 10;
const bomb = setInterval(() => {
    console.log(count);
    count--;
    if (count === 0) {
        console.log("Allah who Akbarrrrrrr!!!!");
        clearInterval(bomb);
    }
}, 1000)*/



