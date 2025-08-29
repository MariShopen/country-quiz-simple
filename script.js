import { countries as localCountries } from "./data/countries.js";
import { Congrats } from "./components/Congrats.js";
import { QuestionButton } from "./components/QuestionButton.js";
import { QuestionComponent } from "./components/QuestionComponent.js";

// --- State ---
let state = {
  questionId: 0,
  isLoading: true,
  quizQuestions: [],
};

const appContainer = document.getElementById("app");

// --- Helper Functions ---
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateIncorrectAnswers = (allCountryNames, correctAnswer) => {
  const incorrectAnswers = [];
  while (incorrectAnswers.length < 3) {
    const randomIndex = Math.floor(Math.random() * allCountryNames.length);
    const randomCountry = allCountryNames[randomIndex];
    if (
      randomCountry !== correctAnswer &&
      !incorrectAnswers.includes(randomCountry)
    ) {
      incorrectAnswers.push(randomCountry);
    }
  }
  return incorrectAnswers;
};

// --- Data Fetching ---
async function createQuizQuestions() {
  try {
    // Using local data as a fallback, as the original API might be unstable.
    const jsonData = localCountries;
    const countryNames = jsonData.map((country) => country.name);

    const selectedQuestions = shuffle(jsonData).slice(0, 10);

    return selectedQuestions.map((country) => {
      const correctAnswer = country.name;
      const incorrectAnswers = generateIncorrectAnswers(
        countryNames,
        correctAnswer
      );
      const allAnswers = shuffle([correctAnswer, ...incorrectAnswers]);

      const question = `In which country is ${country.capital} the capital?`;
      return {
        question,
        options: {
          correct: correctAnswer,
          all: allAnswers,
          answered: undefined,
          disabled: false,
        },
      };
    });
  } catch (error) {
    console.error("Error creating quiz questions:", error);
    appContainer.innerHTML = `<div class="quiz-container-wrapper"><div class="error">Failed to load questions.</div></div>`;
    return [];
  }
}

// --- Event Handlers (attached to window) ---
window.handleUserAnswer = (answer) => {
  const currentQuestion = state.quizQuestions[state.questionId];
  if (currentQuestion.options.disabled) return;

  currentQuestion.options.answered = answer;
  currentQuestion.options.disabled = true;

  render();
};

window.handleRestart = async () => {
  state.isLoading = true;
  render();
  state.quizQuestions = await createQuizQuestions();
  state.questionId = 0;
  state.isLoading = false;
  render();
};

// --- Render Function ---
function render() {
  const { isLoading, quizQuestions, questionId } = state;

  const isCompleted =
    quizQuestions.length > 0 &&
    quizQuestions.every((q) => q.options.answered != null);

  let mainContent;

  if (isLoading) {
    mainContent = `<div class="quiz-container-wrapper"><div class="loading">Loading...</div></div>`;
  } else if (isCompleted) {
    const correctAnswered = quizQuestions.filter(
      (q) => q.options.answered === q.options.correct
    ).length;
    mainContent = `<div class="quiz-container-wrapper">${Congrats({
      correctAnswered,
    })}</div>`;
  } else {
    const questionButtonsHtml = Array.from({ length: 10 })
      .map((_, i) =>
        QuestionButton({
          number: i + 1,
          isActive:
            questionId === i ||
            quizQuestions[i]?.options.answered !== undefined,
        })
      )
      .join("");
    const questionComponentHtml = QuestionComponent({
      questionData: quizQuestions[questionId],
    });
    mainContent = `
            <div class="quiz-container-wrapper">
                <div class="quiz-container">
                    <div class="quiz-header">
                        <div class="quiz-title">Country Quiz</div>
                        <div class="question-buttons">
                            ${questionButtonsHtml}
                        </div>
                    </div>
                    ${questionComponentHtml}
                </div>
            </div>
        `;
  }

  appContainer.innerHTML = mainContent;
}
