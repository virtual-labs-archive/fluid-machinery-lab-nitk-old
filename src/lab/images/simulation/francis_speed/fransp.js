//on click of next button

var mpointer=0;
var repeat =0;
var flag=0;
var x=0;
var y;


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
			
			document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
			document.getElementById('trial').innerHTML="Trial : " + repeat;
			
			document.getElementById('can1on').onclick=function() { step1(); };
			document.getElementById('can1-3').onclick=function() { stepstop(); };
		}
		
		
	}
	
	else if (simsubscreennum==2)
	{
		
		refresh1();
		repeat+=1;	
		
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		
		if (repeat==1)
		{
			document.getElementById('can2-3').style.visibility="hidden";
			document.getElementById('can2-ok').onclick=function() { step2andhalf();};
		 
		 
		}
		else
		{
			
			document.getElementById('can2-form').style.visibility="hidden";
			
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 520px; top: 190px; height: 50px; z-index: 10;";
		
			
			document.getElementById('can2-3').style.visibility="visible";
			document.getElementById('can2-4').innerHTML="Applied weight on pan = ";
			document.getElementById('can2-3').onclick=function() { step2(); };	
		}
		
	}
	
	else if (simsubscreennum==3)
	{
		
		document.getElementById('can3-3').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 720px; top: 150px; height: 50px; z-index: 10;";
	
		document.getElementById('can2-3').style.visibility="hidden";
		document.getElementById('can3-4').onclick=function() { step3(); };
	}
	
	else if (simsubscreennum==4)
	{
		document.getElementById('can3-3').style.visibility="hidden";
		step4();
		
	}

	else if (simsubscreennum==5)
	{
		step5();
	}
	
	else if (simsubscreennum==6)
	{
			
		
		
		document.getElementById('can6-9').innerHTML="Initial reading (water level till crest) = "+values[x][lnt][7] +" cm";
		myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 190px; height: 50px; z-index: 10;";
			
			document.getElementById("arrow1").style.WebkitTransform = "rotate(45deg)"; 
			 // Code for IE9
			 document.getElementById("arrow1").style.msTransform = "rotate(45deg)"; 
			 // Standard syntax
			 document.getElementById("arrow1").style.transform = "rotate(45deg)";
			 
		document.getElementById('can6-7').onclick=function() { step6andhalf();};
		
		
	}
	else if (simsubscreennum==7)
	{
		
		step7();
		
		
		if(repeat==7)
		{
			flag=1;
			mpointer=0;
			simsubscreennum=0;
			
		}
		else if (repeat < 7)
		{
			
				
			simsubscreennum=1;
			
			
			magic();
			
		}
		
		
	}
	
	else (simsubscreennum==8)
	{
		document.getElementById('step8text1').onclick=function() { step_8a();}
		document.getElementById('step8text2').onclick=function() { step_8b();}
		document.getElementById('step8text3').onclick=function() { step_8c();}
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
	
	document.getElementById("can2-3").style.animation = "water0 1s 1 forwards";
	setTimeout(function(){
	
	document.getElementById('can2-4').innerHTML="Applied weight on pan = "+values[x][lnt][3] +" kg" ;
	document.getElementById('can2-5').innerHTML="Spring balance reading = "+values[x][lnt][5] +" kg" ;
	document.getElementById('can2-6').innerHTML="Torque = "+values[x][lnt][6] +" N-m";
	setTimeout(function(){
	
	document.getElementById('nextButton').style.visibility="visible";}, 1000);}, 2000);
}

function step2andhalf()
{
	x = document.getElementById("can2-select").selectedIndex;
	y = document.getElementById("can2-select").options;
	
	document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
	document.getElementById('trial').innerHTML="Trial : " + repeat;
	
	
	
	setTimeout(function(){
	
	document.getElementById('can2-4').innerHTML="Dead weight of the pan = "+values[x][lnt][3]+" kg";
	document.getElementById('can2-5').innerHTML="Spring balance reading = "+values[x][lnt][5] +" cm" ;
	document.getElementById('can2-6').innerHTML="Torque = "+values[x][lnt][6] +" N-m";
	
	setTimeout(function(){
	
	document.getElementById('nextButton').style.visibility="visible";}, 1500);}, 1000);
}

