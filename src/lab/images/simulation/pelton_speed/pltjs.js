//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;


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
	document.getElementById('trial').style="visibility:hidden ;left: 70px; top: 100px;position: absolute;font-weight: bold;";
	document.getElementById('trial').innerHTML="";
	
	if (simsubscreennum==1)
	{
		
		
		if(flag==1)
		{
		document.getElementById('can1on').onclick="";
		document.getElementById('pumptext').innerHTML="Stop the pump by pressing the stop button."		
		}
		else
		{
		document.getElementById("onarm").style="margin-left:-50px; margin-top: -50px; position:absolute;";
		document.getElementById('can1on').onclick=function() { step1(); };
		document.getElementById('can1off').onclick=function() { stepstop(); };
		}
	}
	
	
	else if (simsubscreennum==2)
	{
		refresh1();
		repeat+=1;
		
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		
		if(repeat==1)
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 50px; top: 430px; height: 50px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			
			document.getElementById('can2-3').style.visibility="hidden";
			document.getElementById('can2-8').onclick=function() { step2andhalf(); };
			
		}
	
		else{
			document.getElementById('can2-5').innerHTML="Weight on the pan =";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 50px; top: 430px; height: 50px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			
			document.getElementById('can2-3').style.visibility="visible";
			
			document.getElementById('can2-8').onclick=function() {
				myStopFunction();
				
			document.getElementById("can2-8").style.transformOrigin = "20% 75%";
			document.getElementById("can2-8").style.animation = "springreading 0.9s forwards ";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 580px; top: 380px; height: 50px; z-index: 10;";
			
			};
			document.getElementById('can2-3').onclick=function() {step2();}
		}	
	}
	else if (simsubscreennum==3)
	{
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		
		document.getElementById('can2-3').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 50px; top: 430px; height: 50px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('can3-8').onclick=function() {step3();};
		
	}
	else if (simsubscreennum==4)
	{
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		step4();	
	}
	else if (simsubscreennum==5)
	{
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		
		document.getElementById('can5-9').innerHTML="Initial reading (water level till crest) = "+values[lnt][6] +" cm" ;
		myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 190px; height: 50px; z-index: 10;";
			
			document.getElementById("arrow1").style.WebkitTransform = "rotate(-45deg)"; 
			 // Code for IE9
			 document.getElementById("arrow1").style.msTransform = "rotate(-45deg)"; 
			 // Standard syntax
			 document.getElementById("arrow1").style.transform = "rotate(-45deg)";
			 
		document.getElementById('can5-7').onclick=function() { step5andhalf();};
		
	}
	else if(simsubscreennum==6)
	{
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		step6();

		if(repeat==8)
		{
			flag=1;
			mpointer=0;
			simsubscreennum=0;
		}
		else if (repeat <=7)
		{
			
				
			simsubscreennum=1;
			
			
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


function step2()
{
	myStopFunction();
	
	document.getElementById("can2-3").style.animation = "tacho 1s 1 forwards";
	setTimeout(function(){
	document.getElementById("can2-4").style.transformOrigin = "50% 58%";
	document.getElementById("can2-4").style.animation = "springreading 0.9s forwards ";
	}, 1000);
	
	
	setTimeout(function(){
	document.getElementById('can2-5').innerHTML="Weight on the pan ="+values[lnt][3] +" kg" ;
	document.getElementById('can2-6').innerHTML="Spring balance reading = "+values[lnt][4] +" kg" ;
	document.getElementById('can2-7').innerHTML="Torque = "+values[lnt][5] +" N-m" ;
	
	document.getElementById('nextButton').style.visibility="visible";
	}, 3000);
	
}
function step2andhalf()
{
	myStopFunction();
	document.getElementById("can2-8").style.transformOrigin = "20% 75%";
	document.getElementById("can2-8").style.animation = "springreading 0.9s forwards ";
	
	
	setTimeout(function(){
		document.getElementById("can2-4").style.transformOrigin = "50% 58%";
		document.getElementById("can2-4").style.animation = "springreading 0.9s forwards ";
	}, 700);
	setTimeout(function(){
	document.getElementById('can2-5').innerHTML="Dead weight of the pan ="+values[lnt][3] +" kg" ;
	document.getElementById('can2-6').innerHTML="Spring balance reading = "+values[lnt][4] +" kg" ;
	document.getElementById('can2-7').innerHTML="Torque = "+values[lnt][5] +" N-m" ;
	document.getElementById('nextButton').style.visibility="visible";
	}, 3000);
		
}

function step3()
{
	myStopFunction();
	document.getElementById("can3-8").style.transformOrigin = "20% 75%";
	document.getElementById("can3-8").style.animation = "springreading_1 0.9s forwards ";
	document.getElementById("can3-3").style.transformOrigin = "33% 35%";
	document.getElementById("can3-3").style.animation = "spring 2s forwards ";
	setTimeout(function(){
	document.getElementById('can3-4').innerHTML="Speed of motor = 500 rpm" ;
	document.getElementById('nextButton').style.visibility="visible";
	}, 2000);
}

function step4()
{
	setTimeout(function(){
	document.getElementById("can4-3").style.transformOrigin = "62% 37%";
	document.getElementById("can4-3").style.animation = "arrow-1 2s forwards ";
	
	
	}, 1000);
	setTimeout(function(){
	document.getElementById('can4-4').innerHTML="Delivery pressure = "+values[lnt][0] +" kg/cm<sup>2</sup> " ;
	document.getElementById('can4-5').innerHTML="Delivery head = "+values[lnt][1] +" m" ;
	document.getElementById('can4-6').innerHTML="Total head, H + z = "+values[lnt][2] +" m" ;
	document.getElementById('nextButton').style.visibility="visible";	},3000);
}



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
	
	document.getElementById('can5-10').innerHTML="Final reading = "+values[lnt][7] +" cm" ;
	document.getElementById('can5-11').innerHTML="Head of water = "+values[lnt][8] + " cm";
	document.getElementById('can5-12').innerHTML="Actual discharge, Q<sub>act</sub> ="+ values[lnt][9] + " m<sup>3</sup>/sec";
	setTimeout(function(){
	document.getElementById('nextButton').style.visibility="visible";
	}, 500);
	
	}, 3000);
	
	
}


