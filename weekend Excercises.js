//// 1.1,
////  2.1,
//  2.3,
//  2.4,
//  2.5,
//  2.6,
//  2.7,
//  4.1,
//  5.1
// 5.2
// 5.3,
//  5.5,
//  5.6
//  5.7,
//  6.1,
//  6.2,
//  6.4
//Ex1.1 - Yes or No
// const ex1={
//     yesNO : function(bool){
//         if(bool){
//             return 'Yes';
//         }
//         return 'NO';
//     },
// };

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
//test
let res=lowestNumbers([19, 5, 42, 2, 77]);
res;
res=lowestNumbers([10, 343445353, 3453445, 3453545353453]);
res;





