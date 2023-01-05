import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/user/signup" element={ <SignUpForm/> } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;