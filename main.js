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
    const name = parts[0].trim();
    const value = parts[1].trim();

    // проверка на alphanumeric
    const alphaNum = /^[A-Za-z0-9]+$/;
    if (!alphaNum.test(name) || !alphaNum.test(value)) {
        inputError.textContent = 'Имя и значение — только буквы и цифры';
        return;
    }


    if (name === '') {
        inputError.textContent = 'Введите имя до знака "="';
        return;
    } else if (value === '') {
        inputError.textContent = 'Введите значение после знака "="';
        return;
    }

    //  создаём <li>
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    //  собираем все вместе: сначала чекбокс, потом текст
    li.appendChild(checkbox);
    li.append(name + '=' + value);
    //  добавляем в наш <ul id="pairList">
    pairList.appendChild(li);
    //очищаем строку
    pairInput.value = '';
    // Возращем обратно фокус после того как нажали на "Enter" или кнопку "Add"
    pairInput.focus();
})

    //  Кнопка "Enter"

pairInput.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
        addBtn.click();
    }
});

// сортируем по имени

sortNameBtn.addEventListener('click', () => {
    console.log(pairList);


    const nodeListName = document.querySelectorAll('#pairList li');
    const massName = Array.from(nodeListName);
    console.log(massName);

    massName.sort((a, b) => {
        const nameA = a.textContent.split('=')[0];
        const nameB = b.textContent.split('=')[0];
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    pairList.innerHTML = '';
    console.log(massName);
    massName.forEach(value => pairList.appendChild(value));
});

// Сортируем по Value

sortValueBtn.addEventListener('click', () => {

    const nodeListValue = document.querySelectorAll('#pairList li');
    const massValue = Array.from(nodeListValue);

    massValue.sort((a, b) => {
        const nameA = a.textContent.split('=')[1];
        const nameB = b.textContent.split('=')[1];
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    })
    pairList.innerHTML = '';
    console.log(massValue);
    massValue.forEach(value => pairList.appendChild(value));

//  Удаляем после того как выберем какой-то чекбокс
})
deleteBtn.addEventListener('click', () => {
    document.querySelectorAll('#pairList li').forEach(li => {
            const chk = li.querySelector('input[type="checkbox"]');
            if (chk.checked) {
                li.remove();
            }
        });
});

