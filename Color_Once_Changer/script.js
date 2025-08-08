const bgColor = document.querySelectorAll('.button');
const body = document.querySelector('body');


// console.log(bgColor.length)

bgColor.forEach(item => {
    // console.log(item)
    // console.log(item.target)
    item.addEventListener('click', (e) => {
        if (e.target.id === 'grey') {
            // console.log(e.target.id)
            body.style.backgroundColor = 'rgb(136, 134, 134)'
        }
        if (e.target.id === 'blue') {
            // console.log(e.target.id)
            body.style.backgroundColor = 'rgb(37, 95, 255)'
        }
        if (e.target.id === 'red') {
            // console.log(e.target.id)
            body.style.backgroundColor = 'rgb(255, 0, 0)'
        }
        if (e.target.id === 'orange') {
            // console.log(e.target.id)
            body.style.backgroundColor = 'rgb(255, 100, 11)'
        }
        if (e.target.id === 'green') {
            // console.log(e.target.id)
            body.style.backgroundColor = 'rgb(47, 255, 47)'
        }
        if (e.target.id === 'yellow') {
            // console.log(e.target.id)
            body.style.backgroundColor = 'rgb(255, 240, 25)'
        }
        if (e.target.id === 'white') {
            // console.log(e.target.id)
            body.style.backgroundColor = 'rgba(255, 255, 255, 1)'
            body.style.color = 'black'
        }
    })
})

