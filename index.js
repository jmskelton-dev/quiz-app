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

let initialView = `<div class="mainbox-inner">
                    <div class="welcomeMessage">
                    <h1>StarTrek</h1>
                    <h1><i>The Next Generation<i></h1>
                    <p class="challenge">Test your knowledge and discover if you are a trust fan!</p>
                    <div class=startButton><button id="startQuiz" type="submit" value="Start Quiz">Start Quiz</button></div>
                    </div>
                    </div>`;

let currentScore = 0; // used to track current score

let currentQuestion = 0; // used to track current question

let nextQuestion = 0; // used to track upcoming question

let currentView = {
    // used to store dom data of current view

};


function answerWrong() {
    // used to build dom data if question is wrong
    // modifies questionData object to mark question wrong
console.log('`answerWrong` ran')
};

function answerRight() {
    // used to build dom data if question is right
    // modified questionData object to mark question right

console.log('`answerRight` ran')
};

function setScore() {
// update score on correct or incorrect answer

console.log('`setScore` ran')
};

function answerResult() {
// result of the answer submission

console.log('`answerResult` ran')
};

function quizResult() {

};

function updateDom(updateTo) {
// render question in DOM
    if ('null' != updateDom(updateTo)) {
    $('.mainbox').html(updateTo());
    }
};

function updateQuestion(currentQuestion) {
    let newQuestion = questionData[currentQuestion] = function () {`<div class="question-${currentQuestion}">
        <h2>${questionData[currentquestion]}</h2>
        <form>
        <fieldset>
        <label class="answerOption">
        <input type="radio" value="${currentQuestion[question].options[0]}" name="answer" required>
        <span>${currentQuestion[question].options[0]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${currentQuestion[question].options[1]}" name="answer" required>
        <span>${currentQuestion[question].options[1]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${currentQuestion[question].options[2]}" name="answer" required>
        <span>${currentQuestion[question].options[2]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${currentQuestion[quesiton].options[3]}" name="answer" required>
        <span>${currentQuestion[question].options[3]}</span>
        </label>
        <button type="submit" class="submitButton">Submit</button>
        </fieldset>
        </form>
        </div>`};
console.log(currentQuestion);
console.log(newQuestion);
console.log('`updateQuestion` ran');
}

function setQuestion(currentQuestion) {
// update the current question
    if (currentQuestion < questionData.length) {
console.log(currentQuestion);   
        updateQuestion(currentQuestion);
        currentQuestion++;
console.log(currentQuestion);            
console.log('`setQuestion` ran');
    }
    else {
        quizResult();
    }
};

function initiateQuiz() {
    $('mainbox').on('click', '#startQuiz', function (event) {
        $('.welcomeMessage').addClass('hide')
        updateQuestion(0)})
    console.log('`initiateQuiz` ran');
    console.log('`initalView` ran');
};
window.onload = function() {
    initiateQuiz();
};