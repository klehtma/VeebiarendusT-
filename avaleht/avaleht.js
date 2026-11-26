const questions = [
    {
        question: "Mitu mängijat on ühel jalgpallivõistkonnal väljakul?",
        answers: ["9", "10", "11", "12"],
        correct: 2
    },
    {
        question: "Mitu minutit kestab tavaline jalgpallimäng?",
        answers: ["60", "80", "90", "120"],
        correct: 2
    },
    {
        question: "Mis aastal toimus esimene jalgpalli MM?",
        answers: ["1920", "1930", "1950", "1960"],
        correct: 1
    },
    {
        question: "Kes võib oma karistusalas palli käega mängida?",
        answers: ["Ründaja", "Kaitsja", "Poolkaitsja", "Väravavaht"],
        correct: 3
    },
    {
        question: "Mitu meetrit on penalti löömise punkt väravajoonest?",
        answers: ["9", "10", "11", "12"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const questionNumber = document.getElementById("question-number");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

function showQuestion() {
    let current = questions[currentQuestion];

    question.textContent = current.question;
    questionNumber.textContent =
        "Küsimus " + (currentQuestion + 1) + "/" + questions.length;

    answers.innerHTML = "";
    feedback.textContent = "";
    nextButton.disabled = true;

    for (let i = 0; i < current.answers.length; i++) {
        let button = document.createElement("button");

        button.textContent = current.answers[i];
        button.className = "answer-button";

        button.onclick = function () {
            checkAnswer(i);
        };

        answers.appendChild(button);
    }
}

function checkAnswer(index) {
    let current = questions[currentQuestion];
    let buttons = answers.children;

    if (index === current.correct) {
        score++;
        feedback.textContent = "Õige vastus!";
    } else {
        feedback.textContent = "Vale vastus!";
        buttons[index].classList.add("wrong");
    }

    buttons[current.correct].classList.add("correct");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    nextButton.disabled = false;
}

nextButton.onclick = function () {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    question.textContent =
        "Sinu tulemus: " + score + "/" + questions.length;

    questionNumber.textContent = "Viktoriin lõpetatud!";
    answers.innerHTML = "";
    feedback.textContent = "";
    nextButton.textContent = "Proovi uuesti";

    nextButton.onclick = function () {
        location.reload();
    };
}

showQuestion();

const images = [
    "./static/barcelona.jpg",
    "./static/mang.jpg",
    "./static/old.jpg",
    "./static/poverty.jpg"
];

const descriptions = [
    "Barcelona",
    "Mänguhetk",
    "Vanad ajad",
    "Vaesuses jalgpall"
];

let currentImage = 0;

function showImage() {
    document.getElementById("gallery-image").src =
        images[currentImage];

    document.getElementById("gallery-image").alt =
        descriptions[currentImage];

    document.getElementById("gallery-description").textContent =
        descriptions[currentImage];

    document.getElementById("gallery-counter").textContent =
        (currentImage + 1) + " / " + images.length;
}

function nextImage() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage();
}

function previousImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage();
}