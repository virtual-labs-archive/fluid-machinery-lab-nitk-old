
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
            "q": "The overall efficiency of a reaction turbine is the ratio of",
            "a": [
                {"option": "Power produced by the turbine to the energy actually supplied by the turbine",      "correct": true},
                {"option": "Actual work available at the turbine to the energy imparted to the wheel",      "correct": false},
                {"option": "Work done on the wheel to the energy (or head of water) actually supplied to the turbine",      "correct": false},		// no comma here
				{"option": "None of the above",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Power produced by the turbine to the energy actually supplied by the turbine</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "As water flows through the runner of a reaction turbine, pressure acting on it would vary from",
            "a": [
                {"option": "More than atmospheric pressure to vacuum",               "correct": true},
                {"option": "Less than atmospheric pressure to zero gauge pressure",  			 "correct": false},
				{"option": "Atmospheric pressure to more than atmospheric pressure",               "correct": false},
				{"option": "Atmospheric pressure to vacuum", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: More than atmospheric pressure to vacuum</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Francis turbines are used for the potential head in the range of",
            "a": [
                {"option": "5 to 60",           "correct": false},
                {"option": "60 to 300",                  "correct": true},
                {"option": "300 to 700",  "correct": false},		
                {"option": "700 to 1250",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 60 to 300</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the serious problem arise from cavitation",
            "a": [
                {"option": "Noise and vibrations", "correct": false},
				{"option": "Damage to the blade surfaces", "correct": false},
				{"option": "Fall in efficiency",  "correct": false},
				{"option": "All the above", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: All the above</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In a Francis turbine, the pressure at inlet is _______ that at outlet.",
            "a": [
                {"option": "More than", "correct": true},
				{"option": "Less than ", "correct": false},
				{"option": "Same  as ",  "correct": false},
				{"option": "None of the above", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: More than</p>" // no comma here
        }
		
        
      // no comma here
    ]
};
