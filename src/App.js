import './App.css';
import Private from 'components/Private/Private';
import { Route, Routes } from 'react-router-dom';
import HomeLoginPage from './components/HomeLoginPage';
import PrivateRouteWrapper from './components/Private/PrivateRouteWrapper/PrivateRouteWrapper';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLoginPage />} />
        <Route path="/LoggedOrder" element={<Private />}>
          <Route
            path="/LoggedOrder/Order/*"
            element={<PrivateRouteWrapper />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
