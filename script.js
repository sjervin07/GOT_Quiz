var title = document.getElementById("title");
var game = document.getElementById("game")


let currentTitle = {};
let acceptingAnswers = true;
let score = 0;
let titleCounter = 0;
let availableQuestions = [];



var questions = [
    {    
    title: "What Great House are Robb, Sansa, Arya, Bran and Rickon from?",
    choices: ["Greyjoy", "Stark", "Baratheon", "Lannister"],
    answer: "Stark"
    },
    {
    title: "What is the capital of the Seven Kingdoms?",
    choices: ["Dragonstone", "Winterfell", "Dorne", "King's Landing"],
    answer: "King's Landing"
    },
    {
    title: "Which of the following options is NOT one of Daenerys Targaryen's dragons?",
    choices: ["Viserion", "Rhaegal", "Puff", "Drogon"],
    answer: "Puff"
    },
    {
    title: "The Dothraki are skilled warriors famous for using what animal in battle?",
    choices: ["Elephants", "Ostriches", "Horses", "Camels"],
    answer: "Horses"
    },
    {
    title: "Who winds up on the throne at the end of the series?",
    choices: ["Bran Stark", "Daenerys Targaryen", "Jon Snow", "Jamie Lannister"],
    answer: "Bran Stark"
    }
    ];
function startGame() {
    renderQuestion()

}
startGame()

function renderQuestion() {
    for (var i=0; i < questions.length; i++){
        
        var h2= document.createElement("h2")
        h2.innerText = questions[i].title;
        game.append(h2)

    for (var j=0; j < questions[i].choices.length; j++){

        var choiceContainer= document.createElement("div");
        choiceContainer.classList.add("choice-container");

        var p= document.createElement("p");
        p.classList.add("choice-prefix");
        p.innerText=j;

        var text= document.createElement("p");
        text.classList.add("choice-text");
        text.innerText= questions[i].choices[j];

        choiceContainer.append(p)
        choiceContainer.append(text)
        game.append(choiceContainer);
    }
    }
}






