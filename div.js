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
    question: "165 / 3 = ?",
    answers:[
{ text:'50', correct : false},
{ text:'55', correct : true},
{ text:'60', correct : false},
{ text:'57', correct : false}
    ]

},


{
    question: "560 / 8 = ?",
    answers:[
{ text:'7', correct : true},
{ text:'9', correct : false},
{ text:'8', correct : false},
{ text:'6', correct : false}
    ]

},

{
    question: "855 / 5 = ?",
    answers:[
{ text:'168', correct : false},
{ text:'170', correct : false},
{ text:'169', correct : false},
{ text:'171', correct : true}
    ]

},
{
    question: "165 / 15 = ?",
    answers:[
{ text:'16', correct : false},
{ text:'14', correct : false},
{ text:'11', correct : true},
{ text:'9', correct : false}
    ]

},
{
    question: "78 / 3 = ?",
    answers:[
{ text:'26', correct : true},
{ text:'27', correct : false},
{ text:'31', correct : false},
{ text:'28', correct : false}
    ]

},

{
    question: "150 / 3 = ?",
    answers:[
{ text:'50', correct : true},
{ text:'100', correct : false},
{ text:'75', correct : false},
{ text:'25', correct : false}
    ]

},


{
    question: "264 / 4 = ?",
    answers:[
{ text:'62', correct : false},
{ text:'64', correct : false},
{ text:'68', correct : false},
{ text:'66', correct : true}
    ]

}

        
        
         
   
]
