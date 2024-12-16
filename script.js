const startButton = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;

// Perguntas e respostas
const questions = [
    {
        question: "O que precisas para acender uma fogueira?",
        answers: [
            { text: "Madeira e fósforos", correct: true },
            { text: "Água e pedras", correct: false },
            { text: "Folhas e areia", correct: false },
            { text: "Sal e gelo", correct: false }
        ]
    },
    {
        question: "Qual é a principal fonte de água numa ilha deserta?",
        answers: [
            { text: "Água do mar", correct: false },
            { text: "Chuva", correct: true },
            { text: "Lama", correct: false },
            { text: "Areia", correct: false }
        ]
    },
    {
        question: "O que é essencial para a sobrevivência em uma ilha deserta?",
        answers: [
            { text: "Comida", correct: false },
            { text: "Água", correct: true },
            { text: "Ferramentas", correct: false },
            { text: "Sombra", correct: false }
        ]
    },
    {
        question: "Se te perderes na floresta, o que deves fazer primeiro?",
        answers: [
            { text: "Gritar por ajuda", correct: false },
            { text: "Tentar encontrar comida", correct: false },
            { text: "Marcar o caminho e procurar abrigo", correct: true },
            { text: "Correr para encontrar uma saída", correct: false }
        ]
    },
    {
        question: "Qual destes elementos pode ser usado para purificar água?",
        answers: [
            { text: "Cozinhar a água", correct: true },
            { text: "Adicionar sal", correct: false },
            { text: "Fermentar a água", correct: false },
            { text: "Misturar com terra", correct: false }
        ]
    },
    {
        question: "Como podes sinalizar que precisas de ajuda na ilha?",
        answers: [
            { text: "Acender uma fogueira", correct: true },
            { text: "Deixar pegadas no chão", correct: false },
            { text: "Gritar alto", correct: false },
            { text: "Construir um abrigo", correct: false }
        ]
    },
    {
        question: "O que deve ser feito para preservar energia ao ir buscar água na ilha?",
        answers: [
            { text: "Correr até a fonte", correct: false },
            { text: "Andar devagar e com cautela", correct: true },
            { text: "Beber muito ao longo do caminho", correct: false },
            { text: "Pedir ajuda", correct: false }
        ]
    },
    {
        question: "Se encontrares um animal selvagem, qual é a melhor atitude a tomar?",
        answers: [
            { text: "Tentar capturá-lo", correct: false },
            { text: "Observá-lo de longe", correct: true },
            { text: "Segui-lo até a sua toca", correct: false },
            { text: "Atirar pedras", correct: false }
        ]
    },
    {
        question: "Como podes aumentar as tuas chances de sobrevivência?",
        answers: [
            { text: "Ficar em um lugar seguro e esperar", correct: false },
            { text: "Construir um abrigo e procurar alimentos", correct: true },
            { text: "Procurar resgate o tempo todo", correct: false },
            { text: "Nadar para outro lugar", correct: false }
        ]
    },
    {
        question: "O que deves evitar comer na ilha?",
        answers: [
            { text: "Frutas selvagens", correct: false },
            { text: "Carne de animais", correct: true },
            { text: "Insetos", correct: false },
            { text: "Plantas comestíveis", correct: false }
        ]
    }
];

// Iniciar o jogo
startButton.addEventListener('click', startGame);

function startGame() {
    startButton.style.display = 'none'; // Esconder o botão inicial
    quizContainer.style.display = 'block'; // Mostrar o quiz
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answersElement.appendChild(button);
    });
}

function resetState() {
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
    nextButton.style.display = 'none';
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    nextButton.style.display = 'block';
}

function setStatusClass(element, correct) {
    if (correct) {
        element.style.backgroundColor = "#4CAF50"; // Verde
    } else {
        element.style.backgroundColor = "#f44336"; // Vermelho
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        quizContainer.innerHTML = `<h2>Parabéns! Terminaste o quiz!</h2>`;
    }
});










