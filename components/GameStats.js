function GameStatsItem({ score, name }) {
  return `
        <li class="stats-item">
            <span>${name || "hero"}</span>
            <span>${score}</span>
        </li>
    `;
}

export function GameStats({ history }) {
  if (!history || history.length === 0) {
    return "";
  }

  const itemsHtml = history.map((item) => GameStatsItem(item)).join("");

  return `
        <div class="stats-container">
            <h2 class="stats-title">Recent Games</h2>
            <ul class="stats-list">
                ${itemsHtml}
            </ul>
            <div class="stats-footer">
                <button class="clear-stats-button" onclick="handleClearStats()">Clear Stats</button>
            </div>
        </div>
    `;
}
