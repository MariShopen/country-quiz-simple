import { QuestionComponent } from "./components/QuestionComponent.js";

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