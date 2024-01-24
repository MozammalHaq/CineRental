import Header from "./Header";
import Sidebar from "./Sidebar";
import Movielist from "./cine/Movielist";

export default function App() {
  return (
    <>
      <Header />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <Movielist />
      </div>
    </>
  );
}
