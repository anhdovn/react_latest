
import './App.css';
import { useTheme } from './ThemeProvider';

function App() {
  const state = useTheme()
  console.log(state);
  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
