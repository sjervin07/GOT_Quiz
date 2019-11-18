var startButton = document.getElementById("start-button")
var questionContainer = document.getElementById("question-container")

var questionElement = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")

var shuffleQuestions
var currentQuestionsIndex

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainer.classList.remove("hide")
    setNextQuestion()

}

function setNextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionsIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.choices.forEach(choices => {
        button = document.createElement("button")
        button.innerText = choices.innerText
        button.classlist.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);answerButtons.appendChild(button) 
    })

}

function selectAnswer() {

}
var questions = [
    {    
    question: "What Great House are Robb, Sansa, Arya, Bran and Rickon from?",
    choices: ["Greyjoy", "Stark", "Baratheon", "Lannister"],
    answer: "Stark"
    },
    {
    question: "What is the capital of the Seven Kingdoms?",
    choices: ["Dragonstone", "Winterfell", "Dorne", "King's Landing"],
    answer: "King's Landing"
    },
    {
    question: "Which of the following options is NOT one of Daenerys Targaryen's dragons?",
    choices: ["Viserion", "Rhaegal", "Puff", "Drogon"],
    answer: "Puff"
    },
    {
    question: "The Dothraki are skilled warriors famous for using what animal in battle?",
    choices: ["Elephants", "Ostriches", "Horses", "Camels"],
    answer: "Horses"
    },
    {
    question: "Who winds up on the throne at the end of the series?",
    choices: ["Bran Stark", "Daenerys Targaryen", "Jon Snow", "Jamie Lannister"],
    answer: "Bran Stark"
    }
    ];