
import { BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Header from './components/header';
import Menu from './components/menu';
import Home from './components/home';
import Body2 from './components/body2';
import Body from './components/body';
import Footer from './components/footer';


const theme = createTheme();

const AppRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Menu />
          <Home />
          <Body/>
          <Body2 />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default AppRoutes;
