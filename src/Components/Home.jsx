import Header from "./Header";
import Body from "./Body";
import { useContext } from "react";
import { AuthContext } from "./Authentication";
import { Context } from "./NewAuthentication";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const { Logout, Logado } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!Logado) {
      navigate("/");
    }
  }, [Logado, navigate]);
  const handleLogout = async () => {
    await Logout();
  };
  return (
    <div className="flex w-full min-h-[10vh] p-2 justify-center items-center flex-wrap gap-2">
      <button onClick={handleLogout}>Logout</button>
      <Header />
      <Body />
    </div>
  );
};

export default Home;
