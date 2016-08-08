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
            "q": "Which of the following statement is correct?",
            "a": [
                {"option": "The centrifugal pump is suitable for large discharge and smaller heads",      "correct": false},
                {"option": "The centrifugal pump requires less floor area and simple foundation as compared to reciprocating pump",     "correct": false},
                {"option": "The efficiency of centrifugal pump is less as compared to reciprocating pump",      "correct": false },
                {"option": "All the above",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: All the above</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Delivery valve while starting centrifugal pump is kept",
            "a": [
                {"option": "Fully open",	 "correct": false},
				{"option": "Fully closed",	 "correct": true},
				{"option": "Half open",	 "correct": false},				
                {"option": "In any position", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Fully closed</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The correct sequence of the centrifugal pump components through which the fluid flows is:",
 
            "a": [
                {"option": "Impeller, Suction pipe, Foot valve and strainer, Delivery pipe",           "correct": false},
                {"option": "Foot valve and strainer, Suction pipe, Impeller, Delivery pipe",              "correct": true},
                {"option": "Impeller, Suction pipe, Delivery pipe, Foot valve strainer",  "correct": false},
                {"option": "Suction pipe, Delivery pipe, Impeller, Foot valve and strainer",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  Foot valve and strainer, Suction pipe, Impeller, Delivery pipe</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A centrifugal pump gives maximum efficiency when its blades are",
            "a": [
                {"option": "Bent forward ",	 "correct": false},
				{"option": "Bend backward ",	 "correct": true},
				{"option": "Straight ",	 "correct": false},				
                {"option": "Wave shaped", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Bend backward</p>" // no comma here
        }
		
		
   // no comma here
    ]
};
