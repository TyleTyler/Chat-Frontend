import Navbar from "./components/navbar";
import "./App.css"
import SignUpPrompt from "./components/signupPrompt";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/signupPage";
import LoginPage from "./components/loginPage";
import { useLogout } from "./hooks/useLogout";
function App() {
  const {logout} = useLogout()
  
  return (
      <BrowserRouter> 
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<SignUpPrompt/>}/>
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>    
          <button onClick={logout}> Log out</button>
          <div className="footer"/>
        </div>
      </BrowserRouter>
  );
}

export default App;
