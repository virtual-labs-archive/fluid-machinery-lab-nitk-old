// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
		
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "An impulse turbine",
            "a": [
                {"option": "Completely converts the hydraulic energy into initially kinetic energy",      "correct": true},
                {"option": "Should not be run with the wheel exposed to atmospheric pressure",     "correct": false},
                {"option": "Has runner vanes converts pressure into mechanical work",      "correct": false },
                {"option": "Operates under low head and heavy discharges",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Completely converts the hydraulic energy into initially kinetic energy</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The unit discharge through the hydraulic turbine is</br>",
            "a": [
                {"option": "Q/&radic;H",	 "correct": false},
				{"option": "Q/H",	 "correct": false},
				{"option": "Q/H<sup>2</sup>",	 "correct": true},				
                {"option": "Q/H<sup>3/2</sup>", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Q/H<sup>2</sup></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The total deflection angle of a pelton bucket is made slightly less than 180&deg; to",
 
            "a": [
                {"option": "Reduce the lateral component of thrust on the shaft",           "correct": false},
                {"option": "Avoid the deflected jet from striking the back of the oncoming bucket",              "correct": true},
                {"option": "Prevent racing of the wheel under n load",  "correct": false},
                {"option": "Minimize splashing of water",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  Avoid the deflected jet from striking the back of the oncoming bucket</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "In an impulse turbine installation, excessive water hammer heads are avoided by using",
 
            "a": [
                {"option": "Guide wheel",           "correct": false},
                {"option": "Brake nozzle",              "correct": false},
                {"option": "Diffuser",  "correct": true},
                {"option": "Needle valve ",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  Diffuser</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "Multiple jets are used in pelton wheel for ",
 
            "a": [
                {"option": "Increasing the power output with the same specific head",           "correct": false},
                {"option": "Increasing the speed of rotation while keeping same specific speed",              "correct": false},
                {"option": "Increasing the specific speed with the same power output",  "correct": false},
                {"option": "Increasing the power output with the same head",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  Increasing the power output with the same head</p>" // no comma here
        }
		
		
   // no comma here
    ]
};
