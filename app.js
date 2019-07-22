/*let name;
let age;

name = prompt ("What is your name?");
age = prompt("Your age?");

if (Number(age) > 18) {
   
    if (Number(age) < 50) {
        console.log("ok")
    }
} else {
    console.log("!!!!");
}*/
/*const color = prompt('enter your color');
switch (color){
    case 'green':
        console.log('apple');
        break;
    case 'red':
        console.log('tomato');
        break;
    case 'yellow':
        console.log('lemone');
        break;
    case 'orange':
        console.log('orange');
        break;

    default:
        console.log('----')
       
}*/

// let i = 0; 
// while (i < 10) {
    // console.log(`i:${i}`);
    // i++;
// }

/*for (let i = 0 ;i < 10 ;i++ ) {
    
    console.log(`i:${i}`);
}*/

/*let login = "123", pass = "123";
do{
     if(prompt("enter log") == login &&
     prompt("enter pass")== pass){
     status = true;
    }else{
        alert('wrong')
    }
} while(!status)
alert('ok')*/
/*let i= 0;
while (i < 20) {
    if(i%2==0 ){
        console.log(i)
    }
    i++;
}*/


//12.07.2019 function


/*function pow(a,b) {
    let res = 1;
    for(let i =0; i<b ;i++){
        res=res*a
    }
    return res;
}

console.log(pow(2,3));*/
/*function fact(a) {
    let res = 0 ; 
    for(let i = 1; i <= a;i++){
        res =res + i;
    }
    return res;
}
console.log(fact(5))*/

/*function min(a,b) {
    //let res;
    if(a>b){
        return a;
        //res = a;
    }
        return b;
        //res = b;

    return res;
}
console.log(min(10,3))*/


//const fact = 
/*function fact(n){
    if(n== 1){
        return 1;
    }
    return fact(n-1)*n;
}
console.log(fact(5))*/

/*function fact(x){
    return x==1?1:x*fact(x-1);
}
console.log(fact(5))*/


//strelochnue funkcii


/*const fact = (x) => {
    return x==1?1:x*fact(x-1);
}
console.log(fact(5))*/

/*const one = (f) => {
    return f();
}

const two = (f) => {
    return f;
}

one(
    two(
        () => {console.log('run')}
        )

)*/




//stroky i massiwu

/*const str = 'hello world';
function mass (str,start,end){
    let res = "";
    for(let i = start;i<end;i++){
        res += str[i]
    }
    return res;
}
console.log(mass(str,2,6));*/



/*const str = 'hello world';
function mass (str,start,end){
    if(!end){
        end = str.length;
    }

    let res = "";
    for(let i = start;i<end;i++){
        res += str[i]
    }
    return res;
}
console.log(mass(str,2));*/
/*
const str = 'hellow world';
const foo = (str,char) => {
    for(let i = 0;i< str.length;i++){
        if(str[i]==char) return i;
    }
    return -1
};*/


/*function binarySearch (array, item){
  let low = 0;
  let high = array.lenght -1 ;
    while (low <= high) {
        mid = ((low + high)/2) ;
        guess = array[mid];
        if (guess == item) {
            return mid;
        }else if(guess > mid){
            high = mid -1;
        }else{
            low = mid +1;
            return None;
        }
    }
    let my_array = [1,3,5,7,9,11,13,15]
};
console.log(binarySearch(my_array,5));*/


// возведение в степень
/*function pov (a , b){
    let res = 1;
    for(let i = 1;i<=b;i++){
        res = res * a;
        
        console.log(res);
    }
    return res;
}
pov(3,5);*/


//факториал

/*
function fact (a){
    let res = 1;
    for(let i =a;i > 1;i--){
        res = res * i
        console.log(res);
    }
    return res;
}
fact(5);*/


//геометрическая прогрессия
/*
function prog (a,b){
    let res = 1;
    for(let i =0;i< b;i++){
        res = res *a
        console.log(res);
    }
    return res;
}
prog(2,13);*/

//мин макс числа
/*function max(a,b){
   if (a>b) {
       return a;
   }else if(a==b)
    return 'not corect';
   else{
       return b;
   }
}
console.log(max(51,52));*/


//рекурсия

/*function fact(n) {
    if (n==1) {
        return 1;
    }
    return fact(n-1)*n;
}console.log(fact(5));*/


/*function fib(n){
   return n <=1? n : fib(n-1)+fib(n-2);
   
}
console.log(fib(15));*/


/*function fib(n) {
    let a = 1,b=1;
    for(let i = 3;i<=n;i++){
        sum = a+b;
        a=b;
        b = sum
    }
    return b;
}
console.log(fib(15));*/

