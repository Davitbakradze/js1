let numbersArray = [1, 2, 3, 4, 5];
let sum=0;
numbersArray.forEach(numb => sum += numb);
console.log(sum);

//second method

const sum1 = numbersArray.reduce((acc, val) => acc + val, 0);

//third method

const sum2=eval(numbersArray.join("+"));

//result 15//

//მეორე დავალება//

let userInfo = [
    {name:"დავითი", age:25, adress:"თბილისი"},
    {name:"ანა", age:18, adress:"თბილისი"},
    {name:"გიორგი", age:20, adress:"თბილისი"},
]

//მესამე დავალება//

let Mynameis=(userInfo[0].name);
console.log("My name is " + Mynameis);

let Myageis=(userInfo[0].age);
console.log("My age is " + Myageis);

let Myadressis=(userInfo[0].adress);
console.log("my adrss is " + Myadressis);

//მეოტხე დვალება//

if (userInfo[1].age <= 19)
    console.log("I am teen");
else
    console.log("I am an adult");

//მეხუთე დავალება//

let mounthWage = [10000, 55000, 555, 658, 898797];

for (let i = 0; i < 9; i++) {
    mounthWage = mounthWage + i;
  }
  
  console.log(mounthWage);

  //მეექვსე დავალება

const daysOfWeek = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
const currentDay = new Date().getDay();
const dayName = daysOfWeek[currentDay];

console.log(dayName);