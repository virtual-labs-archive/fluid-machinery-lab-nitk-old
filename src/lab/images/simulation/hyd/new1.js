//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;
var flag_1=0;


function navNext()
{

for (temp = 0; temp <= 7 ; temp++) 
{ 
document.getElementById('canvas'+temp).style.visibility="hidden";
}

simsubscreennum+=1;
document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
document.getElementById('nextButton').style.visibility="hidden";
magic();
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
//-----------------------------------------blink arrow on the next step---------------------------------------------
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

//-------------------------------------function magic starts here----------------------------------------------------

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
			document.getElementById('can1off').onclick=function() { stepstop(); };
		}
		
		
	}
	
	else if (simsubscreennum==2)
	{
		document.getElementById('can2-2').style.visibility="hidden";
		document.getElementById('can2-3').style.visibility="hidden";
		
		refresh1();
		repeat+=1;
		if(repeat!=1){
			
			myStopFunction();
			
		}
		else
		{
			
		myInt = setInterval(function(){ animatearrow(); }, 500);
			
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 155px; top: 205px; height: 50px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
				 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
				 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(90deg)";
		document.getElementById('can2-5').onclick=function() { step_2a(); };
				
		}
		
		
	}
	
	else if (simsubscreennum==3)
	{
		document.getElementById('can2-2').style.visibility="hidden";
		document.getElementById('can2-3').style.visibility="hidden";
		
		document.getElementById('can3-2').style.visibility="hidden";
		document.getElementById('can3-3').style.visibility="hidden";
		
		
		
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		refresh1();
		myInt = setInterval(function(){ animatearrow(); }, 500);
			
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 157px; top: 315px; height: 50px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			 // Code for IE9
			 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			 // Standard syntax
			 document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById('can3-8').onclick=function() { step_3a(); };
		
		
		
	}
	
	else if (simsubscreennum==4)
	{
		document.getElementById('can3-2').style.visibility="hidden";
		document.getElementById('can3-3').style.visibility="hidden";
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 210px; top: 470px; height: 50px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(-135deg)"; 
			 // Code for IE9
			 document.getElementById("arrow1").style.msTransform = "rotate(-135deg)"; 
			 // Standard syntax
			 document.getElementById("arrow1").style.transform = "rotate(-135deg)";
			
		step4();
		
	}

	else if (simsubscreennum==5)
	{
		myStopFunction();
		myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 100px; top: 430px; height: 50px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(-135deg)"; 
			 // Code for IE9
			 document.getElementById("arrow1").style.msTransform = "rotate(-135deg)"; 
			 // Standard syntax
			 document.getElementById("arrow1").style.transform = "rotate(-135deg)";
		step5();
		
		
	}
	
	else if (simsubscreennum==6)
	{
		myStopFunction();
		step6();
		
		
		if(repeat==6)
		{
			flag=1;
			mpointer=0;
			simsubscreennum=0;
		}
		else if (repeat <=5)
		{
			
				
			simsubscreennum=2;
			
			
			magic();
			
		}

		
	}
	else (simsubscreennum==7)
	{
		
	}
	
}

function step1()
{
	mpointer=1;
	document.getElementById('onarm').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";
}


function step_2a()
{
	myStopFunction();
	document.getElementById('can2-2').style.visibility="visible";
	document.getElementById('can2-3').style.visibility="visible";
	
	myInt = setInterval(function(){ animatearrow(); }, 500);
	
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 630px; top: 220px; height: 50px; z-index: 10;";
	document.getElementById('can2-3').onclick=function() { step2(); };
}
function step2()
{
	myStopFunction();
	document.getElementById("can2-3").style.transformOrigin = "25% 26%";
	
	document.getElementById("can2-3").style.animation = "valveturn 1.6s  ";
	
	setTimeout(function(){
	document.getElementById('can2-4').innerHTML="Supply head = 2.87 m";
	document.getElementById('nextButton').style.visibility="visible";
	
	}, 1000);
}

function step_3a()
{
	myStopFunction();
	document.getElementById('can3-2').style.visibility="visible";
	document.getElementById('can3-3').style.visibility="visible";
	
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 420px; top: 190px; height: 50px; z-index: 10;";
	document.getElementById('can3-3').onclick=function() { step3(); };
}

function step3()
{
	myStopFunction();
	
	document.getElementById("can3-3").style.transformOrigin = "14% 15%";
	document.getElementById("can3-3").style.animation = "valveturn 2s forwards";
	setTimeout(function(){
	
	document.getElementById("can3-5").style.transformOrigin = "65% 35%";
	
	document.getElementById("can3-5").style.animation = "valveturn-2 2.5s forwards ";
	
	}, 2000);
	setTimeout(function(){
		
	document.getElementById('can3-6').innerHTML="Delivery pressure = "+values[lnt][1] +" kg/cm<sup>2</sup>";
	document.getElementById('can3-7').innerHTML="Delivery head = "+values[lnt][2] +" m";
	document.getElementById('nextButton').style.visibility="visible";
	}, 4500);


}

