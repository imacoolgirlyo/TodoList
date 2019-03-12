(function(exports){
    'use strict';
    console.log(this);
    function Controller(model, view){
        this.model = model;
        this.view = view;
        var self = this;
        console.log(this);
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
        this.view.bind('itemEdit', function(item){
            self.editItem(item.id);

        });
        this.view.bind('itemEditDone', function(item){
           self.editItemDone(item.id, item.inputValue);
        });
        this.view.bind('clearCompleted', function(){
            self.clearCompleted();
        });

        this.showAll();

    };
// completed 인 상태인지 아닌지 알려면 무조건 model에서 찾아야한다. view에서 className
// 으로 구분하면 안되지 ? 
// 1. view에서 class로 정보 가져와서 해당 아이템만 모델에 삭제 요청해도 되나 ? view
// 에서 끌고 올 수 있는 정보(target.value나 class 같이) 는 다가져오고 model에 요청해도 
// 되는 지 아니면 무조건 객체의 상태에 대한 정보는 model 에서 가져와야 하는건지 ? 
// 객체의 상태는 model에서 가져오는 것 같음
    Controller.prototype.clearCompleted = function(){
        var self = this;
        self.model.read({completed : true}, function(items){
            items.forEach(function(item){
                self.removeItem(item.id);
            })
            // self.view.render('removeItem',id);
        })
    }


    Controller.prototype.editItemDone = function(id, title){
        var self = this;
        self.model.update(id, {'title' : title}, function(){
            self.view.render('editItemDone' , {
                id : id,
                title : title
            });
        });
    };


// id 값 
    Controller.prototype.editItem = function(id){
        var self = this;
        self.model.read(id, function(data){
            self.view.render('editItem', {'id': id , 'title' :data[0].title });

        }
            
        );


    }

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

    };

    Controller.prototype.showAll = function (){
        var self = this;
        this.model.read(function(data) {
            console.log(data);
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

// 문제 1 : completed 후 새로 list를 추가하면 다시 completed line-through 가 해제됨