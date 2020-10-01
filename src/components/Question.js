import React, { useEffect, useState } from 'react';
import { shuffle } from '../utils';

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
            <div dangerouslySetInnerHTML={{ __html: quest.question}}>
            </div>
            <div>
                {answers.map(ans => (
                    <div key={ans} onClick={() => setSelected(ans)} dangerouslySetInnerHTML={{ __html: ans}}>
                    </div>
                ))}
            </div>
            <button disabled={!selected.length} onClick={submitAnswer}>Next</button>
        </div>
    );
}