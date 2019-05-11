let questionData =[
    {
        question: 'In which century does the series take place?',
        options: ['24th century', '22nd century', '26th century', '23rd century'],
        answer: '24th century',
        resultCorrect: null,
        number: 1,
    },
    {
        question: 'Which frightening antagonists are cyborgs that often attack the Enterprise?',
        options: ['The Ferengi', 'The Cardassians', 'The Borg', 'The Klingon'],
        answer: 'The Borg',
        resultCorrect: null,
        number: 2,
    }, 
    {
        question: 'In which year did the series debut on television?',
        options: ['1987', '1993', '1995', '2001'],
        answer: '1987',
        resultCorrect: null,
        number: 3,
    }, 
    {
        question: 'What did Patrick Stewart hate about the set of the captain\'s ready room?',
        options: ['It had an exercise bike.', 'It had a bar with alcoholic drinks.', 'It had a fish tank.', 'It had a horrible odor.'],
        answer: 'It had a fish tank.',
        resultCorrect: null,
        number: 4,
    }, 
    {
        question: 'Remus is a planet that\'s home to which race?',
        options: ['Klingon', 'Romulans', 'Cardassians', 'Vulcans'],
        answer: 'Romulans',
        resultCorrect: null,
        number: 5,
    }, 
    {
        question: 'The Next Generation\'s story takes place roughly how long after the original Star Trek?',
        options: ['About 400 years later', 'About 300 years later', 'About 200 years later', 'About 100 years later'],
        answer: 'About 100 years later',
        resultCorrect: null,
        number: 6,
    }, 
    {
        question: 'Who is the only person to play themselves on an episode?',
        options: ['Edwin Hubble', 'Stephen Hawking', 'Shaquille O\'Neal', 'Patrick Stewart'],
        answer: 'Stephen Hawking',
        resultCorrect: null,
        nuumber: 7,
    }, 
    {
        question: 'What is the name of Whoopi Goldberg\'s character in the show?',
        options: ['Ogawa', 'Ro Laren', 'Guinan', 'Oda Mae '],
        answer: 'Guinan',
        resultCorrect: null,
        number: 8,
    }, 
    {
        question: 'How long were The Next Generation\'s episodes?',
        options: ['34 minutes', '39 minutes', '44 minutes', '52 minutes'],
        answer: '44 minutes',
        resultCorrect: null,
        number: 9,
    }, 
    {
        question: 'Who else was considered for the part of Geordi LaForge?',
        options: ['Wesley Snipes', 'Denzel Washington', 'Will Smith', 'Eddie Murphy'],
        answer: 'Wesley Snipes',
        resultCorrect: null,
        number: 10,
    }];

let initialView = [`<div class="mainbox-inner">
                    <div class="welcomeMessage">
                    <h1>StarTrek</h1>
                    <h1><i>The Next Generation<i></h1>
                    <p class="challenge">Test your knowledge and discover if you are a trust fan!</p>
                    <div class=startButton><button id="startQuiz" type="submit" value="Start Quiz">Start Quiz</button></div>
                    </div>
                    </div>`];

let currentScore = 0; // used to track current score

let currentQuestion = 0; // used to track current question

let currentView = [
    // used to store dom data of current view

];

function quizResult() {
    $('.mainbox').html(`
        <div class="mainbox-inner">
        <div class="quiz">
            <h1>Congratulations!</h1>
            <h2>Great job! You scored ${currentScore}/9!</h2>
            <div class="rightIcon"><i class="fas fa-medal fa-7x"></i></div>
            <button type="submit" id="reset" value="Restart Quiz">Restart Quiz</button>
            <div style="clear: both;"></div>
        </div>
        </div>`);
    resetQuiz();
}

function checkAnswer() {
    $('form').on('submit', function (event) {
        event.preventDefault();
        let userGrab = $('input:checked');
        let userAnswer = userGrab.val();
        let correctAnswer = `${questionData[currentQuestion].answer}`;
        console.log(userAnswer);
        if (correctAnswer == userAnswer){
            answerRight(correctAnswer);
        }
        else {
            answerWrong(correctAnswer);
        }
    });
};

