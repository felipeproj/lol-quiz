import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    color: ${({ theme }) => theme.colors.secondary.contrastText};
    font-weight: bold;
    height: 35px;
    margin-top: 25px;
    border: 1px solid ${({ theme }) => theme.colors.secondary.light};
    background-color: ${({ theme }) => theme.colors.mainBg};
    transition: .3s ease all;

    &:disabled {
        letter-spacing: 0em;
        color: rgb(130, 130, 130);
        border: none;
        background-color: ${({ theme }) => theme.colors.mainBg};
        cursor: default;
    }

    &:enabled {
        &:hover {
            letter-spacing: 0.1em;
            /* color: ${({ theme }) => theme.colors.mainBg}; */
            border: 1px solid ${({ theme }) => theme.colors.secondary.light};
            background-color: ${({ theme }) => theme.colors.secondary.light};
            cursor: pointer;
        }
    }
`;

export default Button;