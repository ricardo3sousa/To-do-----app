let date = document.querySelector('.date');
let btn = document.querySelector('.add');
let input = document.querySelector('input');
let list = document.querySelector('.list');
let inputBox = document.querySelector('.input');

btn.addEventListener('click', function () {
    inputBox.classList.toggle('show');
    btn.classList.toggle('closeBtn');
})

const today = new Date();
const options = {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
};
date.innerHTML = today.toLocaleDateString('en-US', options);


const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';


function add(tarefa, done) {
    let DONE;
    if (done) {
        DONE = CHECK;
    } else {
        DONE = UNCHECK;
    }
    const LINE = done ? LINE_THROUGH : '';

    list.insertAdjacentHTML('beforeend',
        `<div class="row">
            <i class="fa fa-circle-thin ${DONE} ic" job="complete"></i>
            <span class="text ${LINE}">${tarefa}</span>
            <i class="fa fa-trash-o ic right" job="delete"></i>
        </div>`);
}

input.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        adiciona();
    }
})


function adiciona() {
    const value = input.value;
    if (value) {
        add(value, false);
        input.value = '';
    }
}


list.addEventListener('click', function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;
    
    if(elementJob == 'complete'){
        completed(element);
    }else if(elementJob == 'delete'){
        removeToDo(element);
    }
})

function completed(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
}


function removeToDo(element){
 element.parentNode.parentNode.removeChild(element.parentNode);
}
