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
/*
function pov (a , b){
    let res = 1;
    for(let i = 1;i<=b;i++){
        res = res * a;
        
        console.log(res);
    }
    return res;
}
pov(3,5);
*/

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
fact(7);
*/

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
prog(2,64);
*/
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
/*
function fact(n) {
    if (n==1) {
        return 1;
    }
    return fact(n-1)*n;
}console.log(fact(7));
*/
/*
function fib(n){
   return n <=1? n : fib(n-1)+fib(n-2);

}
console.log(fib(3));
*/
/*
function fib(n) {
    let a = 1,b=1;
    for(let i = 3;i<=n;i++){
        sum = a+b;
        a=b;
        b = sum
        console.log(b);
    }
    return b;
}
console.log(fib(15));
*/
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
console.log(search('priwetmir','tm'));

*/


/*
const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let res = str.split(' ').reduce((acc,el,i)=>{
    if(i<10){
        return acc + " " + el
    }else{
        return acc
    }
},'')+ '...'
console.log(res)
*/




/////////////HOMEWORK////////////

/*
const arr = [6,4,3,1,9,7,8,2,5];
let buffer;
function bubl(arr) {
    for(let i = arr.length-1;i > 0;i--){
        let count = 0;
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
///////////////FIZZBUZZ//////////////
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
//////////////////////////////////////
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



function ana(str1) {
    let arr1 = [];
    arr1 = str1.split('')
    for(let i = 0;i<arr1.length ;i++){
        console.log(arr1[i])
    }
    
}
ana('aabbcc');