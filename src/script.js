function change(){
    var rectangle = document.getElementById("rect");
    var width = document.getElementById("w").value;
    var height = document.getElementById("h").value;
    var color = document.getElementById("colorValue").value;
    console.log(color);
    
    rectangle.style.width = width + "px";
    rectangle.style.height = height + "px";
    rectangle.style.backgroundColor = color;
    
    document.getElementById("area").innerHTML = width * height + " square pixels";
    document.getElementById("perimeter").innerHTML = 2 * width + 2 * height + " pixels";
  
  }