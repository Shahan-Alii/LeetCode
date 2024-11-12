/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    

var counter=0;



for(let i=2;i<s.length ;i++){

let a = s[i-2];
let b = s[i-1];
let c = s[i];

if(a!=b && a!=c && b!=c){
    counter++;
}

}

return counter;

};