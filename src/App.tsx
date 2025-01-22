import { useBranding } from './branding/useBranding';
import { ThemeProvider } from 'styled-components';
import { createTheme } from './theme/createTheme';
import './App.css'

const App = () =>  {
  const { brand, loading } = useBranding("9");
  const theme = createTheme(brand);

  return (
    <ThemeProvider theme={theme}>
      {!loading && 
      <p>
        Qik Serve Aplicatio {theme.name}
      </p>}
  </ThemeProvider>

  )
}


export default App
