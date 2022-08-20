import './App.css';
import Button from './components/Button';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import AdminPannel from './components/AdminPannel';

import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
    
      <TopBar />
      <Nav />

      <MainContent />
    </div>
  );
}

export default App;
