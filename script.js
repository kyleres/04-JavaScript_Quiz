//Timer---------------------------------------------
//Timer Variables
let totalTime = 0;
let penaltyTime = 30 * 1000;
let tickTime = 1000;
let timeInterval = setInterval(tick, tickTime);
let timer = document.getElementById('timer');

//Clock Format Function
function formatTime(ms) {
    let seconds = ms % 60000;
    let minutes = Math.floor(ms / 60000);
    
    seconds = seconds /= 1000;

    if (seconds < 10) {
        seconds = '0' + seconds
    };

    timer.textContent = (`${ minutes }:${ seconds}`);
};

//Countdown Function
function tick() {
    formatTime(totalTime);
    totalTime -= tickTime;

    if (totalTime <= 0) {
        timer.textContent = ("00:00")
    };
};

//Quiz----------------------------------------------
//Quiz Questions and Answers
let quizQAs = [
    {
        question: "JavaScript must be inserted inside the following HTML tags:",
        answers: {
            a: "&lthead&gt...&lt/head&gt",
            b: "&ltbody&gt...&lt/body&gt",
            c: "&ltstyle&gt...&lt/style&gt",
            d: "&ltscript&gt...&lt/script&gt",
        },
        correctAnswer: "d"
    },
    {
        question: "JavaScript must be written in the same HTML document so it can run successfully.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: "b"
    },
    {
        question: "To use external script, the name of the file has to be inserted in the ___ attribute of the &ltscript&gt tag.",
        answers: {
            a: "src",
            b: "href",
            c: "class",
            d: "id",
        },
        correctAnswer: "a"
    },
];

//Quiz Display Variables
let quizDiv = document.getElementById("quiz");
let scoreDiv = document.getElementById("score");
let displayQAs = [];

//Button Variables
let startButton =document.getElementById("start");
let submitButton = document.getElementById("submit");
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let finishButton = document.getElementById("finish");

//Scoring Variables
let score = 0;

//Questions & Answers Display
function startQuiz() {
    quizQAs.forEach(
        (currentQuestion, questionNumber) => {
            let answers = [];
            
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>
                    </br>`
                );
            }

            displayQAs.push (
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>
                </br>`
            );
        }
    );
    
    let i = 0;

    quizDiv.innerHTML = displayQAs[i];
    
    function changeQuestion() {
        i++;
        quizDiv.innerHTML = displayQAs[i];
    }

    //Submit Question Function
    function submitQuestion() {
        let answerSelectors = quizDiv.querySelectorAll(".answers");

        quizQAs.forEach(
            (currentQuestion, questionNumber) => {
                let answerSelector = answerSelectors[questionNumber];
                let answerChecker = `input[name=question${questionNumber}]:checked`;
                let chosenAnswer = (answerSelector.querySelector(answerChecker) || {}).value;

                if (chosenAnswer == currentQuestion.correctAnswer) {
                    score++;
                    alert("Correct!");
                    changeQuestion();
                } else if (chosenAnswer !== currentQuestion.correctAnswer) {
                    totalTime -= penaltyTime;
                    alert("Wrong. The correct answer is " + `${currentQuestion.correctAnswer}`);
                    changeQuestion();
                };
            }
        );
    };

    //Next Button Functionality
    nextButton.addEventListener("click", function() {
        submitQuestion();
    });
};

if (totalTime) {
    nextButton.style.display = "none";
} else {
    nextButton.style.display = "inline";
}

//Start Button Functionality
startButton.addEventListener("click", function() {
    startButton.style.display = "none";
    timer.style.display = "inline";
    totalTime = 5 * 60 * 1000;
    startQuiz();
});

//Finish Button Funcitonality
finishButton.addEventListener("click", function() {
    totalTime = 0;
    quizDiv.style.display = "none";
    nextButton.style.display = "none";
    finishButton.style.display = "none";
    startButton.style.display = "initial";
    scoreDiv.style.display = "inline";
    scoreDiv.innerHTML = `${score} out of ${quizQAs.length}`;
});


