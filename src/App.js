import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthContextProvider } from "./context/auth";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;