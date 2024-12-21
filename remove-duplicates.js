

function removeDuplicatesBySet(arr) {
    let st = new Set();
    let idx = 0;
    for (let i=0; i<arr.length; i++) {
        if(arr.length === 1) {
            arr[idx] = arr[i]
        }
        if(!st.has(arr[i])){
            st.add(arr[i])
            arr[idx++] = arr[i]
        }
    }
    return idx;
}

let array = [1,2,2,3,3,4];

let res = removeDuplicatesBySet(array);

console.log(array.splice(0, res).join(" "))

function removeDuplicates(arr) {
    let idx = 0;
    for (let i=0; i<arr.length; i++) {
        if(arr.length <= 1){
            arr[idx] = arr[i];
        }
        if(arr[i] !== arr[i+1]) {
            arr[idx] = arr[i];
            idx++;
        }
    }
    return idx;
}


let array1 = [5,5,6,7,8,9,9];
let result = removeDuplicates(array1);

console.log(array1.splice(0, result).join(" "))