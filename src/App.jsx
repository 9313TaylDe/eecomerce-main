import { Route, Router, Routes } from "react-router-dom";
import AuthProvider, { AuthContext } from "./Components/Authentication";
import Body from "./Components/Body";
import Header from "./Components/Header";
import LoginPage from "./Components/LoginPage";
import Rout from "./Components/Routes";
import NewAutentication from "./Components/NewAuthentication";
import "./index.css";
import { useContext } from "react";
import NewRoutes from "./Components/NewRoutes";

const App = () => {
  return (
    <NewAutentication>
      <div className="flex w-full min-h-[10vh] p-2 justify-center items-center flex-wrap gap-2">
        <NewRoutes />
      </div>
    </NewAutentication>
  );
};

export default App;
