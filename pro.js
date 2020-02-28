const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container')
const Restart = document.getElementById('restart-btn');
const QuizButton = document.getElementById('quiz-button');
const QuizButton2 = document.getElementById('quiz-button2');
const contentStart = document.getElementById('content');
const Options = document.getElementById('quiz-options');
const questionElement = document.getElementById('question')
var Header = document.getElementById('headerf')
var number = document.getElementById('nb')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex



let a = 1;
startButton.addEventListener('click', startGame);
Restart.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
currentQuestionIndex++;
a++;
number.innerText = a;
setNextQuestion()
})



function startGame(){ 
startButton.classList.add('hide');
Restart.classList.add('hide');
Options.classList.add('hide');
contentStart.classList.add('show');
QuizButton.classList.add('hide');
QuizButton2.classList.remove('hide');
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
number.innerText = 1;
Header.innerText = 0;
a = 1;
b = 0;
setNextQuestion()
}



function setNextQuestion()
{
resetState()

showQuestion(shuffledQuestions[currentQuestionIndex])
}

let b = 0;

function selectAnswer(e){
    
   
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
    button.disabled = true; 
   
if(correct){
    b++;
    Header.innerText = b/4;
    number.innerText = a;
}

       
})
if(shuffledQuestions.length > currentQuestionIndex +1){
nextButton.classList.remove('hide');
}else{
    Restart.classList.remove('hide')
}
}





function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct)
    {
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
        element.classList.remove('correct')
        element.classList.remove('wrong')
}
function showQuestion(question){
questionElement.innerText = question.question
question.answers. forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
        button.dataset.correct = answer.correct 
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}





function resetState(){
clearStatusClass(document.body)
nextButton.classList.add('hide')
while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
}
}


const questions = [    
{


    question: "52 * 3 = ?",
    answers:[
{ text:'154', correct : false},
{ text:'156', correct : true},
{ text:'158', correct : false},
{ text:'152', correct : false}
    ]

},



{
    question: "78 * 4 = ?",
    answers:[
{ text:'310', correct : false},
{ text:'314', correct : false},
{ text:'316', correct : false},
{ text:'312', correct : true}
    ]

},



{
    question: "20 * 11 = ?",
    answers:[
{ text:'210', correct : false},
{ text:'211', correct : false},
{ text:'220', correct : true},
{ text:'230', correct : false}
    ]

},
{
    question: "8 * 65 = ?",
    answers:[
{ text:'515', correct : false},
{ text:'510', correct : false},
{ text:'520', correct : true},
{ text:'525', correct : false}
    ]

},

{
    question: "45 * 6 = ?",
    answers:[
{ text:'265', correct : false},
{ text:'260', correct : false},
{ text:'270', correct : true},
{ text:'275', correct : false}
    ]

},
{
    question: "26 * 6 = ?",
    answers:[
{ text:'146', correct : false},
{ text:'156', correct : true},
{ text:'153', correct : false},
{ text:'161', correct : false}
    ]

},
{
    question: "99 * 7 = ?",
    answers:[
{ text:'692', correct : false},
{ text:'693', correct : true},
{ text:'1234', correct : false},
{ text:'691', correct : false}
    ]

},
{
    question: "12 * 9 = ?",
    answers:[
{ text:'112', correct : false},
{ text:'106', correct : false},
{ text:'108', correct : true},
{ text:'110', correct : false}
    ]

},
{
    question: "140 * 9 = ?",
    answers:[
{ text:'1260', correct : true},
{ text:'1300', correct : false},
{ text:'1280', correct : false},
{ text:'1240', correct : false}
    ]

},

{
    question: "7 * 9 = ?",
    answers:[
{ text:'63', correct : true},
{ text:'64', correct : false},
{ text:'65', correct : false},
{ text:'66', correct : false}
    ]

},
{
    question: "68 * 5 = ?",
    answers:[
{ text:'320', correct : false},
{ text:'325', correct : false},
{ text:'340', correct : true},
{ text:'330', correct : false}
    ]

},
{
    question: "58 * 3 = ?",
    answers:[
{ text:'178', correct : false},
{ text:'176', correct : false},
{ text:'172', correct : false},
{ text:'174', correct : true}
    ]

},
{
    question: "98 * 7 = ?",
    answers:[
{ text:'684', correct : false},
{ text:'690', correct : false},
{ text:'686', correct : true},
{ text:'688', correct : false}
    ]

},
{
    question: "15 * 9 = ?",
    answers:[
{ text:'135', correct : true},
{ text:'130', correct : false},
{ text:'125', correct : false},
{ text:'140', correct : false}
    ]

},
{
    question: "88 * 3 = ?",
    answers:[
{ text:'260', correct : false},
{ text:'262', correct : false},
{ text:'264', correct : true},
{ text:'266', correct : false}
    ]

},

{
    question: "66 * 4 = ?",
    answers:[
{ text:'250', correct : false},
{ text:'246', correct : false},
{ text:'244', correct : false},
{ text:'248', correct : true}
    ]

}
        
        
         
   
]
