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
            "q": "Hydraulic ram is a pump which works on the principle of ",
            "a": [
                {"option": "Water hammer",      "correct": true},
                {"option": "Hydraulic press",     "correct": false},
                {"option": "Reciprocating action",      "correct": false },
                {"option": "Centrifugal action",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Water hammer</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The transmission due to change in the velocity and the direction of fluid flow is",
            "a": [
                {"option": "Hydro kinematics system",	 "correct": true},
				{"option": "Hydrostatic system",	 "correct": false},
				{"option": "Hydrodynamic system",	 "correct": false},				
                {"option": "All the above", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Hydro kinematics system</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The head of water required to operate the ram pump is",
 
            "a": [
                {"option": "1meter-10meter",           "correct": false},
                {"option": "0.5meter-7.5meters",              "correct": true},
                {"option": "5meter -15meter",  "correct": false},
                {"option": "Any head",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 0.5meter-7.5meters</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Hydraulic ram pump can be operated when it is fully submerged.( Say true or false)",
 
            "a": [
                
                {"option": "True",  "correct": true},
                {"option": "False",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: False</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "Water hammer in a pipeline results from the",
 
            "a": [
                {"option": "Bursting of pipelines due to closure by a valve.",           "correct": false},
                {"option": "Rapid pressure change due to a rapid change in the rate of flow ",              "correct": false},
                {"option": "Pressure increase due to closure of a valve resulting in decrease in rate of flow.",  "correct": true},
                {"option": "None of these.",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Pressure increase due to closure of a valve resulting in decrease in rate of flow.</p>" // no comma here
        }
		
		
   // no comma here
    ]
};
