import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    color: ${({ theme }) => theme.colors.secondary.contrastText };
    font-weight: bold;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 10px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius };
    background-color: ${({ theme }) => theme.colors.secondary.light03 };

    cursor: pointer;
    transition: .3s ease all;
    
`;

export const HoverButton = styled.div`
    ${Button}:hover {
        background-color: ${({ theme }) => theme.colors.secondary.light };
    }
`;