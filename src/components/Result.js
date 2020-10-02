import React from 'react';
import { StyledButton, ResultWrapper } from './styled';

export default function Result({ correct, total, onRestart }) {
    return (
        <div>
            <ResultWrapper>You got {correct}/{total}!</ResultWrapper>
            <StyledButton onClick={onRestart}>Start Again</StyledButton>
        </div>
    );
}