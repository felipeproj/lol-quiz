import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.primary.light};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.mainBg};
    padding: 7px 20px;
    color: ${({ theme }) => theme.colors.primary.contrastText};
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.1rem;
    transition: .3s ease all;
    min-height: 35px;

    &:hover, &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary.dark};
    }

    &:focus {
        outline: 0;
        background-color: ${({ theme }) => theme.colors.primary.dark03};
    }

    &:empty {
        letter-spacing: 0.05rem;
    }

`;

export default Input;