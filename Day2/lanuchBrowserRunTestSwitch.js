function launchBrowser(browserName) {
    
    if (browserName === 'chrome') {
        console.log('Chrome is launched');
        
        
    }
    else {
        console.log('Other brwser is launched');
        
    }
}
function runTest(testType) {
    switch (testType) {
        case 'smoke':
            console.log('Running smoke testing');
            
            break;

            case 'sanity':
            console.log('Running sanity testing');
            break;

            case 'regression':
            console.log('Running regression testing');
            break;

    
        default:
            console.log('Running smoke testing');
            break;
    }
    
}
let browserName = 'chrome'
let testType = 'Sanity'

console.log(launchBrowser(browserName));
console.log(runTest(testType));

