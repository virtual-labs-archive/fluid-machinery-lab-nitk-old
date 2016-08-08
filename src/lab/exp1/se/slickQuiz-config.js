// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Self Evaluation",
        "main":    "<p></p>",
        "results": "<p style='font-size:20px'><a href='index.html'><u>Click here</u></a> to go to simulation</p>",
        "level1":  "Good! You can move on to the simulator right away",
        "level2":  "Make sure to get that one right the next time",
        "level3":  "You did well, but there is still scope of improvement. We suggest another reading of basics before going to simulator",
        "level4":  "May be it is better you improve your understanding a little more before moving on to the simulator",
        "level5":  "We think you should go through the theory once more before using the simulator" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": " A body is said to undergo free vibration, when?",
            "a": [
                {"option": "It  vibrates in free space",      "correct": false},
                {"option": "It vibrates  freely with no force acting on it",     "correct": true},
                {"option": "The force causing the initial displacement  is removed",      "correct": false},
                {"option": "It vibrates freely with no resistive force acting on it",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:It vibrates  freely with no force acting on it</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:It vibrates  freely with no force acting on it</p>" // no comma here
        },
       
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " If energy is lost in any way during vibration, the system can be considered to be  ?",
            "a": [
                {"option": "Damped",           "correct": true},
                {"option": "Undamped",                  "correct": false},
                {"option": "Underdamped ",  "correct": false},
                {"option": "Overdamped",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans: Damped </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Damped </p>" // no comma here
        },
        
        { // Question 5 
            "q": " For a cantilever beam with a point load at the free end, The stiffness is ",
            "a": [
                {"option": "48EI/L<sup>3</sup> ",    "correct": false},
                {"option": "192EI/L<sup>3</sup>",     "correct": false},
		 {"option": "3EI/L<sup>3</sup>",  "correct": true},
                {"option": "EI/L<sup>3</sup>",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans: 3EI/L3 </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:3EI/L3</p>"  // no comma here
        },
 
  { // Question 7
            "q": " In free vibration experiment the damping may occur due to",
            "a": [
                {"option": "Friction at support",    "correct": false},
                {"option": "Hysteresis damping",     "correct": false},
		 {"option": "Friction at support and Hysteresis damping",  "correct": true},
                {"option": "None of the above",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans: Friction at support and Hysteresis damping</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Friction at support and Hysteresis damping</p>"  // no comma here
        },


{ // Question 10
            "q": " The moment of inertia of a beam of circular cross-section is given as",
            "a": [
                {"option": "I=pi/64d<sup>4</sup>",    "correct": true},
                {"option": "I=pi/32d<sup>4</sup>",     "correct": false},
		 {"option": "I=pi/62d<sup>4</sup>",  "correct": false},
                {"option": "I=pi/34d<sup>4</sup>",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans: I=pi/64d<sup>4</sup></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:I=pi/64d<sup>4</sup></p>"  // no comma here
        } ,

{ // Question 11
             "q": "The natural frequency of a system with mass m damping c and stiffness k is given by _____",
            "a": [
                {"option": " (k/c)<sup>0.5</sup>",    "correct": false},
                {"option": " (k/c)<sup>0.5</sup>",     "correct": true},
		 {"option": " (k/c)<sup>0.5</sup>",  "correct": false},
                {"option": " (k/c)<sup>0.5</sup>",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:  (k/m)<sup>0.5</sup></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:(k/m)<sup>0.5</sup></p>"  // no comma here
        } ,

{ // Question 13
            "q": " When a system vibrates in a fluid medium, the damping is _____",
            "a": [
                {"option": " Viscous",    "correct": true},
                {"option": " Coulomb ",     "correct": false},
		 {"option": "Solid",  "correct": false},
		{"option": "structural",  "correct": false}
               


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Viscous</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Viscous</p>"  // no comma here
        },




{ // Question 13
            "q": " The mechanical clock represents a _____ pendulum.",
            "a": [
                {"option": " simple",    "correct": true},
                {"option": "compound",     "correct": false},
		{"option": "complex",     "correct": false},
		{"option": "normal",     "correct": false}
		
               


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:simple</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:simple</p>"  // no comma here
        },

{ // Question 13
            "q": "  Systems undergo dangerously large oscillations at _____",
            "a": [
                {"option": " Resonance",    "correct": true},
                {"option": "excitation",     "correct": false},
		{"option": "damped frequency",     "correct": false},
		{"option": "logarithmic decrement ",     "correct": false}
		
               


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Resonance</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Resonance</p>"  // no comma here
        },

{ // Question 13
            "q": " A vibratory system consists of a spring, damper, and _____.",
            "a": [
                {"option": " Frame",    "correct": false},
                {"option": "Rope",     "correct": false},
		{"option": "Mass",     "correct": true},
		{"option": "stiffness ",     "correct": false}
		
               


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Mass</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Mass</p>"  // no comma here
        },
{ // Question 13
            "q": " If a motion repeats after equal Intervals of time, it is called a _____ motion.",
            "a": [
                {"option": " nonperiodic",    "correct": false},
                {"option": "random",     "correct": false},
		{"option": "periodic",     "correct": true},
		{"option": "frequent ",     "correct": false}
		
               


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:periodic</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:periodic</p>"  // no comma here
        },
{ // Question 13
            "q": " The time taken to complete one cycle of motion is called the _____ of vibration.",
            "a": [
                {"option": " one cycle",    "correct": false},
                {"option": "time period",     "correct": true},
		{"option": "amplitude ",     "correct": false},
		{"option": "frequency ",     "correct": false}
		
               


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:time period</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:time period</p>"  // no comma here
        },
{ // Question 13
            "q": " The number of cycles per unit time is called the _____ of vibration.",
            "a": [
                {"option": " Resonance",    "correct": false},
                {"option": "frequency",     "correct": true},
		{"option": "periodic motion ",     "correct": false},
		{"option": "time period ",     "correct": false}
		
               


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:frequency</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:frequency</p>"  // no comma here
        },

{ // Question 13
            "q": " Systems with a finite number of degrees of freedom are called _____ systems.",
            "a": [
                {"option": "discrete",    "correct": true},
                {"option": "continous",     "correct": false},
		{"option": "linear ",     "correct": false},
		{"option": "non-linear",     "correct": false}
		
               


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:discrete</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:discrete</p>"  // no comma here
        },
{ // Question 13
            "q": " The number of degrees of freedom of a system denotes the minimum number of independent coordinate",
            "a": [
                {"option": "true",    "correct": true},
                {"option": "false",     "correct": false}
		


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:true</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:true</p>"  // no comma here
        },
{ // Question 13
            "q": " If a system vibrates due to initial disturbance only, it is called _____ vibration.",
            "a": [
                {"option": "free",    "correct": true},
                {"option": "forced",     "correct": false},
		{"option": "damped",    "correct": false},
                {"option": "undamped",     "correct": false}

		


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:free</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:free</p>"  // no comma here
        }




    ]
};
