
//      리스트 목록을 클릭했을 때, 완료 표시
        var list = document.getElementById('todo');
        list.addEventListener('click', add_class());
        console.log(list);

        function add_class(){
            
            this.classList.toggle('list__name-checked');
        }

//      삭제 버튼 누르면, 리스트에서 삭제됨
        var close = this.document.getElementsByClassName('list__remove');
        var i;
        for(i=0; i<close.length; i++){
            close[i].addEventListener('click', function(){
                remove_list(this);
            })
        }

        function remove_list(e){
            var div = e.parentElement;
            div.style.display = "none";
        }

//      버튼을 눌렀을 때, 리스트에 추가

    //     var btn = document.getElementsByClassName('list__input-btn')[0];

    //     btn.addEventListener('click', newElement);

    //     function newElement(){
    //         var value1 = document.getElementsByClassName('list__input-content')[0].value;
    //         var list__info = document.createElement("div");
    //         var list__name = document.createElement("div");
    //         var list__time = document.createElement("div");
    //         var list__remove = document.createElement("div");

    //         list__info.className = "list__info";
    //         list__name.className = "list__name";
    //         list__time.className = "list__time";
    //         list__remove.className = "list__remove";

    //         var container = document.getElementById('info-container').appendChild(list__info);
    //         container.appendChild(list__name);
    //         container.appendChild(list__time);

    //         var t = document.createTextNode(value1);
            
    //         list__name.appendChild(t);
            
    //         var remove_btn = container.appendChild(list__remove);
    //         var remove_txt = document.createTextNode("X");
    //         remove_btn.appendChild(remove_txt);

    //         document.getElementsByClassName('list__input-content')[0].value = "";

            
    //         for(i=0; i< close.length ; i++){
    //             close[i].addEventListener('click', function(){
    //                 var div = this.parentElement;
    //                 div.style.display = "none";
    //             }); 

    //     }

    //     console.log(list);
    //     for(j=0; j<list.length ; j++){
    //         list[j].addEventListener('click', function(){
    //             this.classList.toggle('list__name-checked');
    //         })
    //     }
    // }
       // 위에 보면, 처음에 list__info 객체에 event 리스너를 붙이고,
       // 새로운 리스트를 추가하고 나서 또 리스너를 붙이는데, 그러면 리스너가 중복이 되는건가 ? 
       // 한 DOM 에 같은 리스너가 두번 붙는거 아님..? 
    
    
