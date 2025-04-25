// Находим элементы на странице

const pairInput = document.getElementById('input');
const pairList = document.getElementById('pairList');
const addBtn = document.getElementById('addBtn');
const sortNameBtn = document.getElementById('sortNameBtn');
const sortValueBtn = document.getElementById('sortValueBtn');
const deleteBtn = document.getElementById('deleteBtn');
const inputError = document.getElementById('inputError');
console.log(pairInput,pairList,addBtn,sortNameBtn,sortValueBtn,deleteBtn);

// Вешаем обработчик событий

addBtn.addEventListener('click', () => {
    inputError.textContent = '';
    const text = pairInput.value;
    const parts = text.split('=');
    if (parts.length !== 2) {
        inputError.textContent = 'Укажите имя и значение через "=" ';
        return;
    }
    const name = parts[0]
    const value = parts[1]

    if (name === '') {
        inputError.textContent = 'Введите имя до знака "="';
        return;
    } else if (value === '') {
        inputError.textContent = 'Введите значение после знака "="';
        return;
    }


    const option = document.createElement('option');
    option.textContent = name + '=' + value;
    pairList.appendChild(option);
    pairInput.value = '';
})












sortNameBtn.addEventListener('click', () => {
    console.log("sort name clicked");
})
sortValueBtn.addEventListener('click', () => {
    console.log("sort value clicked");
})
deleteBtn.addEventListener('click', () => {
    console.log("delete button clicked");
})