function step3()
{
	myStopFunction();
	document.getElementById('can3-3').style.visibility="visible";
	
	document.getElementById("can3-4").style.animation = "tacho 1s 1 forwards";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 300px; top: 240px; height: 50px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
	
		
	document.getElementById('can3-3').onclick=function() { step3andhalf(); };
}
function step3andhalf()
{
	myStopFunction();
	document.getElementById("can3-3").style.transformOrigin = "30% 30%";
	document.getElementById("can3-3").style.animation = "valveturn-2 0.5s ";
	
	setTimeout(function(){
	document.getElementById('can3-5').innerHTML="Speed of motor = "+y[x].text +" rpm";
	document.getElementById('nextButton').style.visibility="visible";
	}, 1000);
	
	
}

function step4()
{
	setTimeout(function(){
	document.getElementById("can4-3").style.transformOrigin = "62% 37%";
	document.getElementById("can4-3").style.animation = "arrow-1 3s forwards ";
	
	
	}, 700);
	setTimeout(function(){
	document.getElementById('can4-4').innerHTML="Supply pressure ="+values[x][lnt][0] +" kg/cm<sup>2</sup>" ;
	document.getElementById('can4-5').innerHTML="Supply head ="+values[x][lnt][2] +" m" ;
	document.getElementById('nextButton').style.visibility="visible";	}, 3200);
}
function step5()
{
	setTimeout(function(){
	document.getElementById("can5-3").style.transformOrigin = "62% 37%";
	document.getElementById("can5-3").style.animation = "arrow-11 3s forwards ";
	
	}, 700);
	setTimeout(function(){
	document.getElementById('can5-4').innerHTML="Vacuum pressure = "+values[x][lnt][1] +" kg/cm<sup>2</sup>" ;
	document.getElementById('can5-5').innerHTML="Total head = "+values[x][lnt][4] +" m";
	document.getElementById('nextButton').style.visibility="visible";	
	}, 3200);
}

/*
function step6()
{
	
	setTimeout(function(){
	document.getElementById("can6-5").style.animation = "water-4 1.5s 1 forwards";	
	setTimeout(function(){
	document.getElementById("can6-3").style.animation = "myhook-1 2s 1  forwards";
	}, 1500);
	step6andhalf();
	}, 1000);
	
	
	
}
*/
function step6andhalf()
{
	myStopFunction();
	setTimeout(function(){
	document.getElementById("can6-13").style.animation = "water-5 1.5s 1 forwards";
	
	}, 1000);
	setTimeout(function(){
	document.getElementById("can6-3").style.animation = "myhook-2 2s 1  forwards";
	
	step6quarter();
	
	}, 2700);
	
	
}

function step6quarter()
{
	setTimeout(function(){
	
	document.getElementById('can6-10').innerHTML="Final reading = "+values[x][lnt][8] +" cm" ;
	document.getElementById('can6-11').innerHTML="Head of water = "+values[x][lnt][9] + " cm";
	document.getElementById('can6-12').innerHTML="Actual discharge, Q<sub>act</sub> = "+values[x][lnt][10] +" m<sup>3</sup>/sec" ;
	setTimeout(function(){
	document.getElementById('nextButton').style.visibility="visible";
	}, 500);
	
	}, 3000);
	
}
function step7()
{
	
	setTimeout(function(){
	document.getElementById('can7-5').innerHTML="Input power = "+values[x][lnt][11] +" watt" ;
	document.getElementById('can7-6').innerHTML="Output power = "+values[x][lnt][12] +" watt" ;
	document.getElementById('can7-7').innerHTML="Efficiency = "+values[x][lnt][13] +" %" ;
	
	lnt+=1;
	setTimeout(function(){
	document.getElementById('nextButton').style.visibility="visible";
	}, 800);
	}, 500);
	
}

