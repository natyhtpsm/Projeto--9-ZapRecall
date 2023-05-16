import './App.css'
import GlobalStyle from './components/GlobalStyle.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Game from './pages/game';


function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
};

export default App
