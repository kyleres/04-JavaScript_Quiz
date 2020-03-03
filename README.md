# 04-Homework - JavaScript Code Quiz

## Introduction
For this homework assignment, we were tasked with creating JavaScript Code Quiz that has a timer and a penalty for wrong answers. This exercise was meant to develop our skills for Javascript and JQuery and to test our understanding of APIs.

## Acceptance Criteria
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## Motivation
My goal for this assignment was use my newly acquired JavaScript and JQuery knowledge to make a timed quiz where the HTML changes based on the script. I broke the assignment down to three parts:
    1) Create and format a timer
    2) Create the quiz (questions, answers, and scoring)
    3) Create a scoreboard that stores can record previous scores
The steps that went into creating each of these parts were challenging to complete. The most difficult part was trying to code the whole quiz in a way that correctly displays each question and its respective answers correctly. Another challenge for me was to make each of the questions appear in a different page and to score them appropriately before moving on to the next question. Overall, this was the hardest and most time-consuming activity so far. The knowledge of JS and JQuery reguired for this task was pretty comprehensive, and I spent a lot of time consulting outside sources.

## Version List
### v1.0
* created README.md
* revised index.html
    * created timer div
    * created quiz-container and content divs
    * created buttons-container and button divs
* created style.css
    * added basic styling for better display appeal and responsiveness (nothing fancy)
* added script.js
    * created timer
        * added timer variables
        * formatted time to display HH:MM
        * added function for countdown
    * created quiz
        * added quizQAs to hold questions and answers
        * added quiz display variables
            * added quiz display functionality
        * added buttons variables
            * added buttons functionality      
* tested application for functionality and responsiveness

## Framework

Created with Bootstrap

## Credits
* Sitepoint for some basic resources on making a simple JS quiz [here](https://www.sitepoint.com/simple-javascript-quiz/)
* Code Explained for a decent breakdown of how to create a multiple choize quiz and render questions and answers. The blog post can be found [here](https://www.codeexplained.org/2018/10/create-multiple-choice-quiz-using-javascript.html), the Youtube video [here](https://youtu.be/49pYIMygIcU), and the GitHub repository [here](https://github.com/CodeExplainedRepo/Multiple-Choice-Quiz-JavaScript).
* [w3schools.com](https://www.w3schools.com/) for all their resources regarding HTML, CSS and JS
* [Eloquent Javascript](https://eloquentjavascript.net/) by Marijn Haverbeke for some in-depth reading about JS
* Special thanks to my instructor Nick and my awesome TAs Jimi and Chris for answering all my questions and teaching me the skills I need to get this done!