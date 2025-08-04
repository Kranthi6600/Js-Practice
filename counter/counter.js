const count = document.querySelector('.value');
const increment = document.querySelector('.btn1');
const decrement = document.querySelector('.btn2');

let value = 0;

const update = () => {
    count.textContent = value
}

update()

increment.addEventListener('click', ()=> {
    value += 1;
    update()
})


decrement.addEventListener('click', ()=> {
    value -= 1;
    update()
})


