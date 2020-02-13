const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
currentQuestionIndex++;
setNextQuestion()
})

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

function startGame(){ 
startButton.classList.add('hide');
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
setNextQuestion()
}
function setNextQuestion()
{
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}
function selectAnswer(e){

const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
})
if(shuffledQuestions.length > currentQuestionIndex +1){
nextButton.classList.remove('hide');
}else{
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
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
{ text:'26', correct : false},
{ text:'3', correct : false},
{ text:'12', correct : false}
    ]

},
{
    question: "5 + 2 = ?",
    answers:[
{ text:'7', correct : true},
{ text:'2', correct : false},
{ text:'14', correct : false},
{ text:'49', correct : false}
    ]

},
{
    question: "5 + 3 = ?",
    answers:[
{ text:'7', correct : false},
{ text:'16', correct : false},
{ text:'88', correct : false},
{ text:'8', correct : true}
    ]

},
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
    question: "51 + 19 = ?",
    answers:[
{ text:'75', correct : false},
{ text:'70', correct : true},
{ text:'69', correct : false},
{ text:'68', correct : false}
    ]

},
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
    question: "78 * 4 = ?",
    answers:[
{ text:'310', correct : false},
{ text:'314', correct : false},
{ text:'316', correct : false},
{ text:'312', correct : true}
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
    question: "165 / 3 = ?",
    answers:[
{ text:'50', correct : false},
{ text:'55', correct : true},
{ text:'60', correct : false},
{ text:'57', correct : false}
    ]

},
{
    question: "78 / 6 = ?",
    answers:[
{ text:'14', correct : false},
{ text:'13', correct : true},
{ text:'11', correct : false},
{ text:'12', correct : false}
    ]

},
   
]