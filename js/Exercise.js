// Question 1
/* Given an array of different numbers, remove all duplicate numbers, 
and return the numbers duplicates without as seen below
[2,4,5,2,6,3,5] => [4,3,6]
*/

let numbers =  [2,4,5,2,6,3,5] ;
  function removeDupNumbers (arr1){
let nwNumbers = [];
   for (let i=0; i<arr1.length;i++){
       let value = arr1[i]
       if (nwNumbers.indexOf(value)=== -1){
    // for (let j=0; j<arr1.length;j++){
        // if(arr1[i]===arr1[j] && i!==j ) break;
        // else if (j === arr1.length -1){
            nwNumbers.push(arr1[1]) 
        }
    } 
    return nwNumbers 
   }
   console.log(removeDupNumbers(numbers));


 



/*Question 2 
Display the highest character in a given as string as seen below
look {l=1, o=2, k=1}
drill{d=1, r=l, r=1, l=2}
*/

function letterCounts (str){

    let arr1  = str.split('');
    let letter = [];
    let count = 1;

    for( let i=0; i<arr1.length; i++ ){
    if (arr1[1] ===arr1[i=1]){
        count++;
    }
    else{
        let val = `${count}${arr1[i]}`;
        letter = [...letter,val];
        count = 1
}
    }
     return letter.join("")
 }

 console.log(letterCounts('look'))





// Question 3
// Given an array of numbers, return the second smallest and second largest number in the array

// to get second largest number

const getsecondLargestNumber = (arr = [2,3,4,6,7]) =>{
    let largestNumber = arr[0];
    let secondLargestNumber = arr[0];


    for(let i=0; i<largestNumber.lenght; i++){
        if (arr[i] > largestNumber){
            secondLargestNumber = largestNumber;
            largestNumber = arr[i];
        } else if (arr[i]>secondLargestNumber){
            secondLargestNumber = arr[i];
        }
    }
    return secondLargestNumber
}

// to get lowest number

const getsecondlowestNumber = (arr = [2,3,4,6,7]) =>{
    let lowestNumber = arr[0];
    let secondLowestNumber = arr[0];


    for(let i=0; i<lowestNumber.lenght; i++){
        if (arr[i] > lowestNumber){
            secondLowestNumber = lowestNumber;
            lowestNumber = arr[i];
        } else if (arr[i]>secondLowestNumber){
            secondLowestNumber = arr[i];
        }
    }
    return secondLowestNumber
}

console.log(secondLowestNumber)