/*
function str(string){
    for(let i=0;i<string.length;i++){
        console.log(string[i]);
    }
    return string;
}
console.log(str('mtfck'));*/


/*
function str(string){
    for(let i=0;i<string.length;i++){
        console.log(string[i]);
    }
    return string.toUpperCase();
}
console.log(str('MhggGFFGDGqqq'));*/


/*
function str(string,start,end){
   
    let res ="";
    for(let i=start?start:0;i<(end?(end>string.length?string.length:end):string.length);i++){
        res +=string[i];
    }
   return res;
}
console.log(str('12345678910',2,15));
*/
/*
function strfoo(str1,str2){
    if (str1.length != str2.length) {
        return false
    }
    for(let i=0;i<str1.length;i++){
        if (str1[i]!=str2[i]) {
            return false;
        }
    }
    return true;
}
//console.log(strfoo('hello','hello'));
*/
//homework indexof
/*
function search(str,find){
    let indexstr ;
    for(let i =0;i<str.length;i++){
        indexstr = str.indexOf(find);
        return indexstr;
       
    }
    return -1;
}
console.log(search('123456789101112131415','91'));
*/
/*
const str = 'hellow world';
const foo = (str,find) => {
    for(let i = 0;i< str.length;i++){
        if(str[i]==find) return i;
    }
    return -1
}
console.log(foo('helloworld','wor'));*/

//MASS 



/*let arr = [1,2,3,4,5,6];


console.log(arr.length);
console.log(arr[arr.length - 1]);


for(let i =0;i<arr.length;i++){
    console.log(arr[i])
}*/


/*function foo(n) {
    let arr=[];
    for(let i =0;i<n;i++){
        arr.push(i);
    }
    return arr;
}
console.log(foo(-2));
*/
//#########



//homework

/*function foo(n) {
    let arr=[];
    for(let i =0;i<n;i++){
        if (n = true) {
            arr.push(i);
        }
       
    }
    return arr;
}
console.log(foo(5));*/

//###########
/*let arr = [1,2,3,4,5,6,7,8,9];
let res = [];
function rev(arr) {
    for(let i = arr.length ;i >= 0;i--){
        res.push(arr[i]);
    }
 
}*/
/*let arr = [1,2,3,4,5,6,7,8,9];

const reverce = (array,cb) => array.map(cb);

const newArr = reverce(arr,(el,i,a)=> a[a.length-1-i])
console.log(newArr)*/



//homework
/*
let arr = [9,6,8,4,7,2,1,5,3];
let res = [];
let buffer = null;
function srt(arr){
    for(let i = 0;i<arr.length-1;i++){
        buffer = arr[i];
        
        for(let j = i;j<arr.length-1;j++){
            if(buffer>arr[j]){
            buffer = arr[j]
          }
          console.log(buffer);
        }
        res.push(buffer);
    }

}
console.log(res);
*/

/*
let arr = [9,6,8,4,7,2,1,5,3];


function foo(arr) {
    let sum= 0;
    for(let i =0;i<arr.length - 1;i++){
     sum += arr[i];
       
    }
    return sum;
}

console.log(foo(arr));*/
/*
let arr = ['a,','b','c','d','e','f','g'];
console.log(arr.reduce((acc,el)=>acc+el,0));
*/




//const str ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//let arr = str.split(' ');

/*let res = str.split(' ').reduce((acc,el,i)=>{
    if(i<10){
        return acc + " " + el
    }else{
        return acc
    }
},'')+ '...'
console.log(res);*/

/*let res = str.split(' ').reduce((acc,el,i)=>(i<10)?`${acc} ${el}`:acc,'') + '...'
console.log(res);*/

/*
const arr = [6,4,3,1,9,7,8,2,5];
let buffer;
let count = 0;
function bubl(arr) {
    for(let i = arr.length-1;i > 0;i--){
        for(let j = 0;j < i;j++){
            if(arr[j]>arr[j+1]){
                buffer = arr[j];
                arr[j]= arr[j + 1];
                arr[j+1]= buffer;
                count++;
            }
        }
       if (count==0) {
            break;
        }
    }
    return arr;
}
console.log(bubl(arr));

*/

////http://www.tvd-home.ru/recursion



//new Array(10).map(el => console.log(el))

/*


const user = {
    name:'Oleh',
    gender:'male',
    age:37,

    work(){
        console.log('coding')
    }

}

for(key in user){
    console.log(key)
}

Object.keys(user).map(el => console.log(user[el]))

*/
/*
const users = [
    {   name:'Oleh',
        gender:'male',
        age:37,
        solary:2500
    },
    {
        name:'Anna',
        gender:'female',
        age:30,
        solary:1500
    },
    { 
        name:'Anna',
        gender:'female',
        age:30,
        solary:2000
    },
    
];
const new_user = users.map(el => Object.assign({},el));
new_user[1].solary = 5500;
const res = {};
for(key in obj){
    res[key] = obj[key]
}

*/


