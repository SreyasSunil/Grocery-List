var input = document.getElementById("one-item");

input.addEventListener("keydown",function(event){
    if(event.key == "Enter"){
        addItem();
    }
});

function addItem(){
    var item = "- "+document.getElementById("one-item").value;
    var h1 = document.createElement("h1");

    document.getElementById("one-item").value = '';

    h1.appendChild(document.createTextNode(item));

    h1.addEventListener("click",function(){
        if(h1.style.textDecoration == "none")
        {
            h1.style.textDecoration = "line-through"; 
        }
        else
        {
            h1.style.textDecoration = "none"; 
        }
    });

    var div = document.getElementById("all-items");
    div.insertAdjacentElement("beforeend", h1);
}

function eraseList(){
    var list = document.getElementById("all-items");
    var i = 0;

    while(i < list.childNodes.length){
        list.removeChild(list.childNodes[i]);
    }

}

function toggleStyle(){
    
}