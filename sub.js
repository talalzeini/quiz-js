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



    question: "51 - 19 = ?",
    answers:[
{ text:'32', correct : true},
{ text:'31', correct : false},
{ text:'33', correct : false},
{ text:'34', correct : false}
    ]
},
{
    question: "51 - 20 = ?",
    answers:[
{ text:'32', correct : false},
{ text:'31', correct : true},
{ text:'33', correct : false},
{ text:'34', correct : false}
    ]
},
{
    question: "50 - 19 = ?",
    answers:[
{ text:'32', correct : false},
{ text:'31', correct : false},
{ text:'33', correct : true},
{ text:'34', correct : false}
    ]
},
{
    question: "49 - 19 = ?",
    answers:[
{ text:'30', correct : true},
{ text:'31', correct : false},
{ text:'29', correct : false},
{ text:'34', correct : false}
    ]
},
{
    question: "48 - 19 = ?",
    answers:[
{ text:'29', correct : true},
{ text:'30', correct : false},
{ text:'28', correct : false},
{ text:'27', correct : false}
    ]
},
{
    question: "47 - 19 = ?",
    answers:[
{ text:'28', correct : true},
{ text:'31', correct : false},
{ text:'29', correct : false},
{ text:'34', correct : false}
    ]
},
{
    question: "46 - 19 = ?",
    answers:[
{ text:'27', correct : true},
{ text:'30', correct : false},
{ text:'28', correct : false},
{ text:'26', correct : false}
    ]
},
{
    question: "26 - 12 = ?",
    answers:[
{ text:'12', correct : false},
{ text:'11', correct : false},
{ text:'14', correct : true},
{ text:'13', correct : false}
    ]
},
{
    question: "20 - 12 = ?",
    answers:[
{ text:'9', correct : false},
{ text:'11', correct : false},
{ text:'8', correct : true},
{ text:'10', correct : false}
    ]
},
{
    question: "18 - 12 = ?",
    answers:[
{ text:'5', correct : false},
{ text:'3', correct : false},
{ text:'6', correct : true},
{ text:'2', correct : false}
    ]
},
{
    question: "20 - 13 = ?",
    answers:[
{ text:'9', correct : false},
{ text:'8', correct : false},
{ text:'7', correct : true},
{ text:'6', correct : false}
    ]
},
{
    question: "20 - 14 = ?",
    answers:[
{ text:'9', correct : false},
{ text:'8', correct : false},
{ text:'6', correct : true},
{ text:'6', correct : false}
    ]
},
{
    question: "20 - 15 = ?",
    answers:[
{ text:'7', correct : false},
{ text:'5', correct : true},
{ text:'4', correct : false},
{ text:'6', correct : false}
    ]
},
{
    question: "21 - 16 = ?",
    answers:[
{ text:'6', correct : false},
{ text:'4', correct : false},
{ text:'5', correct : true},
{ text:'7', correct : false}
    ]
},
{
    question: "2 - 1 = ?",
    answers:[
{ text:'4', correct : false},
{ text:'3', correct : false},
{ text:'2', correct : false},
{ text:'1', correct : true}
    ]
},
{
    question: "3 - 1 = ?",
    answers:[
{ text:'2', correct : true},
{ text:'3', correct : false},
{ text:'4', correct : false},
{ text:'1', correct : false}
    ]
},
{
    question: "6 - 2 = ?",
    answers:[
{ text:'1', correct : false},
{ text:'4', correct : true},
{ text:'3', correct : false},
{ text:'2', correct : false}
    ]
}

]
