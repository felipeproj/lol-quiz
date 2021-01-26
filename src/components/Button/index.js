import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    color: ${({ theme }) => theme.colors.secondary.contrastText};
    font-weight: bold;
    height: 35px;
    margin-top: 20px;
    border: 1px solid ${({ theme }) => theme.colors.secondary.main};
    background-color: ${({ theme }) => theme.colors.mainBg};

    cursor: pointer;
    transition: .3s ease all;
    
`;

export const HoverButton = styled.div`
    ${Button}:hover {
        letter-spacing: 0.1em;
        color: ${({ theme }) => theme.colors.mainBg};
        border: 1px solid ${({ theme }) => theme.colors.secondary.light};
        background-color: ${({ theme }) => theme.colors.secondary.light};
    }
`;
