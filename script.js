// let arr = [10 , 2 ,78, 100, 4];
// let max = arr[0];
// for(let i = 1 ; i<arr.length; i++){
//    if(max > arr[i]){
//     max = arr[i];
//    }
// }

// console.log(max )

// let arr = [10, 30 , 56 , 43 , 29 , 64 , 60];

// let max = Math.min(arr[0], arr[1]);
// let sMax = Math.max(arr[0], arr[1]);

// for(let i=2; i<arr.length;i++){
//   if(arr[i]< max){
//     sMax = max
//     max = arr[i];
// }else if(arr[i] < sMax){
//   sMax = arr[i]
// }
// }

// console.log(sMax);
// let arr = [10, 20, 30, 40 ,50];
// let temp = new Array(arr.length);

// let j = 0
// for(let i = arr.length-1; i>=0; i--){
//   temp[j] = arr[i];
//   j++
// }
// console.log(temp);

// let arr = [-2, 4 ,5 , -6 , -9, 11, -12 , 14];
// let i = 0, j = 0;
// while(i<arr.length){
//   if(arr[i] < 0){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp;
//     j++
//   }
//   i++
// }
// console.log(arr)
// let arr =[1  ,2 , 3 , 4, 5]
// let copy = arr[0];
// for ( i = 0; i<arr.length-1; i++) {
//      arr[i] = arr[i+1];
//      }
//      arr[arr.length-1] = copy

//      console.log(arr);

// let arr = [1 ,2 , 3 , 4 , 5]
// let copy = arr[arr.length-1]
// for (i < arr.length-1;  i>0; i--) {

// }
// let arr = [1 ,2 ,3 ,4 ,5]

// for (let j = 0; j <2; j++){
//     let copy = arr[0]
//     for(let i = 0; i <arr.length-1; i++){
//        arr[i] = arr[i+1];

//     }
//     arr[arr.length-1] = copy;

// }
// console.log(arr)

var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if ((arr[i], min)) min = arr[i];
    let profit = arr[i] - min;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};
