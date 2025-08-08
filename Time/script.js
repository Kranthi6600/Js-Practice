const clock = document.querySelector('.clock');

setInterval(() => {
    let date = new Date()
    const time = date.toLocaleTimeString()
    const currdate = date.toLocaleDateString()

    clock.innerHTML = `${currdate} | ${time}`

}, 1000)


// to insert multiple thing on screen we should store them first
