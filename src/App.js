import Navbar from "./components/navbar";
import "./App.css"
import SignUpPrompt from "./components/signupPrompt";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/signupPage";
import LoginPage from "./components/loginPage";
import { UserContextProvider } from "./context/userContext";
import {  useLogin } from "./hooks/useLog";

function App() {
  const {logout} = useLogin()
  const handleLogout = async ()=>{
    await logout()
  }

  return (
    <UserContextProvider>
      <BrowserRouter> 
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<SignUpPrompt/>}/>
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>       
        <button onClick={handleLogout}> Log Out</button>
          <div className="footer"/>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
