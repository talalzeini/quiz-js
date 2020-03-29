const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container')
const Restart = document.getElementById('restart-btn');
const QuizButton = document.getElementById('quiz-button');
const QuizButton2 = document.getElementById('quiz-button2');
const contentStart = document.getElementById('content');
const Options = document.getElementById('quiz-options');
const body = document.getElementById('body');
const numberOfQuestions = document.getElementById("numberOfQuestions");
const questionElement = document.getElementById('question')
const sucess = document.getElementById('sucess')
var score = document.getElementById('score')
var any = 1;
var results = document.getElementById('results');



 
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame);
Restart.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
currentQuestionIndex++;
any++;
numberOfQuestions.innerText = any; 
setNextQuestion()
})


function startGame(){ 
body.classList.remove('correct')
body.classList.remove('wrong')
body.classList.add('secondBody');
body.classList.remove('firstBody');
startButton.classList.add('hide');
Restart.classList.add('hide');
Options.classList.add('hide');
contentStart.classList.add('show');
QuizButton.classList.add('hide');
QuizButton2.classList.remove('hide');
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
score.innerText = 0;
Restart.classList.add('hide')
results.classList.add('hide');
contentStart.classList.remove('hide');
contentStart.classList.add('show');
any = 1;
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
    score.innerText = b/4 + " out of 20 ";
  
}

       
})
if(shuffledQuestions.length > currentQuestionIndex +1){
nextButton.classList.remove('hide');
}else{
    Restart.classList.remove('hide')
    results.classList.remove('hide');
    contentStart.classList.add('hide');
    contentStart.classList.remove('show');
    if((b/4)  <= 10){
        sucess.innerHTML = "Failure";
        body.classList.remove('correct')
        body.classList.add('wrong')
        console.log("lose")
    }else if((b/4) > 10){
        console.log("win")
        sucess.innerHTML = "Sucess";
        body.classList.add('correct')
        body.classList.remove('wrong')
    }
    
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

// question 1
    question: "52 * 3 = ?",
    answers:[
{ text:'154', correct : false},
{ text:'156', correct : true},
{ text:'158', correct : false},
{ text:'152', correct : false}
    ]

},


// question 2
{
    question: "78 * 4 = ?",
    answers:[
{ text:'310', correct : false},
{ text:'312', correct : true},
{ text:'316', correct : false},
{ text:'313', correct : false}
    ]

},


// question 3
{
    question: "20 * 11 = ?",
    answers:[
{ text:'210', correct : false},
{ text:'220', correct : true},
{ text:'211', correct : false},
{ text:'230', correct : false}
    ]

},
// question 4
{
    question: "8 * 65 = ?",
    answers:[
{ text:'510', correct : false},
{ text:'520', correct : true},
{ text:'515', correct : false},
{ text:'525', correct : false}
    ]

},

// question 5
{
    question: "45 * 6 = ?",
    answers:[
{ text:'260', correct : false},
{ text:'270', correct : true},
{ text:'265', correct : false},
{ text:'275', correct : false}
    ]

},
// question 6
{
    question: "26 * 6 = ?",
    answers:[
{ text:'156', correct : true},
{ text:'146', correct : false},
{ text:'153', correct : false},
{ text:'161', correct : false}
    ]

},
// question 7
{
    question: "99 * 7 = ?",
    answers:[
{ text:'693', correct : true},
{ text:'692', correct : false},
{ text:'690', correct : false},
{ text:'691', correct : false}
    ]

},
// question 8
{
    question: "12 * 9 = ?",
    answers:[
{ text:'108', correct : true},
{ text:'106', correct : false},
{ text:'112', correct : false},
{ text:'110', correct : false}
    ]

},
// question 9
{
    question: "140 * 9 = ?",
    answers:[
{ text:'1260', correct : true},
{ text:'1300', correct : false},
{ text:'1280', correct : false},
{ text:'1240', correct : false}
    ]

},
// question 10

{
    question: "7 * 9 = ?",
    answers:[
{ text:'63', correct : true},
{ text:'64', correct : false},
{ text:'65', correct : false},
{ text:'66', correct : false}
    ]

},
// question 11
{
    question: "68 * 5 = ?",
    answers:[
{ text:'320', correct : false},
{ text:'325', correct : false},
{ text:'340', correct : true},
{ text:'330', correct : false}
    ]

},
// question 12
{
    question: "58 * 3 = ?",
    answers:[
{ text:'178', correct : false},
{ text:'176', correct : false},
{ text:'174', correct : true},
{ text:'172', correct : false}
    ]

},
// question 13
{
    question: "98 * 7 = ?",
    answers:[
{ text:'684', correct : false},
{ text:'690', correct : false},
{ text:'686', correct : true},
{ text:'688', correct : false}
    ]

},
// question 14
{
    question: "15 * 9 = ?",
    answers:[
{ text:'125', correct : false},
{ text:'130', correct : false},
{ text:'135', correct : true},
{ text:'140', correct : false}
    ]

},
// question 15
{
    question: "88 * 3 = ?",
    answers:[
{ text:'260', correct : false},
{ text:'262', correct : false},
{ text:'264', correct : true},
{ text:'266', correct : false}
    ]

},
// question 16

{
    question: "66 * 4 = ?",
    answers:[
{ text:'250', correct : false},
{ text:'246', correct : false},
{ text:'244', correct : false},
{ text:'248', correct : true}
    ]

},
// question 17

{
    question: "77 * 3 = ?",
    answers:[
{ text:'232', correct : false},
{ text:'233', correct : false},
{ text:'230', correct : false},
{ text:'231', correct : true}
    ]

},
// question 18

{
    question: "48 * 6 = ?",
    answers:[
{ text:'286', correct : false},
{ text:'290', correct : false},
{ text:'289', correct : false},
{ text:'288', correct : true}
    ]

},
// question 19

{
    question: "57 * 7 = ?",
    answers:[
{ text:'398', correct : false},
{ text:'396', correct : false},
{ text:'397', correct : false},
{ text:'399', correct : true}
    ]

},
// question 20

{
    question: "17 * 9 = ?",
    answers:[
{ text:'152', correct : false},
{ text:'154', correct : false},
{ text:'155', correct : false},
{ text:'153', correct : true}
    ]

}
        
        
         
   
]
