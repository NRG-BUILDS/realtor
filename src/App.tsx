import Navbar from "./components/ui/navbar";
import Conference from "./pages/Conference/Conference";

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Conference />
      </div>
    </>
  );
}

export default App;
