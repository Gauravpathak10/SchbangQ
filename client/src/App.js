
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBook from './components/Books/AddBook';
import Books from './components/Books/Books';
import EditBooks from './components/Books/EditBooks';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/books' element={<Books />} />
        <Route path='/Edit/:id' element={<EditBooks />} />
        <Route path='/add' element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
