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
            "q": "Under static condition due to an operating force if a 10N/m stiff 10kg system undergoes a deflection of 10cm, what is the amplitude of force ?",
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
            "q": "What is the governing equation for forced vibration system with harmonic excitation ?",
            "a": [
                {"option": "<img src=\"../images/exp4T1.png\" style='height:auto;width:auto'/>",           "correct": true},
                {"option": "<img src=\"../images/exp4T2.png\" style='height:auto;width:auto'/>",                  "correct": false},
                {"option": "<img src=\"../images/exp4T4.png\" style='height:auto;width:auto'/>",  "correct": false},
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is :<img src=\"../images/exp4T1.png\" style='height:auto;width:auto'/></p>" // no comma here
        },
        { // Question 4
            "q": "Solution of forced vibration system consists of",
            "a": [
                {"option": "Both Steady State and Transient part",    "correct": true},
                {"option": "Only Steady State part",     "correct": false},
                {"option": "Only Transient Part",      "correct": false},
              {"option": "None of these",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer is : Both Steady State and Transient part </p>"  // no comma here
        },
        { // Question 5 
            "q": "<img src='../images/exp4Q1.png' style='height:auto;width:auto'/><br>The above equation gives the steady state amplitude for a system excited by an external harmonic force.",
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
