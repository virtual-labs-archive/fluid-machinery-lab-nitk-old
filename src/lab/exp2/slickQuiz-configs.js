
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
            "q": "Which one of the following statements is not correct in respect of hydraulic turbines?",
            "a": [
                {"option": "(Speed) is proportional to (1/Diameter)",      "correct": true},
                {"option": "(Power) is proportional to (Speed)<sup>3</sup>",      "correct": false},
                {"option": "(Power) is proportional to (Head)<sup>3/2</sup> ",      "correct": false},		// no comma here
				{"option": "(Speed) is proportional to (Head)<sup>1/2</sup>",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: (Speed) is proportional to (1/Diameter)</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Speed of the francis turbine is inversely proportional to square root of head. ( say true or false)",
            "a": [
                
				{"option": "True",               "correct": true},
				{"option": "False", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Unit power of the hydraulic turbine is",
            "a": [
                {"option": "P/H<sup>1/2</sup>",           "correct": false},
                {"option": "P/H<sup>3/2</sup>",                  "correct": true},
                {"option": "H/P<sup>3/2</sup>",  "correct": false},		
                {"option": "H/P<sup>1/2</sup>",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: P/H<sup>3/2</sup></p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Muschel curve means",
            "a": [
                {"option": "Curve drawn at constant head", "correct": false},
				{"option": "Curve drawn at constant speed", "correct": false},
				{"option": "Curve drawn at constant efficiency",  "correct": true},
				{"option": "None of the above", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Curve drawn at constant efficiency</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the serious problem arise from cavitation",
            "a": [
                {"option": "Noise and vibrations", "correct": false},
				{"option": "Damage to the blade surfaces ", "correct": false},
				{"option": "Fall in efficiency ",  "correct": false},
				{"option": "All the above", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: All the above</p>" // no comma here
        }
		
        
      // no comma here
    ]
};
