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
            "q": "Base of a mechanical system is being given a harmonic input motion starting from its mean position. Amplitude and frequency of the input motion is 5mm and &pi;/2 rad/s respectively. What will be the position of the base (with respect to mean position) after 3seconds ?",
            "a": [
                {"option": "-5mm",               "correct": true},
                {"option": "0mm",   "correct": false},
                {"option": "5mm",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer is : -5mm</p>" // no comma here
        },
      { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following could be governing equation for forced vibration system with base excitation of y=y<sub>0</sub>sin &omega;t  ?",
            "a": [
                {"option": "<img src=\"../images/exp4T1.png\" style='height:auto;width:auto'/>",           "correct": false},
                {"option": "<img src=\"../images/exp4T2.png\" style='height:auto;width:auto'/>",                  "correct": true},
                {"option": "<img src=\"../images/exp4T4.png\" style='height:auto;width:auto'/>",  "correct": false},
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is :<img src=\"../images/exp4T2.png\" style='height:auto;width:auto'/></p>" // no comma here
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
            "q": "<img src='../images/exp5T1.png' style='height:auto;width:auto'/><br>The above equation gives the steady state amplitude for a system with base excitation y=y<sub>0</sub>sin&omega;t .",
            "a": [
                {"option": "True",    "correct": true},
                {"option": "False",     "correct": false}

// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>Wrong</span><br></p>"  // no comma here
        }
    ]
};