function step6()
{
	setTimeout(function(){
	document.getElementById('can6-5').innerHTML="Input power = "+values[lnt][10] +" watt" ;
	document.getElementById('can6-6').innerHTML="Output power = "+values[lnt][11] +" watt" ;
	document.getElementById('can6-7').innerHTML="Efficiency = "+values[lnt][12] +" %" ;
	//document.getElementById('can6-8').innerHTML="Unit power = "+values[lnt][11] +" watt" ;
	//document.getElementById('can6-9').innerHTML="Unit speed = "+values[lnt][12] +" rpm" ;
	//document.getElementById('can6-10').innerHTML="Unit discharge = 0.82x10<sup>-3</sup> m<sup>3</sup>/sec";
	document.getElementById('nextButton').style.visibility="visible";
	lnt+=1;
	}, 500);
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
	document.getElementById("can2-3").style.animation = "";
	document.getElementById("can2-4").style.transformOrigin = "";
	document.getElementById("can2-4").style.animation = "";
	//document.getElementById('can2-5').innerHTML="Weight on the pan =";
	document.getElementById('can2-6').innerHTML="Spring balance reading = ";
	document.getElementById('can2-7').innerHTML="Torque = ";
	document.getElementById("can2-8").style.transformOrigin = "";
	document.getElementById("can2-8").style.animation = "";
	
	document.getElementById("can3-3").style.transformOrigin = "";
	document.getElementById("can3-3").style.animation = "";
	document.getElementById('can3-4').innerHTML="Speed of motor = ";
	document.getElementById("can3-8").style.transformOrigin = "";
	document.getElementById("can3-8").style.animation = "";
	
	document.getElementById("can4-3").style.transformOrigin = "";
	document.getElementById("can4-3").style.animation = "";
	document.getElementById('can4-4').innerHTML="Delivery pressure = ";
	document.getElementById('can4-5').innerHTML="Delivery head = ";
	document.getElementById('can4-6').innerHTML="Total head, H + z = ";
	
	
	document.getElementById("can5-5").style.animation = "";	
	document.getElementById("can5-3").style.animation = "";
	
	document.getElementById("can5-13").style.animation = "";
	document.getElementById("can5-3").style.animation = "";
	
	document.getElementById('can5-9').innerHTML="Initial reading (water level till crest) =";
	document.getElementById('can5-10').innerHTML="Final reading = ";
	document.getElementById('can5-11').innerHTML="Head of water = ";
	document.getElementById('can5-12').innerHTML="Actual discharge, Q<sub>act</sub> = ";
	
	document.getElementById('can6-5').innerHTML="Input power = ";
	document.getElementById('can6-6').innerHTML="Output power = ";
	document.getElementById('can6-7').innerHTML="Efficiency = ";
	
	
	document.getElementById('nextButton').style.visibility="hidden";
}