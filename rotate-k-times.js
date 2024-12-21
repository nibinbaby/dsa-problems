

function rotateArray(arr, k) {
    let startPos = arr.length - k;
    let res =[];
    for(let i=startPos;i<arr.length; i++){
        res.push(arr[i])
    }
    for(let i=0;i<startPos; i++){
        res.push(arr[i])
    }
    return res;
}

let array = [1,2,3,4,5];
console.log(rotateArray(array, 2))


function rotateArrayRec(arr, k) {
    let n = arr.length;
    if(k == 0)
        return

    let tmp = arr[n-1];
    for( let i= n-1; i>0;i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = tmp;
    rotateArrayRec(arr, k-1)
}
let ar = [1,4,7,8,3,5]
rotateArrayRec(ar, 2)

console.log(ar)