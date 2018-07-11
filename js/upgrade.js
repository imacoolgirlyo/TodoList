
//localStorage 만들기
var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
    todo : [],
    completed : []
};

// 새로운 아이템 추가


document.getElementById("add").addEventListener('click', function(){
    var input = document.getElementById("input").value;

    additem(input);

})

function additem(v){
    var item = document.createElement("li"); 
    item.className = "list__info";
    var content = document.createElement("div");
    content.className = "list__content";

    var txt = document.createTextNode(v);
    content.appendChild(txt);
    
    var close = document.createElement("div"); 
    close.className = "list__remove";
    var closetxt = document.createTextNode("X");
    close.appendChild(closetxt);

    item.appendChild(content);
    item.appendChild(close);
    
    document.getElementById("todo").appendChild(item);

    document.getElementById("input").value = "";
    
    close.addEventListener('click', removeItem);
    content.addEventListener('click', completeItem);
    
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
