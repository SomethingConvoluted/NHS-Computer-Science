<!DOCTYPE html>
<html>
<body>

<h2>The conncect 4 element</h2>

<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.dot {
  height: 45px;
  width: 45px;
  background-color: #bbb;
  border-radius: 70%;
  display: inline-block;
}
</style>

<script>
var turn="red";

function toggle(b) {
  if (document.getElementById(b).style.backgroundColor == "lightgray")   {
     document.getElementById(b).style.backgroundColor = "red"; 
  }
  else {
  	document.getElementById(b).style.backgroundColor = "blue";
  }
}
</script>

<div style="text-align:center">

  <span class="dot" id="b1" onclick="toggle('b1')" style='background-color:lightgray;'></span>
  <span class="dot" id="b2"></span>
  <span class="dot" id="b3"></span>
  <span class="dot" id="b4"></span>
  <span class="dot" id="b5"></span>
  <span class="dot" id="b6"></span>
  <span class="dot" id="b7"></span>
  <div>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  </div>
  <div>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  </div>
  <div>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  </div>
  <div>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  </div>
  <div>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
 </div>
 <div>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  </div>
  
</body>
</html>
