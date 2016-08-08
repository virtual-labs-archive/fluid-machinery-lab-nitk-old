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
            "q": "Which of the following advantages is/are possessed by a Kaplan turbine over a Francis turbine?</br><ol><li>1. Low frictional losses.</li> <li>2. Part load efficiency is considerably high.</li> <li>3. More compact and smaller in size.</li></ol> Select the correct answer using the codes given below</br>",
            "a": [
                {"option": "Only 1",	 "correct": false},
				{"option": "Only 1 and 2",	 "correct": false},
				{"option": "Only 2 and 3",	 "correct": false},				
                {"option": "1, 2 and 3", 		"correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 1, 2 and 3</p>" // no comma here
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
        }
		
		
   // no comma here
    ]
};
