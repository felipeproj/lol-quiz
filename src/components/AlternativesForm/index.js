import styled from 'styled-components';

const AlternativesForm = styled.form`
    label {
        &[data-selected="true"] {
            background-color: ${({theme}) => theme.colors.primary.light};

            &[data-status="ERROR"] {
                background-color: ${({ theme }) => theme.colors.failure.topic}
            }
        }

        &[data-status="SUCCESS"] {
            background-color: ${({ theme }) => theme.colors.success.topic}
        }

        &[data-disabled="true"] {
            cursor: default;
        }
        &[data-disabled="false"] {
            &:hover,
            &:focus {
                opacity: .5;
            }
        }

        &[data-read-only="true"] {
            cursor: default;
            &:hover,
            &:focus {
                opacity: .5;
            }
        }
    }
`;

export default AlternativesForm;