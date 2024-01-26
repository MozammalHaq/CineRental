import { useContext } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Movielist from "./cine/Movielist";
import { ThemeContext } from "./context";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <Movielist />
      </div>
    </div>
  );
}
