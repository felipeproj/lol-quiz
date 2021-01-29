import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.primary.light};
    border-radius: 20px;
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
    &:focus::-webkit-input-placeholder {
        color: transparent;
    }
    &:focus:-moz-placeholder { /* Firefox 18- */
        color: transparent;  
    }
    &:focus::-moz-placeholder {  /* Firefox 19+ */
        color: transparent;  
    }
    &:focus:-ms-input-placeholder {  
        color: transparent;  
    }

    &:empty {
        letter-spacing: 0.05rem;
    }
`;

export default function Input({ onChange, placeholder, autocomplete, ...props }) {
    return (
        <div>
            <InputBase
                onChange={onChange}
                placeholder={placeholder}
                autocomplete={autocomplete}
                {...props} 
            />
        </div>
    )
};

Input.defaultProps = {
    value: '',
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}