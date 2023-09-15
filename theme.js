// |===============<< Color Elements Selection >>===============|
let lightColor = document.querySelector('.light-color');

let darkColor = document.querySelector('.dark-color');

let blueColor = document.querySelector('.beautiful-blues');

let pinkColor = document.querySelector('.beautiful-pink');

let googleColor = document.querySelector('.google-colors');

let metroUiColor = document.querySelector('.metro-ui');
// |===============<< XXXXXX >>===============|

// |===============<< Select Element's Which has color >>===============|
let bodyElement = document.querySelector('body');

let mainTitle = document.querySelector('h1');

let todoContainer = document.querySelector('.container');

let inputAreaBox = document.querySelector('.todo-input-area');

let submitBtn = document.querySelector('#todo-submit-btn');

let hrLines = document.querySelectorAll('.hr-line');


// |===============<< XXXXXX >>===============|

// |===============<< Theme Change Functionality >>===============|
    // |===============<< For Light Color Theme >>===============|
lightColor.addEventListener('click', function() {
    bodyElement.style.backgroundColor = '#eee3e7';
    mainTitle.style.color = '#000';
    todoContainer.style.backgroundColor = '#f6abb6';
    inputAreaBox.style.backgroundColor = '#ead5dc';
    inputAreaBox.style.color = '#000';
    inputAreaBox.setAttribute('id', 'todo-input-area-black');
    submitBtn.addEventListener('mouseover', function() {
        submitBtn.style.color = 'rgba(0, 0, 0, 0.5)';
        submitBtn.style.backgroundColor = '#ead5dc';
    })
    submitBtn.addEventListener('mouseout', function() {
        submitBtn.style.color = '#000';
        submitBtn.style.backgroundColor = '#fff';
    })
    hrLines[0].style.backgroundColor = '#eee3e7';
    hrLines[1].style.backgroundColor = '#eee3e7';

    let eachListTodo = document.querySelectorAll('.each-list-text');
    for(let i = 0; i < eachListTodo.length; i++) {
        eachListTodo[i].style.backgroundColor = '#eec9d2';
        eachListTodo[i].style.borderColor = '#eee3e7';
        eachListTodo[i].style.color = '#000';
    }


    let listBtns = document.querySelectorAll('.todo-list-btn');
    for(let j = 0; j < listBtns.length; j++) {
        listBtns[j].style.backgroundColor = '#eee3e7';
        listBtns[j].style.borderColor = '#eee3e7';
    }
})
    // |===============<< XXXXXX >>===============|

    // |===============<< For Dark Color Theme >>===============|
    darkColor.addEventListener('click', function() {
        bodyElement.style.backgroundColor = '#6e7f80';
        mainTitle.style.color = '#fff';
        todoContainer.style.backgroundColor = '#36454f';
        inputAreaBox.style.backgroundColor = '#536872';
        inputAreaBox.style.color = '#fff';
        inputAreaBox.removeAttribute('id');
        submitBtn.addEventListener('mouseover', function() {
            submitBtn.style.color = 'rgba(255, 255, 255, 0.8)';
            submitBtn.style.backgroundColor = '#536872';
        })
        submitBtn.addEventListener('mouseout', function() {
            submitBtn.style.color = '#000';
            submitBtn.style.backgroundColor = '#fff';
        })
        hrLines[0].style.backgroundColor = '#6e7f80';
        hrLines[1].style.backgroundColor = '#6e7f80';
    
        let eachListTodo = document.querySelectorAll('.each-list-text');
        for(let i = 0; i < eachListTodo.length; i++) {
            eachListTodo[i].style.backgroundColor = '#708090';
            eachListTodo[i].style.borderColor = '#6e7f80';
            eachListTodo[i].style.color = '#fff';
        }
    
    
        let listBtns = document.querySelectorAll('.todo-list-btn');
        for(let j = 0; j < listBtns.length; j++) {
            listBtns[j].style.backgroundColor = '#6e7f80';
            listBtns[j].style.borderColor = '#6e7f80';
        }
    })
    // |===============<< XXXXXX >>===============|

    // |===============<< For Beautiful Blues Color Theme >>===============|
    blueColor.addEventListener('click', function() {
        bodyElement.style.backgroundColor = '#011f4b';
        mainTitle.style.color = '#000';
        todoContainer.style.backgroundColor = '#b3cde0';
        inputAreaBox.style.backgroundColor = '#03396c';
        inputAreaBox.style.color = '#fff';
        inputAreaBox.removeAttribute('id');
        submitBtn.addEventListener('mouseover', function() {
            submitBtn.style.color = 'rgba(255, 255, 255, 0.8)';
            submitBtn.style.backgroundColor = '#03396c';
        })
        submitBtn.addEventListener('mouseout', function() {
            submitBtn.style.color = '#000';
            submitBtn.style.backgroundColor = '#fff';
        })
        hrLines[0].style.backgroundColor = '#011f4b';
        hrLines[1].style.backgroundColor = '#011f4b';
    
        let eachListTodo = document.querySelectorAll('.each-list-text');
        for(let i = 0; i < eachListTodo.length; i++) {
            eachListTodo[i].style.backgroundColor = '#005b96';
            eachListTodo[i].style.borderColor = '#011f4b';
            eachListTodo[i].style.color = '#fff';
        }
    
    
        let listBtns = document.querySelectorAll('.todo-list-btn');
        for(let j = 0; j < listBtns.length; j++) {
            listBtns[j].style.backgroundColor = '#011f4b';
            listBtns[j].style.borderColor = '#011f4b';
        }
    })
    // |===============<< XXXXXX >>===============|

    // |===============<< For Perfect Pink Color Theme >>===============|

              // Default Theme. Just reload Web Page.

    // |===============<< XXXXXX >>===============|

    // |===============<< For Google Color Theme >>===============|
    googleColor.addEventListener('click', function() {
        bodyElement.style.backgroundColor = '#008744';
        mainTitle.style.color = '#000';
        todoContainer.style.backgroundColor = '#fff';
        inputAreaBox.style.backgroundColor = '#0057e7';
        inputAreaBox.style.color = '#fff';
        inputAreaBox.removeAttribute('id');
        submitBtn.style.backgroundColor = '#ffa700';
        submitBtn.addEventListener('mouseover', function() {
            submitBtn.style.color = '#fff';
            submitBtn.style.backgroundColor = '#0057e7';
        })
        submitBtn.addEventListener('mouseout', function() {
            submitBtn.style.color = '#000';
            submitBtn.style.backgroundColor = '#ffa700';
        })
        hrLines[0].style.backgroundColor = '#008744';
        hrLines[1].style.backgroundColor = '#008744';
    
        let eachListTodo = document.querySelectorAll('.each-list-text');
        for(let i = 0; i < eachListTodo.length; i++) {
            eachListTodo[i].style.backgroundColor = '#d62d20';
            eachListTodo[i].style.borderColor = '#008744';
            eachListTodo[i].style.color = '#fff';
        }
    
    
        let listBtns = document.querySelectorAll('.todo-list-btn');
        for(let j = 0; j < listBtns.length; j++) {
            listBtns[j].style.backgroundColor = '#008744';
            listBtns[j].style.borderColor = '#008744';
        }
    })
        // |===============<< XXXXXX >>===============|

    // |===============<< For Metro UI Color Theme >>===============|
    metroUiColor.addEventListener('click', function() {
        bodyElement.style.backgroundColor = '#d11141';
        mainTitle.style.color = '#000';
        todoContainer.style.backgroundColor = '#ffc425';
        inputAreaBox.style.backgroundColor = '#00b159';
        inputAreaBox.style.color = '#000';
        inputAreaBox.setAttribute('id', 'todo-input-area-black');
        submitBtn.addEventListener('mouseover', function() {
            submitBtn.style.color = 'rgba(255, 255, 255, 0.8)';
            submitBtn.style.backgroundColor = '#d11141';
        })
        submitBtn.addEventListener('mouseout', function() {
            submitBtn.style.color = '#000';
            submitBtn.style.backgroundColor = '#fff';
        })
        hrLines[0].style.backgroundColor = '#d11141';
        hrLines[1].style.backgroundColor = '#d11141';
    
        let eachListTodo = document.querySelectorAll('.each-list-text');
        for(let i = 0; i < eachListTodo.length; i++) {
            eachListTodo[i].style.backgroundColor = '#00aedb';
            eachListTodo[i].style.borderColor = '#d11141';
            eachListTodo[i].style.color = '#000';
        }
    
    
        let listBtns = document.querySelectorAll('.todo-list-btn');
        for(let j = 0; j < listBtns.length; j++) {
            listBtns[j].style.backgroundColor = '#d11141';
            listBtns[j].style.borderColor = '#d11141';
        }
    })
        // |===============<< XXXXXX >>===============|

// |===============<< XXXXXX >>===============|