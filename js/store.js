(function(exports){
    'use strict';
    function Store(name, callback){
        console.log('store created');
        callback = callback || function(){};

        this._dbName = name;
        if(!localStorage[name]){
            var data = {
                todos:[]
            };
            localStorage[name] = JSON.stringify(data);
        }


    }

    Store.prototype.find = function(query, callback){
        // query == {id : 1234567} or {completed : true}
        var data = JSON.parse(localStorage[this._dbName]);
        var todos = data.todos;
        if(!callback){
            return ;
        }
        
        callback.call(this, todos.filter(function(todo){
            console.log("callback.call - id");
            console.log(todo);
            for(var key in query){
                if(query[key] !== todo[key]){
                    return false;
                }}
                return true;
        }));
       

    };

    Store.prototype.findAll = function(callback){
        callback = callback || function(){};
        
        callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
        // todos 객체 리턴 
        // todos : [{}, {}]
    };

    Store.prototype.save = function(updateData, callback, id){
        // if(id) updateData 는 {completed : true} 형태로 들어옴
        var data = JSON.parse(localStorage[this._dbName]);
        var todos = data.todos;
        callback = callback || function(){};
        if(id){
            for(var i = 0; i<todos.length ; i++){
                if(todos[i].id == id){
                    console.log(updateData);
                    
                    for(var key in updateData){
                        todos[i][key] = updateData[key]; 
                    }
                    break;
                } 
                
            }
            
            localStorage[this._dbName] = JSON.stringify(data);
            callback.call(this, todos);

        }else{
            updateData.id = new Date().getTime();
            // todos에 새로운 data 넣고
            todos.push(updateData);
            // 다시 data를 JSON String 형태로 바꾸고 localStorage에 저장
            localStorage[this._dbName] = JSON.stringify(data);
            callback.call(this, [updateData]);

        }
    };

    Store.prototype.remove = function(id, callback){
        callback = callback || function(){};
        var data = JSON.parse(localStorage[this._dbName]);
        var todos = data.todos;
            for(var i=0; i<todos.length ; i++){
                if(todos[i].id == id){
                    todos.splice(i,1);
                    break;
                }
            }
            localStorage[this._dbName] = JSON.stringify(data);
            callback.call(this, todos);

    };
    
    exports.app = exports.app || {};
    exports.app.Store = Store
})(this);

// Model에서 불리는 콜백 함수에 의해 데이터를 출력하고 입력받는다. 