
    window.onload = function () {
        var list = document.getElementsByClassName('list__info');
        
        for(var i =0; i<list.length ; i++){
           list[i].addEventListener('click', function(){
               add_class(this);
               
           })
            };
            
        function add_class(e){
            
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

        var btn = document.getElementsByClassName('list__input-btn')[0];

        btn.addEventListener('click', newElement);
//      var value1 = document.getElementsByClassName('list__input-content')[0].value;

        function newElement(){
            var value1 = document.getElementsByClassName('list__input-content')[0].value;
            var list__info = document.createElement("div");
            var list__name = document.createElement("div");
            var list__time = document.createElement("div");
            var list__remove = document.createElement("div");


            list__info.className = "list__info";
            list__name.className = "list__name";
            list__time.className = "list__time";
            list__remove.className = "list__remove";

            var container = document.getElementById('info-container').appendChild(list__info);

            container.appendChild(list__name);
            container.appendChild(list__time);
            var remove_btn = container.appendChild(list__remove);

            var remove_txt = document.createTextNode("x");
            

            remove_btn.appendChild(remove_txt);
            var t = document.createTextNode(value1);
            console.log(t);
            list__name.appendChild(t);
            
                       

            



        }
       
       
        
    }
