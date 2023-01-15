import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyFlashcard from './components/MyFlashcard'
import FlashcardDetails from './components/FlashcardDetails';
import CreateFlashcard from './components/CreateFlashcard';
import Error from './components/Error';
import Header from './components/Header'
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<CreateFlashcard/>}/>
            <Route path='/MyFlashcard' element={<MyFlashcard/>}/>
            <Route path='/FlashcardDetails' element={<FlashcardDetails/>}/>
           
      </Route>
      <Route path='*' element={<Error/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