function step_8a()
{
	$("#chartContainer").ejChart(
        {
		    //Initializing Primary X Axis	
		    primaryXAxis:
            {
			    labelFormat: "{value}",
                title: { text: 'Output Power' },
                range: { min: 0, max: 1800, interval: 200 }
            },	
			
			//Initializing Primary Y Axis	
            primaryYAxis:
            {
				labelFormat: "{value}",
                title: { text: 'Efficiency' },
                range: { min: 0, max: 50, interval: 5 }
				
                
            },	
			
			//Initializing Common Properties for all the series
           
            //Initializing Series				
            series: 
			[
			    {
                points: [
				{ x: values[x][0][12], y: values[x][0][13]},
				{ x: values[x][1][12], y: values[x][1][13]},
				{ x: values[x][2][12], y: values[x][2][13]},
				{ x: values[x][3][12], y: values[x][3][13]},
				{ x: values[x][4][12], y: values[x][4][13]},
				{ x: values[x][5][12], y: values[x][5][13]},
				{ x: values[x][6][12], y: values[x][6][13]}
				
				],
				type: 'line',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                }
			],
             load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}

function step_8b()
{
	
	$("#chartContainer").ejChart(
        {
		    //Initializing Primary X Axis	
		    primaryXAxis:
            {
				labelFormat: "{value}",
                title: { text: 'Actual Discharge' },
                range: { min: 0, max: 0.0350, interval: 0.0050 }
				
            },	
			
			//Initializing Primary Y Axis	
            primaryYAxis:
            {
                
			    labelFormat: "{value}",
                title: { text: 'Efficiency' },
                range: { min: 0, max: 50, interval: 5 }
            },	
			
			//Initializing Common Properties for all the series
           
            //Initializing Series				
            series: 
			[
			    {
                points: [
				{ x: values[x][0][10], y: values[x][0][13]},
				{ x: values[x][1][10], y: values[x][1][13]},
				{ x: values[x][2][10], y: values[x][2][13]},
				{ x: values[x][3][10], y: values[x][3][13]},
				{ x: values[x][4][10], y: values[x][4][13]},
				{ x: values[x][5][10], y: values[x][5][13]},
				{ x: values[x][6][10], y: values[x][6][13]}
				
				
				],
				type: 'line',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                }
			],
             load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });	
}
function step_8c()
{
	$("#chartContainer").ejChart(
        {
		    //Initializing Primary X Axis	
		    primaryXAxis:
            {
			    
                labelFormat: "{value}",
                title: { text: 'Output Power' },
                range: { min: 0, max: 1800, interval: 200 }
            },	
			
			//Initializing Primary Y Axis	
            primaryYAxis:
            {
				labelFormat: "{value}",
                title: { text: 'Actual Discharge' },
                range: { min: 0, max: 0.0350, interval: 0.0050 }
				
            },	
			
			//Initializing Common Properties for all the series
           
            //Initializing Series				
            series: 
			[
			    {
                points: [
				{ x: values[x][0][12], y: values[x][0][10]},
				{ x: values[x][1][12], y: values[x][1][10]},
				{ x: values[x][2][12], y: values[x][2][10]},
				{ x: values[x][3][12], y: values[x][3][10]},
				{ x: values[x][4][12], y: values[x][4][10]},
				{ x: values[x][5][12], y: values[x][5][10]},
				{ x: values[x][6][12], y: values[x][6][10]}
				
				
				],
				type: 'line',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                }
			],
             load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });	
}






function stepstop()
{
	if(flag!=1){
		document.getElementById('nextButton').style.visibility="hidden";	
	}
	else{
		simsubscreennum=7;
		document.getElementById('nextButton').style.visibility="visible";
	}
	
}


function refresh1()
{
	document.getElementById("can2-3").style.animation = "";
	document.getElementById('can2-5').innerHTML="Spring balance reading = ";
	document.getElementById('can2-6').innerHTML="Torque = ";
	
	document.getElementById('can2-5').innerHTML="Spring balance reading = ";
	document.getElementById('can2-6').innerHTML="Torque = ";
	
	document.getElementById("can2-select").selectedIndex = 0;
	
	document.getElementById("can3-4").style.animation = "";
	document.getElementById("can3-3").style.transformOrigin = "";
	document.getElementById("can3-3").style.animation = "";
	document.getElementById('can3-5').innerHTML="Speed of motor = ";
	document.getElementById("can4-3").style.transformOrigin = "";
	document.getElementById("can4-3").style.animation = "";
	
	document.getElementById('can4-4').innerHTML="Supply pressure =" ;
	document.getElementById('can4-5').innerHTML="Supply head =";
	
	document.getElementById("can5-3").style.transformOrigin = "";
	document.getElementById("can5-3").style.animation = "";
	
	document.getElementById('can5-4').innerHTML="Vacuum pressure = " ;
	document.getElementById('can5-5').innerHTML="Total pressure = ";
	
	document.getElementById("can6-5").style.animation = "";
	document.getElementById("can6-3").style.animation = "";
	
	document.getElementById("can6-13").style.animation = "";
	document.getElementById("can6-3").style.animation = "";
	document.getElementById('can6-9').innerHTML="Initial reading (water level till crest) =";
	document.getElementById('can6-10').innerHTML="Final reading = ";
	document.getElementById('can6-11').innerHTML="Head of water = ";
	document.getElementById('can6-12').innerHTML="Actual discharge, Q<sub>act</sub> = ";
	document.getElementById('can7-5').innerHTML="Input power = ";
	document.getElementById('can7-6').innerHTML="Output power = ";
	document.getElementById('can7-7').innerHTML="Efficiency = ";
	document.getElementById('nextButton').style.visibility="hidden";
}