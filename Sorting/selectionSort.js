const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr){
    let n = arr.length;
    for(let i=0; i<n; i++){
        let min = i;
        let temp = arr[i];
        for(let j=i+1; j<n; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        arr[i] = arr[min];
        arr[min] = temp; 
    }
    return arr;
}

console.log(selectionSort(numbers));


/* 
Time Complexity:
best:- O(n^2)
Average: O(n^2)
worst: O(n^2)


Space Complexity:
worst:- O(1)
*/