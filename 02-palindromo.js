function isPalindrome(str){
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('')
    return cleanedStr == reversedStr;
}

console.log(isPalindrome('reconocer'));
console.log(isPalindrome('javascript'))