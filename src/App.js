
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import './scss/style.scss';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import { BrowserRouter as Router} from 'react-router-dom';
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Vazir',
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});
function App() {

  return (
    <Router>  
      <ThemeProvider theme={theme}>
      <div className="App">   
          <Navbar/>
          <Main/>
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
