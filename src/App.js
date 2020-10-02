import React, { useState } from 'react';
import Quiz from './components/Quiz';
import StartingPage from './components/StartingPage';
import { MainWrapper, GlobalStyles } from './components/styled';
import { ThemeProvider } from 'styled-components';
import { themes } from './components/styled';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
    const initialConfig = {
        category: 0,
        difficulty: 'Any Difficulty'
    };
    const [theme, setTheme] = useState('dark');
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
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyles />
            <ThemeSwitch  theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            <MainWrapper>
                {!started ? <StartingPage onStart={onStart} /> : <Quiz config={quizConfig} onRestart={onRestart} />}
            </MainWrapper>
        </ThemeProvider>
    );
}

export default App;
