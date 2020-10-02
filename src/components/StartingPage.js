import React, { useEffect, useState } from 'react';
import quizService from '../quizService';
import { capitalize } from '../utils';
import { StartingWrapper, StyledSelect, StyledLabel, StyledButton, StartingHeading } from './styled';

export default function StartingPage({ onStart }) {
    const [category, setCategory] = useState(0);
    const [difficulty, setDifficulty] = useState('Any Difficulty');
    const [categories, setCategories] = useState([{ id: 0, name: 'Any Category' }]);

    useEffect(() => {
        quizService.fetchCategories()
            .then(trivia => {
                setCategories([...categories, ...trivia.trivia_categories]);
            });
    }, []);

    const diffLevels = ['Any Difficulty', 'easy', 'medium', 'hard'];

    function handleDifficultyChange(e) {
        setDifficulty(e.target.value)
    }

    function handleCategoryChange(e) {
        setCategory(parseInt(e.target.value));
    }

    function startQuiz() {
        const config = {};
        if (category !== 0) config.category = category;
        if (difficulty !== 'Any Difficulty') config.difficulty = difficulty;
        onStart(config);
    }

    return (
        <StartingWrapper>
            <StartingHeading>Welcome to trivia quiz!</StartingHeading>
            <div>
                <StyledLabel>Select Category:</StyledLabel>
                <StyledSelect onChange={handleCategoryChange}>
                    {categories.map(cat => (
                        <option value={cat.id} key={cat.id}>{cat.name}</option>
                    ))}
                </StyledSelect>
            </div>
            <div>
                <StyledLabel>Select Difficulty:</StyledLabel>
                <StyledSelect value={difficulty} onChange={handleDifficultyChange}>
                    {diffLevels.map(level => (
                        <option key={level} value={level}>{capitalize(level)}</option>
                    ))}
                </StyledSelect>
            </div>
            <StyledButton onClick={startQuiz}>Start</StyledButton>
        </StartingWrapper>
    );
}