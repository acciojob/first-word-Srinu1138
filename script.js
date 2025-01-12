function firstWord(s) {
  // your code here
let n = s.length;
let ans ='';
while(i<n && s[i]===" "){
	i++;
}while (i<n && s[i]!= " "){
	ans = ans+s[i];
}
console.log(ans);
}
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
