document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    const nextButton = document.getElementById('next-btn');
    const quizContainer = document.getElementById('quiz-container');
    const questionText = document.getElementById('question-text');
    const answerButtons = document.getElementById('answer-buttons');
    const questionElement = document.querySelector('.question');

    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: "Qual é a melhor fonte de água numa ilha deserta?",
            answers: [
                { text: "Água do mar", correct: false },
                { text: "Coco verde", correct: true },
                { text: "Lama", correct: false },
                { text: "Poças de chuva", correct: false },
            ],
        },
        {
            question: "Como podes obter fogo sem fósforos?",
            answers: [
                { text: "Esfregando gravetos", correct: true },
                { text: "Usando folhas verdes", correct: false },
                { text: "Batendo paus contra a água", correct: false },
                { text: "Esfregando pedras molhadas", correct: false },
            ],
        },
        {
            question: "Que alimento é seguro numa ilha deserta?",
            answers: [
                { text: "Frutas desconhecidas", correct: false },
                { text: "Carne crua de animais", correct: false },
                { text: "Coco verde", correct: true },
                { text: "Peixes mortos há dias", correct: false },
            ],
        },
        {
            question: "Qual é a forma mais eficaz de pedir ajuda?",
            answers: [
                { text: "Gritar sem parar", correct: false },
                { text: "Acender uma fogueira", correct: true },
                { text: "Escrever na areia", correct: false },
                { text: "Caminhar em círculos", correct: false },
            ],
        },
        {
            question: "Onde é mais seguro construir um abrigo?",
            answers: [
                { text: "Ao lado do mar", correct: false },
                { text: "No meio da floresta densa", correct: false },
                { text: "Perto de árvores e água doce", correct: true },
                { text: "No topo de uma colina", correct: false },
            ],
        },
        {
            question: "Como podes proteger-te do sol numa ilha deserta?",
            answers: [
                { text: "Ficar ao sol parado", correct: false },
                { text: "Construir um abrigo com folhas", correct: true },
                { text: "Dormir na areia", correct: false },
                { text: "Ficar dentro de água", correct: false },
            ],
        },
        {
            question: "Qual é o sinal mais eficaz para ser resgatado?",
            answers: [
                { text: "Fazer um buraco na areia", correct: false },
                { text: "Acender uma fogueira", correct: true },
                { text: "Caminhar sem direção", correct: false },
                { text: "Deixar pedras no chão", correct: false },
            ],
        },
        {
            question: "Qual destes animais representa um maior perigo numa ilha?",
            answers: [
                { text: "Cobra venenosa", correct: true },
                { text: "Peixe pequeno", correct: false },
                { text: "Caranguejo", correct: false },
                { text: "Pássaros", correct: false },
            ],
        },
        {
            question: "O que deves procurar primeiro numa ilha deserta?",
            answers: [
                { text: "Abrigo", correct: false },
                { text: "Comida", correct: false },
                { text: "Água potável", correct: true },
                { text: "Lenha", correct: false },
            ],
        },
        {
            question: "Como podes identificar plantas seguras para comer?",
            answers: [
                { text: "Plantas com flores coloridas", correct: false },
                { text: "Plantas que os animais comem", correct: true },
                { text: "Plantas com folhas grandes", correct: false },
                { text: "Plantas desconhecidas", correct: false },
            ],
        }
    ];

    startButton.addEventListener('click', () => {
        startButton.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        loadQuestion();
    });

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    });

    function loadQuestion() {
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
            answerButtons.appendChild(button);
        });
    }

    function resetState() {
        nextButton.classList.add('hidden');
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct;

        if (correct) {
            selectedButton.classList.add('correct');
            score++;
        } else {
            selectedButton.classList.add('incorrect');
        }

        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct) {
                button.classList.add('correct');
            }
            button.disabled = true;
        });
        nextButton.classList.remove('hidden');
    }

    function showResults() {
        resetState();
        if (score >= 6) {
            questionElement.innerText = `Parabéns! Conseguiste sobreviver! Acertaste ${score} de ${questions.length} perguntas.`;
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            questionElement.innerText = `Ops, infelizmente não conseguiste sobreviver. Acertaste ${score} de ${questions.length} perguntas.`;

            // Adicionar botão de reiniciar
            const restartButton = document.createElement('button');
            restartButton.innerText = "Reiniciar";
            restartButton.classList.add('btn');
            restartButton.addEventListener('click', restartQuiz);
            answerButtons.appendChild(restartButton);
        }
        nextButton.classList.add('hidden');
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        startButton.classList.remove('hidden');
        questionElement.innerText = "";
        resetState();
    }
});










