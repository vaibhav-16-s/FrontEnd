const person=function(name,age)
    {
        this.firstName=name;
        this.age=age;

    }


person.prototype.introduce=function(){
    console.log(`hi,my name is ${this.firstName} and i am ${this.age} years old`);
}

const person1=new person("nitin",20);
person1.introduce();
console.log(person1);

