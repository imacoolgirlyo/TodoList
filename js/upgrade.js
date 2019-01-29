const popupContainer = document.querySelector('.popup__container'),
    popupContainerdisplay = popupContainer.style.display,
    showupBtn = document.querySelector('.plus__btn'),
    form = document.querySelector(".js-form"),
    textinput = document.querySelector('.list__input-content'),
    importanceBtn = document.getElementsByName('importanceBtn');
    unlist = document.querySelector('#todo'),
    comlist = document.querySelector('#completed');

    console.log(importanceBtn);

// Pop up 
const changePopupDisplay = () => {
    popupContainer.classList.toggle("noneToblock");
}
window.onclick = function(event){
    if(event.target == popupContainer){
        popupContainer.classList.toggle("noneToblock");
    }
}
showupBtn.addEventListener('click', changePopupDisplay);

const completeItem = event => {
    event.target.prevent();
    
    const item = event.target;
    const li = item.parentNode;
    const ul = li.parentNode;

    if(ul === unlist){
        comlist.appendChild(li);
        li.classList.toggle('list__name-checked');
    }else if (ul === comlist){
        unlist.appendChild(li);
        li.classList.toggle('list__name-checked');
    }
    
}

const removeItem = event => {
    const item = event.target;
    const li = item.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
}

const addEvents = (listContent, removeBtn) => {
    listContent.addEventListener('click', completeItem);
    removeBtn.addEventListener('click', removeItem);
}


const createListitem = (todoText, importanceColor) => {

    console.log("create item")
    const listItem = document.createElement('li');
    listItem.classList.add('list__info');

    const listContent = document.createElement('div');
    listContent.classList.add('list__content');

    const removeBtn = document.createElement('div');
    removeBtn.classList.add('list__remove');
    const x = document.createTextNode("X");
    removeBtn.appendChild(x);

    const textNode = document.createTextNode(todoText);

    const importance = document.createElement('div');
    importance.classList.add('list__importance');
    importance.style.backgroundColor = importanceColor;


    listItem.appendChild(importance);
    listContent.appendChild(textNode);
    listItem.appendChild(listContent);
    listItem.appendChild(removeBtn);
    
    
    unlist.appendChild(listItem);
    addEvents(listContent,removeBtn);

}

const importanceCheck = () => {
    var num = 0;
    for(var i=0; i<importanceBtn.length; i++){
        if(importanceBtn[i].checked == true){
            num = i;
        }
    }
    if(num == 0){
        return "red";
    }else if(num == 1){
        return "yellow";
    }else if(num === 2){
        return "blue";
    }

}

const handleFormSubmit = event => {
    console.log("handel")
    const importanceColor = importanceCheck();
    const todoText = textinput.value;
    createListitem(todoText, importanceColor);
    textinput.value = "";
    popupContainer.classList.toggle("noneToblock");
}

// ( Add to do )버튼에 submit listener 추가
form.addEventListener("submit", handleFormSubmit);