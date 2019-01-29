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
                console.log('event');
                handler(self.$newTodo.value);
            });
        }
    }; 

    View.prototype.render = function(viewCmd, data){
        var self = this;
        console.log(self);
        var viewCommands = {
            showEntries : function (){
                console.log('View.render.showEntries execute');
                self._addItem(data);
            },
            clearNewTodo : function(){
                console.log('View.render.clearNewTodo execute');
                self.$newTodo.value = '';
            }
        };
        viewCommands[viewCmd]();
    }

    View.prototype._addItem = function(id){
        this.$todoList.innerHTML = this.template.insert(id);
    }

    exports.app = exports.app || {};
    exports.app.View = View;

})(this);

// this.$todoList 에서 $