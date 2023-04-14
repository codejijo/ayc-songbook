import { ThemeProvider } from '@mui/material';
import theme from './themes/theme';
import Layout from './views/layouts';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  )
}

export default App
