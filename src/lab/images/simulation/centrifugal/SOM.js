//on click of next button
function navNext()
{

for (temp = 0; temp <=8 ; temp++) 
{ 
document.getElementById('canvas'+temp).style.visibility="hidden";
}
simsubscreennum+=1;
document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
document.getElementById('nextButton').style.visibility="hidden";
magic();
}

//on click of previous button
function navPrev()
{
temp=simsubscreennum;
document.getElementById('canvas'+temp).style.visibility="hidden";
document.getElementById('canvas'+(temp-1)).style.visibility="visible";
simsubscreennum=temp-1;
document.getElementById('prevButton').style.visibility="hidden";
magic();
}

//blink arrow on the next step
function animatearrow()
{
if (document.getElementById('arrow').style.visibility=="hidden")
document.getElementById('arrow').style.visibility="visible";
else
document.getElementById('arrow').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
clearInterval(myInt);
document.getElementById('arrow').style.visibility="hidden";
}

//hide and show objects based on step number
function magic()
{

if (simsubscreennum==1)
{
	if(repetition<10)
	{
		document.getElementById('titlestep').innerHTML="STEP ";
		document.getElementById('stepnumber').innerHTML="&nbsp;1&nbsp;";
		document.getElementById('pumptext').innerHTML="Start the pump by pressing the start button";
document.getElementById('onimg').style="visibility:visible; position: absolute; left: 597px;top: 135px;cursor: pointer;border: solid 1px;"

document.getElementById('onimg').onclick=function() { step1(); };
document.getElementById('offimg').style="visibility:visible; position: absolute;left: 597px;top: 149px;border: solid 1px;"
myInt = setInterval(function(){ animatearrow(); }, 500);
document.getElementById("pumponarm").style="margin-left:-50px; margin-top: -50px; position:absolute;";
document.getElementById('arrow').style="visibility:visible ;position:absolute; left: 630px; top: 130px; height: 50px; z-index: 10;";
	}
else
{
document.getElementById('arrow').style.visibility="visible";
document.getElementById('arrow').style.left="670px";
document.getElementById('arrow').style.top="173px";
document.getElementById('arrow').style.position="absolute";
 // Code for Chrome, Safari, Opera
 document.getElementById("arrow").style.WebkitTransform = "rotate(90deg)"; 
 // Code for IE9
 document.getElementById("arrow").style.msTransform = "rotate(90deg)"; 
 // Standard syntax
 document.getElementById("arrow").style.transform = "rotate(90deg)"; 
/*
document.getElementById('step7text1').style.visibility="hidden";
document.getElementById('step7text2').style.visibility="hidden";
document.getElementById('step7text3').style.visibility="hidden";
document.getElementById('step7text4').style.visibility="hidden";
document.getElementById('step7text5').style.visibility="hidden";
document.getElementById('step7text6').style.visibility="hidden";
document.getElementById('step7text7').style.visibility="hidden";
document.getElementById('step7text8').style.visibility="hidden";


document.getElementById('step7text3by2').style.visibility="hidden";

document.getElementById('step7text9').style.visibility="hidden";
*/

document.getElementById('step7text6by2').style.visibility="hidden";
document.getElementById('step7text7by2').style.visibility="hidden";
document.getElementById('step7text8by2').style.visibility="hidden";



	document.getElementById('titlestep').innerHTML="";
	document.getElementById('stepnumber').innerHTML="";
	document.getElementById('pumptext').innerHTML="Please stop the pump by pressing the stop button";
	document.getElementById('trial').style="visibility:hidden;";
document.getElementById('onimg').style="visibility:visible; position: absolute; left: 597px;top: 135px;border: solid 1px;"
document.getElementById('onimg').onclick=null;
document.getElementById('offimg').style="visibility:visible; position: absolute;left: 597px;top: 149px;cursor:pointer; border: solid 1px;";
document.getElementById('offimg').onclick=function(){step1bar();};
myInt = setInterval(function(){ animatearrow(); }, 500);
document.getElementById("pumponarm").style="margin-left:-50px; margin-top: -50px; position:absolute;";
}
}
else if (simsubscreennum==2)
{

myInt = setInterval(function(){ animatearrow(); }, 500);

document.getElementById('pumponarm').style.visibility="hidden";
document.getElementById('onimg').style.visibility="hidden";
document.getElementById('offimg').style.visibility="hidden";


 document.getElementById("step2handle").style="position:absolute;left: 430px; top: 85px";
 
 // Code for Chrome, Safari, Opera
 document.getElementById("arrow").style.WebkitTransform = "rotate(-90deg)"; 
 // Code for IE9
 document.getElementById("arrow").style.msTransform = "rotate(-90deg)"; 
 // Standard syntax
 document.getElementById("arrow").style.transform = "rotate(-90deg)"; 

// Code for Chrome, Safari, Opera
    document.getElementById("needle").style.WebkitTransformOrigin = "67% 79%";
    document.getElementById("needle").style.WebkitTransform = "rotate(-75deg)"; 
 // Code for IE9
    document.getElementById("needle").style.msTransformOrigin = "67% 79%";
    document.getElementById("needle").style.msTransform = "rotate(-75deg)"; 
 // Standard syntax
    document.getElementById("needle").style.transformOrigin = "67% 79%";
    document.getElementById("needle").style.transform = "rotate(-75deg)"; 


document.getElementById('arrow').style.left="505px";
document.getElementById('arrow').style.top="90px";
document.getElementById('arrow').style.visibility="visible";

animatearrow();

}
else if (simsubscreennum==3)
{
	document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
	document.getElementById('trial').innerHTML="Trial : " + repetition;
myInt = setInterval(function(){ animatearrow(); }, 500);

document.getElementById("magnify").onclick=function(){step3();};


document.getElementById('water').style="visibility:visible;position: absolute; left: 200px;top: 477px;height: 30px;width: 100px; ";
document.getElementById('hook4').style="visibility:visible;position: absolute; left: 200px;top: 280px;height: 50px;width: 100px;"
document.getElementById('magnify').style="visibility:visible; padding: 6px; width:30px; height:30px; position: absolute; top: 355px; left: 140px; cursor: zoom-in; z-index:10";
document.getElementById('hook5').style="visibility:visible;position: absolute; left: 200px;top: 476px;height: 40px;width: 100px;z-index:5"
//document.getElementById('step7text1').style.visibility="hidden";
//document.getElementById('step7text2').style.visibility="hidden";
//ocument.getElementById('step7text3').style.visibility="hidden";
//document.getElementById('step7text4').style.visibility="hidden";
//document.getElementById('step7text5').style.visibility="hidden";
//document.getElementById('step7text6').style.visibility="hidden";
//document.getElementById('step7text7').style.visibility="hidden";
//document.getElementById('step7text8').style.visibility="hidden";
//document.getElementById('step7text3by2').style.visibility="hidden";
document.getElementById('step7text6by2').style.visibility="hidden";
document.getElementById('step7text7by2').style.visibility="hidden";
document.getElementById('step7text8by2').style.visibility="hidden";
//document.getElementById('step7text9').style.visibility="hidden";

document.getElementById('tachoarm').style.visibility="hidden";
document.getElementById('valvearm').style="visibility:visible; position:absolute;left: 445px; top: 113px;";
document.getElementById('arrow').style.left="170px";
document.getElementById('arrow').style.top="325px";
// Code for Chrome, Safari, Opera
 document.getElementById("arrow").style.WebkitTransform = "rotate(45deg)"; 
 // Code for IE9
 document.getElementById("arrow").style.msTransform = "rotate(45deg)"; 
 // Standard syntax
 document.getElementById("arrow").style.transform = "rotate(45deg)";
document.getElementById('step3text1').style.visibility="visible";
document.getElementById('step3text2').style.visibility="visible";
document.getElementById('step3text3').style.visibility="visible";
document.getElementById('step3text4').style.visibility="visible";
document.getElementById('delvalve').style.visibility="visible";
document.getElementById('hookguage').style.visibility="visible";
document.getElementById('41').style.visibility="visible";
 document.getElementById('step3text1').innerHTML="Initial reading (water level till crest) = ____ cm"; 

document.getElementById('step3text2').innerHTML="Final reading = ____ cm";
document.getElementById('step3text3').innerHTML="Head of water = ____ cm";
document.getElementById('step3text4').innerHTML="Actual discharge Q<sub>act</sub> = ____ cm<sup>3</sup>/sec";
}

else if (simsubscreennum==4)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
document.getElementById('valvearm').style.visibility="hidden";
document.getElementById('hookguage').style.visibility="hidden";
document.getElementById('step3text1').style.visibility="hidden";
document.getElementById('step3text2').style.visibility="hidden";
document.getElementById('step3text3').style.visibility="hidden";
document.getElementById('step3text4').style.visibility="hidden";

document.getElementById('magnify').onclick= function(){step4();};
	document.getElementById('needle4').style.animation=null;
document.getElementById('delvalve').style.visibility="hidden";
document.getElementById('41').style.visibility="hidden";
document.getElementById('magnify').style="padding: 6px; width:30px; height:30px; position: absolute; top: 135px; left: 230px; cursor: zoom-in; z-index:10";
document.getElementById('hook1').style.visibility="hidden";
document.getElementById('hook2').style.visibility="hidden";
document.getElementById('hook3').style.visibility="hidden";
document.getElementById('hook4').style.visibility="hidden";
document.getElementById('hook5').style.visibility="hidden";
document.getElementById('water').style.visibility="hidden";
document.getElementById('delhead').style.visibility="hidden";
document.getElementById('needle4').style.visibility="hidden";

document.getElementById('arrow').style.left="250px";
document.getElementById('arrow').style.top="100px";
// Code for Chrome, Safari, Opera
 document.getElementById("arrow").style.WebkitTransform = "rotate(45deg)"; 
 // Code for IE9
 document.getElementById("arrow").style.msTransform = "rotate(45deg)"; 
 // Standard syntax
 document.getElementById("arrow").style.transform = "rotate(45deg)";
 
// Code for Chrome, Safari, Opera
    document.getElementById("needle4").style.WebkitTransformOrigin = "67% 79%";
document.getElementById("needle4").style.WebkitTransform = "rotate(-40deg)"; 
 // Code for IE9
    document.getElementById("needle4").style.msTransformOrigin = "67% 79%";
document.getElementById("needle4").style.msTransform = "rotate(-40deg)"; 
 // Standard syntax
    document.getElementById("needle4").style.transformOrigin = "67% 79%";
    document.getElementById("needle4").style.transform = "rotate(-40deg)";  
    
    document.getElementById('step4text1').innerHTML="Delivery Head = ____ kg/cm<sup>2</sup>";
document.getElementById('step4text2').innerHTML="Delivery Head = ____ m";
 
}
else if (simsubscreennum==5)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
document.getElementById('delhead').style.visibility="hidden";
document.getElementById('suchead').style.visibility="hidden";
document.getElementById('needle4').style.visibility="hidden";
document.getElementById('needle5').style.visibility="hidden";
document.getElementById('arrow').style.left="300px";
document.getElementById('arrow').style.top="170px";
// Code for Chrome, Safari, Opera
 document.getElementById("arrow").style.WebkitTransform = "rotate(60deg)"; 
 // Code for IE9
 document.getElementById("arrow").style.msTransform = "rotate(60deg)"; 
 // Standard syntax
 document.getElementById("arrow").style.transform = "rotate(60deg)";
 document.getElementById('magnify').style= "padding: 6px; width:30px; height:30px; position: absolute; top: 190px; left: 270px; cursor: zoom-in; z-index:10";
 document.getElementById('magnify').onclick= function(){step5();};
