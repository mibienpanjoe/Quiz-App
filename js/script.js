const questions = [
  {
    question: "Which is the tallest mountain in the world?",
    answers: [
      {text: "Mount Everest", correct: "true"},
      {text: "K2", correct: "false"},
      {text: "Kangchenjunga", correct: "false"},
      {text: "Lhotse", correct: "false"}
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      {text: "Mars", correct: "true"},
      {text: "Venus", correct: "false"},
      {text: "Jupiter", correct: "false"},
      {text: "Mercury", correct: "false"}
    ]
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      {text: "Nile", correct: "true"},
      {text: "Amazon", correct: "false"},
      {text: "Yangtze", correct: "false"},
      {text: "Mississippi", correct: "false"}
    ]
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      {text: "Oxygen", correct: "true"},
      {text: "Gold", correct: "false"},
      {text: "Osmium", correct: "false"},
      {text: "Oganesson", correct: "false"}
    ]
  },
  {
    question: "Which country is famous for the Eiffel Tower?",
    answers: [
      {text: "France", correct: "true"},
      {text: "Italy", correct: "false"},
      {text: "Spain", correct: "false"},
      {text: "Germany", correct: "false"}
    ]
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    answers: [
      {text: "Lion", correct: "true"},
      {text: "Tiger", correct: "false"},
      {text: "Elephant", correct: "false"},
      {text: "Bear", correct: "false"}
    ]
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      {text: "Antarctic Desert", correct: "true"},
      {text: "Sahara", correct: "false"},
      {text: "Gobi", correct: "false"},
      {text: "Arabian", correct: "false"}
    ]
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    answers: [
      {text: "Nitrogen", correct: "true"},
      {text: "Oxygen", correct: "false"},
      {text: "Carbon Dioxide", correct: "false"},
      {text: "Argon", correct: "false"}
    ]
  },
  {
    question: "Which ocean is the largest by surface area?",
    answers: [
      {text: "Pacific Ocean", correct: "true"},
      {text: "Atlantic Ocean", correct: "false"},
      {text: "Indian Ocean", correct: "false"},
      {text: "Arctic Ocean", correct: "false"}
    ]
  },
  {
    question: "Which instrument is known as the 'King of Instruments'?",
    answers: [
      {text: "Pipe Organ", correct: "true"},
      {text: "Piano", correct: "false"},
      {text: "Violin", correct: "false"},
      {text: "Drums", correct: "false"}
    ]
  }

];


const questionElement= document.getElementById('question');
const answerButton= document.getElementById('answer-buttons');
const nextButton= document.getElementById('next-btn');


let currentQuestionIndex =0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);

})}

function resetState(){
    nextButton.style.display='none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled= true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


startQuiz();
