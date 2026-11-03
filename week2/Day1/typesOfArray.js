// push(), pop(), unshif(), shift(), includes(), indexOf(), sort(), join(), reverse()

let Arra = ['Sathish', 7, true]
//push()
console.log(Arra.push('new','Bike'));
console.log(Arra);
//pop()
let poparr = Arra.pop()
console.log(Arra);
//shitf
let shifarr = Arra.shift('Sathish')
console.log(Arra);
//unshift()
let unshiarr = Arra.unshift('Mr', 5011)
console.log(Arra);
//inclueds()
console.log(Arra.includes(5011));
//indexOf() 
console.log(Arra.indexOf(5011));
//join()
let num = [10,30,20,40] 
console.log(typeof num.join());
//reverse()
let rev = Arra.reverse()
console.log(Arra);
//sort()
let sor = num.sort()
console.log(num.sort((a,b) => a-b));
console.log(num.sort((a,b) => b - a));











