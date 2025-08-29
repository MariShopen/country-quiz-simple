export function QuestionButton({ number, isActive }) {
  return `
        <button
            class="question-button ${isActive ? "active" : ""}"
            onclick="handleQuestionClick(${number - 1})"
        >
            ${number}
        </button>
    `;
}
