function Icon({ isClicked, isCorrect, isAnswered }) {
  if (!isAnswered) {
    return "";
  }

  if (isCorrect) {
    return `<img src="./img/Check_round_fill.svg" alt="Correct" width="20" height="20">`;
  }

  if (isClicked) {
    return `<img src="./img/Close_round_fill.svg" alt="Incorrect" width="20" height="20">`;
  }

  return "";
}

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
            ${Icon({ isClicked, isCorrect, isAnswered })}
        </button>
    `;
}
