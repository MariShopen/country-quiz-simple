export function AnswerButton({
  country,
  isClicked,
  disabled,
  isCorrect,
  isAnswered,
}) {
  let classes = "answer-button";
  if (isClicked) {
    classes += " answered";
  }

  return `
        <button class="${classes}" onclick="handleUserAnswer('${country.replace(
    /'/g,
    "\\'"
  )}')" ${disabled ? "disabled" : ""}>
            ${country}
        </button>
    `;
}
