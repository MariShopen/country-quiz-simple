import { AnswerButton } from "./AnswerButton.js";

export function QuestionComponent({ questionData }) {
  if (!questionData) {
    return '<div class="question-component"></div>';
  }

  const { question, options } = questionData;

  const answersHtml = options.all
    .map((country) => {
      return AnswerButton({
        country,
        isClicked: options.answered === country,
        disabled: options.disabled,
        isCorrect: options.correct === country,
        isAnswered: options.answered != null,
      });
    })
    .join("");

  return `
        <div class="question-component">
            <div class="question-text">${question}</div>
            <div class="answers">${answersHtml}</div>
        </div>
    `;
}
