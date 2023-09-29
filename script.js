let input=document.getElementById("input");
let addbtn=document.getElementById("addbtn");
let todolist=document.getElementById("todolist");


function addtodo() {
    let tododata=input.value;
    let li=document.createElement("li");

    li.innerText=tododata;
    li.style.cssText="animation-name: slideIn;";
    todolist.appendChild(li);
    input.value=" ";
    input.focus();


    ///


    let trashbtn=document.createElement("i");
    trashbtn.classList.add('fas','fa-trash');
    li.appendChild(trashbtn);

} 
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addbtn").click();
  }
});

function deletetodo(event){
    if(event.target.classList[1]==="fa-trash"){
      let item=event.target.parentElement;
      item.classList.add("slideOut");
      item.addEventListener("transitionend",function(){
        item.remove();
      })
     

    }

   
}


addbtn.addEventListener("click", addtodo);
todolist.addEventListener("click",deletetodo);