// Code for Chrome, Safari, Opera
    document.getElementById("needle5").style.WebkitTransformOrigin = "67% 79%";
document.getElementById("needle5").style.WebkitTransform = "rotate(-75deg)"; 
 // Code for IE9
    document.getElementById("needle5").style.msTransformOrigin = "67% 79%";
document.getElementById("needle5").style.msTransform = "rotate(-75deg)"; 
 // Standard syntax
    document.getElementById("needle5").style.transformOrigin = "67% 79%";
    document.getElementById("needle5").style.transform = "rotate(-75deg)"; 
    
	document.getElementById('needle5').style.animation=null;
	
document.getElementById('step5text1').innerHTML="Suction Head = ____ kg/cm<sup>2</sup>";
document.getElementById('step5text2').innerHTML="Suction Head = ____ m";
document.getElementById('step5text4').innerHTML="Total Head =H<sub>d</sub>+H<sub>s</sub>+z = ____ m";
	
 }
else if (simsubscreennum==6) 
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
document.getElementById('arrow').style.left="310px";
document.getElementById('arrow').style.top="75px";
// Code for Chrome, Safari, Opera
 document.getElementById("arrow").style.WebkitTransform = "rotate(60deg)"; 
 // Code for IE9
 document.getElementById("arrow").style.msTransform = "rotate(60deg)"; 
 // Standard syntax
 document.getElementById("arrow").style.transform = "rotate(60deg)";
