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
    score.innerText = b/4 + " out of 5 ";
  
}

       
})
if(shuffledQuestions.length > currentQuestionIndex +1){
nextButton.classList.remove('hide');
}else{
    Restart.classList.remove('hide')
    results.classList.remove('hide');
    contentStart.classList.add('hide');
    contentStart.classList.remove('show');
    if((b/4)  <= 2.5){
        sucess.innerHTML = "Failure";
        body.classList.remove('correct')
        body.classList.add('wrong')
        console.log("lose")
    }else if((b/4) > 2.5){
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
    question: "2 + 2 = ?",
    answers:[
{ text:'4', correct : true},
{ text:'5', correct : false},
{ text:'3', correct : false},
{ text:'6', correct : false}
    ]
    

},
{
    question: "5 + 2 = ?",
    answers:[
{ text:'7', correct : true},
{ text:'8', correct : false},
{ text:'9', correct : false},
{ text:'6', correct : false}
    ]

},
{
    question: "5 + 3 = ?",
    answers:[
{ text:'9', correct : false},
{ text:'6', correct : false},
{ text:'7', correct : false},
{ text:'8', correct : true}
    ]

},
{
    question: "52 + 3 = ?",
    answers:[
{ text:'54', correct : false},
{ text:'55', correct : true},
{ text:'53', correct : false},
{ text:'52', correct : false}
    ]

},
{
    question: "51 + 19 = ?",
    answers:[
{ text:'75', correct : false},
{ text:'70', correct : true},
{ text:'69', correct : false},
{ text:'68', correct : false}
    ]

},
{
    question: "51 + 21 = ?",
    answers:[
{ text:'72', correct : true},
{ text:'71', correct : false},
{ text:'73', correct : false},
{ text:'74', correct : false}
    ]

},



{
    question: "78 + 4 = ?",
    answers:[
{ text:'81', correct : false},
{ text:'83', correct : false},
{ text:'84', correct : false},
{ text:'82', correct : true}
    ]

},
{
    question: "52 + 6 = ?",
    answers:[
{ text:'60', correct : false},
{ text:'59', correct : false},
{ text:'58', correct : true},
{ text:'100', correct : false}
    ]

},

{
    question: "165 + 3 = ?",
    answers:[
{ text:'166', correct : false},
{ text:'168', correct : true},
{ text:'167', correct : false},
{ text:'169', correct : false}
    ]

},
{
    question: "78 + 68 = ?",
    answers:[
{ text:'147', correct : false},
{ text:'146', correct : true},
{ text:'148', correct : false},
{ text:'145', correct : false}
    ]

}
]