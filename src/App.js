
import './App.css';
import { useTheme } from './ThemeProvider';
import { useLocalStorage } from './hooks';

function App() {
  const state = useTheme()
  console.log(state);

  const [value, setValue] = useLocalStorage("name", "anhdo")

  return (
    <div className="App">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default App;
