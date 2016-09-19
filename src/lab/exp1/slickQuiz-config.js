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
            "q": "If  H is the head available for a hydraulic turbine, the power, speed and discharge, respectively are proportional to",
            "a": [
                {"option": "H<sup>1/2</sup>, H<sup>1/2</sup>, H<sup>3/2</sup>",      "correct": false},
                {"option": "H<sup>3/2</sup>, H<sup>1/2</sup>, H<sup>1/2</sup>",     "correct": true},
                {"option": "H<sup>1/2</sup>, H<sup>3/2</sup>, H<sup>1/2</sup>",      "correct": false },
                {"option": "H<sup>1/2</sup>, H<sup>1/2</sup>, H",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: H<sup>3/2</sup>, H<sup>1/2</sup>, H<sup>1/2</sup></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following advantages is/are possessed by a Kaplan turbine over a Francis turbine?</br><ol><li>A. Low frictional losses.</li> <li>B. Part load efficiency is considerably high.</li> <li>C. More compact and smaller in size.</li></ol> Select the correct answer using the codes given below</br>",
            "a": [
                {"option": "Only A",	 "correct": false},
				{"option": "Only A and B",	 "correct": false},
				{"option": "Only B and C",	 "correct": false},				
                {"option": "A, B and C", 		"correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: A, B and C</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The diameter of the turbine runner varies as",
 
            "a": [
                {"option": "Square of power for the given head",           "correct": false},
                {"option": "Square of discharge for the given speed",              "correct": false},
                {"option": "Square root of the speed for given head",  "correct": false},
                {"option": "Square root of the head for given speed",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  Square root of the head for given speed</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following advantages is/are possessed by a Kaplan turbine over a Francis turbine?</br><ol><li>A. Low frictional losses.</li><li>B.Part load efficiency is considerably high.</li><li>C.More compact and smaller in size.</li></ol>Select the correct answer using the codes given below",
 
            "a": [
                {"option": "Only A",           "correct": false},
                {"option": "Only A and B ",              "correct": false},
                {"option": "Only B and C ",  "correct": false},
                {"option": "A, B and C",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  A, B and C</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "The cavitation in reaction turbines is avoided, to a great extent by",
 
            "a": [
                {"option": "Using stainless steel runner of the turbine",           "correct": false},
                {"option": "Installing the turbine below the tail race level",              "correct": false},
                {"option": "Providing highly polished blades to the runner",  "correct": false},
                {"option": "All of the above",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  All of the above</p>" // no comma here
        }
		
		
   // no comma here
    ]
};
