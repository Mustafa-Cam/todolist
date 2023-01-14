let addtodobutton = document.getElementById("add")
let todocontainer = document.getElementById("todocontainer"); 
var inputtext = document.getElementById("inputtext");
addtodobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add("paragraphstyle")
    todocontainer.appendChild(paragraph);
    paragraph.innerHTML=  inputtext.value;
    inputtext.value="";

    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
    })

    paragraph.addEventListener("dblclick",function(){
        todocontainer.removeChild(paragraph);
    })
    var clear = document.getElementById("clear")
clear.addEventListener("click",function(){
todocontainer.removeChild(paragraph)
// paragraph.remove();
})
})