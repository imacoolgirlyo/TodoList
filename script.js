
    window.onload = function () {
        var list = document.getElementsByClassName('list__info');
        console.log(list);
        for(var i =0; i<list.length ; i++){
           list[i].addEventListener('click', function(){
               add_class(this);
               
           })
            };
            
        function add_class(e){
            console.log(e.classList);
            e.classList.toggle('list__name-checked');
            // e.classList.toggle('.list__name-checked');
        }
        var close = this.document.getElementsByClassName('list__remove');
        for(var i=0; i<close.length; i++){
            close[i].addEventListener('click', function(){
                remove_list(this);
            })
        }

        function remove_list(e){
            var div = e.parentElement;
            div.style.display = "none";
        }

        
        
       
        
    }
