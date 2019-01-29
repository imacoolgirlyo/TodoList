(function(){
    'use strict';
    function App(){
        console.log('App created !');
        this.storage = new app.Store(name);
        this.model = new app.Model(this.storage);
        this.template = new app.Template();
        this.view = new app.View(this.template);
        this.controller = new app.Controller(this.model, this.view);

    }
    var todo = new App();
})();

// 각각의 기능별로 모듈화를 시키기 위해서 app.js 파일을 생성함 
// App() 은 생성자 함수를 통해 각종 생성자 함수를 생성한다. (model, storage 등) 
// 여기서 app은 뭐지.......