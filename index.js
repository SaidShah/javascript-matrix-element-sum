//  [[1,0,4,9],
//   [0,4,3,0],
//   [9,3,4,6]]
//
//  [[1,x,4,9],
//   [x,x,3,x],
//   [x,x,4,x]]
//
// the sum would be 21
// if there is a 0 anywhere in the array all numbers below that number will not be counted
//

let arr =  [[1,0,4,9],
            [0,4,3,0],
            [9,3,4,6]]

let sum=0
for(let i = 0; i < arr[0].length;i++){
  for(let j = 0; j< arr.length; j++){
    if(arr[j][i] > 0){
      sum += arr[j][i]
    }else{
      break
    }
  }
}
console.log(sum)
