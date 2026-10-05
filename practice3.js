console.log("Own Practice Session using Function");

function checkPalindrome(word){
let reversed = ""

for(let i=word.length-1; i>=0; i--){
    reversed = reversed + word[i]
}
    if(reversed === word){
console.log(word + "= Palindrome")
    }
    else
        {
        console.log(word + "= Not a Palindrome")
    }
}
checkPalindrome("MADAM");
checkPalindrome("TESTLEAF");
checkPalindrome("LEVEL");