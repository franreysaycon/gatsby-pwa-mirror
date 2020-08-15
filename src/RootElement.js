import React from 'react'
import GlobalStyles from './GlobalStyles'
import { ThemeProvider } from "styled-components"
import theme from './theme'
import 'typeface-lato'

const RootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
);

export default RootElement
