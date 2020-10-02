import React, { useEffect, useState } from 'react';
import { shuffle } from '../utils';
import { StyledButton, QuestionWrapper, AnswerWrapper, Answer } from './styled';

export default function Question({ quest, onAnswer }) {
    const [answers, setAnswers]= useState([]);
    const [selected, setSelected] = useState('');
    useEffect(() => {
        setAnswers(shuffle([quest.correct_answer, ...quest.incorrect_answers]));
    }, [quest]);

    function submitAnswer() {
        onAnswer(selected);
        setSelected('');
    }
    
    return (
        <div>
            <QuestionWrapper dangerouslySetInnerHTML={{ __html: quest.question}}>
            </QuestionWrapper>
            <AnswerWrapper>
                {answers.map(ans => (
                    <Answer key={ans} onClick={() => setSelected(ans)} dangerouslySetInnerHTML={{ __html: ans}} active={selected === ans}>
                    </Answer>
                ))}
            </AnswerWrapper>
            <StyledButton disabled={!selected.length} onClick={submitAnswer}>Next</StyledButton>
        </div>
    );
}