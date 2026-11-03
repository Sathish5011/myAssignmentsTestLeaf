let arr = [10, 20, 30]
sum = 0

for (let i = arr.length - 1; i >= 1; i--) {
    
    sum = sum += arr[i]
}
console.log(`sum of array is ${sum}`);