document.getElementById('magnify').style="padding: 6px; width:30px; height:30px; position: absolute; top: 95px; left: 285px; cursor: zoom-in; z-index:10;";

 document.getElementById('magnify').onclick= function(){step6();};

document.getElementById('suchead').style.visibility="hidden";
document.getElementById('needle5').style.visibility="hidden";
document.getElementById('wattmeter2').style.visibility="hidden";
document.getElementById('wattmeter3').style.visibility="hidden";
document.getElementById('needlewatt').style.visibility="hidden";
	document.getElementById('needlewatt').style.animation=null;
	
	document.getElementById('step6text1').innerHTML=" Wattmeter Reading = ____ Watt";
	
//document.getElementById('step6text2').innerHTML="Input Power = ____ Watt";
//document.getElementById('step6text3').innerHTML="Output Power = ____ Watt";
//document.getElementById('step6text4').innerHTML="Efficiency = ____ %";
}

else if (simsubscreennum==7)
{

document.getElementById('wattmeter2').style.visibility="hidden";
document.getElementById('wattmeter3').style.visibility="hidden";
document.getElementById('needlewatt').style.visibility="hidden";
document.getElementById('magnify').style.visibility="hidden";
 document.getElementById("magnify").onclick=null;
 /*
document.getElementById('step7text1').style.visibility="visible";
document.getElementById('step7text2').style.visibility="visible";
document.getElementById('step7text3').style.visibility="visible";
document.getElementById('step7text4').style.visibility="visible";
document.getElementById('step7text5').style.visibility="visible";
document.getElementById('step7text6').style.visibility="visible";
document.getElementById('step7text7').style.visibility="visible";
document.getElementById('step7text8').style.visibility="visible";
document.getElementById('step7text3by2').style.visibility="visible";
*/

document.getElementById('step7text6by2').style.visibility="visible";
document.getElementById('step7text7by2').style.visibility="visible";
document.getElementById('step7text8by2').style.visibility="visible";
//document.getElementById('step7text9').style.visibility="hidden";

//document.getElementById('step7text1').innerHTML=" Delivery Head = ____ m of water";
//document.getElementById('step7text2').innerHTML=" Suction Head = ____ m of water";
//document.getElementById('step7text3by2').innerHTML="= ____ cm<sup>3</sup>/sec";
//document.getElementById('step7text4').innerHTML="Watt Meter Reading, W<sub>R</sub> = ____ W";
//document.getElementById('step7text5').innerHTML="Total Head, H = H<sub>s</sub>+H<sub>d</sub>+z = ____ m";

document.getElementById('step7text6by2').innerHTML="Input Power = ";
document.getElementById('step7text7by2').innerHTML="Output Power = ";
document.getElementById('step7text8by2').innerHTML="Efficiency = ";
step7();
}

