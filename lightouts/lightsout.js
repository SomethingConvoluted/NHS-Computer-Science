<!DOCTYPE html>
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
  toggle('3');
  toggle('6');
  toggle('1');
  toggle('2');
}
//
function button3() {
toggle('2');
toggle('4');
toggle('7');
toggle('3');
}
//
function button4() {
toggle('4');
toggle('3');
toggle('8');
}
//
function button5() { 
toggle('5')
toggle('1')
toggle('6')
toggle('9')
}
//
function button6() {
toggle('6')
toggle('7')
toggle('10')
toggle('5')
toggle('2')
}
//
function button7() {
toggle('6')
toggle('7')
toggle('8') 
toggle('3')
toggle('11')
}
//
function button8() {
toggle('7');
toggle('8');
toggle('12');
toggle('4');
}
//
function button9
</script>
</head>
<body>

 
<h2>The Lightsout Element</h2>
<div>
<button id="b1" type="button" style='width:50px;height:50px; background-color:red' onclick='button1()'></button>
<button id="b2" type="button" style='width:50px;height:50px; background-color:red'  onclick='button2()'></button>
 <button id="b3" type="button" style='width:50px;height:50px; background-color:red'  onclick='button3()'></button>
 <button id="b4" type="button" style='width:50px;height:50px; background-color:red'  onclick='button4()'></button>
 </div> 
 
 <div>
 <button id="b5" type="button" style='width:50px;height:50px; background-color:red' onclick='button5()'></button>
 <button id="b6" type="button" style='width:50px;height:50px; background-color:red' onclick='button6()'></button>
 <button id="b7" type="button" style='width:50px;height:50px; background-color:red' onclick='button7()'></button>
 <button id="b8" type="button" style='width:50px;height:50px; background-color:red' onclick='button8()'></button>
 </div>
 
 <div>
 <button id="b9" type="button" style='width:50px;height:50px; background-color:red' onclick='button9()'></button>
 <button id="b10" type="button" style='width:50px;height:50px; background-color:red' onclick='button10()'></button>
 <button id="b11" type="button" style='width:50px;height:50px; background-color:red' onclick='button11()'></button>
 <button id="12"type="button" style='width:50px;height:50px; background-color:red' onclick='button12()'></button>
 </div>
 
 <div>
 <button type="button" style='width:50px;height:50px' onclick='button13()'></button>
 <button type="button" style='width:50px;height:50px' onclick='button1()'></button>
 <button type="button" style='width:50px;height:50px' onclick='button1()'></button>
 <button type="button" style='width:50px;height:50px' onclick='button1()'></button>
 <div>
 

 
 
 
</body>
</html>

