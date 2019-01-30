(function(exports){
    'use strict';
    function Controller(model, view){
        console.log('controller created');
        this.model = model;
        this.view = view;
        var self = this;
    // bind을 통해 레코드 변경을 자동적으로 view에 반영 
        this.view.bind('newTodo', function(title){
            self.addItem(title);
        });
        this.view.bind('itemRemove', function(item){
            self.removeItem(item.id);
        });
        this.view.bind('itemToggle', function(item){
            self.toggleComplete(item.id, item.completed);
        });

        this.showAll();

    };

    Controller.prototype.toggleComplete = function(id, completed){
        var self = this;
        self.model.update(id, { completed : completed}, function(){
            self.view.render('elementComplete', {
                id : id,
                completed : completed
            });
        })
    }

    Controller.prototype.removeItem = function(id){
        var self = this;
        self.model.remove(id, function(){
            self.view.render('removeItem', id);
        });
        this.showAll();

    };

    Controller.prototype.showAll = function (){
        var self = this;
        
        this.model.read(function(data) {
            self.view.render('showEntries', data);
        });
    };

    Controller.prototype.addItem = function(title){
        var self = this;
        if(title.trim() ===''){
            return;
        };
        self.model.create(title, function(){
            self.view.render('clearNewTodo', title);
        });
        this.showAll();
    };
    exports.app = exports.app || {};
    exports.app.Controller = Controller;
})(this);

// self = this;