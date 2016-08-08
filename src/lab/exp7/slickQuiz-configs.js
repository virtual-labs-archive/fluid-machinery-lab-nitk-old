
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
            "q": "In a centrifugal pump, the regulating valve is provided on the",
            "a": [
                {"option": "Casing",      "correct": false},
                {"option": "Delivery pipe",      "correct": true},
                {"option": "Suction pipe",      "correct": false},		// no comma here
				{"option": "Impeller",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Delivery pipe</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which type of vanes is suitable for high speed runners?",
            "a": [
                {"option": "Forward facing vanes",               "correct": false},
                {"option": "Radial vanes",  			 "correct": false},
				{"option": "Backward facing vanes",               "correct": true},
				{"option": "None of the above", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: More than atmospheric pressure to vacuum</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The efficiency of a pump is generally less than that of a turbine.(Say true or false)",
            "a": [
                
                {"option": "True",  "correct": true},		
                {"option": "False",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "4.	The volute casing of a centrifugal pump has which of the following functions? </br><ol><li>1. Eliminating loss of head due to change in velocity after exit from Impeller</li><li>2. Directs the flow towards the delivery pipe</li><li>3. Converts a part of the velocity head to pressure head</li><li>4. Gives a constant velocity of flow</li></ol></br>Select the correct answer using the code given below:",
            "a": [
                {"option": "1, 2 and 4 ", "correct": false},
				{"option": "2 and 3 only ", "correct": true},
				{"option": "1 and 4 only ",  "correct": false},
				{"option": "2 and 4 only", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 2 and 3 only</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which one of the following is the correct statement for a given centrifugal pump,",
            "a": [
                {"option": "The discharge varies directly as the speed", "correct": true},
				{"option": "The head varies inversely as the speed", "correct": false},
				{"option": "The power varies as the square of the speed",  "correct": false},
				{"option": "The discharge varies as the square of the speed", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: The discharge varies directly as the speed</p>" // no comma here
        },
         
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The net positive suction head (NPSH) of a centrifugal pump is defined as the sum of the velocity head and the pressure head at the",
            "a": [
                {"option": "Discharge minus vapour pressure of the liquid at the discharge temperature", "correct": false},
				{"option": "Suction ", "correct": false},
				{"option": "Discharge  ",  "correct": false},
				{"option": "Suction minus vapour pressure of the liquid at suction temperature", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Suction minus vapour pressure of the liquid at suction temperature</p>" // no comma here
        }
		
        
      // no comma here
    ]
};
