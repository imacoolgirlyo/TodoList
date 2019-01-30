(function(exports){
    'use strict';
    function View(template){
        console.log('view created');
        this.template = template;

        this.$todoList = document.getElementById('todo-list');
        this.$newTodo = document.getElementById('new-todo');

    }

    View.prototype.bind = function(event, handler){
        var self = this;
        if(event === 'newTodo'){
            
            var temp = self.$newTodo;
            //$newTodo를 직접 건드리지 않고 무조건 새로 변수를 만드네..왜일까..
            temp.addEventListener('change', function(){
                
                handler(self.$newTodo.value);
                
            });
        }else if(event === 'itemRemove'){
            
            var todo = self.$todoList;
            todo.addEventListener('click', function(event){
                var target = event.target;
                if(target.className == 'destroy'){
                    handler({id:self._getItemId(target.parentNode, 'li')})
                }
            })
        }else if(event === 'itemToggle'){
            var todo = self.$todoList;
            todo.addEventListener('click', function(event){
                var target = event.target;
                if(target.className == 'toggle'){
                    //{id 랑, completed 상태 변경}
                    handler({id: self._getItemId(target), completed : target.checked});
                }

            })
        }else if(event === 'itemEdit'){
            var todo = self.$todoList;
            todo.addEventListener('dblclick', function(event){
                var target = event.target;
                console.log(target.parentNode);
                handler({id:self._getItemId(target.parentNode, 'li')});
            })
        }
    }; 
    // 더블 클릭하면  화면이 input으로 바뀌어야함 
    // 1) input dom 만들고 , 
    // input change event 도 걸어놓음

    View.prototype._getItemId = function(element, tagName){
        var li;
        if(tagName) {
            if(element.parentNode.tagName.toLowerCase()=== tagName.toLowerCase()){
            li = element.parentNode;
        }}
        else {
            li = element.parentNode.parentNode;
        }
        return parseInt(li.dataset.id , 10);
    }

    View.prototype.render = function(viewCmd, data){
        var self = this;
        
        var viewCommands = {
            showEntries : function (){
                console.log('View.render.showEntries execute');
                self._addItem(data);
                for (var i =0; i<data.length; i++){
                    if(data[i].completed){
                        self._elementComplete(data[i].id, data[i].completed);
                    };
                }
            },
            clearNewTodo : function(){
                console.log('View.render.clearNewTodo execute');
                self.$newTodo.value = '';
            },
            removeItem : function(){
                self._removeItem(data);

            },
            elementComplete : function(){
                self._elementComplete(data.id, data.completed);
            },
            editItem : function(){
                self._editItem(data.id, data.title);
                
            }
        
        };
        viewCommands[viewCmd]();
    }

    View.prototype._editItem = function(id, title){
        var listItem = document.querySelector('[data-id="' + id +'"]');
        if(listItem){
            console.log(listItem);
            listItem.className = listItem.className + ' editing';

            var input = document.createElement('input');
            input.className = 'edit';
            listItem.appendChild(input);
            input.focus();
            input.value = title;
        }


    }

    View.prototype._addItem = function(id){
        this.$todoList.innerHTML = this.template.insert(id);
        
        
    }
    // list 추가해서 template에 id 값 전달하면 추가될 애의 id 값만 전달한다. template은 하나의 리스트를 만들고 반환하는데 
    // 이 결과값을 todolist의 innerHTML로 지정한다. innerHTML 사용하면 이전에 만들었던 리스트들은 다 사라지는 거 아닌가.

    View.prototype._removeItem = function(id){
        var elem = this.$todoList.querySelector('[data-id="' + id +'"]');
        
        if(elem){
            this.$todoList.removeChild(elem);
        }
    }

    View.prototype._elementComplete = function(id, completed){
        console.log(id);
        var elem = document.querySelector('[data-id="' + id +'"]');

        if(elem){
            console.log('view, elementComplete' + completed);
            elem.className = completed ? 'completed' : '';
        }
    }
// list 추가하는거는 template 이용해서 해야되는데, 왜 remove는 그냥 노드만 삭제해도될까....없으면 바로 어떻게 화면에 렌더링.. 
// dom을 바로 지워서 그런가 
    exports.app = exports.app || {};
    exports.app.View = View;

})(this);