else
{
//document.getElementById('step7text9').style.visibility="hidden";
document.getElementById('onimg').style.visibility="hidden";
document.getElementById('offimg').style.visibility="hidden";


document.getElementById('step8text1').style="visibility:visible; border:1px solid; position:absolute; cursor:pointer; padding:5px; left:30px; top:50px ";
document.getElementById('step8text2').style="visibility:visible;cursor:pointer; padding:5px;  position:absolute; left:430px; top:50px ";
document.getElementById('step8text3').style="visibility:visible;cursor:pointer;padding:5px;  position:absolute; left:430px; top:100px ";
document.getElementById('step8text4').style="visibility:visible;cursor:pointer;padding:5px;  position:absolute; left:30px; top:100px ";
document.getElementById('graph').src="png/g1.png"


}
}


//Move pointing finger with mouse
$(document).mousemove(function(e)
{

if(simsubscreennum==1 && (!pumpstatus || repetition==10))
{
if(e.pageX<800 && e.pageY<600)  
{
document.getElementById('pumponarm').style.visibility="visible";
$("#pumponarm").css({left:e.pageX, top:e.pageY});
}
else
document.getElementById('pumponarm').style.visibility="hidden";
}

else if(simsubscreennum==2 && speedset && !speedmeasured)
{
if(e.pageX<800 && e.pageY<600)  
{
document.getElementById('tachoarm').style.visibility="visible";
$("#tachoarm").css({left:e.pageX, top:e.pageY});
}
else
document.getElementById('tachoarm').style.visibility="hidden";
}


});



