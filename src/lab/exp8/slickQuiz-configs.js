
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
            "q": "The work requirement of reciprocating  pump with increase in acceleration head",
            "a": [
                {"option": "Increases",      "correct": false},
                {"option": "Remains same",      "correct": true},
                {"option": "Decreases",      "correct": false},		// no comma here
				{"option": "None of the above",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Remains same</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The positive pump has less pressure at output than centrifugal pump. (Say true or false)",
            "a": [
                
				{"option": "True",               "correct": false},
				{"option": "False", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: More than atmospheric pressure to vacuum</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Slip of a reciprocating pump is defined as the",
            "a": [
                {"option": "Ratio of actual discharge to the theoretical discharge",           "correct": false},
                {"option": "Sum of actual discharge and the theoretical discharge",                  "correct": false},
                {"option": "Difference of theoretical discharge and the actual discharge",  "correct": true},		
                {"option": "Product of theoretical discharge and the actual discharge",          "correct": false} // no comma hereP
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Difference of theoretical discharge and the actual discharge</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Saving of work done and power by fitting an air vessel to double acting reciprocating pump is of the order of",
            "a": [
                {"option": "37.2%", "correct": false},
				{"option": "38.2%", "correct": false},
				{"option": "39.2%",  "correct": true},
				{"option": "84.8%", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 39.2%</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Reciprocating pumps should be chosen in preference to centrifugal pump",
            "a": [
                {"option": "Large flows are to be pumped against small head", "correct": false},
				{"option": "Small flows are to be pumped against large head ", "correct": true},
				{"option": "Liquids with suspended matters has to be pumped",  "correct": false},
				{"option": "Hydraulic losses in pump and pipes are to be minimized", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Small flows are to be pumped against large head </p>" // no comma here
        }
		
        
      // no comma here
    ]
};