//const sum = (collection, gender) => collection.reduce((acc,el) => gender?el.gender ===gender?acc + el.salary:acc:acc + el.salary,0);
/*

let str ='anna';

const poli = (str) => { 
    return str.split('').reverse().join('');
}
*/



/*
let n = Number;
function fb(n) {
    for(var i = 1;i<=n;i++){
       if (i%3===0 && i%5===0) {
        console.log(i,' fizzbuzz');
       }else if (i%3==0) {
           console.log(i,'fizz');
       }else if (i%5==0) {
           console.log(i,'buzz');
       }else{
           console.log(i);
       }
      
    }
   
}
fb(45);

*/
/*
const Oleh ={
    name:'Oleh',
    password:'123456',
    gender:'male',
    age: 37,
    salary:2500,
    address:{
        street:'Lenina 55'
    }
}*/
/*const name = Oleh.name;
const gender= Oleh.gender;
const age = Oleh.age;
const salary = Oleh.salary;
const street = Oleh.address.street
*/
//const{password,...user} = Oleh;

//const f=()=>{
  //  console.log('hello')
//}
/*
(({sum,count}) => {
      console.log(sum/count);
})(
    (()=>({sum:1200,count:6}))()
)
*/

/*
function foo(a) {
    console.log(a);
   // Array.from(arguments).map(e => console.log(e))
   [...arguments].map(e => console.log(e))
}
*/
/*
const foo = (a,...rest) => rest.map(e => console.log(e))
foo('aaaa','bbb','cccc','ddddd');
*/
/*
const name = 'anonim';

const Oleh ={
    name:'Oleh',
    password:'123456',
    gender:'male',
    age: 37,
    salary:2500,
    address:{
        street:'Lenina 55'
    },


    sayHello: function(userName){
        console.log(`hello ${userName}, my name ${this.name}`)
    },
}
const John ={
    name:'John',
    password:'123456',
    gender:'male',
    age: 37,
    salary:2500,
    address:{
        street:'Lenina 55'
    },


    sayHello: function(userName){
        console.log(`hello ${userName}, my name ${this.name}`)
    },
}
function User(name,password,gender,age,salary){
     this.name = name;
     this.password = password;
     this.gender = gender;

}
const users =[
    Oleh,John
]

const sayHello = Oleh.sayHello;
/*const sayHello = function(userName){
    console.log(`hello ${userName}, my name ${this.name}`)
}*/
/*
const getRandomFirstName = () => {
    const names = [
        "Aaliyah",
        "Aaron",
        "Abagail",
        "Abbey",
        "Abbie",
        "Abbigail",
        "Abby",
        "Abdiel",
        "Abdul",
        "Abdullah",
        "Abe",
        "Abel",
        "Abelardo",
        "Abigail",
        "Abigale",
        "Abigayle",
        "Abner",
        "Abraham",
        "Ada",
        "Adah",
    ];

    return names[Math.floor(Math.random()*names.length)]
}

const getRandomLastName = () => {
    const names = [
        "Abbott",
        "Abernathy",
        "Abshire",
        "Adams",
        "Altenwerth",
        "Anderson",
        "Ankunding",
        "Armstrong",
        "Auer",
        "Aufderhar",
        "Bahringer",
        "Bailey",
        "Balistreri",
        "Barrows",
        "Bartell",
        "Bartoletti",
        "Barton",
        "Bashirian",
        "Batz",
        "Bauch",
        "Baumbach",
        "Bayer",
        "Beahan",
        "Beatty",
        "Bechtelar",
        "Becker",
        "Bednar",
    ];

    return names[Math.floor(Math.random()*names.length)]
}

const getFullName = () => `${getRandomFirstName()} ${getRandomLastName()}`

const getGender = () => Math.random()> 0.5?'male':'famale'

function User(name=getFullName(),password,gender=getGender(),age=Math.ceil(Math.random()*100),salary=Math.ceil(Math.random()*2000)){
    this.name = name;
    this.password = password;
    this.gender = gender;
    this.age = age;
    this.salary = salary;
}
const users = Array.from(new Array(10)).map(el => new User());

///homework

const rand = () => { return users[Math.floor(Math.random()*users.length)]};







//users.forEach(function(element){console.log(element)});

*/

//setTimeout(()=> console.log("dghxdfgjhfj"),5000)


for(var i =0;i<10;i++){
    setTimeout(()=>console.log("i:",i),1000);
}
/*
function foo(a){
    var x = 10;
    return function(){
        console.log(`${a}-${x}`)
    }
}
const f =foo;
*/