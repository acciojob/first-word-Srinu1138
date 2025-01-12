function firstWord(s) {
  // your code here
let s = "see and stop";
let n = s.length;
let ans ='';
for (let i=0; i<n; i++){
    if(s[i]!=" "){
        ans = ans+s[i];
    }else{
        break;
    }
}
console.log(ans);
}
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
