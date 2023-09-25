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
function repeatStr(n,src){
    let newStr='';
    for(let i=0;i<n;i++){
        newStr+=src;
    }
    return newStr;
}

// //test
// let res=repeatStr( 6, "I");
// res
// res=repeatStr( 5, "Hello");
// res

//Ex5.3 - To Camel Case
function toCamelCase(str){
    let newStr='';
    for(let i=0;i<str.length;i++){
       if(str[i]==='_'||str[i]==='-'){
            if(i+1<str.length && str[i+1]!=='-' && str[i+1]!=='_'){
                newStr+=str[i+1].toUpperCase();
            }
            i++;
       }else{
        newStr+=str[i].toLowerCase();
       }
    }
    return newStr;
}

// //test
// let res=toCamelCase('the-stealth-warrior');
// res
// res=toCamelCase( 'The_Stealth_Warrior');
// res
//in the example the first letter is in UpperCase
function toCamelCase1(str){
    let newStr='';
    for(let i=0;i<str.length;i++){
       if(str[i]==='_'||str[i]==='-'){
            if(i+1<str.length && str[i+1]!=='-' && str[i+1]!=='_'){
                newStr+=str[i+1].toUpperCase();
            }
            i++;
       }else{
        newStr+=str[i];
       }
    }
    return newStr;
}
// //test2
// let res=toCamelCase1('the-stealth-warrior');
// res
// res=toCamelCase1( 'The_Stealth_Warrior');
// res

//Ex5.5 - Abbreviate two words
function convertIntoInitials(name){
    let newStr='';
    newStr+=name[0].toUpperCase();
    for(let i=0;i<name.length;i++){
       if(name[i]===' '){
        newStr+='.';
        newStr+=name[i+1].toUpperCase();
        break;
       }
    }
    return newStr;
}

// //test
// let res=convertIntoInitials('Sam Harris');
// res
// res=convertIntoInitials('Patrick Feeney');
// res

//Ex5.6 - Mask
function maskify(str){
    let newStr='';
    for(let i=0;i<str.length;i++){
       if(i<str.length-4){
        newStr+='#';   
       }else{
        newStr+=str[i];
       }
    }
    return newStr;
}

// //test
// let res=maskify('4556364607935616');
// res
// res=maskify('64607935616');
// res
// res=maskify('1');
// res
// res=maskify('');
// res
// res=maskify('Skippy');
// res
// res=maskify('Nananananananananananananananana Batman!');
// res

//Ex5.7 - shortest words
function shortestWords(str){
    let shortest=str.length;
    let count=0;
    let res=str.length
    res
    for(let i=0;i<str.length;i++){
        if(str[i]===' '){
         if(count<shortest){
            shortest=count;
         } 
         count=0; 
        }else{
            count++;
        }
     }
     // no space in the end 
     if(count<shortest){
        shortest=count;
     } 
     return shortest;
}
// //test
// let res=shortestWords('aa aa aaaa aaaa aaa aaaa');
// res
// res=shortestWords('6460793 561 6');
// res
// res=shortestWords('1234 12345 12 123');
// res

//Ex6.1 - Mumbling
function accum(str){
    let newStr='';
    for(let i=0;i<str.length;i++){
        for(let j=0;j<=i;j++){
            if(j===0){
                newStr+=str[i].toUpperCase();
                
            }else{
                newStr+=str[i].toLowerCase();
            }
        }
        if(i<str.length-1){
            newStr+='-'
        }
    }
    return newStr;
}
// //test
// let res=accum('abcd');
// res
// res=accum('RqaEzty');
// res
// res=accum('cwAt');
// res

//Ex6.2 - Counting Duplicates
function CountDuplicates(str){
    //a-z +0-9
    let histogram= new Array('z'.charCodeAt(0)-'a'.charCodeAt(0)+11);
    histogram.fill(0);
    // histogram
    // let res=histogram.length
    // res
    let count=0;
    let index=0;
    for(let i=0;i<str.length;i++){
        if(str[i]>='a'&&str[i]<='z'){
            index=str.charCodeAt(i)-'a'.charCodeAt(0);
            index
            histogram[index]++;
        }
        if(str[i]>='A'&&str[i]<='Z'){
            index=str.charCodeAt(i)-'A'.charCodeAt(0);
            index
            histogram[index]++;
        }
        if(str[i]>='0'&&str[i]<='9'){
            index=str.charCodeAt(i)-'0'.charCodeAt(0);
            index=index+26;
            index
            histogram[index]++;
        }
    }
    for(let i=0;i<histogram.length;i++){
        if(histogram[i]>1){
            count++;
        }
    }
    return count;
}
// // test
// let res=CountDuplicates('abcde');
// res
// res=CountDuplicates('aabbcde');
// res
// res=CountDuplicates('aabBcde');
// res
// res=CountDuplicates('indivisibility');
// res
// res=CountDuplicates('Indivisibilities');
// res
// res=CountDuplicates('aA11');
// res
// res=CountDuplicates('ABBA');
// res

//Ex6.4 - isogram
function isIsogram(str){
    let countDuplicates=CountDuplicates(str)
    if(countDuplicates>=1){
        return false;
    }
    return true;
}

// // test
// let res=isIsogram('Dermatoglyphics');
// res
// res=isIsogram('aba');
// res
// res=isIsogram('moOse');
// res
