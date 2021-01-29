/* eslint-disable react/react-in-jsx-scope */
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Inconsolata', monospace;
    color: ${({ theme }) => theme.colors.primary.contrastText }
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;   
  }
`;

const theme = db.theme

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quiz - League of Legends</title>

        <meta name="title" content="QUIZ — League of Legends" />
        <meta name="description" content="Teste seus conhecimentos gerais de League of Legends!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={db.bg} />
        <meta property="og:title" content="QUIZ — League of Legends" />
        <meta property="og:description" content="Teste seus conhecimentos gerais de League of Legends!" />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={db.bg} />
        <meta property="twitter:title" content="QUIZ — League of Legends" />
        <meta property="twitter:description" content="Teste seus conhecimentos gerais de League of Legends!" />
        <meta property="twitter:image" content={db.bg} />

        <link rel="icon" type="image/png" href="https://img.pngio.com/leauge-of-legends-icon-420180-free-icons-library-league-of-legends-icon-png-512_512.jpg"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
