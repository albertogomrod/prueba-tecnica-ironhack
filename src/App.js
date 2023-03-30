import { Route, Routes } from "react-router-dom";
import "./App.css";

//Componentes
import Navbar from "./components/Navbar";

//Páginas
import Home from "./pages/Home";
import PhoneList from "./pages/PhoneList";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phone-list" element={<PhoneList />} />

        {/* error FE routes */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
