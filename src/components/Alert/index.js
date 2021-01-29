import styled from 'styled-components';

const AlertBase = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 15px;
    line-height:  40px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.1rem;
    padding: auto;

    &.success {
        border: 1px solid ${({ theme }) => theme.colors.success.border};
        background-color: ${({ theme }) => theme.colors.success.bg};
        color: ${({ theme }) => theme.colors.success.contrastText};
    }

    &.failed {
        border: 1px solid ${({ theme }) => theme.colors.failure.border};
        background-color: ${({ theme }) => theme.colors.failure.bg};
        color: ${({ theme }) => theme.colors.failure.contrastText};
    }
`;

export default function Alert({ content = 'Mensagem do alerta', classList = "", ...props }) {
    return (
        <AlertBase 
            className={classList}
            {...props}
        >
            {content}
        </AlertBase>
    )
}