// ******************************************************************


// setting timeout for #spidey to change to spiderman

setTimeout(() => {
    document.getElementById('spidey').innerHTML = 'SpiderMan'
    console.log('spiderman')
}, 2000)


// setting timeout to #kratos to change into Kratos

setTimeout(() => {
    document.getElementById('kratos').innerHTML = 'Kratos'
    console.log('kratos')
}, 3000);

// **************************************************************

// setting timeout to log spidey in console

const timeOut = setTimeout(() => {
    console.log('spidey')
}, 2000);

// clear timeout for logging spidey in console using first stop button

document.getElementById('stop').addEventListener('click', () => {
    clearTimeout(timeOut)
})

// *******************************************************************


// intervel here goes to second buttons only on consoles

let interval1 // should declare globally, without this we can't stop the interval

document.getElementById('start1').addEventListener('click', () => {
    interval1 = setInterval(() => {
    console.log('SpiderMan 2')
    console.log('Kratos 2')
    }, 1000);
})


document.getElementById('stop2').addEventListener('click', () => {
    clearInterval(interval1) // we took interval1 from global scope
})

// ***************************************************************************
