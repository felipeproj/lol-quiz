import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 2px solid ${({ theme }) => theme.colors.primary.light };
  background-color: ${({ theme }) => theme.colors.mainBg08 };
  border-radius: ${({ theme }) => theme.borderRadius };
  overflow: hidden;

  h2, h1, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
  @media screen and (max-width: 1024px) {
    background-color: ${({ theme }) => theme.colors.mainBg098 };
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary.light };

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  background-color: ${({theme}) => theme.colors.mainBg};
  outline: 0;
  text-decoration: none;
  color: ${({theme}) => theme.colors.primary.contrastText};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  /* border-radius: ${({theme}) => theme.borderRadius}; */
  transition: .3s;
  display: block;

  input {
    display: none;
  }
`;

export default Widget;