function step1()
{
pumpstatus=1;

myStopFunction();
document.getElementById('pumponarm').style.margin="-60px 0 0 -78px";
setTimeout(function(){ document.getElementById('pumponarm').style.margin="-50px 0 0 -60px"; }, 500);
document.getElementById('pumponarm').style.left="680px";
document.getElementById('pumponarm').style.top="200px";

setTimeout(function(){ document.getElementById('nextButton').style.visibility="visible"; }, 250);

}

function step1bar()
{

pumpstatus=0;

myStopFunction();
document.getElementById('pumponarm').style.margin="-60px 0 0 -78px";
setTimeout(function(){ document.getElementById('pumponarm').style.margin="-50px 0 0 -60px"; }, 500);

document.getElementById('pumponarm').style.left="680px";
document.getElementById('pumponarm').style.top="215px";

setTimeout(function(){ 
simsubscreennum=7; 
//document.getElementById('step7text9').style.visibility="visible";
document.getElementById('pumptext').style.visibility="hidden";
//document.getElementById('step7text9').innerHTML="Well Done! You have finished the experiment.<br> Click next to view graphical results. ";
document.getElementById('pumponarm').style.visibility="hidden";
document.getElementById('nextButton').style.visibility="visible"; }, 1000);
};


function step2()
{
 // Code for Chrome, Safari, Opera
    document.getElementById("lever").style.WebkitTransformOrigin = "70% 92%";
document.getElementById("lever").style.WebkitTransform = "rotate(20deg)"; 
 // Code for IE9
    document.getElementById("lever").style.msTransformOrigin = "70% 92%";
document.getElementById("lever").style.msTransform = "rotate(20deg)"; 
 // Standard syntax
    document.getElementById("lever").style.transformOrigin = "70% 92%";
    document.getElementById("lever").style.transform = "rotate(20deg)"; 
speedset=1;
document.getElementById('arrow').style.left="305px";
document.getElementById('arrow').style.top="390px";



// Code for Chrome, Safari, Opera
 document.getElementById("arrow").style.WebkitTransform = "rotate(-180deg)"; 
 // Code for IE9
 document.getElementById("arrow").style.msTransform = "rotate(-180deg)"; 
 // Standard syntax
 document.getElementById("arrow").style.transform = "rotate(-180deg)";

 document.getElementById("lever").style.cursor = "auto";
}

