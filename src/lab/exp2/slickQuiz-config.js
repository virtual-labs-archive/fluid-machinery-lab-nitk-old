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
            "q": "The function of guide vanes in a reaction turbine is to",
            "a": [
                {"option": "Allow the required quantity of water to enter the turbine",      "correct": false},
                {"option": "Allow the water to enter the runner without shock",     "correct": false},
                {"option": "Allow the water to flow over them, without forming eddies",      "correct": false },
                {"option": "All the above",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: All the above" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Cavitation in a hydraulic turbine is most likely to occur at the turbine",
            "a": [
                {"option": "Entry ",	 "correct": false},
				{"option": "Exit ",	 "correct": true},
				{"option": "Stator ex",	 "correct": false},				
                {"option": "Rotor exit", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Exit</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The range of speed ratio of francis turbine is",
 
            "a": [
                {"option": "0.15-0.3",           "correct": false},
                {"option": "0.3-0.6",              "correct": false},
                {"option": "0.6-0.9",  "correct": true},
                {"option": "0.9-1.5",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  0.6-0.9</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Specific speed of the hydraulic turbine is defined as the speed of such a turbine",
 
            "a": [
                {"option": "It consumes unit discharge under unit speed",           "correct": false},
                {"option": "It consumes unit discharge to develop one metric HP",              "correct": false},
                {"option": "It develops one metric HP under unit head",  "correct": true},
                {"option": "It runs at unit speed under unit head",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  It develops one metric HP under unit head</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "The runner passages of a reaction turbine are",
 
            "a": [
                {"option": "Partially filled with water",           "correct": false},
                {"option": "Never filled with water",              "correct": false},
                {"option": "Always completely filled with water",  "correct": true},
                {"option": "None of the above",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  Always completely filled with water</p>" // no comma here
        }
		
		
   // no comma here
    ]
};
