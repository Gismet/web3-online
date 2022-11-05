const li = document.querySelector('li');
const btn = document.querySelector('.add-btn');
const ul = document.querySelector('ul');
let inputs;
let allList;

let close = document.getElementsByClassName("close");
let i;
close[0].onmouseover = function () {
    close[0].src = './images/close_hovered.png';
}
close[0].onmouseout = function () {
    close[0].src = './images/close.png';
}
btn.addEventListener('click', event => {
    let newItem = document.createElement('li');
    let input = document.createElement('input');
    let img = document.createElement('img');
    img.className = "close";
    img.src = './images/close.png';
    input.type = "text";
    newItem.appendChild(input);
    newItem.appendChild(img);
    ul.append(newItem);

    // when mouseover and mouseout events happen

    for (let j of close) {
        j.onmouseover = function (event) {
            event.target.src = './images/close_hovered.png';
        }
        j.onmouseout = function (event) {
            event.target.src = './images/close.png';
        }
    }

    allList = document.querySelectorAll('li');
    inputs = document.querySelectorAll('input');
    if (allList.length > 6) {
        ul.style.overflowY = 'scroll';
    }
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            if (close.length > 1) {
                div.remove();
                allList = document.querySelectorAll('li');
                inputs = document.querySelectorAll('input');
            } else {
                alert("Can't delete single to-do!");
            }

            if (allList.length <= 6) {
                ul.style.overflowY = 'hidden';
            }
        }
    }
})



// sotr button's behavior when moused over and moused out.
let sortIcon = document.querySelector('.sort-icon img');
sortIcon.addEventListener('mouseover', event => {
    if (event.target.alt == 'asc') {
        event.target.src = './images/asc_hovered.png';
    } else {
        event.target.src = './images/desc_hovered.png';
    }
}
);
sortIcon.addEventListener('mouseout', event => {
    if (event.target.alt == 'asc') {
        event.target.src = './images/asc.png';
    } else {
        event.target.src = './images/desc.png';
    }
});
sortIcon.addEventListener('click', event => {
    let newInputs = [];
    if (event.target.alt == 'asc') {
        event.target.src = './images/desc_hovered.png';
        event.target.alt = 'desc';
        for (let i = 0; i < allList.length; i++) {
            newInputs.push(inputs[i].value);
        }
        newInputs.sort((a, b) => {
            let x = a.toLowerCase();
            let y = b.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        });
        for (let i = 0; i < newInputs.length; i++) {
            inputs[i].value = newInputs[i];
        }
    } else {
        event.target.src = './images/asc_hovered.png';
        event.target.alt = 'asc';
        for (let i = 0; i < allList.length; i++) {
            newInputs.push(inputs[i].value);
        }
        newInputs.sort((a, b) => {
            let x = a.toLowerCase();
            let y = b.toLowerCase();
            if (x < y) { return 1; }
            if (x > y) { return -1; }
            return 0;
        });
        for (let i = 0; i < newInputs.length; i++) {
            inputs[i].value = newInputs[i];
        }
    }
})