function step2nhalf()
{
speedmeasured=1;


document.getElementById('tachoarm').style.margin="0px";
document.getElementById('tachoarm').style.position="absolute";
document.getElementById('tachoarm').style.left= "179px";
document.getElementById('tachoarm').style.top= "257px";
myStopFunction();
document.getElementById("tachohole").style.cursor = "auto";

document.getElementById("needle").style.animation= "myturn 1s 1 forwards";
setTimeout(function(){
document.getElementById('step2text').innerHTML="Speed of Motor = "+1000+" rpm";
}, 1500);
setTimeout(function(){ document.getElementById('nextButton').style.visibility="visible"; }, 2000);

}


function step3()
{
 document.getElementById("magnify").onclick=null;
document.getElementById('hook1').style.visibility="visible";
document.getElementById('hook2').style.visibility="visible";
document.getElementById('hook3').style.visibility="visible";
document.getElementById('hook4').style.visibility="visible";
document.getElementById('hook5').style.visibility="visible";
document.getElementById('water').style.visibility="visible";


document.getElementById('arrow').style.left="440px";
document.getElementById('arrow').style.top="150px";
 // Code for Chrome, Safari, Opera
document.getElementById("arrow").style.WebkitTransform = "rotate(-90deg)"; 
 // Code for IE9
document.getElementById("arrow").style.msTransform = "rotate(-90deg)"; 
 // Standard syntax
document.getElementById("arrow").style.transform = "rotate(-90deg)";
 document.getElementById("valvearm").onclick=function(){step3nhalf();};
document.getElementById('magnify').style.cursor= "auto";
document.getElementById('valvearm').style.cursor= "pointer";
document.getElementById('sethook').style.cursor= "auto";
showgauge==1;
}

