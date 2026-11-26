// JavaScripti loomisel kasutatud abivahend:
// Stackoverflow arutused, lingid README failis


// ==================== VIKTORIIN ====================

// Viktoriini küsimused, vastusevariandid ja õigete vastuste indeksid.
// Indeksite lugemine algab nullist.
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

// Hetkel kuvatava küsimuse indeks ja õigete vastuste arv.
let currentQuestion = 0;
let score = 0;

// Viktoriini jaoks vajalike HTML-elementide leidmine.
const question = document.getElementById("question");
const questionNumber = document.getElementById("question-number");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

// Kuvab hetkel aktiivse küsimuse ja selle vastusevariandid.
function showQuestion() {
    let current = questions[currentQuestion];

    question.textContent = current.question;
    questionNumber.textContent =
        "Küsimus " + (currentQuestion + 1) + "/" + questions.length;

    // Eemaldab eelmise küsimuse vastused ja tagasiside.
    answers.innerHTML = "";
    feedback.textContent = "";
    nextButton.disabled = true;

    // Loob iga vastusevariandi jaoks eraldi nupu.
    for (let i = 0; i < current.answers.length; i++) {
        let button = document.createElement("button");

        button.textContent = current.answers[i];
        button.className = "answer-button";

        // Nupule vajutamisel kontrollitakse vastuse õigsust.
        button.onclick = function () {
            checkAnswer(i);
        };

        answers.appendChild(button);
    }
}

// Kontrollib kasutaja valitud vastust.
function checkAnswer(index) {
    let current = questions[currentQuestion];
    let buttons = answers.children;

    // Õige vastuse korral suurendatakse punktisummat.
    if (index === current.correct) {
        score++;
        feedback.textContent = "Õige vastus!";
    } else {
        feedback.textContent = "Vale vastus!";
        buttons[index].classList.add("wrong");
    }

    // Tõstab õige vastuse rohelise värviga esile.
    buttons[current.correct].classList.add("correct");

    // Keelab uuesti vastamise samale küsimusele.
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    nextButton.disabled = false;
}

// Liigub järgmise küsimuse juurde või kuvab lõpptulemuse.
nextButton.onclick = function () {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

// Kuvab viktoriini lõpus kasutaja punktisumma.
function showResult() {
    question.textContent =
        "Sinu tulemus: " + score + "/" + questions.length;

    questionNumber.textContent = "Viktoriin lõpetatud!";
    answers.innerHTML = "";
    feedback.textContent = "";
    nextButton.textContent = "Proovi uuesti";

    // Lehe uuesti laadimisel algab viktoriin otsast peale.
    nextButton.onclick = function () {
        location.reload();
    };
}

// Kuvab lehe laadimisel esimese küsimuse.
showQuestion();


// ==================== PILDIGALERII ====================

// Galeriis kasutatavate piltide failiteed.
const images = [
    "./static/barcelona.jpg",
    "./static/mang.jpg",
    "./static/old.jpg",
    "./static/poverty.jpg"
];

// Piltide kirjeldused samas järjekorras.
const descriptions = [
    "Barcelona",
    "Mänguhetk",
    "Vanad ajad",
    "Vaesuses jalgpall"
];

// Hetkel kuvatava pildi indeks.
let currentImage = 0;

// Uuendab galerii pilti, kirjeldust ja piltide loendurit.
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

// Liigub galeriis järgmise pildi juurde.
function nextImage() {
    currentImage++;

    // Pärast viimast pilti kuvatakse uuesti esimene pilt.
    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage();
}

// Liigub galeriis eelmise pildi juurde.
function previousImage() {
    currentImage--;

    // Esimesest pildist tagasi liikudes kuvatakse viimane pilt.
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage();
}


// ==================== TAGASI ÜLES KERIMINE ====================

// Kerib jaluses olevale nupule vajutamisel sujuvalt lehe algusesse.
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==================== ANIMEERITUD STATISTIKA ====================

// Leiab kõik statistikanumbreid sisaldavad HTML-elemendid.
const numbers = document.querySelectorAll(".stat-number");

// Suurendab kuvatavat numbrit järk-järgult nullist lõppväärtuseni.
function animateNumber(element) {
    // Lõppväärtus võetakse HTML-i data-target atribuudist.
    let target = Number(element.dataset.target);
    let current = 0;
    let step = target / 60;

    // Uuendab numbrit iga 25 millisekundi järel.
    let timer = setInterval(function () {
        current += step;

        // Peatab animatsiooni lõppväärtuse saavutamisel.
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        // Kuvab täisarvud ilma komakohtadeta ja
        // murdarvud kahe komakohaga.
        if (target % 1 === 0) {
            element.textContent = Math.floor(current);
        } else {
            element.textContent = current.toFixed(2).replace(".", ",");
        }

    }, 25);
}

// Jälgib statistika sektsiooni nähtavust ekraanil.
const statisticsObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {

        // Käivitab kõikide statistikanumbrite animatsioonid.
        for (let i = 0; i < numbers.length; i++) {
            animateNumber(numbers[i]);
        }

        // Lõpetab jälgimise, et animatsioon toimuks ainult üks kord.
        statisticsObserver.disconnect();
    }
}, { threshold: 0.2 });

// Animatsioon käivitub, kui vähemalt 20% sektsioonist on nähtav.
statisticsObserver.observe(document.querySelector(".statistics"));