var longestPalindrome = function(s) {
    if(s.length < 1 || s === null){
        return ""
    }
    
    let start = 0, end = 0;
    for(let i = 0; i < s.length; i++){
        let len1 = findPalindrome(s, i, i);
        let len2 = findPalindrome(s, i, i+1);
        let len = Math.max(len1, len2)
        if(len > (end - start)){
            console.log(i)
            start = Math.ceil(i - (len - 1)/2);
            end = Math.floor(i + len/2);
        }
    }
    console.log(start, end)
    return s.slice(start, end + 1);
};

function findPalindrome(s, left, right) {
    
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
    }
    
    return right - left - 1
};

module.exports = longestPalindrome
