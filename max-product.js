

function maxProduct(arr) {
    let a = arr[0];
    let b = arr[1];

    for(let i=0; i<arr.length; i++) {
        for (let j=i+1; j< arr.length; j++) {
            if(arr[i]* arr[j] > (a * b)) {
                a= arr[i];
                b= arr[j];
            }
        }
    }
    return [a,b];
}

let a = [1,3,5,7];

console.log(maxProduct(a), maxProduct(a)[0] * maxProduct(a)[1])