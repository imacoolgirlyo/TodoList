
    window.onload = function () {
        var list = document.getElementsByClassName('list__info');
        console.log(list); 
       
        for(var i =0; i<list.length ; i++){
           list[i].addEventListener('click', function(){
               add_class(this)
           })
            }

        function add_class(e){
            console.log(e.classList);
            e.classList.toggle('list__name-checked');
            // e.classList.toggle('.list__name-checked');
        }
       
        
    }
