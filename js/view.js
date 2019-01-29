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
        }
    }; 

    View.prototype._getItemId = function(element, tagName){
        var li;
        if(element.parentNode.tagName.toLowerCase()=== tagName.toLowerCase()){
            li = element.parentNode;
        } 
        return parseInt(li.dataset.id , 10);
    }

    View.prototype.render = function(viewCmd, data){
        var self = this;
        
        var viewCommands = {
            showEntries : function (){
                console.log('View.render.showEntries execute');
                self._addItem(data);
            },
            clearNewTodo : function(){
                console.log('View.render.clearNewTodo execute');
                self.$newTodo.value = '';
            },
            removeItem : function(){
                self._removeItem(data);

            },
        };
        viewCommands[viewCmd]();
    }

    View.prototype._addItem = function(id){
        this.$todoList.innerHTML = this.template.insert(id);
    }

    View.prototype._removeItem = function(id){
        var elem = this.$todoList.querySelector('[data-id' + id + ']');
        if(elem){
            this.$todoList.removeChild(elem);
        }
    }

    exports.app = exports.app || {};
    exports.app.View = View;

})(this);

// this.$todoList 에서 $