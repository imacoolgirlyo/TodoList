(function(exports){
    'use strict';
    function Template(){
        console.log('template created');
        this.defaultTemplate = 
        '<li data-id="{{id}}" class= "{{completed}}">'+ 
            '<div class="view">' +
                '<input class="toggle" type="checkbox" {{checked}}>'+
                '<label> {{title}} </label>'+
                '<button class="destroy"></button>' +  
            '</div>' +
        '</li>'

    }

    // data가 추가되면 화면에 보여지는 템플릿 만들기 

    Template.prototype.insert = function(data){
        console.log('Template.insert method execute !');
        var view = '';
        
        for(var i=0 ; i<data.length ; i++){
            var template = this.defaultTemplate;
            var completed = '';
            var checked = '';

            if(data[i].completed){
                completed = 'completed';
                checked = 'checked';

            }

            template = template.replace('{{id}}', data[i].id);
            template = template.replace('{{complated}}' ,completed);
            template = template.replace('{{title}}', data[i].title);
            template = template.replace('{{checked}}', checked);

            view = view + template;
        }
        return view;
    }



    exports.app = exports.app || {};
    exports.app.Template = Template;

})(this);

// html 조각 들이 생성자 함수에 있을거고  view가 렌더링할때 받는
// data들이 template 을 통해서 화면에 보여질 것임

