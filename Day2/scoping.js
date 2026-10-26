// global scope

let genderType = 'female'

function printGender() {
    let color = 'brown'

    if (genderType.startsWith('female')) {
        var age = 30
        console.log('Checking whether it is starting with female:', genderType);
        
        let color = 'pink'
        console.log('Color:', color);
        
    }
    console.log('Age outside function:', age);
    console.log('Color inside function:', color);
    
}
printGender()
console.log('Global gender type:', genderType);

genderType = 'Male'
printGender()
console.log('Updated gender type:', genderType);

