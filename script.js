//Timer-----------------------------------------------------------
//Timer Variables
let timer = document.getElementById("timer");
let totalTime = 1.5 * 60 * 1000;
let penaltyTime = 30 * 1000;
let tickTime = 1000;
let timeInterval = setInterval(tick, tickTime);

//Timer Formatting Function
function formatTime(ms) {
    let seconds = ms % 60000;
    let minutes = Math.floor(ms / 60000);
    
    seconds = seconds /= 1000;

    if (seconds < 10) {
        seconds = "0" + seconds;
    };

    timer.textContent = (`${ minutes }:${ seconds}`);
};

//Countdown Function
function tick() {
    formatTime(totalTime);
    totalTime -= tickTime;

    if (totalTime < 0) {
        timer.textContent = "Time's up!";
        renderScore();
    };
};

//Quiz------------------------------------------------------------
//Quiz HTML Variables
let start = document.getElementById("start");
let instructions = document.getElementById("instructions");
let quizDiv = document.getElementById("quizDiv");
let number = document.getElementById("number");
let question = document.getElementById("question");
let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let D = document.getElementById("D");

//Questions and Answers List
let questionList = [
    {
        question: "JavaScript must be inserted inside the following HTML tags:",
        A: "A: &lthead&gt...&lt/head&gt",
        B: "B: &ltbody&gt...&lt/body&gt",
        C: "C: &ltstyle&gt...&lt/style&gt",
        D: "D: &ltscript&gt...&lt/script&gt",
        correctAnswer: "D",
    },
    {
        question: "External JavaScript must be written in a document ending in ___ so it can run successfully.",
        A: "A: .html",
        B: "B: .js",
        C: "C: .css",
        D: "D: .cmd",
        correctAnswer: "B",
    },
    {
        question: "To use external script, the name of the file has to be inserted in the ___ attribute of the HTML's &ltscript&gt tag.",
        A: "A: src",
        B: "B: href",
        C: "C: class",
        D: "D: id",
        correctAnswer: "A",
    },
    {
        question: "___ are used for objects. ___ are used for arrays. ___ are used for function parameters.",
        A: "A: {} , [] , ()",
        B: "B: {} , () , []",
        C: "C: () , {} , []",
        D: "D: [] , {} , ()",
        correctAnswer: "A",
    },
    {
        question: "Sample code: </br><i>var sum = 3 + '4'</i></br> What does console.log(sum) display?",
        A: "A: '4'",
        B: "B: 7",
        C: "C: 34",
        D: "D: 12",
        correctAnswer: "C",
    },
    {
        question: ("Sample code: </br><i>var car = Honda</br>var Car = Mercedes</i></br> What does <i>console.log(car)</i> display?"),
        A: "A: HondaMercedes",
        B: "B: MercedesHonda",
        C: "C: Honda",
        D: "D: Mercedes",
        correctAnswer: "C",
    },
    {
        question: ("In Javascript, <i>var num = 3 - 1</i> will have the same value as:"),
        A: "A: var num = 3; sum -= 1",
        B: "B: var num = 2",
        C: "C: var num = 3--",
        D: "D: all of the above",
        correctAnswer: "D",
    },
    {
        question: ("In Javascript, the symbols + - * / and = are known as:"),
        A: "A: operands",
        B: "B: operators",
        C: "C: operations",
        D: "D: operas",
        correctAnswer: "B",
    },
    {
        question: ("Running the JS script <i>element.style.display = none</i> will mainly change the application's ___."),
        A: "A: HTML",
        B: "B: CSS",
        C: "C: JS",
        D: "D: JQuery",
        correctAnswer: "B",
    },
    {
        question: ("A true/false statement is also known as a:"),
        A: "A: boolean",
        B: "B: string literal",
        C: "C: object",
        D: "D: array",
        correctAnswer: "A",
    },
];

//Quiz Tracking Variables
let lastQuestion = questionList.length - 1;
let currentQuestion = 0;
let score = 0;

//Start Quiz Function
function startQuiz() {
    totalTime = 4 * 60 * 1000;
    score = 0;
    start.style.display = "none";
    instructions.style.display = "none";
    quizDiv.style.display = "block";
    scoreboard.style.display = "none";
    renderQuestion();
};

//Render Question Function
function renderQuestion() {
    number.innerHTML= "Question " + (currentQuestion + 1);
    let currentQ = questionList[currentQuestion];

    question.innerHTML = currentQ.question;
    A.innerHTML = currentQ.A;
    B.innerHTML = currentQ.B;
    C.innerHTML = currentQ.C;
    D.innerHTML = currentQ.D;
};

//Check Answer Function
function checkAnswer(answer) {
    if (answer == questionList[currentQuestion].correctAnswer) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! The correct answer is " + questionList[currentQuestion].correctAnswer);
        totalTime -= 30 * 1000;
    };

    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        renderQuestion();
    } else {
        renderScore();
    };
};

start.addEventListener("click", startQuiz);
 
//Scoreboard------------------------------------------------------
//Scoreboard Variables
let scoreboard = document.getElementById("scoreboard");
let saveScore = document.getElementById("saveScore");
let finalScore = document.getElementById("finalScore");
let highScoresTable = document.getElementById("highScoresTable");
let finalScoreValue = localStorage.getItem("finalScoreValue");
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Render Score Function
function renderScore() {
    totalTime = 0;
    tickTime = 0;
    finalScoreValue = score;
    localStorage.setItem("finalScoreValue", score);
    
    instructions.style.display = "none";
    start.style.display = "none";
    quizDiv.style.display = "none";
    scoreboard.style.display = "block";

    finalScore.innerText = "Your final score is " + finalScoreValue + " out of 10. Refresh the page to try again.";

    //Save Button Functionality
    saveScore.addEventListener("click", function() {
        // object to store user's name and score
        let score = {
            name: username.value,
            score: finalScoreValue,
        };
        // push object to highscore array
        highScores.push(score);
        // sort scores from highest to lowest
        highScores.sort((a, b) => b.score - a.score);
        // splice score at last position
        highScores.splice(5);
        // save highscores to local storage as string
        localStorage.setItem("highScores", JSON.stringify(highScores));
    });

    // Scoreboard Display
    highScoresTable.innerHTML += highScores.map(
        score => {
            return `
                <tr>
                    <td>${score.name}</td>
                    <td>${score.score}</td>
                </tr>`
        }
    );
};