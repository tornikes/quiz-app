import React, { useState } from 'react';
import Quiz from './components/Quiz';
import StartingPage from './components/StartingPage';

function App() {
    const initialConfig = {
        category: 0,
        difficulty: 'Any Difficulty'
    };

    const [started, setStarted] = useState(false);
    const [quizConfig, setQuizConfig] = useState(initialConfig);

    function onStart(config) {
        setQuizConfig(config);
        setStarted(true);
    }

    function onRestart() {
        setStarted(false);
        setQuizConfig(initialConfig)
    }

    return (
        <div>
            {!started ? <StartingPage onStart={onStart} /> : <Quiz config={quizConfig} onRestart={onRestart} />}
        </div>
    );
}

export default App;
