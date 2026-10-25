//global 

const browserVersion = 'chrome'

function getBrowserVersion(){
    console.log(browserVersion);
    
}
getBrowserVersion()
//console.log(browserVersion);


//function scope with block

function getBrowserVersion() {
    var browserVersion = 'chrome'
    console.log('Accessing it inside the function :', browserVersion);
    if (true) {
        let browserVersion = 'Chrome'
        
        
    }
    console.log('Accessing it inside the function and outside the block : ', browserVersion);
    
}