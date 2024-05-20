document.getElementById('submit').onclick = add;

var myNodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function add() {
    let newList = document.createElement("li");
    let listContent = document.getElementById("myInput").value;
    let t = document.createTextNode(listContent);
    newList.appendChild(t);
    if (listContent === ''){
        alert("You must write something!");
    } else {
        document.getElementById("myList").appendChild(newList);
    }
    document.getElementById("myInput").value = "";
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    newList.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }



}
