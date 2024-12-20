const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

let currentQuestionIndex = 0;
let timer;
const timeLimit = 10; // seconds

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    let timeLeft = timeLimit;
    document.getElementById("time").innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("next-button").style.display = "block";
            document.getElementById("options").innerHTML = "Time's up! Moving to the next question.";
        }
    }, 1000);
}

function selectAnswer(selectedOption) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        alert("Correct!");
    } else {
        alert("Wrong answer!");
    }

    document.getElementById("next-button").style.display = "block";
}

document.getElementById("next-button").onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById("next-button").style.display = "none";
        showQuestion();
    } else {
        alert("Quiz completed!");
        // Optionally reset the quiz or show results
    }
};

startQuiz();