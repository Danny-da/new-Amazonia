import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Header from './components/header';
import Menu from './components/menu';
import Home from './components/home';
import Footer from './components/footer';
import VistaEspecies from './components/VistaEspecies';
import BodyPi from './components/BodyPi';


const theme = createTheme();

const AppRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Especies" element={<VistaEspecies />} />
            <Route path="/Especies" element={<VistaEspecies />} />
            <Route path="/bodypi" element={<BodyPi />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default AppRoutes;
