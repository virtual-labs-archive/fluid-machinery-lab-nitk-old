
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
            "q": "Kaplan turbine is preferred a head range of ______",
            "a": [
                {"option": "0-25m",      "correct": true},
                {"option": "25-100m",      "correct": false},
                {"option": "50-200m",      "correct": false},		// no comma here
				{"option": "0-100m",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 0-25m</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Consider the following statements in respect of Kaplan Turbine:</br>1. It is a reaction turbine.</br>2. It is a mixed flow turbine.</br>3. It has adjustable blades.</br>Which of the statements given above are correct? </br>",
            "a": [
                {"option": "1, 2 and 3",               "correct": false},
                {"option": "2 and 3 only ",  			 "correct": false},
				{"option": "1 and 3 only ",               "correct": true},
				{"option": "1 and 2 only", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 1 and 3 only </p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Guide angle as per the aerofoil theory of Kaplan turbine blade design is defined as the angle between",
            "a": [
                {"option": "Lift and resultant force",           "correct": true},
                {"option": "Drag and resultant force",                  "correct": false},
                {"option": "Lift and tangential force",  "correct": false},		
                {"option": "Resultant force and tangential force",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 60 to 300</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In a hydro-electric plant a conduct system for taking water from the intake works to the turbine is known as",
            "a": [
                {"option": "Dam", "correct": false},
				{"option": "Reservoir", "correct": false},
				{"option": "Penstocky",  "correct": true},
				{"option": "Surge tank.", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Penstocky</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A Kaplan turbine is preferred for a specific speed of 300 to 1000 r.p.m.(Say Yes/No)",
            "a": [
                
				{"option": "Yes ",  "correct": true},
				{"option": "No", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Yes</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "An adjustable blade propeller turbine is called as",
            "a": [
                
				{"option": "Banki turbine  ",  "correct": false},
				{"option": "Pelton turbine ",  "correct": false},
				{"option": "Kaplan turbine",  "correct": true},
				{"option": "Francis-Pelton turbine", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Kaplan turbine</p>" // no comma here
        }
		
        
      // no comma here
    ]
};