function step3nquarter()
{
if(showgauge==1)
{
document.getElementById('hook2').style.animation=" myhook 2s 1 forwards";
setTimeout(function(){ 
 document.getElementById('step3text1').innerHTML="Initial reading (water level till crest) = "+values[readingnum-1][4]+" cm"; 
 document.getElementById('arrow').style.left="440px";
 document.getElementById('arrow').style.top="150px";
 // Code for Chrome, Safari, Opera
 document.getElementById("arrow").style.WebkitTransform = "rotate(-90deg)"; 
 // Code for IE9
 document.getElementById("arrow").style.msTransform = "rotate(-90deg)"; 
 // Standard syntax
 document.getElementById("arrow").style.transform = "rotate(-90deg)";
 document.getElementById("valvearm").style.cursor = "pointer";
 document.getElementById("sethook").style.cursor = "auto";
 ;
  showgauge=3;
  document.getElementById("valvearm").style.animation = null;
  document.getElementById("sethook").onclick=null;
  document.getElementById("valvearm").onclick=function(){ step3nhalf();};

}, 2000);
}
else if (showgauge==3)
{

document.getElementById('hook2').style.animation=" myhookfinal 2s 1 forwards";
setTimeout(function(){
document.getElementById('step3text2').innerHTML="Final reading = "+values[readingnum-1][5]+" cm";
document.getElementById('step3text3').innerHTML="Head of water = "+values[readingnum-1][6]+" cm";
document.getElementById('step3text4').innerHTML="Actual discharge Q<sub>act</sub> = "+values[readingnum-1][7]+" cm<sup>3</sup>/sec";
document.getElementById("sethook").style.cursor = "auto";
myStopFunction();
showgauge=1;
   document.getElementById("sethook").onclick=null;
setTimeout(function(){ document.getElementById('nextButton').style.visibility="visible"; }, 250);}, 2000);
}
}

 
function step3nhalf()
{
if (showgauge==1)
{document.getElementById("valvearm").style.transformOrigin = "10% 15%";
document.getElementById("valvearm").style.animation = "valveturn 0.5s "+2+" ";
document.getElementById("water").style.animation = "water0 "+1.5+"s 1 forwards";  

setTimeout(function(){ 
document.getElementById('valvearm').style.cursor="auto";
document.getElementById("sethook").style.cursor = "pointer";
document.getElementById('arrow').style.left="325px";
document.getElementById('arrow').style.top="365px";


 // Code for Chrome, Safari, Opera
 document.getElementById("arrow").style.WebkitTransform = "rotate(45deg)"; 
 // Code for IE9
 document.getElementById("arrow").style.msTransform = "rotate(45deg)"; 
 // Standard syntax
 document.getElementById("arrow").style.transform = "rotate(45deg)";
   document.getElementById("valvearm").onclick=null;
 document.getElementById("sethook").onclick=function(){step3nquarter();};
},1250);

}
if (showgauge==3)
{
document.getElementById("valvearm").style.transformOrigin = "10% 15%";
document.getElementById("valvearm").style.animation = "valveturn 0.5s 2 ";
document.getElementById("water").style.animation = "water "+1.5*repetition+"s 1 forwards";  
setTimeout(function(){ 
document.getElementById('valvearm').style.cursor="auto";
document.getElementById("sethook").style.cursor = "pointer";
document.getElementById('arrow').style.left="325px";
document.getElementById('arrow').style.top="365px";

 // Code for Chrome, Safari, Opera
 document.getElementById("arrow").style.WebkitTransform = "rotate(45deg)"; 
 // Code for IE9
 document.getElementById("arrow").style.msTransform = "rotate(45deg)"; 
 // Standard syntax
 document.getElementById("arrow").style.transform = "rotate(45deg)";
    document.getElementById("valvearm").onclick=null;
  document.getElementById("sethook").onclick=function(){step3nquarter();};
},repetition*1000);

}

}


function step4()
{
myStopFunction();
document.getElementById('magnify').style.cursor= "auto";
document.getElementById('magnify').onclick= null;
document.getElementById('delhead').style.visibility="visible";
document.getElementById('needle4').style.visibility="visible";
document.getElementById('needle4').style.animation="myturn  2s 1 forwards";
/*
setTimeout(function(){ // Code for Chrome, Safari, Opera
document.getElementById("needle4").style.WebkitTransform = "rotate(0deg)";
 // Code for IE9
document.getElementById("needle4").style.msTransform = "rotate(0deg)";
 // Standard syntax
document.getElementById("needle4").style.transform = "rotate(0deg)"; }, 250);
*/
setTimeout(function(){
document.getElementById('step4text1').innerHTML="Delivery Head = "+values[readingnum-1][0]+" kg/cm<sup>2</sup>";
document.getElementById('step4text2').innerHTML="Delivery Head = "+values[readingnum-1][1]+" m";
}, 1000);

myStopFunction();
setTimeout(function(){ document.getElementById('nextButton').style.visibility="visible"; }, 1250);
}

