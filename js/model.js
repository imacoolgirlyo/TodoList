(function(exports){
    'use strict';
    function Model(storage){
        console.log('Model created ');
        this.storage = storage;
    }
    Model.prototype.create = function(title, callback){
        title = title || '',
        callback = callback || function (){};

        var newItem = {
            title : title.trim(),
            completed : false
        };
        this.storage.save(newItem, callback);
    }

    Model.prototype.read = function(callback){
        this.storage.findAll(callback);
    }

    Model.prototype.remove = function(id, callback){
        this.storage.remove(id, callback);
    }
    exports.app = exports.app || {};
    exports.app.Model = Model;

})(this);

// 데이터와 직접적으로 관련  
// Storage와 커뮤니케이션하기 위해서 storage를 인자로 넘겨 받아서 
// 자신의 프로퍼티에 추가함  

// create, delete, read, update를 할것임 