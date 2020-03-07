# 04-Homework - JavaScript Code Quiz

## Introduction
For this homework assignment, we were tasked with creating a JavaScript Code Quiz that has very specific rules. This exercise was meant to develop our Javascript skills, especially in terms of DOM manipulation and use of local storage.

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
My goal for this assignment was to use my newly acquired JavaScript knowledge and push it further to make a timed quiz with the conditions metioned above. The challenge was to create this quiz using very little HTML and extensive JS scripts to drive the HTML changes. To begin, I broke the assignment down to three basic parts:
    1) Create and format a timer
    2) Create the quiz
    3) Create a scoreboard that stores and records previous scores
The steps that went into creating each of these parts were challenging to complete. The most difficult part was trying to code the whole quiz in a way that correctly displays each question and its respective answers correctly. Another challenge for me was to make the scoreboard and use local storage to save high scores. Overall, this was the hardest and most time-consuming activity so far. The knowledge of JS required for this assignment was very comprehensive, and I had to spend a lot of time consulting outside sources.

## Version List
### v1.0
* created README.md
* created index.html
    * added timer
    * added quiz div
    * added scoreboard
* created script.js
    * added timer section
        * added formatting function
        * added countdown function
    * added quiz section
        * added quiz variables
            * added questions and answers to questionList array
        * added startQuiz function
        * added renderQuestion function
        * added checkAnswer function
    * added scoreboard section
        * added renderScore function
            * added save button functionality
            * set localStorage to save high scores
                * added script to sort and splice scores to scoreboard   
* tested application for functionality and responsiveness
<!-- ### v2.0
* added instructions
* added more questions
* created style.css
    * added styling for better visual appeal and design -->

## Framework

Created with Bootstrap

## Credits
* Sitepoint for some basic resources on making a simple JS quiz [here](https://www.sitepoint.com/simple-javascript-quiz/)
* Code Explained for a decent breakdown of how to create a multiple choize quiz and render questions and answers. The blog post can be found [here](https://www.codeexplained.org/2018/10/create-multiple-choice-quiz-using-javascript.html), the Youtube video [here](https://youtu.be/49pYIMygIcU), and the GitHub repository [here](https://github.com/CodeExplainedRepo/Multiple-Choice-Quiz-JavaScript).
* James Quick for help with the scoreboard and local storage scripts. His Youtube series on a similar project can be found [here](https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx), and his Github repository can be found [here](https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript).
* [w3schools.com](https://www.w3schools.com/) for all their resources regarding HTML, CSS and JS
* Special thanks to my instructor Nick and my awesome TAs Jimi and Chris for answering all my questions and teaching me the skills I need to get this done!