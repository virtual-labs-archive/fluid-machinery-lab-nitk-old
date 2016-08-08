//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;


function navNext()
{

for (temp = 0; temp <=7 ; temp++) 
{ 
document.getElementById('canvas'+temp).style.visibility="hidden";
}

simsubscreennum+=1;
document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
document.getElementById('nextButton').style.visibility="hidden";
magic();
}

//blink arrow on the next step
function animatearrow()
{
if (document.getElementById('arrow1').style.visibility=="hidden")
document.getElementById('arrow1').style.visibility="visible";
else
document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}





//Move pointing finger with mouse
$(document).mousemove(function(e)
{

if(simsubscreennum==1 && mpointer==0) 
{
if(e.pageX<800 && e.pageY<600)  
{
document.getElementById('onarm').style.visibility="visible";

 $("#onarm").css({left:e.pageX, top:e.pageY});
}


}

else if(simsubscreennum!=1)
{
	document.getElementById('onarm').style.visibility="hidden";
}


});


function magic()
{
	
			
		
	
	if (simsubscreennum==1)
	{
		document.getElementById('trial').style="visibility:hidden ;left: 70px; top: 100px;position: absolute;font-weight: bold;";
		document.getElementById('trial').innerHTML="";
		
		document.getElementById("onarm").style="margin-left:-50px; margin-top: -50px; position:absolute;";
		if(flag==1)
		{
			document.getElementById('can1on').onclick="";
			document.getElementById('pumptext').innerHTML="Stop the pump by pressing the stop button."
				
		}
		else
		{
			
			document.getElementById('can1on').onclick=function() { step1(); };
			document.getElementById('can1-3').onclick=function() { stepstop(); };
		}
		
	}
	else if (simsubscreennum==2)
	{
		refresh1();
		
		repeat+=1;
		
		if(repeat!=1){
			
			myStopFunction();
			
		}
		else
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 300px; top: 240px; height: 50px; z-index: 10;";
			
			document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
			 // Code for IE9
			 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
			 // Standard syntax
			 document.getElementById("arrow1").style.transform = "rotate(90deg)";
			document.getElementById('can2-2').onclick=function() { step2(); };
		}
		
	}
	else if (simsubscreennum==3)
	{
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		refresh1();
		if (repeat==1)
		{
		 step3andhalf();	
		}
		else
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 520px; top: 190px; height: 50px; z-index: 10;";
		
			
			document.getElementById('can3-3').style.visibility="visible";
			document.getElementById('can3-4').innerHTML="Applied weight on pan = ";
			document.getElementById('can3-3').onclick=function() { step3(); };	
		}	
	}
	else if (simsubscreennum==4)
	{
		document.getElementById('can3-3').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 720px; top: 170px; height: 50px; z-index: 10;";
			
		document.getElementById('can4-3').onclick=function() { step4();};
		
	}
	else if (simsubscreennum==5)
	{
		document.getElementById('can3-3').style.visibility="hidden";
		document.getElementById('can5-9').innerHTML="Initial reading (water level till crest) = "+values[lnt][4] +" cm" ;
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 190px; height: 50px; z-index: 10;";
			
			document.getElementById("arrow1").style.WebkitTransform = "rotate(45deg)"; 
			 // Code for IE9
			 document.getElementById("arrow1").style.msTransform = "rotate(45deg)"; 
			 // Standard syntax
			 document.getElementById("arrow1").style.transform = "rotate(45deg)";
			 
		document.getElementById('can5-7').onclick=function() { step5andhalf();};
		
	}
	
	
	else if (simsubscreennum==6)
	{
		step6();
		
		if(repeat==7)
		{
			flag=1;
			mpointer=0;
			simsubscreennum=0;
		}
		else if (repeat <=6)
		{
			
			simsubscreennum=2;
			
			magic();
			
		}
		
	}
	else if (simsubscreennum==7)
	{
	
	myStopFunction();
	}
	
	
}

function step1()
{
	mpointer=1;
	document.getElementById('onarm').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";
}

function step2()
{
	myStopFunction();
	
	document.getElementById("can2-2").style.transformOrigin = "30% 30%";
	document.getElementById("can2-2").style.animation = "valveturn-2 0.8s ";
	
	document.getElementById("can2-4").style.transformOrigin = "62% 37%";
	
	setTimeout(function(){
	document.getElementById("can2-4").style.animation = "arrow-1 3s forwards ";}, 300);
	
	setTimeout(function(){
		document.getElementById('can2-5').innerHTML="Constant Head = 14 m" ;
		document.getElementById('nextButton').style.visibility="visible";
	}, 2500);
}
function step3()
{
	
	myStopFunction();
	
	document.getElementById("can3-3").style.animation = "water0 1s 1 forwards";
	setTimeout(function(){
	
	document.getElementById('can3-4').innerHTML="Applied weight on pan = "+values[lnt][1] +" kg" ;
	document.getElementById('can3-5').innerHTML="Spring balance reading = "+values[lnt][2] +" kg" ;
	document.getElementById('can3-6').innerHTML="Torque = "+values[lnt][3] +" N-m";
	setTimeout(function(){
	
	document.getElementById('nextButton').style.visibility="visible";}, 1000);}, 3000);
	
	
}
function step3andhalf()
{
	document.getElementById('can3-3').style.visibility="hidden";
	
	setTimeout(function(){
	
	document.getElementById('can3-4').innerHTML="Dead weight of the pan = 1 kg "
	document.getElementById('can3-5').innerHTML="Spring balance reading = "+values[lnt][2] +" cm" ;
	document.getElementById('can3-6').innerHTML="Torque = "+values[lnt][3] +" N-m";
	}, 1000);
	setTimeout(function(){
	
	document.getElementById('nextButton').style.visibility="visible";}, 1500);
}
function step4()
{
	myStopFunction();
	
	document.getElementById("can4-3").style.animation = "tacho 1s 1 forwards";
	setTimeout(function(){
	document.getElementById('can4-4').innerHTML="Speed of motor = "+values[lnt][0] +" rpm";
	document.getElementById('nextButton').style.visibility="visible";
	}, 1000);
}



