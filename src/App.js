import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
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
    <ThemeProvider theme={theme}>
    <div className="App">   
        <Navbar/>
        <Main/>
    </div>
    </ThemeProvider>
  );
}

export default App;
