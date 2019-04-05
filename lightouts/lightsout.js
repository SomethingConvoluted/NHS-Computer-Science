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
toggle('5');
toggle('1');
toggle('6');
toggle('9');
}
//
function button6() {
toggle('6');
toggle('7');
toggle('10');
toggle('5');
toggle('2');
}
//
function button7() {
toggle('6');
toggle('7');
toggle('8');
toggle('3');
toggle('11');
}
//
function button8() {
toggle('4');
toggle('7');
toggle('8');
toggle('12');
}
//
function button9() {
toggle('9');
toggle('10');
toggle('13');
toggle('1');
}
//
function button10() {
toggle('10');
toggle('6');
toggle('9');
toggle('11');
toggle('14');
}
//
function button11() {
toggle('11');
toggle('7');
toggle('10');
toggle('12');
toggle('15');
}
//
function button12() {
toggle('12');
toggle('8');
toggle('11');
toggle('16');
}
//
function button13() {
toggle('13');
toggle('9');
toggle('14');
}
//
function button14() {
toggle('14');
toggle('13');
toggle('15');
toggle('10');
}
//
function button15() {
toggle('15');
toggle('14');
toggle('16');
toggle('11');
}
//
function button16() {
toggle('16');
toggle('15');
toggle('12');
}

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
 <button id="b12"type="button" style='width:50px;height:50px; background-color:red' onclick='button12()'></button>
 </div>
 
 <div>
 <button id="b13" type="button" style='width:50px;height:50px; background-color:red' onclick='button13()'></button>
 <button id="b14" type="button" style='width:50px;height:50px; background-color:red' onclick='button14()'></button>
 <button id="b15" type="button" style='width:50px;height:50px; background-color:red' onclick='button15()'></button>
 <button id="b16" type="button" style='width:50px;height:50px; background-color:red' onclick='button16()'></button>
 <div>
 

 
 
 
</body>
</html>

