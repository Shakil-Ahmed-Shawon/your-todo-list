// |===============<< Element Selection >>===============|

    // |===============<< ToDo Input & Adding >>===============|
let inputArea = document.getElementById('todo-input-area');
let todoAddingBtn = document.getElementById('todo-submit-btn');

    // |===============<< Todo List Container >>===============|
let listContainer = document.querySelector('.all-todo-list-container');


    // |===============<< Complete & Delete ToDo Button >>===============|
let completeBtn = document.querySelector('.complete-task');
let deleteBtn = document.querySelector('.delete-task');

// |===============<< ----------------XXXXXX----------------- >>===============|

// |===============<< Data Structer - JSON >>===============|
let dataStructer = [];
// |===============<< XXXXXX >>===============|




// |===============<< | 1/5 | Data Load From Server, When Markup Load >>===============|
document.addEventListener('DOMContentLoaded', function() {
    dataStructer = JSON.parse(localStorage.getItem('mainJsonData'));
    
    dataStructer.map(item => {
    let eachList = document.createElement('li');
    eachList.classList.add('each-list');
    eachList.innerHTML = `<p class="each-list-text">${item.task}</p>
    <button class="complete-task todo-list-btn"><i class="fa-solid fa-check"></i></button>
    <button class="delete-task todo-list-btn"><i class="fa-solid fa-xmark"></i></button>`;

    if(item.taskStatus == false) {
        eachList.children[0].style.color = 'gray';
        eachList.children[0].style.textDecoration = 'line-through';
    } 
    
    listContainer.insertAdjacentElement('afterbegin', eachList);

    
        // |===============<< Complete Task Functionality >>===============|
let completeTask = document.querySelector('.complete-task');
completeTask.addEventListener('click', function() {
    if(item.taskStatus) {
        eachList.children[0].style.color = 'gray';
        eachList.children[0].style.textDecoration = 'line-through';
        item.taskStatus = false;
} else{

    eachList.children[0].style.color = '#fff';
    eachList.children[0].style.textDecoration = 'none';
    item.taskStatus = true;
}
        // |===============<< | 3/5 | Updating LocalStorage Data When Complete Any Todo >>===============|
        dataStructerToJson = JSON.stringify(dataStructer);
        localStorage.setItem('mainJsonData', dataStructerToJson);
        // |===============<< XXXXXX >>===============|
})
    // |===============<< XXXXXX >>===============|

    // |===============<< Delete Task Functionality >>===============|
    let deleteTask = document.querySelector('.delete-task');
    deleteTask.addEventListener('click', function() {
        eachList.remove();
        dataStructer.splice(dataStructer.indexOf(item), 1);

            // |===============<< | 4/5 | Updating Fetch Data When Delete Any Todo >>===============|
            dataStructerToJson = JSON.stringify(dataStructer);
            localStorage.setItem('mainJsonData', dataStructerToJson);
            // |===============<< XXXXXX >>===============|
    })
    // |===============<< XXXXXX >>===============|
    
    })
    
  });

// |===============<< XXXXXX >>===============|







