
function encodeString(str) {
    let res = "";
    let count = 0;
    for(let i=0;i< str.length;i++) {
        if(!isNaN(str[i])) {
            res = res + str[i];
        }
        else {
            count++;
            if (i === str.length || str[i] !== str[i+1]) {
                res = res + str[i] + count;
                count = 0;
            }
        }
    }
    return res;
}

console.log(encodeString("aaa2bb5cccc7dddddd9"))