const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr){
    let n = arr.length;
    for(let i=0; i<n; i++){
        if(arr[i]<arr[0]){
            // Move number to the first position
            arr.unshift(arr.splice(i,1)[0]);
        }else {
            // Find where number should go
            for(let j=1; j<i; j++){
                if((arr[i]>arr[j-1]) && (arr[i]<arr[j])){
                    // Move number to the right spot
                    arr.splice(j, 0, arr.splice(i,1)[0]);
                }
            }
        }
    }
    return arr;
}


console.log(insertionSort(numbers));



/* 
Time Complexity:
best:- O(n)
Average: O(n^2)
worst: O(n^2)


Space Complexity:
worst:- O(1)
*/