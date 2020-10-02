import styled, { createGlobalStyle, css } from 'styled-components';

export const themes = {
    dark: {
        colors: {
            primaryBg: '#1a1a2e',
            primaryText: '#ececec',
            secondaryBg: '#e94560',
            active: '#0f3460',
            buttonHover: '#ee6d82',
            answerhover: '#e94560'
        }
    },
    light: {
        colors: {
            primaryBg: '#fff0f0',
            primaryText: '#463333',
            secondaryBg: '#ebd4d4',
            active: '#ebd4d4',
            buttonHover: '#b89494',
            answerhover: '#835858'
        }
    }
};

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto;
    }

    #root {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.colors.primaryBg};
    }
`;

export const MainWrapper = styled.div`
    padding: 5rem;
    width: 800px;
    margin: 0 auto;
    @media (max-width: 500px) {
        padding: 0.5rem;
        width: 100%;
    }
`;

export const StartingWrapper = styled.div`
    padding: 1rem;
`;

export const StartingHeading = styled.h1`
    color: ${props => props.theme.colors.primaryText};
    font-weight: 600;
    margin: 1.5rem 0;
    @media (max-width: 500px) {
        font-size: 1.5rem;
    }
`;

export const StyledLabel = styled.label`
    display: block;
    font-size: 1.3em;
    margin: 0.5em 0;
    color: ${props => props.theme.colors.primaryText}
`;

export const StyledSelect = styled.select`
    font-size: 1.2em;
    display: block;
    width: 100%;
    padding: 0.6em;
    border-radius: 0.2em;
    border: 1px solid green;
    margin-bottom: 1.5em;
    background-color: white;
    @media (max-width: 500px) {
        padding: 0.3em;
        font-size: 1rem;
    }
`;

export const StyledButton = styled.button`
    font-size: 1.2rem;
    padding: .5em 2.2em;
    border: 3px solid white;
    border-radius: 4px;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    background-color: ${props => props.theme.colors.secondaryBg};
    color: ${props => props.theme.colors.primaryText};
    &:hover {
        background-color: ${props => props.theme.colors.buttonHover};
    }
    &:focus {
        outline: none;
    }
`;

export const QuestionWrapper = styled.div`
    padding: 3rem 0.2rem;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.primaryText};
    @media (max-width: 500px) {
        font-size: 1.5rem;
        padding: 1.5rem 1rem;
    }
`;

export const Answer = styled.div`
    padding: 1rem 2.5rem;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    ${props => props.active ?
        css`
            background-color: ${props => props.theme.colors.active};
            color: white;
            border-color: white;
        ` :
        css`
            border-color: ${props => props.theme.colors.primaryText};
            color: ${props => props.theme.colors.primaryText};
            &:hover {
                background-color: ${props => props.theme.colors.answerhover};
                color: black;
            }
        `
    }
    @media (max-width: 500px) {
        border-radius: 0;
        padding: 0.75rem 2rem;
        text-align: center;
    }
`;

export const AnswerWrapper = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 3rem;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        gap: 0.3rem;
        margin-bottom: 1.5rem;
        padding: 0.3rem;
        & ${Answer} {
            padding: 1rem 1rem;
        }
    }
`;

export const ResultWrapper = styled.div`
    margin: 0 auto;
    width: 75%;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.primaryText}
`;

export const ErrorMessage = styled.div`
    color: ${props => props.theme.colors.primaryText};
    padding: 0.5rem;
`;