function step4()
{
	setTimeout(function(){
	document.getElementById("can4-3").style.transformOrigin = "50% 100%";
	
	document.getElementById("can4-3").style.animation = "valveturn-4 2.5s ";
	document.getElementById("can4-7").style.animation = "water0 2.5s forwards";
	
	
	
	}, 500);
	
	setTimeout(function(){
	
	document.getElementById('can4-5').innerHTML="Time required by water to fill 10cm height = "+values[lnt][7] +" sec";
	document.getElementById('can4-6').innerHTML="Discharge of waste water = "+values[lnt][8] +" m<sup>3</sup>/sec";
	
	}, 3000);
	
	setTimeout(function(){
	document.getElementById('nextButton').style.visibility="visible";
	}, 3500);
	
	setTimeout(function(){
	document.getElementById('nextButton').style.visibility="visible";
	}, 3500);
	
}



function step5()
{
	setTimeout(function(){
	document.getElementById("can5-3").style.transformOrigin = "50% 100%";
	
	document.getElementById("can5-3").style.animation = "valveturn-5 2.5s 2 ";
	document.getElementById("can5-7").style.animation = "water0 5s forwards";
	
	
	
	}, 500);
	setTimeout(function(){
		
	
	document.getElementById('can5-5').innerHTML="Time required by water to fill 10cm height = "+values[lnt][4] +" sec";
	document.getElementById('can5-6').innerHTML="Discharge of useful water = "+values[lnt][5] +" m<sup>3</sup>/sec";
	
	}, 6000);
	setTimeout(function(){
	document.getElementById('nextButton').style.visibility="visible";
	}, 6500);
	
	
}


function step6()
{
	setTimeout(function(){
	document.getElementById('can6-5').innerHTML="D'Aubuissons efficiency = "+values[lnt][11] +" %";
	document.getElementById('can6-6').innerHTML="Rankine's efficiency = "+values[lnt][12] +" %";
	document.getElementById('can6-7').innerHTML="Lift to fall ratio [(H<sub>d</sub> - H<sub>s</sub> ) / H<sub>s</sub>] = "+values[lnt][9] +" m/m "; 
	document.getElementById('can6-8').innerHTML="Lift to fall ratio (H<sub>d</sub> / H<sub>s</sub>) = "+values[lnt][10] +" m/m"; 	
	}, 1000);
	
	
	setTimeout(function(){
	lnt+=1;
	document.getElementById('nextButton').style.visibility="visible";
	}, 1200);
	
}






function stepstop()
{
	if(flag!=1){
		document.getElementById('nextButton').style.visibility="hidden";	
	}
	else{
		simsubscreennum=6;
		document.getElementById('nextButton').style.visibility="visible";
	}
	
}

function refresh1()
{
	document.getElementById("can2-3").style.transformOrigin = "";
	
	document.getElementById("can2-3").style.animation = "";
	document.getElementById('can2-4').innerHTML="Supply head = ";
	
	document.getElementById("can3-3").style.transformOrigin = "";
	document.getElementById("can3-3").style.animation = "";
	
	document.getElementById("can3-5").style.transformOrigin = "";
	
	document.getElementById("can3-5").style.animation = "";
	
	document.getElementById('can3-6').innerHTML="Delivery pressure = ";
	document.getElementById('can3-7').innerHTML="Delivery head = ";
	
	document.getElementById("can4-3").style.transformOrigin = "";
	
	document.getElementById("can4-3").style.animation = "";
	document.getElementById("can4-7").style.animation = ""; 
	
	document.getElementById('can4-5').innerHTML="Time required by water to fill 10cm height = ";
	document.getElementById('can4-6').innerHTML="Discharge of waste water = ";
	
	document.getElementById("can5-3").style.transformOrigin = "";
	
	document.getElementById("can5-3").style.animation = "";
	
	document.getElementById('can5-5').innerHTML="Time required by water to fill 10cm height = ";
	document.getElementById('can5-6').innerHTML="Discharge of useful water = ";
	document.getElementById("can5-7").style.animation = "";
	
	
	document.getElementById('can6-5').innerHTML="D'Aubuissons efficiency = ";
	document.getElementById('can6-6').innerHTML="Rankine's efficiency = ";
	document.getElementById('can6-7').innerHTML="Lift to fall ratio [(H<sub>d</sub> - H<sub>s</sub> ) / H<sub>s</sub>] = ";
	document.getElementById('can6-8').innerHTML="Lift to fall ratio (H<sub>d</sub> / H<sub>s</sub>) = ";
	document.getElementById('nextButton').style.visibility="hidden";	
	
}