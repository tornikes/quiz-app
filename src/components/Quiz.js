import React, { useEffect, useState } from 'react';
import quizService from '../quizService';
import { computeCorrects } from '../utils';
import Question from './Question';
import Result from './Result';
import { ErrorMessage } from './styled';

export default function Quiz({ config, onRestart }) {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [fetchFailed, setFetchFailed] = useState(false);

    useEffect(() => {
        quizService.fetchQuestions(config)
            .then(response => {
                if(response.data.response_code === 0) { 
                    setQuestions(response.data.results) 
                } else {
                    setFetchFailed(true);
                    setTimeout(onRestart, 5000);
                }
            })
    }, []);

    function submitAnswer(answer) {
        setAnswers(answers.concat(answer));
        setCurrent(current + 1);
    }

    function corrects() {
        return computeCorrects(questions.map((q, i) => [q.correct_answer, answers[i]]));
    }

    if (questions.length) {
        return (
            <div>
                {current < questions.length ?
                    <Question quest={questions[current]} onAnswer={submitAnswer} /> :
                    <Result
                        total={questions.length}
                        correct={corrects()}
                        onRestart={onRestart}
                    />
                }
            </div>
        );
    } else if (fetchFailed) {
        return (
            <ErrorMessage>
                <h2>There don't seem to be enough questions in that category for that level of difficulty :/</h2>
                <p>You will be returned to start page in 5 seconds</p>
            </ErrorMessage>
        );
    } else {
        return null;
    }
}