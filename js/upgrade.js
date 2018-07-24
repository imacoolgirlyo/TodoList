
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
        return "yello";
    }else if(num === 2){
        return "blue";
    }

}

const handleFormSubmit = event => {

    const importanceColor = importanceCheck();
    console.log(importanceColor);
    const todoText = textinput.value;
    createListitem(todoText, importanceColor);
    textinput.value = "";
    popupContainer.classList.toggle("noneToblock");
}

// ( Add to do )버튼에 submit listener 추가
form.addEventListener("submit", handleFormSubmit);



// const savebtnClick = () => {
//     const input = document.getElementById("input").value;
//     const toggle = document.getElementsByName('toggle');

//     if(input === ""){
//        const warning = document.getElementById("warningmsg");
//        warning.innerHTML = "You should write something ! "

//     } else {

//         for(var i =0 ; i< toggle.length ; i++){
//         if(toggle[i].checked == true){
//             additem(input, i)
//         }
//     }
//         const warning = document.getElementById("warningmsg");
//         warning.innerHTML = ""
//         popupContainer.classList.toggle("noneToblock");
//     }

// };
// document.getElementById("save").addEventListener('click', savebtnClick);



// const additem = (v, r) => {

//     const importance = document.createElement("div");
//     importance.className = "list__importance";

//     if(r == "2"){
//         importance.classList.add("list__importance-green");
//     }else if(r == "1"){
//         importance.classList.add("list__importance-blue");
//     }

//     const item = document.createElement("li"); 
//     item.className = "list__info";
//     const content = document.createElement("div");
//     content.className = "list__content";

//     const txt = document.createTextNode(v);
//     content.appendChild(txt);

//     const icon = document.createElement("i");
//     icon.className = "fas fa-pen";
    
//     const close = document.createElement("div"); 
//     close.className = "list__remove";
//     const closetxt = document.createTextNode("X");
//     close.appendChild(closetxt);

//     item.appendChild(importance);
//     item.appendChild(content);
//     item.appendChild(icon);
//     item.appendChild(close);
    
//     document.getElementById("todo").appendChild(item);

//     document.getElementById("input").value = "";
    
//     close.addEventListener('click', removeItem);
//     content.addEventListener('click', completeItem);
//     icon.addEventListener('click', EditItem);
    
//     ChangeNum();

// }

// const ChangeNum = () => {
//     const todo = document.getElementById("todo");   
//     const num = todo.children.length;
//     const span = document.getElementById("number");
//     span.innerHTML = num + " Tasks";
// } 

// const removeItem = (evt) => {
//     const li = evt.target.parentNode;
//     const ul = li.parentNode; 
//     ul.removeChild(li);
//     // ChangeNum();
// }

// const completeItem = (evt) => {
//     const li = evt.target.parentNode;
//     const ul = li.parentNode; 
    
//     var listID = ul.id;

//     if(listID === "todo"){
//         ul.removeChild(li);
//         document.getElementById("completed").appendChild(li);
//         li.classList.add("list__name-checked");
       
//     }
//     else{
//         ul.removeChild(li);
//         document.getElementById("todo").appendChild(li);
//         li.className = "list__info";
//     }
//     ChangeNum();
// }

// const EditItem = () => {
//     console.log(this.parentNode);
// }

// // 새로운 아이템 추가







// // 수정 말고, 입력할 떄 인풋 팝업, 색갈 선택 