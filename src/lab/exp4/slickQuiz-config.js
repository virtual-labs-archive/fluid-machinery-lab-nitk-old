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
            "q": "A Kaplan Turbine is ",
            "a": [
                {"option": "High - head mixed flow turbine",      "correct": false},
                {"option": "A low-head axial- flow turbine",     "correct": true},
                {"option": "An outward-flow reaction turbine",      "correct": false },
                {"option": "An inward-flow impulse turbine",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: A low-head axial- flow turbine" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the range of speed ratio Ku for a Kaplan Turbine for its most efficient operation?",
            "a": [
                {"option": "0.10 to 0.30",	 "correct": false},
				{"option": "0.65 to 1.20",	 "correct": false},
				{"option": "1.30 to 2.30",	 "correct": true},				
                {"option": "2.0 to 3.80", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 1.30 to 2.30</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Velocity of runner of a Kaplan turbine at inlet(V<sub>f1</sub>) and outlet (V<sub>f2</sub>) are",
 
            "a": [
                {"option": "V<sub>f1</sub>= V<sub>f2</sub>",           "correct": true},
                {"option": "V<sub>f1</sub> = Maximum, V<sub>f2</sub> = Zero",              "correct": false},
                {"option": "V<sub>f1</sub> < V<sub>f2</sub>",  "correct": false},
                {"option": "V<sub>f1</sub> = Zero, V<sub>f2</sub> = Maximum",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  V<sub>f1</sub>= V<sub>f2</sub></p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "For low head and high discharge, the hydraulic turbine used is",
 
            "a": [
                {"option": "Kaplan turbine",           "correct": true},
                {"option": "Francis turbine",              "correct": false},
                {"option": "Pelton wheel",  "correct": false},
                {"option": "Jonual turbine.",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  V<sub>f1</sub>= V<sub>f2</sub></p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "Velocity of runner of a Kaplan turbine at inlet(V<sub>f1</sub>) and outlet (V<sub>f2</sub>) are",
 
            "a": [
                {"option": "0.50 to 0.80",           "correct": false},
                {"option": "0.65 to 0.95",              "correct": false},
                {"option": "0.90 to 1.40",  "correct": false},
                {"option": "0.35 to 0.75",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  0.35 to 0.75</p>" // no comma here
        },
        { // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following hydraulic turbines are reaction turbines ? </br>1. Francis</br> 2. Kaplan</br>3. Propeller",
 
            "a": [
                {"option": "1, 2 and 3 ",           "correct": false},
                {"option": "1 and 2 only",              "correct": true},
                {"option": "2 and 3 only",  "correct": false},
                {"option": "1 and 3 only",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  1 and 2 only</p>" // no comma here
        }
		
		
   // no comma here
    ]
};
