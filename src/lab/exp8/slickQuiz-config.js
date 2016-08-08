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
            "q": "Reciprocating pump is a positive displacement pump( say true or false)",
            "a": [
               
                {"option": "True",      "correct": true },
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: True</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A reciprocating pump is suitable for less discharge and higher heads. (Say true or false)",
            "a": [
               
				{"option": "True",      "correct": true },
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: True</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Is priming required for reciprocating pump?( Say Yes/ No)",
 
            "a": [
                
                {"option": "Yes",  "correct": false},
                {"option": "No",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  No</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "In a reciprocating pump, air vessels are used to",
 
            "a": [
                {"option": "Smoothen the flow",           "correct": false},
                {"option": "Reduce suction head",              "correct": false},
                {"option": "Increase delivery head",  "correct": false},
                {"option": "Reduce acceleration head",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  Reduce acceleration head</p>" // no comma here
        }
		,
        { // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "5.	The relation between hydraulic efficiency &#8319;<sub>h</sub>, mechanical efficiency &#8319;<sub>m</sub> and overall efficiency &#8319;<sub>o</sub>is",
 
            "a": [
                {"option": "&#8319;<sub>h</sub> = &#8319;<sub>o</sub> X &#8319;<sub>m</sub>",           "correct": false},
                {"option": "&#8319;<sub>m</sub> = &#8319;<sub>o</sub> X &#8319;<sub>h</sub>",              "correct": false},
                {"option": "&#8319;<sub>o</sub> = &#8319;<sub>h</sub> X &#8319;<sub>m</sub>",  "correct": true},
                {"option": "None of the above",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  &#8319;<sub>o</sub> = &#8319;<sub>h</sub> X &#8319;<sub>m</sub></p>" // no comma here
        }
		
		
   // no comma here
    ]
};
