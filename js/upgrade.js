
//localStorage 만들기
var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
    todo : [],
    completed : []
};

var input__form = document.getElementById('input__form');

document.getElementsByClassName("float")[0].addEventListener('click', function(){
    input__form.style.display = 'block';
})

window.onclick = function(event){
    if(event.target == input__form){
        input__form.style.display = "none";
    }
}

// 새로운 아이템 추가

document.getElementById("add").addEventListener('click', function(){
    var input = document.getElementById("input").value;

    if(input === ""){
       var warning = document.getElementById("warningmsg");
       warning.innerHTML = "You should write something ! "

    } else {
        additem(input);
        var warning = document.getElementById("warningmsg");
        warning.innerHTML = ""
    }

})

function additem(v){
    var item = document.createElement("li"); 
    item.className = "list__info";
    var content = document.createElement("div");
    content.className = "list__content";

    var txt = document.createTextNode(v);
    content.appendChild(txt);

    var icon = document.createElement("i");
    icon.className = "fas fa-pen";
    
    var close = document.createElement("div"); 
    close.className = "list__remove";
    var closetxt = document.createTextNode("X");
    close.appendChild(closetxt);

    item.appendChild(content);
    item.appendChild(icon);
    item.appendChild(close);
    
    document.getElementById("todo").appendChild(item);

    document.getElementById("input").value = "";
    
    close.addEventListener('click', removeItem);
    content.addEventListener('click', completeItem);
    icon.addEventListener('click', EditItem);
    
    ChangeNum();

}

function ChangeNum(){
    var todo = document.getElementById("todo");   
    var num = todo.children.length;
    var span = document.getElementById("number");
    span.innerHTML = num + " Tasks";
} 


function removeItem (){
    
    var ul = this.parentNode.parentNode; 
    var li =this.parentNode; 
    ul.removeChild(li);
    ChangeNum();
}

function completeItem (){

    var ul = this.parentNode.parentNode; 
    var li =this.parentNode; 
    
    console.log(ul.id);
    var listID = ul.id;

    if(listID === "todo"){
        ul.removeChild(li);
        document.getElementById("completed").appendChild(li);
        li.classList.add("list__name-checked");
       
    }
    else{
        ul.removeChild(li);
        document.getElementById("todo").appendChild(li);
        li.className = "list__info";
    }
    ChangeNum();
}

function EditItem(){
    console.log(this.parentNode);
}

// 수정 말고, 입력할 떄 인풋 팝업, 색갈 선택 