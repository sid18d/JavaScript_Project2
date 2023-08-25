let inputBx=document.querySelector('#input_box');
let list=document.querySelector('#list');

inputBx.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        addItem(this.value);
        this.value=" "
    }
})

let addItem=(inputBx) => {
    let listItem=document.createElement("li");
    listItem.innerHTML= `${inputBx}<i></i>`;

    listItem.addEventListener("click",function(){
        this.classList.toggle('done');
    })

    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })
    list.appendChild(listItem);
} 
