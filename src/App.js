import Navbar from "./components/navbar";
import "./App.css"
import SignUpPrompt from "./components/signupPrompt";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/signupPage";
import LoginPage from "./components/loginPage";
import { useLogout } from "./hooks/useLogout";
import { useUserContext } from "./hooks/useUserContext";
import HomePage from "./components/homePage";
function App() {
  const {user} = useUserContext()
  return (
      <BrowserRouter> 
        <div className="App">
          <Navbar />
          <Routes>
            {!user && <Route path="/" element={<SignUpPrompt/>}/>}
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>    
          <div className="footer"/>
        </div>
      </BrowserRouter>
  );
}

export default App;
