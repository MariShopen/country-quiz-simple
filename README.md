# Country Quiz

A fun and interactive quiz to test your geography knowledge by guessing a country from its capital city. This project is built from scratch using only vanilla HTML, CSS, and JavaScript.

## Live Demo

*[Link to your deployed game will go here]*

## Features

*   **Dynamic Gameplay**: Each round consists of 10 randomly selected questions.
*   **Interactive UI**: Navigate through questions, see your progress, and get instant visual feedback on your answers.
*   **Score Tracking**: See your final score at the end of the quiz.
*   **Local History**: Your recent game scores are saved in your browser's `localStorage`.
*   **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.
*   **Pure JavaScript**: Built without any external frameworks or libraries.

## Technologies Used

*   **HTML5**: For the structure of the application.
*   **CSS3**: For all styling, including a responsive layout using Flexbox and Media Queries. CSS Variables are used for easy theming.
*   **Vanilla JavaScript (ES6+)**: For all game logic, state management, DOM manipulation, and component-based rendering. The project uses ES6 Modules to organize the code.

---

## Project Assignment Constraints

This project was developed as part of an assignment with the following requirements:

*   Be built only using **HTML, CSS and vanilla JavaScript**.
*   **Not use external libraries** (e.g. Bootstrap, React, Jekyll themes).
*   Be **original and engaging** (e.g. not made solely using a tutorial, but it can be inspired by existing games).
*   **Actually work!** The game must be fully playable once deployed.

---

## How to Run Locally

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/country-quiz-vanilla.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd country-quiz-vanilla
    ```

3.  **Open the project with a local server:**

    Since this project uses ES6 Modules (`import`/`export`), you need to serve the files from a local web server to avoid CORS errors. The easiest way to do this is with the **Live Server** extension in Visual Studio Code.

    Alternatively, you can use Python's built-in server:

    ```bash
    # If you have Python 3.x
    python -m http.server
    ```

    Then, open your browser and go to `http://localhost:8000` (or the address provided by Live Server).

## File Structure

The project is organized with a clear and modular structure:

```
/
├── components/
│   ├── AnswerButton.js
│   ├── Congrats.js
│   ├── GameStats.js
│   ├── QuestionButton.js
│   └── QuestionComponent.js
├── data/
│   └── countries.js
├── img/
│   ├── Check_round_fill.svg
│   ├── Close_round_fill.svg
│   └── congrats.svg
├── index.html
├── README.md
├── script.js
└── style.css
```

*   `index.html`: The main HTML file and entry point for the application.
*   `style.css`: Contains all the styles for the application, including responsive design.
*   `script.js`: The core JavaScript file that manages the application state, game logic, and rendering.
*   `data/countries.js`: A local data file containing country information (name, capital, etc.).
*   `components/`: A directory with JavaScript functions that act as UI components, each returning an HTML string to be rendered.
*   `img/`: Contains all static image assets and icons used in the UI.

---