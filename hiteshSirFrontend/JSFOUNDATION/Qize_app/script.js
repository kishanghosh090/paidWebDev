/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("quize-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const score = document.getElementById("score");

  const questions = [
    {
      question: "What is 2 + 2?",
      choices: ["4", "5", "6", "7"],
      correctAnswer: "4",
    },
    {
      question: "What is 5 + 5?",
      choices: ["10", "15", "20", "25"],
      correctAnswer: "10",
    },
    {
      question: "What is 10 + 10?",
      choices: ["20", "30", "40", "50"],
      correctAnswer: "20",
    },
    {
      question: "What is 15 + 15?",
      choices: ["30", "45", "60", "75"],
      correctAnswer: "30",
    },
    {
      question: "What is 20 + 20?",
      choices: ["40", "60", "80", "100"],
      correctAnswer: "40",
    },
  ];

  let currentQuestionIndex = 0;
  let scoreValue = 0;
  restartBtn.addEventListener("click",() => {
    currentQuestionIndex = 0
    scoreValue = 0
    resultContainer.classList.add("hidden")
    startQuiz()
  });
  startBtn.addEventListener("click", startQuiz);

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }
  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = "";
    questions[currentQuestionIndex].choices.forEach((answer) => {
      const li = document.createElement("li");
      li.textContent = answer;
      choicesList.appendChild(li);
      li.addEventListener("click", (e) => {
        selectAnswer(e.target.textContent);
        console.log(e.target.textContent);
      });
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    if (
      parseInt(choice) ==
      parseInt(questions[currentQuestionIndex].correctAnswer)
    ) {
      scoreValue++;
    }
    nextBtn.classList.remove("hidden");
  }
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    score.textContent = `${scoreValue} out of ${questions.length - 1}`;
    restartBtn.classList.remove("hidden");
  }
});
