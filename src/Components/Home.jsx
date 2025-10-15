import Header from "./Header";
import Body from "./Body";
import { useContext } from "react";
import { AuthContext } from "./Authentication";

const Home = () => {
  const { Logout } = useContext(AuthContext);
  return (
    <div className="flex w-full min-h-[10vh] p-2 justify-center items-center flex-wrap gap-2">
      <button onClick={Logout}>Logout</button>
      <Header />
      <Body />
    </div>
  );
};

export default Home;
