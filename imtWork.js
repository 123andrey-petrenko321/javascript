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

function search(str,find){
    let indexstr ;
    for(let i =0;i<str.length;i++){
        indexstr = str.indexOf(find);
        return indexstr;
       
    }
    return -1;
}
console.log(search('123456789101112131415','15'));






