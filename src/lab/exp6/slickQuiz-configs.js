
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
            "q": "Which one of the following statements regarding an impulse turbine is correct?",
            "a": [
                {"option": "There is no pressure variation in flow over the buckets and the fluid fills the passageway between the buckets",      "correct": false},
                {"option": "There is no pressure variation in flow over the buckets and the fluid does not fill the passageway between the buckets",      "correct": true},
                {"option": "There is pressure drop in flow over the buckets and the fluid fills the passageway between the buckets",      "correct": false},		// no comma here
				{"option": "There is pressure drop in flow over the buckets and the fluid does not fill the passageway between the buckets",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: There is no pressure variation in flow over the buckets and the fluid does not fill the passageway between the buckets</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The width of the bucket for a Pelton wheel is generally ________ the diameter of jet.",
            "a": [
                {"option": "Double",               "correct": false},
                {"option": "Three times",  			 "correct": false},
				{"option": "Four times",               "correct": false},
				{"option": "Five times", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Five times</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The overall efficiency of an impulse turbine is the ratio of the actual power produced by the turbine to the energy actually supplied by the turbine.( Say true or false)",
            "a": [
                
                {"option": "True",  "correct": true},		
                {"option": "False",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Consider the following statements:<ol><li>1. Pelton wheel is a tangential flow impulse turbine </li><li>2. Francis turbine is an axial flow reaction turbine </li><li>3. Kaplan turbine is a radial flow reaction turbine</li></ol></br>Which of the above statements is/ are correct?  ",
            "a": [
                {"option": "1 and 3 ", "correct": false},
				{"option": "1 alone ", "correct": true},
				{"option": "2 alone ",  "correct": false},
				{"option": "3 alone", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 1 alone</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "For the same power, the rotor of an impulse turbine need not be as large as that of a reaction turbine. (Say true or false)",
            "a": [
               
				{"option": "True ",  "correct": false},
				{"option": "False", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: False</p>" // no comma here
        }
		
        
      // no comma here
    ]
};
