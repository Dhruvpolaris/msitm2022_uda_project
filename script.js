import myJson from './data.json' assert {type: 'json'};

const quizData = [
    {
        question: "Which Genre would you like to watch today?",
        a: "Action/Crime",
        b: "Romance/Drama",
        c: "Comedy",
        d: "Sci-Fi/Thriller",
        correct: "a",
    },
    {
        question: "What most closely resembles your occasion?",
        a: "Watch by myself",
        b: "Date Night",
        c: "Watch with family",
        d: "Watch with friends",
        correct: "a",
    },
    {
        question: "Choose a category that interests you.",
        a: "Based on a Biography",
        b: "Based on a Book/Novel",
        c: "Based on a True Event",
        d: "No preference",
        correct: "a",
    },
    {
        question: "How old would you like the movie/tv show to be?",
        a: "Before 1980 (Gen X)",
        b: "1980-1996 (Millenial)",
        c: "1996-2010 (Gen Z)",
        d: "Post 2010 (Gen Alpha)",
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

           <h1 style="color: teal;">Our Recommendation</h1>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
           
                <div class="carousel-item active" style="background-color:#ffffff";>
                    <h2>${mt1}</h2>
                    
                    <div style="text-align: center;width: 100%; padding:1rem;">
                        <a href="https://www.google.com/search?q=${mt1}" target="_blank" style="color: red;">
                            <button type="button" class="btn btn-outline-danger" style="width:25%;">Watch Now!</button>
                        </a>
                    </div>

                </div>
                <div class="carousel-item" style="background-color:#ffffff">
                    <h2>${mt2}</h2>

                    <div style="text-align: center;width: 100%; padding:1rem;">
                        <a href="https://www.google.com/search?q=${mt2}" target="_blank" style="color: red;">
                            <button type="button" class="btn btn-outline-danger" style="width:25%;">Watch Now!</button>
                        </a>
                    </div>

                </div>
                <div class="carousel-item" style="background-color:#ffffff">
                    <h2>${mt3}</h2>

                    <div style="text-align: center;width: 100%; padding:1rem;">
                        <a href="https://www.google.com/search?q=${mt3}" target="_blank" style="color: red;">
                            <button type="button" class="btn btn-outline-danger" style="width:25%;">Watch Now!</button>
                        </a>
                    </div>

                </div>
                <div class="carousel-item" style="background-color:#ffffff">
                    <h2>${mt4}</h2>

                    <div style="text-align: center;width: 100%; padding:1rem;">
                        <a href="https://www.google.com/search?q=${mt4}" target="_blank" style="color: red;">
                            <button type="button" class="btn btn-outline-danger" style="width:25%;">Watch Now!</button>
                        </a>
                     </div>

                </div>
                <div class="carousel-item" style="background-color:#ffffff">
                    <h2>${mt5}</h2>

                    <div style="text-align: center;width: 100%; padding:1rem;">
                        <a href="https://www.google.com/search?q=${mt5}" target="_blank" style="color: red;">
                            <button type="button" class="btn btn-outline-danger" style="width:25%;">Watch Now!</button>
                        </a>
                    </div>

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