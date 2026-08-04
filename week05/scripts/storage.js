const input = document.querySelector('#favchap');
const button = document.getElementById('add');
const list = document.querySelector('#list');
let listCount = 0;

const chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {displayList(chapter)});

button.addEventListener('click', () => {
    if (listCount < 10) {
        if (input.value != '') {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
        }
    }
    input.value = '';
    input.focus();
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    listCount++;
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        listCount--;
        input.focus();
    });
    inputValue = '';
}

function setChapterList() {
    localStorage.setItem('myFavBomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
}