function nextQuestion() {
    if (currentQuestion <= questionData.length) {
    $('.quiz').on('click', '.nextButton', function (event) {
        updateQuestionNumber();
        updateDom();
        checkAnswer();
    })}
    else {
        quizResult();
        resetQuiz();
    }
};

function resetQuiz(){
    $('.quiz').on('click', '#reset', function (event) {
    currentScore = 0;
    currentQuestion = 0;
    initiateQuiz();
    });
}

function answerWrong(correctAnswer) {
    // used to build dom data if question is wrong
    // modifies questionData object to mark question wrong
    questionData[currentQuestion].resultCorrect = false;
    $('.mainbox').html(`<div class="mainbox-inner">
        <div class="quiz">
            <h1>INCORRECT!</h1>
            <h2>The correct answer is: ${correctAnswer}</h2>
            <div class="wrongIcon"><i class="fas fa-thumbs-down fa-7x"></i></div>
            <button type="submit" class="nextButton" value="Next Question">Next Question</button>
            <div class="currentScore">Current Score: ${currentScore}/${questionData.length}</div>
            <div style="clear: both;"></div>
            </div>
        </div>`);
    console.log('answerWrong ran');
    nextQuestion();
};

function updateScore() {
    // update score on correct or incorrect answer
        currentScore =+ 1;
        console.log('`updateScore` ran');
    };

function answerRight() {
    updateScore();
    // used to build dom data if question is right
    // modified questionData object to mark question right
    questionData[currentQuestion].resultCorrect = true;
    $('.mainbox').html(`<div class="mainbox-inner">
        <div class="quiz">
            <h1>CORRECT!</h1>
            <h2>Great job! You got that one right!</h2>
            <div class="rightIcon"><i class="fas fa-thumbs-up fa-7x"></i></div>
            <button type="submit" class="nextButton" value="Next Question">Next Question</button>
            <div class="currentScore">Current Score: ${currentScore}/${questionData.length}</div>
            <div style="clear: both;"></div>
            </div>
        </div>`);
    console.log('answerRight ran');
    nextQuestion();
};

function updateQuestionNumber(){
    currentQuestion++;
console.log('`updateQuestion` ran');
}

function updateQuestion() { 
    console.log('`currentQuestion is' + (currentQuestion + 1));
    console.log(currentView);
    console.log('`updateQuestion` ran');
    return `<div class="mainbox-inner">
                <div class="quiz">
                    <h1>Question ${currentQuestion + 1}</h1>
                    <h2>${questionData[currentQuestion].question}</h2>
                    <form class="quizQuestions" role="quiz"> 
                        <fieldset>
                            <div class="quizAnswers">
                            <label><input value="${questionData[currentQuestion].options[0]}" type="radio" id="first-answer" name="answer">
                            ${questionData[currentQuestion].options[0]}</label>
                            </div>
                            <div class="quizAnswers">
                            <label><input value="${questionData[currentQuestion].options[1]}" type="radio" id="second-answer" name="answer">
                            ${questionData[currentQuestion].options[1]}</label>
                            </div>
                            <div class="quizAnswers">
                            <label><input value="${questionData[currentQuestion].options[2]}" type="radio" id="third-answer" name="answer">
                            ${questionData[currentQuestion].options[2]}</label>
                            </div>
                            <div class="quizAnswers">
                            <label><input value="${questionData[currentQuestion].options[3]}" type="radio" id="foruth-answer" name="answer">
                            ${questionData[currentQuestion].options[3]}</label>
                            </div>
                            <button type="submit" id="submitAnswer" class="mainButton" value="Submit Question">Submit Question</button>
                        </fieldset>
                    </form>
                    <div class="currentScore">Current Score: ${currentScore}/${questionData.length}</div>
                    <div style="clear: both;"></div>
                </div>
            </div>`;
};

function updateDom () {
    // render question in DOM
    $('.mainbox').html(updateQuestion());
    console.log('Dom Updated')
}

function startQuiz() {
    $('#mainbox').on('click', '#startQuiz', function (event) {
            updateDom();
            checkAnswer();
    })
};

function initiateQuiz() {
    $('#mainbox').html(initialView);
    console.log('`initalView` set');
}

function loadQuiz () {
    initiateQuiz();
    startQuiz();
    checkAnswer();
}

window.onload = function() {
    loadQuiz();
};
