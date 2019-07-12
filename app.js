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

const str = 'hellow world';
const foo = (str,char) => {
    for(let i = 0;i< str.length;i++){
        if(str[i]==char) return i;
    }
    return -1
}