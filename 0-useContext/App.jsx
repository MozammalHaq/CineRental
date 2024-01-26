import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Movielist from "./cine/Movielist";
import { MovieContext } from "./context";

export default function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <Movielist />
        </div>
      </MovieContext.Provider>
    </>
  );
}
