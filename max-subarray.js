

function maxSubarray(arr) {
    let res = arr[0];
    let maxEnding = arr[0];
    for (let i=0; i<arr.length; i++) {
        maxEnding = Math.max(maxEnding+ arr[i], arr[i]);
        res = Math.max(res, maxEnding);
    }
    return res;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarray(arr));