/* function step5()
{
	myStopFunction(); 
	
	
	//document.getElementById("can5-5").style.animation = "water-4 1.5s 1 forwards";	
	setTimeout(function(){
	document.getElementById("can5-3").style.animation = "myhook-1 2s 1  forwards";
	}, 1500);
	
	step5andhalf();
	
	
	
	
} */
function step5andhalf()
{
	myStopFunction();
	setTimeout(function(){
	document.getElementById("can5-13").style.animation = "water-5 1.5s 1 forwards";
	
	}, 1000);
	
	setTimeout(function(){
	document.getElementById("can5-3").style.animation = "myhook-2 2s 1  forwards";
	
	step5quarter();
	
	}, 2700);
	
	
}

function step5quarter()
{
	setTimeout(function(){
	
	document.getElementById('can5-10').innerHTML="Final reading = "+values[lnt][5] +" cm" ;
	document.getElementById('can5-11').innerHTML="Head of water = "+values[lnt][6] + " cm";
	document.getElementById('can5-12').innerHTML="Actual discharge, Q<sub>act</sub> = "+values[lnt][7] +" m<sup>3</sup>/sec" ;
	setTimeout(function(){
	document.getElementById('nextButton').style.visibility="visible";
	}, 500);
	
	}, 3000);
	
}
function step6()
{
	setTimeout(function(){
	document.getElementById('can6-5').innerHTML="Input power = "+values[lnt][8] +" watt" ;
	document.getElementById('can6-6').innerHTML="Output power = "+values[lnt][9] +" watt" ;
	document.getElementById('can6-7').innerHTML="Efficiency = "+values[lnt][10] +" %" ;
	document.getElementById('can6-8').innerHTML="Unit power = "+values[lnt][11] +" watt" ;
	document.getElementById('can6-9').innerHTML="Unit speed = "+values[lnt][12] +" rpm" ;
	document.getElementById('can6-10').innerHTML="Unit discharge = "+values[lnt][13] +" m<sup>3</sup>/sec " ;
	document.getElementById('nextButton').style.visibility="visible";
	
	lnt+=1;
	}, 500);
	
	
}


function stepstop()
{
	if(flag!=1){
	document.getElementById('nextButton').style.visibility="hidden";	
	}
	else
	{
	simsubscreennum=6;
	document.getElementById('nextButton').style.visibility="visible";	
	}
	
	
}
function refresh1()
{
	document.getElementById("can2-2").style.transformOrigin = "";
	document.getElementById("can2-2").style.animation = "";
	
	document.getElementById("can2-4").style.transformOrigin = "";
	document.getElementById("can2-4").style.animation = "";
	
	document.getElementById('can2-5').innerHTML="Constant Head = ";
	document.getElementById("can3-3").style.animation = "";
	
	
	//document.getElementById('can3-4').innerHTML="Applied weight on pan = ";
	document.getElementById('can3-5').innerHTML="Spring balance reading = ";
	document.getElementById('can3-6').innerHTML="Torque = ";
	
	document.getElementById("can4-3").style.animation = "";
	document.getElementById('can4-4').innerHTML="Speed of motor = ";
	document.getElementById("can5-5").style.animation = "";
	
	document.getElementById("can5-3").style.animation = "";
	document.getElementById("can5-13").style.animation = "";
	
	document.getElementById("can5-3").style.animation = "";
	
	document.getElementById('can5-9').innerHTML="Initial reading (water level till crest) = ";
	document.getElementById('can5-10').innerHTML="Final reading = ";
	document.getElementById('can5-11').innerHTML="Head of water = ";
	document.getElementById('can5-12').innerHTML="Actual discharge, Q<sub>act</sub> = ";
	
	document.getElementById('can6-5').innerHTML="Input power = ";
	document.getElementById('can6-6').innerHTML="Output power = ";
	document.getElementById('can6-7').innerHTML="Efficiency = ";
	document.getElementById('can6-8').innerHTML="Unit power = ";
	document.getElementById('can6-9').innerHTML="Unit speed = ";
	document.getElementById('can6-10').innerHTML="Unit discharge = ";
	document.getElementById('nextButton').style.visibility="hidden";
	
	
}

