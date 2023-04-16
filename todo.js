document.getElementById('add').onclick=()=>{
    document.getElementById('paste').innerHTML+=`<div class="task_added">
    <span id="task_name">
        ${document.getElementById('todo').value}
    
    </span>
    <button class="remove cursor">
        remove
    </button>
</div>`;
    
    var current_task=document.querySelectorAll(".remove");
    for(var k=0;k<current_task.length;k++)
    {
        current_task[k].onclick=function(){
            this.parentNode.remove();
        }
    }
}