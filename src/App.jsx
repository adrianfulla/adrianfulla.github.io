import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss'
import { SessionProvider } from './context/SessionContext';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="app">
      <Router>
        <SessionProvider>
          <MainPage />
        </SessionProvider>
      </Router>
    </div>
  );
}

export default App;
