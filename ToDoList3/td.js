function make(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("typ").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("typ").value = "";
  
    for (i = 0; i < close.length; i++) {
        close[i].onclick = make()
        {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }

}   