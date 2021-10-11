let add= document.getElementById('add');
let list = document.getElementById('list');
add.addEventListener("click",function(e){
    let text = document.getElementById('text');
    let tasktxt = text.value;
    if(tasktxt ==''){
        alert('Please add your task');
    }else{
        li = document.createElement('li');
    li.innerHTML = `
    <span>${text.value}</span>
    <button id="delete" onclick='deletetask()'>Delete</button>`;
    list.insertBefore(li,list.childNodes[0]);
    text.value = '';
   }
});
function deletetask() {
    event.currentTarget.parentElement.remove();
}