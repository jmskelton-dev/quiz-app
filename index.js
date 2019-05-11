const questionData = [    // contains all question data
    {
        question: 'In which century does the series take place?',
        options: ['24th century', '22nd century', '26th century', '23rd century'],
        answer: '24th century',
        resultCorrect: null,
    },
    {
        question: 'Which frightening antagonists are cyborgs that often attack the Enterprise?',
        options: ['The Ferengi', 'The Cardassians', 'The Borg', 'The Klingon'],
        answer: 'The Borg',
        resultCorrect: null,
    }, 
    {
        question: 'In which year did the series debut on television?',
        options: ['1987', '1993', '1995', '2001'],
        answer: '1987',
        resultCorrect: null,
    }, 
    {
        question: 'What did Patrick Stewart hate about the set of the captain\'s ready room?',
        options: ['It had an exercise bike.', 'It had a bar with alcoholic drinks.', 'It had a fish tank.', 'It had a horrible odor.'],
        answer: 'It had a fish tank.',
        resultCorrect: null,
    }, 
    {
        question: 'Remus is a planet that\'s home to which race?',
        options: ['Klingon', 'Romulans', 'Cardassians', 'Vulcans'],
        answer: 'Romulans',
        resultCorrect: null,
    }, 
    {
        question: 'The Next Generation\'s story takes place roughly how long after the original Star Trek?',
        options: ['About 400 years later', 'About 300 years later', 'About 200 years later', 'About 100 years later'],
        answer: 'About 100 years later',
        resultCorrect: null,
    }, 
    {
        question: 'Who is the only person to play themselves on an episode?',
        options: ['Edwin Hubble', 'Stephen Hawking', 'Shaquille O\'Neal', 'Patrick Stewart'],
        answer: 'Stephen Hawking',
        resultCorrect: null,
    }, 
    {
        question: 'What is the name of Whoopi Goldberg\'s character in the show?',
        options: ['Ogawa', 'Ro Laren', 'Guinan', 'Oda Mae '],
        answer: 'Guinan',
        resultCorrect: null,
    }, 
    {
        question: 'How long were The Next Generation\'s episodes?',
        options: ['34 minutes', '39 minutes', '44 minutes', '52 minutes'],
        answer: '44 minutes',
        resultCorrect: null,
    }, 
    {
        question: 'Who else was considered for the part of Geordi LaForge?',
        options: ['Wesley Snipes', 'Denzel Washington', 'Will Smith', 'Eddie Murphy'],
        answer: 'Wesley Snipes',
        resultCorrect: null,
    },  



}

const currentScore = 0; // used to track current score

const currentQuestion = 0; // used to track current question

const currentView = {
    // used to store dom data of current view

}


function answerWrong() {
    // used to build dom data if question is wrong
    // modifies questionData object to mark question wrong
console.log('`answerWrong` ran')
}

function answerRight() {
    // used to build dom data if question is right
    // modified questionData object to mark question right

console.log('`answerRight` ran')
}

function setScore() {
// update score on correct or incorrect answer

console.log('`setScore` ran')
}

function answerResult() {
// result of the answer submission

console.log('`answerResult` ran')
}

function setQuestion() {
// update the current question

console.log('`setQuestion` ran')
}

function initialView() {
// Display quiz start button and start quiz app calling setQuestion

console.log('`initalView` ran')
}

function initiateQuiz() {
    initialView;

console.log('`initiateQuiz` ran')
}

window.onload = function() {
    initiateQuiz();
  };