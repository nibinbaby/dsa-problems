


function longestSubstring(str) {

    let n = str.length;
    let res = 0;

    for (let i=0; i< str.length;i++) {
        let seen = new Array(256).fill(false)
        for(let j=i;j< str.length;j++){
            if(seen[str.charCodeAt(j)] == true)
                break;
            else {
                res = Math.max(res, j-i+1);
                seen[str.charCodeAt(j)] = true;
            }

        }
    }
    return res;
}

let str= "geeksforgeeks";
console.log(longestSubstring(str))