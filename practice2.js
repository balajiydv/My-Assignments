console.log("OWN PRACTICE SESSION");
let word = "MADAM";
let reversed = "";

for(let i = word.length-1; i >= 0; i--){

   reversed = reversed + word[i]
}
if(reversed === word){
    console.log("MADAM = Palindrome")
}
else {
    console.log("Not a Palindrome")
}

let word1 = "TESTLEAF"
reversed = ""

for(let i = word1.length-1; i>=0; i--){
    reversed = reversed + word1[i]
}
if(reversed === word1){
    console.log("Palindrome")
}
else{console.log("TESTLEAF = Not a Palindrome")

}

let word2 = "LEVEL"
reversed = ""

for(let i = word2.length-1; i>=0; i--){
reversed = reversed + word2[i]
}
    if(reversed === word2) {

    console.log("LEVEL = Palindrome")
}
else {
    console.log("Not a Palindrome")
}
