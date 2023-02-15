
import './App.css';
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
function App() {
  return (
    <div className="App">
     <h1>Please enter width and height</h1>
<p>Click "go" to change the size of the rectangle</p>

<p>Width <input type="number" id="w" value="200" min="1"/> pixels</p>

<p> Height <input type="number" id="h" value="200" min="1"/> pixels</p>
<p>Color <input type="color" id="colorValue"/></p>
<button id="btn" onclick="change()">Go</button>
<p>Area: <span id="area">40000 square pixels</span></p>
<p>Perimeter: <span id="perimeter">800 pixels</span></p>
<div id="rect">
</div>
</div>
  );
}

export default App;
