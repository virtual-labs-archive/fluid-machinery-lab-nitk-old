//on click of next button
var mpointer=0;
var repeat =0;
var lnth =0;
var flag=0;



function navNext()
{

	for (temp = 0; temp <=9 ; temp++) 
	{ 
		document.getElementById('canvas'+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
	document.getElementById('nextButton').style.visibility="hidden";
	
	magic();
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




//Move pointing finger with mouse
$(document).mousemove(function(e)
{

if(simsubscreennum==1 && mpointer==0) 
{
if(e.pageX<800 && e.pageY<600)  
{
document.getElementById('pumponarm').style.visibility="visible";

 $("#pumponarm").css({left:e.pageX, top:e.pageY});
}
else
{
document.getElementById('pumponarm').style.visibility="hidden";
}

}

else if(simsubscreennum==2)
{
	document.getElementById('pumponarm').style.visibility="hidden";
}


});

function magic()
{
	
	
	
	if (simsubscreennum==1)
	{
		document.getElementById('trial').style="visibility:hidden ;left: 70px; top: 100px;position: absolute;font-weight: bold;";
		document.getElementById('trial').innerHTML="";
		
		if(flag==1)
		{
			document.getElementById('onimg').onclick="";
			document.getElementById('pumptext').innerHTML="Stop the pump by pressing the stop button.";		
		}
		else
		{
			document.getElementById("pumponarm").style="margin-left:-50px; margin-top: -50px; position:absolute;";
			document.getElementById('onimg').onclick=function() { step1(); };
			document.getElementById('can1off').onclick=function() { stepstop(); };
		}
		
	
	
	}
	else if(simsubscreennum==2)
	{
		refresh1();
		repeat+=1;
		
		if(repeat!=1)
		{
			
			myStopFunction();
			
		}
		
		else
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 580px; top: 380px; height: 50px; z-index: 10;";
			
			document.getElementById("arrow1").style.WebkitTransform = "rotate(-135deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(-135deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(-135deg)";
			
			document.getElementById("step2handle").style="position:absolute;left: 565px; top: 263px";
			document.getElementById("step2handle").onclick=function(){step3nhalf();};
		
		}
			

		
		
	}
	else if(simsubscreennum==3)
	{
		document.getElementById('can3-1').style.visibility="hidden";
		document.getElementById('needle1').style.visibility="hidden";
		
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 120px; top: 260px; height: 50px; z-index: 10;";
		
		document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(-90deg)";

		document.getElementById("can3-3").onclick=function(){rotateright();;};
		
	}
	
	else if(simsubscreennum==4)
	{
		document.getElementById('can3-1').style.visibility="hidden";
		document.getElementById('needle1').style.visibility="hidden";
		
		document.getElementById('can4-1').style.visibility="hidden";
		document.getElementById('needle2').style.visibility="hidden";
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 122px; top: 300px; height: 50px; z-index: 10;";
		
		document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(-90deg)";
			
		document.getElementById("can4-3").onclick=function(){rotateleft();;};
		
	}
	else if(simsubscreennum==5)
	{
		document.getElementById('can4-1').style.visibility="hidden";
		document.getElementById('needle2').style.visibility="hidden";
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 480px; top: 110px; height: 50px; z-index: 10;";
		
		document.getElementById('can-3').style.visibility="hidden";
		document.getElementById('can-4').style.visibility="hidden";
		document.getElementById('turningarm').style="visibility:hidden;"
		
		document.getElementById("bhead").onclick=function(){head_1();};
		
		
	}
	else if(simsubscreennum==6)
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 610px; top: 320px; height: 50px; z-index: 10;";
		
		document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		
		document.getElementById('can-3').style.visibility="hidden";
		document.getElementById('can-4').style.visibility="hidden";
		document.getElementById('turningarm').style="visibility:hidden;"
		
		document.getElementById("rothead2").onclick=function() { rotatehandle2(); };
		
		
	}
	else if(simsubscreennum==7)
	{
		document.getElementById('ndl7').style.visibility="hidden";
		document.getElementById('meter').style.visibility="hidden";
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 202px; top: 128px; height: 50px; z-index: 10;";
		
		document.getElementById('can-3').style.visibility="hidden";
		document.getElementById('can-4').style.visibility="hidden";
		document.getElementById('turningarm').style="visibility:hidden;"
		
		document.getElementById("ndl7_a").onclick=function() { step7(); };
		
	}
	else if(simsubscreennum==8)
	{
		document.getElementById('ndl7').style.visibility="hidden";
		document.getElementById('meter').style.visibility="hidden";
			
		refresh1();
		step8();
		
		if(repeat==8)
		{
			flag=1;
			mpointer=0;
			simsubscreennum=0;
		}
		
		else if (repeat <=7)
		{
			flag=1;	
			simsubscreennum=2;
			magic();
		}
		
	}
	else(simsubscreennum==9)
	{
	
	}
	
}


function step1()
{
	mpointer=1;
	document.getElementById('pumponarm').style.visibility="hidden";

	setTimeout(function(){ document.getElementById('nextButton').style.visibility="visible"; }, 250);
}


function step3nhalf()
{
	myStopFunction();
	document.getElementById("step2handle").style.transformOrigin = "10% 15%";
	document.getElementById("step2handle").style.animation = "valveturn 0.9s "+1+" ";
	
	
	
	setTimeout(function(){ 
	document.getElementById('step3text1').innerHTML="Speed of the motor = "+spdmtr +" rpm";
	document.getElementById('step3text2').innerHTML="Speed of the pump = "+spdpump +" rpm";
	
	//document.getElementById('step3text0').innerHTML=lnth +" & " +values[lnth][2];
	
	document.getElementById('nextButton').style.visibility="visible"; }, 2000);
}


function rotateright()
{
	myStopFunction();
	
	document.getElementById('can3-1').style.visibility="visible";
	document.getElementById('needle1').style.visibility="visible";
		
	setTimeout(function(){ 
	document.getElementById("needle1").style.transformOrigin = "53.3% 50%";
	document.getElementById("needle1").style.WebkitTransform = "rotate(30deg)"; 
	document.getElementById("needle1").style.animation = "needleturn 2.5s forwards";
	}, 1000);
	
	
	setTimeout(function(){ 
	document.getElementById('step3text3').innerHTML="Delivery head=" +values[lnth][2] +" kg/cm<sup>2</sup>";
	document.getElementById('step3text4').innerHTML="Delivery head=" +values[lnth][3]+" m";
	document.getElementById('nextButton').style.visibility="visible"; 
	}, 3600);
	
}
function rotateleft()
{
	myStopFunction();
	
	document.getElementById('can4-1').style.visibility="visible";
	document.getElementById('needle2').style.visibility="visible";
		
	setTimeout(function(){ 
	document.getElementById("needle2").style.transformOrigin = "48.3% 46.7%";
	document.getElementById("needle2").style.WebkitTransform = "rotate(30deg)";  
	document.getElementById("needle2").style.animation = "needleturnlft 2.5s forwards"; }, 1000);
		
	setTimeout(function(){
	document.getElementById('step4text1').innerHTML="Suction head= "+values[lnth][0]+" mm of Hg";
	document.getElementById('step4text2').innerHTML="Suction head="+values[lnth][1]+" m of water";
	document.getElementById('nextButton').style.visibility="visible";
	}, 3600);
	
}

function head_1()
{
	myStopFunction();
	
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 640px; top: 240px; height: 50px; z-index: 10;";
	
	document.getElementById("arrow1").style.WebkitTransform = "rotate(-135deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(-135deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(-135deg)";
	
	document.getElementById('can-3').style.visibility="visible";
	document.getElementById('can-4').style.visibility="visible";
	
	document.getElementById("can-4").onclick=function() { rotatehead(); };
	
}

function rotatehead()
{
	myStopFunction();
	
	document.getElementById('can-4').style.transformOrigin = "14% 15%";
	document.getElementById('can-4').style.animation = "valveturn_2 2s forwards";
	
	document.getElementById("needle3").style.transformOrigin = "50% 56%";
	document.getElementById("needle3").style.animation = "ndlstpwtch 2s forwards";
	
	setTimeout(function(){ 
	document.getElementById("bparm").style.animation = "bpointer "+1.5+"s 1 forwards"; 
	}, 2000);
	
	setTimeout(function(){ 
	document.getElementById('step5text2').innerHTML="Spring balance reading = "+values[lnth][5]+" kg";
	document.getElementById('step5text1').innerHTML="Torque reading = "+values[lnth][7]+" N-m";
	document.getElementById('nextButton').style.visibility="visible"; 
	}, 4000);
	
}

function rotatehandle2()
{
	myStopFunction();
	
	document.getElementById("rothead2").style.transformOrigin = "15% 45%";
	document.getElementById("rothead2").style.animation = "tankhandle 0.9s "+1+" forwards ";
	
	setTimeout(function(){ 
	document.getElementById("stopwatchndl").style.transformOrigin = "50% 90%";
	document.getElementById("stopwatchndl").style.animation = "rtstpwtch 3.5s "+1+" ";
	document.getElementById("mtubeblue").style.animation = "water0 "+3.5+"s 1 forwards";  
	}, 2000);
	
	setTimeout(function(){
	document.getElementById('step6text3').innerHTML="Time required by water to fill 10 cm height = "+values[lnth][9]+" sec";
	document.getElementById('step6text2').innerHTML="Actual discharge, Q<sub>act</sub> = "+values[lnth][10]+" m<sup>3</sup>/second";
	document.getElementById('nextButton').style.visibility="visible";
	}, 5600);
	
}

function step7()
{
	myStopFunction();
	document.getElementById('ndl7').style.visibility="visible";
	document.getElementById('meter').style.visibility="visible";
	
	document.getElementById("ndl7").style.transformOrigin = "100% 100%";
	document.getElementById("ndl7").style.animation = "ndllst 2.5s "+5+" ";	
	
	setTimeout(function(){ 
	document.getElementById('step7text1').innerHTML="Time taken by energy meter for 5 revolution = " +values[lnth][11] +" sec";
	document.getElementById('nextButton').style.visibility="visible";
	}, 12500);
}


function step8()
{
	setTimeout(function(){ 
	document.getElementById('step8text1').innerHTML="Motor input = "+values[lnth][12] +" watt";
	document.getElementById('step8text2').innerHTML="Pump output = "+values[lnth][13] +" watt";
	document.getElementById('step8text3').innerHTML="Theoretical discharge, Q<sub>th</sub> = "+values[lnth][14] +" m<sup>3</sup>/sec";
	document.getElementById('step8text4').innerHTML="Percentage slip = "+values[lnth][15] +" %";
	document.getElementById('step8text5').innerHTML="Efficiency of motor = "+values[lnth][16] +" %";
	document.getElementById('step8text6').innerHTML="Efficiency of pump = "+values[lnth][17] +" %";
	document.getElementById('step8text7').innerHTML="Overall efficiency = "+values[lnth][18] +" %";
	
	document.getElementById('nextButton').style.visibility="visible";
	
	lnth+=1;
	
	}, 500);
}

function stepstop()
{
	document.getElementById('pumponarm').style.visibility="hidden";
	if(flag!=1){
		document.getElementById('nextButton').style.visibility="hidden";	
	}
	else{
		simsubscreennum=8;
		document.getElementById('nextButton').style.visibility="visible";
	}
	
}

function refresh1()
{
	
	document.getElementById("step2handle").style.transformOrigin = "";
	document.getElementById("step2handle").style.animation = "";
	document.getElementById('step3text1').innerHTML="Speed of the motor = ";
	document.getElementById('step3text2').innerHTML="Speed of the pump = ";
		
	document.getElementById("needle1").style.transformOrigin = "";
	document.getElementById("needle1").style.WebkitTransform = ""; 
	document.getElementById("needle1").style.animation = "";
	document.getElementById('step3text3').innerHTML="Delivery head=";
	document.getElementById('step3text4').innerHTML="Delivery head=";
		
	document.getElementById("needle2").style.transformOrigin = "";
	document.getElementById("needle2").style.WebkitTransform = "";  
	document.getElementById("needle2").style.animation = "";
		
	document.getElementById('step4text1').innerHTML="Suction head= ";
	document.getElementById('step4text2').innerHTML="Suction head=";
		
	document.getElementById('can-4').style.transformOrigin = "";
	document.getElementById('can-4').style.animation = "";
		
	document.getElementById("needle3").style.transformOrigin = "50% 56%";
	
	document.getElementById("needle3").style.animation = "";
		
	document.getElementById("bparm").style.animation = ""; 
		
	document.getElementById('step5text1').innerHTML="Torque reading = ";
	document.getElementById('step5text2').innerHTML="Spring balance reading = ";
	document.getElementById("rothead2").style.transformOrigin = "";
	
	document.getElementById("rothead2").style.animation = "";
	document.getElementById("stopwatchndl").style.transformOrigin = "50% 90%";
	
	document.getElementById("stopwatchndl").style.animation = "";
		
	document.getElementById("mtubeblue").style.animation = "";  
	
	
	document.getElementById('step6text2').innerHTML="Actual discharge, Q<sub>act</sub> = ";
	document.getElementById('step6text3').innerHTML="Time required by water to fill 10 cm height =";	
		
	document.getElementById("ndl7").style.animation = "";	
	document.getElementById('step7text1').innerHTML="Time taken by energy meter for 5 revolution = ";
		
	document.getElementById('step8text1').innerHTML="Motor input = ";
	document.getElementById('step8text2').innerHTML="Pump output = ";
	document.getElementById('step8text3').innerHTML="Theoretical discharge, Q<sub>th</sub> = ";
	document.getElementById('step8text4').innerHTML="Percentage slip = ";
	document.getElementById('step8text5').innerHTML="Efficiency of motor = ";
	document.getElementById('step8text6').innerHTML="Efficiency of pump = ";
	document.getElementById('step8text7').innerHTML="Overall efficiency = ";
	document.getElementById('nextButton').style.visibility="hidden";
}

