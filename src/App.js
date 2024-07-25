import logo from './logo.svg';
import './App.scss';
import { Paper } from '@mui/material';
import { Routes,Route } from 'react-router-dom';
import { LoginComponent } from './auth/loginComponent';
import { PagesComponent } from './pages/pagesComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent />}/>
        <Route path='/login' element={<LoginComponent />}></Route>
        <Route path='/pages/*' element={<PagesComponent />}/>
      </Routes>
    
    </div>
  );
}

export default App;
