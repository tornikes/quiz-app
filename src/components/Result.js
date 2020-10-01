import React from 'react';

export default function Result({ correct, total, onRestart }) {
    return (
        <div>
            <div>You got {correct}/{total}!</div>
            <button onClick={onRestart}>Start Again</button>
        </div>
    );
}