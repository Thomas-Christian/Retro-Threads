import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import SignUpForm from "./components/user/SignUpForm";
import LoginForm from "./components/user/LoginForm";
import CurrentUserProvider from "./contexts/CurrentUser";
import NewItem from "./components/items/NewItem";
import UserProfile from "./components/user/UserProfile"; 

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={ <Home />} />


          <Route path="/user/sign-up" element={ <SignUpForm /> } />
          <Route path="/user/login" element={ <LoginForm /> } />
          <Route path="user/:id" element={ <UserProfile /> } />

          <Route path="/item/new" element={ <NewItem /> } />

        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
