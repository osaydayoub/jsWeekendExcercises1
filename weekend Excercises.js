//// 1.1,
////  2.1,
////  2.3,
////  2.4,
////  2.5,
////  2.6,
////  2.7,
////  4.1,
////  5.1
//// 5.2
// 5.3,
//  5.5,
//  5.6
//  5.7,
//  6.1,
//  6.2,
//  6.4
//Ex1.1 - Yes or No
const ex1={
    yesNO : function(bool){
        if(bool){
            return 'Yes';
        }
        return 'NO';
    },
};

// //test
// let res=ex1.yesNO(true);
// res
// res=ex1.yesNO(false);
// res

//Ex2.1 - Sum of lowest numbers
function lowestNumbers(array){
    let lowest1=array[0];
    let lowest2=array[1];
    let lowestIndex1=0;
    for(let i=0;i<array.length;i++){
        if(array[i]<lowest1){
            lowest2=lowest1;
            lowest1=array[i];
            lowestIndex1=i;
           }
           if(array[i]<lowest2 && lowestIndex1!==i){
            lowest2=array[i]; 
           }
    }
    return lowest1+lowest2;
}
// //test
// let res=lowestNumbers([19, 5, 42, 2, 77]);
// res;
// res=lowestNumbers([10, 343445353, 3453445, 3453545353453]);
// res;

//Ex2.3 - Find the Next Perfect Square
function findNextSquare(number){
    let numberRoot=Math.sqrt(number)
    if(Number.isInteger(numberRoot)){
        return Math.pow(numberRoot+1,2);
    }
    return -1;
}

// //test
// let res=findNextSquare(121)
// res
// res=findNextSquare(625)
// res
// res=findNextSquare(114)
// res

//Ex2.4 - Unique
function findUniq(array){
    let number1=array[0];
    let number2=array[1];
    let number3=array[2];
    if(number1!==number2&& number1!==number3){
        return number1;
    }
    if(number1===number3&& number1!==number2){
        return number2;
    }
    if(number1===number2&& number1!==number3){
        return number3;
    }
    for(let i=3;i<array.length;i++){
        if(array[i]!==number1){
            return array[i];
        }
    }
}
// //test
// let res=findUniq([ 1, 1, 1, 2, 1, 1]);
// res
// res=findUniq([  0, 0, 0.55, 0, 0]);
// res
// res=findUniq([  0, 0, 0, 0, 0.99]);
// res

//Ex2.5 - Summation
function summation(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

// //test
// let res=summation(2)
// res
// res=summation(8)
// res

//Ex2.6 - Years and Centuries
function centuryFromYear(year){
    let century=year/100;
    century
    let res=Math.ceil(century);
    return res;
}

// //test
// let res=centuryFromYear(1705)
// res
// res=centuryFromYear(1900)
// res
// res=centuryFromYear(1601)
// res
// res=centuryFromYear(2000)
// res

//Ex2.7 - Basic Math
function basicOp(op,number1,number2){
    switch (op){
        case '+':
            return number1+number2;
        case '-':
            return number1-number2;
        case '*':
            return number1*number2;
        case '/':
            return number1/number2;
    }
}
// //test
// let res=basicOp('+', 4, 7) // Output: 11
// res
// res=basicOp('-', 15, 18) // Output: -3
// res
// res=basicOp('*',5,5) // Output: 25
// res
// res=basicOp('/', 49, 7) 
// res

//Ex4.1 - Fibonacci -
//0,1,1,2,3,5,8,13...
function fibonacci(n){
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    let number1 =0;
    let number2 =1;
    let save=number1;
    for(let i=2; i<=n;i++){
        save=number1;
        number1=number2;
        number2=save+number2;
    }
    return number2;
}
//recursive
function recFibonacci(n){
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    return recFibonacci(n-1)+recFibonacci(n-2);
}

// // test
// let res=0;
// for(let i=0;i<20;i++){
//     if(recFibonacci(i)===fibonacci(i)){
//     res=recFibonacci(i)
//     console.log(`f(${i})=${res}`) 
//     }
// }

//Ex5.1 - trimming string
// function trimmingString(str){
//     return str.slice(1,str.length-1);
// }
function trimmingString(str){
    let newStr='';
    for(let i=1;i<str.length-1;i++){
        newStr+=str[i];
    }
    return newStr;
}
// //test
// let res=trimmingString('01234560');
// res

//Ex5.2 - String Repeat
function repeat_str(n,src){
    let newStr='';
    for(let i=0;i<n;i++){
        newStr+=src;
    }
    return newStr;
}

// //test
// let res=repeat_str( 6, "I");
// res
// res=repeat_str( 5, "Hello");
// res





