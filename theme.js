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

let submitBtn = document.querySelector('.todo-submit-btn');

let hrLines = document.querySelectorAll('.hr-line');

let themeSelectBtn = document.querySelector('#theme-btn');

let themeContainer = document.querySelector('.theme-container');

let mainUlContainer = document.querySelector('.all-todo-list-container');


// |===============<< XXXXXX >>===============|

// |===============<< Theme Change Functionality >>===============|
    // |===============<< For Light Color Theme >>===============|
lightColor.addEventListener('click', function() {
    bodyElement.setAttribute('id', 'body-bg-light');
    mainTitle.setAttribute('id', 'main-title-light');
    todoContainer.setAttribute('id', 'todo-container-light');
    inputAreaBox.setAttribute('id', 'input-area-box-light');
    submitBtn.setAttribute('id', 'submit-btn-light');
    hrLines[0].style.backgroundColor = '#eee3e7';
    hrLines[1].style.backgroundColor = '#eee3e7';
    mainUlContainer.setAttribute('id', 'main-ul-container-light');

})
    // |===============<< XXXXXX >>===============|

    // |===============<< For Dark Color Theme >>===============|
    darkColor.addEventListener('click', function() {
        bodyElement.setAttribute('id', 'body-bg-dark');
        mainTitle.setAttribute('id', 'main-title-dark');
        todoContainer.setAttribute('id', 'todo-container-dark');
        inputAreaBox.setAttribute('id', 'input-area-box-dark');
        submitBtn.setAttribute('id', 'submit-btn-dark');
        hrLines[0].style.backgroundColor = '#6e7f80';
        hrLines[1].style.backgroundColor = '#6e7f80';
        mainUlContainer.setAttribute('id', 'main-ul-container-dark');
    })
    // |===============<< XXXXXX >>===============|

    // |===============<< For Beautiful Blues Color Theme >>===============|
    blueColor.addEventListener('click', function() {
        bodyElement.setAttribute('id', 'body-bg-blue');
        mainTitle.setAttribute('id', 'main-title-blue');
        todoContainer.setAttribute('id', 'todo-container-blue');
        inputAreaBox.setAttribute('id', 'input-area-box-blue');
        submitBtn.setAttribute('id', 'submit-btn-blue');
        hrLines[0].style.backgroundColor = '#011f4b';
        hrLines[1].style.backgroundColor = '#011f4b';
        mainUlContainer.setAttribute('id', 'main-ul-container-blue');
    })
    // |===============<< XXXXXX >>===============|

    // |===============<< For Perfect Pink Color Theme >>===============|
    pinkColor.addEventListener('click', function() {
        bodyElement.setAttribute('id', '');
        mainTitle.setAttribute('id', '');
        todoContainer.setAttribute('id', '');
        inputAreaBox.setAttribute('id', '');
        submitBtn.setAttribute('id', '');
        hrLines[0].style.backgroundColor = '#251e3e';
        hrLines[1].style.backgroundColor = '#251e3e';
        mainUlContainer.setAttribute('id', '');
    })
    // |===============<< XXXXXX >>===============|

    // |===============<< For Google Color Theme >>===============|
    googleColor.addEventListener('click', function() {
        bodyElement.setAttribute('id', 'body-bg-google-color');
        mainTitle.setAttribute('id', 'main-title-google-color');
        todoContainer.setAttribute('id', 'todo-container-google-color');
        inputAreaBox.setAttribute('id', 'input-area-box-google-color');
        submitBtn.setAttribute('id', 'submit-btn-google-color');
        hrLines[0].style.backgroundColor = '#008744';
        hrLines[1].style.backgroundColor = '#008744';
        mainUlContainer.setAttribute('id', 'main-ul-container-google-color');
    })
        // |===============<< XXXXXX >>===============|

    // |===============<< For Metro UI Color Theme >>===============|
    metroUiColor.addEventListener('click', function() {
        bodyElement.setAttribute('id', 'body-bg-metro-ui');
        mainTitle.setAttribute('id', 'main-title-metro-ui');
        todoContainer.setAttribute('id', 'todo-container-metro-ui');
        inputAreaBox.setAttribute('id', 'input-area-box-metro-ui');
        submitBtn.setAttribute('id', 'submit-btn-metro-ui');
        hrLines[0].style.backgroundColor = '#d11141';
        hrLines[1].style.backgroundColor = '#d11141';
        mainUlContainer.setAttribute('id', 'main-ul-container-metro-ui');
    })
        // |===============<< XXXXXX >>===============|

// |===============<< XXXXXX >>===============|

// |===============<< Theme In Out Functionality >>===============|
let themeContainerStatus = true;
themeSelectBtn.addEventListener('click',function() {
    if(themeContainerStatus) {
        themeContainer.style.left = '0px';
        themeContainerStatus = false;
    } else {
        themeContainer.style.left = '-300px';
        themeContainerStatus = true;
    }
})
// |===============<< XXXXXX >>===============|