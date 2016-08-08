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
            "q": "A Pelton wheel is ideally suited for ",
            "a": [
                {"option": "High head and low discharge ",      "correct": true},
                {"option": "High head and high discharge",     "correct":false },
                {"option": "Low head and low discharge ",      "correct": false },
                {"option": "Medium head and medium discharge",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: High head and low discharge</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The maximum number of jets generally employed in an impulse turbine without jet interference is:",
            "a": [
                {"option": "4",	 "correct": false},
				{"option": "12",	 "correct": false},
				{"option": "8",	 "correct": false},				
                {"option": "6", 		"correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 6</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The specific speed of a hydraulic turbine depends upon",
 
            "a": [
                {"option": "Speed and power developed ",           "correct": false},
                {"option": "Discharge and power developed ",              "correct": false},
                {"option": "Speed and head of water ",  "correct": false},
                {"option": "Speed, power developed and head of water",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  Speed, power developed and head of water</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "The pressure of water is atmospheric and remains constant while passing over the runner in",
 
            "a": [
                {"option": "Impulse turbine ",           "correct": true},
                {"option": "Reaction turbine ",              "correct": false},
                {"option": "Steam turbine ",  "correct": false},
                {"option": "None of the above",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  Impulse turbine</p>" // no comma here
        }
		
		
		
		// no comma here
    ]
};
