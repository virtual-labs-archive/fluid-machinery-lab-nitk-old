
// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Hydraulic ram is used to lift water from deep wells (Say true or false)",
            "a": [
                {"option": "True",      "correct": false},
                	
				{"option": "False",      "correct": true} // no comma here  
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: False</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A hydraulic ram is a device used to",
            "a": [
                {"option": "Store the energy of water",               "correct": false},
                {"option": "Increase the pressure of water",  			 "correct": false},
				{"option": "To lift water from deep wells",               "correct": false},
				{"option": "To lift small quantity of water to a greater height when a large quantity of water is available at a smaller height", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: To lift small quantity of water to a greater height when a large quantity of water is available at a smaller height</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Maximum impulse will be developed on hydraulic ram when",
            "a": [
                {"option": "Supply pipe is long",           "correct": false},
                {"option": "Ram chamber is large",                  "correct": false},
                {"option": "Supply pipe is short",  "correct": false},		
                {"option": "Waste valve closes suddenly",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Waste valve closes suddenly</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Air vessel improves the efficiency of the pump.( Say true or false)",
            "a": [
                
				{"option": "True",  "correct": true},
				{"option": "False", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Roller support</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Too high delivery height causes ",
            "a": [
                {"option": "Reduction in a delivery flow", "correct": false},
				{"option": "Reduction in efficiency of the pump", "correct": false},
				{"option": "All the above",  "correct": true},
				{"option": "None of the above", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: All the above</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Hydraulic ram acts as an _________ pump",
            "a": [
                {"option": "Reciprocating", "correct": false},
				{"option": "Impulse ", "correct": true},
				{"option": "Centrifugal  ",  "correct": false},
				{"option": "Parallel cylinder ", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Impulse</p>" // no comma here
        }
		
		
		
		
		
         	
		
        
      // no comma here
    ]
};
