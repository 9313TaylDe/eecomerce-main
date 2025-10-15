import { Route, Router, Routes } from "react-router-dom";
import AuthProvider, { AuthContext } from "./Components/Authentication";
import Body from "./Components/Body";
import Header from "./Components/Header";
import LoginPage from "./Components/LoginPage";
import Rout from "./Components/Routes";
import "./index.css";
import { useContext } from "react";

const App = () => {
  return (
    <AuthProvider>
      <div className="flex w-full min-h-[10vh] p-2 justify-center items-center flex-wrap gap-2">
        <Rout />
      </div>
    </AuthProvider>
  );
};

export default App;
