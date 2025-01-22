import { useBranding } from './branding/useBranding';
import { useMenu } from './menu/useMenu';
import { ThemeProvider } from 'styled-components';
import { createTheme } from './theme/createTheme';
import './App.css'

const App = () =>  {
  const { brand, loading } = useBranding("9");
  const theme = createTheme(brand);
  const { menu } = useMenu()
  console.log(menu)
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
