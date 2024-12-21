
function groupAnagrams(arr) {
    let group = {};
    for (item in arr) {
        let sortedAnagram = arr[item].split("").sort().join("");
        if(!group[sortedAnagram]) {
            group[sortedAnagram] = []
        }899
        group[sortedAnagram].push(arr[item]);
    }
    return Object.values(group)
}

let ar = ["cat","dog", "tac", "act", "god"];

console.log(groupAnagrams(ar))