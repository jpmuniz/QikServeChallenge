import { useBranding } from './branding/useBranding';
import { ThemeProvider } from 'styled-components';
import { createTheme } from './theme/createTheme';
import { Index } from './components/index';

const App = () =>  {
  const { brand, loading } = useBranding("9");
  const theme = createTheme(brand);
  
  return (
    <ThemeProvider theme={theme}>
      {!loading && 
        <Index />
      }
    </ThemeProvider>

  )
}


export default App
