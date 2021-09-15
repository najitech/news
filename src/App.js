import './App.css';
import Rss from './components/Rss/Rss';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
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
        <Rss/>  
    </div>
    </ThemeProvider>
  );
}

export default App;
