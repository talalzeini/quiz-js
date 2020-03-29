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
    question: "96 / 4 = ?",
    answers:[
{ text:'22', correct : false},
{ text:'24', correct : true},
{ text:'26', correct : false},
{ text:'28', correct : false}
    ]

},


{
    question: "600 / 75 = ?",
    answers:[
{ text:'8', correct : true},
{ text:'9', correct : false},
{ text:'7', correct : false},
{ text:'6', correct : false}
    ]

},

{
    question: "78 / 3 = ?",
    answers:[
{ text:'23', correct : false},
{ text:'25', correct : false},
{ text:'24', correct : false},
{ text:'26', correct : true}
    ]

},
{
    question: "630 / 3 = ?",
    answers:[
{ text:'212', correct : false},
{ text:'215', correct : false},
{ text:'210', correct : true},
{ text:'208', correct : false}
    ]

},
{
    question: "18 / 3 = ?",
    answers:[
{ text:'9', correct : false},
{ text:'6', correct : true},
{ text:'7', correct : false},
{ text:'8', correct : false}
    ]

},


{
    question: "48 / 6 = ?",
    answers:[
{ text:'8', correct : true},
{ text:'7', correct : false},
{ text:'9', correct : false},
{ text:'6', correct : false}
    ]

},

{
    question: "950 / 5 = ?",
    answers:[
{ text:'160', correct : false},
{ text:'170', correct : false},
{ text:'160', correct : false},
{ text:'190', correct : true}
    ]

},
{
    question: "858 / 11 = ?",
    answers:[
{ text:'79', correct : false},
{ text:'80', correct : false},
{ text:'78', correct : true},
{ text:'77', correct : false}
    ]

},
{
    question: "69 / 3 = ?",
    answers:[
{ text:'22', correct : false},
{ text:'23', correct : true},
{ text:'21', correct : false},
{ text:'24', correct : false}
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
    question: "169 / 13 = ?",
    answers:[
{ text:'11', correct : false},
{ text:'12', correct : false},
{ text:'14', correct : false},
{ text:'13', correct : true}
    ]

},
{
    question: "289 / 17 = ?",
    answers:[
{ text:'15', correct : false},
{ text:'16', correct : false},
{ text:'17', correct : true},
{ text:'12', correct : false}
    ]

},
{
    question: "216 / 4 = ?",
    answers:[
{ text:'53', correct : false},
{ text:'54', correct : true},
{ text:'55', correct : false},
{ text:'57', correct : false}
    ]

},


{
    question: "642 / 3 = ?",
    answers:[
{ text:'215', correct : true},
{ text:'214', correct : false},
{ text:'216', correct : false},
{ text:'218', correct : false}
    ]

},

{
    question: "785 / 5 = ?",
    answers:[
{ text:'158', correct : false},
{ text:'156', correct : false},
{ text:'159', correct : false},
{ text:'157', correct : true}
    ]

},
{
    question: "566 / 2 = ?",
    answers:[
{ text:'284', correct : false},
{ text:'282', correct : false},
{ text:'283', correct : true},
{ text:'281', correct : false}
    ]

}  
]