// |===============<< Adding Event on 'Add This Todo' Button >>===============|
todoAddingBtn.addEventListener('click', function() {
    let eachDataObj = {
        task: inputArea.value,
        taskStatus: true
    }

    dataStructer.unshift(eachDataObj);

    // |===============<< | 2/5 | Updating LocalStorage Data When Add New Todo >>===============|
    let dataStructerToJson = JSON.stringify(dataStructer);
    localStorage.setItem('mainJsonData', dataStructerToJson);
    // |===============<< XXXXXX >>===============|

        // |===============<< Each ToDo List >>===============|
let eachList = document.createElement('li');
eachList.classList.add('each-list');
eachList.innerHTML = `<p class="each-list-text">${dataStructer[0].task}</p>
<button class="complete-task todo-list-btn"><i class="fa-solid fa-check"></i></button>
<button class="delete-task todo-list-btn"><i class="fa-solid fa-xmark"></i></button>`;


listContainer.insertAdjacentElement('afterbegin', eachList);

inputArea.value = '';

    // |===============<< Complete Task Functionality >>===============|
let completeTask = document.querySelector('.complete-task');
completeTask.addEventListener('click', function() {
    if(eachDataObj.taskStatus) {
        eachList.children[0].style.color = 'gray';
        eachList.children[0].style.textDecoration = 'line-through';
        eachDataObj.taskStatus = false;
} else{

    eachList.children[0].style.color = '#fff';
    eachList.children[0].style.textDecoration = 'none';
    eachDataObj.taskStatus = true;
}
        // |===============<< | 3/5 | Updating LocalStorage Data When Complete Any Todo >>===============|
        dataStructerToJson = JSON.stringify(dataStructer);
        localStorage.setItem('mainJsonData', dataStructerToJson);
        // |===============<< XXXXXX >>===============|
})
    // |===============<< XXXXXX >>===============|

    // |===============<< Delete Task Functionality >>===============|
    let deleteTask = document.querySelector('.delete-task');
    deleteTask.addEventListener('click', function() {
        eachList.remove();
        dataStructer.splice(dataStructer.indexOf(eachDataObj), 1);

            // |===============<< | 4/5 | Updating Fetch Data When Delete Any Todo >>===============|
            dataStructerToJson = JSON.stringify(dataStructer);
            localStorage.setItem('mainJsonData', dataStructerToJson);
            // |===============<< XXXXXX >>===============|
    })
    // |===============<< XXXXXX >>===============|

})






// |===============<< Adding Event on Press 'Enter' Key >>===============|
inputArea.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        let eachDataObj = {
            task: inputArea.value,
            taskStatus: true
        }
    
        dataStructer.unshift(eachDataObj);
    
        // |===============<< | 2/5 | Updating LocalStorage Data When Add New Todo >>===============|
        let dataStructerToJson = JSON.stringify(dataStructer);
        localStorage.setItem('mainJsonData', dataStructerToJson);
        // |===============<< XXXXXX >>===============|
    
            // |===============<< Each ToDo List >>===============|
    let eachList = document.createElement('li');
    eachList.classList.add('each-list');
    eachList.innerHTML = `<p class="each-list-text">${dataStructer[0].task}</p>
    <button class="complete-task todo-list-btn"><i class="fa-solid fa-check"></i></button>
    <button class="delete-task todo-list-btn"><i class="fa-solid fa-xmark"></i></button>`;
    
    
    listContainer.insertAdjacentElement('afterbegin', eachList);
    
    inputArea.value = '';
    
        // |===============<< Complete Task Functionality >>===============|
    let completeTask = document.querySelector('.complete-task');
    completeTask.addEventListener('click', function() {
        if(eachDataObj.taskStatus) {
            eachList.children[0].style.color = 'gray';
            eachList.children[0].style.textDecoration = 'line-through';
            eachDataObj.taskStatus = false;
    } else{
    
        eachList.children[0].style.color = '#fff';
        eachList.children[0].style.textDecoration = 'none';
        eachDataObj.taskStatus = true;
    }
            // |===============<< | 3/5 | Updating LocalStorage Data When Complete Any Todo >>===============|
            dataStructerToJson = JSON.stringify(dataStructer);
            localStorage.setItem('mainJsonData', dataStructerToJson);
            // |===============<< XXXXXX >>===============|
    })
        // |===============<< XXXXXX >>===============|
    
        // |===============<< Delete Task Functionality >>===============|
        let deleteTask = document.querySelector('.delete-task');
        deleteTask.addEventListener('click', function() {
            eachList.remove();
            dataStructer.splice(dataStructer.indexOf(eachDataObj), 1);
    
                // |===============<< | 4/5 | Updating Fetch Data When Delete Any Todo >>===============|
                dataStructerToJson = JSON.stringify(dataStructer);
                localStorage.setItem('mainJsonData', dataStructerToJson);
                // |===============<< XXXXXX >>===============|
        })
        // |===============<< XXXXXX >>===============|
    
    }
})
// |===============<< XXXXXX >>===============|


