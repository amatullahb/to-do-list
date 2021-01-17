const addBtn = document.querySelector('#addBtn');
const clearBtn = document.querySelector('#clearBtn');
const list = document.querySelector('#todo');

document.querySelector('#newItem').addEventListener('click', () => {
    document.querySelector('#newItem').value = "";
});

newItem.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const newItem = document.querySelector('#newItem').value;
        addToList(newItem);
    }
});

addBtn.addEventListener('click', () => {
    const newItem = document.querySelector('#newItem').value;
    addToList(newItem);
});

clearBtn.addEventListener('click', () => {
    console.log(list.length)
    console.log(list)
    while (list.children.length > 0) {
        list.removeChild(list.children[0]);
    }
});

function addToList(item) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${item}</span><span><img class="check" src="imgs/check.jpg" alt="checkmark" width="15px" height="15px"><img class="edit" src="imgs/pencil.jpg" alt="edit" width="15px" height="15px"><img class="remove" src="imgs/x.jpg" alt="remove" width="15px" height="15px"></span>`;
    if (list.children.length > 0) {
        list.insertBefore(li, list.children[0]);
    } else {
        list.append(li);
    }
}

list.addEventListener('click', (event) => {
    if (event.target.className == 'check') {
        let li = event.target.parentNode.parentNode;
        li.classList.add('complete');
        let imgs = li.lastElementChild.children;
        for (let i=0; i<imgs.length; i++) {
            imgs[i].classList.add('hide');
        }
        for (let i=0; i<list.children.length; i++) {
            if (list.children[i] == li) {
                let item = list.removeChild(list.children[i]);
                list.append(item);
            }
        }
    } else if (event.target.className == 'remove') {
        list.removeChild(event.target.parentNode.parentNode);
    } else if (event.target.className == 'edit') {
        let span = event.target.parentNode.previousElementSibling;
        span.setAttribute('contenteditable', 'true');
        span.style.backgroundColor = "Honeydew";
        document.addEventListener('click', (event) => {
            let inside = span.parentNode.contains(event.target);
            if (!inside) {
                span.setAttribute('contenteditable', 'false');
                span.style.backgroundColor = "White";
            }
        });
    }
});

let checks = document.querySelectorAll('.check');
for (let i=0; i<checks.length; i++) {
    checks[i].addEventListener('click', (event) => {
        let li = event.target.parentNode.parentNode;
        li.classList.add("complete");
    });
}