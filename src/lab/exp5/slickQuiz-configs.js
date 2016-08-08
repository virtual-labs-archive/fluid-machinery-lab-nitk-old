
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
            "q": "A water turbine governor</br><ol><li>1. Helps in starting and shutting down the turbo unit</li><li>2. Controls the speed of turbine set to match it with the hydroelectric system</li><li>3. Sets the amount of load which a turbine unit has to carry</li></ol></br>Which of these statements are correct?",
            "a": [
                {"option": "1, 2 and 3 ",      "correct": true},
                {"option": "1 and 2 ",      "correct": false},
                {"option": "2 and 3 ",      "correct": false},		// no comma here
				{"option": "1 and 3",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 1, 2 and 3</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The deflector of a pelton wheel ",
            "a": [
                {"option": "Ensures that the buckets receive the full jet impact ",               "correct": false},
                {"option": "Avoids wastage of water during changes of load",  			 "correct": false},
				{"option": "Reduces water hammer heads in the penstock",               "correct": true},
				{"option": "Diffuses the jet into a whirling mass", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Reduces water hammer heads in the penstock</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The unit speed of the hydraulic turbine is the power developed by the turbine",
            "a": [
                {"option": "Running at unit speed",           "correct": false},
                {"option": "Working under unit head",                  "correct": true},
                {"option": "When it consumes unit discharge",  "correct": false},		
                {"option": "When it geometrically similar to the specific turbine",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Working under unit head</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Consider the following energies associated with a Pelton turbine:</br>1. Mechanical energy  2. Kinetic energy  3. Potential energy </br>The correct sequence of energy conversion starting from the entry of fluid is:",
            "a": [
                {"option": "1 - 2 - 3 ", "correct": false},
				{"option": "2 - 3 - 1 ", "correct": false},
				{"option": "3 - 2 - 1 ",  "correct": true},
				{"option": "1 - 3 - 2", "correct": false } // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 3 - 2 - 1</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Consider the following types of water turbines:</br>1. Bulb   2. Francis  3. Kaplan  4. Pelton </br>The correct sequence of order in which the operating head decreases while developing the same power is ",
            "a": [
                {"option": "4 - 2 - 3 - 1 ", "correct": true},
				{"option": "3 - 4 - 1 - 2 ", "correct": false},
				{"option": "2 - 1 - 4 - 3 ",  "correct": false},
				{"option": "1 - 3 - 2 - 4", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 4 - 2 - 3 - 1 </p>" // no comma here
        }
		
        
      // no comma here
    ]
};
