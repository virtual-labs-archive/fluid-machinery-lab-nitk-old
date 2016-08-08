// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Self Evaluation",
        "main":    "<p></p>",
        "results": "<p style='font-size:20px'><a href='index.html'><u>Click here</u></a> to go to simulation</p>",
        "level1":  "Good! You can move on to the simulator right away",
        "level2":  "Make sure to get that one right the next time",
        "level3":  "You did well, but there is still scope of improvement. We suggest another reading of basics before going to simulator",
        "level4":  "May be it is better you improve your understanding a little more before moving on to the simulator",
        "level5":  "We think you should go through the theory once more before using the simulator" // no comma here
    },
    "questions": [
               { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is a forced vibration system?",
            "a": [
                {"option": "Wind blowing at tree top",      "correct": false},
                {"option": "Ocean waves at offshore rig",     "correct": false},
                {"option": "Car moving on a rough road",      "correct": false},
                {"option": "All of these",     "correct":true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>Not just that</span><br>Correct Answer is:All of these</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the amplitude of force due to imbalance mass of 10g at a distance of 10mm rotating at 100rad/s (~950rpm) ?",
            "a": [
                {"option": "1N",               "correct": true},
                {"option": "0.1N",   "correct": false},
                {"option": "10N",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer is : 1N</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following could be governing equation for forced vibration system with imbalance mass m rotating at &omega; rpm at an eccentricity e ?",
            "a": [
                {"option": "<img src=\"../images/exp4T1.png\" style='height:auto;width:auto'/>",           "correct": false},
                {"option": "<img src=\"../images/exp4T2.png\" style='height:auto;width:auto'/>",                  "correct": false},
                {"option": "<img src=\"../images/exp4T4.png\" style='height:auto;width:auto'/>",  "correct": true},
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is :<img src=\"../images/exp4T4.png\" style='height:auto;width:auto'/></p>" // no comma here
        },
        { // Question 4
            "q": "In forced vibrations usually the following are considered for analysis",
            "a": [
                {"option": "Steady State Vibrations",    "correct": true},
                {"option": "Transient Vibrations",     "correct": false},
                {"option": "Free Vibrations",      "correct": false},
              {"option": "None of these",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer is : Steady State Vibrations </p>"  // no comma here
        },
        { // Question 5 
            "q": "<img src='../images/exp4Q1.png' style='height:auto;width:auto'/><br>The above equation gives the steady state amplitude for a system excited due to rotating imbalance.",
            "a": [
                {"option": "False",    "correct": true},
                {"option": "True",     "correct": false}

// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>Wrong</span><br></p>"  // no comma here
        }
    ]
};
