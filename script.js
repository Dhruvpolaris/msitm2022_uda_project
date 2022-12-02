import myJson from './data.json' assert {type: 'json'};

const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "Who won the 2022 F1 World Championship?",
        a: "Max",
        b: "Lewis",
        c: "Perez",
        d: "none of the above",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0
var inputs = []

loadQuiz()

function loadQuiz() {

    var inputs = []

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {

    const answer = getSelected()

    inputs.push(answer)

    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
        // Load Data
        // console.log(myJson.AAAAA);
        // Statement on 1st line

        // Search
        let search  = inputs.toString().replaceAll(',','').toUpperCase();
        // console.log(myJson[search]);
        let mt1=myJson[search].mt1;
        let mt2=myJson[search].mt2;
        let mt3=myJson[search].mt3;
        let mt4=myJson[search].mt4;
        let mt5=myJson[search].mt5;

        main.innerHTML = 
`
    <div class="quiz-container" id="quiz">

           <h1 style="color: teal;"> Movie Recommendations</h1>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
           
                <div class="carousel-item active" style="background-color:#ffffff";>
                    <h2>${mt1}</h2>
                    <div style="width: 100%; text-align: center;">
                    <a href="https://www.google.com/search?q=${mt1}" target="_blank" style="color: red">Watch Now!</a>
                    </div>
                </div>
                <div class="carousel-item" style="background-color:#ffffff">
                    <h2>${mt2}</h2>
                    <div style="width: 100%; text-align: center;">
                    <a href="https://www.google.com/search?q=${mt2}" target="_blank" style="color: red">Watch Now!</a>
                    </div>
                    <br>
                </div>
                <div class="carousel-item" style="background-color:#ffffff">
                    <h2>${mt3}</h2>
                    <div style="width: 100%; text-align: center;">
                    <a href="https://www.google.com/search?q=${mt3}" target="_blank" style="color: red">Watch Now!</a>
                    </div>
                    <br>
                </div>
                <div class="carousel-item" style="background-color:#ffffff">
                    <h2>${mt4}</h2>
                    <div style="width: 100%; text-align: center;">
                    <a href="https://www.google.com/search?q=${mt4}" target="_blank" style="color: red">Watch Now!</a>
                    </div>
                    <br>
                </div>
                <div class="carousel-item" style="background-color:#ffffff">
                    <h2>${mt5}</h2>
                    <div style="width: 100%; text-align: center;">
                    <a href="https://www.google.com/search?q=${mt5}" target="_blank" style="color: red">Watch Now!</a>
                    </div>
                    <br>
                </div>

            </div>
        </div>
        <br>
        <div style="width: 100%; text-align: center;">
            <a href="#carouselExampleControls" role="button" data-slide="next" data-interval="false" style="text-decoration: underline;">
            I have already watched this, Next recommendation
            </a>
        <div>
        <br>
        <button onclick="location.reload()">Start Over?</button>
    </div>    
`
       }
    }
})