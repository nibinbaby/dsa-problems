

function groupNonZeros(arr) {
    let n = arr.length;
    let idx = 0;
    for (let i=0; i< n ; i++) {
        if (arr[i] != 0) {
            arr[idx] = arr[i];
            idx++;
        }
    }
    for (let i=idx; i<n;i++){
        arr[i] = 0;
    }

    return arr;
}

console.log(groupNonZeros([1,0,4,0,5,0,7]))