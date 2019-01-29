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

    Store.prototype.findAll = function(callback){
        callback = callback || function(){};
        callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
    };

    Store.prototype.save = function(updateData, callback, id){
        var data = JSON.parse(localStorage[this._dbName]);
        var todos = data.todos;

        callback = callback || function(){};

        if(id){
            console.log(id);

        }else{
            updateData.id = new Date().getTime();
            todos.push(updateData);
            localStorage[this._dbName] = JSON.stringify(data);
            callback.call(this, [updateData]);

        }
    }
    exports.app = exports.app || {};
    exports.app.Store = Store
})(this);

// Model에서 불리는 콜백 함수에 의해 데이터를 출력하고 입력받는다. 