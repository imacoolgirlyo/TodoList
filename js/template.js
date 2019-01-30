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
        // view는 어디로 return 되는거지 => return 값은 insert함수를 부른 view에서 this.template.insert(id) 의 값이되고, 
        // todolist의 innerHtml 이된다....

    }



    exports.app = exports.app || {};
    exports.app.Template = Template;

})(this);