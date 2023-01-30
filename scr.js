    let todos;
    const savedTodos =JSON.parse(localStorage.getItem('todos'));

    var inp= document.getElementById("newtodo");
    inp.addEventListener("keypress", function(event){
  if (event.key === "Enter") {
    event.preventDefault();
    addtodos();
  }
  });
    if(Array.isArray(savedTodos)){
        todos=savedTodos;
    }
    else{
    todos=[
        {title:'Get Groceries', dueDate:'2023-10-04',id:'1'},
        {title:'Water Plants', dueDate:'2023-12-04',id:'2'},
        {title:'Study', dueDate:'2022-12-02',id:'3'}
        ];
    }
        let todos1=todos;

    render();

        function addtodos()
        {
            todos=[];
        let textbox= document.getElementById("newtodo");
        let datepicker= document.getElementById('datepicker');
        let duedate=datepicker.value;
        let textbox1= textbox.value;
        let ido= ''+new Date().getTime();
        //To re-initialise the placeholder in input element
        if(textbox1 != '' && duedate != ''){
        document.getElementById("newtodo").value='';
        document.getElementById("datepicker").value='';
        todos.push({title:textbox1,
             dueDate:duedate,
            id: ido});
         todos1.push({title:textbox1,
             dueDate:duedate,
            id:ido});
        render();
        saveitem();
        }
        else{
            alert('Please write both Due Date & Task name')
        }
        }


        function render(){
        todos.forEach(
            function printtodo(todonew)
                {
                let element=document.createElement('button');

                var letters = 'BCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * letters.length)];
                }
                element.style.backgroundColor= color;
                element.classList.add('tasks');
                const disbt= () =>{
                element.remove();
                idi=todonew.id;
                    rem(idi);
                    saveitem();
                };
                
                element.addEventListener("click",disbt);

                element.innerText=todonew.title + ' ('+todonew.dueDate + ')' ;
                let tasks=document.getElementById("tasks");
                tasks.appendChild(element);
            }
        );
        }

        function rem(idi){
            todos1=todos1.filter(function (todo){
                    if(todo.id===idi)
                    {
                        return false;
                    }
                    else{
                        return true;
                    }
                });
                saveitem();
            }


        function saveitem(){
            localStorage.setItem('todos', JSON.stringify(todos1));
        }
