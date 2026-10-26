// to find the number is positive, negative or zero

function number(num) {
    if (num > 0) {
        return 'Positive'
        
    }
    else if (num < 0) {
        return 'Negative'
        
    }
    else {
        return 'Zero'
    }
    
}
let num = -7

console.log(number(num));

