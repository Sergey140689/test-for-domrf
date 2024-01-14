import {ReactNode} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';

const theme = {
  tableHeaderColor: 'darkBlue',
  tableHeaderTextColor: 'white',
};

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #F3F4FF;
}
`;

export const Theme = ({children}: {children: ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
