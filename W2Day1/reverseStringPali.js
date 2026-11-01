function reverse(st) {
    let stri = st.split('') 
    let rev = ''

    for (let i = st.length - 1; i >= 0; i--) {
        rev += stri[i]
        
    }
    console.log(rev);
    return rev
}
function ispalindrome(st) {
    let rev = reverse(st)
    return st === reverse(st)
}
console.log(ispalindrome('madam'));
console.log(ispalindrome('war'));




