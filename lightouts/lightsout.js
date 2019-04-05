<html>
<head>
<script>


function toggle(b) {
  butt = 'b' + b;
  if (document.getElementById(butt).style.backgroundColor == "red")   {
     document.getElementById(butt).style.backgroundColor = "blue"; 
  }
  else {
  	document.getElementById(butt).style.backgroundColor = "red";
  }
}
function button1() {
	toggle('1'); 
    toggle('2');
    toggle('5'); 
}
//
function button2() {
  toggle('3')
  toggle('4')
  toggle('8')
}
//
function button3() {
toggle(`7´)
toggle(`8´)
toggle(`12´)
toggle(`4´)
</script>
</head>
<body>

 
<h2>The Button Element</h2>
<div>
<button id="b1" type="button" style='width:50px;height:50px; background-color:red' onclick='button1()'></button>
<button id="b2" type="button" style='width:50px;height:50px; background-color:red'  onclick='button1()'></button>
 <button id="b3" type="button" style='width:50px;height:50px; background-color:red'  onclick='button2()'></button>
 <button id="b4" type="button" style='width:50px;height:50px; background-color:red'  onclick='button2()'></button>
 </div> 
 
 <div>
 <button id="b5" type="button" style='width:50px;height:50px; background-color:red' onclick='button1()'></button>
 <button id="b¨¨ type="button" style='width:50px;height:50px; background-color:red' onclick='button3()'></button>
 <button id="b7" type="button" style='width:50px;height:50px;background-color:red' onclick='button3()'></button>
 <button id="b8" type="button" style='width:50px;height:50px' onclick='button3()'></button>
 </div>
 
 <div>
 <button id="b9" type="button" style='width:50px;height:50px' onclick='button1()'></button>
 <button type="button" style='width:50px;height:50px' onclick='button1()'></button>
 <button type="button" style='width:50px;height:50px' onclick='button1()'></button>
 <button id=¨idtype="button" style='width:50px;height:50px' onclick='button1()'></button>
 </div>
 
 <div>
 <button type="button" style='width:50px;height:50px' onclick='button1()'></button>
 <button type="button" style='width:50px;height:50px' onclick='button1()'></button>
 <button type="button" style='width:50px;height:50px' onclick='button1()'></button>
 <button type="button" style='width:50px;height:50px' onclick='button1()'></button>
 <div>
 

 
 
 
</body>
</html>