function step5()
{

document.getElementById('suchead').style.visibility="visible";
document.getElementById('needle5').style.visibility="visible";
document.getElementById('magnify').style.cursor= "auto";
document.getElementById('needle5').style.animation="myturn  2s 1 forwards";

/*setTimeout(function(){ // Code for Chrome, Safari, Opera
document.getElementById("needle5").style.WebkitTransform = "rotate(0deg)";
 // Code for IE9
document.getElementById("needle5").style.msTransform = "rotate(0deg)";
 // Standard syntax
document.getElementById("needle5").style.transform = "rotate(0deg)"; }, 250);
*/
setTimeout(function(){
document.getElementById('step5text1').innerHTML="Suction Head = "+values[readingnum-1][2]+" kg/cm<sup>2</sup>";
document.getElementById('step5text2').innerHTML="Suction Head = "+values[readingnum-1][3]+" m";
document.getElementById('step5text4').innerHTML="Total Head =H<sub>d</sub>+H<sub>s</sub>+z ="+ values[readingnum-1][9]+" m";
}, 1000);

myStopFunction();
setTimeout(function(){ document.getElementById('nextButton').style.visibility="visible"; }, 1250);
}

function step6()
{
document.getElementById('magnify').style.cursor= "auto";
document.getElementById('wattmeter2').style.visibility="visible";
document.getElementById('wattmeter3').style.visibility="visible";
document.getElementById('needlewatt').style.visibility="visible";
// Code for Chrome, Safari, Opera
    document.getElementById("needlewatt").style.WebkitTransformOrigin = "50% 73%";
 // Code for IE9
    document.getElementById("needlewatt").style.msTransformOrigin = "50% 73%";
 // Standard syntax
    document.getElementById("needlewatt").style.transformOrigin = "50% 73%";

document.getElementById('needlewatt').style.animation="myturn2  1s 1 forwards";
setTimeout(function(){

	document.getElementById('step6text1').innerHTML=" Wattmeter Reading = "+values[readingnum-1][8]+" Watt";
	
//document.getElementById('step6text2').innerHTML="Input Power = "+values[readingnum-1][10]+" Watt";
//document.getElementById('step6text3').innerHTML="Output Power = "+ values[readingnum-1][11]+" Watt";
//document.getElementById('step6text4').innerHTML="Efficiency = "+ values[readingnum-1][12]+" %";
}, 1000);


myStopFunction();
setTimeout(function(){ document.getElementById('nextButton').style.visibility="visible"; }, 1250);

}

function step7()
{
repetition+=1;

setTimeout(function(){ 
//document.getElementById('step7text1').innerHTML=" Delivery Head = "+values[readingnum-1][1]+" m of water";
//document.getElementById('step7text2').innerHTML=" Suction Head = "+values[readingnum-1][3]+" m of water";
//document.getElementById('step7text3by2').innerHTML="= "+ values[readingnum-1][7]+" cm<sup>3</sup>/sec";
//document.getElementById('step7text4').innerHTML="Watt Meter Reading, W<sub>R</sub> = "+values[readingnum-1][8]+" W";
//document.getElementById('step7text5').innerHTML="Total Head, H = H<sub>s</sub>+H<sub>d</sub>+z = "+ values[readingnum-1][9]+" m";

document.getElementById('step7text6by2').innerHTML="Input Power = "+ values[readingnum-1][10]+" W";
document.getElementById('step7text7by2').innerHTML="Output Power = "+ values[readingnum-1][11]+" W";
document.getElementById('step7text8by2').innerHTML="Efficiency = "+ values[readingnum-1][12]+" %";
setTimeout(function(){
if (repetition<10)
{
//readingnum+=Math.ceil(Math.random()*3);
readingnum+=1;
simsubscreennum=2;
//document.getElementById('step7text9').innerHTML="Repeat Steps 3, 4, 5 and 6 to get more data points for plotting graph";
}
else
{
simsubscreennum=0;
//document.getElementById('step7text9').innerHTML="";
}
}, 250);

setTimeout(function(){ 
//document.getElementById('step7text9').style.visibility="visible";
document.getElementById('nextButton').style.visibility="visible"; }, 500);
}, 1000);



}
function step8()
{
for (temp=1; temp<5; temp++) { document.getElementById('step8text'+temp).style.border="none";}
}
