import React, { useEffect, useState } from 'react';
import quizService from '../quizService';
import { capitalize } from '../utils';

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
        if(category !== 0) config.category = category;
        if(difficulty !== 'Any Difficulty') config.difficulty = difficulty;
        onStart(config);
    }

    return (
        <div>
            <div>
                Select Category: <br />
                <select onChange={handleCategoryChange}>
                    {categories.map(cat => (
                        <option value={cat.id} key={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>
            <div>
                Select Difficulty: <br />
                <select value={difficulty} onChange={handleDifficultyChange}>
                    {diffLevels.map(level => (
                        <option key={level} value={level}>{capitalize(level)}</option>
                    ))}
                </select>
            </div>
            <button onClick={startQuiz}>Start</button>
        </div>
    );
}