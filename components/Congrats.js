export function Congrats({ correctAnswered }) {
  return `
          <div class="congrats-container">
            <div class="congrats-content">
                <img
                    src="./img/congrats.svg"
                    alt="Congratulations"
                    width="349"
                    height="107"
                />
                <div class="congrats-title">
                    Congrats! You completed the quiz
                </div>
                <div class="congrats-score">You answer ${correctAnswered}/10 correctly</div>
                <button class="play-again-button" onclick="handleRestart()">
                    Play Again
                </button>
            </div>
        </div>
    `;
}
