import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import SignUpForm from "./components/user/SignUpForm";
import LoginForm from "./components/user/LoginForm";
import CurrentUserProvider from "./contexts/CurrentUser";
import NewItem from "./components/items/NewItem";
import UserProfile from "./components/user/UserProfile"; 
import ViewItems from "./components/items/ViewItems";
import ViewSingleItem from "./components/items/ViewSingleItem";
import ViewStyles from "./components/items/ViewStyles";

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        
        <Navigation />

        <Routes>
          
          <Route exact path="/" element={ <Home />} />

          <Route path="/users/sign-up" element={ <SignUpForm /> } />
          <Route path="/users/login" element={ <LoginForm /> } />
          <Route path="/users/:id" element={ <UserProfile /> } />
        
          <Route path="/items/new" element={ <NewItem /> } />
          <Route path='/items/view/all' element={ <ViewItems />} />
          <Route path="/items/view/:id" element={ <ViewSingleItem /> } />
          <Route path="/items/style/:style" element={ <ViewStyles /> } />

        </Routes>

      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
