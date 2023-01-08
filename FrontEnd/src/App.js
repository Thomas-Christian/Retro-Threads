import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignUpForm from "./components/user/SignUpForm";
import LoginForm from "./components/user/LoginForm";
import CurrentUserProvider from "./contexts/CurrentUser";

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/user/sign-up" element={<SignUpForm />} />
          <Route exact path="/user/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
