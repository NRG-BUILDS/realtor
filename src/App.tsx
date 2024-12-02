import Navbar from "./components/ui/navbar";
import { Toaster } from "./components/ui/toaster";
import Conference from "./pages/Conference/Conference";

function App() {
  return (
    <>
      <Toaster />
      <div className="relative">
        <Navbar />
        <Conference />
      </div>
    </>
  );
}

export default App;
