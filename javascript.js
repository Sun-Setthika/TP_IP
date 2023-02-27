var output = document.getElementById("output")
var title = document.getElementById("title")
var assignee = document.getElementById("assignee")
var deadline = document.getElementById("deadline")
var addbtn = document.getElementById("add-btn")
var listEle = document.getElementById("list-wrapper")
var todoList = getAllStorage()

function renderList () {
    let listContent='';
    todoList.forEach(function callback(todo, index)  {
        listContent += `

            <div id="output" class="output bg-white flex items-center justify-center h-14 mt-2 mb-2 rounded-xl p-4 border-black border-2">
                <div class="input-title w-1/4 ml-3 mr-3">
                    <div>${todo.title}</div>
                </div>
                <div class="input-assignee w-1/4 ml-3 mr-3">
                    <div>${todo.assignee}</div>
                </div>
                <div class="input-deadline w-1/4 ml-3 mr-3">
                    <div>${todo.deadline}</div>
                </div>
                <div class="input-deadline w-fit ml-3 mr-3">
                    <input type="button" id="${index}" class="h-10 w-16 bg-red-700 rounded-xl text-cyan-50" value="Delete" onclick="remove('${todo.id}')">
                </div>
            </div>
            `
    });

    listEle.innerHTML = listContent;
}

function add (idVaue, titleValue, assigneeValue, deadlineValue) {
    var todo = {id:idVaue, title:titleValue, assignee:assigneeValue, deadline:deadlineValue}
    todoList.push(todo)
    localStorage.setItem(idVaue+"", JSON.stringify(todo))
    title.value = "";
    assignee.value = "";
    deadline.value = "";
    
    //when user finished adding it will display the list of what they have type
    renderList();
}

function remove (id) {
    localStorage.removeItem(id)
    todoList = getAllStorage()
    renderList()
}

function getAllStorage() {
    let keys = [];
    let tmplist = []
    //takes key of all local storage to put into key, that key is in array inorder to use local storage we need key to aceess localstorage
    for (let i=0; i<localStorage.length; i++){
        keys.push(localStorage.key(i))
     }
    
    //take the value
    for ( i=0; i<keys.length; i++ ) {
        let todo = JSON.parse(localStorage.getItem(keys[i]))
        tmplist.push( todo );
    }
    tmplist.sort( (a,b) => a.id - b.id );
    return tmplist
}




renderList();
addbtn.addEventListener("click", () => {
    const d = new Date();
    let id = d.getTime()
    add(id, title.value, assignee.value, deadline.value)
})

