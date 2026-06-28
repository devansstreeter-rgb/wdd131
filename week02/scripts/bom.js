const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
let listCount = 0;

button.addEventListener('click', function () {
    if (listCount < 10) {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            li.textContent = input.value;
            deleteButton.textContent = '❌';
            li.append(deleteButton);
            list.appendChild(li);
            listCount++;
            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                listCount--;
                input.focus();
            });
            input.value = '';
        }
    } else {
        input.value = '';
    }
    input.focus();
});

